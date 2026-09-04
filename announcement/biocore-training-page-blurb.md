# Copy for the Bioinformatics Core training page

For https://www.umassmed.edu/biocore/biocore_training/ . Hand this to whoever
edits the site. Everything below is ready to paste; pick the long or the short
version depending on how much room each listing gets on that page.

> The live page sits behind Cloudflare and refuses automated fetches, so this
> copy was not matched line for line against the existing listings. It is
> written to be self-contained and should drop into any of them.

---

## Title

**AI for Bioinformatics Bootcamp** (Fall 2026)

Optional kicker under the title: *Successor to the Sequence Analysis Bootcamp*

---

## Long version (one paragraph)

The Bioinformatics Core's six-week bootcamp pairs the theory of modern genomics,
from bulk RNA-Seq through single-cell to spatial transcriptomics, with the
responsible use of AI in research. It is written for working scientists across
domains, including grad students, postdocs, bench researchers, and core-facility
users, with mixed to low coding background. No prior Linux, programming, or
machine learning experience is assumed, and everything runs in a browser. Every
technique is taught on a real published study from Manuel Garber's lab rather
than toy data, and every analysis runs end to end on Foundry Connect. Two
questions run through all six sessions: understand the theory well enough to
judge what an AI assistant gives you, and use AI to go faster without going
wrong. Responsible AI is not a closing lecture; it is its own session and a
checkpoint inside every other one, which matters when some people in the room
work with patient data. Fall 2026 runs six Fridays, September 18 through
October 23, 1:00 to 4:00 pm, in Amphitheater II (S4-102), except October 16 in
Amphitheater I (S2-102).

## Short version (for a compact listing)

A six-week, hands-on bootcamp on modern genomics, covering bulk RNA-Seq,
single-cell, and spatial transcriptomics, paired with the responsible use of AI
in research. Every method is taught on a real published study from Manuel
Garber's lab and run end to end on Foundry Connect. For working scientists at
any coding level; no prior Linux, programming, or machine learning experience is
assumed. Six Fridays, September 18 through October 23, 2026, 1:00 to 4:00 pm.
Successor to the Sequence Analysis Bootcamp.

---

## Links

| Label on the page | URL |
|---|---|
| Course details and full outline | https://web.dolphinnext.com/biocoreweb/ |
| **Register for Fall 2026** | https://web.dolphinnext.com/biocoreweb/register.html |
| Foundry Connect (account required) | https://viafoundry.umassmed.edu/ |
| Request an HPC cluster account | https://hpc.umassmed.edu/doc/index.php?title=Accounts |
| Questions | biocore@umassmed.edu |

Minimum set if only two links fit: **Course details** and **Register**.

---

## Ready-to-paste HTML

```html
<h3>AI for Bioinformatics Bootcamp <span>(Fall 2026)</span></h3>
<p><em>Successor to the Sequence Analysis Bootcamp</em></p>
<p>The Bioinformatics Core's six-week bootcamp pairs the theory of modern
genomics, from bulk RNA-Seq through single-cell to spatial transcriptomics, with
the responsible use of AI in research. It is written for working scientists
across domains, including grad students, postdocs, bench researchers, and
core-facility users, with mixed to low coding background. No prior Linux,
programming, or machine learning experience is assumed, and everything runs in a
browser. Every technique is taught on a real published study from Manuel
Garber's lab rather than toy data, and every analysis runs end to end on Foundry
Connect. Two questions run through all six sessions: understand the theory well
enough to judge what an AI assistant gives you, and use AI to go faster without
going wrong. Responsible AI is not a closing lecture; it is its own session and a
checkpoint inside every other one, which matters when some people in the room
work with patient data.</p>
<p><strong>Fall 2026:</strong> six Fridays, September 18 through October 23,
1:00 to 4:00 pm. Amphitheater II (S4-102), except October 16 in
Amphitheater I (S2-102).</p>
<p>
  <a href="https://web.dolphinnext.com/biocoreweb/">Course details and full outline</a> &middot;
  <a href="https://web.dolphinnext.com/biocoreweb/register.html">Register for Fall 2026</a> &middot;
  <a href="https://hpc.umassmed.edu/doc/index.php?title=Accounts">Request an HPC account</a>
</p>
```

---

## Decide before sending

1. **Which registration URL the page points to.** Fall 2024 used
   `www.umassmed.edu/biocore/biocore_training/registration-form/`, and the draft
   announcement email still carries that link. The Fall 2026 form is self-hosted
   at `https://web.dolphinnext.com/biocoreweb/register.html`. Either link
   straight to the self-hosted form, or keep the old path and make it redirect.
   Whatever is chosen must match the announcement email, which currently does
   not.
2. **Prerequisite accounts.** If the page lists prerequisites, it needs the
   Foundry membership request path and whether the $90/month/lab fee still
   applies, plus which AI assistant instance participants should use. Both are
   still open in `announcement/registration-email.md`.
3. **Retire or archive the Sequence Analysis Bootcamp listing** so the page does
   not read as if both are running this fall.
