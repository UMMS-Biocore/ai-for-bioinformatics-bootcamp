# AI for Bioinformatics Bootcamp

*A hands-on bootcamp that pairs the **theory** of modern genomics — bulk RNA-Seq, single-cell, and spatial (Xenium/seqFISH) — with the **responsible use of AI** to accelerate research, taught through real studies from Manuel Garber's lab and run end-to-end on **Foundry Connect**.*

> Status: **in development** (started 2026-07). This README is the living plan; each `sessionN-*.md` is a fillable skeleton. Successor to the [Sequence Analysis Bootcamp](../README.md).

---

## Who this is for

Working scientists — grad students, postdocs, bench researchers, core-facility users — across domains (not only genomics), with **mixed-to-low coding background**. No prior Linux or ML assumed.

## What's different from the original bootcamp

- **Linux is trimmed** to a short "just enough environment" quick-start.
- **Responsible AI is front-and-center** — its own session *and* a checkpoint in every session (PHI/patient-data privacy is critical here).
- **Every example is a real Garber-lab study**, not toy data.
- **Two questions run through the whole course:** *understand the theory well enough to judge AI's output*, and *use AI to go faster without going wrong.*

## Overall learning outcomes

By the end, a participant can:

1. Explain — at an intuition level — how modern AI/LLMs work and where they fail.
2. Use AI assistants responsibly to speed up literature review, coding, analysis, and writing.
3. Read and reason about the core statistics and visualizations behind genomics results.
4. Explain what bulk RNA-Seq, single-cell, and spatial each measure, how they differ, and **when to use which**.
5. Run each assay's analysis on Foundry Connect and interpret the output critically.
6. Apply the responsible-AI discipline: verify, cite, protect data, log for reproducibility.

---

## The "resolution ladder" (the spine of the domain sessions)

| Assay | What it measures | Best for | Blind to / trade-off |
|---|---|---|---|
| **Bulk RNA-Seq** | Average expression over a whole tissue | Clean genotype/treatment contrasts; whole transcriptome; most sensitive; cheap | *Which* cells and *where* |
| **Single-cell RNA-Seq** | Expression per individual (dissociated) cell | Cell types & composition shifts; cell-state heterogeneity | Loses location; dissociation artifacts; sparse |
| **Spatial (Xenium/seqFISH)** | Expression per cell *in tissue location* | Neighborhoods; cell–cell circuits in situ | Targeted gene panel, not whole transcriptome |

Each domain session opens by contrasting with the rung below it — that is how the course answers *"what's the problem, how do they differ, when do I use each."*

---

## Schedule

Six Fridays, Friday, September 18, 2026 through Friday, October 23, 2026, all 1:00 to 4:00 pm.

| # | Date | Time | Location |
|---|---|---|---|
| 1 | Friday, September 18, 2026 | 1:00 to 4:00 pm | Amphitheater II (S4-102) |
| 2 | Friday, September 25, 2026 | 1:00 to 4:00 pm | Amphitheater II (S4-102) |
| 3 | Friday, October 2, 2026 | 1:00 to 4:00 pm | Amphitheater II (S4-102) |
| 4 | Friday, October 9, 2026 | 1:00 to 4:00 pm | Amphitheater II (S4-102) |
| 5 | Friday, October 16, 2026 | 1:00 to 4:00 pm | Amphitheater I (S2-102) |
| 6 | Friday, October 23, 2026 | 1:00 to 4:00 pm | Amphitheater II (S4-102) |

> Note the room change: **Session 5 on Fri Oct 16 is in Amphitheater I (S2-102)**, not Amphitheater II. Every other session is in Amphitheater II (S4-102).

---

## Session map

| # | Session | Core idea |
|---|---|---|
| 1 | [AI Foundations & Responsible AI](session1-ai-foundations-responsible-ai.md) | Opens with the 45-min quick start (accounts, minimal CLI, where things run), then how AI/LLMs work & fail and the responsible-AI block (PHI, verification, disclosure, bias) |
| 2 | [AI as a Research Co-pilot](session2-ai-research-copilot.md) | Speed up literature, coding, analysis, writing; prompting craft; verify-everything |
| 3 | [Statistics & Visualization You Can Trust](session3-stats-and-visualization.md) | The shared stats + viz toolkit; AI as a stats BS-detector |
| 4 | [Bulk RNA-Seq](session4-bulk-rnaseq-jnk.md) | Differential expression — Vernia et al. hepatic JNK study |
| 5 | [Single-cell RNA-Seq](session5-single-cell-vitiligo.md) | Cell types & composition — Gellatly et al. vitiligo study |
| 6 | [Spatial: Xenium & seqFISH](session6-spatial-xenium-seqfish.md) | Tissue circuits in situ — Wang et al. photosensitive-skin study |
| — | [Capstone (optional)](capstone.md) | Apply the workflow to your own research problem |

**Domain-session skeleton (Sessions 4–6):** the problem (Manuel's study) → the theory & ladder position → solve it with AI + Foundry Connect → stats/viz reinforced → responsible-AI checkpoint → homework.

---

## Cross-cutting threads (every session)

- **Responsible AI** — verify claims, protect PHI, disclose & cite, watch for bias, know when *not* to trust AI.
- **Reproducibility** — log prompts, tool versions, and parameters.
- **Stats & viz reinforcement** — each domain session re-applies the Session 3 toolkit at the moment it bites.

> **Grounded in:** the responsible-AI thread borrows concrete frames from Zyphur's *Responsible AI in Research & Research Training* (Instats) — the **four AI-use modes** (search / co-author / validator / tutor), the **six AI-literacy competencies**, and the **labour-vs-judgement** line for what must stay human. Taught in our own words; see the [repo](https://github.com/mzyphur/responsible-ai-in-research-training) (CC BY-NC-ND — reference and attribute, don't copy).

## Anchor studies

| Assay | Study | Biological question |
|---|---|---|
| Bulk RNA-Seq | Vernia et al. 2014, *Cell Metab* ([PMID 25043817](https://pubmed.ncbi.nlm.nih.gov/25043817/)) | How does hepatic *Jnk1/Jnk2* signaling reshape the liver transcriptome via the PPARα–FGF21 axis? |
| scRNA-Seq | Gellatly et al. 2021, *Sci Transl Med* ([link](https://www.science.org/doi/10.1126/scitranslmed.abd8995)) | Which immune subsets expand in vitiligo skin, and why do Tregs fail (CCR5)? |
| Spatial | Wang et al. 2026, *Nat Immunol* ([link](https://www.nature.com/articles/s41590-026-02502-w)) | Where do MMP9⁺ myeloid cells sit, and how does a keratinocyte→fibroblast→myeloid circuit drive photosensitivity? |

## Hands-on platforms, pipelines & data

- **Foundry Connect** (formerly DolphinNext) — RNA-Seq, Cell Ranger, and Xenium spatial pipelines.
- **DEBrowser** — interactive differential expression.
- **Spatial pipeline** (`spatialdata`/`scanpy`) — `SpatialTranscriptomics/` and `xenium-spatial-analysis-pipeline` (Foundry Connect `.vf`).
- **Data** — Xenium training demo (10x breast-cancer FFPE); seqFISH skin data (`fourDisease_seqfish`, `UV_seqfish`) explored via `SkinOmicsExplorer` (R/Shiny).

> Exact dataset paths/accessions to be pinned per session as content is filled.

## Delivery

Same infrastructure as the original bootcamp: markdown + slides in this repo, session recordings, and light homework. Six sessions run over six consecutive weeks; the capstone is optional for v1.

---

## How to fill this in

Each session file has the same headings with `> _TODO:_` prompts. Recommended order to draft: **4 → 5 → 6** (the domain sessions carry the science), then **3** (stats/viz to support them), then **1, 2**.
