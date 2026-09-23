# Session 2: Statistics and Visualization You Can Trust

**Friday, September 25, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*The statistics and the plots behind every genomics result, taught by Tommy Tang. Session 1 ended on a rule: verify what AI gives you. This is the toolkit that lets you do it.*

> Status: in preparation. Tommy's slides are still being written, so the outlines below will change before the session.

## Learning outcome

Read and reason about the statistics and figures behind a genomics result: what a p-value promises, what multiple testing does to it, and which plot answers which question.

## Parts

| Time | Part | Who | Page |
|---|---|---|---|
| 1:00 | 2.1 Basic statistics for biologists | Tommy Tang | [session2.1](https://biocore.umassmed.edu/session2.1/) |
| | 2.2 Master six plots | Tommy Tang | [session2.2](https://biocore.umassmed.edu/session2.2/) |
| | 2.3 Hands-on: a real RNA-Seq table with Claude | Bioinformatics Core | [session2.3](https://biocore.umassmed.edu/session2.3/) |

Times are approximate and the running order is not final.

## 2.1 Basic statistics for biologists

Starting from the null hypothesis, what a p-value is and is not, p-value distributions, the multiple comparison problem, controlling the false discovery rate with the Benjamini and Hochberg method, adjusted p-values and q-values, why thousands of points always reach significance, and why a handful of samples can mislead you.

## 2.2 Master six plots

Barplot, scatter plot, line graph, histogram, boxplot and violin, and heatmap: what each shows, when to use it, and how each one misleads. Then what the fancier plots (clustered dot plots, volcanoes, UMAP panels) are made of underneath, worked through two published figures.

## 2.3 Hands-on: a real RNA-Seq table with Claude

Participants use Claude in the browser (Python, no installs) on liver RNA-Seq counts from [Vernia et al., 2014, *Cell Metabolism*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4156535/): 2 diets by 4 genotypes by 3 mice. They build a metadata table from the sample names, then make a barplot, histograms, violins, scatter plots, a correlation heatmap, and a PCA, each checked against a stated result. A stretch step runs a per-gene t-test, a p-value histogram, Benjamini-Hochberg correction, and a shuffled null. The same dataset returns in Session 4.

## Materials

- Tommy Tang, [Basic statistics for biologists](https://docs.google.com/presentation/d/13zkZ0Wc5bmNFbWn1cawBkmcdcXAAsZGLBbX87oUnqz0/edit) (slides, work in progress)
- Tommy Tang, [Six types of plots](https://docs.google.com/presentation/d/1yMV3pJjYVnTr1xjP-_6BDO_wT2JKSms0dK1kswwCKeM/edit) (slides, work in progress)
- Reading: [P-values, multiple comparisons, FDR, and q-values](https://divingintogeneticsandgenomics.com/post/understanding-p-value-multiple-comparisons-fdr-and-q-value/)
- Reading: [How to interpret a p-value histogram](http://varianceexplained.org/statistics/interpreting-pvalue-histogram/)
- Reading: [Common statistical tests are linear models](https://lindeloev.github.io/tests-as-linear/) and [an introduction to linear mixed models](https://gkhajduk.github.io/2017-03-09-mixed-models/)
- Reference: [Directory of visualizations](https://clauswilke.com/dataviz/directory-of-visualizations.html), the [ggplot2 cheatsheet](https://github.com/rstudio/cheatsheets/blob/main/data-visualization.pdf), and [ComplexHeatmap annotations](https://jokergoo.github.io/ComplexHeatmap-reference/book/heatmap-annotations.html)
- Recording: added after the session
