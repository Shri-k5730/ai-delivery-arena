"""Deterministic reference-run replay orchestration."""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Any

from .evidence import EvidenceError, EvidencePortfolio
from .fixtures import FixtureBundle
from .gates import GateAdjudication, GateEvaluation, GateEvaluator
from .ledger import LedgerEventKind, RunLedger
from .models import (
    CrisisDefinition,
    Fact,
    FactStatus,
    GateExpectation,
    HealthState,
    PreparednessStatus,
    ReferenceRun,
    TransitionRule,
    thaw_json,
)
from .predicates import PredicateContext, predicate_matches


class ReplayError(ValueError):
    """Raised when a run violates the deterministic execution contract."""


class DecisionSequenceError(ReplayError):
    pass


class EvidenceUnavailableError(ReplayError):
    pass


class RuleSelectionError(ReplayError):
    pass


class PreparednessMismatchError(ReplayError):
    pass


class TerminalStateMismatchError(ReplayError):
    pass


class GateMismatchError(ReplayError):
    pass


@dataclass(frozen=True, slots=True)
class ResolvedCrisis:
    crisis_id: str
    status: PreparednessStatus
    week: int


@dataclass(frozen=True, slots=True)
class PublicRunView:
    """The first-attempt-safe projection. It intentionally has no health field."""

    run_id: str
    completed_decisions: tuple[str, ...]
    operational_signals: tuple[str, ...]
    crisis_observations: tuple[tuple[str, str], ...]


@dataclass(frozen=True, slots=True)
class ReplayResult:
    run_id: str
    terminal_route: str
    terminal_health: HealthState
    completed_decisions: tuple[str, ...]
    applied_rule_ids: tuple[str, ...]
    resolved_crises: tuple[ResolvedCrisis, ...]
    gate_observations: tuple[str, ...]
    gate_adjudications: tuple[GateAdjudication, ...]
    release_valid: bool
    strictest_overall_cap: int | None
    expected_gates: tuple[GateExpectation, ...]
    ledger: RunLedger
    public_view: PublicRunView

    def as_dict(self, include_hidden: bool = False) -> dict[str, Any]:
        result: dict[str, Any] = {
            "run_id": self.run_id,
            "terminal_route": self.terminal_route,
            "completed_decisions": list(self.public_view.completed_decisions),
            "operational_signals": list(self.public_view.operational_signals),
            "crisis_observations": [
                {"crisis_id": crisis_id, "observation": observation}
                for crisis_id, observation in self.public_view.crisis_observations
            ],
            "ledger_head": self.ledger.head_hash,
            "ledger_entries": len(self.ledger.entries),
        }
        if include_hidden:
            result["applied_rule_ids"] = list(self.applied_rule_ids)
            result["resolved_crises"] = [
                {
                    "crisis_id": item.crisis_id,
                    "status": item.status.value,
                    "week": item.week,
                }
                for item in self.resolved_crises
            ]
            result["terminal_health"] = self.terminal_health.as_dict(ndigits=1)
            result["gate_observations"] = list(self.gate_observations)
            result["computed_gates"] = [
                item.as_dict() for item in self.gate_adjudications
            ]
            result["release_valid"] = self.release_valid
            result["strictest_overall_cap"] = self.strictest_overall_cap
            result["expected_gates"] = [
                {
                    "gate_id": gate.gate_id,
                    "status": gate.status,
                    "reason": gate.reason,
                }
                for gate in self.expected_gates
            ]
        return result


class ReplayEngine:
    """Execute normalized decisions against one immutable fixture bundle."""

    def __init__(self, bundle: FixtureBundle):
        self.bundle = bundle
        self._decisions = {item.id: item for item in bundle.scenario.decisions}
        self._rules_by_decision: dict[str, tuple[TransitionRule, ...]] = {
            decision_id: tuple(
                rule
                for rule in bundle.transitions.rules
                if rule.decision_id == decision_id
            )
            for decision_id in self._decisions
        }
        self._crisis_after: dict[str, CrisisDefinition] = {
            crisis.trigger_after: crisis for crisis in bundle.crises.crises
        }
        self._gate_evaluator = GateEvaluator(bundle.gates)

    def replay_reference(self, run_id: str, strict: bool = True) -> ReplayResult:
        return self.replay(self.bundle.reference_run(run_id), strict=strict)

    def replay(self, run: ReferenceRun, strict: bool = True) -> ReplayResult:
        scenario = self.bundle.scenario
        portfolio = EvidencePortfolio(
            catalogue=self.bundle.evidence,
            schedule=run.investigation_schedule,
            credit_limit=scenario.run_config.investigation_credits,
        )
        expected_order = tuple(item.id for item in scenario.decisions)
        actual_order = tuple(item.decision_id for item in run.decisions)
        if actual_order != expected_order:
            raise DecisionSequenceError(
                f"{run.run_id}: decisions must execute in scenario order"
            )

        health = HealthState(scenario.health_model.initial_state)
        facts: tuple[Fact, ...] = ()
        completed: tuple[str, ...] = ()
        completed_set: frozenset[str] = frozenset()
        event_keys: frozenset[str] = frozenset()
        emitted_evidence: frozenset[tuple[str, str]] = frozenset()
        verified_evidence: frozenset[str] = frozenset()
        evidence_record_ids: frozenset[str] = frozenset()
        ledger = RunLedger()
        applied_rule_ids: tuple[str, ...] = ()
        resolved_crises: tuple[ResolvedCrisis, ...] = ()
        gate_observations: tuple[str, ...] = ()
        operational_signals: tuple[str, ...] = ()
        crisis_observations: tuple[tuple[str, str], ...] = ()
        expected_preparedness = {
            item.crisis_id: item.status for item in run.crisis_preparedness
        }

        for record in run.decisions:
            definition = self._decisions[record.decision_id]
            ledger, emitted_evidence, event_keys = self._sync_evidence_events(
                portfolio,
                definition.week,
                ledger,
                emitted_evidence,
                event_keys,
            )
            self._validate_evidence_refs(
                run_id=run.run_id,
                record=record,
                portfolio=portfolio,
                week=definition.week,
                completed=completed_set,
                observed_events=event_keys,
                evidence_record_ids=evidence_record_ids | {record.evidence_id},
            )

            ledger = ledger.append(
                LedgerEventKind.DECISION_RECORDED,
                week=definition.week,
                decision_id=record.decision_id,
                payload={
                    "evidence_id": record.evidence_id,
                    "summary": record.summary,
                    "facts": [
                        {
                            "key": fact.key,
                            "value": thaw_json(fact.value),
                            "status": fact.status.value,
                            "evidence_refs": list(fact.evidence_refs),
                        }
                        for fact in record.facts
                    ],
                },
            )
            facts += record.facts
            completed += (record.decision_id,)
            completed_set = frozenset(completed)
            event_keys |= {f"decision.{record.decision_id}.completed"}
            evidence_record_ids |= {record.evidence_id}

            for request in portfolio.schedule:
                if (
                    request.first_use == record.decision_id
                    and request.evidence_id not in verified_evidence
                    and request.arrival_week <= definition.week
                ):
                    ledger = ledger.append(
                        LedgerEventKind.EVIDENCE_VERIFIED,
                        week=definition.week,
                        decision_id=record.decision_id,
                        payload={"evidence_id": request.evidence_id},
                    )
                    verified_evidence |= {request.evidence_id}
                    event_keys |= {f"evidence.{request.evidence_id}.verified"}

            context = PredicateContext(
                facts=facts,
                evidence=portfolio,
                week=definition.week,
                completed_decisions=completed_set,
                event_keys=event_keys,
            )
            winners = self._transition_winners(record.decision_id, context)
            selected_ids = tuple(sorted(record.selected_rule_ids))
            winner_ids = tuple(rule.rule_id for rule in winners)
            if strict and selected_ids != winner_ids:
                raise RuleSelectionError(
                    f"{run.run_id}/{record.decision_id}: recorded rules {selected_ids} "
                    f"do not match executable winners {winner_ids}"
                )

            for rule in winners:
                before = health
                health = health.apply_all(rule.effects, scenario.health_model.precision)
                ledger = ledger.append(
                    LedgerEventKind.RULE_APPLIED,
                    week=definition.week,
                    decision_id=record.decision_id,
                    payload={
                        "rule_id": rule.rule_id,
                        "effects": [
                            {
                                "dimension": effect.dimension,
                                "authored_effect": effect.authored_effect,
                            }
                            for effect in rule.effects
                        ],
                        "health_before": before.as_dict(),
                        "health_after": health.as_dict(),
                        "signal": rule.signal,
                        "gate_implications": list(rule.gate_implications),
                    },
                )
                applied_rule_ids += (rule.rule_id,)
                gate_observations += rule.gate_implications
                if rule.signal:
                    operational_signals += (rule.signal,)
                event_keys |= {f"rule.{rule.rule_id}.applied"}

            crisis = self._crisis_after.get(record.decision_id)
            if crisis is not None:
                ledger = ledger.append(
                    LedgerEventKind.CRISIS_OBSERVED,
                    week=crisis.trigger_week,
                    decision_id=record.decision_id,
                    payload={
                        "crisis_id": crisis.id,
                        "title": crisis.title,
                        "observation": crisis.fixed_observation,
                        "response_decision": crisis.linked_decision,
                    },
                )
                crisis_observations += ((crisis.id, crisis.fixed_observation),)
                event_keys |= {f"crisis.{crisis.id}.observed"}
                crisis_context = PredicateContext(
                    facts=facts,
                    evidence=portfolio,
                    week=crisis.trigger_week,
                    completed_decisions=completed_set,
                    event_keys=event_keys,
                )
                status = self._resolve_preparedness(crisis, crisis_context)
                if strict and expected_preparedness.get(crisis.id) != status:
                    raise PreparednessMismatchError(
                        f"{run.run_id}/{crisis.id}: resolved {status.value}; "
                        f"fixture expects {expected_preparedness.get(crisis.id)}"
                    )
                before = health
                outcome = crisis.outcome(status)
                health = health.apply_all(outcome.effects, scenario.health_model.precision)
                ledger = ledger.append(
                    LedgerEventKind.CRISIS_RESOLVED,
                    week=crisis.trigger_week,
                    decision_id=crisis.linked_decision,
                    payload={
                        "crisis_id": crisis.id,
                        "preparedness": status.value,
                        "effects": [
                            {
                                "dimension": effect.dimension,
                                "authored_effect": effect.authored_effect,
                            }
                            for effect in outcome.effects
                        ],
                        "health_before": before.as_dict(),
                        "health_after": health.as_dict(),
                    },
                )
                resolved_crises += (
                    ResolvedCrisis(crisis.id, status, crisis.trigger_week),
                )
                event_keys |= {f"crisis.{crisis.id}.resolved.{status.value}"}

        if strict:
            self._validate_terminal_health(run, health)
        gate_context = PredicateContext(
            facts=facts
            + (
                Fact(
                    key="run.terminal_route",
                    value=run.terminal_route,
                    status=FactStatus.SUPPORTED,
                    evidence_refs=(),
                ),
            ),
            evidence=portfolio,
            week=scenario.run_config.duration_weeks,
            completed_decisions=completed_set,
            event_keys=event_keys,
        )
        gate_evaluation = self._gate_evaluator.evaluate(gate_context)
        if strict:
            self._validate_gate_expectations(run, gate_evaluation)
        for adjudication in gate_evaluation.adjudications:
            ledger = ledger.append(
                LedgerEventKind.GATE_ADJUDICATED,
                week=scenario.run_config.duration_weeks,
                payload=adjudication.as_dict(),
            )
        ledger = ledger.append(
            LedgerEventKind.RUN_COMPLETED,
            week=scenario.run_config.duration_weeks,
            payload={
                "run_id": run.run_id,
                "terminal_route": run.terminal_route,
                "terminal_health": health.as_dict(),
            },
        )
        if not ledger.verify():
            raise ReplayError(f"{run.run_id}: ledger hash-chain verification failed")

        public_view = PublicRunView(
            run_id=run.run_id,
            completed_decisions=completed,
            operational_signals=operational_signals,
            crisis_observations=crisis_observations,
        )
        return ReplayResult(
            run_id=run.run_id,
            terminal_route=run.terminal_route,
            terminal_health=health,
            completed_decisions=completed,
            applied_rule_ids=applied_rule_ids,
            resolved_crises=resolved_crises,
            gate_observations=gate_observations,
            gate_adjudications=gate_evaluation.adjudications,
            release_valid=gate_evaluation.release_valid,
            strictest_overall_cap=gate_evaluation.strictest_overall_cap,
            expected_gates=run.expected_gates,
            ledger=ledger,
            public_view=public_view,
        )

    def _sync_evidence_events(
        self,
        portfolio: EvidencePortfolio,
        week: int,
        ledger: RunLedger,
        emitted: frozenset[tuple[str, str]],
        event_keys: frozenset[str],
    ) -> tuple[RunLedger, frozenset[tuple[str, str]], frozenset[str]]:
        for event_week, state, evidence_id in portfolio.due_timeline_events(week, emitted):
            kind = (
                LedgerEventKind.EVIDENCE_REQUESTED
                if state == "requested"
                else LedgerEventKind.EVIDENCE_AVAILABLE
            )
            ledger = ledger.append(
                kind,
                week=event_week,
                payload={"evidence_id": evidence_id},
            )
            emitted |= {(state, evidence_id)}
            event_keys |= {f"evidence.{evidence_id}.{state}"}
        return ledger, emitted, event_keys

    def _validate_evidence_refs(
        self,
        run_id: str,
        record: Any,
        portfolio: EvidencePortfolio,
        week: int,
        completed: frozenset[str],
        observed_events: frozenset[str],
        evidence_record_ids: frozenset[str],
    ) -> None:
        for fact in record.facts:
            for reference in fact.evidence_refs:
                if reference.startswith("EV-CRISIS-"):
                    crisis_id = reference.removeprefix("EV-CRISIS-")
                    if f"crisis.{crisis_id}.observed" not in observed_events:
                        raise EvidenceUnavailableError(
                            f"{run_id}/{record.decision_id}: {reference} has not occurred"
                        )
                    continue
                if reference in evidence_record_ids:
                    continue
                if reference.startswith(("RR-", "PT-")):
                    raise EvidenceUnavailableError(
                        f"{run_id}/{record.decision_id}: unknown run evidence {reference}"
                    )
                try:
                    state = portfolio.state(
                        reference,
                        week,
                        completed,
                        using_decision=record.decision_id,
                    )
                except EvidenceError as exc:
                    raise EvidenceUnavailableError(
                        f"{run_id}/{record.decision_id}: {reference} is unknown"
                    ) from exc
                if state.value not in {"available", "verified"}:
                    raise EvidenceUnavailableError(
                        f"{run_id}/{record.decision_id}: {reference} is {state.value}"
                    )

    def _transition_winners(
        self, decision_id: str, context: PredicateContext
    ) -> tuple[TransitionRule, ...]:
        matching = tuple(
            rule
            for rule in self._rules_by_decision[decision_id]
            if predicate_matches(rule.when, context)
        )
        winners: dict[str, TransitionRule] = {}
        for rule in matching:
            current = winners.get(rule.stacking_group)
            if current is None or (rule.priority, rule.rule_id) > (
                current.priority,
                current.rule_id,
            ):
                winners[rule.stacking_group] = rule
        return tuple(sorted(winners.values(), key=lambda rule: rule.rule_id))

    @staticmethod
    def _resolve_preparedness(
        crisis: CrisisDefinition, context: PredicateContext
    ) -> PreparednessStatus:
        for status in (PreparednessStatus.PREPARED, PreparednessStatus.PARTIAL):
            if predicate_matches(crisis.outcome(status).when, context):
                return status
        return PreparednessStatus.UNPREPARED

    @staticmethod
    def _validate_terminal_health(run: ReferenceRun, actual: HealthState) -> None:
        rounded = actual.as_dict(ndigits=1)
        for dimension, expected in run.expected_terminal_health.values:
            if not math.isclose(rounded[dimension], expected, abs_tol=0.05):
                raise TerminalStateMismatchError(
                    f"{run.run_id}: {dimension} replayed {rounded[dimension]} "
                    f"but fixture expects {expected}"
                )

    @staticmethod
    def _validate_gate_expectations(
        run: ReferenceRun,
        actual: GateEvaluation,
    ) -> None:
        expected = {gate.gate_id: gate.status for gate in run.expected_gates}
        computed = {
            gate.gate_id: gate.status.value for gate in actual.adjudications
        }
        if expected != computed:
            differences = tuple(
                f"{gate_id}: expected {expected.get(gate_id)}, computed {computed.get(gate_id)}"
                for gate_id in sorted(set(expected) | set(computed))
                if expected.get(gate_id) != computed.get(gate_id)
            )
            raise GateMismatchError(f"{run.run_id}: " + "; ".join(differences))
