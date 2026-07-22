
Procurement Under Pressure: Decision Model

Scenario ID: procurement-under-pressure@0.1.0Artifact: Twenty-decision paper contractStatus: Draft for paper playthrough. Not calibrated. Not a benchmark result.

1. Purpose

This document defines the twenty consequential decisions in the first scenario. It is an authoring and evaluation contract, not player-facing copy.

Each decision must do five things:

create a genuine trade-off rather than test recall;

give the participant a fair route to relevant evidence;

change future information, options, constraints, or program state;

capture assessable evidence of leadership judgment; and

preserve more than one defensible route through the scenario.

The engine must never display numerical state changes, rubric anchors, hidden-truth references, or gate logic during a first attempt.

2. Response contract

Most decisions use a structured response rather than a bare option:

action: one bounded action or approved custom action
rationale: concise explanation of the trade-off
evidence_used: zero or more available evidence IDs
assumptions: material unresolved assumptions
owner: accountable decision or risk owner
acceptance_condition: measurable condition for proceeding, changing, or stopping

An option constrains the action. It does not determine the score. Scoring depends on the complete response and the evidence reasonably available at that point.

2.1 Investigation capacity

The participant starts with 10 investigation credits. An evidence request normally costs one credit. Two requests are free because they are essential to basic role performance:

the governing procurement and model/data policies;

the initial source inventory and ownership map.

Urgent investigation during a crisis costs two credits unless the participant previously established the relevant monitoring or evidence stream. Unused credits have no score value. This prevents both indiscriminate discovery and artificial hoarding.

2.2 State effects

State effects are directional paper-simulation values, not claims of scientific measurement:

small: ±2..8;

material: ±9..15;

critical: a gate implication plus an explicit state effect.

Effects are conditional. The same action can produce different outcomes depending on its rationale, evidence, controls, and earlier choices.

3. Decision map

ID

Stage

Decision

Primary tension

Main assessment lenses

D01

Frame

Interpret the 16-week mandate

visible launch vs defensible outcome

Business, Delivery

D02

Frame

Define the outcome and benefit claim

ambition vs attribution

Business, Financial

D03

Frame

Allocate initial investigation

speed vs uncertainty reduction

Data, Delivery

D04

Frame

Set the first-release boundary

breadth vs usable value

Business, Adoption, Governance

D05

Design

Select the solution pattern

agent aspiration vs proportional architecture

Technical, Business

D06

Design

Establish the data strategy

all-source integration vs purpose-fit data

Data, Delivery

D07

Design

Choose the model route

capability vs approval and control

Technical, Governance, Financial

D08

Design

Define evaluation and release thresholds

aggregate performance vs material cohorts

Technical, Data, Governance

D09

Plan

Sequence delivery and dependencies

build momentum vs critical-path realism

Delivery, Technical

D10

Plan

Allocate budget and team

feature build vs evidence and adoption

Delivery, Financial, Adoption

D11

Plan

Design buyer workflow and human control

convenience vs meaningful review

Adoption, Governance

D12

Plan

Define operating economics

usage freedom vs sustainable service

Financial, Technical

D13

Defend

Respond to the sponsor's autonomy demand

executive pressure vs authority boundary

Governance, Business

D14

Defend

Respond to the CISO model challenge

blanket rejection vs controlled evidence

Governance, Technical

D15

Defend

Respond to Finance's benefit challenge

defend headline vs repair the case

Business, Financial

D16

Defend

Replan after dependency delay

date, scope, and evidence trade-off

Delivery, Business

D17

Operate

Handle segmented evaluation failure

aggregate success vs cohort safety

Technical, Data, Governance

D18

Operate

Handle buyer rejection of workflow

metric success vs adoption reality

Adoption, Delivery

D19

Operate

Handle cost overrun and loop growth

experience richness vs economics

Financial, Technical

D20

Operate

Make the release recommendation

shipping pressure vs integrated readiness

All seven and all gates

4. Detailed decision contracts

Stage 1: Frame

D01. Interpret the 16-week mandate

Moment: Week 0. The CPO asks for confirmation that the team will deliver the announced “AI procurement copilot” in 16 weeks.

Information shown: starting brief, stakeholder map, fixed constraints, EUR 1.2 million envelope, undefined meaning of “business release.”

Action choices:

A. Commit to enterprise production against the announced ambition.B. Define a controlled business pilot and negotiate explicit entry and exit criteria.C. Run discovery first and defer any release commitment.D. Recommend stopping because the brief is incomplete.E. Propose a custom mandate within the fixed constraints.

Required response: action, definition of “business release,” target users/cohort, decision owner, assumptions, and the condition for confirming or revising the commitment.

Consequence logic:

A increases short-term sponsor confidence but materially reduces delivery and governance health unless scope, authority, and gates are explicitly bounded.

B improves delivery and governance health when the pilot creates real user and decision-quality evidence rather than disguising a demo.

C is defensible only with a time-box, priority questions, and a decision date. Open-ended discovery loses delivery and business-value evidence.

D without a proportionate evidence case is excessive caution.

A well-formed custom mandate may be equivalent to B or C.

Evidence captured: outcome framing, ambiguity handling, scope discipline, decision rights, stop/replan condition.

Hidden interactions: HT-02, HT-05, HT-09, HT-12.

Gate implications: none immediately. A knowingly framed as unapproved autonomous award capability creates exposure to G1 later.

D02. Define the outcome and benefit claim

Moment: Week 0. The sponsor repeats the public targets of 30% faster sourcing and EUR 8 million annual savings.

Information shown: no approved baseline, attribution method, cohort definition, or benefit owner beyond the sponsor.

Action choices:

A. Adopt both targets as committed program benefits.B. Convert them into hypotheses and commission a Finance-owned baseline.C. Replace savings with technical accuracy and document throughput measures.D. Remove quantified targets until after the pilot.E. Define a custom value scorecard.

Required response: outcome metric, start/end event, cohort, baseline period, attribution rule, owner, leading indicators, and a stop or pivot criterion.

Consequence logic:

B or E produces the strongest basis when operational, adoption, financial, and risk measures are connected.

A creates an attractive headline but exposes claim integrity when HT-01 becomes observable.

C confuses system output with business value unless paired with workflow outcomes.

D can protect claim integrity but loses value evidence if it offers no testable hypothesis.

Evidence request unlocked: Finance baseline and savings-attribution review.

Evidence captured: value hypothesis, measurement design, claim integrity, accountable ownership.

Hidden interactions: HT-01, HT-05.

Gate implications: knowingly retaining the EUR 8 million claim after contradictory evidence can fail G6.

D03. Allocate initial investigation

Moment: Week 1. Ten investigation credits are available. The participant must choose the first four evidence requests; remaining credits can be used later.

Information shown: evidence catalogue with request lead times and named source owners. Policies and source ownership map are free.

Eligible requests include: workflow time study; Finance baseline; field-level profiling; supplier-segment coverage; historical-label review; language/format sample; user observation; API lead-time check; model bake-off; threat/privacy assessment; transaction-volume model; evaluation-dataset design.

Required response: four prioritized requests, the uncertainty each resolves, affected decision, owner, and latest useful date.

Consequence logic:

Requests create value only when tied to an upcoming decision.

Broad duplicate requests consume capacity and may delay framing.

Skipping data, user, policy, and dependency evidence creates later blind spots.

Saving some credits for emerging uncertainty is legitimate; hoarding all capacity is not.

Evidence captured: risk-based discovery, sequencing, uncertainty management, ownership.

Hidden interactions: all hidden truths have discoverable routes; D03 determines which can surface early.

Gate implications: no direct failure. “Reasonably obtainable” evidence for later gates depends partly on this choice.

D04. Set the first-release boundary

Moment: Week 2. The steering group asks what the first release will and will not do.

Information shown: early evidence returned from D03, fixed human approval and commercial-authority constraints.

Action choices:

A. Full European direct-material scope with extraction, ranking, recommendation, and workflow initiation.B. Two-commodity pilot with extraction, normalization, comparison, evidence-linked drafting, and human approval.C. Document extraction and deterministic exception checking only, with AI recommendation deferred.D. Prototype outside the buyer workflow with no business use.E. Custom scope expressed as cohort × capabilities × authority × exclusions.

Required response: in/out scope, users, commodities, languages, actions permitted, actions prohibited, interfaces, and exit criteria.

Consequence logic:

B is viable when evidence supports the cohort and workflow.

C is viable when recommendation data or evaluation is immature, but must still create measurable workflow value.

A usually overwhelms dependencies and creates authority exposure.

D creates weak adoption and business evidence unless it is explicitly a short technical experiment feeding a dated decision.

Custom scope is rewarded for coherence, not novelty.

Evidence captured: bounded value, proportional scope, authority boundary, exclusions, release evidence plan.

Hidden interactions: HT-02, HT-05, HT-08, HT-10, HT-12.

Gate implications: authorizing material commitment outside delegation creates a pending G1 condition.

Stage 2: Design

D05. Select the solution pattern

Moment: Week 3. The AI lead proposes an LLM-led agent that ingests, reasons, ranks, drafts, and initiates workflow actions.

Information shown: selected scope; process map; available internal rules service; model choices; evidence discovered so far.

Action choices:

A. End-to-end autonomous LLM agent.B. Hybrid pipeline: deterministic ingestion/validation, model-assisted extraction and drafting, rules/calculation services, evidence retrieval, human decision.C. Predictive supervised model trained on historical awards as the recommendation engine.D. Rules and document automation only.E. Custom component architecture with task-to-technology rationale.

Required response: component responsibilities, why each requires rules/ML/GenAI/agent behavior, failure boundaries, fallback, and prohibited actions.

Consequence logic:

B generally fits the known problem but does not score strongly without testable boundaries and fallback behavior.

A creates technical, cost, and governance exposure, especially if tool permissions are broad.

C is unsafe if historical awards are treated as objective labels without review.

D can be strong for reduced scope but weak if it ignores valuable unstructured extraction where evidence supports it.

Evidence captured: AI suitability, architecture proportionality, decomposition, failure handling, action boundaries.

Hidden interactions: HT-04, HT-05, HT-06, HT-10, HT-11.

Gate implications: A with award initiation can later fail G1 and G7. C with known label defects can implicate G4 or G6.

D06. Establish the data strategy

Moment: Week 3. The data owner says all 12 sources should be integrated to create a strategic foundation.

Information shown: free source inventory; any requested source-to-outcome, profiling, label, and access evidence.

Action choices:

A. Integrate all 12 before pilot build.B. Select the minimum authoritative sources required for the bounded decisions.C. Use uploaded documents only and defer enterprise integrations.D. Train primarily on historic award outcomes.E. Custom staged data contract.

Required response: purpose-to-source mapping, authoritative fields, lineage, permitted use, quality thresholds, reconciliation, representative cohorts, remediation owner, and fallback for missing data.

Consequence logic:

B improves delivery and data health if selection is evidence-based.

C can enable a controlled pilot but creates duplicate handling and weak operational fit if retained as the target state.

A consumes the critical path without corresponding first-release value.

D inherits biased and context-dependent labels unless the participant redesigns the learning target.

Evidence captured: purpose limitation, source minimization, fitness criteria, representativeness, ownership, lineage.

Hidden interactions: HT-02, HT-03, HT-04, HT-09.

Gate implications: knowingly claiming representative readiness despite HT-03 or HT-04 can fail G6; proceeding through severe segment failure can later fail G4.

D07. Choose the model route

Moment: Week 4. The external frontier model is stronger on a small English extraction test. It remains unapproved for production supplier data. The private endpoint is approved but weaker in that test.

Action choices:

A. Use the external model with production data because performance is superior.B. Use the approved private model and compensate through templates, retrieval, validation, and bounded tasks.C. Seek a time-bound approval/exception while running a sanitized comparative evaluation; retain an approved fallback.D. Use no language model.E. Custom model-routing strategy.

Required response: task-specific selection criteria, data classification, endpoint and residency, approval path, fallback, evaluation cohorts, switching condition, and cost assumption.

Consequence logic:

C preserves optionality but only if the release plan does not depend on an exception arriving.

B can be strong when architecture and evaluation make the lower-capability model adequate.

A immediately violates a fixed constraint if production data is used knowingly.

D is proportionate only if the selected scope can meet value and quality needs without a model.

Evidence captured: model rationale, permission, privacy/security, evaluation, fallback, economic awareness.

Hidden interactions: HT-06, HT-07, HT-11.

Gate implications: A with production data fails G2. Misstating approval or performance after evidence can fail G6.

D08. Define evaluation and release thresholds

Moment: Week 5. The team asks what “good enough” means. The sponsor suggests 90% overall recommendation accuracy.

Action choices:

A. Use one aggregate accuracy threshold.B. Define task- and cohort-specific thresholds with cost-of-error and abstention behavior.C. Let expert buyers decide informally during UAT.D. Benchmark only against the current private model.E. Custom evaluation contract.

Required response: evaluation units, gold-set ownership, cohorts, metrics, thresholds, error severity, human review, abstention, acceptance owner, regression policy, and unresolved-data treatment.

Consequence logic:

B creates the strongest release evidence when it covers extraction, calculations, citations, recommendations, workflow, and critical cohorts proportionately.

A hides cohort and error-severity problems.

C provides useful qualitative evidence but cannot replace reproducible acceptance criteria.

D compares models but does not establish business fitness.

Evidence captured: evaluation validity, segmentation, accountable acceptance, error economics, release gate.

Hidden interactions: HT-03, HT-04, HT-07.

Gate implications: production approval without defined segmented thresholds and owner fails G3. Proceeding after a known severe cohort failure can fail G4.

Stage 3: Plan

D09. Sequence delivery and dependencies

Moment: Week 5. A source API may require a security review, while the sponsor wants a polished end-to-end demonstration by week 8.

Action choices:

A. Build the full UI and agent flow first; resolve integrations later.B. Front-load dependency validation, thin vertical slice, and evaluation harness.C. Wait for every production integration before building.D. Use permanent manual uploads to protect the date.E. Custom delivery sequence with explicit critical path.

Required response: milestones, dependencies, owners, gate dates, integration fallback, evidence increments, and replan trigger.

Consequence logic:

B exposes feasibility early and usually improves delivery and technical health.

A produces visible progress but defers the hardest risks.

C loses learning and value through avoidable waiting.

D can support a pilot only if temporary, controlled, and tied to a target-state transition.

Evidence captured: critical-path management, vertical slicing, dependency ownership, early validation, fallback.

Hidden interactions: HT-09, HT-12.

Gate implications: no direct failure. Ignoring a known dependency and later presenting readiness can contribute to G6.

D10. Allocate budget and team

Moment: Week 6. The EUR 1.2 million envelope must cover initial release and the first operating year.

Action choices:

A. Maximize feature engineering and defer change, evaluation, FinOps, and operations work.B. Fund a balanced cross-functional pilot team and explicit evidence/operating work.C. Spend heavily on platform foundations for future reuse.D. Minimize specialists and rely on the AI delivery lead to coordinate all controls.E. Custom allocation totaling no more than the envelope.

Required response: role capacity, build/run split, contingency, evaluation, security/data, UX/change, operations, and trade-offs if costs move.

Consequence logic:

B is strong only when named capacities match the chosen architecture and plan.

A creates late gate failures and weak adoption.

C may be strategically attractive but is penalized if the reusable foundation is not required for the bounded release.

D creates false ownership and key-person dependency.

Evidence captured: resource realism, operating ownership, contingency, value-to-cost prioritization.

Hidden interactions: HT-08, HT-09, HT-11.

Gate implications: material risks assigned to people without authority can contribute to G5.

D11. Design buyer workflow and human control

Moment: Week 6. The prototype team proposes a separate portal showing a ranked supplier list and an Approve button.

Action choices:

A. Keep the portal and require buyer approval of the final recommendation.B. Embed assistance in the existing review workflow with field-level evidence, exceptions, editability, and recorded override.C. Email a generated recommendation for buyers to copy into the sourcing system.D. Let the agent initiate the sourcing workflow after a buyer clicks approve.E. Custom workflow and control design.

Required response: user steps, evidence shown, verification duties, override, segregation of duties, accessibility, training, adoption measures, and final authority.

Consequence logic:

B improves adoption and governance when review is meaningful rather than ceremonial.

A preserves nominal HITL but creates duplicate work and automation bias.

C is quick but weakens traceability and version control.

D is allowed only for non-material bounded actions that are explicitly authorized; supplier commitment remains prohibited.

Evidence captured: workflow fit, meaningful human control, traceability, adoption instrumentation, authority.

Hidden interactions: HT-08, HT-10.

Gate implications: a material supplier commitment outside delegation fails G1. Action-capable workflow without containment creates G7 exposure.

D12. Define operating economics

Moment: Week 7. The initial estimate assumes one model call per quotation. The product design now includes reprocessing, reviewer chat, and regeneration.

Action choices:

A. Retain the original monthly estimate and manage variance after launch.B. Build a unit-cost model and introduce task routing, caching, budgets, loop limits, and quality-aware fallbacks.C. Remove all conversational review to guarantee cost.D. Purchase a large fixed capacity commitment before volume validation.E. Custom cost-control design.

Required response: volume assumptions, unit economics, sensitivity cases, cost/value metric, guardrails, degradation policy, owner, and alert/action thresholds.

Consequence logic:

B strengthens financial and technical health if guardrails do not silently degrade critical quality.

A creates predictable forecast failure.

C may be proportionate but loses adoption evidence if conversational review addresses a verified user need.

D reduces unit cost only if usage materializes and model approval remains stable.

Evidence captured: run-cost model, sensitivity, consumption controls, graceful degradation, ownership.

Hidden interactions: HT-11.

Gate implications: presenting the original estimate as verified after loop sensitivity is known can fail G6.

Stage 4: Defend

D13. Respond to the sponsor's autonomy demand

Moment: Week 8. After a successful demonstration, Elena asks the team to let the agent initiate supplier awards below EUR 250,000 so the program looks transformative.

Action choices:

A. Accept to preserve sponsorship and add audit logging.B. Refuse all action capability indefinitely.C. Retain human award authority; offer bounded non-commitment actions and an evidence path for future autonomy.D. Ask the delivery team to decide based on technical confidence.E. Custom response consistent with delegation policy.

Required response: decision, policy basis, value preserved, permitted actions, future evidence/gate, and authorized risk owner.

Consequence logic:

C protects the boundary while still seeking value.

A fails even with logging because observability does not grant authority.

B is safe but weak if it ignores reversible low-risk workflow actions.

D abdicates a business and governance decision to an unauthorized team.

Evidence captured: executive challenge, authority boundary, proportional autonomy, escalation, future control path.

Hidden interactions: HT-10.

Gate implications: A fails G1. D can fail G5 if material risk is left without an authorized owner.

D14. Respond to the CISO model challenge

Moment: Week 9. Aisha states that the external model will not be approved before the pilot date and questions whether any generative model is necessary.

Action choices:

A. Escalate around the CISO to the sponsor.B. Switch to the approved endpoint without revisiting quality or scope.C. present task-level threat, data-flow, evaluation, and fallback evidence; re-scope to what the approved route can support.D. Pause the entire program pending external-model approval.E. Custom evidence-led response.

Required response: accepted concern, evidence, model/data flow, compensating controls, residual risk, scope effect, approval owner, and fallback.

Consequence logic:

C demonstrates constructive control and preserves a viable route.

A damages trust and cannot waive policy.

B may be viable but is unsupported without task-level evaluation.

D is excessive if approved patterns can deliver bounded value.

Evidence captured: security collaboration, model contingency, evidence-led scope adjustment, residual-risk ownership.

Hidden interactions: HT-06.

Gate implications: bypassing the approval and using supplier data fails G2. Treating the delivery team as risk acceptor can fail G5.

D15. Respond to Finance's benefit challenge

Moment: Week 9. Tomas shows that the EUR 8 million claim includes negotiated savings already in the plan and unverified cost avoidance.

Action choices:

A. Defend the headline as an aspirational target.B. Remove all benefits and describe the pilot as innovation learning.C. Correct the claim, publish the uncertainty, and rebase the pilot on attributable operational and decision-quality benefits.D. Keep the headline externally but use the corrected number internally.E. Custom response preserving claim integrity.

Required response: corrected statement, attribution logic, owner, effect on funding/scope, pilot measures, and communication plan.

Consequence logic:

C repairs trust while retaining a testable business case.

A and D become integrity failures because contradictory evidence is now available.

B avoids falsehood but gives up the obligation to test value.

Evidence captured: intellectual honesty, benefit attribution, sponsor management, value recovery.

Hidden interactions: HT-01, HT-05.

Gate implications: A or D fails G6 if the material claim is presented as supported.

D16. Replan after dependency delay

Moment: Week 10. The required source API security review is forecast to finish in week 15. A pilot with production integration cannot complete meaningful use by week 16.

Action choices:

A. Keep date and scope; compress testing.B. Keep the date, narrow the cohort, and use a controlled temporary ingestion path with an approved transition plan.C. Move the date and retain the complete original scope.D. Declare the dependency outside the team's control and continue unchanged.E. Custom replan trading scope, date, and evidence transparently.

Required response: revised scope/date, dependency owner, temporary control, evidence sacrificed or preserved, cost effect, stakeholder acceptance, and go/no-go trigger.

Consequence logic:

B can preserve learning if temporary handling is secure, operationally honest, and not mislabeled production.

C can be strong when wider scope is justified, but weak if it merely protects sunk ambition.

A creates evaluation and operational-control risk.

D confuses lack of control with lack of accountability.

Evidence captured: recovery planning, transparent trade-offs, dependency accountability, pilot integrity.

Hidden interactions: HT-09, HT-12.

Gate implications: knowingly describing a non-production workaround as production-ready can fail G6. Releasing without required controls can expose G2 or G7.

Stage 5: Operate

D17. Handle segmented evaluation failure

Moment: Week 13. Overall extraction field accuracy is 93%. German and Czech complex quotations achieve 78%, with errors in tooling amortization and logistics terms. English simple quotations pass at 96%.

Action choices:

A. Proceed because the aggregate exceeds 90%.B. Block the entire pilot.C. Contain the failed cohorts, release only passing cohorts if operationally separable, and execute targeted remediation/retest.D. Require buyers to check every field but keep all cohorts in scope.E. Custom risk-based containment.

Required response: release decision, error severity, affected cohort, containment, user burden, remediation owner, retest threshold, and communication.

Consequence logic:

C is strong when cohorts can be reliably identified and routed without hidden burden.

B is justified only if separation or safe fallback is not feasible.

A ignores a known material failure.

D may be safe for limited learning, but cannot be called automation value without measuring review burden and error detection.

Evidence captured: segmented evaluation, severity judgment, containment, honest scope, recovery.

Hidden interactions: HT-07.

Gate implications: A fails G4. D can fail G4 if review is ceremonial or incapable of containing the error.

D18. Handle buyer rejection of workflow

Moment: Week 14. Technical thresholds pass for the bounded cohort, but buyer testing shows the separate portal adds duplicate review and re-entry. Only 30% say they would use it for live sourcing.

Action choices:

A. Mandate usage and treat resistance as a training issue.B. Release because technical acceptance passed.C. redesign the workflow around existing review steps; use a limited shadow or assisted pilot to preserve learning.D. Cancel the capability.E. Custom adoption recovery plan.

Required response: diagnosis, user evidence, workflow change, business-impact effect, pilot mode, adoption measure, owner, and re-evaluation date.

Consequence logic:

C treats adoption as product evidence while protecting learning.

A and B turn a verified design failure into operating risk and weak value.

D may be justified if redesign economics fail, but not from one undiagnosed signal.

Evidence captured: user-centered diagnosis, workflow adaptation, change ownership, value impact, learning design.

Hidden interactions: HT-08.

Gate implications: claiming business readiness despite contradictory adoption evidence can fail G6.

D19. Handle cost overrun and loop growth

Moment: Week 15. Shadow use shows inference cost at four times plan because documents are repeatedly processed and reviewer conversations trigger regeneration.

Action choices:

A. Continue because the total remains within the annual envelope.B. Disable the model and fall back to rules for every task.C. trace cost by task; cache stable artefacts, cap/review loops, route models, preserve critical quality, and reforecast unit economics.D. impose a universal hard token cap with no workflow-specific behavior.E. Custom economic containment.

Required response: root cause, immediate containment, quality trade-off, unit-cost target, monitoring, owner, user communication, and continuation threshold.

Consequence logic:

C improves sustainability without blindly sacrificing quality.

A mistakes budget headroom for economic viability.

B may destroy the validated value path.

D can create silent truncation and quality failure.

Evidence captured: cost observability, root-cause control, graceful degradation, reforecasting, value-to-cost judgment.

Hidden interactions: HT-11.

Gate implications: knowingly retaining a false run-cost claim can fail G6. Cost controls that silently invalidate accepted quality create G3 exposure.

D20. Make the release recommendation

Moment: Week 16. The steering group requires a signed recommendation: release, conditional release, reduced-scope release, extend, or pause.

Information shown: full decision history, discovered evidence, unresolved assumptions, gate evidence, crisis outcomes, budget and schedule position. Hidden scores remain invisible.

Action choices:

A. Release the full originally announced capability.B. Conditionally release the bounded passing cohort.C. Release document/rules automation and defer AI recommendation.D. Extend the controlled pilot with explicit evidence goals.E. Pause release with a time-bound remediation or termination plan.F. Custom recommendation within fixed constraints.

Required response: recommendation, scope and exclusions, supporting evidence, unresolved risk, named acceptors, gate status, monitoring, incident/rollback plan, benefit measurement, next decision date, and public claim.

Consequence logic:

No option is intrinsically best. The response must reconcile the actual run evidence.

Conditional or reduced-scope release is strong only when failed cohorts and actions are technically containable.

Extension or pause is strong only when the missing evidence is material, time-bound, owned, and worth obtaining.

Full release is indefensible if fixed constraints or material failed evidence remain.

Evidence captured: integrated judgment across all seven dimensions, readiness integrity, accountable acceptance, operations, adaptation.

Hidden interactions: all discovered hidden truths and their downstream effects.

Gate implications: D20 resolves all pending gate conditions. A release recommendation fails any applicable gate when its fail condition is satisfied. A pause does not automatically pass gates or earn a strong score.

5. Cross-decision dependencies

Earlier decision

Later consequence

D01 mandate

Constrains what D04 can honestly call a release and what D20 must reconcile

D02 benefit design

Determines whether D15 is a validation, correction, or integrity failure

D03 investigation

Controls when evidence becomes available and whether later ignorance was avoidable

D04 scope

Sets applicable data, model, evaluation, workflow, and operating requirements

D05 architecture

Determines action boundaries, evaluation units, and cost drivers

D06 data strategy

Determines cohorts, label validity, access path, and remediation burden

D07 model route

Determines approval, fallback, model evaluation, and cost exposure

D08 evaluation

Determines whether D17 is detectable and whether D20 can pass G3

D09 sequence

Determines whether D16 is recoverable without fictitious readiness

D10 allocation

Determines available capacity for evaluation, adoption, security, and operations

D11 workflow

Determines the severity and recoverability of D18

D12 economics

Determines whether D19 is an expected sensitivity or unmanaged surprise

D13-D16 defence

Tests whether the participant repairs the program or merely argues for prior choices

D17-D19 operations

Supply the decisive evidence for D20; they cannot be treated as isolated incidents

6. Decision scoring method

Decisions do not award fixed option points. Evaluators create evidence objects against scenario criteria.

6.1 Deterministic checks

Use deterministic evaluation only for observable facts, for example:

an accountable owner is named;

a threshold contains a metric and value;

a prohibited endpoint is selected for production supplier data;

material award authority is delegated to AI;

an affected cohort is explicitly excluded or contained;

a release includes or omits monitoring, incident ownership, and rollback.

Presence checks do not prove quality. Naming “the CISO” is not evidence that residual risk was appropriately framed or accepted.

6.2 Rubric evaluation

Rubric evaluation assesses proportionality, evidence use, coherence, and trade-offs using the five anchors in FOUNDATION.md.

6.3 LLM critique

An LLM may identify ambiguity, contradiction, unsupported claims, or cross-decision inconsistency. It may recommend evidence classifications with confidence. It may not:

invent evidence;

infer that a preferred option is correct;

determine a critical-gate failure alone;

reward writing polish or length; or

overwrite deterministic history.

6.4 Gate adjudication

Every gate decision must include:

gate_id: G1-G7
status: pass | fail | not_applicable | unresolved
triggering_decisions: []
available_evidence: []
participant_action: concise factual record
deterministic_check: result
review_required: true | false
adjudication_note: why the formal condition is or is not satisfied

During calibration, every fail and every unresolved gate must be independently reviewed.

7. Paper-playthrough checks

The decision model is not ready for implementation until at least three full paper runs demonstrate:

a strong controlled-pilot route;

a strong reduced-scope or pause route;

a plausible but unsafe “ship at all costs” route;

at least one recoverable early mistake;

at least one late decision that cannot erase an earlier integrity failure;

every hidden truth becoming observable through a fair path;

no single option sequence mechanically producing the highest assessment;

completion in approximately 90 minutes with concise responses; and

reasonable agreement between two independent expert scorers.

8. Open issues exposed by this draft

These are deliberately unresolved pending paper playthrough:

Ten investigation credits may be too generous because policies and source ownership are free.

Twenty full structured rationales may exceed the 90-minute target; some decisions may need shorter response contracts.

D13-D16 could feel like a presentation exam unless stakeholder exchanges allow one evidence request or clarification.

The distinction between a controlled pilot, shadow use, assisted use, and production release needs a shared glossary.

Gate G6 claim integrity may trigger too often unless “material” and “presented as verified” are tightly adjudicated.

We still need explicit criterion IDs beneath the seven dimensions before reliable scoring can begin.

These issues should be tested, not resolved by intuition.
