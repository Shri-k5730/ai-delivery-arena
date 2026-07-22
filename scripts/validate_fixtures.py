
#!/usr/bin/env python3
"""Validate AI Delivery Arena scenario fixtures using only the Python standard library.

The validator checks the published JSON contract, cross-file references, investigation
timing, rule arbitration, crisis preparedness, and exact deterministic replay of all
reference runs. It intentionally does not score participant competence or adjudicate
critical gates.
"""

from __future__ import annotations

import json
import math
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
FIXTURE_DIR = ROOT / "fixtures" / "procurement-under-pressure" / "0.1.0"
SCHEMA_PATH = ROOT / "schemas" / "scenario-fixtures.schema.json"

EXPECTED_HEADERS = {
    "schema_version": "1.0.0",
    "scenario_id": "procurement-under-pressure",
    "scenario_version": "0.1.0",
}


class ValidationError(Exception):
    pass


def require(condition: bool, message: str) -> None:
    if not condition:
        raise ValidationError(message)


def load_json(path: Path) -> dict[str, Any]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ValidationError(f"missing file: {path.relative_to(ROOT)}") from exc
    except json.JSONDecodeError as exc:
        raise ValidationError(
            f"invalid JSON in {path.relative_to(ROOT)} at line {exc.lineno}: {exc.msg}"
        ) from exc
    require(isinstance(data, dict), f"{path.name} must contain a JSON object")
    return data


def check_header(data: dict[str, Any], artifact_type: str, filename: str) -> None:
    require(data.get("artifact_type") == artifact_type, f"{filename}: wrong artifact_type")
    for key, expected in EXPECTED_HEADERS.items():
        require(data.get(key) == expected, f"{filename}: {key} must equal {expected!r}")


def unique_ids(items: list[dict[str, Any]], key: str, context: str) -> set[str]:
    values = [item.get(key) for item in items]
    require(all(isinstance(value, str) and value for value in values), f"{context}: invalid {key}")
    require(len(values) == len(set(values)), f"{context}: duplicate {key}")
    return set(values)


def check_structural_contract(
    schema: dict[str, Any],
    scenario: dict[str, Any],
    evidence: dict[str, Any],
    transitions: dict[str, Any],
    crises: dict[str, Any],
    reference_runs: dict[str, Any],
) -> None:
    require(schema.get("$schema") == "https://json-schema.org/draft/2020-12/schema", "schema draft mismatch")
    require("$defs" in schema and "oneOf" in schema, "schema must expose definitions and artifact variants")

    check_header(scenario, "scenario", "scenario.json")
    check_header(evidence, "evidence_catalog", "evidence.json")
    check_header(transitions, "transitions", "transitions.json")
    check_header(crises, "crises", "crises.json")
    check_header(reference_runs, "reference_runs", "reference-runs.json")

    dimensions = scenario["health_model"]["dimensions"]
    require(len(dimensions) == 7 and len(set(dimensions)) == 7, "scenario must define seven unique health dimensions")
    require(set(scenario["health_model"]["initial_state"]) == set(dimensions), "initial health keys must match dimensions")
    require(scenario["run_config"]["first_attempt_health_visibility"] is False, "first-attempt health must remain hidden")
    require(scenario["run_config"]["randomness_allowed"] is False, "benchmark-mode randomness must be disabled")

    decision_ids = unique_ids(scenario["decisions"], "id", "scenario decisions")
    require(decision_ids == {f"D{i:02d}" for i in range(1, 21)}, "scenario must define D01-D20 exactly")
    staged_ids = [decision_id for stage in scenario["stages"] for decision_id in stage["decision_ids"]]
    require(len(staged_ids) == 20 and set(staged_ids) == decision_ids, "stages must partition all decisions exactly once")
    require([stage["id"] for stage in scenario["stages"]] == ["frame", "design", "plan", "defend", "operate"], "stage order mismatch")

    evidence_ids = unique_ids(evidence["items"], "id", "evidence catalogue")
    require(len(evidence_ids) == 15, "evidence catalogue must contain 15 items")
    require({"EV-POLICY-01", "EV-SOURCE-01"}.issubset(evidence_ids), "free evidence entries are missing")
    for item in evidence["items"]:
        if item["cost"] == 0:
            require(item["lead_time_weeks"] == 0 and item["initial_state"] == "available", f"{item['id']}: free evidence must be immediately available")
        else:
            require(item["initial_state"] == "requestable", f"{item['id']}: paid evidence must start requestable")
        require(set(item["hidden_truth_ids"]).issubset(set(scenario["hidden_truth_ids"])), f"{item['id']}: unknown hidden truth")
        require(set(item["latest_useful_decisions"]).issubset(decision_ids), f"{item['id']}: unknown decision reference")

    rule_ids = unique_ids(transitions["rules"], "rule_id", "transition rules")
    require(len(rule_ids) == 49, "transition registry must contain 49 rules")
    require({rule["decision_id"] for rule in transitions["rules"]} == decision_ids, "every decision must have at least one transition rule")
    for rule in transitions["rules"]:
        require(rule["rule_id"].startswith(f"TR-{rule['decision_id']}-"), f"{rule['rule_id']}: rule/decision mismatch")
        require(rule["priority"] in {100, 200, 300, 400, 500}, f"{rule['rule_id']}: invalid priority")
        for effect in rule["effects"]:
            require(effect["dimension"] in dimensions, f"{rule['rule_id']}: unknown effect dimension")
            require(-30 <= effect["authored_effect"] <= 30, f"{rule['rule_id']}: effect out of range")

    crisis_ids = unique_ids(crises["crises"], "id", "crises")
    require(crisis_ids == {f"C{i:02d}" for i in range(1, 7)}, "crises must define C01-C06 exactly")
    require(crises["event_order"] == [f"C{i:02d}" for i in range(1, 7)], "crisis order mismatch")
    for crisis in crises["crises"]:
        require(crisis["linked_decision"] in {f"D{i:02d}" for i in range(14, 20)}, f"{crisis['id']}: invalid linked decision")
        for level in ("prepared", "partial", "unprepared"):
            require(level in crisis["preparedness"], f"{crisis['id']}: missing {level} definition")
            for effect in crisis["preparedness"][level]["effects"]:
                require(effect["dimension"] in dimensions, f"{crisis['id']}: unknown effect dimension")

    runs = reference_runs["runs"]
    require(len(runs) == 3, "exactly three reference runs are required")
    require(unique_ids(runs, "run_id", "reference runs") == {"RR-A", "RR-B", "RR-C"}, "reference runs must be RR-A, RR-B, and RR-C")
    for run in runs:
        require(len(run["decisions"]) == 20, f"{run['run_id']}: expected 20 decisions")
        require([record["decision_id"] for record in run["decisions"]] == [f"D{i:02d}" for i in range(1, 21)], f"{run['run_id']}: decision order mismatch")
        require(len(run["crisis_preparedness"]) == 6, f"{run['run_id']}: expected six preparedness records")
        require([item["crisis_id"] for item in run["crisis_preparedness"]] == [f"C{i:02d}" for i in range(1, 7)], f"{run['run_id']}: preparedness order mismatch")
        require(set(run["expected_terminal_health"]) == set(dimensions), f"{run['run_id']}: terminal health keys mismatch")
        require({gate["gate_id"] for gate in run["expected_gates"]} == set(scenario["gate_ids"]), f"{run['run_id']}: expected gates mismatch")


def evidence_state(
    evidence_id: str,
    week: int,
    completed_decisions: set[str],
    evidence_by_id: dict[str, dict[str, Any]],
    schedule_by_id: dict[str, dict[str, Any]],
) -> str:
    catalog = evidence_by_id[evidence_id]
    if catalog["cost"] == 0:
        return "available"
    schedule = schedule_by_id.get(evidence_id)
    if schedule is None:
        return "requestable"
    if week < schedule["request_week"]:
        return "requestable"
    if week < schedule["arrival_week"]:
        return "requested"
    first_use = schedule["first_use"]
    if isinstance(first_use, str) and first_use.startswith("D") and first_use in completed_decisions:
        return "verified"
    return "available"


def current_fact_map(facts: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    for fact in facts:
        result[fact["key"]] = fact
    return result


def condition_matches(
    condition: dict[str, Any],
    facts: dict[str, dict[str, Any]],
    week: int,
    completed_decisions: set[str],
    evidence_by_id: dict[str, dict[str, Any]],
    schedule_by_id: dict[str, dict[str, Any]],
) -> bool:
    source = condition["source"]
    if source == "fact":
        record = facts.get(condition["key"])
        if record is None:
            return False
        if "status" in condition and record.get("status") != condition["status"]:
            return False
        actual = record.get("value")
    elif source == "evidence":
        if condition["key"] not in evidence_by_id:
            return False
        actual = evidence_state(
            condition["key"], week, completed_decisions, evidence_by_id, schedule_by_id
        )
    else:
        return False

    operator = condition["operator"]
    expected = condition.get("value")
    if operator == "eq":
        return actual == expected
    if operator == "in":
        return actual in expected
    if operator == "gte":
        return isinstance(actual, (int, float)) and actual >= expected
    if operator == "exists":
        return actual is not None
    raise ValidationError(f"unsupported condition operator: {operator}")


def predicate_matches(
    predicate: dict[str, Any],
    facts: dict[str, dict[str, Any]],
    week: int,
    completed_decisions: set[str],
    evidence_by_id: dict[str, dict[str, Any]],
    schedule_by_id: dict[str, dict[str, Any]],
) -> bool:
    match = lambda condition: condition_matches(  # noqa: E731
        condition, facts, week, completed_decisions, evidence_by_id, schedule_by_id
    )
    return (
        all(match(condition) for condition in predicate.get("all", []))
        and (not predicate.get("any") or any(match(condition) for condition in predicate["any"]))
        and not any(match(condition) for condition in predicate.get("none", []))
    )


def apply_effect(health: float, authored_effect: float) -> float:
    if authored_effect > 0:
        return health + authored_effect * (100.0 - health) / 100.0
    return health + authored_effect * health / 100.0


def apply_effects(health: dict[str, float], effects: list[dict[str, Any]]) -> None:
    for effect in effects:
        dimension = effect["dimension"]
        health[dimension] = apply_effect(health[dimension], float(effect["authored_effect"]))


def validate_reference_run(
    run: dict[str, Any],
    scenario: dict[str, Any],
    evidence: dict[str, Any],
    transitions: dict[str, Any],
    crises: dict[str, Any],
) -> dict[str, float]:
    run_id = run["run_id"]
    decision_by_id = {item["id"]: item for item in scenario["decisions"]}
    evidence_by_id = {item["id"]: item for item in evidence["items"]}
    rules_by_id = {item["rule_id"]: item for item in transitions["rules"]}
    rules_by_decision: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for rule in transitions["rules"]:
        rules_by_decision[rule["decision_id"]].append(rule)
    crisis_by_trigger = {item["trigger"]["after"]: item for item in crises["crises"]}
    expected_preparedness = {item["crisis_id"]: item["status"] for item in run["crisis_preparedness"]}

    schedule_by_id = {item["evidence_id"]: item for item in run["investigation_schedule"]}
    require(len(schedule_by_id) == len(run["investigation_schedule"]), f"{run_id}: duplicate investigation request")
    credits = 0
    for evidence_id, schedule in schedule_by_id.items():
        require(evidence_id in evidence_by_id, f"{run_id}: unknown scheduled evidence {evidence_id}")
        catalog = evidence_by_id[evidence_id]
        require(schedule["cost"] == catalog["cost"], f"{run_id}/{evidence_id}: cost differs from catalogue")
        require(schedule["arrival_week"] == schedule["request_week"] + catalog["lead_time_weeks"], f"{run_id}/{evidence_id}: arrival does not equal request plus lead time")
        credits += schedule["cost"]
        first_use = schedule["first_use"]
        if isinstance(first_use, str) and first_use.startswith("D"):
            require(first_use in decision_by_id, f"{run_id}/{evidence_id}: unknown first-use decision")
            require(decision_by_id[first_use]["week"] >= schedule["arrival_week"], f"{run_id}/{evidence_id}: used before arrival")
    require(credits <= scenario["run_config"]["investigation_credits"], f"{run_id}: investigation credits exceed budget")

    health = {key: float(value) for key, value in scenario["health_model"]["initial_state"].items()}
    fact_history: list[dict[str, Any]] = []
    completed_decisions: set[str] = set()

    for record in run["decisions"]:
        decision_id = record["decision_id"]
        week = decision_by_id[decision_id]["week"]
        completed_decisions.add(decision_id)

        for fact in record["facts"]:
            for ref in fact.get("evidence_refs", []):
                if ref.startswith("EV-CRISIS-") or ref.startswith("RR-"):
                    continue
                require(ref in evidence_by_id, f"{run_id}/{decision_id}: unknown evidence ref {ref}")
                state = evidence_state(ref, week, completed_decisions, evidence_by_id, schedule_by_id)
                require(state in {"available", "verified"}, f"{run_id}/{decision_id}: evidence {ref} is {state}, not available")
            fact_history.append(fact)

        facts = current_fact_map(fact_history)
        matching_rules = [
            rule
            for rule in rules_by_decision[decision_id]
            if predicate_matches(rule["when"], facts, week, completed_decisions, evidence_by_id, schedule_by_id)
        ]
        winner_by_group: dict[str, dict[str, Any]] = {}
        for rule in matching_rules:
            current = winner_by_group.get(rule["stacking_group"])
            if current is None or (rule["priority"], rule["rule_id"]) > (current["priority"], current["rule_id"]):
                winner_by_group[rule["stacking_group"]] = rule
        winners = sorted(winner_by_group.values(), key=lambda item: item["rule_id"])
        expected_rule_ids = [rule["rule_id"] for rule in winners]
        selected_rule_ids = sorted(record["selected_rule_ids"])
        require(selected_rule_ids == expected_rule_ids, f"{run_id}/{decision_id}: selected rules {selected_rule_ids} != executable winners {expected_rule_ids}")

        for rule_id in selected_rule_ids:
            require(rule_id in rules_by_id, f"{run_id}/{decision_id}: unknown rule {rule_id}")
            apply_effects(health, rules_by_id[rule_id]["effects"])

        crisis = crisis_by_trigger.get(decision_id)
        if crisis:
            require(crisis["trigger"]["week"] == week or crisis["trigger"]["week"] >= week, f"{run_id}/{crisis['id']}: invalid trigger week")
            resolved_status = "unprepared"
            for status in ("prepared", "partial"):
                definition = crisis["preparedness"][status]
                if predicate_matches(definition["when"], facts, crisis["trigger"]["week"], completed_decisions, evidence_by_id, schedule_by_id):
                    resolved_status = status
                    break
            require(expected_preparedness[crisis["id"]] == resolved_status, f"{run_id}/{crisis['id']}: declared {expected_preparedness[crisis['id']]} but predicates resolve {resolved_status}")
            apply_effects(health, crisis["preparedness"][resolved_status]["effects"])

    rounded = {key: round(value, 1) for key, value in health.items()}
    expected = run["expected_terminal_health"]
    for dimension, expected_value in expected.items():
        require(math.isclose(rounded[dimension], expected_value, abs_tol=0.05), f"{run_id}: {dimension} replayed {rounded[dimension]} != expected {expected_value}")
    return rounded


def main() -> int:
    try:
        schema = load_json(SCHEMA_PATH)
        scenario = load_json(FIXTURE_DIR / "scenario.json")
        evidence = load_json(FIXTURE_DIR / "evidence.json")
        transitions = load_json(FIXTURE_DIR / "transitions.json")
        crises = load_json(FIXTURE_DIR / "crises.json")
        reference_runs = load_json(FIXTURE_DIR / "reference-runs.json")

        check_structural_contract(schema, scenario, evidence, transitions, crises, reference_runs)
        results = {
            run["run_id"]: validate_reference_run(run, scenario, evidence, transitions, crises)
            for run in reference_runs["runs"]
        }
    except (KeyError, TypeError, ValidationError) as exc:
        print(f"FIXTURE VALIDATION FAILED: {exc}", file=sys.stderr)
        return 1

    print("Fixture validation passed")
    print("  artifacts: 5")
    print("  evidence items: 15")
    print("  transition rules: 49")
    print("  crises: 6")
    print("  reference decisions: 60")
    for run_id, terminal in results.items():
        values = " / ".join(f"{value:.1f}" for value in terminal.values())
        print(f"  {run_id}: {values}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
