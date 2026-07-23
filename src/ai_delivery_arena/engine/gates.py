"""Deterministic critical-gate adjudication over normalized run facts."""

from __future__ import annotations

from dataclasses import dataclass

from .models import (
    Condition,
    GateDefinition,
    GateRegistry,
    GateStatus,
)
from .predicates import PredicateContext, condition_matches, predicate_matches


class GateEvaluationError(ValueError):
    """Raised when the gate registry cannot be adjudicated consistently."""


@dataclass(frozen=True, slots=True)
class GateAdjudication:
    gate_id: str
    title: str
    status: GateStatus
    reason: str
    basis_keys: tuple[str, ...]
    overall_cap: int | None
    dimension_caps: tuple[tuple[str, int], ...]
    release_invalid: bool

    def as_dict(self) -> dict[str, object]:
        return {
            "gate_id": self.gate_id,
            "title": self.title,
            "status": self.status.value,
            "reason": self.reason,
            "basis_keys": list(self.basis_keys),
            "overall_cap": self.overall_cap,
            "dimension_caps": dict(self.dimension_caps),
            "release_invalid": self.release_invalid,
        }


@dataclass(frozen=True, slots=True)
class GateEvaluation:
    adjudications: tuple[GateAdjudication, ...]

    @property
    def release_valid(self) -> bool:
        return not any(item.release_invalid for item in self.adjudications)

    @property
    def strictest_overall_cap(self) -> int | None:
        caps = tuple(
            item.overall_cap
            for item in self.adjudications
            if item.status is GateStatus.FAIL and item.overall_cap is not None
        )
        return min(caps) if caps else None

    @property
    def failed_gate_ids(self) -> tuple[str, ...]:
        return tuple(
            item.gate_id
            for item in self.adjudications
            if item.status is GateStatus.FAIL
        )


def _matched_basis(
    gate: GateDefinition,
    status: GateStatus,
    context: PredicateContext,
) -> tuple[str, ...]:
    if status is GateStatus.FAIL:
        predicate = gate.fail_when
    elif status is GateStatus.PASS:
        predicate = gate.pass_when
    else:
        predicate = gate.applicable_when

    conditions: tuple[Condition, ...] = predicate.all + predicate.any
    return tuple(
        sorted(
            {
                condition.key
                for condition in conditions
                if condition_matches(condition, context)
            }
        )
    )


class GateEvaluator:
    """Resolve every gate from a final normalized-fact snapshot."""

    def __init__(self, registry: GateRegistry):
        self.registry = registry
        expected = (
            GateStatus.FAIL,
            GateStatus.PASS,
            GateStatus.NOT_APPLICABLE,
            GateStatus.UNRESOLVED,
        )
        if registry.resolution_precedence != expected:
            raise GateEvaluationError(
                "gate precedence must be fail, pass, not_applicable, unresolved"
            )

    def evaluate(self, context: PredicateContext) -> GateEvaluation:
        return GateEvaluation(
            tuple(self._evaluate_gate(gate, context) for gate in self.registry.gates)
        )

    @staticmethod
    def _evaluate_gate(
        gate: GateDefinition,
        context: PredicateContext,
    ) -> GateAdjudication:
        applicable = predicate_matches(gate.applicable_when, context)
        if not applicable:
            status = GateStatus.NOT_APPLICABLE
            reason = gate.not_applicable_reason
        elif predicate_matches(gate.fail_when, context):
            status = GateStatus.FAIL
            reason = gate.fail_reason
        elif predicate_matches(gate.pass_when, context):
            status = GateStatus.PASS
            reason = gate.pass_reason
        else:
            status = GateStatus.UNRESOLVED
            reason = gate.unresolved_reason

        failed = status is GateStatus.FAIL
        return GateAdjudication(
            gate_id=gate.gate_id,
            title=gate.title,
            status=status,
            reason=reason,
            basis_keys=_matched_basis(gate, status, context),
            overall_cap=gate.overall_cap if failed else None,
            dimension_caps=gate.dimension_caps if failed else (),
            release_invalid=failed and gate.release_invalid_on_fail,
        )
