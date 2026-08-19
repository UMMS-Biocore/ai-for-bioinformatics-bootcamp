# Session 6 — Spatial: Xenium & seqFISH

**Friday, October 23, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Resolution ladder, rung 3: cells in their tissue context. Anchored on the Garber-lab photosensitive-skin study.*

## Expected learning outcome

Explain what spatial transcriptomics adds over single-cell and when to use it, run a Xenium spatial analysis, and reason about tissue neighborhoods and cell–cell circuits.

## 1. The problem (Manuel's study)

**Wang et al. 2026, *Nature Immunology*** — a spatially coordinated keratinocyte–fibroblast circuit recruits MMP9⁺ myeloid cells to drive type-I-interferon inflammation in photosensitive autoimmunity (seqFISH, human cutaneous lupus / dermatomyositis skin). [Paper](https://www.nature.com/articles/s41590-026-02502-w) · [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12393449/)

> _TODO: 3–4 sentences — 511-gene seqFISH panel; where MMP9⁺CD14⁺ myeloid cells sit; the keratinocyte→fibroblast→myeloid spatial circuit. The question: does *location* explain the inflammation that single-cell alone couldn't?_

## 2. The theory & ladder position

> _TODO._
- **What spatial adds over single-cell:** expression per cell **in tissue location** → neighborhoods, colocalization, cell–cell circuits in situ.
- **When to use it:** when *where* matters — architecture, microenvironment, cell communication.
- **Trade-off:** **targeted gene panel** (imaging-based: Xenium, seqFISH, MERFISH), not whole transcriptome; segmentation challenges.
- Imaging-based vs. sequencing-based spatial; how Xenium/seqFISH generate a cell × gene matrix + coordinates.

## 3. Solve it with AI + Foundry Connect (hands-on)

> _TODO: step-by-step._
- Xenium data anatomy: `cell_feature_matrix`, `transcripts`, cell/nucleus boundaries, morphology images (see `xenium-spatial-analysis-pipeline` README).
- Run the **Xenium Spatial Analysis pipeline** (`spatialdata`/`scanpy`) — QC → clustering → aggregated report. Local: `SpatialTranscriptomics/` and the Foundry Connect `.vf` pipeline.
- Training data: 10x **Xenium demo** (`XeniumTraining/`); explore the seqFISH skin data (`fourDisease_seqfish`, `UV_seqfish`) in **SkinOmicsExplorer** (R/Shiny).
- Neighborhood / colocalization analysis to reconstruct the spatial circuit; AI co-pilot to interpret — then verify.

## 4. Stats & viz reinforced

> _TODO._ **Neighborhood-enrichment** stats, spatial plots / cell maps, colocalization, plus the clustering/UMAP toolkit from Session 5.

## 5. Responsible-AI checkpoint

> _TODO._ Segmentation & panel limits shape conclusions — don't over-read absent genes. Patient-tissue privacy. Log pipeline versions/parameters.

## 6. Homework

> _TODO: run the demo through the pipeline and describe one spatial neighborhood you find._

## Materials

- Slides: _TODO_ · Recording: _TODO_
- Data / pipeline: `XeniumTraining/`, `SpatialTranscriptomics/`, `xenium-spatial-analysis-pipeline`, `SkinOmicsExplorer`
