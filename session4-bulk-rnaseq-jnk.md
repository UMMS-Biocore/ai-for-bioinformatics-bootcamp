# Session 4 — Bulk RNA-Seq

**Friday, October 9, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Resolution ladder, rung 1: the tissue average. Anchored on the Garber-lab hepatic JNK study.*

## Expected learning outcome

Explain what bulk RNA-Seq measures and when to use it, run a differential-expression analysis on Foundry Connect, and interpret it critically with DEBrowser + an AI co-pilot.

## 1. The problem (Manuel's study)

**Vernia et al. 2014, *Cell Metabolism*** — "The PPARα-FGF21 hormone axis contributes to metabolic regulation by the hepatic JNK signaling pathway." [PMID 25043817](https://pubmed.ncbi.nlm.nih.gov/25043817/)

> _TODO: 3–4 sentences — hepatic *Jnk1/Jnk2* knockout vs. control liver, RNA-seq, the PPARα–FGF21 finding. The question we'll reproduce: which genes change when hepatic JNK is removed?_

## 2. The theory & ladder position

> _TODO._
- What bulk RNA-Seq measures: average expression over millions of cells → **blind to which cells / where**.
- **When to use it:** clean genotype/treatment contrast (KO vs. WT), whole transcriptome, most sensitive, cheapest.
- From reads to counts: alignment/quantification → count matrix (brief).
- The DE model: negative binomial, dispersion, normalization (callback to Session 3).

## 3. Solve it with AI + Foundry Connect (hands-on)

> _TODO: step-by-step._
- Run the **RNA-Seq pipeline** on Foundry Connect (reads → QC → alignment → counts). Reuse patterns from the old [Session 2](../session2/session2.md).
- QC & DE in **DEBrowser** (DESeq2/edgeR/limma) — [Bioconductor](https://bioconductor.org/packages/release/bioc/html/debrowser.html).
- Use the AI co-pilot to interpret results, pull gene-set context, and draft the figure legend — then verify.

## 4. Stats & viz reinforced

> _TODO._ **Volcano & MA plots**, **FDR** cutoffs, fold-change vs. significance, PCA for sample QC/batch.

## 5. Responsible-AI checkpoint

> _TODO._ Did the AI invent a gene function or citation? Are DE calls verified against the counts? Log parameters.

## 6. Homework

> _TODO: reproduce a DE contrast and report the top hits + one verified biological interpretation._

## Materials

- Slides: _TODO_ · Recording: _TODO_
- Data / accession: _TODO (GEO for Vernia et al.)_
