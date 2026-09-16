# Session 1 content plan: Alper's opening and closing sections

Status: DRAFT for iteration. No website changes yet.

Decisions so far:
* Timing is not fixed. Both sections are built from modular blocks marked **core** or **optional** so optional blocks can be dropped if speakers run over.
* Setup (four green lights) moves to pre-work plus office hours. The opening links a self-serve checklist, and the closing demo shows the finished setup.
* The live demo includes all four: Foundry Connect via MCP, HPC/Foundry skills, guardrails with the secret-leak story, and adversarial review.

Block priorities: Opening core = 1, 3, 5, 6, 8; optional = 2, 4, 7, 9. Closing core = A, B, C (MCP + guardrails + verification), F; optional = C skills/context-lean details, D, E.

## Context

Session 1 (Fri Sep 18, 1:00 to 4:00 pm) was originally planned in `session1-ai-foundations-responsible-ai.md` as: Welcome, Part 0 Setup (four green lights), Part A How AI works (Eric), Part B Responsible AI (Tommy), Part C Six AI-literacy competencies (Alper), activity, homework. The guest material is now final and differs from that plan:

* Eric delivers https://biocore.umassmed.edu/next-token/ (Part A, done well).
* Tommy delivers `session1/AI in Bioinformatics.pptx` ("Pilot or Passenger"), which is mostly a Claude Code practice talk, not the Part B rules.

Goal: two new pages that bracket the guests so Session 1 reads as one story, and that pick up everything the original plan promised but nobody now delivers.

---

## 1. What Eric covers (Part A, fully delivered)

Math-light, no code, interactive single page with a presenter mode.
1. One trick: next-token prediction ("well-read autocomplete")
2. Tokens (why letter counting and exact strings fail)
3. Probabilities, sampling, temperature ("belongs in your methods section")
4. Training vs inference; models copy flaws and bias in training text
5. Interpolation within a huge library; training cutoff; web search is a separate tool
6. Hallucination as normal operation; hands-on fake-reference quiz (Vernia, Gellatly, Wang are real)
7. Scale and emergence (GPT-1 to frontier)
8. Foundation models: AlphaFold 2, Geneformer, scGPT, Enformer
9. Limits table (symptom, cause, habit) and a quiz; **explicitly hands off to "Part B, led by Alper": patient data, checking outputs, disclosure, reproducibility, when not to use AI**
10. Glossary, FAQ (does it learn from my chat? which model? seeds, top-p)

## 2. What Tommy covers

35 slides, no speaker notes, several image-only slides, plus a live demo from crazyhottommy.github.io/claude_code_RNAseq_workshop.
* Chat assistant vs AI coding agent
* Productivity stories (Shiny app, website, vibe-coded app)
* Foundations still matter: Unix, R/Python, biology, experience (spot the batch effect in a PCA)
* His workflow: plan, then old scripts as style, then Rmd/Jupyter, then run line by line, then GitHub, then biologist interpretation
* Risks: AI analysis is not reproducible; traceability vs reproducibility; hallucinated data
* Claude Code tour: auto permission mode, `/effort`, ultrathink, `/model`, context, `/compact`, subagents, CLAUDE.md, plugins (Superpowers, frontend-design), SKILL.md, `/rewind`, `--resume`
* Takeaways: embrace AI, master foundations, verify

Not covered by Tommy: PHI and data privacy, disclosure, authorship, bias, MCP/connectors, HPC, Foundry Connect, setup, concrete verification methods, hooks and guardrails.

## 3. What the original plan intended

| Planned item | Status now |
|---|---|
| Welcome and introductions | Not built. Alper, opening |
| Part 0: four green lights (Foundry login, SSH to cluster, Foundry to cluster, Claude to Foundry MCP), 40 min | **Nobody covers it. Does not fit in the time left** |
| Part A: how AI works, hallucination, temperature, foundation models | Eric, fully covered |
| Part B: PHI, hallucination verification, authorship, disclosure, bias, reproducibility logging, when not to trust, labour vs judgement | Hallucination: Eric + Tommy. Reproducibility: Tommy (concept only). **The rest is missing** and Eric's page already promises it to Alper |
| Part C: six competencies (citation verification, reporting model/params, prompt discipline, adversarial review with a different model family, sycophancy, failure-mode reporting) | **Missing.** Items 1 and 2 are partly seeded by Eric |
| Activity: spot the hallucination / spot the PHI leak | Hallucination half done by Eric. **PHI half missing** |
| Homework: lab's 5-line AI-use ground rules | **Missing** |

## 4. Remaining gaps (what the closing must fill)

1. Responsible-use rules as concrete, local policy: PHI and unpublished data, which tool is approved at UMass, disclosure, authorship and accountability, bias, when to leave AI out.
2. Verification turned into a procedure, not a slogan (Eric and Tommy both say "verify", neither shows how).
3. Logging and reproducibility in practice (model, version, settings, prompts, session transcripts, git).
4. The step from "coding agent on my laptop" (Tommy) to "agent connected to real infrastructure" (Foundry Connect via MCP, HPC). This is the bootcamp's actual platform and nobody introduces it.
5. Guardrails: permissions, hooks, secrets. Tommy shows auto permission mode; someone must say what can go wrong.
6. Setup (four green lights) still has to happen before Session 4 hands-on work.
7. A bridge to Sessions 2 to 6 so the day ends with a map, not a demo.

Avoid overlap with Session 2 (`session3-ai-research-copilot.md`): prompting craft, the four use modes, literature tools, and the disclosure template deliverable belong there. Session 1 closing should *name* them and hand off, not teach them.

---

## 5. The through-line (one story, three voices)

Frame the whole afternoon around one question written on the opening page and repeated on the closing page:

> **"When AI gives me an answer, how do I know whether to trust it, and what do I do about it?"**

Three acts:

| Act | Speaker | Answers |
|---|---|---|
| Why it can be wrong | Eric | the mechanism (prediction, dice, cutoff, copied bias) |
| How to fly it anyway | Tommy | the pilot's practice (plan, context, foundations, verify) |
| How to fly it here, safely, on real data | Alper | the rules, the guardrails, the platform, and the rest of the bootcamp |

Stitching devices:
* **The pilot metaphor** (Tommy's title) becomes the day's spine. Opening: "Today you learn how the plane works (Eric), how pilots fly (Tommy), and our flight rules and airport (me)." Closing: preflight checklist, flight recorder (logging), air traffic control (permissions/hooks), the airport (Foundry + HPC).
* **Eric's limits table** is reused and extended on the closing page with two columns: "Tommy's practice" and "Our rule / tool". Every row then has mechanism, practice, rule.
* **Callbacks:** Eric's fake references and Tommy's "hallucinated all the data" become the opening of the verification protocol. Eric's temperature slider becomes the logging rule. Tommy's batch-effect PCA becomes "your judgement is the verifier".
* **A running "trust checklist" card** introduced at the opening (blank), filled during the day, completed at the closing. It is also the seed of the homework (lab ground rules).

---

## 6. Opening page (before Eric), about 10 to 15 min

Proposed URL: `site/session1-welcome.html`

1. **Welcome and why this bootcamp exists** (2 min)
   Successor to the Sequence Analysis Bootcamp. The shift: code is cheap, understanding is expensive (Eric's line, quoted by Tommy, so plant it here first).
2. **The two guiding questions** (1 min): understand enough to judge AI's output; go faster without going wrong.
3. **The six-week map** (3 min): one visual with the six Fridays as a path, from foundations to trust to co-pilot to stats to bulk, single-cell, spatial on real studies (Vernia 2014, Gellatly 2021, Wang 2026). Point out that Eric's quiz today uses these same papers.
4. **Six learning outcomes** of the bootcamp, plus today's outcome in one sentence.
5. **Who teaches** (3 min): Garber, Aydemir, Kucukural; Eric Ma (Moderna) and Tommy Tang (AstraZeneca) with one line each on *why they are teaching this part*.
6. **Today's flow as three acts** with the time table and the central question (section 5 above).
7. **Ground rules for the room:** laptops, recordings, questions channel, "no patient data in any tool today", where materials live.
8. **Expectations and before next Friday:** the setup checklist (four green lights) and where to get help.
9. **The blank trust checklist** handed out (printable card or a section on the page).

## 7. Closing page (after Tommy), about 35 to 45 min

Proposed URL: `site/session1-flight-rules.html` (working title "From Pilot to Practice")

**A. Stitch the three acts** (5 min)
The extended limits table: symptom, mechanism (Eric), practice (Tommy), rule/tool (us).

**B. Flight rules: responsible AI at UMass Chan** (10 min, fills Part B)
One rule plus one real example each:
* Data: PHI and unpublished data only in approved enterprise tools with training disabled; never in consumer chat. (Eric's FAQ: "does it learn from my chat" is not the same as retention.)
* Accountability: you are the author; AI is never cited as an author.
* Disclosure: tool, version, what it did, how you checked. (Template handed off to Session 2.)
* Bias: models copy the field's old mistakes (Eric section 4).
* When to leave AI out: judgement calls, primary interpretation, anything you cannot check.

**C. How I actually work: a day with an agent on real infrastructure** (15 min, live demo, the heart of the closing)
Show the concrete setup that goes beyond Tommy's laptop demo:
1. *Context:* a project CLAUDE.md and memory; plan mode before any action.
2. *Skills as lab SOPs:* skills that encode how we submit to the UMass HPC (LSF) and how we launch a Foundry pipeline run. A skill is a written protocol the agent follows.
3. *Connectors (MCP):* Claude talking to Foundry Connect: find a run, check status, pull the report, summarize results, with confirm-before-write on anything that launches jobs.
4. *Guardrails:* permission prompts, a hook that blocks secrets from being printed, and why it exists (a real incident story, if Alper is willing to share it). Contrast with auto mode from Tommy.
5. *Verification in practice:* adversarial review with a different model or a fresh subagent; check numbers against the raw report; git history as the traceability record.
6. *Keeping it cheap and sharp:* subagents for exploration, fresh sessions, lean context (connects to Tommy's `/compact` and subagent slides).

**D. The six AI-literacy competencies** (5 min, fills Part C)
Shown as a checklist mapped to what they saw today (citation verification to Eric's quiz; reporting params to the temperature slider; adversarial review and sycophancy to section C; failure-mode reporting to the limits table). Prompt discipline previewed and handed to Session 2.

**E. Activity: spot the PHI leak** (5 min, completes the original activity)
Three or four short prompts, some leaking identifiers or unpublished data; the room votes. Mirrors Eric's fake-reference quiz format.

**F. What's next** (3 to 5 min)
* Setup: the four green lights with a link to step-by-step instructions (to be done before Session 2 or during office hours).
* Homework: write your lab's 5-line AI-use ground rules using the completed trust checklist.
* Preview of Session 2 (co-pilot, prompting, disclosure template) and how Sessions 4 to 6 use the Foundry + agent setup shown in C.

---

## 8. Housekeeping found during review (not part of the pages)

* The repo plan says Part B is Tommy; Eric's site says Part B is Alper. Update the md once the plan is final.
* Eric's section 8 hands off to "Manuel Garber's session on spatial biology"; check this matches the session map.
* README links point to old session filenames (`session2-ai-research-copilot.md`, `session3-stats-and-visualization.md`), and the Session 2 and 3 filenames and titles are swapped.
* A `.playwright-mcp/` folder was created in the repo while reading Eric's site; delete it.

## 9. Implementation notes (for later, not now)

* The site is plain static HTML in `site/` with inline CSS/JS and a theme toggle saved in `localStorage` (`bootcamp-theme`). New pages copy the `<style>` block and top bar from `site/index.html`.
* Link both pages from the Session 1 item in the `ol.sessions` list in `site/index.html`.
* Add them to the `scp` deploy command in `site/README.md`.
* Update `session1-ai-foundations-responsible-ai.md` to the new flow.

## Verification (at implementation time)

Open both pages locally in light and dark themes and on a mobile width; check links to Eric's site, Tommy's workshop, and register/index; check the live demo steps in section C on a test account before Sep 18.
