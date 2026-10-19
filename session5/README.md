# Session 5: Single-cell RNA-Seq

**Friday, October 16, 2026 · 1:00 to 4:00 pm · Amphitheater I (S2-102), a room change**

*Cell types and composition. Manuel Garber introduces single-cell analysis, Ozkan Aydemir works through QC and integration live in marimo notebooks, and the homework reads a finished Foundry run.*

## Parts

| Part | Who | Page |
|---|---|---|
| 5.1 A brief introduction to single-cell RNA-seq analysis | Manuel Garber (UMass Chan) | [session5.1](https://biocore.umassmed.edu/session5.1/) · [slides](../site/slides/session5/Session5_scRNA-Seq_Intro_Manuel_Garber.pptx) · [figures](../site/slides/session5/Session5_scRNA-Seq_Analysis_Illustrations.pptx) |
| 5.2 Single-cell data, QC and integration in live marimo notebooks | Ozkan Aydemir | [session5.2](https://biocore.umassmed.edu/session5.2/) · slides [part 1](../site/slides/session5/Session5_scRNA-Seq_Workshop_Part1_Data_and_QC.html) · [part 2](../site/slides/session5/Session5_scRNA-Seq_Workshop_Part2_Integration.html) |
| 5.3 Homework: Cell Ranger report and PBMC markers from Foundry run 12084 | Bioinformatics Core | [session5.3](https://biocore.umassmed.edu/session5.3/) |
| After | Feedback (records attendance) | [feedback](https://biocore.umassmed.edu/feedback/?session=5) |

## 5.1 A brief introduction to single-cell RNA-seq analysis

What a single-cell experiment measures, and the standard path from cells to answers: quality control, variable genes, dimensionality reduction, clustering, naming cell types, and then the two questions most studies ask. Do cell-type proportions change? Does expression change within a cell type? The second deck holds the ten teaching figures from the page.

## 5.2 Single-cell data, QC and integration

Ozkan Aydemir works through a public COVID-19 bronchoalveolar lavage dataset ([Liao et al., 2020](https://doi.org/10.1038/s41591-020-0901-9)) in marimo notebooks with an AI agent: merging samples, deciding which cells to keep, finding doublets, and integrating samples without erasing the biology. One caution comes up early: the healthy controls were not processed alongside the patients, so control versus COVID-19 is confounded with batch.

## 5.3 Homework: Cell Ranger report and PBMC markers

Foundry run 12084 ran Cell Ranger Multi on 10x Genomics' public 1k PBMCs with cell surface protein dataset (`pbmc_1k_protein_v3`). First you and an AI agent read its Cell Ranger report and ask whether the run looks healthy. Then you load the Seurat object it produced, in R, and color two classic PBMC markers on the UMAP to find T cells and monocytes.

## Materials

- Slides: Manuel Garber, [Brief introduction to scRNA-seq analysis](../site/slides/session5/Session5_scRNA-Seq_Intro_Manuel_Garber.pptx) (PowerPoint, 2 MB)
- Slides: [scRNA-seq analysis in ten figures](../site/slides/session5/Session5_scRNA-Seq_Analysis_Illustrations.pptx) (PowerPoint, 3 MB)
- Slides: Ozkan Aydemir, scRNA-seq workshop, split like the recordings: [part 1, data and QC](https://biocore.umassmed.edu/slides/session5/Session5_scRNA-Seq_Workshop_Part1_Data_and_QC.html) (slides 1 to 24) and [part 2, integration and beyond](https://biocore.umassmed.edu/slides/session5/Session5_scRNA-Seq_Workshop_Part2_Integration.html) (slides 25 to 46), or [all 46 slides](https://biocore.umassmed.edu/slides/session5/Session5_scRNA-Seq_Workshop_Ozkan_Aydemir.html) (HTML, opens in the browser)
- Data for 5.3: [Cell Ranger web summary](https://biocore.umassmed.edu/data/session5/pbmc_web_summary.html) (6 MB HTML) and [Seurat object](https://biocore.umassmed.edu/data/session5/pbmc_final_analysis.rds) (19 MB)
- Original reads, if you want them: [10x Genomics dataset page](https://www.10xgenomics.com/datasets/1-k-pbm-cs-from-a-healthy-donor-gene-expression-and-cell-surface-protein-3-standard-3-0-0)
- Recordings: on the session pages, after you sign in at the top of the site

## Feedback

After the session, fill in the short feedback form. It records attendance too:
<https://biocore.umassmed.edu/feedback/?session=5>
