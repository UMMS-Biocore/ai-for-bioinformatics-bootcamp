# Session 4: Bulk RNA-Seq

**Friday, October 9, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Manuel Garber on why differential expression uses models, in four marimo notebooks. Then an AI agent in VS Code sets up an RNA-seq run on Foundry, and you check it and launch it.*

## Before class (required)

Session 4 is taught from four marimo notebooks: Python notebooks that run in the browser. One small tool, uv, installs Python, marimo, and every package the notebooks need. The install steps for macOS and Windows are on [session4.0](https://biocore.umassmed.edu/session4.0/). If an install fails, contact us at biocore@umassmed.edu.

## Parts

| Part | Who | Page |
|---|---|---|
| 4.0 Get set up (pre-work) | Bioinformatics Core | [session4.0](https://biocore.umassmed.edu/session4.0/) |
| 4.1 Why differential expression uses models | Manuel Garber (UMass Chan) | [session4.1](https://biocore.umassmed.edu/session4.1/) · [slides](../site/slides/session4/Session4_RNA-Seq_Intro_Manuel_Garber.pptx) · [notebooks](https://github.com/UMMS-Biocore/bootcamp-bulk-rnaseq) |
| 4.2 Run RNA-seq on Foundry with an AI agent | Bioinformatics Core | [session4.2](https://biocore.umassmed.edu/session4.2/) |
| 4.3 Homework: JNK-deficient liver | Bioinformatics Core | [session4.3](https://biocore.umassmed.edu/session4.3/) |
| After | Feedback (records attendance) | [feedback](https://biocore.umassmed.edu/feedback/?session=4) |

## 4.1 Why differential expression uses models

DESeq2, edgeR, and limma do not run a t-test on every gene. Manuel Garber's four short notebooks show why: how expression measurements are distributed, how a t-test is already a linear model, what changes when the data are counts, and why a gene measured in three replicates needs to borrow information from all the others.

## 4.2 Run RNA-seq on Foundry with an AI agent

You drive Foundry from an AI agent (Claude Code or Codex) in VS Code. The agent prepares an RNA-seq run in the browser through Foundry Connect, and you check it and press Run yourself. An advanced part fetches the result files straight from Foundry with the [Foundry SDK](https://github.com/UMMS-Biocore/foundry-sdk).

## 4.3 Homework: JNK-deficient liver

Back to the liver count table from [Session 2.4](https://biocore.umassmed.edu/session2.4/), now with DESeq2. You and an AI agent test which genes change with diet and with each JNK knockout, and check the main claim of [Vernia et al., 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4156535/) yourself: that livers without JNK switch on PPARα target genes such as *Fgf21*.

## Materials

- Slides: Manuel Garber, [A brief introduction to RNA-seq](../site/slides/session4/Session4_RNA-Seq_Intro_Manuel_Garber.pptx) (PowerPoint, 17 MB)
- Notebooks: Manuel Garber, [bootcamp-bulk-rnaseq](https://github.com/UMMS-Biocore/bootcamp-bulk-rnaseq) (the four class notebooks; fork of [mgarber/bootcamp-bulk-rnaseq](https://github.com/mgarber/bootcamp-bulk-rnaseq))
- Data: [session4_data.zip](https://biocore.umassmed.edu/data/session4/session4_data.zip) (10 MB; the public array and RNA-seq tables the notebooks read)
- Recordings: on the session pages, after you sign in at the top of the site
- Members only: Manuel's live analysis and his homework are on the [members page](https://biocore.umassmed.edu/private/) (UMass login plus a Foundry account)

## Feedback

After the session, fill in the short feedback form. It records attendance too:
<https://biocore.umassmed.edu/feedback/?session=4>
