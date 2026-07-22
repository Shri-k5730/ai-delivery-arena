# Procurement Under Pressure: Authored Reference Runs

**Scenario ID:** `procurement-under-pressure@0.1.0`  
**Artifact:** Calibration fixtures for paper playthrough and independent scoring  
**Status:** Draft. Not participant guidance. Not calibrated benchmark data.

## 1. Purpose

These three authored runs test whether `DECISIONS.md` and `SCORING.md` discriminate leadership judgment rather than rewarding a preferred route, polished writing, speed, or risk avoidance.

They are evaluator fixtures. They must not be visible during a scored attempt, used as model-generated coaching, or presented as answer keys.

The fixtures test three propositions:

1. a controlled pilot can score strongly when it preserves useful evidence and contains risk;
2. a reduced-scope release or pause can also score strongly when it is evidence-led and time-bound; and
3. a confident, plausible, on-time release must score poorly when its controls and claims contradict available evidence.

The expected scores below are hypotheses. Independent reviewers must score the evidence from the rubric without seeing the expected results first.

## 2. Standard fixture contract

Each decision record contains:

- action and scope;
- concise rationale;
- evidence used or requested;
- owner and acceptance or stop condition;
- expected consequence; and
- evidence IDs for scoring.

Reference evidence IDs use this format:

```text
RR-{run}-{decision}-{sequence}
```

Example: `RR-A-D08-01` is the first evidence object at D08 in Run A.

All three runs receive the same starting information, ten investigation credits, crisis sequence, and decision timing. Differences arise only from participant choices and the evidence those choices make available.

## 3. Run A. Strong controlled pilot

### 3.1 Intended pattern

The participant treats 16 weeks as a controlled business pilot, discovers the most consequential uncertainties early, uses a hybrid architecture, retains human commercial authority, and releases only the passing, operationally separable cohort. The participant repairs the benefit claim, redesigns the buyer workflow, and contains cost before recommending release.

Expected outcome: **conditional controlled pilot release** for two commodities and passing English quotation formats, embedded in the existing review workflow. German and Czech complex quotations remain routed to the current manual process pending remediation and retest.

### 3.2 Decision ledger

| ID | Decision and evidence | Owner and acceptance/stop condition |
|---|---|---|
| D01 | Defines â€œbusiness releaseâ€ as a controlled pilot used by 12 named buyers on two commodities, with no autonomous award or supplier commitment. States that week 16 is an evidence decision, not an enterprise rollout. `RR-A-D01-01` | CPO owns pilot mandate. Reconfirm at week 3 after workflow, dependency, and data evidence; revise if safe live use cannot generate decision-quality evidence. |
| D02 | Converts 30% cycle-time and EUR 8 million into hypotheses. Defines cycle time from complete RFQ pack to recommendation-ready comparison; requires Finance-owned baseline, cohort attribution, adoption, override, error, and run-cost measures. `RR-A-D02-01` | Finance director owns baseline and attributable benefit. Pivot if no measurable workflow improvement or credible benefit route is observable by pilot end. |
| D03 | Spends first four credits on workflow time study, Finance baseline, API lead-time check, and language/format samples. Reserves six for supplier-segment profiling, label review, user observation, model bake-off, threat/privacy assessment, and volume sensitivity as design decisions mature. `RR-A-D03-01` | Named source owners. Evidence must arrive before its linked scope, model, evaluation, or plan decision. |
| D04 | Selects a two-commodity pilot covering extraction, normalization, rule-based checks, evidence-linked comparison and draft recommendation. Human buyers retain decision authority. Excludes award initiation, unsupported languages, and enterprise rollout. `RR-A-D04-01` | Procurement operations owner accepts cohort and workflow. Exit requires threshold, adoption, cost, control, and value evidence. |
| D05 | Chooses a hybrid pipeline: deterministic ingestion and arithmetic; model-assisted field extraction and narrative drafting; retrieval of source clauses; rules for policy and exceptions; human sourcing decision. Defines abstention, manual fallback, and prohibited supplier commitment. `RR-A-D05-01` | AI architect owns component contract. Each component must pass task-specific tests; failure routes to visible exception and manual handling. |
| D06 | Maps five authoritative sources to first-release fields, rather than integrating all 12. Profiles supplier coverage and historical labels; rejects award outcome as an objective target. Defines lineage to document and field, reconciliation, missing-data flags, and temporary controlled upload for one delayed API. `RR-A-D06-01` | Data owner accepts source contract. Missing or unrepresentative fields cannot silently drive recommendation. |
| D07 | Uses the approved private endpoint for the release route, with templates, retrieval, validation, and bounded tasks. Runs only sanitized comparative testing on the external model and does not make release depend on an exception. `RR-A-D07-01` | CISO approves data flow; AI lead owns task performance. Switch only after approval and equivalent segmented regression tests. |
| D08 | Defines field-, calculation-, citation-, and draft-level metrics by language, format, commodity, and supplier segment. Critical commercial fields require higher thresholds and abstention. Procurement owns gold-set acceptance; severe cohort failures block or contain that cohort. `RR-A-D08-01` | Procurement quality owner signs acceptance. No release without segmented thresholds, error-severity treatment, and passing regression evidence. |
| D09 | Front-loads API/security validation, a thin end-to-end slice, evaluation harness, and buyer workflow test. Treats controlled upload as a temporary fallback with reconciliation and transition plan. `RR-A-D09-01` | Delivery lead owns critical path. Replan at week 10 if API completion cannot leave time for meaningful live evidence. |
| D10 | Funds balanced capacity for product, procurement SME, data, AI, integration, security, evaluation, UX/change, FinOps, and operations. Reserves 15% contingency and explicitly funds the first operating year. `RR-A-D10-01` | Program sponsor owns envelope; workstream leads own capacity. Scope is reduced before evaluation, security, adoption, or operational control is defunded. |
| D11 | Embeds assistance into the existing review steps. Shows field-level source evidence, calculation trace, confidence/exception state, editability, and recorded override. Separates preparation from commercial authorization. `RR-A-D11-01` | Procurement operations owns workflow acceptance. Pilot proceeds only if review duties are meaningful and duplicate entry is within the agreed limit. |
| D12 | Models cost per quotation, page, extraction, regeneration, and reviewer loop. Adds caching, task routing, loop limits, budgets, and quality-aware fallback. Measures cost per accepted comparison, not only monthly spend. `RR-A-D12-01` | FinOps owner monitors thresholds. Cost variance above 25% triggers root-cause review; controls cannot silently breach evaluation thresholds. |
| D13 | Rejects autonomous award initiation as outside delegation. Offers draft workflow packets, exception routing, and non-binding reminders as reversible actions. Defines a future policy, control, and evidence gate for any expanded authority. `RR-A-D13-01` | CPO and risk owner retain commercial authority. No technical team member may accept this risk. |
| D14 | Accepts the CISO constraint and presents task-level data flow, threat, evaluation, and fallback evidence. Keeps the approved private model and narrows unsupported tasks rather than bypassing policy. `RR-A-D14-01` | CISO approves residual security risk; CPO accepts scope effect. |
| D15 | Corrects the EUR 8 million claim in all steering and external material. Rebases the case on attributable buyer effort, cycle time, exception handling, decision quality, adoption, and net operating cost. `RR-A-D15-01` | Finance owns the revised claim. Funding is revisited after measured pilot evidence, not protected by the original headline. |
| D16 | Keeps week 16 as a controlled pilot decision, narrows the live cohort, and uses an approved temporary ingestion path with audit, reconciliation, deletion, and API transition plan. Explicitly states it is not production integration. `RR-A-D16-01` | CISO approves temporary control; delivery lead owns transition. Stop live use if secure handling or reconciliation fails. |
| D17 | Contains German and Czech complex formats because their commercial-field errors are material. Releases only reliably identifiable passing formats, routes excluded documents to manual handling, assigns remediation, and requires segmented retest. `RR-A-D17-01` | Procurement quality owner accepts cohort separation. Retest must meet the original critical-field thresholds before expansion. |
| D18 | Treats 30% intent-to-use as product failure evidence. Redesigns around the existing sourcing review, then runs a limited assisted/shadow pilot to measure duplicate work, task completion, override, and adoption. `RR-A-D18-01` | Product owner and buyer champion own redesign. Live expansion requires agreed workflow burden and adoption thresholds. |
| D19 | Traces four-times cost to reprocessing and unconstrained regeneration. Caches stable artefacts, limits loops, routes tasks, retains quality checks, and reforecasts unit cost. `RR-A-D19-01` | FinOps and AI leads own containment. Continue only if cost per accepted comparison meets the revised value threshold without quality regression. |
| D20 | Recommends conditional controlled release for two commodities and passing English formats, in the embedded workflow, with human authority. Lists excluded cohorts/actions, named acceptors, monitoring, incident/rollback, benefit measurement, and a six-week expansion decision. `RR-A-D20-01` | CPO, CISO, Procurement Quality, Data Owner, and Operations sign their domains. Any critical gate failure, severe regression, control breach, or uneconomic unit cost stops or rolls back the affected scope. |

### 3.3 Expected gate adjudication

| Gate | Expected | Reason |
|---|---|---|
| G1 Commercial authority | Pass | Supplier commitment remains with authorized humans; only reversible non-binding actions are allowed. |
| G2 Data/model permission | Pass | Production supplier data remains on the approved route; temporary ingestion is explicitly approved. |
| G3 Evaluation sufficiency | Pass | Segmented thresholds, severity, owners, abstention, and regression rules precede release. |
| G4 Severe cohort failure | Pass | Failed German and Czech complex formats are reliably identified and contained. |
| G5 Accountable ownership | Pass | Material risks and acceptances have authorized owners. |
| G6 Claim integrity | Pass | Unsupported value, readiness, cohort, and cost claims are corrected before recommendation. |
| G7 Operational control | Pass | Monitoring, incident ownership, containment, and rollback are usable for the released scope. |

### 3.4 Expected score profile

| Dimension | Expected range | Likely pattern |
|---|---:|---|
| Business value | 85-95 | Integrated outcome, attribution, scope, and continuation logic. |
| Delivery confidence | 82-92 | Strong sequencing and recovery; temporary ingestion leaves a bounded residual gap. |
| Technical integrity | 85-95 | Proportional architecture, segmented evaluation, fallback, and observability. |
| Data readiness | 80-92 | Purpose-fit data and traceability; supplier-history limitations remain contained rather than solved. |
| Trust and governance | 88-98 | Clear authority, permission, claims, and operating controls. |
| Financial sustainability | 82-94 | Unit economics and recovery are strong; live-volume confidence remains limited. |
| User adoption | 78-90 | Strong redesign and measurement, but adoption is not yet proven at scale. |
| Secondary overall | 83-93 | No gate cap expected. |

This run should score strongly, but not perfectly. It contains genuine residual uncertainty in adoption, scaled economics, API transition, and excluded cohorts.

## 4. Run B. Strong reduced-scope release with evidence-led pause on recommendation

### 4.1 Intended pattern

The participant discovers that recommendation labels and supplier-performance history are not fit for a defensible recommendation capability. Rather than forcing the planned AI recommendation, the participant releases useful document normalization and deterministic exception checking, then pauses recommendation work behind a dated evidence plan.

Expected outcome: **reduced-scope release** of extraction, normalization, evidence trace, and deterministic checks. AI-generated sourcing recommendation is paused pending representative data, a defensible target, and embedded-workflow validation.

### 4.2 Decision ledger

| ID | Decision and evidence | Owner and acceptance/stop condition |
|---|---|---|
| D01 | Frames week 16 as a controlled release-or-pause decision for a bounded buyer cohort, not a promise of recommendation automation. `RR-B-D01-01` | CPO accepts staged mandate; the evidence gate determines which capabilities may enter use. |
| D02 | Converts benefits to hypotheses with Finance baseline and attributes value separately to document preparation, exception reduction, recommendation quality, adoption, and operating cost. `RR-B-D02-01` | Finance owns attribution. Recommendation receives no benefit credit unless used and demonstrably decision-useful. |
| D03 | Prioritizes workflow study, supplier-segment coverage, historical-label review, and user observation. Later spends credits on API lead time, format samples, evaluation design, threat/privacy, model bake-off, and volume sensitivity. `RR-B-D03-01` | Evidence owners deliver before D04-D08 commitments. |
| D04 | Initially scopes two commodities with extraction, normalization, checks, and evidence-linked recommendation drafting, but marks recommendation as conditional on data and label fitness. `RR-B-D04-01` | Data and procurement quality owners must confirm the learning target and coverage before recommendation can enter live use. |
| D05 | Uses a hybrid architecture but makes recommendation a separable component. Document extraction, calculations, retrieval, and rules can release independently. `RR-B-D05-01` | AI architect owns separation. Failure or pause of recommendation must not disable document-processing value. |
| D06 | Selects minimum authoritative sources, discovers 35% missing supplier history and biased strategic-supplier coverage, and rejects historical awards as the â€œbest supplierâ€ label. Defines lineage and missingness flags. `RR-B-D06-01` | Data owner owns remediation; procurement policy owner must define a defensible decision target. |
| D07 | Selects the approved private model for bounded extraction and drafting tasks. Does not claim that a stronger external model fixes invalid targets or missing data. `RR-B-D07-01` | CISO approves route; model expansion requires task-level evidence and permission. |
| D08 | Defines release thresholds for extraction, calculations, citations, workflow, and deterministic checks. Defines a research evaluation for recommendation but explicitly states it cannot become a release gate until target validity and coverage are resolved. `RR-B-D08-01` | Procurement Quality accepts operational components; recommendation remains non-production. |
| D09 | Front-loads a thin slice and evaluation harness, using document upload as a temporary controlled route while the API review proceeds. `RR-B-D09-01` | Delivery lead replans at week 10 based on access and evidence readiness. |
| D10 | Funds a balanced team but shifts capacity from recommendation engineering into data remediation, workflow integration, evaluation, and operations. Keeps contingency. `RR-B-D10-01` | Sponsor accepts the value/evidence trade. No specialist control is silently removed. |
| D11 | Designs embedded document review with source evidence, exception trace, edits, and override. Recommendation is visibly absent from the live workflow until approved. `RR-B-D11-01` | Buyer owner accepts workflow burden; commercial authority remains unchanged. |
| D12 | Models task-level operating cost and sets caching, budgets, and quality-preserving fallbacks for extraction and drafting. Recommendation cost is excluded from the released business case. `RR-B-D12-01` | FinOps owns live economics and reports separate experimental spend. |
| D13 | Declines autonomous awards and states that autonomy cannot compensate for an invalid recommendation basis. Offers only non-binding workflow assistance. `RR-B-D13-01` | CPO owns authority; future autonomy requires valid recommendation evidence plus control approval. |
| D14 | Uses the approved endpoint and demonstrates that the reduced operational scope does not require the prohibited external model. `RR-B-D14-01` | CISO approves the reduced data flow and residual risk. |
| D15 | Corrects the EUR 8 million claim and presents a smaller, attributable case for document handling and exception reduction. Recommendation benefits are explicitly unproven. `RR-B-D15-01` | Finance owns revised case; later funding depends on separate evidence. |
| D16 | Keeps the week-16 decision, uses controlled temporary ingestion for the reduced scope, and delays any claim of integrated production readiness. `RR-B-D16-01` | CISO owns temporary control; API transition has a dated owner and gate. |
| D17 | Contains failed German and Czech complex formats and releases only passing formats for document automation. Notes that aggregate accuracy cannot validate the paused recommendation component. `RR-B-D17-01` | Quality owner controls cohort routing and retest. |
| D18 | Buyer rejection of the separate portal triggers embedded-workflow redesign and a shadow validation. Release occurs only in the adjusted workflow for the reduced capabilities. `RR-B-D18-01` | Product owner measures task completion, duplicate work, override, and sustained use. |
| D19 | Contains loop-driven cost through caching and bounded regeneration. Because recommendation is paused, conversational loops are limited to evidence clarification and measured separately. `RR-B-D19-01` | FinOps continues only within unit-cost and quality thresholds. |
| D20 | Releases bounded document normalization and deterministic exception checking for passing cohorts. Pauses recommendation with a 12-week plan to define a policy-valid target, improve representative history, test decision quality, and return for an explicit terminate/continue decision. `RR-B-D20-01` | Operational release has full acceptors and rollback. CDO and Procurement Policy own recommendation evidence; CPO owns the dated continuation decision. |

### 4.3 Expected gate adjudication

| Gate | Expected | Reason |
|---|---|---|
| G1 Commercial authority | Pass | No material commitment is delegated. |
| G2 Data/model permission | Pass | Only approved processing routes are used. |
| G3 Evaluation sufficiency | Pass | Released tasks have defined thresholds and owners; paused recommendation is not misrepresented as production. |
| G4 Severe cohort failure | Pass | Failed formats are excluded and routed. |
| G5 Accountable ownership | Pass | Both released operations and paused evidence work have authorized owners. |
| G6 Claim integrity | Pass | Recommendation capability and benefits are explicitly described as unproven. |
| G7 Operational control | Pass | Released automation has monitoring, ownership, containment, and rollback. |

### 4.4 Expected score profile

| Dimension | Expected range | Likely pattern |
|---|---:|---|
| Business value | 80-92 | Preserves verified workflow value and avoids fictitious recommendation benefit. |
| Delivery confidence | 80-92 | Coherent modular scope and reallocation; later recommendation route remains uncertain. |
| Technical integrity | 80-92 | Strong separation and task evaluation; recommendation architecture is deliberately incomplete. |
| Data readiness | 88-98 | Excellent diagnosis, containment, lineage, and remediation ownership. |
| Trust and governance | 88-98 | Strong claim, permission, authority, and risk discipline. |
| Financial sustainability | 78-90 | Honest task economics; full future economics remain unvalidated. |
| User adoption | 78-90 | Workflow is repaired and measured, but live evidence is narrower than Run A. |
| Secondary overall | 82-92 | No gate cap expected. |

Run B must remain capable of scoring as strongly as Run A. If reviewers systematically penalize it because it uses less AI or does not release recommendation, the rubric is route-biased.

## 5. Run C. Plausible but unsafe on-time release

### 5.1 Intended pattern

The participant speaks fluently about transformation, governance, and human review but repeatedly protects the announced scope and date. Evidence is selectively interpreted, controls are named rather than made usable, and known contradictions are preserved in the final readiness claim.

Expected outcome: **full-release recommendation that is invalid and unsafe**.

### 5.2 Decision ledger

| ID | Decision and evidence | Owner and acceptance/stop condition |
|---|---|---|
| D01 | Commits to an enterprise â€œbusiness releaseâ€ in 16 weeks, describing later details as agile refinement. Does not define cohort, authority, or a revision condition. `RR-C-D01-01` | Names the sponsor as owner but provides no acceptance or stop condition. |
| D02 | Retains 30% faster sourcing and EUR 8 million savings as committed outcomes. Adds model accuracy and throughput but no baseline, attribution, or Finance owner. `RR-C-D02-01` | Program team will â€œtrack benefits after launch.â€ |
| D03 | Spends early credits on model bake-off, threat assessment, transaction volume, and evaluation dataset. Does not investigate workflow, baseline, API lead time, supplier coverage, or label validity. `RR-C-D03-01` | Technical leads own requests; no latest useful decision dates are defined. |
| D04 | Selects full European scope with extraction, ranking, recommendation, and award-workflow initiation, while stating that a human click provides control. `RR-C-D04-01` | Sponsor accepts scope; prohibited actions and cohort exclusions are absent. |
| D05 | Selects an end-to-end LLM agent with tools for source access, ranking, drafting, and workflow initiation. Adds logging and a â€œhuman in the loopâ€ but no component failure boundaries or safe fallback. `RR-C-D05-01` | AI lead owns technical confidence; no authorized commercial risk owner is named. |
| D06 | Integrates all 12 sources as a strategic data foundation and trains recommendation on historical awards. Missing supplier history is treated as a future data-improvement item. `RR-C-D06-01` | Data team owns quality â€œduring rolloutâ€; no release threshold or segment containment exists. |
| D07 | Selects the external model because it wins the English bake-off. Plans to send production supplier data after sponsor escalation, despite missing approval. `RR-C-D07-01` | Sponsor is incorrectly named as accepting the security exception. |
| D08 | Uses 90% aggregate recommendation accuracy plus buyer UAT. Does not define task/cohort thresholds, severe-error policy, abstention, gold-set owner, or accountable acceptance. `RR-C-D08-01` | AI lead reports accuracy; buyers â€œconfirm usability.â€ |
| D09 | Builds the polished portal and agent workflow first, leaving source integration and evaluation for later sprints. No approved integration fallback or replan trigger. `RR-C-D09-01` | Delivery lead owns schedule but not the external security dependency. |
| D10 | Allocates most budget to platform and feature engineering. Evaluation, change, FinOps, and operations are part-time duties of the AI delivery lead. `RR-C-D10-01` | Ownership is nominal and capacity is not quantified. |
| D11 | Retains the separate ranked-list portal. Buyers approve the final recommendation and the agent then initiates the award workflow. Field-level evidence and override reasons are optional. `RR-C-D11-01` | Buyer click is treated as both review and delegated authority without policy confirmation. |
| D12 | Retains the original one-call cost estimate. Adds a monthly budget alert and states that optimization will occur after adoption. `RR-C-D12-01` | AI lead owns alert; no task economics, loop limits, or degradation rule. |
| D13 | Accepts autonomous award initiation below EUR 250,000, citing human approval and audit logs as sufficient control. `RR-C-D13-01` | Sponsor is incorrectly treated as able to override segregation-of-duties policy. |
| D14 | Escalates the CISO decision and proceeds with external-model integration because schedule impact is â€œcommercially unacceptable.â€ `RR-C-D14-01` | Sponsor accepts residual risk despite lacking the required security authority. |
| D15 | Keeps EUR 8 million externally as an aspiration and says Finance methodology can be refined after pilot. Uses the corrected caveat only in an internal appendix. `RR-C-D15-01` | Sponsor owns messaging; no corrected public claim or funding decision. |
| D16 | Keeps full date and scope after the API delay, uses manual uploads without approved target-state transition, and compresses segmented testing to protect launch. Calls the workaround production-ready. `RR-C-D16-01` | Delivery lead owns execution; no security acceptor or go/no-go condition. |
| D17 | Proceeds because aggregate extraction accuracy is 93%. Requires buyers to check output but does not reliably identify or route German/Czech complex formats. `RR-C-D17-01` | Buyers carry the error risk without evidence that review contains it. |
| D18 | Mandates portal usage, adds training, and treats the 30% adoption signal as normal resistance. Does not redesign the workflow or revise the value case. `RR-C-D18-01` | Procurement managers enforce use; no adoption re-evaluation threshold. |
| D19 | Continues despite four-times inference cost because annual budget remains. Adds a universal token cap without regression testing or user communication. Retains the original cost claim in the business case. `RR-C-D19-01` | AI lead owns spend; no quality-aware containment or continuation threshold. |
| D20 | Recommends full European production release as â€œon time, governed, human-approved, 93% accurate, and on track for EUR 8 million savings.â€ Lists dashboards and audit logs but no usable incident containment or rollback. `RR-C-D20-01` | Sponsor signs overall release; required security, commercial-authority, quality, and operational acceptors are absent. |

### 5.3 Expected gate adjudication

| Gate | Expected | Reason |
|---|---|---|
| G1 Commercial authority | **Fail** | The participant authorizes award initiation outside delegation; a click and audit log do not grant authority. |
| G2 Data/model permission | **Fail** | Production supplier data is knowingly routed to an unapproved endpoint after the CISO refusal. |
| G3 Evaluation sufficiency | **Fail** | Production approval lacks segmented task thresholds and accountable acceptance. |
| G4 Severe cohort failure | **Fail** | Known material German/Czech failures proceed without reliable separation or effective review containment. |
| G5 Accountable ownership | **Fail** | Security and commercial risks are assigned to people without the relevant authority, while critical operating risks lack owners. |
| G6 Claim integrity | **Fail** | Contradicted benefit, readiness, cohort-performance, cost, and production-integration claims are knowingly presented as established. |
| G7 Operational control | **Fail** | Action-capable AI releases without usable containment, incident ownership, and rollback. |

The strictest overall cap is 39. G1 and G7 also cap Trust and Governance at 25; G3 caps Technical Integrity at 40. G6 may cap affected dimensions at 25.

### 5.4 Expected score profile

| Dimension | Expected raw range | Expected reported effect |
|---|---:|---|
| Business value | 15-35 | Unsupported attribution and contradicted benefit claim; likely G6 dimension cap of 25. |
| Delivery confidence | 20-40 | Visible progress masks unmanaged critical path, capacity, and recovery failure. |
| Technical integrity | 15-35 | Architecture, evaluation, fallback, and operations are materially unsafe; G3 cap is non-binding if raw is lower. |
| Data readiness | 15-35 | Excess scope, invalid labels, missing segment coverage, and weak remediation. |
| Trust and governance | 5-25 | Multiple authority, permission, ownership, claim, and operational-control failures; capped at 25. |
| Financial sustainability | 10-30 | No credible unit economics; known cost contradiction is preserved. |
| User adoption | 10-30 | Mandated use substitutes for workflow fit and evidence. |
| Secondary overall | 14-32 raw | Reported overall cannot exceed 39, though the expected raw score is already below it. |

The run must not receive a medium score merely because it includes terms such as human-in-the-loop, audit logs, UAT, accuracy, governance, and budget monitoring. Those statements lack effective authority, thresholds, ownership, or containment.

## 6. Cross-run discrimination tests

Independent reviewers must answer these questions before reconciliation:

1. Did Run B score materially below Run A solely because it paused AI recommendation? If yes, identify the biased criteria or anchor interpretation.
2. Did Run C earn anchor 3 or 4 from fluent control language without operational evidence? If yes, enforce the evidence contract.
3. Did either strong run receive a G6 failure for an assumption it corrected promptly? If yes, reapply the four-part materiality test.
4. Were Runs A and B penalized for not discovering hidden truths before a fair evidence route existed? If yes, enforce the availability rule.
5. Did Run A receive near-perfect adoption or financial scores despite limited live evidence? If yes, the reviewer is rewarding design intention as demonstrated outcome.
6. Did Run B receive full technical scores for a recommendation component it deliberately left unresolved? If yes, distinguish strong containment from completed capability.
7. Did Run C avoid G1 because a human clicked Approve? If yes, the reviewer confused interface confirmation with delegated commercial authority.
8. Did Run C avoid G2 because the sponsor accepted risk? If yes, verify whether the sponsor holds the required security authority.
9. Did Run C avoid G4 because buyers were told to check results? If yes, demand evidence that the review can detect and contain the known severe errors.
10. Are score differences driven by evidence quality and coherence rather than response length? If not, revise the evaluator instructions.

## 7. Blind-scoring protocol

1. Replace the labels â€œstrongâ€ and â€œunsafeâ€ with neutral fixture IDs before giving runs to reviewers.
2. Give each reviewer only `FOUNDATION.md`, `DECISIONS.md`, `SCORING.md`, the frozen evidence ledger, and the information-availability timeline.
3. Do not provide expected gates, score ranges, or intended outcomes.
4. Require evidence IDs, contrary evidence, reason, confidence, and availability references for all 28 criteria.
5. Require separate adjudication of all seven gates before overall calculation.
6. Preserve both original reviews before reconciliation.
7. Flag anchor differences of two or more, dimension differences over 10 points, and every gate disagreement.
8. Record whether disagreement arose from missing fixture evidence, rubric ambiguity, hidden-information leakage, or reviewer error.

## 8. Acceptance conditions for these fixtures

The fixtures pass initial paper validation only if:

- Runs A and B both land predominantly in the Supported or Integrated bands with no expected gate failure;
- Run B is not penalized for reducing AI scope when the evidence makes that the stronger leadership decision;
- Run C triggers every applicable critical gate and lands predominantly in Fragile or Unsafe/absent bands;
- reviewers can cite the exact decision evidence for each gate and criterion;
- no expected result depends on an unstated hidden truth;
- Run A is not treated as perfect merely because it is the intended controlled-pilot route;
- Run B's pause includes evidence worth buying, named ownership, a decision date, and termination logic;
- Run C remains plausible enough that its failure comes from consequences and contradictions, not cartoonish wording; and
- all rubric disagreements can be converted into a concrete revision or an explicit calibration hypothesis.

## 9. Known limitations to test

- Run C currently accumulates many G6-relevant claims. Reviewers must determine whether G6 adds discrimination or merely repeats weaknesses already captured elsewhere.
- Runs A and B both choose an approved private model. A later fixture should test a legitimately approved external route so model choice does not become a hidden answer.
- Both strong runs use temporary ingestion after the API delay. A later fixture should test a justified date extension with full integration.
- The evidence ledgers are concise authored summaries, not verbatim 90-minute participant responses. Timing and response burden remain untested.
- Procurement-domain realism still requires review by a sourcing professional; AI delivery rigor alone is insufficient.

## 10. Next calibration artifacts

After blind scoring, create:

1. `REFERENCE_SCORES.md`, preserving independent ratings and reconciliation;
2. `STATE_TRANSITIONS.md`, formalizing deterministic effects and crisis triggers;
3. `PLAYTEST_SCRIPT.md`, standardizing facilitator instructions and timing; and
4. versioned fixture data only after the narrative contracts survive paper review.
