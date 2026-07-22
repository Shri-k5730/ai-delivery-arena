# Procurement Under Pressure: Paper Playtest Results

**Scenario ID:** `procurement-under-pressure@0.1.0`  
**Artifact:** Deterministic transition and gate playtest  
**Status:** Completed design test. Failed implementation-readiness gate.  
**Inputs:** `FOUNDATION.md`, `DECISIONS.md`, `SCORING.md`, `REFERENCE_RUNS.md`, `STATE_TRANSITIONS.md`

## 1. Executive verdict

The scenario discriminates the three intended leadership patterns, but the state contract is **not yet deterministic enough to implement**.

The paper run reached the intended terminal outcomes:

| Fixture | Intended terminal route | Reproduced | Expected gate pattern reproduced |
|---|---|---|---|
| Run A | conditional controlled pilot | Yes | seven passes |
| Run B | reduced-scope release; recommendation paused | Yes | seven passes |
| Run C | full release, invalid and unsafe | Yes | seven fail candidates |

However, exact numeric health traces could not be reproduced without inventing arbitration rules. Four defects are blocking:

1. investigation requests are summarized, not scheduled as executable records;
2. more than one transition row can match a decision, but precedence and combination are undefined;
3. the two-positive-effect limit conflicts with transition rows containing three positive effects;
4. crisis preparedness labels do not have complete deterministic predicates.

This is a useful failure. Implementing the current contract would bury scenario policy inside application code and produce different results across developers.

## 2. Method

This playtest used a strict no-invention rule:

1. Start each fixture from the canonical initial state.
2. Normalize only facts explicitly supported by its decision record.
3. Treat an evidence reference as available only when a request and arrival can be established.
4. Match normalized facts against the transition table.
5. Fire all six crises at their fixed trigger points.
6. preserve claims, contradictions, and recovery history.
7. Build the D20 release manifest.
8. adjudicate gates separately from program health.
9. Mark a result `indeterminate` where the specification lacks an arbitration rule.

No competency score was calculated. Independent criterion scoring remains a separate calibration exercise.

## 3. Shared evidence-timing result

All fixtures state that they receive ten investigation credits, but their ledgers do not contain executable request records.

| Fixture | Paid evidence named | Apparent credits | Reproducible timing? | Result |
|---|---|---:|---|---|
| A | workflow, Finance, API, format, segment, label, user, model, threat, volume | 10 | No. The first four are staged, but later request weeks are not fixed. | budget plausible; availability partly assumed |
| B | workflow, segment, label, user, API, format, evaluation design, threat, model, volume | 10 | No. â€œLaterâ€ does not define request week or arrival week. | budget plausible; D04-D08 availability indeterminate |
| C | model, threat, volume, evaluation design | 4 | Partly. Request dates and latest-useful links are absent. | six credits unused; no terminal benefit |

The free policy and source evidence can be available immediately in all runs. The paid evidence cannot be promoted from named to `Available` or `Verified` reproducibly until each request has `request_week`, `lead_time`, `linked_decision`, and `latest_useful_week`.

## 4. Run A trace. Controlled pilot

The table records the facts and transition classes that can be reproduced. `Matched, arbitration required` means that the qualitative direction is clear but an exact health number is not.

| Step | Facts created or superseded | Evidence state | Transition and visible consequence | Gate facts |
|---|---|---|---|---|
| D01 | bounded pilot; 12 buyers; two commodities; no award action; week-3 revision | response-supported | bounded-pilot rule matched; week 16 becomes an evidence decision | G1 non-exposure |
| D02 | benefit is hypothesis; Finance owner; attribution and pivot condition | Finance request named | value-hypothesis rule matched | G6 avoided pending later evidence |
| D03 | ten targeted investigations; four initial and six reserved | exact later schedule missing | credits appear valid; arrival and `+5 when used` effects not reproducible | avoidability partly indeterminate |
| D04 | controlled pilot; bounded capabilities and cohorts; award excluded; exit criteria | workflow/cohort evidence asserted as used | bounded-scope rule matched | G1 pass evidence |
| D05 | hybrid components; task boundaries; abstention; fallback; prohibited action | label evidence asserted as used | hybrid rule matched | G1/G7 exposure avoided |
| D06 | five-source contract; lineage; missingness; controlled temporary upload | source evidence free; segment/label timing incomplete | minimum-source and temporary-path rules both match; arbitration required | no fail fact |
| D07 | approved private production route; sanitized external comparison; switch gate | policy free; model/threat timing incomplete | two model-route rules match; arbitration required | G2 pass evidence |
| D08 | segmented thresholds; severity; abstention; gold owner | field/format/evaluation timing incomplete | segmented-evaluation row has three positive effects despite two-effect limit | G3 pass evidence |
| D09 | thin slice, API/security first, harness, temporary fallback | API result asserted before plan | critical-path rule matched | no fail fact |
| D10 | balanced capacity; 15% contingency; year-one run cost | response-supported | balanced-capacity rule matched | G5 pass evidence |
| D11 | embedded workflow; source trace; override; authority separation | user evidence timing incomplete | embedded-control rule matched | G1 pass evidence |
| D12 | unit economics; sensitivity; caching; limits; fallback | volume evidence timing incomplete | sustainable-economics rule matched | no fail fact |
| C01 | external model unavailable before pilot | fixed crisis; preparedness likely | approved fallback makes response coherent; exact preparedness predicate missing | G2 remains pass candidate |
| D13 | human award authority retained; reversible non-binding actions | policy available | bounded-autonomy rule matched | G1 pass evidence |
| D14 | CISO constraint accepted; approved route retained; unsupported tasks narrowed | threat/model evidence asserted | controlled re-evaluation rule matched | G2/G5 pass evidence |
| C02 | EUR 8m attribution disproved | fixed crisis; prior claim provisional | prepared direction reproduced; exact offset reproducible only if provisional fact is canonical | G6 contradiction recorded, not failure |
| D15 | headline withdrawn; case rebased and communicated | Finance result now fixed by crisis | correction rule matched; old claim retained in audit | G6 recovery evidence |
| C03 | source API cannot support integrated evidence by week 16 | fixed crisis; early API awareness asserted | prepared direction reproduced; exact readiness predicate missing | no gate failure |
| D16 | controlled temporary path; narrower cohort; transition owner; no production-integration claim | crisis evidence available | temporary-path rule matched | G2/G6 pass evidence |
| C04 | 93% aggregate; German/Czech complex 78% with material errors | fixed crisis | preparedness expected from D08; exact predicate incomplete | known material failure recorded |
| D17 | failed formats excluded, routed, owned, and retested | C04 available | containment rule matched | G4 pass evidence |
| C05 | duplicate work; 30% intent to use | fixed crisis | embedded preparedness conflicts with invariant fixed observation only semantically, not mechanically | adoption contradiction recorded |
| D18 | redesign; assisted/shadow mode; recheck metrics and owner | C05 available | redesign rule matched | G6 pass evidence if readiness claim superseded |
| C06 | shadow cost reaches four times plan | fixed crisis | preparedness expected from D12; monitoring-before-steering is not explicitly recorded | cost contradiction recorded |
| D19 | task tracing; caching; loop controls; quality preserved; reforecast | C06 available | containment rule matched | G3 support if regression evidence exists |
| D20 | conditional two-commodity, passing-English release; exclusions; acceptors; controls; six-week decision | all crises available | terminal route reproduced; no automatic health bonus | all gates resolved pass |

### 4.1 Run A result

- Terminal route: **reproduced**.
- Gate result: **seven passes**, subject to independent adjudication of control usability.
- Numeric health: **not reproducible**.
- Recovery behavior: benefit, workflow, cohort, API, and cost contradictions remain in history and are repaired without erasure.
- Residual risk: adoption scale, API transition, excluded formats, and live unit economics remain appropriately open.

## 5. Run B trace. Reduced scope and recommendation pause

| Step | Facts created or superseded | Evidence state | Transition and visible consequence | Gate facts |
|---|---|---|---|---|
| D01 | bounded release-or-pause decision; recommendation not promised | response-supported | bounded mandate matched | no exposure |
| D02 | component-level value hypotheses; Finance ownership; no recommendation benefit without use | Finance request named | hypothesis rule matched | G6 avoided |
| D03 | ten targeted investigations | request order described but weeks missing | credit budget valid; evidence arrival not reproducible | avoidability partly indeterminate |
| D04 | bounded scope; recommendation conditional on target and coverage fitness | workflow/segment/label intended early | controlled/reduced-scope rules may both match; precedence absent | no fail fact |
| D05 | modular hybrid; recommendation separable | response-supported | component rule matched | action exposure avoided |
| D06 | minimum sources; 35% gap; biased coverage; award label rejected; lineage | evidence claimed available | minimum-source rule matched; no false fitness claim | G6 avoided |
| D07 | approved private route for bounded extraction/drafting | policy available | approved-route rule matched | G2 pass evidence |
| D08 | release thresholds for operational tasks; recommendation research only | evaluation evidence claimed available | segmented rule applies only to released tasks; scope applicability works | G3 pass evidence |
| D09 | thin slice and harness first; temporary controlled upload | API evidence claimed | critical-path rule matched | no fail fact |
| D10 | balanced team; capacity shifted to evidence and operations | response-supported | balanced-capacity rule matched | G5 pass evidence |
| D11 | embedded document review; trace and override; recommendation absent | user evidence claimed | embedded-control rule matched | G1 pass evidence |
| D12 | task economics and quality-preserving controls; experimental spend separate | volume evidence claimed | economics rule matched | no fail fact |
| C01 | external model blocked | fixed crisis | reduced route does not depend on it; preparedness direction clear | G2 remains pass candidate |
| D13 | autonomous awards declined; non-binding assistance only | policy available | bounded-authority rule matched | G1 pass evidence |
| D14 | approved endpoint retained for reduced operational scope | fixed C01 evidence | controlled route matched | G2/G5 pass evidence |
| C02 | EUR 8m attribution disproved | fixed crisis | earlier hypothesis limits integrity exposure | contradiction recorded |
| D15 | claim corrected; smaller attributable document-handling case | fixed C02 evidence | correction rule matched | G6 recovery evidence |
| C03 | API misses meaningful integrated evidence window | fixed crisis | temporary path and reduced scope make recovery plausible | no fail fact |
| D16 | controlled temporary ingestion; integrated-readiness claim withheld | fixed C03 evidence | controlled-path rule matched | G2/G6 pass evidence |
| C04 | material German/Czech format failure | fixed crisis | thresholds for released document tasks make containment applicable | known failure recorded |
| D17 | failed formats excluded; recommendation remains paused | C04 available | containment rule matched | G4 pass evidence |
| C05 | duplicate work; 30% intent to use | fixed crisis | workflow response required despite earlier design | adoption contradiction recorded |
| D18 | embedded redesign and shadow validation; only reduced capabilities proceed | C05 available | redesign rule matched | G6 pass evidence |
| C06 | four-times loop cost | fixed crisis | task controls exist; exact early-detection predicate missing | cost contradiction recorded |
| D19 | caching and bounded regeneration; recommendation loops excluded | C06 available | cost-containment rule matched | no failed gate |
| D20 | document normalization/checking released; recommendation paused with 12-week evidence and terminate/continue decision | all crises available | reduced-scope terminal route reproduced; no pause bonus | all gates resolved pass |

### 5.1 Run B result

- Terminal route: **reproduced**.
- Gate result: **seven passes**, subject to independent adjudication of operational-control usability.
- Numeric health: **not reproducible**.
- Route-bias test: **passed structurally**. No rule automatically penalizes recommendation pause, and applicability limits G3 to released tasks.
- Important distinction: Run B can equal Run A on competence while retaining lower recommendation-capability maturity. The model preserves that distinction.

## 6. Run C trace. Plausible but unsafe release

| Step | Facts created or superseded | Evidence state | Transition and visible consequence | Gate facts |
|---|---|---|---|---|
| D01 | enterprise release promise; no cohort, authority boundary, or revision condition | response-supported | enterprise-promise rule matched | G1 exposure |
| D02 | EUR 8m and 30% treated as commitments; no baseline or Finance owner | no Finance request | unsupported-claim rule matched | G6 exposure |
| D03 | four technical investigations; no workflow, Finance, API, segment, or label work | exact weeks missing | credits consumed without decision timing; important ignorance appears avoidable only where free/fixed evidence exists | no gate fact |
| D04 | European extraction, ranking, recommendation, and award initiation | no scope evidence | broad-scope rule matched | G1 pending |
| D05 | end-to-end action agent; no component fallback; logging and human click only | response-supported | autonomous-agent rule matched | G1/G7 exposure |
| D06 | all 12 sources; historical awards as target; known missingness deferred | source inventory free; label/segment not requested | all-source rule matched; invalid-target penalty before C04 may be unfair unless free source work reveals it | later G4/G6 exposure |
| D07 | external model selected; production supplier data planned without approval | policy free and therefore knowable | unapproved-processing fail requires an actual processing event, not only a plan | G2 exposure, not yet fail |
| D08 | aggregate 90%; no segmented thresholds, severity, abstention, owner | evaluation request named | aggregate-only rule matched | G3 exposure |
| D09 | UI and agent first; integration/evaluation later | API not investigated | UI-first rule matched | readiness-claim exposure |
| D10 | specialist controls assigned part-time to AI lead without quantified capacity | response-supported | under-capacity rule matched | G5 exposure |
| D11 | separate portal; award initiation after buyer click; evidence/override optional | policy free | separate-portal and unauthorized-action rules both match | G1 fail candidate |
| D12 | one-call estimate; monthly alert only | volume requested but use timing absent | stale-economics rule depends on when loop evidence becomes available | G6 exposure may be premature |
| C01 | external model blocked | fixed crisis | no approved fallback; unprepared direction clear | permission conflict becomes explicit |
| D13 | autonomous award initiation below EUR 250k accepted | policy free | autonomy rule matched | G1 fail fact |
| D14 | CISO bypassed; external integration proceeds | C01 available | bypass rule matched; actual processing event still must be recorded | G2 fail candidate |
| C02 | EUR 8m attribution disproved | fixed crisis | verified commitment makes trust shock direction clear | material contradiction recorded |
| D15 | external EUR 8m claim retained; caveat hidden internally | C02 available | contradicted-claim rule matched | G6 fail fact |
| C03 | API cannot deliver integrated evidence by week 16 | fixed crisis | no early preparation; unprepared direction clear | production-ready claim contradicted |
| D16 | manual upload used; testing compressed; workaround called production-ready | C03 available | compressed-control rule matched | G3/G6/G7 exposures |
| C04 | known material cohort failure | fixed crisis | no segmentation or containment design | severe failure recorded |
| D17 | failed cohorts released; generic buyer check substituted for reliable routing | C04 available | unsafe-release rule matched | G4 fail fact |
| C05 | 30% intent to use; duplicate work | fixed crisis | no embedded preparation | workflow contradiction recorded |
| D18 | use mandated; no redesign or re-evaluation | C05 available | mandate rule matched | G6 fail candidate for business-ready claim |
| C06 | four-times cost from loops | fixed crisis | monitoring-before-steering absent | cost contradiction recorded |
| D19 | continue; silent universal cap; original cost claim retained | C06 available | uncontrolled-cost rule matched | G3/G6 exposures |
| D20 | full European action-capable release; failed cohorts included; unsupported claims; acceptors and usable controls absent | all crises available | invalid terminal release reproduced | G1-G7 fail candidates |

### 6.1 Run C result

- Terminal route: **reproduced**.
- Gate candidates: **G1-G7 all reproduced**.
- Numeric health: **not reproducible**, but no positive health could override the gate facts.
- Plausibility: the fixture still reads more like an answer-key anti-pattern than a genuinely seductive executive plan. This is a calibration weakness, not a transition failure.
- Fairness correction: D07 creates G2 exposure when unapproved processing is planned. G2 failure requires evidence that production supplier data was actually processed or an unambiguous D20 authorization to do so.

## 7. Gate adjudication result

| Gate | Run A | Run B | Run C | Deterministic result quality |
|---|---|---|---|---|
| G1 Commercial authority | Pass | Pass | Fail | Strong. Free policy evidence and explicit actions support adjudication. |
| G2 Data/model permission | Pass | Pass | Fail candidate | Needs an explicit `processing_event` fact to distinguish intent from completed prohibited processing. |
| G3 Evaluation sufficiency | Pass | Pass for released tasks | Fail | Strong if capability/cohort applicability is carried into D20. |
| G4 Severe cohort failure | Pass | Pass | Fail | Strong. C04 is fixed and D17 containment is explicit. |
| G5 Accountable ownership | Pass | Pass | Fail | Requires a versioned authority map, not title inference. |
| G6 Claim integrity | Pass after correction | Pass after correction | Fail | Works, but C produces multiple duplicate G6 candidates requiring consolidation. |
| G7 Operational control | Pass candidate | Pass candidate | Fail | A/B name controls, but â€œusableâ€ cannot be established from the concise fixture alone. |

The gate layer discriminates the routes better than the numeric health layer. That validates the decision to keep gates non-compensable and report them before the overall score.

## 8. Numeric health test

The numeric simulation failed reproducibility. The problem is specification ambiguity, not arithmetic.

### 8.1 Multiple matching rows

Examples:

- Run A D06 matches both the minimum-source rule and temporary-upload rule.
- Run A D07 matches approved-route and sanitized-comparison rules.
- Run C D11 matches separate-portal and unauthorized-action rules.
- D20 may match the reconciliation row and one or more failed-condition rows.

The contract does not say whether all rows apply, whether only the most specific applies, or whether positive/negative families have priority.

### 8.2 Effect-limit contradiction

The grammar says a response normally produces at most two positive and two negative effects. D08's supported transition contains three positive effects: technical, data, and trust. No truncation priority is defined.

### 8.3 Investigation benefit ambiguity

D03 grants a relevant-dimension `+5` when evidence arrives and is used. It is unclear whether:

- every evidence object can add `+5`;
- the benefit is capped per decision, stage, dimension, or run;
- evidence reuse stacks;
- the later substantive decision also receives its full transition effects.

This can make investigation credits a dominant hidden scoring route.

### 8.4 Crisis preparedness ambiguity

Preparedness is described narratively. Exact predicates are missing for:

- whether monitoring detected C06 before steering;
- what combination makes C01 or C03 `partial` rather than `prepared`;
- whether an embedded design alone reduces C05 despite the fixed 30% observation;
- whether evidence merely requested, available, or verified counts.

### 8.5 Result

Do not publish end-health numbers for these fixtures. Any exact totals produced now would be author judgment disguised as deterministic output.

## 9. Acceptance-check results

| Acceptance condition | Result | Reason |
|---|---|---|
| Normalize all 60 records without inventing facts | **Fail** | evidence schedule, control usability, and some event facts are missing |
| Fire all six crises identically | **Pass** | triggers and fixed observations are clear |
| Reproduce Run A terminal route with no expected failed gate | **Pass with review** | route is clear; G7 usability needs fuller fixture evidence |
| Reproduce Run B route without automatic less-AI penalty | **Pass with review** | applicability logic works; criterion scoring still untested |
| Produce Run C's seven fail candidates | **Pass** | all are observable by D20 |
| Prevent health from masking unsafe gates | **Pass** | gate layer is separate and non-compensable |
| Preserve at least one repair without erasing history | **Pass** | D15 and later scope corrections retain contradictions |
| Reach 90% material-fact agreement between two reviewers | **Not tested** | requires two independent human reviewers |

Overall paper-playtest status: **failed implementation readiness, passed scenario discrimination**.

## 10. Defect register

| ID | Severity | Defect | Required correction |
|---|---|---|---|
| PT-01 | Blocker | No executable investigation ledger for fixtures | Add request week, arrival week, cost, linked decision, latest useful point, and use event for every evidence request. |
| PT-02 | Blocker | Transition rows can overlap without precedence | Give every rule an ID, predicate, effect family, stack policy, and priority. |
| PT-03 | Blocker | Two-effect cap conflicts with authored rows | Remove the cap or encode deterministic selection. Prefer explicit per-rule stacking groups. |
| PT-04 | Blocker | Crisis preparedness lacks complete predicates | Define required facts for `prepared`, `partial`, and `unprepared` for C01-C06. |
| PT-05 | High | G2 does not consistently separate planned from actual prohibited processing | Add `processing_planned`, `processing_authorized`, and `processing_occurred` events. |
| PT-06 | High | G5 depends on inferred authority | Add a scenario authority map and validate acceptors against it. |
| PT-07 | High | G7 usability is asserted in strong fixture summaries | Expand controls into owner, trigger, mechanism, test evidence, and last-tested state. |
| PT-08 | High | D03 evidence-use bonus can stack unpredictably | Replace generic `+5` with explicit preparedness/fact effects or a bounded evidence-readiness mechanic. |
| PT-09 | Medium | Run C is overly saturated with obvious failures | Create a subtler unsafe fixture with competent delivery mechanics but one or two material concealed failures. |
| PT-10 | Medium | G6 creates duplicate candidates for the same claim chain | Consolidate claim exposures by subject and audience before adjudication. |
| PT-11 | Medium | C05 preparedness and fixed 30% observation are conceptually awkward | Keep the observation fixed; let preparedness alter recoverability, not the observed intent-to-use value. |
| PT-12 | Medium | Fixture evidence IDs cite prose records, not structured evidence objects | Add frozen fixture JSON only after the rule corrections are approved. |

## 11. Required design patch before implementation

The next version should not add more content. It should make the existing content executable:

1. Add an explicit evidence schedule for Runs A-C.
2. Replace the narrative transition table with rule records containing IDs and stack policies.
3. Define crisis-preparedness predicates.
4. Add authority, processing-event, and operational-control schemas.
5. Re-run the three traces and publish exact health snapshots only if independently reproducible.
6. Then run blind criterion scoring with two reviewers and create `REFERENCE_SCORES.md`.

Application development remains blocked until PT-01 through PT-04 are closed. The scenario does not need a UI yet. It needs deterministic semantics.

## 12. Version decision

Keep the scenario identifier at `procurement-under-pressure@0.1.0` while correcting paper-design defects. These are pre-implementation clarifications, not a released behavior change.

After the corrected traces reproduce exactly, freeze the scenario fixtures and tag the first executable contract as `0.1.0-rc1`.
