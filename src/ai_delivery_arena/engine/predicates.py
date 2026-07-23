"""Predicate evaluation over supported facts, evidence state, and emitted events."""

from __future__ import annotations

from dataclasses import dataclass

from .evidence import EvidencePortfolio
from .models import (
    Condition,
    ConditionSource,
    EvidenceState,
    Fact,
    FrozenJSON,
    Operator,
    Predicate,
)


class PredicateError(ValueError):
    """Raised for unsupported or malformed predicate operations."""


@dataclass(frozen=True, slots=True)
class PredicateContext:
    facts: tuple[Fact, ...]
    evidence: EvidencePortfolio
    week: int
    completed_decisions: frozenset[str]
    event_keys: frozenset[str]

    def current_fact(self, key: str) -> Fact | None:
        for fact in reversed(self.facts):
            if fact.key == key:
                return fact
        return None


def _compare(actual: FrozenJSON, condition: Condition) -> bool:
    if condition.operator is Operator.EQ:
        return actual == condition.value
    if condition.operator is Operator.IN:
        if not isinstance(condition.value, tuple):
            raise PredicateError(f"{condition.key}: 'in' requires an array value")
        return actual in condition.value
    if condition.operator is Operator.GTE:
        expected = condition.value
        if isinstance(actual, bool) or isinstance(expected, bool):
            return False
        return isinstance(actual, (int, float)) and isinstance(expected, (int, float)) and actual >= expected
    if condition.operator is Operator.EXISTS:
        return actual is not None
    raise PredicateError(f"unsupported operator: {condition.operator}")


def condition_matches(condition: Condition, context: PredicateContext) -> bool:
    if condition.source is ConditionSource.FACT:
        fact = context.current_fact(condition.key)
        if fact is None:
            return False
        if condition.status is not None and fact.status.value != condition.status:
            return False
        return _compare(fact.value, condition)

    if condition.source is ConditionSource.EVIDENCE:
        try:
            state = context.evidence.state(
                condition.key,
                context.week,
                context.completed_decisions,
            )
        except ValueError:
            return False
        if condition.status is not None and state.value != condition.status:
            return False
        return _compare(state.value, condition)

    if condition.source is ConditionSource.EVENT:
        exists = condition.key in context.event_keys
        return _compare(exists if exists else None, condition)

    return False


def predicate_matches(predicate: Predicate, context: PredicateContext) -> bool:
    return (
        all(condition_matches(condition, context) for condition in predicate.all)
        and (
            not predicate.any
            or any(condition_matches(condition, context) for condition in predicate.any)
        )
        and not any(condition_matches(condition, context) for condition in predicate.none)
    )
