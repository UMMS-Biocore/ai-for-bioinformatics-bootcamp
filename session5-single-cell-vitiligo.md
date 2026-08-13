# Session 5 — Single-cell RNA-Seq

*Resolution ladder, rung 2: one cell at a time. Anchored on the Garber-lab vitiligo study.*

## Expected learning outcome

Explain what single-cell adds over bulk and when to use it, run a single-cell analysis on Foundry Connect, and interpret cell types, composition shifts, and cell–cell signaling with AI help.

## 1. The problem (Manuel's study)

**Gellatly et al. 2021, *Science Translational Medicine*** — scRNA-seq of human vitiligo skin reveals subclinical immune activation and a role for CCR5 in Treg function. [Paper](https://www.science.org/doi/10.1126/scitranslmed.abd8995)

> _TODO: 3–4 sentences — lesional vs. perilesional vs. non-lesional skin; which immune subsets expand; the CCL5–CCR5 effector-T/Treg story. The question: which cells drive vitiligo, and why do Tregs fail?_

## 2. The theory & ladder position

> _TODO._
- **What single-cell adds over bulk:** expression *per cell* → discover cell types & composition shifts that a tissue average hides.
- **When to use it:** heterogeneous tissue, unknown/among cell types, rare populations.
- **Trade-offs:** dissociation artifacts, sparsity/dropout, no spatial location, cost.
- Pipeline concepts: droplets → cell × gene matrix; QC (mito%, doublets); normalization; clustering; annotation.

## 3. Solve it with AI + Foundry Connect (hands-on)

> _TODO: step-by-step._
- Run **Cell Ranger + the scRNA analysis module** on Foundry Connect. Reuse patterns from the old [Session 3](../session3/session3.md).
- QC → clustering → **cell-type annotation** → differential abundance → ligand–receptor / cell–cell communication.
- AI co-pilot for marker-based annotation and interpretation — then verify against known biology.

## 4. Stats & viz reinforced

> _TODO._ **PCA/UMAP/t-SNE**, clustering resolution & stability, **differential abundance** across conditions, marker heatmaps/violins.

## 5. Responsible-AI checkpoint

> _TODO._ AI-suggested cell-type labels are hypotheses, not truth — verify markers. Patient-sample data privacy. Log clustering parameters.

## 6. Homework

> _TODO: annotate clusters in a provided object and defend two labels with markers._

## Materials

- Slides: _TODO_ · Recording: _TODO_
- Data / accession: _TODO (GEO for Gellatly et al.)_
