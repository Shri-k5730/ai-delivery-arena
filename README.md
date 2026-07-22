AI Delivery Arena

An open-source enterprise AI delivery simulator with a transparent benchmarking methodology.

AI Delivery Arena places a person in charge of a realistic enterprise AI initiative. The participant must frame the opportunity, make architectural and delivery decisions, respond to stakeholder pressure, manage crises, and decide whether the solution is ready for production.

The Arena does not test whether someone can define RAG, drift, agents, or model evaluation. It tests whether they can apply that knowledge while business value, data quality, governance, cost, delivery pressure, and adoption compete for attention.

Current status: Product charter and experience definition. There is no runnable benchmark yet, and the project will not claim benchmark validity until its scoring is externally calibrated.

Product charter

1. The problem

Enterprise AI leadership is usually assessed through CVs, interviews, certifications, or generic project-management case studies. These methods can test knowledge and storytelling, but they provide weak evidence of judgment under pressure.

Real AI delivery leaders must repeatedly make decisions with incomplete information:

Is AI appropriate for the problem, and where should deterministic automation remain in control?

Is the expected value specific enough to justify investment?

Is the data fit for the proposed model and operating context?

Which model, deployment pattern, and action boundary are defensible?

What evidence is sufficient to pass a delivery or production gate?

What should be traded when cost, scope, time, risk, and adoption conflict?

When should a leader stop, narrow, redesign, or reject an AI initiative?

There is no widely accessible environment where an individual can practise these decisions, experience their consequences, and produce comparable evidence of enterprise AI delivery judgment.

2. Vision

Create a rigorous, open environment where current and aspiring AI delivery leaders can practise consequential enterprise decisions, receive an evidence-based debrief, replay alternative strategies, and demonstrate how they lead AI programs from ambiguity to operation.

3. Product claim

AI Delivery Arena will:

Simulate enterprise AI programs and assess a participant's ability to lead them.

It will not initially claim to benchmark live enterprise programs, organizational AI maturity, or the market-wide competence of AI leaders.

The benchmark unit is one participant's first attempt at one versioned scenario under standardized conditions.

4. Primary user

The first user is an individual who leads, or wants to lead, enterprise AI delivery:

AI project or program managers

AI delivery and transformation leads

Product managers responsible for AI-enabled workflows

Solution and enterprise architects moving into delivery leadership

Senior consultants who must defend AI propositions and operating models

The product is not designed as an introductory AI tutor. Participants should already understand the basic vocabulary of data, ML, GenAI, agents, evaluation, cloud, governance, and program delivery.

5. Core user promise

After one complete run, a participant should be able to answer:

What did I decide, and what evidence did I use?

Which consequences did my decisions create?

Which material risks did I identify, miss, accept, or mishandle?

Where was my judgment strong or weak across business, delivery, technical, data, governance, financial, and adoption concerns?

What would I change on a replay?

What professional evidence can I export without disclosing confidential work?

6. Learning mechanism

The Arena is built around a simple loop:

Decision -> consequence -> debrief -> replay

During a scored first attempt, the Arena does not tutor the participant, reveal the rubric, recommend the best option, or display live competency scores. It presents observable program signals and stakeholder reactions. Detailed scoring and developmental guidance appear only in the final debrief.

Replays are practice. They must never overwrite or be presented as the original benchmark attempt.

7. Product principles

Judgment over recall. Decisions and rationale matter more than terminology.

Consequences over quizzes. Choices alter the program state and later options.

Evidence over confidence. Strong assertions without supporting evidence do not score well.

AI specificity over generic project management. Every scenario must force meaningful choices about AI suitability, data, evaluation, models, human control, cost, security, adoption, or operation.

Determinism before improvisation. Material state changes and pass or fail gates are controlled by versioned scenario logic.

Transparent methodology. Scenario versions, dimensions, gate logic, evaluator types, and confidence are inspectable.

Critical failures remain critical. A high aggregate score cannot hide a failed safety, privacy, evaluation, or action-boundary gate.

First attempts remain comparable. Coaching, retries, and scenario spoilers are separated from benchmark runs.

Confidentiality by design. Scenarios are synthetic and do not reproduce customer data, documents, or identifiable engagements.

Local-first access. The initial release runs locally, supports mock mode, and allows optional BYOK-based qualitative review.

8. What the Arena is not

AI Delivery Arena is not:

another AI course, quiz bank, or learning-management system

a generic project tracker with AI terminology added to it

an LLM role-play chat with arbitrary outcomes

a decorative multi-agent demonstration

a replacement for organizational governance, assurance, or portfolio tooling

a system that scores people from their CV, career history, or activity in other applications

technically integrated with Career-OS, ML Study, Onion Learning, or any personal learning product

a certification in v0.1

The connection between learning, career development, and the Arena remains human. The software products remain separate.

v0.1 product contract

The first release will be intentionally narrow.

Element

v0.1 commitment

Scenario

One fully synthetic automotive procurement AI program

Participant

One individual AI delivery leader

Duration

Approximately 90 minutes for a first attempt

Structure

Five stages with save and resume

Decisions

20 consequential decision points

Crisis injections

6 deterministic events triggered by state and stage

Assessment

Decisions, rationale, evidence requested, and artefacts produced

Scoring

Seven dimensions plus non-compensable critical gates

Reviewers

CIO, CISO, and CFO stakeholder perspectives

Engine

Deterministic program state and consequence engine

LLM role

Optional critique, ambiguity analysis, and qualitative feedback

Modes

Fully local mock mode and optional BYOK mode

Outputs

Decision record, competency report, evidence pack, and replay history

Authentication

None

Hosted service

None

Integrations

None with career or learning applications

Anything outside this table must justify why it is essential to validate the core simulation and assessment loop.

First scenario: Procurement Under Pressure

Scenario premise

A global automotive manufacturer wants an AI-enabled procurement platform in 16 weeks. Supplier and purchasing data is distributed across 12 systems. The sponsor has already announced an aggressive savings target. The preferred external LLM is not approved. European data-residency rules apply. Procurement users expect the system to recommend and eventually execute selected actions, but governance ownership is unresolved.

All organizations, people, datasets, commercial figures, and events in the scenario are fictional.

Run stages

Stage

Participant responsibility

Evidence produced

1. Frame

Define the outcome, baseline, AI suitability, assumptions, success measures, and discovery plan

Opportunity canvas and value hypothesis

2. Design

Choose rules, ML, GenAI, or agent patterns; assess data; select deployment and model strategy; define human and system boundaries

Solution decision record and evaluation strategy

3. Plan

Establish scope, roadmap, team, dependencies, cost model, governance, gates, and ownership

Delivery roadmap, RACI, RAID log, and cost baseline

4. Defend

Respond to CIO, CISO, and CFO objections without hiding uncertainty or making unsupported commitments

Defence transcript and revised recommendation

5. Operate

Decide production readiness, monitoring, escalation, rollback, cost control, adoption, and incident response

Readiness decision and operating model

Crisis catalogue

The engine selects or modifies events based on prior decisions. The v0.1 catalogue contains six material crises:

The CISO blocks the proposed external model.

Data profiling finds 35% missing supplier-performance history.

Offline evaluation passes, but procurement users reject the workflow.

Token and inference cost reaches four times the approved estimate.

The sponsor expands scope without extending time or budget.

An agent attempts an action outside its approved authority.

The crisis is not a random pop-up. It must be a plausible consequence, an unresolved exposure, or a controlled stress test of the participant's plan.

Assessment and benchmarking methodology

Seven scoring dimensions

Dimension

What strong evidence demonstrates

Business value

A measurable outcome, credible baseline, explicit assumptions, benefit ownership, and stop criteria

Delivery confidence

Controlled scope, realistic dependencies, decision gates, accountable owners, and executable recovery options

Technical integrity

An appropriate AI pattern, defensible architecture, model rationale, integration realism, and testability

Data readiness

Fitness-for-purpose criteria, data risk discovery, lineage, quality controls, and remediation choices

Trust and governance

Human authority, action boundaries, traceability, privacy, security, escalation, and policy enforcement

Financial sustainability

Whole-life cost reasoning, consumption controls, sensitivity analysis, and value-to-cost discipline

User adoption

Workflow fit, user research, change ownership, feedback, training, and measurable adoption signals

Each dimension is scored from 0 to 100 using explicit rubric anchors. The report must show the evidence behind the score, not only the number.

Critical gates

Critical gates are pass or fail controls. They cap or invalidate the overall result when the participant:

authorizes an AI or agent action without an accountable human or policy boundary

proceeds with material privacy or security requirements unresolved

approves production without a defined evaluation and acceptance threshold

cannot identify an owner for a material business, data, or operational risk

presents unsupported value, accuracy, or readiness claims as established fact

ignores a known severe failure affecting a critical user, supplier, or process segment

The precise gate rules will be versioned with the scenario and tested for unintended loopholes.

Evaluator split

Evaluator

Appropriate use

Not allowed to control alone

Deterministic rules

State transitions, dependencies, thresholds, gate failures, scenario consequences

Nuanced quality of free-text reasoning

Structured rubric

Required evidence, decision quality anchors, artefact completeness

Open-ended stakeholder interpretation

LLM reviewer

Qualitative critique, ambiguity detection, stakeholder response, competing interpretations

Final score, critical gate outcome, or hidden state mutation

Human reviewer

Calibration, disputed judgments, scenario validation, benchmark research

Silent changes to a published result

Where evaluators disagree, the result must expose the disagreement and confidence level.

Benchmark validity threshold

The project may describe its methodology as a benchmark design from day one. It may call results benchmark results only after:

standardized information and conditions are demonstrably enforced

scenarios and rubrics are versioned and immutable for completed runs

scoring is reproducible across repeated evaluation of the same response

critical-gate behavior has been adversarially tested

at least two independent expert reviewers have calibrated the scenario

a pilot cohort has completed first attempts without coaching

inter-rater agreement and score stability have been measured and published

Until then, outputs are simulation assessment results.

Evidence generated by a run

A completed run should generate a portable portfolio pack containing:

executive recommendation

opportunity and business-value hypothesis

solution and model decision record

AI action-boundary design

evaluation and acceptance strategy

delivery roadmap and stage gates

RACI and RAID log

cost model and consumption controls

production-readiness decision

monitoring and incident-response model

decision history with scenario version

competency report with evidence and critical-gate outcomes

retrospective comparing the first attempt with later replays

The pack is evidence from a synthetic simulation. It must not be misrepresented as a delivered customer engagement.

Functional architecture

flowchart TD
    A["Versioned scenario pack"] --> B["Deterministic state engine"]
    B --> C["Decision workspace"]
    C --> D["Rules and rubric evaluation"]
    C --> E["Optional BYOK qualitative review"]
    D --> F["Debrief and evidence pack"]
    E --> F
    F --> G["Immutable first attempt and replay"]

Planned technical direction

React with TypeScript and Vite for the desktop-first interface

FastAPI and Pydantic for scenario, run, and evaluation APIs

SQLite for local run state and evidence

Versioned YAML or JSON scenario packs

Provider adapters for optional BYOK review

Deterministic mock reviewers for an offline, zero-key experience

Exportable JSON and printable HTML or PDF evidence packs

This is a direction, not an excuse to start implementation before the scenario and rubric are testable on paper.

Google Stitch wireframe brief

Google Stitch will be used to explore and refine the interface before production UI work begins. Stitch output is a design hypothesis, not the product architecture or final frontend code.

Experience goal

The interface should feel like an executive AI program war room. It should be serious, calm, evidence-led, and usable under pressure. It must not resemble an online course, a quiz app, a chatbot demo, a game leaderboard, or a generic project dashboard.

Visual direction

Desktop-first at 1440 x 1024, responsive down to tablet later

Light neutral canvas with deep navy structure, restrained cobalt accents, and amber or red reserved for material risk

High information density without cramped typography

Clear hierarchy, generous spacing, and accessible contrast

Minimal decoration and no automotive imagery

No customer names, company logos, trophy graphics, points, streaks, or gamification

Use charts only where they communicate a real state or trade-off

Use readable labels instead of unexplained icons

Make uncertainty, missing evidence, assumptions, and gate status visible

Shared application shell

Every in-run screen uses the same structure:

Top bar: Arena name, scenario version, run type, elapsed time, save state, and exit

Stage rail: Frame, Design, Plan, Defend, Operate

Context panel: Current brief, known facts, evidence, assumptions, and event history

Decision workspace: The active decision, available actions, rationale, requested evidence, and confidence

Program signals: Observable value, delivery, data, trust, cost, and adoption signals without revealing benchmark scores

Evidence drawer: Artefacts produced so far and unresolved evidence requests

Wireflow

flowchart TD
    A["Scenario library"] --> B["Scenario dossier"]
    B --> C["Decision workspace"]
    C --> D{"Event type"}
    D -->|Normal| C
    D -->|Stakeholder| E["Challenge room"]
    D -->|Crisis| F["Crisis response"]
    E --> G["Stage gate review"]
    F --> G
    G -->|Next stage| C
    G -->|Run complete| H["Debrief and evidence pack"]

Screen inventory

W01. Scenario library

Purpose: Establish what the Arena is and allow a participant to begin or resume a run.

Required content:

concise product explanation and methodology status

one featured scenario card for Procurement Under Pressure

scenario version, expected duration, difficulty, stages, and reviewer personas

clear distinction between First attempt and Practice replay

resume card when a saved run exists

links to methodology, privacy, and scenario provenance

Primary action: Start first attempt

Do not show: Previous scores before the participant chooses a run, community rankings, or unavailable scenario cards presented as fake breadth.

W02. Scenario dossier

Purpose: Give every participant the same initial information and explicitly capture the conditions of the attempt.

Required content:

executive request

known facts and constraints

available evidence pack

stakeholder map

initial timeline and budget

what remains unknown

benchmark conditions and no-coaching notice

acknowledgement before starting the clock

Primary action: Enter the Arena

W03. Decision workspace

Purpose: Serve as the main working surface across Frame, Design, Plan, and Operate.

Required content:

active decision and why it is required now

two to four defensible actions, including defer, investigate, or reject when valid

structured rationale field

evidence the participant wants to inspect or request

assumptions being made

confidence selector with a short justification

downstream commitments already created

observable program signals and unresolved risks

Primary action: Commit decision

Interaction rule: A committed decision is appended to the audit trail. It can be superseded later, but not silently edited.

W04. Stakeholder challenge room

Purpose: Test whether the participant can defend or revise a decision when executive priorities conflict.

Required content:

stakeholder identity and concern, such as CIO, CISO, or CFO

transcript-style challenge with the disputed claim highlighted

evidence available to support the response

response field with options to defend, revise, investigate, or escalate

explicit trade-off and accountable owner fields

a private notes area that is not submitted as the formal response

Primary action: Submit response

Do not show: Suggested answer, sentiment score, or a conversational assistant offering coaching.

W05. Crisis response

Purpose: Force a time-bounded response to a material change in program state.

Required content:

event summary and verified impact

affected scope, timeline, value, control, or user group

immediate containment options

investigation and communication choices

decision owner and escalation path

timer or urgency label only when the scenario logically requires it

explicit option to pause or stop the program

Primary action: Activate response

W06. Stage gate review

Purpose: Require an explicit proceed, proceed with conditions, recycle, or stop decision.

Required content:

stage objective and evidence checklist

completed and missing artefacts

unresolved assumptions, risks, and ownership gaps

participant's gate recommendation

conditions, expiry dates, and named owners

indication that system evaluation occurs after submission without revealing rubric answers

Primary action: Submit gate decision

W07. Final debrief

Purpose: Explain performance with traceable evidence after the first attempt is locked.

Required content:

overall result and critical-gate outcome

seven-dimension profile with confidence and evaluator agreement

decision timeline connecting choices to consequences

strongest decisions and why they worked

missed signals, unsupported claims, and avoidable failures

alternative paths worth testing

clear label that the result is a simulation assessment, not a certification

Primary actions: Open evidence pack and Start practice replay

W08. Evidence pack and replay comparison

Purpose: Turn the run into inspectable professional evidence and learning without contaminating the first attempt.

Required content:

artefact index and completeness status

printable preview of each output

scenario version, run ID, timestamps, and evaluator configuration

export controls for JSON and printable report

side-by-side first-attempt versus replay decisions

explicit disclosure that all work occurred in a synthetic scenario

Primary actions: Export portfolio pack and Compare replay

Master prompt for Google Stitch

Use this prompt as persistent context, then generate each screen separately using the screen-specific prompt that follows.

<details>
<summary>Open the master Stitch prompt</summary>

Design a desktop-first enterprise web application named AI Delivery Arena. It is an open-source simulator that assesses how an individual leads a synthetic enterprise AI program through ambiguity, delivery pressure, governance, cost, and production decisions.

The experience must feel like an executive AI program war room, not a course, quiz, game, chatbot, or generic project-management dashboard. Use a light neutral background, deep navy structure, restrained cobalt accents, and amber or red only for material risk. Use accessible typography, strong hierarchy, calm spacing, and high information density without clutter. Do not use company logos, customer branding, automotive imagery, trophy graphics, points, streaks, leaderboards, decorative robots, or glowing AI effects.

Create a consistent shell with a top bar, five-stage rail, context panel, central decision workspace, observable program signals, and evidence drawer. The five stages are Frame, Design, Plan, Defend, and Operate. During a first attempt, never reveal scores, rubric answers, or recommended decisions. Show only information the participant could reasonably observe, including facts, assumptions, evidence, risks, stakeholder messages, commitments, and program signals.

The featured scenario is Procurement Under Pressure, version 0.1. A global automotive manufacturer wants an AI-enabled procurement platform in 16 weeks. Data is distributed across 12 systems, the preferred external LLM is not approved, European data residency applies, expected savings are not yet evidenced, and governance ownership is unresolved.

Design for a 1440 by 1024 canvas. Use realistic enterprise copy, not lorem ipsum. Make the primary action unmistakable. Clearly distinguish facts from assumptions, evidence from opinion, and warnings from critical gate risks. Preserve the same component language and navigation across every generated screen.

</details>

Screen-specific Stitch prompts

<details>
<summary>W01. Scenario library prompt</summary>

Using the AI Delivery Arena master context, design W01 Scenario Library. Show a concise explanation of the product and a methodology-status label that says the benchmark is not yet calibrated. Feature one real scenario card only, Procurement Under Pressure, with version 0.1, 90 minutes, five stages, and CIO, CISO, and CFO reviewers. Provide Start first attempt as the dominant action. Explain that a first attempt is locked and uncoached. Show Practice replay as secondary and unavailable until a first attempt exists. Include a compact methodology and privacy footer. Do not invent additional scenarios, rankings, scores, or gamification.

</details>

<details>
<summary>W02. Scenario dossier prompt</summary>

Using the same shell and visual system, design W02 Scenario Dossier for Procurement Under Pressure. Present the executive request, known facts, constraints, stakeholder map, initial 16-week timeline, indicative budget, available evidence, and a clearly separated What remains unknown section. Add a benchmark-conditions panel stating that no coaching or live scores will be shown. Include an acknowledgement checkbox and an Enter the Arena primary action. Make the dossier feel like a serious mobilization pack, not a welcome tutorial.

</details>

<details>
<summary>W03. Decision workspace prompt</summary>

Using the same shell and visual system, design W03 Decision Workspace during the Frame stage. The active decision is whether to accept the sponsor's savings target as the program KPI, replace it with a discovery hypothesis, request evidence, or narrow the initial scope. Show structured fields for rationale, evidence requested, assumptions, confidence and justification. Include visible prior commitments, unresolved risks, and observable program signals without numeric competency scores. The dominant action is Commit decision. Make committed choices auditable and explain that they can later be superseded but not silently edited.

</details>

<details>
<summary>W04. Stakeholder challenge prompt</summary>

Using the same shell and visual system, design W04 Stakeholder Challenge Room in the Defend stage. The CISO challenges the use of an external LLM because the model is not approved and supplier data may leave the required region. Highlight the exact disputed assumptions. Provide evidence tabs, formal response, private notes, trade-off, decision owner and escalation path. Let the participant choose to defend, revise, investigate or escalate. The dominant action is Submit response. Do not display suggested wording, coaching, sentiment analysis or an AI chat assistant.

</details>

<details>
<summary>W05. Crisis response prompt</summary>

Using the same shell and visual system, design W05 Crisis Response. The event states that an agent attempted to issue a supplier action outside its approved authority. Show verified impact, affected workflow, immediate containment choices, investigation actions, stakeholder communication, owner, escalation path and the option to pause the program. Use red sparingly for the control breach and amber for unresolved impact. The dominant action is Activate response. Make this feel operational and consequential, not dramatic or cinematic.

</details>

<details>
<summary>W06. Stage gate prompt</summary>

Using the same shell and visual system, design W06 Stage Gate Review between Design and Plan. Show the stage objective, evidence checklist, complete and missing artefacts, unresolved assumptions, risks and ownership gaps. Require a recommendation of Proceed, Proceed with conditions, Recycle or Stop. Include fields for conditions, expiry date and accountable owner. State that evaluation happens after submission, but reveal no rubric answer or predicted score. The dominant action is Submit gate decision.

</details>

<details>
<summary>W07. Final debrief prompt</summary>

Using the same visual system, design W07 Final Debrief after the first attempt is locked. Show the overall simulation-assessment result, any critical-gate failure, a seven-dimension profile, evaluator confidence and disagreement, and a decision timeline linking major choices to consequences. Include strongest decisions, missed signals, unsupported claims, avoidable failures and alternative paths. Label the output clearly as a simulation assessment, not a certification. The dominant actions are Open evidence pack and Start practice replay.

</details>

<details>
<summary>W08. Evidence pack prompt</summary>

Using the same visual system, design W08 Evidence Pack and Replay Comparison. Show an artefact index, completeness status, printable document preview, scenario version, run ID, timestamps and evaluator configuration. Provide export options for JSON and printable report. Include a side-by-side comparison of first-attempt and practice-replay decisions without replacing the original result. Add a visible disclosure that the evidence comes from a synthetic scenario. The dominant action is Export portfolio pack.

</details>

Wireframe acceptance criteria

The Stitch wireframes are acceptable only if:

all eight screens appear to belong to the same product

a participant can identify the current stage, active decision, known evidence, and primary action in under five seconds

facts, assumptions, risks, commitments, and missing evidence are visually distinct

first-attempt screens contain no coaching, answer hints, rubric disclosure, or live competency scores

the main workspace remains usable without excessive vertical scrolling at 1440 x 1024

critical risks are prominent without turning the whole interface red

every committed decision has an auditable consequence or state effect

no screen looks like a learning-management system, survey form, chatbot, or game

the debrief explains scores through evidence and evaluator confidence

the exported evidence is clearly labelled as synthetic simulation work

Validation plan

Before frontend development begins:

Write the full 20-decision scenario and six crisis paths on paper.

Run a tabletop simulation with at least three AI delivery practitioners.

Remove decisions that have an obvious answer or no downstream consequence.

Test the rubric independently against the same participant responses.

Generate the eight Stitch wireframes and conduct task-based usability review.

Freeze scenario version procurement-under-pressure@0.1.0 for the implementation pilot.

Roadmap

Phase

Outcome

0. Charter

Product boundary, scenario structure, scoring philosophy, and wireframes agreed

1. Paper benchmark

Complete scenario, consequence map, rubrics, and expert tabletop run

2. Engine

Deterministic state, decisions, gates, event injection, save, and replay

3. Arena UI

Decision workspace, challenge room, crisis response, and stage gates

4. Evaluation

Structured scoring, optional BYOK critique, confidence, and disagreement

5. Evidence

Debrief, audit trail, portfolio pack, and replay comparison

6. Calibration

External pilot, reliability analysis, methodology publication, and v0.1 release

Contribution status

The project is not yet accepting scenario or code contributions. Premature implementation would lock weak assumptions into software. Contributions will open after the first scenario, scoring rubric, and calibration protocol have been reviewed.

Methodology influences

NIST AI Risk Management Framework

NIST AI RMF Playbook

PMI-CPMAI

CRMArena-Pro

These sources inform the problem space. AI Delivery Arena's scenarios, state model, scoring rubrics, and calibration evidence must remain inspectable in this repository.

License

The open-source license will be selected before the first code release. Until a license file is added, the repository is public for review but is not yet licensed for reuse.
