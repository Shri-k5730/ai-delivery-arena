Procurement Under Pressure

Scenario ID: procurement-under-pressure@0.1.0Artifact: Scenario world and assessment foundationStatus: Foundation locked. Paper design. Not calibrated. Not a benchmark result.

Locked scenario invariants

The following choices were accepted on 22 July 2026 and are not calibration variables for v0.1.0:

The bounded use case is supplier quotation analysis and sourcing recommendations.

Program-health scores remain hidden during a first attempt. Participants see only operational evidence, signals, and consequences.

The final assessment leads with seven dimension scores and critical-gate status. Any overall score is secondary and cannot compensate for a failed gate.

1. What this scenario assesses

This scenario assesses whether a participant can lead a bounded enterprise AI initiative from an ambiguous executive mandate to a defensible production-readiness decision.

The participant is not asked to “transform procurement.” The operational problem is deliberately narrower:

Reduce the effort and cycle time required to analyse supplier quotations and prepare defensible sourcing recommendations, without allowing AI to make an unapproved commercial commitment.

The scenario tests whether the participant can distinguish among document automation, deterministic rules, predictive ML, generative AI, and agentic workflow. It also tests whether they can resist unsupported savings claims and premature autonomy.

2. Participant role and mandate

The participant is the newly appointed AI Delivery Lead for a global automotive components manufacturer, Northstar Mobility Group (NMG).

The executive sponsor has announced an “AI procurement copilot” and expects a demonstrable business release in 16 weeks. The participant can recommend a narrower scope, change sequencing, request evidence, define gates, and stop or condition release. They cannot unilaterally change corporate policy, approve a model, create clean data, or accept business risk on behalf of named owners.

The participant is accountable for the quality of the recommendation and delivery system. They are not assumed to possess every specialist skill.

3. Organization and operating context

NMG operates in Germany, Czechia, India, the United Kingdom, and the United States. The initial release is for European direct-material sourcing.

Material workflow

A buyer issues an RFQ package for a part or commodity.

Suppliers return quotations in spreadsheets, PDFs, email attachments, and portal forms.

Buyers normalize commercial terms, currencies, volumes, logistics, tooling, and exceptions.

Engineering and quality teams assess technical compliance and supplier risk.

Buyers prepare a sourcing recommendation.

A sourcing committee approves, rejects, or requests rework.

Approved outcomes are entered into the sourcing and ERP systems.

Proposed capability

The sponsor describes the desired product as an agent that can:

ingest RFQ and supplier-response documents;

extract and normalize quotation data;

identify missing or inconsistent terms;

compare suppliers against commercial, technical, quality, and risk criteria;

draft an evidence-linked recommendation;

answer reviewer questions;

eventually initiate selected workflow actions.

The word eventually is intentional. v0.1 must test whether the participant defines a defensible boundary for the first release rather than accepting autonomy as a default.

4. People and decision rights

Role

Public position

Actual authority

Elena Fischer, CPO and sponsor

Wants speed, savings, and visible AI

Owns procurement outcome and benefit case; cannot waive security or model policy

Marcus Lee, CIO

Supports a reusable platform

Owns enterprise technology standards and production service acceptance

Aisha Rahman, CISO

Assumes external models create unacceptable exposure until proven otherwise

Owns security approval and exception process

Tomas Novak, VP Finance

Challenges benefit inflation and uncontrolled consumption

Owns financial baseline and funding release

Klara Vesela, Head of Strategic Sourcing

Wants buyer control and explainable comparisons

Owns workflow acceptance and sourcing policy

Daniel Weber, Data Owner

Believes the data is “mostly available”

Owns source access, quality remediation, and permitted use

Priya Nair, AI/ML Lead

Prefers a flexible LLM-led architecture

Owns technical recommendation, not business or risk acceptance

Procurement Council

Approves sourcing awards above delegated thresholds

Retains final award authority in the initial release

No single stakeholder can approve production. Readiness requires evidence and named acceptance across the relevant decision rights.

5. Starting information

The participant receives the following as established facts at the start:

The sponsor expects a business release in 16 weeks.

The announced ambition is a 30% reduction in sourcing cycle time and EUR 8 million annual savings.

The first release concerns European direct-material RFQs.

Relevant information is distributed across 12 systems and document repositories.

Supplier responses contain commercially confidential information and personal contact data.

European data residency and corporate retention requirements apply.

The sponsor prefers a frontier external LLM, but it is not on the approved-model list.

NMG has an approved private-cloud model endpoint with lower capability and an internal rules service.

Buyers currently make the sourcing recommendation and the Procurement Council approves material awards.

The implementation budget is EUR 1.2 million for the initial release and first year of operation.

The sponsor expects a recommendation on scope, architecture, delivery plan, and release gates.

Everything else is a claim, estimate, assumption, or unknown until supported by scenario evidence.

6. Information available through investigation

The participant can spend limited investigation capacity to request evidence. The system must distinguish available, requested, verified, and unresolved information.

Evidence categories include:

cycle-time baseline by commodity, region, and RFQ complexity;

savings attribution method and Finance-approved baseline;

sample size, format distribution, language mix, and historical coverage;

field-level completeness and reconciliation with awarded outcomes;

buyer exception patterns and manual workarounds;

source-system ownership, access lead times, and integration constraints;

model approval criteria and security threat assessment;

procurement policy, delegation thresholds, and segregation of duties;

user research and workflow observation;

expected transaction volume and cost sensitivity;

evaluation dataset construction and acceptance thresholds.

Investigation is not free. Requesting everything delays decisions; requesting too little leaves consequential assumptions unresolved.

7. Fixed constraints

These constraints do not change during a run:

Production supplier data cannot be sent to an unapproved model endpoint.

The initial release must retain a human sourcing recommendation and committee approval for material awards.

Completed benchmark attempts use the same scenario version and evidence catalogue.

The participant has 16 simulated weeks and a EUR 1.2 million initial-release envelope unless a formally accepted replan changes them.

Source-system owners control access and remediation. The delivery team cannot silently manufacture readiness.

Material readiness claims require defined evidence and an accountable acceptor.

The system may draft or recommend. It may not create an unreviewed supplier commitment in the initial release.

8. Intentional ambiguities

These are not defects in the brief. They are decisions the participant must surface and resolve:

“Business release” could mean a controlled pilot or enterprise production.

“30% faster” lacks a starting event, ending event, cohort, and baseline period.

“EUR 8 million savings” may include negotiated savings that cannot be attributed to the tool.

“Twelve systems” does not reveal which are authoritative or necessary for the first release.

“Agent” describes an aspiration, not a justified architecture.

“Recommendation accuracy” has no agreed definition or cost-of-error model.

“European data residency” does not by itself settle processor, retention, logging, or cross-border support questions.

“Human in the loop” does not specify what the human sees, verifies, can override, or owns.

Strong performance requires converting material ambiguity into explicit assumptions, evidence requests, owners, and gates. Merely listing ambiguity is insufficient.

9. Hidden truths

Hidden truths are immutable scenario facts used to generate later evidence and consequences. They are never directly exposed as an answer key during a first attempt.

ID

Hidden truth

How it can become observable

Consequence if mishandled

HT-01

The EUR 8 million claim combines addressable savings, pre-existing negotiations, and unvalidated avoidance

Finance baseline review

Benefits are challenged; funding confidence falls

HT-02

Only five of the 12 systems are required for a useful first release

Source-to-outcome mapping

Integrating all 12 creates avoidable schedule and delivery risk

HT-03

Supplier-performance history is missing for 35% of the relevant population and is biased toward strategic suppliers

Profiling by supplier segment

Risk ranking appears strong overall but fails on smaller suppliers

HT-04

Historical award decisions encode buyer preferences and past supply constraints, not an objective “best supplier” label

Label and policy review

Supervised recommendation logic reproduces opaque historical decisions

HT-05

Seventy percent of buyer effort in the target cohort is document normalization and exception chasing

Workflow observation and time study

Extraction and rules can create value before autonomous recommendation

HT-06

The external model performs better on unstructured extraction, but the approved private model is adequate when combined with templates, retrieval, and validation rules

Controlled model evaluation

Model choice becomes a trade-off, not a brand preference

HT-07

Czech and German quotation formats produce materially more extraction errors than English samples

Segmented evaluation

Aggregate accuracy hides a release-blocking cohort failure

HT-08

Buyers will reject a separate portal that requires duplicate review and re-entry

User observation and prototype test

Offline metrics pass while adoption fails

HT-09

A source-system API requires a security review with a six-week median lead time

Dependency discovery

Late access planning makes the 16-week scope infeasible

HT-10

Full autonomous award initiation conflicts with segregation-of-duties policy

Policy and control review

An agent action creates a critical governance failure

HT-11

Expected inference volume is highly sensitive to document reprocessing and conversational review loops

Volume and sensitivity modelling

Cost can reach four times the estimate without caching and limits

HT-12

A controlled pilot covering two commodities can produce decision-quality evidence within 16 weeks

Cohort and dependency analysis

A narrow pilot is viable even when enterprise rollout is not

Hidden truths must not all reward caution. The scenario should penalize unjustified delay as well as reckless speed. A participant who refuses all AI use or waits for perfect data should lose value and delivery evidence.

10. Success, failure, and legitimate outcomes

There is no single required architecture or plan. At least three outcomes can be defensible if supported by evidence:

Conditional pilot: release extraction, normalization, comparison, and recommendation drafting for a bounded cohort with human approval.

Reduced-scope automation: release document and rules automation while deferring AI recommendation until data and evaluation gaps close.

Evidence-led pause: stop production release because a critical condition is unresolved, while preserving a time-bound remediation and learning plan.

An enterprise-wide autonomous sourcing agent is not a defensible v0.1 outcome under the fixed constraints.

A run is not successful merely because it ships in 16 weeks. It is successful when the participant makes a transparent, evidence-supported trade-off and leaves the program in a controlled state.

11. Two-layer state model

The engine must keep two concepts separate.

11.1 Program state

Program state represents the simulated initiative. It changes after decisions, evidence discovery, time passage, and crises. It drives future options and consequences. It is hidden during the first attempt, although observable indicators are shown.

Each dimension is stored on a 0..100 scale:

State variable

Meaning

Example observable signals

business_value

Credibility and attainability of net business benefit

Baseline confidence, benefit-owner response, addressable workflow share

delivery_confidence

Likelihood that the accepted scope can pass its gates within constraints

Dependency status, burn, gate forecast, unresolved critical path

technical_integrity

Fitness, testability, resilience, and integration realism of the solution

Evaluation coverage, architecture exceptions, failure handling

data_readiness

Fitness and permitted availability of data for the selected purpose

Coverage, lineage, bias, reconciliation, access status

trust_governance

Strength of authority boundaries, accountability, privacy, security, and traceability

Approval status, auditability, named risk owners, control violations

financial_sustainability

Credibility and controllability of build and run economics

Forecast variance, unit cost, sensitivity, consumption guardrails

user_adoption

Likelihood that intended users can and will use the capability correctly

Workflow fit, research coverage, pilot behavior, override patterns

Program-state values are not shown as points. The interface exposes evidence such as “API review threatens the pilot critical path” or “German extraction acceptance has not passed.”

11.2 Participant assessment

Participant assessment measures the quality of leadership judgment evidenced by the run. It is calculated after the attempt. It must not be derived directly from the final program-state values.

For example, a participant may accept a lower delivery_confidence by pausing release after discovering a severe control failure. That can demonstrate strong trust, technical, and delivery judgment.

12. Assessment dimensions and evidence model

The participant is assessed across the same seven lenses for interpretability, but the assessment asks how well the participant led, not how healthy the program ended.

Dimension

Weight

Required evidence themes

Business value

15%

Outcome definition, baseline, attribution, benefit owner, assumptions, stop criteria

Delivery confidence

15%

Scope control, sequencing, dependencies, owners, gates, recovery decisions

Technical integrity

15%

Pattern selection, model rationale, integration, testability, failure modes

Data readiness

15%

Fitness criteria, profiling, representativeness, lineage, access, remediation

Trust and governance

15%

Authority, privacy, security, traceability, escalation, risk acceptance

Financial sustainability

10%

Build/run economics, unit cost, sensitivity, limits, value-to-cost trade-offs

User adoption

15%

Workflow evidence, user involvement, usability, change ownership, adoption measures

Weights are provisional and require expert calibration. Equal or near-equal weighting prevents the scenario from collapsing into a schedule game, but weighting alone cannot protect critical controls.

12.1 Evidence object

Every scored claim should resolve to an auditable evidence object:

evidence_id: EV-EXAMPLE
source: decision | rationale | evidence_request | artefact | crisis_response
stage: frame | design | plan | defend | operate
dimension: data_readiness
criterion: segmented_evaluation
quality: absent | asserted | partial | supported | integrated
scenario_refs: [HT-03, HT-07]
evaluator: deterministic | rubric | llm | human
confidence: 0.0-1.0

LLM feedback may propose an evidence classification, but it cannot silently create evidence or decide a critical gate.

13. Rubric anchors

Each criterion uses five ordinal anchors before conversion to a dimension score.

Anchor

Meaning

0. Absent

Material issue ignored, contradicted, or delegated without ownership

1. Asserted

Relevant language used, but no concrete action, evidence, owner, or threshold

2. Partial

Some appropriate action or evidence exists, but material gaps remain unacknowledged or uncontrolled

3. Supported

Decision is proportionate, evidence-linked, owned, and includes a usable acceptance or recovery condition

4. Integrated

Trade-offs across dimensions are explicit; downstream consequences, monitoring, and adaptation are designed coherently

Dimension score:

dimension_score = 100 * sum(criterion_anchor * criterion_weight)
                        / sum(4 * criterion_weight)

The provisional overall score is the weighted mean of dimension scores, subject to critical-gate caps. The report must show criteria and evidence; the overall number is secondary.

14. Critical gates and score caps

Critical gates are non-compensable. Their exact triggers will be attached to decisions and crises in the next design artifact.

Gate

Fail condition

Result treatment

G1. Commercial authority

Participant permits an AI/agent to initiate a material supplier commitment outside approved delegation

Overall result capped at 39; trust/governance cannot exceed 25

G2. Data and model permission

Participant knowingly uses production supplier data with an unapproved endpoint or unresolved prohibited processing

Overall capped at 39; release decision marked invalid

G3. Evaluation sufficiency

Participant approves production without defined, segmented acceptance thresholds and accountable acceptance

Overall capped at 49; technical integrity cannot exceed 40

G4. Severe cohort failure

Participant proceeds after a known material failure affecting a language, supplier segment, or critical process without containment

Overall capped at 39

G5. Accountable ownership

A material business, data, security, or operational risk is accepted with no authorized owner

Overall capped at 49

G6. Claim integrity

Participant presents a material value, accuracy, compliance, or readiness assumption as verified after contradictory evidence is available

Overall capped at 49; affected dimension capped at 25

G7. Operational control

Participant releases action-capable AI without monitoring, incident ownership, containment, and rollback

Overall capped at 39; release decision marked invalid

A gate is not failed merely because a risk exists. Failure requires an unsafe or unsupported participant decision after the relevant information was available or reasonably obtainable.

15. Guardrails against scoring pathologies

The scoring design must prevent these shortcuts:

Checklist gaming: mentioning every governance term without making a decision does not exceed anchor 1.

Universal caution: refusing all action without proportional evidence loses business-value and delivery criteria.

Shipping bias: meeting the date cannot compensate for a failed gate.

Outcome luck: a favourable deterministic event does not prove sound reasoning.

Hidden-truth mind reading: participants are scored for appropriate investigation and control, not for guessing facts they could not observe.

Verbosity bias: concise, specific rationale can outscore a long generic answer.

LLM style bias: polished language is not evidence.

Double counting: one evidence object may support multiple criteria only when the cross-dimensional relevance is explicit.

Late repair erasure: remediation can improve the final assessment but does not delete the earlier decision history.

16. Initial state

The numerical state is implementation-facing and provisional. Values exist to support paper simulation, not to imply scientific precision.

Variable

Start

Rationale

Business value

45

Significant opportunity, but baseline and attribution are weak

Delivery confidence

40

Fixed public date, unclear scope, and access dependencies

Technical integrity

50

Feasible component technologies, no agreed architecture or evaluation

Data readiness

35

Broad availability claim, unknown quality and representativeness

Trust and governance

35

Existing policies, unresolved model approval and action ownership

Financial sustainability

50

Defined envelope, no credible volume or run-cost model

User adoption

40

Clear pain, little workflow evidence and unknown interface fit

State changes should normally be small (±2..8), material (±9..15), or critical (gate plus explicit state effect). Large unexplained point swings would make the engine feel arbitrary.

17. Design checks before writing the 20 decisions

The decision model is ready to draft only if reviewers accept these propositions:

The target workflow is narrow enough to produce concrete trade-offs.

A 16-week controlled pilot is feasible, but not guaranteed.

The preferred answer is not predetermined as “use an agent,” “use the private model,” or “pause.”

Every hidden truth has at least one fair route to discovery.

Participants can recover from weak early decisions, but cannot erase them.

Program health and participant competence remain separate.

Critical gates trigger from decisions, not from mere existence of risk.

The scenario rewards value-seeking control, not bureaucracy or recklessness.

18. Open calibration questions

These questions should remain unresolved until the 20 decisions and a paper playthrough expose their effects:

Should the overall score be reported at all, or only dimension bands plus gate status?

Are seven dimensions cognitively useful in the debrief, or should some be combined?

Is 90 minutes sufficient for evidence requests, 20 decisions, and five artefacts?

Should investigation capacity be represented by time, tokens, fixed evidence requests, or stage-specific limits?

Which criteria can be scored deterministically without encouraging checkbox behaviour?

What score stability and expert agreement thresholds are credible enough for the first calibration report?

These are methodology questions. They should not be buried in implementation defaults.
