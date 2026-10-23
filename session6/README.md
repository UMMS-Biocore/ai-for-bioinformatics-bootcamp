# Session 6: Spatial: Xenium and seqFISH

**Friday, October 23, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Cells in their tissue. What spatial transcriptomics adds over single-cell, a Xenium analysis run on Foundry by an AI agent and launched by you, and a homework that puts clusters and niches back on the tissue.*

## Parts

| Part | Who | Page |
|---|---|---|
| 6.1 A few words on spatial data | Manuel Garber (UMass Chan) | [session6.1](https://biocore.umassmed.edu/session6.1/) |
| 6.2 Spatial transcriptomics and the Wang et al. 2026 study | Bioinformatics Core | [session6.2](https://biocore.umassmed.edu/session6.2/) |
| 6.3 Run the Xenium pipeline on Foundry with an agent | Bioinformatics Core | [session6.3](https://biocore.umassmed.edu/session6.3/) |
| 6.4 Homework: Xenium report, niches and segmentation from Foundry run 12359 | Bioinformatics Core | [session6.4](https://biocore.umassmed.edu/session6.4/) |
| After | Feedback (records attendance) | [feedback](https://biocore.umassmed.edu/feedback/?session=6) |

## 6.1 A few words on spatial data

Manuel Garber's lecture ([slides](../site/slides/session6/Session6_Spatial_Intro_Manuel_Garber.pptx)). A spatial experiment is the single-cell table plus an X and a Y for every cell, so its analysis builds on single-cell analysis. Position adds proximity, which ligand and receptor expression alone cannot give, and spatial technologies differ in how they read RNA in place.

## 6.2 Spatial transcriptomics

What position adds to a cell by gene table, imaging based (Xenium, seqFISH) against sequencing based methods, how fluorescent spots become counts per cell, and where that table misleads: the gene panel, few transcripts per cell, and segmentation. Then niches, and the study that anchors the session: [Wang et al. 2026, *Nature Immunology*](https://www.nature.com/articles/s41590-026-02502-w), seqFISH on photosensitive autoimmune skin and its keratinocyte to fibroblast to MMP9⁺ myeloid circuit.

## 6.3 Xenium on Foundry with an agent

The 4.2 pattern on spatial data. An agent in VS Code prepares a run of Foundry's Xenium Spatial Analysis Pipeline (pipeline 1776, version 1.0.4) through Foundry Connect alone, by copying a course template run, on 10x Genomics' public human lung 2 field of view dataset (289 genes, 11,898 cells), and you check it and press Run. The pipeline does QC, SCTransform, clustering, niches and markers in Seurat, and writes an HTML report and a Seurat object in about fifteen minutes.

## 6.4 Homework: back on the tissue

With the outputs of Foundry run 12359, you and an AI agent read the report critically, check the object's QC and decoding noise, draw the niches on the tissue, find the niche that holds the blood vessels, and test whether segmentation spills epithelial transcripts into neighboring cells.

## Materials

- Paper: Wang et al. 2026, *Nature Immunology* ([nature.com](https://www.nature.com/articles/s41590-026-02502-w) · [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC12393449/))
- Data for 6.4: [Xenium HTML report](https://biocore.umassmed.edu/data/session6/Lung2fov.analysis_report.html) (5 MB) and [Seurat object](https://biocore.umassmed.edu/data/session6/Lung2fov.analysis.rds) (42 MB)
- Original data: [10x Xenium_V1_human_Lung_2fov output bundle](https://cf.10xgenomics.com/samples/xenium/2.0.0/Xenium_V1_human_Lung_2fov/Xenium_V1_human_Lung_2fov_outs.zip) (278 MB ZIP, CC BY 4.0)
- Recordings: on the session pages, after you sign in at the top of the site

## Feedback

After the session, fill in the short feedback form. It records attendance too:
<https://biocore.umassmed.edu/feedback/?session=6>
