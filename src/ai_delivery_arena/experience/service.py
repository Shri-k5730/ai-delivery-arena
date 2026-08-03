"""Application service for complete local-first Arena participant sessions."""

from __future__ import annotations

import re
import threading
from dataclasses import replace
from pathlib import Path
from typing import Any, Callable

from ai_delivery_arena.engine.evidence import EvidencePortfolio
from ai_delivery_arena.engine.fixtures import FixtureBundle, load_fixture_bundle
from ai_delivery_arena.engine.models import (
    DecisionRecord,
    EvidenceRequest,
    EvidenceState,
    Fact,
    FactStatus,
    RunInput,
    freeze_json,
    thaw_json,
)
from ai_delivery_arena.engine.persistence import (
    JsonRunStore,
    RestoredRun,
    RevisionConflictError,
    RunStore,
    RunNotFoundError,
)
from ai_delivery_arena.engine.replay import ReplayEngine

from .assessment import (
    AssessmentReport,
    CompetencyAssessor,
    load_criterion_definitions,
)
from .catalog import (
    DecisionCatalogue,
    DecisionPrompt,
    OptionDefinition,
    custom_fact_template,
    load_decision_catalogue,
)


class ExperienceError(ValueError):
    """Raised for invalid participant actions or unavailable run state."""


_TERMINAL_ROUTES = {
    "A": "full_release",
    "B": "conditional_release",
    "C": "reduced_scope",
    "D": "extended_pilot",
    "E": "pause",
}

_EVIDENCE_TITLES = {
    "EV-POLICY-01": "Delegation and processing policy",
    "EV-SOURCE-01": "Source ownership map",
    "EV-WORKFLOW-01": "Buyer workflow time study",
    "EV-FINANCE-01": "Finance baseline review",
    "EV-FIELD-01": "Field completeness profile",
    "EV-SEGMENT-01": "Supplier-segment coverage",
    "EV-LABEL-01": "Historical-label validity",
    "EV-FORMAT-01": "Language and format sample",
    "EV-USER-01": "Buyer observation study",
    "EV-API-01": "Source API lead-time check",
    "EV-MODEL-01": "Task-level model comparison",
    "EV-THREAT-01": "Threat and privacy assessment",
    "EV-VOLUME-01": "Transaction-volume model",
    "EV-EVALDESIGN-01": "Evaluation-dataset design",
    "EV-COHORT-01": "Pilot-cohort feasibility",
}

_STAGE_COPY = {
    "frame": {
        "label": "Frame",
        "purpose": "Turn the public ambition into a measurable and governable mandate.",
    },
    "design": {
        "label": "Design",
        "purpose": "Choose a proportional solution, data contract, model route, and evaluation boundary.",
    },
    "plan": {
        "label": "Plan",
        "purpose": "Make dependencies, capacity, operating economics, and human control executable.",
    },
    "defend": {
        "label": "Defend",
        "purpose": "Respond to executive pressure and contradictory evidence without losing claim integrity.",
    },
    "operate": {
        "label": "Operate",
        "purpose": "Contain failures and make an integrated release recommendation.",
    },
}


def _repo_root_from_module() -> Path:
    candidate = Path(__file__).resolve().parents[3]
    if (candidate / "fixtures").exists():
        return candidate
    current = Path.cwd().resolve()
    if (current / "fixtures" / "procurement-under-pressure").exists():
        return current
    raise ExperienceError(
        "repository root could not be located; start the Arena from its repository"
    )


def _response_values(record: DecisionRecord) -> dict[str, Any]:
    return {
        fact.key.removeprefix("response."): thaw_json(fact.value)
        for fact in record.facts
        if fact.key.startswith("response.")
    }


class ArenaService:
    """Coordinate evidence, decisions, persistence, replay, and debrief."""

    def __init__(
        self,
        repository_root: str | Path | None = None,
        *,
        run_dir: str | Path | None = None,
        signing_key: bytes | None = None,
        store_factory: Callable[[ReplayEngine], RunStore] | None = None,
    ):
        self.repository_root = (
            Path(repository_root).resolve()
            if repository_root is not None
            else _repo_root_from_module()
        )
        fixture_dir = (
            self.repository_root
            / "fixtures"
            / "procurement-under-pressure"
            / "0.1.0"
        )
        self.bundle: FixtureBundle = load_fixture_bundle(fixture_dir)
        self.engine = ReplayEngine(self.bundle)
        if store_factory is not None and (run_dir is not None or signing_key is not None):
            raise ExperienceError(
                "store_factory cannot be combined with run_dir or signing_key"
            )
        self.store: RunStore = (
            store_factory(self.engine)
            if store_factory is not None
            else JsonRunStore(
                run_dir or self.repository_root / ".arena-runs",
                self.engine,
                signing_key=signing_key,
            )
        )
        stage_by_decision = {
            item.id: item.stage for item in self.bundle.scenario.decisions
        }
        week_by_decision = {
            item.id: item.week for item in self.bundle.scenario.decisions
        }
        scenario_docs = (
            self.repository_root
            / "docs"
            / "scenarios"
            / "procurement-under-pressure"
        )
        self.catalogue: DecisionCatalogue = load_decision_catalogue(
            scenario_docs / "DECISIONS.md",
            stage_by_decision=stage_by_decision,
            week_by_decision=week_by_decision,
        )
        self.assessor = CompetencyAssessor(
            self.bundle,
            self.engine,
            self.catalogue,
            load_criterion_definitions(scenario_docs / "SCORING.md"),
        )
        self._lock = threading.RLock()
        self._decision_index = {
            item.id: index for index, item in enumerate(self.bundle.scenario.decisions)
        }

    def bootstrap(self) -> dict[str, object]:
        scenario = self.bundle.scenario
        return {
            "product": "AI Delivery Arena",
            "status": "alpha",
            "scenario": {
                "id": scenario.identity.scenario_id,
                "version": scenario.identity.scenario_version,
                "title": scenario.title,
                "duration_weeks": scenario.run_config.duration_weeks,
                "budget_eur": scenario.run_config.budget_eur,
                "investigation_credits": scenario.run_config.investigation_credits,
                "decision_count": len(scenario.decisions),
                "stage_count": len(scenario.stages),
                "premise": (
                    "A global automotive manufacturer wants an AI-enabled procurement "
                    "platform in 16 weeks. Data spans 12 systems, the preferred model "
                    "is unapproved, European processing constraints apply, and "
                    "commercial authority remains unresolved."
                ),
            },
            "stages": self.stages(),
            "runs": self.list_runs(),
            "notice": (
                "First attempts are scored only after submission. No live competency "
                "score, preferred option, or hidden program health is shown."
            ),
        }

    def stages(self) -> list[dict[str, object]]:
        """Return static participant-safe stage metadata without touching storage."""

        return [
            {
                "id": stage.id,
                **_STAGE_COPY[stage.id],
                "decision_ids": list(stage.decision_ids),
                "nominal_weeks": list(stage.nominal_weeks),
            }
            for stage in self.bundle.scenario.stages
        ]

    def list_runs(self) -> list[dict[str, object]]:
        return [item.as_dict() for item in self.store.list_runs()]

    def start_run(
        self,
        run_id: str,
        *,
        display_name: str | None = None,
    ) -> dict[str, object]:
        run_id = run_id.strip()
        if not run_id:
            raise ExperienceError("run name is required")
        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]{0,127}", run_id):
            raise ExperienceError(
                "run name may contain letters, numbers, dot, underscore, or hyphen"
            )
        with self._lock:
            if self.store.exists(run_id):
                raise ExperienceError(f"run already exists: {run_id}")
            restored = self.store.save(
                RunInput(run_id=run_id, investigation_schedule=(), decisions=())
            )
            if display_name is not None:
                self.store.set_display_name(run_id, display_name)
            return self._run_view(restored)

    def get_run(self, run_id: str) -> dict[str, object]:
        with self._lock:
            try:
                restored = self.store.load(run_id)
            except RunNotFoundError as exc:
                raise ExperienceError(f"run not found: {run_id}") from exc
            return self._run_view(restored)

    def get_run_and_draft(
        self,
        run_id: str,
    ) -> tuple[dict[str, object], dict[str, Any] | None]:
        """Load a resumable run and its draft through one storage read."""

        with self._lock:
            try:
                restored, draft = self.store.load_with_draft(run_id)
            except RunNotFoundError as exc:
                raise ExperienceError(f"run not found: {run_id}") from exc
            return self._run_view(restored), draft

    def request_evidence(
        self,
        run_id: str,
        evidence_id: str,
        *,
        expected_revision: int,
    ) -> dict[str, object]:
        with self._lock:
            restored = self.store.load(run_id)
            if restored.revision != expected_revision:
                raise RevisionConflictError(
                    f"{run_id}: expected revision {expected_revision}; "
                    f"current revision is {restored.revision}"
                )
            if restored.result.status.value == "completed":
                raise ExperienceError("completed first attempts are immutable")
            item = next(
                (value for value in self.bundle.evidence.items if value.id == evidence_id),
                None,
            )
            if item is None:
                raise ExperienceError(f"unknown evidence item: {evidence_id}")
            if item.cost == 0:
                raise ExperienceError("this evidence is already available")
            if any(
                request.evidence_id == evidence_id
                for request in restored.run_input.investigation_schedule
            ):
                raise ExperienceError("this evidence has already been requested")
            used = sum(
                request.cost
                for request in restored.run_input.investigation_schedule
            )
            if used + item.cost > self.bundle.scenario.run_config.investigation_credits:
                raise ExperienceError("insufficient investigation credits")

            next_index = len(restored.run_input.decisions)
            current = self.bundle.scenario.decisions[next_index]
            last_week = (
                self.bundle.scenario.decisions[next_index - 1].week
                if next_index > 0
                else -1
            )
            request_week = max(current.week, last_week + 1)
            request = EvidenceRequest(
                evidence_id=evidence_id,
                request_week=request_week,
                arrival_week=request_week + item.lead_time_weeks,
                cost=item.cost,
                first_use="selective",
            )
            proposed = replace(
                restored.run_input,
                investigation_schedule=(
                    restored.run_input.investigation_schedule + (request,)
                ),
            )
            saved = self.store.save(
                proposed,
                expected_revision=restored.revision,
            )
            return self._run_view(saved)

    def commit_decision(
        self,
        run_id: str,
        payload: dict[str, Any],
        *,
        expected_revision: int,
    ) -> dict[str, object]:
        with self._lock:
            restored = self.store.load(run_id)
            if restored.revision != expected_revision:
                raise RevisionConflictError(
                    f"{run_id}: expected revision {expected_revision}; "
                    f"current revision is {restored.revision}"
                )
            if restored.result.status.value == "completed":
                raise ExperienceError("completed first attempts are immutable")

            index = len(restored.run_input.decisions)
            prompt = self.catalogue.decisions[index]
            decision_id = str(payload.get("decision_id", ""))
            if decision_id != prompt.id:
                raise ExperienceError(
                    f"the next decision is {prompt.id}, not {decision_id or 'blank'}"
                )
            option = self._option(prompt, str(payload.get("option_id", "")))
            rationale = self._required_text(payload, "rationale", 40)
            assumptions = self._required_text(payload, "assumptions", 10)
            owner = self._required_text(payload, "owner", 2)
            acceptance = self._required_text(payload, "acceptance_condition", 10)
            risk = self._required_text(payload, "risk", 10)

            if decision_id == "D03" and len(
                restored.run_input.investigation_schedule
            ) < 4:
                raise ExperienceError(
                    "D03 requires at least four evidence requests before commitment"
                )

            evidence_refs = tuple(
                dict.fromkeys(
                    str(item)
                    for item in payload.get("evidence_refs", [])
                    if isinstance(item, str)
                )
            )
            self._validate_citations(restored, prompt, evidence_refs)
            crisis_reference = self._current_crisis_reference(restored, prompt)
            if crisis_reference and crisis_reference not in evidence_refs:
                evidence_refs += (crisis_reference,)

            semantic = self._semantic_facts(
                option,
                prompt,
                restored,
            )
            response_facts = (
                Fact(
                    key="response.choice_id",
                    value=option.id,
                    status=FactStatus.SUPPORTED,
                ),
                Fact(
                    key="response.choice_label",
                    value=option.label,
                    status=FactStatus.SUPPORTED,
                ),
                Fact(
                    key="response.assumptions",
                    value=assumptions,
                    status=FactStatus.ASSERTED,
                ),
                Fact(
                    key="response.owner",
                    value=owner,
                    status=FactStatus.ASSERTED,
                ),
                Fact(
                    key="response.acceptance_condition",
                    value=acceptance,
                    status=FactStatus.ASSERTED,
                ),
                Fact(
                    key="response.risk",
                    value=risk,
                    status=FactStatus.ASSERTED,
                ),
                Fact(
                    key="response.evidence_refs",
                    value=freeze_json(list(evidence_refs)),
                    status=FactStatus.SUPPORTED,
                    evidence_refs=evidence_refs,
                ),
            )
            record = DecisionRecord(
                decision_id=decision_id,
                evidence_id=f"{run_id}-{decision_id}-01",
                summary=rationale,
                facts=semantic + response_facts,
                selected_rule_ids=(),
            )

            terminal_route: str | None = None
            if decision_id == "D20":
                terminal_route = _TERMINAL_ROUTES.get(option.id)
                if terminal_route is None:
                    terminal_route = str(payload.get("terminal_route", "")).strip()
                    if terminal_route not in {
                        "full_release",
                        "conditional_release",
                        "reduced_scope",
                        "extended_pilot",
                        "pause",
                    }:
                        raise ExperienceError(
                            "a custom final recommendation requires a valid route"
                        )

            candidate = RunInput(
                run_id=run_id,
                investigation_schedule=restored.run_input.investigation_schedule,
                decisions=restored.run_input.decisions + (record,),
                terminal_route=terminal_route,
            )
            preview = self.engine.replay_input(candidate, strict=False)
            new_rule_ids = preview.applied_rule_ids[
                len(restored.result.applied_rule_ids) :
            ]
            record = replace(record, selected_rule_ids=new_rule_ids)
            proposed = replace(
                candidate,
                decisions=restored.run_input.decisions + (record,),
            )
            saved = self.store.save(
                proposed,
                expected_revision=restored.revision,
            )
            self.store.delete_draft(run_id)
            return self._run_view(saved)

    def debrief(self, run_id: str) -> AssessmentReport:
        with self._lock:
            restored = self.store.load(run_id)
            if restored.result.status.value != "completed":
                raise ExperienceError("finish all 20 decisions before opening the debrief")
            return self.assessor.assess(restored.run_input)

    def save_draft(
        self,
        run_id: str,
        decision_id: str,
        draft: dict[str, Any],
        *,
        expected_revision: int,
    ) -> None:
        with self._lock:
            self.store.save_draft(
                run_id,
                decision_id,
                draft,
                expected_revision=expected_revision,
            )

    def load_draft(self, run_id: str) -> dict[str, Any] | None:
        with self._lock:
            return self.store.load_draft(run_id)

    def export_run_document(self, run_id: str) -> dict[str, Any]:
        with self._lock:
            return self.store.export_document(run_id)

    def import_run_document(
        self,
        document: dict[str, Any],
        *,
        display_name: str | None = None,
    ) -> dict[str, object]:
        with self._lock:
            try:
                embedded_run_id = str(document["run"]["run_id"])
            except (KeyError, TypeError) as exc:
                raise ExperienceError("imported file has no valid run ID") from exc
            verifier = JsonRunStore(
                self.repository_root / ".arena-import-verifier",
                self.engine,
            )
            restored = verifier.restore_document(embedded_run_id, document)
            if self.store.exists(embedded_run_id):
                raise ExperienceError(
                    f"run already exists in this account: {embedded_run_id}"
                )
            saved = self.store.save(restored.run_input)
            if display_name:
                self.store.set_display_name(embedded_run_id, display_name)
            return self._run_view(saved)

    def rename_run(self, run_id: str, display_name: str) -> None:
        with self._lock:
            self.store.set_display_name(run_id, display_name)

    def delete_run(self, run_id: str) -> None:
        with self._lock:
            self.store.delete_run(run_id)

    @staticmethod
    def _required_text(
        payload: dict[str, Any],
        key: str,
        minimum: int,
    ) -> str:
        value = str(payload.get(key, "")).strip()
        if len(value) < minimum:
            raise ExperienceError(
                f"{key.replace('_', ' ')} must contain at least {minimum} characters"
            )
        return value

    @staticmethod
    def _option(prompt: DecisionPrompt, option_id: str) -> OptionDefinition:
        for option in prompt.options:
            if option.id == option_id:
                return option
        raise ExperienceError(f"select a valid option for {prompt.id}")

    def _semantic_facts(
        self,
        option: OptionDefinition,
        prompt: DecisionPrompt,
        restored: RestoredRun,
    ) -> tuple[Fact, ...]:
        facts: list[Fact] = []
        if option.prototype_run_id is not None:
            prototype = self.bundle.reference_run(option.prototype_run_id)
            source = prototype.decisions[self._decision_index[prompt.id]]
            facts.extend(
                Fact(
                    key=fact.key,
                    value=fact.value,
                    status=fact.status,
                    evidence_refs=(),
                )
                for fact in source.facts
                if not fact.key.startswith("response.")
            )
        for key, value, status in custom_fact_template(prompt.id, option.id):
            facts.append(
                Fact(
                    key=key,
                    value=freeze_json(value),
                    status=FactStatus(status),
                )
            )
        if prompt.id == "D03":
            facts.append(
                Fact(
                    key="investigation.targeted_request_count",
                    value=len(restored.run_input.investigation_schedule),
                    status=FactStatus.SUPPORTED,
                )
            )
        return tuple(facts)

    def _validate_citations(
        self,
        restored: RestoredRun,
        prompt: DecisionPrompt,
        evidence_refs: tuple[str, ...],
    ) -> None:
        portfolio = EvidencePortfolio(
            self.bundle.evidence,
            restored.run_input.investigation_schedule,
            self.bundle.scenario.run_config.investigation_credits,
        )
        completed = frozenset(restored.result.completed_decisions)
        for reference in evidence_refs:
            if reference.startswith("EV-CRISIS-"):
                expected = self._current_crisis_reference(restored, prompt)
                if reference != expected:
                    raise ExperienceError(f"{reference} is not currently observable")
                continue
            try:
                state = portfolio.state(
                    reference,
                    prompt.week,
                    completed,
                    using_decision=prompt.id,
                )
            except ValueError as exc:
                raise ExperienceError(f"unknown evidence citation: {reference}") from exc
            if state not in {EvidenceState.AVAILABLE, EvidenceState.VERIFIED}:
                raise ExperienceError(f"{reference} is not yet available")

    def _current_crisis_reference(
        self,
        restored: RestoredRun,
        prompt: DecisionPrompt,
    ) -> str | None:
        for crisis_id, _ in restored.result.public_view.crisis_observations:
            crisis = next(
                value for value in self.bundle.crises.crises if value.id == crisis_id
            )
            if crisis.linked_decision == prompt.id:
                return f"EV-CRISIS-{crisis_id}"
        return None

    def _run_view(self, restored: RestoredRun) -> dict[str, object]:
        run = restored.run_input
        result = restored.result
        complete = result.status.value == "completed"
        index = len(run.decisions)
        current = None if complete else self.catalogue.decisions[index]
        current_week = (
            self.bundle.scenario.run_config.duration_weeks
            if complete
            else current.week
        )
        portfolio = EvidencePortfolio(
            self.bundle.evidence,
            run.investigation_schedule,
            self.bundle.scenario.run_config.investigation_credits,
        )
        completed = frozenset(result.completed_decisions)
        requests = {
            item.evidence_id: item for item in run.investigation_schedule
        }
        evidence: list[dict[str, object]] = []
        for item in self.bundle.evidence.items:
            state = portfolio.state(item.id, current_week, completed)
            request = requests.get(item.id)
            visible = state in {EvidenceState.AVAILABLE, EvidenceState.VERIFIED}
            evidence.append(
                {
                    "id": item.id,
                    "title": _EVIDENCE_TITLES.get(item.id, item.id),
                    "cost": item.cost,
                    "lead_time_weeks": item.lead_time_weeks,
                    "state": state.value,
                    "reveal": item.reveal if visible else None,
                    "latest_useful_decisions": list(item.latest_useful_decisions),
                    "request_week": request.request_week if request else None,
                    "arrival_week": request.arrival_week if request else None,
                }
            )

        history: list[dict[str, object]] = []
        for record in run.decisions:
            response = _response_values(record)
            prompt = self.catalogue.get(record.decision_id)
            history.append(
                {
                    "decision_id": record.decision_id,
                    "title": prompt.title,
                    "stage": prompt.stage,
                    "choice_id": response.get("choice_id"),
                    "choice_label": response.get("choice_label"),
                    "rationale": record.summary,
                    "evidence_refs": list(
                        next(
                            (
                                fact.evidence_refs
                                for fact in record.facts
                                if fact.key == "response.evidence_refs"
                            ),
                            (),
                        )
                    ),
                }
            )

        crisis_items = [
            {
                "id": crisis_id,
                "observation": observation,
                "evidence_ref": f"EV-CRISIS-{crisis_id}",
                "linked_decision": next(
                    crisis.linked_decision
                    for crisis in self.bundle.crises.crises
                    if crisis.id == crisis_id
                ),
            }
            for crisis_id, observation in result.public_view.crisis_observations
        ]
        credits_used = sum(item.cost for item in run.investigation_schedule)
        stage_id = (
            self.bundle.scenario.stages[-1].id
            if complete
            else current.stage
        )
        return {
            "run_id": run.run_id,
            "revision": restored.revision,
            "status": result.status.value,
            "progress": {
                "completed": index,
                "total": len(self.catalogue.decisions),
                "percent": round(index * 100 / len(self.catalogue.decisions)),
            },
            "stage": {"id": stage_id, **_STAGE_COPY[stage_id]},
            "current_decision": current.public_dict() if current else None,
            "credits": {
                "used": credits_used,
                "total": self.bundle.scenario.run_config.investigation_credits,
                "remaining": (
                    self.bundle.scenario.run_config.investigation_credits
                    - credits_used
                ),
            },
            "evidence": evidence,
            "crises": crisis_items,
            "operational_signals": list(result.public_view.operational_signals),
            "history": history,
            "ledger": {
                "entries": len(result.ledger.entries),
                "head": result.ledger.head_hash,
            },
            "debrief_ready": complete,
        }
