# Procurement Under Pressure: Scoring Rubric

**Scenario ID:** `procurement-under-pressure@0.1.0`  
**Artifact:** Criterion-level participant assessment and gate-adjudication contract  
**Status:** Draft for independent paper scoring. Not calibrated. Not a benchmark result.

## 1. Purpose

This document converts the assessment foundation into a repeatable scoring contract. It assesses the quality of the participant's leadership judgment across the complete run. It does not score writing style, reward a preferred option sequence, or derive competence from the final simulated program state.

The scoring order is mandatory:

1. freeze the completed attempt and evidence ledger;
2. run deterministic factual checks;
3. adjudicate all seven critical gates;
4. score each criterion from cited evidence;
5. calculate the seven dimension scores;
6. calculate the secondary overall score and apply gate caps;
7. reconcile contradictions and reviewer disagreement; and
8. produce the debrief without altering the original attempt.

During a scored first attempt, none of the criteria, anchors, provisional scores, gate warnings, or preferred evidence patterns may be shown to the participant.

## 2. What is being scored

The benchmark unit is one participant's first completed attempt at one frozen scenario version under standardized conditions.

The assessment asks:

> Given the evidence reasonably available at each moment, how well did the participant frame, design, plan, defend, and operate the bounded AI initiative?

It does not ask whether the participant guessed hidden truths, produced the healthiest numerical program state, used the most AI, shipped by week 16, or wrote the most polished response.

### 2.1 Evidence precedence

When evidence conflicts, reviewers use this precedence:

1. recorded action and system consequence;
2. explicit scope, threshold, owner, acceptance condition, or prohibition;
3. cited scenario evidence available at that decision;
4. rationale and acknowledged assumptions;
5. later remediation;
6. retrospective explanation.

Later explanation cannot rewrite an earlier action. Later remediation can earn recovery evidence, but the original weakness remains part of the record.

### 2.2 Availability rule

A participant is assessed only against information that was:

- shown automatically;
- returned from an evidence request they made;
- made observable by an earlier decision or crisis; or
- reasonably obtainable through a free mandatory source or an investigation opportunity whose relevance was already signalled.

No criterion may penalize failure to state a hidden truth that was not observable. The criterion may assess whether the participant created a proportionate route to discover or contain the uncertainty.

## 3. Evidence and rating contract

Every criterion rating must produce a record:

```yaml
criterion_id: BV1
anchor: 0-4
weight_within_dimension: 0.20
evidence_ids: [EV-D02-01, EV-D15-02]
contrary_evidence_ids: [EV-D02-03]
availability_refs: [D02, D15]
reason: concise evidence-based justification
confidence: 0.0-1.0
reviewer: deterministic | expert_1 | expert_2 | consensus
```

An anchor above 1 requires at least one evidence ID. An anchor of 4 requires evidence from at least two moments or one moment plus a downstream control, unless the criterion explicitly concerns a single final decision.

### 3.1 Universal anchor meaning

| Anchor | Universal interpretation |
|---:|---|
| 0. Absent | The issue was ignored, contradicted, or handled through an unsafe action. |
| 1. Asserted | Relevant language appeared, but no usable evidence, owner, threshold, action, or control followed. |
| 2. Partial | A relevant action or evidence item exists, but a material gap is unacknowledged, unowned, inconsistent, or uncontrolled. |
| 3. Supported | The judgment is proportionate, evidence-linked, owned, and includes a usable acceptance, recovery, or stop condition. |
| 4. Integrated | The participant connects the judgment to downstream consequences and other dimensions, then monitors or adapts coherently when evidence changes. |

Criterion-specific anchors below take precedence over this general wording.

### 3.2 No fixed option points

Action options in `DECISIONS.md` carry no intrinsic score. A custom response and a listed response are scored identically against evidence. An ordinarily defensible option can score poorly when unsupported. An initially weak choice can earn later recovery evidence without erasing the earlier weakness.

## 4. Dimension and criterion map

| Dimension | Overall weight | Criteria and internal weights |
|---|---:|---|
| Business value | 15% | BV1 25%, BV2 30%, BV3 25%, BV4 20% |
| Delivery confidence | 15% | DC1 25%, DC2 30%, DC3 25%, DC4 20% |
| Technical integrity | 15% | TI1 30%, TI2 25%, TI3 25%, TI4 20% |
| Data readiness | 15% | DR1 25%, DR2 30%, DR3 25%, DR4 20% |
| Trust and governance | 15% | TG1 30%, TG2 25%, TG3 25%, TG4 20% |
| Financial sustainability | 10% | FS1 25%, FS2 30%, FS3 25%, FS4 20% |
| User adoption | 15% | UA1 25%, UA2 30%, UA3 25%, UA4 20% |

Internal weights intentionally sum to 100% within each dimension. They are provisional until calibration.

## 5. Business value rubric

### BV1. Outcome and cohort definition. 25%

Primary decisions: D01, D02, D04, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Accepts a generic AI-copilot or enterprise-transformation mandate with no bounded outcome or cohort. |
| 1 | Names cycle time, savings, or quality, but leaves the workflow boundary or target cohort undefined. |
| 2 | Defines an outcome and cohort, but the start/end event, exclusions, or connection to the chosen release remains materially incomplete. |
| 3 | Defines a bounded supplier-quotation outcome, cohort, operational measure, capability boundary, and decision owner consistent with the release scope. |
| 4 | Maintains that definition across scope, evaluation, release, and public claims; explicitly revises it when evidence changes. |

### BV2. Baseline, attribution, and benefit ownership. 30%

Primary decisions: D02, D03, D15, D20. Hidden interaction: HT-01, HT-05.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Treats 30% cycle-time reduction or EUR 8 million savings as verified despite missing or contradictory evidence. |
| 1 | Calls the numbers assumptions but defines no baseline, attribution method, or Finance-owned validation. |
| 2 | Requests or defines a baseline and owner, but attribution, cohort, or double-counting remains materially unresolved. |
| 3 | Uses a Finance-owned baseline, explicit attribution rule, cohort, period, and operational leading indicators; corrects unsupported claims. |
| 4 | Connects attributable benefits to adoption, operating cost, decision quality, and funding or stop decisions throughout the run. |

### BV3. AI suitability and value-bearing scope. 25%

Primary decisions: D04, D05, D06, D14, D20. Hidden interaction: HT-05, HT-06, HT-12.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Selects AI or autonomy because it appears transformative, or rejects all AI without considering the verified workflow opportunity. |
| 1 | Uses rules, ML, GenAI, or agents as labels without tying them to work, evidence, or value. |
| 2 | Chooses a plausible bounded pattern, but cannot show which tasks create value or why simpler alternatives are insufficient. |
| 3 | Maps extraction, normalization, validation, comparison, drafting, and authority to proportionate technologies and measurable workflow value. |
| 4 | Rebalances the solution as data, approval, cost, or adoption evidence changes while preserving the highest defensible value path. |

### BV4. Value-based continuation and stop logic. 20%

Primary decisions: D02, D16, D18, D19, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Ships, extends, or pauses primarily to protect the announced date, sunk effort, or sponsor preference. |
| 1 | Mentions a stop or pivot condition without a measurable trigger or decision owner. |
| 2 | Defines a continuation condition, but it ignores a material value, cost, adoption, or risk dependency. |
| 3 | Uses explicit evidence thresholds and an authorized decision owner to release, reduce scope, extend, or pause. |
| 4 | Makes a coherent portfolio trade-off, quantifies evidence still worth buying, and sets a dated next decision or termination point. |

## 6. Delivery confidence rubric

### DC1. Scope and mandate control. 25%

Primary decisions: D01, D04, D13, D16, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Accepts incompatible scope, date, and authority commitments without challenge or replan. |
| 1 | Calls for a pilot or phased delivery without defining cohort, capability, exclusions, or exit conditions. |
| 2 | Bounds most of the release but leaves a material ambiguity that later drives rework or misrepresentation. |
| 3 | Maintains an explicit scope contract and transparently trades scope, date, evidence, and authority when conditions change. |
| 4 | Anticipates pressure-driven scope expansion, protects decision quality, and preserves a credible route to later scale. |

### DC2. Sequencing and critical-path management. 30%

Primary decisions: D03, D09, D16. Hidden interaction: HT-09, HT-12.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Ignores a known access or approval dependency, then compresses essential testing or misstates readiness. |
| 1 | Lists dependencies without lead times, owners, sequencing, or decision dates. |
| 2 | Identifies the critical dependency and some mitigation, but validates it too late or lacks an approved fallback. |
| 3 | Sequences thin vertical evidence, assigns dependency owners, validates high-risk paths early, and defines a viable fallback. |
| 4 | Uses emerging dependency evidence to replan before irreversible spend, preserving the maximum useful learning within 16 weeks. |

### DC3. Ownership, capacity, and delivery controls. 25%

Primary decisions: D09, D10, D16, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Assigns material work or risk to absent, unauthorized, or implausibly overloaded roles. |
| 1 | Names a team or RACI but provides no capacity, accountability, contingency, or gate ownership. |
| 2 | Covers core build roles, but specialist, adoption, operations, or contingency capacity is materially weak. |
| 3 | Aligns named authority and realistic capacity to build, evidence, security, data, adoption, and operation needs. |
| 4 | Reallocates capacity coherently after crises and makes the sacrificed evidence or scope explicit. |

### DC4. Recovery and decision discipline. 20%

Primary decisions: D13-D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Denies, hides, or bypasses material contradictory evidence to preserve the plan. |
| 1 | Acknowledges the issue but gives no contained action, owner, or decision date. |
| 2 | Responds to individual crises, but decisions are reactive or inconsistent with earlier commitments. |
| 3 | Contains the issue, updates the plan and claims, assigns recovery, and protects the applicable evidence gate. |
| 4 | Demonstrates a consistent recovery doctrine across technical, adoption, cost, and stakeholder pressure without erasing history. |

## 7. Technical integrity rubric

### TI1. Proportional architecture and task decomposition. 30%

Primary decisions: D05, D07, D11. Hidden interaction: HT-04, HT-05, HT-06, HT-10.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Uses one autonomous LLM or invalid historical-award predictor across the workflow without meaningful boundaries. |
| 1 | Names hybrid architecture, RAG, rules, or agents without component responsibilities or prohibited behavior. |
| 2 | Decomposes major tasks but leaves a material responsibility, fallback, or authority boundary ambiguous. |
| 3 | Assigns deterministic, model-assisted, retrieval, calculation, workflow, and human responsibilities with testable interfaces and fallbacks. |
| 4 | Connects decomposition to error severity, cost, permissions, observability, and later model or scope substitution. |

### TI2. Evaluation validity and failure analysis. 25%

Primary decisions: D08, D17, D20. Hidden interaction: HT-07.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Uses aggregate accuracy to release despite known material German or Czech failure. |
| 1 | Mentions testing or human review without defined units, thresholds, cohorts, or severity. |
| 2 | Defines metrics and some thresholds, but omits a material cohort, error cost, abstention, or accountable acceptor. |
| 3 | Defines task- and cohort-specific acceptance, severity, gold-set ownership, abstention, regression, and containment. |
| 4 | Uses production-like failure evidence to adapt scope, routing, review burden, and retest criteria without overstating readiness. |

### TI3. Integration, resilience, and fallback. 25%

Primary decisions: D05, D06, D07, D09, D16.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Assumes unavailable integrations or a prohibited model are required for release and defines no viable fallback. |
| 1 | Mentions API, fallback, or manual handling without conditions, ownership, or operational integrity. |
| 2 | Provides a plausible temporary or fallback route, but transition, reconciliation, failure handling, or security is incomplete. |
| 3 | Defines authoritative interfaces, failure modes, approved fallback, reconciliation, and an owned transition path. |
| 4 | Proves the fallback preserves critical controls and evaluation validity, and uses it coherently during dependency or model disruption. |

### TI4. Production observability and change control. 20%

Primary decisions: D12, D17, D19, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Recommends action-capable release with no effective monitoring, containment, incident ownership, or rollback. |
| 1 | Lists monitoring or logs without signals, thresholds, response paths, or change control. |
| 2 | Defines some quality, cost, or incident controls, but coverage or response authority is materially incomplete. |
| 3 | Links monitored quality, cohort, cost, usage, and control signals to named response, containment, rollback, and regression actions. |
| 4 | Designs auditable replay and controlled adaptation so cost or model changes cannot silently invalidate accepted quality. |

## 8. Data readiness rubric

### DR1. Purpose-to-source strategy and minimization. 25%

Primary decisions: D03, D04, D06. Hidden interaction: HT-02.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Integrates all 12 systems by default or uses data without a defined purpose and authority. |
| 1 | Requests data broadly or says â€œsingle source of truthâ€ without mapping fields to release decisions. |
| 2 | Identifies a smaller source set, but authority, permitted use, or necessity remains unclear. |
| 3 | Maps each required field and outcome to the minimum authoritative source, owner, permitted use, and release purpose. |
| 4 | Stages access and remediation by evidence value, avoiding unnecessary integration while preserving a credible scale path. |

### DR2. Fitness, representativeness, and bias. 30%

Primary decisions: D03, D06, D08, D17. Hidden interaction: HT-03, HT-04, HT-07.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Claims representative readiness or valid recommendation labels after material coverage, bias, or cohort failure is known. |
| 1 | Mentions data quality or bias without profiling dimensions, cohorts, thresholds, or action. |
| 2 | Profiles completeness or format coverage but misses supplier segment, language, label validity, or decision impact. |
| 3 | Assesses coverage, missingness, language/format, supplier segments, historical-label meaning, and error impact against the selected purpose. |
| 4 | Redesigns the learning target, scope, evaluation, or fallback based on segmented findings and monitors residual representativeness risk. |

### DR3. Lineage, reconciliation, and evidence traceability. 25%

Primary decisions: D06, D08, D11, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Permits recommendations or commitments that cannot be traced to source quotations, calculations, and approved outcomes. |
| 1 | Mentions lineage, citation, or audit without field-level provenance or reconciliation. |
| 2 | Provides source links for some outputs, but transformations, versioning, exceptions, or outcome reconciliation remain weak. |
| 3 | Preserves field-level provenance, transformation/version history, exception trace, and reconciliation to authoritative outcomes. |
| 4 | Makes traceability usable in buyer review, evaluation, incident replay, and controlled model or data change. |

### DR4. Access and remediation ownership. 20%

Primary decisions: D03, D06, D09, D16.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Assumes the delivery team can create access or silently repair source data without accountable owners. |
| 1 | Names a data owner but defines no access date, remediation commitment, threshold, or fallback. |
| 2 | Assigns access and some remediation, but critical timing, acceptance, or unresolved-data handling is incomplete. |
| 3 | Establishes source-owner commitments, latest useful dates, fitness thresholds, remediation, and safe fallback for unresolved data. |
| 4 | Uses access and quality evidence to adjust cohort and sequencing early, with explicit residual-risk acceptance at release. |

## 9. Trust and governance rubric

### TG1. Authority boundaries and meaningful human control. 30%

Primary decisions: D04, D05, D11, D13, D20. Hidden interaction: HT-10.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Permits AI to initiate a material supplier commitment outside delegation or treats logging as authorization. |
| 1 | States â€œhuman in the loopâ€ without defining what is verified, who decides, or what the system may do. |
| 2 | Retains nominal human approval, but evidence visibility, override, segregation, or automation-bias control is weak. |
| 3 | Defines permitted and prohibited actions, meaningful verification, override, segregation of duties, and final accountable authority. |
| 4 | Preserves value through bounded low-risk actions and creates an evidence-based future autonomy path without weakening current authority. |

### TG2. Data, model, privacy, and security permission. 25%

Primary decisions: D03, D07, D14, D16. Hidden interaction: HT-06.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Knowingly sends production supplier data to an unapproved endpoint or bypasses prohibited processing. |
| 1 | Mentions residency, privacy, or security without data flow, classification, approval, retention, or fallback. |
| 2 | Selects an approved route or seeks an exception, but task-level threat, quality effect, data handling, or contingency is incomplete. |
| 3 | Connects classification, endpoint, residency, processing, logging/retention, threat evidence, approval owner, and approved fallback. |
| 4 | Re-scopes or routes tasks based on permission and evaluation evidence while maintaining an auditable residual-risk decision. |

### TG3. Accountability, escalation, and risk acceptance. 25%

Primary decisions: D01, D10, D13-D16, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Leaves a material risk with no authorized owner or treats the delivery team as business/security risk acceptor. |
| 1 | Names stakeholders but does not map actual decision rights, escalation, or acceptance. |
| 2 | Assigns most ownership correctly, but one material boundary or escalation condition remains ambiguous. |
| 3 | Aligns each material business, data, model, security, operational, and release decision with an authorized owner and escalation path. |
| 4 | Demonstrates those rights under sponsor pressure and crisis, documenting dissent, residual risk, and final acceptance without paralysis. |

### TG4. Claim integrity and auditability. 20%

Primary decisions: D02, D12, D15-D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Presents a material value, accuracy, compliance, cost, or readiness claim as verified after contradictory evidence is available. |
| 1 | Labels claims as estimates but provides no evidence status, assumption register, or correction route. |
| 2 | Corrects some claims, but public/internal inconsistency or material unsupported readiness language remains. |
| 3 | Clearly separates fact, estimate, assumption, and unresolved risk; corrects material claims and preserves an auditable decision history. |
| 4 | Maintains claim integrity consistently through executive defence, crises, release scope, and the final public statement. |

## 10. Financial sustainability rubric

### FS1. Build/run envelope and allocation. 25%

Primary decisions: D10, D16, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Commits beyond EUR 1.2 million or excludes essential evaluation, controls, adoption, or first-year operation without disclosure. |
| 1 | States a budget total but provides no build/run split, role capacity, contingency, or trade-off. |
| 2 | Provides a plausible allocation, but a material operating or evidence cost is weak or unowned. |
| 3 | Balances build, first-year run, evaluation, data/security, adoption, operations, and contingency within the envelope. |
| 4 | Reallocates transparently when dependencies or usage change, preserving the highest-value evidence and disclosing sacrificed scope. |

### FS2. Unit economics and sensitivity. 30%

Primary decisions: D03, D07, D12, D19. Hidden interaction: HT-11.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Retains a one-call-per-quotation or other known-false cost assumption after reprocessing and review-loop evidence appears. |
| 1 | Estimates monthly cost without task volume, reprocessing, conversation, sensitivity, or unit definition. |
| 2 | Builds a unit model and one sensitivity case, but misses a material driver or continuation threshold. |
| 3 | Models task-level volume, retries/reprocessing, review loops, routing, unit cost, sensitivity, and an owned reforecast threshold. |
| 4 | Connects observed cost drivers to product design, model routing, adoption, quality, and benefit attribution across the run. |

### FS3. Consumption control and graceful degradation. 25%

Primary decisions: D07, D12, D19.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Applies no control or uses a blind cap/fallback that silently invalidates accepted quality. |
| 1 | Mentions caching, limits, or cheaper models without trigger, ownership, or quality protection. |
| 2 | Implements useful controls, but degradation behavior, user impact, or quality regression is incomplete. |
| 3 | Uses caching, task routing, loop limits, budgets, alerts, and quality-aware fallback with explicit response ownership. |
| 4 | Validates controls against task/cost/quality evidence and adapts them without hiding degraded service or shifting risk to users. |

### FS4. Value-to-cost decision quality. 20%

Primary decisions: D02, D12, D15, D19, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Continues because budget remains, or stops solely because cost increased, without considering attributable value. |
| 1 | Compares total cost and headline savings without attribution, adoption, or decision-quality effects. |
| 2 | Uses corrected benefit and cost evidence, but continuation or scope logic remains incomplete. |
| 3 | Makes release or continuation decisions using attributable value, unit economics, adoption, quality, risk, and opportunity cost. |
| 4 | Selects the economically sustainable capability boundary and defines the evidence that would justify expansion or termination. |

## 11. User adoption rubric

### UA1. Workflow understanding and user evidence. 25%

Primary decisions: D03, D04, D11. Hidden interaction: HT-05, HT-08.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Designs around assumed buyer behavior and dismisses observed duplicate work or rejection. |
| 1 | States that users will be involved but defines no observation, cohort, task, or decision use. |
| 2 | Conducts user research or testing, but coverage, timing, or translation into design is materially weak. |
| 3 | Uses workflow observation and representative buyer evidence to define pain, review duties, exceptions, and release design. |
| 4 | Continuously connects workflow evidence to architecture, value baseline, control design, and release scope. |

### UA2. Workflow fit and meaningful interaction. 30%

Primary decisions: D11, D18. Hidden interaction: HT-08.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Releases a separate duplicate-work portal after verified rejection or treats forced usage as adoption. |
| 1 | Provides a usable screen or Approve button without evidence, editability, exception handling, or integration. |
| 2 | Addresses some workflow needs, but re-entry, traceability, review burden, or accessibility remains material. |
| 3 | Fits assistance into existing review work with evidence, exceptions, edit/override, traceability, and measured review burden. |
| 4 | Redesigns coherently after observed rejection, using shadow or assisted modes to preserve learning without false readiness claims. |

### UA3. Change ownership and capability. 25%

Primary decisions: D10, D11, D18, D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Treats adoption failure as user resistance and mandates use without addressing product or process evidence. |
| 1 | Mentions training or communications without accountable change ownership or role-specific behavior. |
| 2 | Assigns change activity and training, but support, feedback, incentives, or process ownership is incomplete. |
| 3 | Names business change ownership, buyer responsibilities, training/support, feedback, and process changes aligned to release mode. |
| 4 | Adapts change effort using observed overrides, burden, confidence, and cohort behavior while maintaining decision accountability. |

### UA4. Adoption and realized-value measurement. 20%

Primary decisions: D02, D11, D18-D20.

| Anchor | Scenario-specific evidence |
|---:|---|
| 0 | Claims business readiness or savings despite contradictory usage or workflow evidence. |
| 1 | Measures logins, training completion, or stated satisfaction alone. |
| 2 | Defines use and satisfaction measures, but lacks workflow outcome, quality, override, or cohort linkage. |
| 3 | Measures eligible use, completion, review burden, overrides, error interception, cycle time, and user confidence by cohort. |
| 4 | Uses adoption evidence to re-estimate attributable value, alter workflow/scope, and set expansion or stop conditions. |

## 12. Critical-gate adjudication

Gates are assessed separately from criteria. A strong dimension score cannot neutralize a gate failure.

### 12.1 Status meanings

| Status | Meaning |
|---|---|
| Pass | Applicable evidence shows the prohibited condition did not occur or was effectively contained before release. |
| Fail | The formal fail condition occurred after relevant evidence was available or reasonably obtainable. |
| Not applicable | The run's final scope made the gate genuinely irrelevant. This requires a factual note. |
| Unresolved | Evidence is insufficient to adjudicate. During calibration, unresolved requires independent review and cannot be silently treated as pass. |

### 12.2 Gate tests

| Gate | Deterministic trigger | Required adjudication question | Treatment on fail |
|---|---|---|---|
| G1 Commercial authority | Material supplier commitment is enabled or approved outside delegation | Did the participant authorize the action, rather than merely discuss or prototype it, and was any effective containment in place before use? | Overall cap 39; TG cap 25 |
| G2 Data/model permission | Production supplier data is routed to an unapproved endpoint or prohibited processing | Was the participant aware, or should they reasonably have been aware, and did approved sanitization or permission exist before processing? | Overall cap 39; release invalid |
| G3 Evaluation sufficiency | Production approval lacks defined segmented thresholds or accountable acceptance | Was the use truly production, were material tasks/cohorts covered, and was acceptance owned before approval? | Overall cap 49; TI cap 40 |
| G4 Severe cohort failure | Known material cohort/process failure proceeds without effective containment | Could the failed cohort be reliably identified, separated, routed, reviewed, or blocked, and was the claimed release scope honest? | Overall cap 39 |
| G5 Accountable ownership | Material risk is accepted with no authorized owner | Was an actual risk acceptance made, did the named person hold the authority, and was escalation possible? | Overall cap 49 |
| G6 Claim integrity | Material contradicted claim is presented as verified | Was contradictory evidence available, was the claim material to funding/release/trust, and did the participant knowingly preserve the false status? | Overall cap 49; affected dimension cap 25 |
| G7 Operational control | Action-capable AI releases without monitoring, incident ownership, containment, or rollback | Was the capability action-capable in operation, and were all four controls usable rather than merely named? | Overall cap 39; release invalid |

Discussion, rejected proposals, technical prototypes without live authority, and risks later contained before use do not by themselves fail a gate.

### 12.3 G6 materiality test

G6 fails only when all four conditions hold:

1. the claim concerns value, accuracy, compliance, cost, or readiness;
2. contradictory evidence was available before the claim;
3. the participant presents the claim as established rather than uncertain or conditional; and
4. the claim could materially affect funding, authorization, user trust, or release.

An outdated assumption corrected promptly is not a G6 failure. A deliberately preserved external headline that contradicts the internal evidence is.

## 13. Calculation rules

### 13.1 Criterion and dimension scores

```text
dimension_score = 100 * sum(anchor_i * internal_weight_i)
                        / sum(4 * internal_weight_i)
```

Because each internal weight set sums to 1.00, this is equivalent to:

```text
dimension_score = 25 * sum(anchor_i * internal_weight_i)
```

Round criterion-derived dimension scores to one decimal place. Apply dimension caps after calculation and retain both raw and capped values.

### 13.2 Secondary overall score

```text
raw_overall =
    0.15 * business_value
  + 0.15 * delivery_confidence
  + 0.15 * technical_integrity
  + 0.15 * data_readiness
  + 0.15 * trust_governance
  + 0.10 * financial_sustainability
  + 0.15 * user_adoption

reported_overall = min(raw_overall_after_dimension_caps,
                       strictest_applicable_gate_cap)
```

The final report leads with the seven dimension scores and gate table. The overall number appears only as a secondary summary.

### 13.3 Provisional interpretation bands

| Score | Provisional label | Interpretation |
|---:|---|---|
| 85-100 | Integrated | Strong cross-dimensional judgment with coherent adaptation |
| 70-84 | Supported | Generally defensible, evidence-led leadership with bounded gaps |
| 50-69 | Developing | Mixed judgment; material criteria remain partial or inconsistent |
| 25-49 | Fragile | Major weaknesses or unsupported controls materially undermine readiness |
| 0-24 | Unsafe/absent | Critical judgment is missing, contradicted, or repeatedly unsafe |

These labels are descriptive, not validated proficiency levels. They must not be called beginner, competent, expert, hireable, or certified until external calibration supports such claims.

## 14. Contradictions, recovery, and double counting

### 14.1 Contradiction rule

When a rationale and action conflict, score the action and its actual control effect. When two decisions conflict, the later decision earns recovery only if it explicitly changes the action, scope, owner, claim, or control.

### 14.2 Recovery rule

Recovery can raise a criterion when it demonstrates diagnosis, correction, containment, and updated downstream behavior. It cannot:

- delete the earlier evidence;
- reverse a gate failure after the prohibited event occurred;
- convert a knowingly false prior claim into full claim-integrity evidence; or
- earn anchor 4 solely through a final retrospective.

### 14.3 Evidence reuse rule

One evidence object may support several criteria only when the reviewer states the distinct relevance. Repeating the same generic statement across decisions does not create additional evidence.

### 14.4 Missing response fields

Missing structured fields are evidence gaps, not automatic zeroes. A criterion falls to 0 only when the material issue is ignored, contradicted, or unsafe. A missing owner or threshold normally limits affected evidence to anchor 2 or below, depending on materiality.

## 15. Evaluator roles

### 15.1 Deterministic engine

The engine records facts such as selected endpoint, release mode, enabled actions, named owner, threshold presence, cohort containment, monitoring elements, and decision chronology. It does not judge proportionality from keyword presence.

### 15.2 LLM evaluator

The LLM may extract candidate evidence, detect contradictions, map text to criteria, and draft reasons. It must return confidence and contrary evidence. It cannot:

- invent evidence or assume unstated controls;
- assign a gate failure without rule-based trigger and review;
- reward vocabulary, fluency, or length;
- infer hidden-truth knowledge unavailable to the participant; or
- produce the final benchmark result without expert adjudication during calibration.

### 15.3 Expert reviewers

For calibration, two independent reviewers score the frozen attempt without seeing each other's ratings. They then reconcile:

- every gate fail or unresolved status;
- every criterion differing by two or more anchors;
- any dimension differing by more than 10 points; and
- any evidence-availability disagreement.

Consensus changes must preserve both original ratings and a reason.

## 16. Final debrief contract

The debrief must present information in this order:

1. final release recommendation and scope actually assessed;
2. critical-gate table with factual reasons;
3. seven dimension scores, raw and capped where relevant;
4. criterion-level anchors with supporting and contrary evidence;
5. three strongest demonstrated judgments;
6. three highest-priority development needs;
7. consequential decision timeline, including recoveries and unresolved risks;
8. secondary overall score and explicit â€œnot calibratedâ€ notice; and
9. replay invitation clearly separated from the frozen first attempt.

Feedback must describe what the participant did and what stronger evidence or control would have changed the assessment. It must not claim that one listed option was the answer.

## 17. Calibration acceptance criteria

This rubric is not ready to support a benchmark claim until paper and external trials test at least:

1. **Route neutrality:** controlled pilot, reduced-scope release, extension, and evidence-led pause can each score strongly when supported.
2. **Unsafe-route discrimination:** a polished ship-at-all-costs run reliably triggers applicable gates and weak criteria.
3. **Inter-rater agreement:** weighted Cohen's kappa of at least 0.60 across criterion anchors as an initial target, with no gate disagreement left unresolved.
4. **Score stability:** rescoring the same frozen evidence by the same reviewer after a washout period changes each dimension by no more than 8 points in at least 80% of cases.
5. **Verbosity resistance:** concise and verbose semantically equivalent responses remain within 5 dimension points.
6. **Hidden-information fairness:** reviewers do not penalize undiscovered truths unless the participant ignored a reasonable investigation or containment duty.
7. **Gate precision:** discussion, rejected proposals, and contained pre-release failures do not generate false gate failures.
8. **Completion feasibility:** the first attempt remains approximately 90 minutes without forcing shallow rationales.
9. **Debrief consistency:** no development advice contradicts gate status or the final criterion rating.

The numeric thresholds above are hypotheses for calibration, not evidence that reliability has been achieved.

## 18. Required calibration dataset

Before freezing `procurement-under-pressure@0.1.0`, collect at minimum:

- three authored reference runs: strong controlled pilot, strong reduced-scope/pause, and plausible unsafe release;
- at least five cognitive walkthroughs with AI delivery, architecture, data/ML, procurement, and governance perspectives represented;
- at least ten independent first-attempt runs for initial rubric and timing analysis; and
- double scoring of every reference run and at least five independent attempts.

This is sufficient to expose major design defects. It is not sufficient to make population-level competence claims.

## 19. Open calibration questions

- Do four criteria per dimension create enough discrimination without excessive reviewer load?
- Are the internal criterion weights stable across legitimate outcome routes?
- Should unresolved gates block a reported overall score during real use, rather than merely requiring review?
- Does G6 remain overrepresented after applying the four-part materiality test?
- Are score bands useful, or do they create false precision before a larger validation sample?
- Can 20 structured decisions be completed in 90 minutes without rewarding terse omissions?
- Which deterministic checks demonstrate real control rather than keyword compliance?

These questions must be answered through scored playthroughs. They must not be buried as implementation defaults.
