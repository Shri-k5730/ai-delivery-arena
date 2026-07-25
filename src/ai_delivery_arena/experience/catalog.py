"""Load the participant decision catalogue from the authored scenario contract."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path


class CatalogueError(ValueError):
    """Raised when the human-authored decision contract cannot be presented."""


@dataclass(frozen=True, slots=True)
class OptionDefinition:
    id: str
    label: str
    prototype_run_id: str | None = None

    def public_dict(self) -> dict[str, str]:
        return {"id": self.id, "label": self.label}


@dataclass(frozen=True, slots=True)
class DecisionPrompt:
    id: str
    title: str
    stage: str
    week: int
    moment: str
    information: str
    required_response: str
    options: tuple[OptionDefinition, ...]

    def public_dict(self) -> dict[str, object]:
        return {
            "id": self.id,
            "title": self.title,
            "stage": self.stage,
            "week": self.week,
            "moment": self.moment,
            "information": self.information,
            "required_response": self.required_response,
            "options": [option.public_dict() for option in self.options],
        }


@dataclass(frozen=True, slots=True)
class DecisionCatalogue:
    decisions: tuple[DecisionPrompt, ...]

    def get(self, decision_id: str) -> DecisionPrompt:
        for decision in self.decisions:
            if decision.id == decision_id:
                return decision
        raise CatalogueError(f"unknown participant decision: {decision_id}")


# These mappings identify authored reference evidence for a listed stance. They are
# never returned by the participant API. Options with no prototype remain legitimate
# choices; the deterministic engine records no invented transition effect for them.
_PROTOTYPES: dict[tuple[str, str], str] = {
    ("D01", "A"): "RR-C",
    ("D01", "B"): "RR-A",
    ("D02", "A"): "RR-C",
    ("D02", "B"): "RR-A",
    ("D04", "A"): "RR-C",
    ("D04", "B"): "RR-A",
    ("D04", "C"): "RR-B",
    ("D05", "A"): "RR-C",
    ("D05", "B"): "RR-A",
    ("D06", "A"): "RR-C",
    ("D06", "B"): "RR-A",
    ("D07", "A"): "RR-C",
    ("D07", "B"): "RR-B",
    ("D07", "C"): "RR-A",
    ("D08", "A"): "RR-C",
    ("D08", "B"): "RR-A",
    ("D09", "A"): "RR-C",
    ("D09", "B"): "RR-A",
    ("D10", "A"): "RR-C",
    ("D10", "B"): "RR-A",
    ("D10", "D"): "RR-C",
    ("D11", "B"): "RR-A",
    ("D11", "D"): "RR-C",
    ("D12", "A"): "RR-C",
    ("D12", "B"): "RR-A",
    ("D13", "A"): "RR-C",
    ("D13", "C"): "RR-A",
    ("D14", "A"): "RR-C",
    ("D14", "C"): "RR-A",
    ("D15", "C"): "RR-A",
    ("D15", "D"): "RR-C",
    ("D16", "A"): "RR-C",
    ("D16", "B"): "RR-A",
    ("D17", "A"): "RR-C",
    ("D17", "C"): "RR-A",
    ("D17", "D"): "RR-C",
    ("D18", "A"): "RR-C",
    ("D18", "B"): "RR-C",
    ("D18", "C"): "RR-A",
    ("D19", "C"): "RR-A",
    ("D19", "D"): "RR-C",
    ("D20", "A"): "RR-C",
    ("D20", "B"): "RR-A",
    ("D20", "C"): "RR-B",
    ("D20", "E"): "RR-B",
}


_CUSTOM_FACTS: dict[tuple[str, str], tuple[tuple[str, object, str], ...]] = {
    ("D01", "C"): (
        ("mandate.release_mode", "open_discovery", "supported"),
        ("mandate.decision_date_defined", False, "asserted"),
    ),
    ("D05", "C"): (
        ("architecture.pattern", "predictive_historical_awards", "supported"),
        ("data.recommendation_target", "historical_awards", "supported"),
    ),
    ("D05", "D"): (
        ("architecture.pattern", "rules_and_document_automation", "supported"),
        ("architecture.fallback_defined", True, "supported"),
    ),
    ("D06", "C"): (
        ("delivery.temporary_path_controlled", True, "supported"),
        ("data.upload_only_target_state", True, "asserted"),
    ),
    ("D09", "D"): (
        ("delivery.manual_upload_target_state", True, "supported"),
    ),
    ("D11", "A"): (
        ("workflow.duplicate_entry", True, "supported"),
        ("authority.human_recommendation_retained", True, "supported"),
    ),
    ("D11", "C"): (
        ("workflow.duplicate_entry", True, "supported"),
    ),
    ("D13", "D"): (
        ("authority.material_decision_delegated_to_delivery", True, "supported"),
    ),
    ("D14", "B"): (
        ("security.ciso_concern_accepted", True, "supported"),
        ("model.approved_route_reconciled_with_scope", False, "asserted"),
    ),
}


def custom_fact_template(
    decision_id: str, option_id: str
) -> tuple[tuple[str, object, str], ...]:
    return _CUSTOM_FACTS.get((decision_id, option_id), ())


def _clean(value: str) -> str:
    return re.sub(r"\s+", " ", value.strip())


def _field(body: str, label: str) -> str:
    pattern = rf"\*\*{re.escape(label)}:\*\*\s*(.*?)(?=\n\n\*\*|\Z)"
    match = re.search(pattern, body, flags=re.DOTALL)
    return _clean(match.group(1)) if match else ""


def _options(decision_id: str, body: str) -> tuple[OptionDefinition, ...]:
    block = re.search(
        r"\*\*Action choices:\*\*\s*(.*?)(?=\n\n\*\*Required response:\*\*)",
        body,
        flags=re.DOTALL,
    )
    if block is None:
        if decision_id == "D03":
            return (
                OptionDefinition(
                    id="P",
                    label="Commit the investigation plan recorded in the evidence panel.",
                ),
            )
        raise CatalogueError(f"{decision_id} has no action choices")

    options: list[OptionDefinition] = []
    for option_id, label in re.findall(
        r"^([A-F])\.\s+(.+?)(?=\s{2,}$|\n[A-F]\.|\Z)",
        block.group(1),
        flags=re.MULTILINE | re.DOTALL,
    ):
        options.append(
            OptionDefinition(
                id=option_id,
                label=_clean(label),
                prototype_run_id=_PROTOTYPES.get((decision_id, option_id)),
            )
        )
    if not options:
        raise CatalogueError(f"{decision_id} action choices could not be parsed")
    return tuple(options)


def load_decision_catalogue(
    markdown_path: str | Path,
    *,
    stage_by_decision: dict[str, str],
    week_by_decision: dict[str, int],
) -> DecisionCatalogue:
    """Parse the participant-safe parts of ``DECISIONS.md``."""

    path = Path(markdown_path)
    try:
        text = path.read_text(encoding="utf-8")
    except FileNotFoundError as exc:
        raise CatalogueError(f"decision contract is missing: {path}") from exc

    parsed: list[DecisionPrompt] = []
    pattern = re.compile(
        r"^### (D\d{2})\. (.*?)\n(.*?)(?=^### D\d{2}\.|\Z)",
        flags=re.MULTILINE | re.DOTALL,
    )
    for decision_id, title, body in pattern.findall(text):
        parsed.append(
            DecisionPrompt(
                id=decision_id,
                title=_clean(title),
                stage=stage_by_decision[decision_id],
                week=week_by_decision[decision_id],
                moment=_field(body, "Moment"),
                information=_field(body, "Information shown"),
                required_response=_field(body, "Required response"),
                options=_options(decision_id, body),
            )
        )

    expected = tuple(f"D{index:02d}" for index in range(1, 21))
    actual = tuple(item.id for item in parsed)
    if actual != expected:
        raise CatalogueError(
            f"decision catalogue must contain D01-D20 in order; found {actual}"
        )
    return DecisionCatalogue(tuple(parsed))
