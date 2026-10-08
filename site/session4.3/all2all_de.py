# /// script
# requires-python = ">=3.11,<3.14"
# dependencies = ["pydeseq2==0.5.4"]
#
# [tool.uv]
# exclude-newer = "2026-10-01T00:00:00Z"
# ///
"""All-to-all DESeq2 on RSEM expected counts from Foundry run 11724.

Usage: uv run all2all_de.py data/rsem/genes_expression_expected_count.tsv
Writes de_counts.tsv in the current folder and prints it. Takes a few minutes.
The pins above (pydeseq2 0.5.4, every other package as of 2026-10-01) make the
counts match the course's reference chart exactly.
"""
import sys
import time
from itertools import combinations

import numpy as np
import pandas as pd
from pydeseq2.dds import DeseqDataSet
from pydeseq2.ds import DeseqStats

counts_file = sys.argv[1]
GENO = ["wt", "ALAB", "J1c", "J2c"]
GROUPS = [f"{d}.{g}" for d in ("chow", "hfd") for g in GENO]

# Genes as rows, samples as columns; sum rows that share a gene name, round to integers.
x = pd.read_csv(counts_file, sep="\t").drop(columns="transcript")
x = x.groupby("gene").sum().round().astype(int)
x = x[(x >= 10).any(axis=1)]
samples = list(x.columns)
group = pd.Series([s.rsplit(".", 1)[0] for s in samples], index=samples)
assert len(samples) == 24 and sorted(group.unique()) == sorted(GROUPS), "expected 24 samples in 8 groups"
assert (group.value_counts() == 3).all(), "expected 3 replicates per group"
print(f"genes tested: {len(x)}", file=sys.stderr)

# Every pair once. The reference is the earlier group in GROUPS: chow before hfd, wt first.
pairs = [(GROUPS[j], GROUPS[i]) for i, j in combinations(range(len(GROUPS)), 2)]  # (test, ref)

rows = []
for ref in GROUPS[:-1]:
    t0 = time.time()
    meta = pd.DataFrame({"group": pd.Categorical(group, categories=[ref] + [g for g in GROUPS if g != ref])})
    meta.index = samples
    dds = DeseqDataSet(counts=x.T, metadata=meta, design="~group", quiet=True)
    dds.deseq2()
    for test, r in pairs:
        if r != ref:
            continue
        ds = DeseqStats(dds, contrast=["group", test, ref], alpha=0.05, quiet=True)
        ds.summary()
        padj = ds.results_df["padj"]
        ds.lfc_shrink(coeff=f"group[T.{test}]")
        lfc = ds.results_df["log2FoldChange"]
        sig = padj.notna() & (padj < 0.05)
        rows.append({"test": test, "ref": ref,
                     "up": int((sig & (lfc > 1)).sum()), "down": int((sig & (lfc < -1)).sum())})
    print(f"reference {ref}: {time.time() - t0:.0f}s", file=sys.stderr)

out = pd.DataFrame(rows)
out.to_csv("de_counts.tsv", sep="\t", index=False)
print(out.to_string(index=False))
