"""Immutable domain models for scenario fixtures and replay results."""

from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum
from typing import Any, Mapping, TypeAlias


@dataclass(frozen=True, slots=True)
class FrozenObject:
    """A JSON object represented as sorted immutable key/value pairs."""

    items: tuple[tuple[str, "FrozenJSON"], ...]

    def get(self, key: str, default: Any = None) -> Any:
        for item_key, value in self.items:
            if item_key == key:
                return value
        return default


FrozenJSON: TypeAlias = (
    None | bool | int | float | str | tuple["FrozenJSON", ...] | FrozenObject
)


def freeze_json(value: Any) -> FrozenJSON:
    """Recursively convert JSON-compatible data into immutable values."""

    if isinstance(value, Mapping):
        return FrozenObject(
            tuple(sorted((str(key), freeze_json(item)) for key, item in value.items()))
        )
    if isinstance(value, (list, tuple)):
        return tuple(freeze_json(item) for item in value)
    if value is None or isinstance(value, (bool, int, float, str)):
        return value
    raise TypeError(f"unsupported JSON value: {type(value).__name__}")


def thaw_json(value: FrozenJSON) -> Any:
    """Convert an immutable JSON value back into ordinary JSON-compatible data."""

    if isinstance(value, FrozenObject):
        return {key: thaw_json(item) for key, item in value.items}
    if isinstance(value, tuple):
        return [thaw_json(item) for item in value]
    return value


class EvidenceState(StrEnum):
    LOCKED = "locked"
    REQUESTABLE = "requestable"
    REQUESTED = "requested"
    AVAILABLE = "available"
    VERIFIED = "verified"
    DISPUTED = "disputed"
    LATE = "late"


class FactStatus(StrEnum):
    ASSERTED = "asserted"
    SUPPORTED = "supported"
    CONTRADICTED = "contradicted"
    SUPERSEDED = "superseded"


class ConditionSource(StrEnum):
    FACT = "fact"
    EVIDENCE = "evidence"
    EVENT = "event"


class Operator(StrEnum):
    EQ = "eq"
    IN = "in"
    GTE = "gte"
    EXISTS = "exists"


class PreparednessStatus(StrEnum):
    PREPARED = "prepared"
    PARTIAL = "partial"
    UNPREPARED = "unprepared"


class GateStatus(StrEnum):
    PASS = "pass"
    FAIL = "fail"
    UNRESOLVED = "unresolved"
    NOT_APPLICABLE = "not_applicable"


@dataclass(frozen=True, slots=True)
class ArtifactIdentity:
    schema_version: str
    scenario_id: str
    scenario_version: str


@dataclass(frozen=True, slots=True)
class RunConfig:
    duration_weeks: int
    budget_eur: int
    investigation_credits: int
    first_attempt_health_visibility: bool
    randomness_allowed: bool


@dataclass(frozen=True, slots=True)
class HealthModel:
    dimensions: tuple[str, ...]
    initial_state: tuple[tuple[str, float], ...]
    precision: int


@dataclass(frozen=True, slots=True)
class AuthorityRole:
    role_id: str
    authority: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class Stage:
    id: str
    decision_ids: tuple[str, ...]
    nominal_weeks: tuple[int, int]


@dataclass(frozen=True, slots=True)
class DecisionDefinition:
    id: str
    stage: str
    week: int
    title: str


@dataclass(frozen=True, slots=True)
class ScenarioDefinition:
    identity: ArtifactIdentity
    title: str
    status: str
    locked_invariants: tuple[str, ...]
    run_config: RunConfig
    health_model: HealthModel
    authority_map: tuple[AuthorityRole, ...]
    stages: tuple[Stage, ...]
    decisions: tuple[DecisionDefinition, ...]
    hidden_truth_ids: tuple[str, ...]
    gate_ids: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class EvidenceItem:
    id: str
    cost: int
    lead_time_weeks: int
    reveal: str
    hidden_truth_ids: tuple[str, ...]
    latest_useful_decisions: tuple[str, ...]
    initial_state: EvidenceState


@dataclass(frozen=True, slots=True)
class EvidenceCatalogue:
    identity: ArtifactIdentity
    state_machine: tuple[EvidenceState, ...]
    items: tuple[EvidenceItem, ...]


@dataclass(frozen=True, slots=True)
class Effect:
    dimension: str
    authored_effect: float


@dataclass(frozen=True, slots=True)
class Condition:
    source: ConditionSource
    key: str
    operator: Operator
    value: FrozenJSON = None
    status: str | None = None


@dataclass(frozen=True, slots=True)
class Predicate:
    all: tuple[Condition, ...]
    any: tuple[Condition, ...] = ()
    none: tuple[Condition, ...] = ()


@dataclass(frozen=True, slots=True)
class TransitionRule:
    rule_id: str
    decision_id: str
    priority: int
    stacking_group: str
    when: Predicate
    effects: tuple[Effect, ...]
    signal: str
    gate_implications: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class TransitionRegistry:
    identity: ArtifactIdentity
    rules: tuple[TransitionRule, ...]


@dataclass(frozen=True, slots=True)
class CrisisOutcome:
    when: Predicate
    effects: tuple[Effect, ...]


@dataclass(frozen=True, slots=True)
class CrisisDefinition:
    id: str
    title: str
    trigger_week: int
    trigger_after: str
    linked_decision: str
    fixed_observation: str
    base_effects: tuple[Effect, ...]
    prepared: CrisisOutcome
    partial: CrisisOutcome
    unprepared: CrisisOutcome

    def outcome(self, status: PreparednessStatus) -> CrisisOutcome:
        return getattr(self, status.value)


@dataclass(frozen=True, slots=True)
class CrisisRegistry:
    identity: ArtifactIdentity
    event_order: tuple[str, ...]
    crises: tuple[CrisisDefinition, ...]


@dataclass(frozen=True, slots=True)
class GateDefinition:
    gate_id: str
    title: str
    description: str
    applicable_when: Predicate
    fail_when: Predicate
    pass_when: Predicate
    overall_cap: int | None
    dimension_caps: tuple[tuple[str, int], ...]
    release_invalid_on_fail: bool
    pass_reason: str
    fail_reason: str
    unresolved_reason: str
    not_applicable_reason: str


@dataclass(frozen=True, slots=True)
class GateRegistry:
    identity: ArtifactIdentity
    resolution_precedence: tuple[GateStatus, ...]
    gates: tuple[GateDefinition, ...]


@dataclass(frozen=True, slots=True)
class EvidenceRequest:
    evidence_id: str
    request_week: int
    arrival_week: int
    cost: int
    first_use: str


@dataclass(frozen=True, slots=True)
class Fact:
    key: str
    value: FrozenJSON
    status: FactStatus
    evidence_refs: tuple[str, ...] = ()


@dataclass(frozen=True, slots=True)
class DecisionRecord:
    decision_id: str
    evidence_id: str
    summary: str
    facts: tuple[Fact, ...]
    selected_rule_ids: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class CrisisExpectation:
    crisis_id: str
    status: PreparednessStatus
    supporting_refs: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class GateExpectation:
    gate_id: str
    status: str
    reason: str


@dataclass(frozen=True, slots=True)
class HealthState:
    """Immutable health values in the scenario's canonical dimension order."""

    values: tuple[tuple[str, float], ...]

    @classmethod
    def from_mapping(
        cls, values: Mapping[str, int | float], dimensions: tuple[str, ...]
    ) -> "HealthState":
        return cls(tuple((dimension, float(values[dimension])) for dimension in dimensions))

    def as_dict(self, ndigits: int | None = None) -> dict[str, float]:
        if ndigits is None:
            return dict(self.values)
        return {key: round(value, ndigits) for key, value in self.values}

    def value(self, dimension: str) -> float:
        for key, value in self.values:
            if key == dimension:
                return value
        raise KeyError(dimension)

    def apply(self, effect: Effect, precision: int) -> "HealthState":
        current = self.value(effect.dimension)
        authored = effect.authored_effect
        if authored > 0:
            updated = current + authored * (100.0 - current) / 100.0
        else:
            updated = current + authored * current / 100.0
        updated = round(updated, precision)
        return HealthState(
            tuple(
                (key, updated if key == effect.dimension else value)
                for key, value in self.values
            )
        )

    def apply_all(self, effects: tuple[Effect, ...], precision: int) -> "HealthState":
        state = self
        for effect in effects:
            state = state.apply(effect, precision)
        return state


@dataclass(frozen=True, slots=True)
class ReferenceRun:
    run_id: str
    label: str
    terminal_route: str
    investigation_schedule: tuple[EvidenceRequest, ...]
    decisions: tuple[DecisionRecord, ...]
    crisis_preparedness: tuple[CrisisExpectation, ...]
    expected_terminal_health: HealthState
    expected_gates: tuple[GateExpectation, ...]


@dataclass(frozen=True, slots=True)
class ReferenceRunRegistry:
    identity: ArtifactIdentity
    runs: tuple[ReferenceRun, ...]


@dataclass(frozen=True, slots=True)
class DecisionOverride:
    decision_id: str
    record: DecisionRecord


@dataclass(frozen=True, slots=True)
class AdversarialRunDefinition:
    run_id: str
    label: str
    purpose: str
    base_run_id: str
    terminal_route: str
    decision_overrides: tuple[DecisionOverride, ...]
    expected_terminal_health: HealthState
    expected_gates: tuple[GateExpectation, ...]


@dataclass(frozen=True, slots=True)
class AdversarialRunRegistry:
    identity: ArtifactIdentity
    definitions: tuple[AdversarialRunDefinition, ...]
    runs: tuple[ReferenceRun, ...]
