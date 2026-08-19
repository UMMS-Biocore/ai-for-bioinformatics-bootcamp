# Session 1 — AI Foundations & Responsible AI

**Friday, September 18, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Opens with a 45-minute quick start (accounts and environment), then the "why" before the "how." Enough theory of AI to use it well, and the responsible-use discipline that runs through the whole bootcamp.*

## Expected learning outcome

Explain — at an intuition level — what LLMs/ML models are and why they hallucinate, and apply the rules for using AI responsibly in a research (and patient-data) setting.

## Part 0: Quick Start, just enough environment (~45 min)

*Opens day one. Replaces the long Linux session with only what you need to follow the rest of the bootcamp.*

**Outcome:** every account working, a handful of commands run with confidence, and a clear picture of *where* each thing runs (your laptop, the cluster, the cloud, Foundry Connect).

### Accounts and access: checklist

- [ ] Foundry Connect login — <https://viafoundry.umassmed.edu/>
- [ ] UMass Chan HPC cluster account (**required**) — [request one](https://hpc.umassmed.edu/doc/index.php?title=Accounts)
- [ ] An AI assistant account (which one, and the approved/enterprise instance for sensitive data)
- [ ] _TODO: any dataset access / group membership needed_

### Where things run (mental model)

> _TODO: one diagram — laptop ⇄ cluster ⇄ cloud ⇄ Foundry Connect. What lives where, what you touch directly._

### The only CLI you need today

> _TODO: keep to the essentials — `ssh`, `ls`, `cd`, `pwd`, moving/looking at files, and how to start a Foundry Connect run. Link back to the old [Session 1](../session1/session1.md) for anyone who wants the full Linux tutorial._

### Setup verification

> _TODO: a 2-minute "did it work?" task, e.g. log into Foundry Connect and confirm you can see a project._

## Part A — How AI actually works (intuition, math-light)

> _TODO: fill each with a plain-language explanation + one visual._
- What a model *is*: patterns from data, not a database of facts.
- Prediction, not retrieval → why confident-but-wrong (hallucination) happens.
- Training vs. inference; context window; temperature (why answers vary).
- ML vs. deep learning vs. LLMs vs. "agents" — the vocabulary, briefly.
- Foundation models teaser (pointer to Session 6): AlphaFold, scGPT/Geneformer, Enformer.

## Part B — Responsible AI (the heart of this session)

> _TODO: make each a rule + a real example._
- **PHI / data privacy** — never paste patient or unpublished data into public tools; use the approved instance. Prefer an **enterprise-tenanted deployment with training-on-input disabled** — consumer tiers may train on what you paste (cf. the 2023 Samsung leak). *(Critical: skin-biopsy patient data.)*
- **Hallucination & verification** — every citation, number, and claim gets independently checked. Fabricated-reference demo.
- **Authorship & accountability** — AI is not an author; you are responsible for correctness.
- **Disclosure & citation** — disclose tool + version + scope of use.
- **Bias & fairness** — training-data bias propagates to outputs and models.
- **Reproducibility** — log prompts, versions, dates, settings.
- **When NOT to trust AI** — novel reasoning, precise stats, current literature, anything clinically consequential without expert review.
- **Labour vs. judgement** — AI may augment *recoverable* **labour** (formatting, language polishing, transcription against a verified source); it must not substitute for the **judgement** that defines research (framing the question, calling an outlier, interpreting a surprise, answering a reviewer). AI can't bear responsibility for the work.

## Part C — Six AI-literacy competencies (the concrete skills)

> _TODO: turn each into a one-line rule + a short demo. Grounded in Zyphur/Instats (see README)._
1. **Citation verification** — check every AI-produced citation against the primary source before it enters your work.
2. **Model & parameter specification** — report model version, temperature, seed, and the prompt; re-run to test stability.
3. **Prompt discipline ("fork in the garden")** — treat prompt choice as an analytic degree of freedom (a p-hacking analogue); prompt-sensitivity-test. *(Revisited in [Session 3](session3-stats-and-visualization.md).)*
4. **Adversarial review with model heterogeneity** — critique with a *different* model family than the one that generated the work.
5. **Sycophancy detection** — AI agreement is not evidence; flat agreement with your framing is a red flag, not a green light.
6. **Structured failure-mode reporting** — report what you checked for, what failed, and the residual risk.

## Activity

> _TODO: hands-on "spot the hallucination / spot the PHI leak" exercise._

## Homework

> _TODO: e.g., draft your lab's 5-line AI-use ground rules._

## Materials

- Slides: _TODO_ · Recording: _TODO_
- Reference: [Nature Methods, "Language models for biological research: a primer" (2024)](https://www.nature.com/articles/s41592-024-02354-y)
- Framework: Zyphur / Instats, [Responsible AI in Research & Research Training](https://github.com/mzyphur/responsible-ai-in-research-training) (CC BY-NC-ND — attribute, don't copy)
