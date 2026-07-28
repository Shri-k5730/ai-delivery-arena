# Founding Canary campaign

## Purpose

The canary is a product-learning cohort, not a reach campaign and not evidence
that the Arena is a calibrated benchmark. Its job is to expose failure points in
the complete participant journey before access is widened.

Do not publish the application until:

1. the product owner has completed one full 20-decision run;
2. account admission is enforced through an email allowlist or invitations;
3. a participant can export or delete their own run;
4. no release-blocking defect remains open; and
5. the feedback form and incident contact are ready.

## Campaign concept: The Founding Decision Table

Invite applicants to answer one short, unscored decision prompt before they
apply. This makes the campaign feel native to the product and filters out casual
clicks without pretending that invitations are a prize.

The public promise is:

- 10 participant places;
- 2 named standby places;
- a private seven-day access window;
- one 75–90 minute first attempt;
- one 20-minute feedback conversation; and
- recognition as a founding canary contributor, with no claim of certification.

Five places is too small. Normal attrition would leave only two or three
complete runs, which is not enough to distinguish a product problem from one
person's preference.

## Public LinkedIn post

> Most AI leadership assessments test what people know.
>
> I am building something that tests what they decide when value, data,
> architecture, governance, cost, adoption, and delivery pressure collide.
>
> **AI Delivery Arena** is a 75–90 minute synthetic enterprise simulation. You
> lead an AI programme through 20 permanent decisions, incomplete evidence, and
> operational consequences. There is no live coaching and no score until the
> final debrief.
>
> I am opening a private **Founding Decision Table** for 10 canary participants.
> I am looking for a deliberately mixed cohort across AI delivery, programme
> leadership, architecture, data, governance, and transformation.
>
> A quick decision prompt:
>
> *A sponsor wants an AI agent in production within 12 weeks. The value baseline
> is disputed, the preferred model is not approved, and action authority is
> unresolved. What would you insist on before making a delivery commitment?*
>
> If you can complete one focused run and a 20-minute feedback conversation,
> apply here: **[APPLICATION LINK]**
>
> Applications close **[DATE, TIME, TIME ZONE]**. Selection is based on cohort
> fit and perspective diversity, not speed, seniority, or finding a hidden
> “correct” answer.
>
> This is an early product canary, not a certification or hiring assessment.
>
> #AIDelivery #AgenticAI #AILeadership #ResponsibleAI #ProductTesting

Do not include the Streamlit URL in the post.

## Application form

Keep the form under five minutes:

1. Name
2. Work email
3. LinkedIn profile
4. Current role
5. Primary perspective: delivery, programme, architecture, data/ML, governance,
   product/change, or other
6. Years involved in enterprise technology or AI delivery
7. Response to the public decision prompt, maximum 150 words
8. Can you reserve 75–90 uninterrupted minutes during the seven-day window?
9. Can you attend a 20-minute feedback conversation?
10. Primary device and browser
11. Consent to store synthetic simulation responses for canary analysis
12. Accessibility or usability needs

Do not ask for a CV, customer information, employer approval, salary, or a
confidential project example.

## Selection rubric

Select a cohort, not the ten most polished answers.

| Criterion | Weight | What to look for |
|---|---:|---|
| Relevant perspective | 25% | Direct exposure to consequential technology or AI decisions |
| Decision articulation | 20% | Clear boundary, owner, evidence need, or stop condition |
| Perspective diversity | 20% | Adds a role or viewpoint not yet represented |
| Commitment | 20% | Can complete the run and feedback within the window |
| Product-learning value | 15% | Likely to notice and explain usability, trust, or workflow problems |

Target composition:

- 2 AI delivery or programme leaders
- 2 solution or enterprise architects
- 2 data, ML, or evaluation practitioners
- 2 governance, risk, security, or responsible-AI practitioners
- 2 product, consulting, procurement, or change leaders
- 2 standby participants from underrepresented perspectives

Do not rank applicants by whether their mini-response matches the Arena's
preferred scenario path. That would select for answer similarity and weaken the
canary.

## Timeline

| Day | Activity |
|---|---|
| T-7 | Product owner completes the end-to-end run and closes blockers |
| T-5 | Publish LinkedIn post and open applications |
| T-2 | Post one reminder with application count, not artificial urgency |
| T0 | Close applications at the stated time |
| T+1 | Select 10 participants and 2 standby participants |
| T+2 | Send invitations and private access instructions |
| T+3 to T+9 | Seven-day run window |
| T+4 to T+11 | Conduct feedback conversations |
| T+12 | Review evidence and decide fix, repeat, or widen |

## Invitation

Subject: Your AI Delivery Arena canary invitation

> You have been selected for the Founding Decision Table.
>
> Your private access window is **[START] to [END]**. Please reserve 75–90
> uninterrupted minutes and complete the run without external coaching. The
> scenario is synthetic. Do not enter customer, employer, or confidential
> information.
>
> Access: **[PRIVATE URL]**
>
> Use this invited email address to register: **[EMAIL]**
>
> After completion, submit the short feedback form and choose a 20-minute
> debrief slot: **[LINKS]**
>
> If you cannot participate, please release the place before **[DATE]** so it
> can be offered to a standby participant.

## Feedback instrument

Collect both structured and interview feedback.

After the run, ask:

1. Where did you first hesitate because the product mechanics were unclear?
2. Did you understand when evidence could be cited versus ordered?
3. Did you notice newly arrived signals or evidence without searching for them?
4. Did local save and resume behave as expected?
5. Which decision felt most realistic? Which felt artificial?
6. At what point did fatigue or repetition become material?
7. Did the consequence screens change your later decisions?
8. Did the final debrief feel traceable to your decisions?
9. What result did you distrust, and why?
10. What one defect would stop you recommending another person try it?

Use a five-point rating only for:

- mechanical clarity;
- realism;
- confidence that work was saved;
- consequence usefulness;
- debrief traceability; and
- likelihood of completing another scenario.

## Canary success gates

Do not widen access because the LinkedIn post performs well. Widen only when the
product evidence passes:

| Gate | Minimum |
|---|---:|
| Invited participants who start | 8 of 10 |
| Starts that reach D05 | 7 |
| Starts that complete D20 | 6 |
| Median completion time | 70–105 minutes |
| Draft-loss incidents | 0 |
| Cross-user data exposure | 0 |
| Release-blocking crashes | 0 |
| Participants who understand evidence states after briefing | 8 of 10 |
| Participants who notice new-signal badges without prompting | 8 of 10 |
| Debriefs judged traceable to decisions | 7 of 10 |

Any cross-user exposure, lost committed decision, or unresumable active run is
an automatic stop. Fix it and repeat the canary. Do not average it away.

## Decision after the canary

- **Widen:** all safety gates pass, at least six complete, and no common
  mechanical blocker appears.
- **Repeat:** safety gates pass, but completion or clarity gates fail.
- **Stop and repair:** any privacy, persistence, immutability, or access-control
  failure occurs.

The next cohort should remain invitation-only until run quotas, deletion,
retention, and database monitoring are enforced.
