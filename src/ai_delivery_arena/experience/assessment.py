"""Deterministic local competency assessment and final debrief generation."""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from ai_delivery_arena.engine.fixtures import FixtureBundle
from ai_delivery_arena.engine.models import DecisionRecord, Fact, GateStatus, RunInput, thaw_json
from ai_delivery_arena.engine.replay import ReplayEngine, ReplayResult

from .catalog import DecisionCatalogue


class AssessmentError(ValueError):
    """Raised when a completed run cannot be assessed against the rubric."""


@dataclass(frozen=True, slots=True)
class CriterionDefinition:
    id: str
    dimension: str
    name: str
    weight: float
    primary_decisions: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class CriterionResult:
    id: str
    name: str
    anchor: int
    score: int
    supporting_decisions: tuple[str, ...]
    contrary_decisions: tuple[str, ...]
    evidence_refs: tuple[str, ...]
    reason: str
    stronger_evidence: str

    def as_dict(self) -> dict[str, object]:
        return {
            "id": self.id,
            "name": self.name,
            "anchor": self.anchor,
            "score": self.score,
            "supporting_decisions": list(self.supporting_decisions),
            "contrary_decisions": list(self.contrary_decisions),
            "evidence_refs": list(self.evidence_refs),
            "reason": self.reason,
            "stronger_evidence": self.stronger_evidence,
        }


@dataclass(frozen=True, slots=True)
class DimensionResult:
    id: str
    label: str
    weight: float
    raw_score: float
    reported_score: float
    cap: int | None
    criteria: tuple[CriterionResult, ...]

    def as_dict(self) -> dict[str, object]:
        return {
            "id": self.id,
            "label": self.label,
            "weight": self.weight,
            "raw_score": self.raw_score,
            "reported_score": self.reported_score,
            "cap": self.cap,
            "criteria": [criterion.as_dict() for criterion in self.criteria],
        }


@dataclass(frozen=True, slots=True)
class AssessmentReport:
    run_id: str
    scenario: str
    recommendation: str
    scope_assessed: str
    release_valid: bool
    gates: tuple[dict[str, object], ...]
    dimensions: tuple[DimensionResult, ...]
    raw_overall: float
    reported_overall: float
    overall_cap: int | None
    provisional_label: str
    strengths: tuple[dict[str, object], ...]
    development_needs: tuple[dict[str, object], ...]
    perspectives: tuple[dict[str, object], ...]
    timeline: tuple[dict[str, object], ...]
    program_state: dict[str, float]
    ledger_head: str
    notice: str

    def as_dict(self) -> dict[str, object]:
        return {
            "run_id": self.run_id,
            "scenario": self.scenario,
            "recommendation": self.recommendation,
            "scope_assessed": self.scope_assessed,
            "release_valid": self.release_valid,
            "gates": list(self.gates),
            "dimensions": [dimension.as_dict() for dimension in self.dimensions],
            "raw_overall": self.raw_overall,
            "reported_overall": self.reported_overall,
            "overall_cap": self.overall_cap,
            "provisional_label": self.provisional_label,
            "strengths": list(self.strengths),
            "development_needs": list(self.development_needs),
            "perspectives": list(self.perspectives),
            "timeline": list(self.timeline),
            "program_state": self.program_state,
            "ledger_head": self.ledger_head,
            "notice": self.notice,
        }


_DIMENSIONS: tuple[tuple[str, str, str, float], ...] = (
    ("BV", "business_value", "Business value", 0.15),
    ("DC", "delivery_confidence", "Delivery confidence", 0.15),
    ("TI", "technical_integrity", "Technical integrity", 0.15),
    ("DR", "data_readiness", "Data readiness", 0.15),
    ("TG", "trust_governance", "Trust and governance", 0.15),
    ("FS", "financial_sustainability", "Financial sustainability", 0.10),
    ("UA", "user_adoption", "User adoption", 0.15),
)

_DIMENSION_BY_PREFIX = {
    prefix: (dimension_id, label, weight)
    for prefix, dimension_id, label, weight in _DIMENSIONS
}


def _expand_decisions(value: str) -> tuple[str, ...]:
    decisions: list[str] = []
    for token in (part.strip() for part in value.split(",")):
        match = re.fullmatch(r"D(\d{2})-D(\d{2})", token)
        if match:
            decisions.extend(
                f"D{index:02d}"
                for index in range(int(match.group(1)), int(match.group(2)) + 1)
            )
        elif re.fullmatch(r"D\d{2}", token):
            decisions.append(token)
    return tuple(dict.fromkeys(decisions))


def load_criterion_definitions(path: str | Path) -> tuple[CriterionDefinition, ...]:
    text = Path(path).read_text(encoding="utf-8")
    pattern = re.compile(
        r"^### ([A-Z]{2}\d)\. (.*?)\. (\d+)%\n\n(.*?)(?=^### [A-Z]{2}\d\.|^## \d+\.|\Z)",
        flags=re.MULTILINE | re.DOTALL,
    )
    definitions: list[CriterionDefinition] = []
    for criterion_id, name, weight, body in pattern.findall(text):
        primary = re.search(r"Primary decisions: ([^\.\n]+)", body)
        if primary is None:
            raise AssessmentError(f"{criterion_id} has no primary-decision contract")
        prefix = criterion_id[:2]
        if prefix not in _DIMENSION_BY_PREFIX:
            raise AssessmentError(f"{criterion_id} has an unknown dimension")
        definitions.append(
            CriterionDefinition(
                id=criterion_id,
                dimension=_DIMENSION_BY_PREFIX[prefix][0],
                name=name.strip(),
                weight=int(weight) / 100.0,
                primary_decisions=_expand_decisions(primary.group(1)),
            )
        )
    if len(definitions) != 28:
        raise AssessmentError(
            f"criterion contract must contain 28 criteria; found {len(definitions)}"
        )
    return tuple(definitions)


def _signature(fact: Fact) -> tuple[str, str, str]:
    return (
        fact.key,
        json.dumps(
            thaw_json(fact.value),
            ensure_ascii=False,
            sort_keys=True,
            separators=(",", ":"),
        ),
        fact.status.value,
    )


def _semantic_facts(record: DecisionRecord) -> tuple[Fact, ...]:
    return tuple(fact for fact in record.facts if not fact.key.startswith("response."))


def _response_values(record: DecisionRecord) -> dict[str, Any]:
    return {
        fact.key.removeprefix("response."): thaw_json(fact.value)
        for fact in record.facts
        if fact.key.startswith("response.")
    }


def _text_strength(value: Any, minimum: int) -> float:
    if not isinstance(value, str) or not value.strip():
        return 0.0
    return min(1.0, len(value.strip()) / minimum)


def _structure_strength(record: DecisionRecord) -> float:
    values = _response_values(record)
    parts = (
        _text_strength(record.summary, 90),
        _text_strength(values.get("assumptions"), 35),
        _text_strength(values.get("owner"), 8),
        _text_strength(values.get("acceptance_condition"), 45),
        _text_strength(values.get("risk"), 35),
    )
    return sum(parts) / len(parts)


def _evidence_refs(record: DecisionRecord) -> tuple[str, ...]:
    refs = {
        reference
        for fact in record.facts
        for reference in fact.evidence_refs
    }
    return tuple(sorted(refs))


class CompetencyAssessor:
    """Score a frozen completed attempt without using hidden program health."""

    def __init__(
        self,
        bundle: FixtureBundle,
        engine: ReplayEngine,
        catalogue: DecisionCatalogue,
        criteria: tuple[CriterionDefinition, ...],
    ):
        self.bundle = bundle
        self.engine = engine
        self.catalogue = catalogue
        self.criteria = criteria
        self._positive, self._negative = self._reference_signatures()

    def _reference_signatures(
        self,
    ) -> tuple[
        dict[str, frozenset[tuple[str, str, str]]],
        dict[str, frozenset[tuple[str, str, str]]],
    ]:
        positive: dict[str, set[tuple[str, str, str]]] = {}
        negative: dict[str, set[tuple[str, str, str]]] = {}
        for run_id in ("RR-A", "RR-B"):
            for record in self.bundle.reference_run(run_id).decisions:
                positive.setdefault(record.decision_id, set()).update(
                    _signature(fact) for fact in _semantic_facts(record)
                )
        for record in self.bundle.reference_run("RR-C").decisions:
            negative.setdefault(record.decision_id, set()).update(
                _signature(fact) for fact in _semantic_facts(record)
            )
        return (
            {key: frozenset(value) for key, value in positive.items()},
            {key: frozenset(value) for key, value in negative.items()},
        )

    def assess(self, run: RunInput) -> AssessmentReport:
        result = self.engine.replay_input(run, strict=True)
        if result.status.value != "completed":
            raise AssessmentError("a debrief requires a completed run")

        records = {record.decision_id: record for record in run.decisions}
        criterion_results = tuple(
            self._score_criterion(definition, records)
            for definition in self.criteria
        )
        dimensions = self._dimensions(criterion_results, result)
        raw_overall = round(
            sum(item.reported_score * item.weight for item in dimensions),
            1,
        )
        reported = (
            min(raw_overall, float(result.strictest_overall_cap))
            if result.strictest_overall_cap is not None
            else raw_overall
        )
        reported = round(reported, 1)

        ranked = sorted(
            (
                (criterion.score, criterion.id, criterion)
                for dimension in dimensions
                for criterion in dimension.criteria
            ),
            key=lambda item: (-item[0], item[1]),
        )
        strengths = tuple(
            {
                "criterion_id": criterion.id,
                "name": criterion.name,
                "score": criterion.score,
                "evidence": list(criterion.supporting_decisions),
                "why": criterion.reason,
            }
            for _, _, criterion in ranked[:3]
        )
        development_needs = tuple(
            {
                "criterion_id": criterion.id,
                "name": criterion.name,
                "score": criterion.score,
                "contrary_evidence": list(criterion.contrary_decisions),
                "priority": criterion.stronger_evidence,
            }
            for _, _, criterion in sorted(
                ranked,
                key=lambda item: (item[0], item[1]),
            )[:3]
        )

        final_record = records["D20"]
        final_response = _response_values(final_record)
        return AssessmentReport(
            run_id=run.run_id,
            scenario=(
                f"{self.bundle.scenario.title} "
                f"{self.bundle.scenario.identity.scenario_version}"
            ),
            recommendation=str(
                final_response.get("choice_label", final_record.summary)
            ),
            scope_assessed=final_record.summary,
            release_valid=bool(result.release_valid),
            gates=tuple(item.as_dict() for item in result.gate_adjudications),
            dimensions=dimensions,
            raw_overall=raw_overall,
            reported_overall=reported,
            overall_cap=result.strictest_overall_cap,
            provisional_label=_provisional_label(reported),
            strengths=strengths,
            development_needs=development_needs,
            perspectives=self._perspectives(dimensions, result),
            timeline=self._timeline(run, result),
            program_state=result.terminal_health.as_dict(ndigits=1),
            ledger_head=result.ledger.head_hash,
            notice=(
                "Alpha simulation assessment. The rubric is not independently "
                "calibrated, so this is not a benchmark result, certification, "
                "hiring signal, or proficiency claim."
            ),
        )

    def _score_criterion(
        self,
        definition: CriterionDefinition,
        records: dict[str, DecisionRecord],
    ) -> CriterionResult:
        relevant = tuple(records[item] for item in definition.primary_decisions)
        positive_decisions: list[str] = []
        negative_decisions: list[str] = []
        evidence_by_decision: dict[str, tuple[str, ...]] = {}
        structure: list[float] = []

        for record in relevant:
            signatures = {_signature(fact) for fact in _semantic_facts(record)}
            if signatures & self._positive.get(record.decision_id, frozenset()):
                positive_decisions.append(record.decision_id)
            if signatures & self._negative.get(record.decision_id, frozenset()):
                negative_decisions.append(record.decision_id)
            references = _evidence_refs(record)
            if references:
                evidence_by_decision[record.decision_id] = references
            structure.append(_structure_strength(record))

        positive_count = len(set(positive_decisions))
        negative_count = len(set(negative_decisions))
        average_structure = sum(structure) / len(structure)
        evidence_moments = len(evidence_by_decision)
        requested_evidence = {
            reference
            for references in evidence_by_decision.values()
            for reference in references
            if any(
                item.id == reference and item.cost > 0
                for item in self.bundle.evidence.items
            )
        }
        last_positive = max(
            (definition.primary_decisions.index(item) for item in positive_decisions),
            default=-1,
        )
        last_negative = max(
            (definition.primary_decisions.index(item) for item in negative_decisions),
            default=-1,
        )

        if negative_count >= max(1, len(relevant) // 2) and positive_count == 0:
            anchor = 0
        elif positive_count == 0:
            anchor = 1 if average_structure >= 0.40 else 0
        elif negative_count > positive_count and last_negative >= last_positive:
            anchor = 1
        else:
            anchor = 2
            if (
                positive_count >= min(2, len(relevant))
                and average_structure >= 0.65
                and evidence_moments >= 1
            ):
                anchor = 3
            if (
                positive_count >= min(3, len(relevant))
                and average_structure >= 0.85
                and evidence_moments >= 2
                and len(requested_evidence) >= 2
                and last_positive >= last_negative
            ):
                anchor = 4
            if negative_count and last_negative > last_positive:
                anchor = min(anchor, 2)

        all_refs = tuple(
            sorted(
                {
                    reference
                    for references in evidence_by_decision.values()
                    for reference in references
                }
            )
        )
        if anchor >= 3:
            reason = (
                f"Supported across {positive_count} relevant decision moments with "
                f"structured ownership or acceptance evidence and {evidence_moments} "
                "cited evidence moments."
            )
        elif anchor == 2:
            reason = (
                "A relevant action is recorded, but the evidence chain, response "
                "structure, or downstream integration remains partial."
            )
        elif anchor == 1:
            reason = (
                "The issue is acknowledged, but recorded actions do not yet establish "
                "a supported and controlled judgment."
            )
        else:
            reason = (
                "Recorded actions ignore or contradict the material control expected "
                "for this criterion."
            )

        missing: list[str] = []
        if average_structure < 0.65:
            missing.append("state the owner, assumptions, risk, and measurable acceptance condition")
        if evidence_moments == 0:
            missing.append("cite evidence available at the time of the decision")
        elif len(requested_evidence) < 2:
            missing.append(
                "use more than the free policy and source inventory to support integration"
            )
        if positive_count < min(2, len(relevant)):
            missing.append("connect the judgment across later decisions and consequences")
        if negative_count and last_negative >= last_positive:
            missing.append("record an explicit correction or containment after the contrary action")
        stronger = "; ".join(missing) if missing else (
            "Preserve the control while showing how it adapts under a later crisis."
        )

        return CriterionResult(
            id=definition.id,
            name=definition.name,
            anchor=anchor,
            score=anchor * 25,
            supporting_decisions=tuple(dict.fromkeys(positive_decisions)),
            contrary_decisions=tuple(dict.fromkeys(negative_decisions)),
            evidence_refs=all_refs,
            reason=reason,
            stronger_evidence=stronger,
        )

    def _dimensions(
        self,
        criterion_results: tuple[CriterionResult, ...],
        result: ReplayResult,
    ) -> tuple[DimensionResult, ...]:
        criteria_by_id = {item.id: item for item in criterion_results}
        caps: dict[str, int] = {}
        for gate in result.gate_adjudications:
            if gate.status is not GateStatus.FAIL:
                continue
            for dimension, cap in gate.dimension_caps:
                caps[dimension] = min(caps.get(dimension, 100), cap)

        dimensions: list[DimensionResult] = []
        for prefix, dimension_id, label, weight in _DIMENSIONS:
            definitions = tuple(
                definition
                for definition in self.criteria
                if definition.id.startswith(prefix)
            )
            criteria = tuple(criteria_by_id[item.id] for item in definitions)
            raw = round(
                sum(
                    criterion.anchor * 25.0 * definition.weight
                    for criterion, definition in zip(criteria, definitions, strict=True)
                ),
                1,
            )
            cap = caps.get(dimension_id)
            dimensions.append(
                DimensionResult(
                    id=dimension_id,
                    label=label,
                    weight=weight,
                    raw_score=raw,
                    reported_score=min(raw, float(cap)) if cap is not None else raw,
                    cap=cap,
                    criteria=criteria,
                )
            )
        return tuple(dimensions)

    def _perspectives(
        self,
        dimensions: tuple[DimensionResult, ...],
        result: ReplayResult,
    ) -> tuple[dict[str, object], ...]:
        scores = {item.id: item.reported_score for item in dimensions}
        failed = {
            item.gate_id
            for item in result.gate_adjudications
            if item.status is GateStatus.FAIL
        }
        definitions = (
            ("CIO", ("business_value", "delivery_confidence", "user_adoption"), {"G3", "G4"}),
            ("CISO", ("trust_governance", "technical_integrity", "data_readiness"), {"G1", "G2", "G7"}),
            ("CFO", ("financial_sustainability", "business_value", "delivery_confidence"), {"G5", "G6"}),
        )
        output: list[dict[str, object]] = []
        for role, dimensions_for_role, gates in definitions:
            score = round(
                sum(scores[item] for item in dimensions_for_role)
                / len(dimensions_for_role),
                1,
            )
            relevant_failures = tuple(sorted(failed & gates))
            if relevant_failures:
                view = (
                    f"Material concern. Gate{'s' if len(relevant_failures) > 1 else ''} "
                    f"{', '.join(relevant_failures)} failed and cannot be offset by "
                    "the aggregate score."
                )
            elif score >= 70:
                view = "The recommendation is broadly defensible within its recorded boundaries."
            elif score >= 50:
                view = "The direction is plausible, but material evidence or ownership remains partial."
            else:
                view = "The current evidence would not support an unqualified release recommendation."
            output.append(
                {
                    "role": role,
                    "score": score,
                    "failed_gates": list(relevant_failures),
                    "view": view,
                }
            )
        return tuple(output)

    def _timeline(
        self,
        run: RunInput,
        result: ReplayResult,
    ) -> tuple[dict[str, object], ...]:
        signals: dict[str, list[str]] = {}
        crises: dict[str, list[str]] = {}
        for entry in result.ledger.entries:
            if entry.decision_id and entry.kind.value == "rule_applied":
                signal = entry.payload.get("signal")
                if isinstance(signal, str) and signal:
                    signals.setdefault(entry.decision_id, []).append(signal)
            if entry.decision_id and entry.kind.value == "crisis_observed":
                observation = entry.payload.get("observation")
                if isinstance(observation, str):
                    crises.setdefault(entry.decision_id, []).append(observation)

        timeline: list[dict[str, object]] = []
        for record in run.decisions:
            response = _response_values(record)
            prompt = self.catalogue.get(record.decision_id)
            timeline.append(
                {
                    "decision_id": record.decision_id,
                    "title": prompt.title,
                    "stage": prompt.stage,
                    "choice": response.get("choice_label", response.get("choice_id", "")),
                    "rationale": record.summary,
                    "evidence_refs": list(_evidence_refs(record)),
                    "signals": signals.get(record.decision_id, []),
                    "crises": crises.get(record.decision_id, []),
                }
            )
        return tuple(timeline)


def _provisional_label(score: float) -> str:
    if score >= 85:
        return "Integrated"
    if score >= 70:
        return "Supported"
    if score >= 50:
        return "Developing"
    if score >= 25:
        return "Fragile"
    return "Unsafe/absent"
