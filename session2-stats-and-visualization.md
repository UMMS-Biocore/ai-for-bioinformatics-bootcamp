# Session 3 — Statistics & Visualization You Can Trust

**Friday, October 2, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*The shared toolkit under every genomics result. Taught once here, reinforced just-in-time in Sessions 4–6.*

## Expected learning outcome

Read and reason about the core statistics and plots behind genomics analyses — and use AI to help with stats/viz while catching its mistakes.

## Statistics (intuition-first) (Tommy)

> _TODO: plain-language + one figure each._
- Experimental design & **replicates** (biological vs. technical); power.
- Distributions in genomics (why counts aren't normal → negative binomial).
- Hypothesis testing & **p-values** — what they do and don't mean.
- **Multiple-testing correction** — why 20,000 genes breaks naive p-values; FDR / Benjamini–Hochberg.
- **Effect size vs. significance** (fold-change *and* p-value).
- Correlation vs. causation.
- **Batch effects & confounders** — how they fool you.
- Normalization intuition (why and how).
- Choosing the right test.

## Visualization grammar 

> _TODO: for each, "how to read it" + "how it misleads."_
- Right plot for the data; how charts mislead (truncated axes, dual axes, overplotting).
- The workhorses: **MA & volcano** (DE), **PCA**, **heatmaps**, **box/violin**, **UMAP/t-SNE**, **spatial maps**.

## The AI angle (this session's hook)

> _TODO: demo — ask AI to pick a test / make a figure, then find what it got wrong._
- AI will confidently run the **wrong test** or make a **misleading chart** → theory is your BS-detector.
- **Prompt = a fork in the garden** — choosing a prompt is a researcher degree of freedom, like an analytic choice in p-hacking; undisclosed prompt variants are hidden "LLM hacking." Prompt-sensitivity-test and report model + temperature + seed. *(Carries over from [Session 1](session1-ai-foundations-responsible-ai.md) competency 3.)*
- Reproducibility: log the test, parameters, and code.

## Where each piece comes back

| Concept | Reinforced in |
|---|---|
| Volcano/MA, FDR, negative binomial | Session 4 (bulk RNA-Seq) |
| PCA/UMAP, clustering stability, differential abundance | Session 5 (single-cell) |
| Neighborhood-enrichment stats, spatial plots | Session 6 (spatial) |

## Hands-on

> _TODO: a small dataset where a naive analysis gives the wrong answer until stats are applied correctly._

## Homework

> _TODO: critique a figure (from a paper or AI-generated) — what's misleading, what's missing._

## Materials

- Slides: _TODO_ · Recording: _TODO_
