# Session 3: AI as a Research Co-pilot

**Friday, October 2, 2026 · 1:00 to 4:00 pm · Amphitheater II (S4-102)**

*Eric Ma on AI as a research copilot, and John Damask on AI coding agents. You build a personal, AI-maintained knowledge base of the literature on your own computer, with the Claude or ChatGPT desktop app or in the terminal.*

> Status: in preparation. John is preparing a few slides to open the session; they will be linked here.

## Before class (required)

The exercise works on local files, so it does not run in Claude or ChatGPT in the browser. Before Friday, every participant needs:

1. A paid Claude or ChatGPT subscription.
2. One agent installed and logged in: the [Claude desktop app](https://code.claude.com/docs/en/desktop-quickstart) (Code tab), the [ChatGPT desktop app](https://learn.chatgpt.com/docs/app), or in the terminal [Claude Code](https://code.claude.com/docs/en/terminal-guide) or [Codex CLI](https://learn.chatgpt.com/docs/codex/cli#getting-started).
3. Optional: a free [Paperclip](https://paperclip.gxl.ai/login) account, with Paperclip installed and set up for the agent (`paperclip install`). Without it, the agent searches PubMed Central through NCBI instead.

The install commands for macOS and Windows, and a quick check, are on [session3.0](https://biocore.umassmed.edu/session3.0/). If an install fails, contact us at biocore@umassmed.edu before Friday.

## Parts

| Time | Part | Who | Page |
|---|---|---|---|
| Before | 3.0 Get set up (pre-work) | Bioinformatics Core | [session3.0](https://biocore.umassmed.edu/session3.0/) |
| 1:00 | 3.1 Your own AI knowledge base | John Damask (Amroja LLC) | [session3.1](https://biocore.umassmed.edu/session3.1/) |
| | 3.2 AI as a research copilot | Eric Ma (Moderna) | [session3.2](https://biocore.umassmed.edu/session3.2/) · [demo](https://biocore.umassmed.edu/ired-88/) |

Times are approximate and the running order is not final.

## 3.1 Your own AI knowledge base

Build a knowledge base on atopic dermatitis with the Claude or ChatGPT desktop app, or Claude Code or Codex CLI in the terminal, following Andrej Karpathy's LLM Wiki design: immutable raw sources plus an AI-maintained, linked, cited wiki. Participants write the rules into `AGENTS.md`, ingest a review by hand, search the literature with Paperclip, add a research task tracker, send agents off to research in parallel, build a 3-D graph viewer of the wiki, ask questions answered from the wiki, save insights back, and turn the workflow into a reusable `create-kb` skill. Extra steps ingest a timestamped conference transcript and link straight to one moment in the video.

## 3.2 AI as a research copilot

Eric Ma picks up where John's knowledge base hands off: a knowledge base used inside the analysis, next to the data. One enzyme from his Novartis work (IRED-88), four kinds of data (a deep mutational scan, crystal structure PDB 7OG3, an ESMFold prediction, and a six-paper knowledge base), and one question ladder in marimo notebooks: where do activity-improving mutations come from, and could we have seen them coming?

## Materials

- Eric Ma, [The IRED-88 Research Copilot](https://biocore.umassmed.edu/ired-88/) (the notebooks with code and results; [source](https://github.com/UMMS-Biocore/ired-88-research-copilot))

- Data: [AAD 2026 Denver Global Education Day transcript](https://biocore.umassmed.edu/data/session3/AAD-2026-Denver-global-education-day-transcript.txt), for the extra steps
- John Damask, [the exercise as he wrote it](personal-kb-lesson-v2.txt) (the web page is the formatted version)
- Slides: added before the session
- Recording: added after the session
