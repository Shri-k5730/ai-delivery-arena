"""Load and cross-check versioned scenario fixture bundles."""

from __future__ import annotations

import json
from dataclasses import dataclass, replace
from pathlib import Path
from typing import Any

from .models import (
    AdversarialRunDefinition,
    AdversarialRunRegistry,
    ArtifactIdentity,
    AuthorityRole,
    Condition,
    ConditionSource,
    CrisisDefinition,
    CrisisExpectation,
    CrisisOutcome,
    CrisisRegistry,
    DecisionOverride,
    DecisionDefinition,
    DecisionRecord,
    Effect,
    EvidenceCatalogue,
    EvidenceItem,
    EvidenceRequest,
    EvidenceState,
    Fact,
    FactStatus,
    GateExpectation,
    GateDefinition,
    GateRegistry,
    GateStatus,
    HealthModel,
    HealthState,
    Operator,
    Predicate,
    PreparednessStatus,
    ReferenceRun,
    ReferenceRunRegistry,
    RunConfig,
    ScenarioDefinition,
    Stage,
    TransitionRegistry,
    TransitionRule,
    freeze_json,
)


class FixtureError(ValueError):
    """Raised when fixture files cannot form one executable scenario contract."""


@dataclass(frozen=True, slots=True)
class FixtureBundle:
    fixture_dir: Path
    scenario: ScenarioDefinition
    evidence: EvidenceCatalogue
    transitions: TransitionRegistry
    crises: CrisisRegistry
    gates: GateRegistry
    reference_runs: ReferenceRunRegistry
    adversarial_runs: AdversarialRunRegistry

    def reference_run(self, run_id: str) -> ReferenceRun:
        for run in self.reference_runs.runs + self.adversarial_runs.runs:
            if run.run_id == run_id:
                return run
        raise FixtureError(f"unknown reference run: {run_id}")

    @property
    def executable_runs(self) -> tuple[ReferenceRun, ...]:
        return self.reference_runs.runs + self.adversarial_runs.runs


def _read_object(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise FixtureError(f"missing fixture file: {path}") from exc
    except json.JSONDecodeError as exc:
        raise FixtureError(f"invalid JSON in {path} at line {exc.lineno}: {exc.msg}") from exc
    if not isinstance(value, dict):
        raise FixtureError(f"{path.name} must contain a JSON object")
    return value


def _identity(data: dict[str, Any]) -> ArtifactIdentity:
    try:
        return ArtifactIdentity(
            schema_version=str(data["schema_version"]),
            scenario_id=str(data["scenario_id"]),
            scenario_version=str(data["scenario_version"]),
        )
    except KeyError as exc:
        raise FixtureError(f"artifact header is missing {exc.args[0]}") from exc


def _effect(data: dict[str, Any]) -> Effect:
    return Effect(str(data["dimension"]), float(data["authored_effect"]))


def _condition(data: dict[str, Any]) -> Condition:
    return Condition(
        source=ConditionSource(data["source"]),
        key=str(data["key"]),
        operator=Operator(data["operator"]),
        value=freeze_json(data.get("value")),
        status=str(data["status"]) if "status" in data else None,
    )


def _predicate(data: dict[str, Any]) -> Predicate:
    return Predicate(
        all=tuple(_condition(item) for item in data.get("all", [])),
        any=tuple(_condition(item) for item in data.get("any", [])),
        none=tuple(_condition(item) for item in data.get("none", [])),
    )


def _scenario(data: dict[str, Any]) -> ScenarioDefinition:
    identity = _identity(data)
    run = data["run_config"]
    health = data["health_model"]
    dimensions = tuple(str(item) for item in health["dimensions"])
    return ScenarioDefinition(
        identity=identity,
        title=str(data["title"]),
        status=str(data["status"]),
        locked_invariants=tuple(str(item) for item in data["locked_invariants"]),
        run_config=RunConfig(
            duration_weeks=int(run["duration_weeks"]),
            budget_eur=int(run["budget_eur"]),
            investigation_credits=int(run["investigation_credits"]),
            first_attempt_health_visibility=bool(run["first_attempt_health_visibility"]),
            randomness_allowed=bool(run["randomness_allowed"]),
        ),
        health_model=HealthModel(
            dimensions=dimensions,
            initial_state=tuple(
                (dimension, float(health["initial_state"][dimension]))
                for dimension in dimensions
            ),
            precision=int(health["precision"]),
        ),
        authority_map=tuple(
            AuthorityRole(str(item["role_id"]), tuple(str(v) for v in item["authority"]))
            for item in data["authority_map"]
        ),
        stages=tuple(
            Stage(
                id=str(item["id"]),
                decision_ids=tuple(str(v) for v in item["decision_ids"]),
                nominal_weeks=(int(item["nominal_weeks"][0]), int(item["nominal_weeks"][1])),
            )
            for item in data["stages"]
        ),
        decisions=tuple(
            DecisionDefinition(
                id=str(item["id"]),
                stage=str(item["stage"]),
                week=int(item["week"]),
                title=str(item["title"]),
            )
            for item in data["decisions"]
        ),
        hidden_truth_ids=tuple(str(item) for item in data["hidden_truth_ids"]),
        gate_ids=tuple(str(item) for item in data["gate_ids"]),
    )


def _evidence(data: dict[str, Any]) -> EvidenceCatalogue:
    return EvidenceCatalogue(
        identity=_identity(data),
        state_machine=tuple(EvidenceState(item) for item in data["state_machine"]),
        items=tuple(
            EvidenceItem(
                id=str(item["id"]),
                cost=int(item["cost"]),
                lead_time_weeks=int(item["lead_time_weeks"]),
                reveal=str(item["reveal"]),
                hidden_truth_ids=tuple(str(v) for v in item["hidden_truth_ids"]),
                latest_useful_decisions=tuple(
                    str(v) for v in item["latest_useful_decisions"]
                ),
                initial_state=EvidenceState(item["initial_state"]),
            )
            for item in data["items"]
        ),
    )


def _transitions(data: dict[str, Any]) -> TransitionRegistry:
    return TransitionRegistry(
        identity=_identity(data),
        rules=tuple(
            TransitionRule(
                rule_id=str(item["rule_id"]),
                decision_id=str(item["decision_id"]),
                priority=int(item["priority"]),
                stacking_group=str(item["stacking_group"]),
                when=_predicate(item["when"]),
                effects=tuple(_effect(effect) for effect in item["effects"]),
                signal=str(item["signal"]),
                gate_implications=tuple(str(value) for value in item["gate_implications"]),
            )
            for item in data["rules"]
        ),
    )


def _crises(data: dict[str, Any]) -> CrisisRegistry:
    crises: list[CrisisDefinition] = []
    for item in data["crises"]:
        preparedness = item["preparedness"]
        outcome = lambda key: CrisisOutcome(  # noqa: E731
            when=_predicate(preparedness[key]["when"]),
            effects=tuple(_effect(effect) for effect in preparedness[key]["effects"]),
        )
        crises.append(
            CrisisDefinition(
                id=str(item["id"]),
                title=str(item["title"]),
                trigger_week=int(item["trigger"]["week"]),
                trigger_after=str(item["trigger"]["after"]),
                linked_decision=str(item["linked_decision"]),
                fixed_observation=str(item["fixed_observation"]),
                base_effects=tuple(_effect(effect) for effect in item["base_effects"]),
                prepared=outcome("prepared"),
                partial=outcome("partial"),
                unprepared=outcome("unprepared"),
            )
        )
    return CrisisRegistry(
        identity=_identity(data),
        event_order=tuple(str(item) for item in data["event_order"]),
        crises=tuple(crises),
    )


def _gates(data: dict[str, Any]) -> GateRegistry:
    return GateRegistry(
        identity=_identity(data),
        resolution_precedence=tuple(
            GateStatus(item) for item in data["resolution_precedence"]
        ),
        gates=tuple(
            GateDefinition(
                gate_id=str(item["gate_id"]),
                title=str(item["title"]),
                description=str(item["description"]),
                applicable_when=_predicate(item["applicable_when"]),
                fail_when=_predicate(item["fail_when"]),
                pass_when=_predicate(item["pass_when"]),
                overall_cap=(
                    int(item["treatment"]["overall_cap"])
                    if item["treatment"]["overall_cap"] is not None
                    else None
                ),
                dimension_caps=tuple(
                    sorted(
                        (
                            str(dimension),
                            int(cap),
                        )
                        for dimension, cap in item["treatment"][
                            "dimension_caps"
                        ].items()
                    )
                ),
                release_invalid_on_fail=bool(
                    item["treatment"]["release_invalid"]
                ),
                pass_reason=str(item["explanations"]["pass"]),
                fail_reason=str(item["explanations"]["fail"]),
                unresolved_reason=str(item["explanations"]["unresolved"]),
                not_applicable_reason=str(
                    item["explanations"]["not_applicable"]
                ),
            )
            for item in data["gates"]
        ),
    )


def _decision_record(data: dict[str, Any]) -> DecisionRecord:
    return DecisionRecord(
        decision_id=str(data["decision_id"]),
        evidence_id=str(data["evidence_id"]),
        summary=str(data["summary"]),
        facts=tuple(
            Fact(
                key=str(fact["key"]),
                value=freeze_json(fact.get("value")),
                status=FactStatus(fact["status"]),
                evidence_refs=tuple(
                    str(ref) for ref in fact.get("evidence_refs", [])
                ),
            )
            for fact in data["facts"]
        ),
        selected_rule_ids=tuple(str(rule_id) for rule_id in data["selected_rule_ids"]),
    )


def _gate_expectations(data: list[dict[str, Any]]) -> tuple[GateExpectation, ...]:
    return tuple(
        GateExpectation(
            gate_id=str(gate["gate_id"]),
            status=str(gate["status"]),
            reason=str(gate["reason"]),
        )
        for gate in data
    )


def _reference_runs(
    data: dict[str, Any], dimensions: tuple[str, ...]
) -> ReferenceRunRegistry:
    runs: list[ReferenceRun] = []
    for item in data["runs"]:
        runs.append(
            ReferenceRun(
                run_id=str(item["run_id"]),
                label=str(item["label"]),
                terminal_route=str(item["terminal_route"]),
                investigation_schedule=tuple(
                    EvidenceRequest(
                        evidence_id=str(request["evidence_id"]),
                        request_week=int(request["request_week"]),
                        arrival_week=int(request["arrival_week"]),
                        cost=int(request["cost"]),
                        first_use=str(request["first_use"]),
                    )
                    for request in item["investigation_schedule"]
                ),
                decisions=tuple(_decision_record(decision) for decision in item["decisions"]),
                crisis_preparedness=tuple(
                    CrisisExpectation(
                        crisis_id=str(crisis["crisis_id"]),
                        status=PreparednessStatus(crisis["status"]),
                        supporting_refs=tuple(
                            str(ref) for ref in crisis["supporting_refs"]
                        ),
                    )
                    for crisis in item["crisis_preparedness"]
                ),
                expected_terminal_health=HealthState.from_mapping(
                    item["expected_terminal_health"], dimensions
                ),
                expected_gates=_gate_expectations(item["expected_gates"]),
            )
        )
    return ReferenceRunRegistry(identity=_identity(data), runs=tuple(runs))


def _rebase_record(
    record: DecisionRecord,
    source_run_id: str,
    target_run_id: str,
) -> DecisionRecord:
    return replace(
        record,
        evidence_id=record.evidence_id.replace(source_run_id, target_run_id, 1),
        facts=tuple(
            replace(
                fact,
                evidence_refs=tuple(
                    ref.replace(source_run_id, target_run_id, 1)
                    if ref.startswith(source_run_id)
                    else ref
                    for ref in fact.evidence_refs
                ),
            )
            for fact in record.facts
        ),
    )


def _adversarial_runs(
    data: dict[str, Any],
    dimensions: tuple[str, ...],
    reference_runs: ReferenceRunRegistry,
) -> AdversarialRunRegistry:
    base_by_id = {run.run_id: run for run in reference_runs.runs}
    definitions: list[AdversarialRunDefinition] = []
    materialized: list[ReferenceRun] = []
    for item in data["runs"]:
        base_run_id = str(item["base_run_id"])
        if base_run_id not in base_by_id:
            raise FixtureError(
                f"{item['run_id']} derives from unknown run {base_run_id}"
            )
        overrides = tuple(
            DecisionOverride(
                decision_id=str(override["decision_id"]),
                record=_decision_record(override["record"]),
            )
            for override in item["decision_overrides"]
        )
        definition = AdversarialRunDefinition(
            run_id=str(item["run_id"]),
            label=str(item["label"]),
            purpose=str(item["purpose"]),
            base_run_id=base_run_id,
            terminal_route=str(item["terminal_route"]),
            decision_overrides=overrides,
            expected_terminal_health=HealthState.from_mapping(
                item["expected_terminal_health"], dimensions
            ),
            expected_gates=_gate_expectations(item["expected_gates"]),
        )
        base = base_by_id[base_run_id]
        override_by_decision = {
            override.decision_id: override.record for override in overrides
        }
        decisions = tuple(
            override_by_decision.get(
                record.decision_id,
                _rebase_record(record, base_run_id, definition.run_id),
            )
            for record in base.decisions
        )
        materialized.append(
            ReferenceRun(
                run_id=definition.run_id,
                label=definition.label,
                terminal_route=definition.terminal_route,
                investigation_schedule=base.investigation_schedule,
                decisions=decisions,
                crisis_preparedness=base.crisis_preparedness,
                expected_terminal_health=definition.expected_terminal_health,
                expected_gates=definition.expected_gates,
            )
        )
        definitions.append(definition)
    return AdversarialRunRegistry(
        identity=_identity(data),
        definitions=tuple(definitions),
        runs=tuple(materialized),
    )


def _duplicates(values: tuple[str, ...]) -> set[str]:
    return {value for value in values if values.count(value) > 1}


def _validate_bundle(bundle: FixtureBundle) -> None:
    identities = {
        bundle.scenario.identity,
        bundle.evidence.identity,
        bundle.transitions.identity,
        bundle.crises.identity,
        bundle.gates.identity,
        bundle.reference_runs.identity,
        bundle.adversarial_runs.identity,
    }
    if len(identities) != 1:
        raise FixtureError("fixture artifact headers do not identify the same scenario version")

    scenario = bundle.scenario
    decision_ids = tuple(item.id for item in scenario.decisions)
    evidence_ids = tuple(item.id for item in bundle.evidence.items)
    rule_ids = tuple(item.rule_id for item in bundle.transitions.rules)
    crisis_ids = tuple(item.id for item in bundle.crises.crises)
    gate_ids = tuple(item.gate_id for item in bundle.gates.gates)
    run_ids = tuple(item.run_id for item in bundle.executable_runs)
    for label, values in (
        ("decision", decision_ids),
        ("evidence", evidence_ids),
        ("transition rule", rule_ids),
        ("crisis", crisis_ids),
        ("gate", gate_ids),
        ("reference run", run_ids),
    ):
        duplicates = _duplicates(values)
        if duplicates:
            raise FixtureError(f"duplicate {label} IDs: {sorted(duplicates)}")

    expected_decisions = tuple(f"D{index:02d}" for index in range(1, 21))
    if decision_ids != expected_decisions:
        raise FixtureError("scenario decisions must be ordered D01 through D20")
    staged = tuple(value for stage in scenario.stages for value in stage.decision_ids)
    if staged != decision_ids:
        raise FixtureError("stages must partition decisions in executable order")
    if scenario.run_config.randomness_allowed:
        raise FixtureError("benchmark fixture cannot enable randomness")
    if scenario.run_config.first_attempt_health_visibility:
        raise FixtureError("first-attempt health visibility must remain disabled")

    decision_set = set(decision_ids)
    evidence_set = set(evidence_ids)
    dimensions = set(scenario.health_model.dimensions)
    if set(key for key, _ in scenario.health_model.initial_state) != dimensions:
        raise FixtureError("initial health dimensions do not match the scenario")
    for rule in bundle.transitions.rules:
        if rule.decision_id not in decision_set:
            raise FixtureError(f"{rule.rule_id} references unknown decision {rule.decision_id}")
        for effect in rule.effects:
            if effect.dimension not in dimensions:
                raise FixtureError(f"{rule.rule_id} affects unknown dimension {effect.dimension}")
    for crisis in bundle.crises.crises:
        if crisis.trigger_after not in decision_set or crisis.linked_decision not in decision_set:
            raise FixtureError(f"{crisis.id} references an unknown decision")
        for status in PreparednessStatus:
            for effect in crisis.outcome(status).effects:
                if effect.dimension not in dimensions:
                    raise FixtureError(f"{crisis.id} affects unknown dimension {effect.dimension}")

    if gate_ids != scenario.gate_ids:
        raise FixtureError("gate registry must define scenario gates in canonical order")
    for gate in bundle.gates.gates:
        for dimension, _ in gate.dimension_caps:
            if dimension not in dimensions:
                raise FixtureError(
                    f"{gate.gate_id} caps unknown dimension {dimension}"
                )
    for definition in bundle.adversarial_runs.definitions:
        override_ids = tuple(
            override.decision_id for override in definition.decision_overrides
        )
        if _duplicates(override_ids):
            raise FixtureError(
                f"{definition.run_id} overrides a decision more than once"
            )
        for override in definition.decision_overrides:
            if override.decision_id not in decision_set:
                raise FixtureError(
                    f"{definition.run_id} overrides unknown decision "
                    f"{override.decision_id}"
                )
            if override.record.decision_id != override.decision_id:
                raise FixtureError(
                    f"{definition.run_id}/{override.decision_id} record mismatch"
                )
            if not override.record.evidence_id.startswith(
                f"{definition.run_id}-{override.decision_id}-"
            ):
                raise FixtureError(
                    f"{definition.run_id}/{override.decision_id} evidence ID "
                    "does not belong to the adversarial run"
                )

    for run in bundle.executable_runs:
        if tuple(record.decision_id for record in run.decisions) != decision_ids:
            raise FixtureError(f"{run.run_id} does not contain D01-D20 in order")
        if sum(request.cost for request in run.investigation_schedule) > scenario.run_config.investigation_credits:
            raise FixtureError(f"{run.run_id} exceeds the investigation-credit budget")
        scheduled_ids = tuple(request.evidence_id for request in run.investigation_schedule)
        if _duplicates(scheduled_ids):
            raise FixtureError(f"{run.run_id} schedules evidence more than once")
        for request in run.investigation_schedule:
            if request.evidence_id not in evidence_set:
                raise FixtureError(f"{run.run_id} schedules unknown evidence {request.evidence_id}")
            item = next(value for value in bundle.evidence.items if value.id == request.evidence_id)
            if request.cost != item.cost:
                raise FixtureError(f"{run.run_id}/{request.evidence_id} has the wrong cost")
            if request.arrival_week != request.request_week + item.lead_time_weeks:
                raise FixtureError(f"{run.run_id}/{request.evidence_id} has invalid timing")
            if request.first_use not in decision_set and request.first_use not in {
                "not_reconciled",
                "selective",
            }:
                raise FixtureError(f"{run.run_id}/{request.evidence_id} has unknown first use")


def load_fixture_bundle(fixture_dir: str | Path) -> FixtureBundle:
    """Load the seven artifacts that make one executable scenario version."""

    directory = Path(fixture_dir).resolve()
    try:
        scenario = _scenario(_read_object(directory / "scenario.json"))
        evidence = _evidence(_read_object(directory / "evidence.json"))
        transitions = _transitions(_read_object(directory / "transitions.json"))
        crises = _crises(_read_object(directory / "crises.json"))
        gates = _gates(_read_object(directory / "gates.json"))
        reference_runs = _reference_runs(
            _read_object(directory / "reference-runs.json"),
            scenario.health_model.dimensions,
        )
        adversarial_runs = _adversarial_runs(
            _read_object(directory / "adversarial-runs.json"),
            scenario.health_model.dimensions,
            reference_runs,
        )
    except (KeyError, TypeError, ValueError) as exc:
        if isinstance(exc, FixtureError):
            raise
        raise FixtureError(f"invalid fixture structure: {exc}") from exc

    bundle = FixtureBundle(
        fixture_dir=directory,
        scenario=scenario,
        evidence=evidence,
        transitions=transitions,
        crises=crises,
        gates=gates,
        reference_runs=reference_runs,
        adversarial_runs=adversarial_runs,
    )
    _validate_bundle(bundle)
    return bundle
