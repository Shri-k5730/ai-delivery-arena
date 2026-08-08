# Next transformation design brief

## Working title

**Predictive Quality Under Pressure**

## Why this scenario is next

The next transformation must test transfer, not recall of the procurement
scenario. Manufacturing quality changes the surface facts, stakeholders, data,
model class, operating risk, and value mechanism while preserving several core
leadership judgments.

It is especially suitable for re-testing whether a participant can:

- stop an aggregate metric from hiding a materially failing cohort;
- separate delivery activity from authorized quality-risk acceptance;
- redesign a rejected workflow instead of blaming training or resistance; and
- keep the minimum authoritative data sources on the release path.

The scenario will be entirely synthetic. It must not reproduce customer data,
plant names, budgets, defect values, system names, or claims from a real
engagement.

## Premise

A multi-plant manufacturer has approved an 18-week transformation to reduce
avoidable scrap and late defect detection on one high-volume forming and
assembly value stream. Leadership expects an AI-assisted early-warning system,
but defect labels are delayed, process timestamps do not align, maintenance and
quality ownership overlap, and operators already use several disconnected
screens.

The participant must decide what to measure, which process and product cohorts
to include, which signals and source systems are necessary, how to validate
early-warning performance, where human quality authority remains, how the tool
fits the operating workflow, and what can safely enter a canary release.

## Transfer design

| Prior judgment pattern | New surface condition | Transfer evidence |
|---|---|---|
| Aggregate score hides failure | Strong overall recall, weak performance on a safety-critical product family and night shift | Participant excludes or safely routes the failed cohorts before release |
| Activity owner treated as risk acceptor | Delivery PM and plant manager are active, but only the delegated quality authority can accept residual escape risk | Authorized quality owner and escalation path are recorded |
| Workflow rejection treated as resistance | Operators reject a separate alert dashboard that duplicates acknowledgement and downtime coding | Assistance is embedded into the existing response workflow and burden is re-tested |
| All sources placed on the critical path | Fourteen candidate systems exist, but only a small authoritative set is required for the first cohort | Minimum-source release map is maintained through the final decision |

The wording and option structure must not echo the procurement scenario. A
participant who memorized the earlier debrief should still have to recognize the
underlying mechanism.

## Proposed structure

| Stage | Decisions | Purpose |
|---|---:|---|
| Frame | D01-D04 | Define the quality outcome, baseline, cohort, decision boundary, and AI suitability |
| Design | D05-D08 | Choose the data contract, architecture, evaluation units, severity, and fallback |
| Plan | D09-D12 | Sequence access, capacity, operating workflow, observability, cost, and change |
| Defend | D13-D16 | Respond to sponsor claims, permission constraints, delayed labels, and schedule pressure |
| Operate | D17-D20 | Contain cohort failure, redesign adoption, control cost, and make the release decision |

Target shape: 20 permanent decisions, 6 deterministic crises, 10 investigation
credits, 7 competency dimensions, and 7 non-compensable gates. The duration and
budget will be fixed only after the state transitions and reference runs are
balanced.

## Proposed crises

1. **Timestamp mismatch:** apparently predictive signals are partly created by
   post-defect data leakage.
2. **Cohort failure:** the overall model appears strong, but one product family
   and operating shift contain materially dangerous misses.
3. **Workflow rejection:** operators reject duplicate alert acknowledgement and
   manual reason-code entry.
4. **Permission constraint:** one high-value signal cannot leave the approved
   plant processing boundary.
5. **Cost overrun:** high-frequency feature recomputation and alert explanation
   loops exceed the unit-cost model.
6. **Benefit contradiction:** Finance and Quality show that the announced scrap
   saving includes unrelated process changes and avoided production volume.

## Candidate critical gates

1. **Quality authority:** AI cannot change a control limit, disposition product,
   or release a quality hold without authorized human action.
2. **Data and model permission:** released signals and inference routes remain
   inside approved plant and enterprise boundaries.
3. **Evaluation sufficiency:** thresholds cover product, shift, operating mode,
   severity, lead time, false-alarm burden, abstention, and accountable acceptance.
4. **Severe cohort failure:** a materially failing product, shift, or operating
   regime is blocked, excluded, or routed to a safe fallback.
5. **Accountable ownership:** residual quality, process, data, security, and
   operational risks have authorized acceptors.
6. **Claim integrity:** scrap, escape, downtime, readiness, and cost claims follow
   attributable evidence.
7. **Operational control:** monitoring, incident ownership, containment,
   rollback, and recovery are tested before action-capable release.

## Comparability rule

The new scenario may reuse the seven dimension names and general competency
constructs, but it must have independent fixtures, hidden truths, transitions,
crises, gate predicates, reference runs, and adversarial runs. Procurement
option signatures must never be reused as the scoring key.

Transfer can be reported only where a criterion or gate is explicitly mapped
across both scenarios. A strong result in an unrelated criterion is not evidence
that a previous gap closed.

## Definition of ready for implementation

- Scenario foundation and authority map approved.
- Twenty decisions written without preferred-answer leakage.
- At least twelve hidden truths and fifteen evidence items connected to decisions.
- Six crises have prepared, partial, and unprepared outcomes.
- Seven gate predicates and caps are independently reviewed.
- Two defensible reference routes, one weak route, and adversarial runs replay exactly.
- Cross-scenario transfer map is explicit and limited to genuinely comparable constructs.
- No real customer information or copied engagement economics appears anywhere.
