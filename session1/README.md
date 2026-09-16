# Session 1: AI Foundations and Responsible AI

**Friday, September 18, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Why a language model can be confidently wrong, how a working bioinformatician flies an AI agent anyway, and the rules and habits for doing it with our data on our infrastructure.*

**Web pages:** https://biocore.umassmed.edu/bootcamp/session1.0/ through [session1.4](https://biocore.umassmed.edu/bootcamp/session1.4/) (source in [`site/`](../site/)).
**Design notes:** [content-plan.md](content-plan.md) explains how the opening and closing were built around the guest parts.

## Expected learning outcome

Explain at an intuition level why language models hallucinate, and apply the rules and habits for using AI responsibly in a research and patient-data setting.

## The question that holds the session together

> **When AI gives me an answer, how do I know whether to trust it, and what do I do about it?**

| Act | Part | Who | Answers |
|---|---|---|---|
| Why it can be wrong | 1.2 | Eric Ma | The mechanism: prediction, sampling, cutoff, copied bias |
| How to fly it anyway | 1.3 | Tommy Tang | The pilot's practice: plan, context, foundations, verify |
| How to fly it here, safely | 1.4 | Alper Kucukural | The rules, the guardrails, the platform, and the rest of the bootcamp |

Stitching devices: the pilot metaphor (from Tommy's title), Eric's limits table extended in 1.4, and a nine-question trust checklist opened in 1.1 and completed in 1.4.

## Flow

Times are approximate. Blocks marked *optional* on the web pages are dropped first if a part runs long.

| Time | Part | Who | Page |
|---|---|---|---|
| Before the session | 1.0 Before you arrive: four green lights | Pre-work | [session1.0](../site/session1.0/index.html) |
| 1:00 | 1.1 Welcome | Alper | [session1.1](../site/session1.1/index.html) |
| ~1:15 | 1.2 How AI actually works | Eric Ma | [session1.2](../site/session1.2/index.html) |
| ~2:15 | Break, setup help at the front | | |
| ~2:30 | 1.3 Pilot or passenger | Tommy Tang | [session1.3](../site/session1.3/index.html) |
| ~3:30 | 1.4 Flight rules | Alper | [session1.4](../site/session1.4/index.html) |

## 1.0 Before you arrive (pre-work)

Setup moved out of class time. Participants connect Foundry Connect, the HPC cluster, and Claude before Session 2, following the step-by-step page:

1. Create an SSH key in Foundry Connect.
2. Add the public key in the HPC portal.
3. Select the key in the Foundry Connect run environment and test the connection.
4. Add the Foundry Connect connector (`https://viafoundry.umassmed.edu/mcp`) to Claude.

## 1.1 Welcome (Alper)

Core: why the bootcamp exists ("producing code is cheap, understanding it is expensive"), the six-week map, who teaches and why each guest fits their part, today's three acts, setup as pre-work.
Optional: the two guiding questions, the six bootcamp outcomes, room ground rules, the trust checklist.

## 1.2 How AI actually works (Eric Ma)

Delivered as the interactive lesson https://biocore.umassmed.edu/next-token/ (source: https://github.com/ericmjl/next-token). Covers next-token prediction, tokens, temperature, training, interpolation and cutoff, hallucination (fake-reference quiz using the bootcamp's three anchor papers), scale, foundation models (AlphaFold 2, Geneformer, scGPT, Enformer), and a limits table that hands off to 1.4.

## 1.3 Pilot or passenger (Tommy Tang)

Slides: [AI in Bioinformatics.pptx](AI%20in%20Bioinformatics.pptx). Live demo: https://crazyhottommy.github.io/claude_code_RNAseq_workshop/. Covers chat versus coding agents, his analysis workflow, foundations (the batch-effect PCA), reproducibility versus traceability, hallucinated data, and a tour of Claude Code (plan, model, effort, compact, subagents, `CLAUDE.md`, plugins, skills).

## 1.4 Flight rules (Alper)

Fills what the original plan promised and the guest parts do not cover.

| Block | Status | Content |
|---|---|---|
| A. One table for the afternoon | core | Eric's limits table plus Tommy's practice and our rule for each failure |
| B. The flight rules | core | Data protection (PHI, unpublished data, approved tools), authorship, disclosure, logging, bias, labour versus judgement |
| C. How I actually work (live demo) | core, with optional steps | Context and `CLAUDE.md`; skills as lab SOPs (HPC LSF submission, Foundry run launch); Foundry Connect through the connector with confirm-before-write; guardrails and the credential-leak story behind the secret-blocking hook; verification with an independent reviewer model; lean context |
| D. Six AI-literacy skills | optional | Mapped to where they appeared during the session |
| E. Activity: spot the leak | optional | Four prompts, vote, reveal |
| F. What happens next | core | Setup deadline, homework, how Sessions 2 to 6 pick this up |

## Homework

Draft your lab's five-line AI ground rules, using the trust checklist and the flight rules. Bring them to Session 2.

## Instructor checks before Friday

- Walk the four setup steps on a fresh test account. Menu labels come from older docs and may have moved.
- Confirm the UMass instance shows the connector sign-in page (older builds need a personal access credential instead).
- Confirm which Claude plan participants use and whether custom connectors are enabled on it (workspace plans may need an admin).
- Rehearse the 1.4 demo end to end on a test project: a failed run to diagnose, a QC report to summarize, and a relaunch that stops for confirmation. Nothing with patient data on screen.
- Confirm with Eric and Tommy whether each joins in person or remotely; test the room's A/V link before 1:00 if remote.
- Line up helpers for setup questions at the break.

## Materials

- Eric Ma, [How language models actually work](https://biocore.umassmed.edu/next-token/)
- Tommy Tang, [AI in Bioinformatics slides](AI%20in%20Bioinformatics.pptx) and [Claude Code RNA-seq workshop](https://crazyhottommy.github.io/claude_code_RNAseq_workshop/)
- Reference: [Nature Methods, "Language models for biological research: a primer" (2024)](https://www.nature.com/articles/s41592-024-02354-y)
- Framework: Zyphur, [Responsible AI in Research and Research Training](https://github.com/mzyphur/responsible-ai-in-research-training) (CC BY-NC-ND: attribute, do not copy)
- Recording: added after the session
