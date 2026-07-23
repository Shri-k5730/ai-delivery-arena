"""Append-only, hash-chained run ledger."""

from __future__ import annotations

import hashlib
import json
from dataclasses import dataclass
from enum import StrEnum
from typing import Any, Mapping

from .models import FrozenObject, freeze_json, thaw_json


class LedgerEventKind(StrEnum):
    EVIDENCE_REQUESTED = "evidence_requested"
    EVIDENCE_AVAILABLE = "evidence_available"
    EVIDENCE_VERIFIED = "evidence_verified"
    DECISION_RECORDED = "decision_recorded"
    RULE_APPLIED = "rule_applied"
    CRISIS_OBSERVED = "crisis_observed"
    CRISIS_RESOLVED = "crisis_resolved"
    GATE_ADJUDICATED = "gate_adjudicated"
    RUN_COMPLETED = "run_completed"


GENESIS_HASH = "0" * 64


@dataclass(frozen=True, slots=True)
class LedgerEntry:
    sequence: int
    kind: LedgerEventKind
    week: int
    decision_id: str | None
    payload: FrozenObject
    previous_hash: str
    event_hash: str

    def canonical_body(self) -> dict[str, Any]:
        return {
            "sequence": self.sequence,
            "kind": self.kind.value,
            "week": self.week,
            "decision_id": self.decision_id,
            "payload": thaw_json(self.payload),
            "previous_hash": self.previous_hash,
        }


def _event_hash(body: dict[str, Any]) -> str:
    encoded = json.dumps(
        body,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")
    return hashlib.sha256(encoded).hexdigest()


@dataclass(frozen=True, slots=True)
class RunLedger:
    entries: tuple[LedgerEntry, ...] = ()

    def append(
        self,
        kind: LedgerEventKind,
        week: int,
        payload: Mapping[str, Any],
        decision_id: str | None = None,
    ) -> "RunLedger":
        frozen_payload = freeze_json(payload)
        if not isinstance(frozen_payload, FrozenObject):
            raise TypeError("ledger payload must be a JSON object")
        previous_hash = self.entries[-1].event_hash if self.entries else GENESIS_HASH
        body = {
            "sequence": len(self.entries) + 1,
            "kind": kind.value,
            "week": week,
            "decision_id": decision_id,
            "payload": thaw_json(frozen_payload),
            "previous_hash": previous_hash,
        }
        entry = LedgerEntry(
            sequence=body["sequence"],
            kind=kind,
            week=week,
            decision_id=decision_id,
            payload=frozen_payload,
            previous_hash=previous_hash,
            event_hash=_event_hash(body),
        )
        return RunLedger(self.entries + (entry,))

    def verify(self) -> bool:
        previous_hash = GENESIS_HASH
        for expected_sequence, entry in enumerate(self.entries, start=1):
            if entry.sequence != expected_sequence or entry.previous_hash != previous_hash:
                return False
            if entry.event_hash != _event_hash(entry.canonical_body()):
                return False
            previous_hash = entry.event_hash
        return True

    @property
    def head_hash(self) -> str:
        return self.entries[-1].event_hash if self.entries else GENESIS_HASH
