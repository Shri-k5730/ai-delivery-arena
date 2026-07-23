"""Deterministic evidence timing and investigation-credit mechanics."""

from __future__ import annotations

from dataclasses import dataclass

from .models import EvidenceCatalogue, EvidenceItem, EvidenceRequest, EvidenceState


class EvidenceError(ValueError):
    """Raised when evidence is unknown, unavailable, or scheduled illegally."""


@dataclass(frozen=True, slots=True)
class EvidencePortfolio:
    catalogue: EvidenceCatalogue
    schedule: tuple[EvidenceRequest, ...]
    credit_limit: int

    def __post_init__(self) -> None:
        ids = tuple(request.evidence_id for request in self.schedule)
        if len(ids) != len(set(ids)):
            raise EvidenceError("an evidence item may be requested only once")
        if self.credits_used > self.credit_limit:
            raise EvidenceError(
                f"investigation schedule uses {self.credits_used} credits; limit is {self.credit_limit}"
            )
        for request in self.schedule:
            item = self.item(request.evidence_id)
            if item.cost == 0:
                raise EvidenceError(f"free evidence {item.id} must not be scheduled")
            if request.cost != item.cost:
                raise EvidenceError(f"{item.id} request cost does not match the catalogue")
            if request.arrival_week != request.request_week + item.lead_time_weeks:
                raise EvidenceError(f"{item.id} arrival week violates its lead time")

    @property
    def credits_used(self) -> int:
        return sum(request.cost for request in self.schedule)

    def item(self, evidence_id: str) -> EvidenceItem:
        for item in self.catalogue.items:
            if item.id == evidence_id:
                return item
        raise EvidenceError(f"unknown evidence item: {evidence_id}")

    def request(self, evidence_id: str) -> EvidenceRequest | None:
        for request in self.schedule:
            if request.evidence_id == evidence_id:
                return request
        return None

    def state(
        self,
        evidence_id: str,
        week: int,
        completed_decisions: frozenset[str],
        using_decision: str | None = None,
    ) -> EvidenceState:
        item = self.item(evidence_id)
        if item.cost == 0:
            return EvidenceState.AVAILABLE

        request = self.request(evidence_id)
        if request is None or week < request.request_week:
            return item.initial_state
        if week < request.arrival_week:
            return EvidenceState.REQUESTED
        if request.first_use in completed_decisions or request.first_use == using_decision:
            return EvidenceState.VERIFIED
        return EvidenceState.AVAILABLE

    def due_timeline_events(
        self,
        through_week: int,
        emitted: frozenset[tuple[str, str]],
    ) -> tuple[tuple[int, str, str], ...]:
        """Return unemitted request/arrival events in chronological order."""

        events: list[tuple[int, str, str]] = []
        for request in self.schedule:
            request_key = ("requested", request.evidence_id)
            available_key = ("available", request.evidence_id)
            if request.request_week <= through_week and request_key not in emitted:
                events.append((request.request_week, "requested", request.evidence_id))
            if request.arrival_week <= through_week and available_key not in emitted:
                events.append((request.arrival_week, "available", request.evidence_id))
        order = {"requested": 0, "available": 1}
        return tuple(sorted(events, key=lambda item: (item[0], order[item[1]], item[2])))
