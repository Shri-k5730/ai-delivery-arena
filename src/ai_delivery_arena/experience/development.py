"""Deterministic remediation plans for completed Arena assessments.

The development layer never changes the frozen first-attempt score. It converts
observed gaps into controls, artefacts, and tests that can be checked on a later
practice replay and, eventually, on a different transformation.
"""

from __future__ import annotations

from typing import Any


_GATE_REMEDIATION: dict[str, dict[str, str]] = {
    "G1": {
        "pattern": "Human review was named, but binding authority was not reliably separated from AI action.",
        "control": "Define permitted, prohibited, and approval-required actions before solution design or release planning.",
        "artifact": "Commercial authority matrix with action, system role, human approver, delegation limit, and escalation path.",
        "practice": "At D05, D11, and D20, keep every binding supplier action behind an authorized buyer or CPO decision.",
        "closure": "G1 passes and the final scope contains no AI-initiated commercial commitment outside recorded delegation.",
        "lesson": "A human in the loop is meaningless unless the human has a defined decision right and sees enough evidence to use it.",
    },
    "G2": {
        "pattern": "The proposed scope and the approved data or model route were not reconciled before release.",
        "control": "Treat model permission and data processing as task-level release constraints, not platform-level assumptions.",
        "artifact": "Approved data-flow and model-route map with classification, residency, retention, fallback, and approval owner.",
        "practice": "At D07, D14, D16, and D20, remove or reroute every task that cannot use the approved processing path.",
        "closure": "G2 passes and every released task is mapped to an approved endpoint, permitted data class, and tested fallback.",
        "lesson": "Architecture is not deployable until each released task fits the approved data and model route.",
    },
    "G3": {
        "pattern": "Production acceptance lacked a complete segmented threshold, severity, abstention, or authorized acceptance rule.",
        "control": "Set acceptance by task and material cohort before looking at the final aggregate result.",
        "artifact": "Evaluation acceptance matrix covering cohort, metric, threshold, material error, abstention route, and acceptor.",
        "practice": "At D08, D17, and D20, evaluate and release each material cohort against its own acceptance contract.",
        "closure": "G3 passes with thresholds, material-error definitions, abstention, and accountable acceptance recorded before release.",
        "lesson": "An aggregate score cannot establish production fitness when error cost and performance differ by cohort.",
    },
    "G4": {
        "pattern": "A strong aggregate result was allowed to hide a known materially failing cohort or process.",
        "control": "Make cohort containment automatic: block, exclude, or safely route any segment that misses its material threshold.",
        "artifact": "Cohort release matrix with pass/fail status, material errors, release route, fallback owner, and retest condition.",
        "practice": "At D17 and D20, release only passing cohorts; route failed German and Czech complex quotations to manual handling.",
        "closure": "G4 passes, no failed material cohort remains in scope, and every excluded cohort has an explicit retest threshold.",
        "lesson": "Evidence must be allowed to narrow or stop the plan. Averages never overrule a known material failure.",
    },
    "G5": {
        "pattern": "People were assigned activities, but the record did not prove who was authorized to accept each material risk.",
        "control": "Separate delivery ownership from risk-acceptance authority and escalate any boundary that lacks an authorized acceptor.",
        "artifact": "Authority and risk matrix covering business, data, model, security, operations, adoption, and final release.",
        "practice": "Replace PM, Scrum Master, training-team, or technical ownership with the authorized risk owner at each material gate.",
        "closure": "G5 passes and every accepted material risk names an authorized owner, acceptance basis, and escalation route.",
        "lesson": "Owning the work is not the same as holding the authority to accept its consequences.",
    },
    "G6": {
        "pattern": "A material value, readiness, accuracy, compliance, or cost claim remained stronger than the available evidence.",
        "control": "Maintain explicit fact, estimate, assumption, and contradicted states, with mandatory correction when evidence changes.",
        "artifact": "Claims register with baseline, evidence status, attribution method, owner, audience, and correction history.",
        "practice": "At D15 through D20, withdraw contradicted claims and rebase the final recommendation on attributable evidence.",
        "closure": "G6 passes and no contradicted material claim is presented as established in the final recommendation.",
        "lesson": "Trust is preserved by correcting a claim early, not by defending an obsolete headline more persuasively.",
    },
    "G7": {
        "pattern": "The proposed operating scope lacked one or more usable controls for monitoring, incident response, containment, or rollback.",
        "control": "Require an operational rehearsal before any action-capable release and keep the system non-binding until it passes.",
        "artifact": "Release-control rehearsal record covering signals, thresholds, incident owner, kill switch, rollback, and recovery evidence.",
        "practice": "At D12, D19, and D20, prove all four controls or explicitly keep the capability advisory and non-binding.",
        "closure": "G7 passes and monitoring, incident ownership, containment, and rollback are tested for the released scope.",
        "lesson": "A control is not operational because it appears in a design. It must be usable during failure.",
    },
}


_CRITERION_REMEDIATION: dict[str, tuple[str, str, str, str]] = {
    "BV1": ("Outcome drift", "Freeze a measurable workflow boundary and cohort, then revise it explicitly when evidence changes.", "Outcome and cohort contract", "The replay maintains one bounded outcome, cohort, exclusions, measure, and owner through D20."),
    "BV2": ("Headline value without attribution", "Use a Finance-owned baseline and an attribution rule tied to actual eligible use.", "Attributable value case", "The replay corrects unsupported benefit claims and connects value to adoption, cost, quality, and cohort."),
    "BV3": ("Technology-first scope", "Map each task to the simplest adequate method and the workflow value it creates.", "Task-to-value and technology map", "The replay changes technology or scope when data, approval, cost, or adoption evidence changes."),
    "BV4": ("Continuation by momentum", "Pre-commit measurable continue, reduce, extend, and stop conditions with an authorized owner.", "Continuation and stop charter", "The final route follows the recorded evidence thresholds rather than date, sunk effort, or sponsor preference."),
    "DC1": ("Scope pressure overrode the mandate", "Maintain an explicit contract for cohort, capability, exclusions, date, authority, and exit.", "Scope-control contract", "Every later expansion or reduction is an explicit trade-off and the D20 scope reconciles to it."),
    "DC2": ("Dependencies were discovered too late", "Validate high-risk access and approval paths early and keep a viable fallback off the critical path.", "Critical-path and fallback plan", "The replay tests the highest-risk dependency before irreversible build spend and replans when it slips."),
    "DC3": ("Named roles lacked capacity or authority", "Match realistic capacity and decision rights to build, evidence, security, adoption, and operations.", "Capacity and accountability plan", "Every material workstream has capacity, an accountable owner, contingency, and gate responsibility."),
    "DC4": ("Contradictory evidence was rationalized", "Use a fixed recovery doctrine: contain, correct, replan, assign, and set a decision date.", "Evidence-response log", "Each crisis changes scope, claims, controls, or timing when its evidence requires it."),
    "TI1": ("Architecture labels replaced responsibility design", "Decompose deterministic, model-assisted, retrieval, workflow, and human responsibilities with fallbacks.", "Responsibility and interface architecture", "The replay connects every component to error severity, permission, cost, observability, and authority."),
    "TI2": ("Aggregate performance hid material failure", "Use task- and cohort-specific thresholds, severity, abstention, regression, and containment.", "Segmented evaluation matrix", "Every released cohort passes its own threshold and any failure is excluded or safely routed before D20."),
    "TI3": ("Release depended on an unavailable path", "Define authoritative interfaces, failure modes, reconciliation, and an approved fallback.", "Integration and fallback contract", "The replay proves the fallback preserves critical controls and evaluation validity during disruption."),
    "TI4": ("Controls were listed but not executable", "Link monitored quality, cost, usage, and control signals to named containment and rollback actions.", "Operational control runbook", "The replay makes model or cost changes trigger auditable regression, containment, and recovery."),
    "DR1": ("All available data became assumed scope", "Map only required fields to the minimum authoritative source, purpose, owner, and permitted use.", "Minimum-source release map", "The replay avoids all-source integration and explicitly maps every released field to a necessary source."),
    "DR2": ("Data readiness was treated as an average", "Assess missingness, format, language, segment, label meaning, and error impact by cohort.", "Representativeness and fitness profile", "Segmented findings change the target, scope, evaluation, or fallback before release."),
    "DR3": ("Outputs could not be fully reconciled", "Preserve field provenance, transformation version, exceptions, and authoritative outcome reconciliation.", "Field-lineage and reconciliation record", "A buyer and incident reviewer can trace each released recommendation back to source and calculation."),
    "DR4": ("The delivery team implicitly owned source repair", "Set source-owner commitments, latest useful dates, fitness thresholds, remediation, and fallback.", "Data access and remediation contract", "Late or unfit data triggers the recorded cohort, sequence, or fallback change before D20."),
    "TG1": ("Human control was nominal", "Define permitted actions, verification duties, override, segregation, and final authority.", "Human-authority control matrix", "The replay keeps all material commitments inside delegated human authority with usable evidence."),
    "TG2": ("Permission was treated as a generic approval", "Connect each task to classification, endpoint, residency, retention, threat evidence, and fallback.", "Task-level permission map", "Every released task uses an approved route and any exception is removed or explicitly authorized."),
    "TG3": ("Activity ownership was confused with risk authority", "Map each material risk to the executive or delegated owner who can accept it and define escalation.", "Authority and risk matrix", "No material residual risk reaches D20 with only a PM, team, or technical activity owner."),
    "TG4": ("Claims outlived their evidence", "Separate facts, estimates, assumptions, and unresolved risks, then preserve corrections in the audit trail.", "Claims and correction register", "The replay corrects every contradicted material claim before the next funding or release decision."),
    "FS1": ("The budget omitted essential run work", "Allocate build, run, evaluation, security, adoption, operations, and contingency inside the envelope.", "Build-run allocation model", "Any reallocation preserves the highest-value evidence and discloses the sacrificed scope."),
    "FS2": ("One-call cost assumptions hid review loops", "Model task volume, retries, reprocessing, conversations, routing, unit cost, and sensitivity.", "Task-level unit economics model", "Observed cost drivers trigger the recorded reforecast and continuation threshold."),
    "FS3": ("Cost containment could silently degrade quality", "Use caching, routing, loop limits, budgets, alerts, and quality-aware fallbacks with an owner.", "Consumption and graceful-degradation policy", "The replay proves cost controls preserve accepted quality or makes degradation visible and contained."),
    "FS4": ("Cost and value were judged separately", "Make continuation depend on attributable value, unit economics, adoption, quality, risk, and opportunity cost.", "Value-to-cost decision record", "D20 selects the sustainable capability boundary and defines evidence for expansion or termination."),
    "UA1": ("Assumed behaviour replaced workflow evidence", "Observe representative users and translate pain, review duties, exceptions, and burden into design.", "Current-state workflow evidence map", "Workflow evidence changes architecture, value, control, or scope before release."),
    "UA2": ("Rejection was treated as resistance", "Remove duplicate work and embed evidence, exceptions, edit, override, and traceability in existing review.", "Before-after workflow proof", "The replay releases no workflow with duplicate entry and demonstrates acceptable review burden."),
    "UA3": ("Training substituted for product correction", "Give a business change owner responsibility for process, support, feedback, incentives, and role capability.", "Change ownership and capability plan", "Observed rejection changes the product or process before training and mandated usage are considered."),
    "UA4": ("Usage was mistaken for realized value", "Measure eligible use, completion, review burden, overrides, error interception, cycle time, and confidence by cohort.", "Adoption-to-value measurement plan", "The replay uses adoption evidence to re-estimate value and change scope, workflow, expansion, or stop conditions."),
}


_GATE_CRITERIA = {
    "G1": {"TG1"},
    "G2": {"TG2"},
    "G3": {"TI2"},
    "G4": {"TI2", "DR2"},
    "G5": {"TG3", "DC3"},
    "G6": {"TG4", "BV2"},
    "G7": {"TI4"},
}


def build_development_actions(
    gates: tuple[dict[str, object], ...],
    development_needs: tuple[dict[str, object], ...],
) -> tuple[dict[str, object], ...]:
    """Create a prioritized, non-duplicative remediation plan."""

    actions: list[dict[str, object]] = []
    covered_criteria: set[str] = set()
    priority = 1
    for gate in gates:
        status = str(gate.get("status"))
        if status not in {"fail", "unresolved"}:
            continue
        gate_id = str(gate["gate_id"])
        play = _GATE_REMEDIATION[gate_id]
        actions.append(
            {
                "id": gate_id,
                "type": "critical_gate",
                "priority": priority,
                "severity": "critical" if status == "fail" else "required",
                "title": str(gate["title"]),
                "diagnosis": str(gate["reason"]),
                "failure_pattern": play["pattern"],
                "corrective_control": play["control"],
                "required_artifact": play["artifact"],
                "practice_assignment": play["practice"],
                "closure_test": play["closure"],
                "source_decisions": list(
                    gate.get("basis_decisions") or gate.get("relevant_decisions") or []
                ),
                "status": "diagnosed",
            }
        )
        priority += 1
        covered_criteria.update(_GATE_CRITERIA.get(gate_id, set()))

    target_total = max(5, len(actions))
    for need in development_needs:
        if len(actions) >= target_total:
            break
        criterion_id = str(need["criterion_id"])
        if criterion_id in covered_criteria:
            continue
        pattern, control, artifact, test = _CRITERION_REMEDIATION[criterion_id]
        target = 3 if int(need["score"]) < 3 else 4
        actions.append(
            {
                "id": criterion_id,
                "type": "competency",
                "priority": priority,
                "severity": "development",
                "title": str(need["name"]),
                "diagnosis": str(need.get("diagnosis") or need["priority"]),
                "failure_pattern": pattern,
                "corrective_control": control,
                "required_artifact": artifact,
                "practice_assignment": (
                    f"Re-run the relevant decisions and produce the {artifact.lower()} "
                    "before making the final recommendation."
                ),
                "closure_test": test,
                "target_score": target,
                "source_decisions": list(need.get("contrary_evidence") or []),
                "status": "diagnosed",
            }
        )
        priority += 1

    return tuple(actions)


def build_learning_outcome(
    actions: tuple[dict[str, object], ...],
) -> dict[str, object]:
    """Summarize the learning claim without overstating remediation."""

    primary = actions[0] if actions else None
    if primary is not None and primary["type"] == "critical_gate":
        lesson = _GATE_REMEDIATION[str(primary["id"])]["lesson"]
    elif primary is not None:
        lesson = (
            f"The next development priority is {str(primary['title']).lower()}. "
            "The gap is behavioral, so it must be corrected in another decision run."
        )
    else:
        lesson = (
            "The run established no critical remediation requirement, but transfer "
            "still needs to be demonstrated in a different transformation."
        )
    return {
        "primary_learning": lesson,
        "status": "diagnosed" if actions else "practice_ready",
        "open_actions": len(actions),
        "closure_standard": (
            "Reading the feedback does not close a gap. A same-scenario replay can "
            "show practice correction; only a later transformation can verify transfer."
        ),
        "artifact_boundary": (
            "Corrective artefacts are prescribed but not semantically inspected in "
            "this release. Replay status verifies decision patterns, not document quality."
        ),
        "stages": [
            {"id": "diagnosed", "label": "Gap diagnosed", "status": "complete"},
            {"id": "control", "label": "Corrective assignment issued", "status": "complete"},
            {"id": "practice", "label": "Practice decision corrected", "status": "next" if actions else "locked"},
            {"id": "transfer", "label": "Transfer verified", "status": "locked"},
        ],
    }


def compare_development(
    source_report: dict[str, Any],
    replay_report: dict[str, Any],
) -> dict[str, object]:
    """Evaluate correction on a replay without claiming cross-scenario transfer."""

    replay_gates = {
        str(item["gate_id"]): item for item in replay_report.get("gates", [])
    }
    replay_criteria = {
        str(item["id"]): item
        for dimension in replay_report.get("dimensions", [])
        for item in dimension.get("criteria", [])
    }
    results: list[dict[str, object]] = []
    for action in source_report.get("development_actions", []):
        action_id = str(action["id"])
        if action["type"] == "critical_gate":
            replay_item = replay_gates.get(action_id, {})
            corrected = replay_item.get("status") == "pass"
            evidence = (
                f"{action_id} passed on the practice replay."
                if corrected
                else f"{action_id} remained {replay_item.get('status', 'unresolved')} on the practice replay."
            )
        else:
            replay_item = replay_criteria.get(action_id, {})
            target = int(action.get("target_score", 3))
            score = int(replay_item.get("score", 0))
            corrected = score >= target
            evidence = f"{action_id} scored {score}/4 against a replay target of {target}/4."
        results.append(
            {
                "id": action_id,
                "title": action["title"],
                "status": "practice_corrected" if corrected else "still_open",
                "evidence": evidence,
                "closure_test": action["closure_test"],
            }
        )

    corrected_count = sum(
        item["status"] == "practice_corrected" for item in results
    )
    all_corrected = bool(results) and corrected_count == len(results)
    return {
        "source_run_id": source_report["run_id"],
        "replay_run_id": replay_report["run_id"],
        "source_learning_outcome": source_report.get("learning_outcome", {}),
        "source_development_actions": source_report.get(
            "development_actions",
            [],
        ),
        "practice_status": "corrected" if all_corrected else "incomplete",
        "corrected_actions": corrected_count,
        "total_actions": len(results),
        "score_change": round(
            float(replay_report["reported_overall"])
            - float(source_report["reported_overall"]),
            1,
        ),
        "gate_standing_before": source_report["outcome"]["gate_standing"],
        "gate_standing_after": replay_report["outcome"]["gate_standing"],
        "actions": results,
        "transfer_status": "not_verified",
        "transfer_note": (
            "This replay can prove correction after feedback. It cannot prove that "
            "the judgment will transfer to a different transformation."
        ),
    }
