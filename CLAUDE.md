# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Teaching materials and the public website for the AI for Bioinformatics Bootcamp
(UMass Chan Bioinformatics Core, six Fridays, Fall 2026). It is hand-written
static HTML, CSS, and vanilla JS. There is no build step, no package manager, no
test suite, and no server-side code in the deployed site. Content grows one
session per week.

## The privacy boundary is the most important rule here

`.gitignore` excludes `internal/` and `registration/` on purpose. Those folders
hold registrant names, emails, labs, free-text answers, instructor-only notes,
and deploy details. They exist on this machine but are **not** in git and must
never be committed, quoted into a tracked file, or pasted into a public page.

Everything under `site/`, `session*/`, and `README.md` is student-facing and
world-readable. When moving material from `internal/` into `site/`, carry the
teaching content and leave the participant data behind.

## Commands

No build, lint, or test commands exist. Verification is opening the pages.

```bash
# Preview locally (relative links resolve the same as on the server)
python3 -m http.server 8000 --directory site

# Regenerate the public participants page from a registration export.
# The CSV lives outside git; only aggregate counts reach site/participants/stats.js.
python3 internal/participants/build_stats.py path/to/registrations.csv

# Deploy the whole site. Runs without --delete, so removing a page locally
# does not remove it on the server.
rsync -a --chmod=D755,F644 --exclude='.DS_Store' \
  site/ svcgalaxy@umwlresdol02.umassmed.edu:/data/pub/umms/pub/biocoreweb/
```

`internal/site/README.md` is the authoritative deploy and hosting reference.

## Site architecture

The site is served both at `https://biocore.umassmed.edu/` (document root) and at
`https://web.dolphinnext.com/biocoreweb/` (a subpath). **Every internal link must
stay relative** (`../assets/`, `../session1.2/`, `register.html`). An absolute
path breaks the subpath copy silently.

| Path | Role |
|---|---|
| `site/index.html` | Landing page. Keeps its own **inline** copy of the base CSS. |
| `site/assets/bootcamp.css` | The same colors, type, and base components, for every other page. |
| `site/assets/session.css` | Components used only by session pages. Loads after `bootcamp.css`. |
| `site/assets/form.css` | Used by `register.html` and `feedback/`, instead of the session CSS. |
| `site/assets/theme.js` | Light/dark toggle. |
| `site/sessionN.M/index.html` | One page per session part. |
| `site/feedback/index.html` | Post-session questionnaire, linked as `/feedback/?session=N`. |
| `site/participants/` | Aggregate registration stats page plus its generated `stats.js`. |

Because `index.html` duplicates the base CSS inline, a token or base-component
change has to be made in **both** `index.html` and `assets/bootcamp.css`.

### Page conventions

Copy an existing session page rather than starting fresh. Each one carries, in
order: `theme.js` in `<head>` (before the stylesheets, so a dark reader never
sees a flash of light), the topbar with logo and theme toggle, `.crumbs`, the
`.parts` nav listing every part of that session with `aria-current="page"` on
itself, a `.hero.compact` header, `.band` sections, a `.pager` to the previous
and next part, and the shared footer.

Later sessions follow the same numbering: `sessionN.0/` for pre-work if any,
then `sessionN.1/`, `sessionN.2/`, and so on in teaching order. Adding a part
means updating the `.parts` nav and `.pager` links on **every** sibling page,
plus the tables in `README.md` and `sessionN/README.md`.

### Theming

Colors are CSS custom properties defined on `:root`, with dark overriding them
under `:root[data-theme="dark"]`. Light is the default; dark applies only when
the reader toggles it. `theme.js` stores the choice under `bootcamp-theme` in
`localStorage` and stamps `data-theme` on `<html>`, so the choice carries across
every page. Type is a system font stack on purpose: nothing loads from a CDN.

### The resolution-ladder figure

The hand-authored inline SVG on `index.html` has panels 2 and 3 holding the same
35 cells in the same 4 colors, differing only in position, because that is the
point the caption makes. Edit one panel and you must edit the other.

## Registration and feedback backend

The browser posts straight to Google Apps Script; the web server only ever
serves static files and holds no credentials.

```
browser -> GET register.html from umwlresdol02
browser -> POST JSON to script.google.com/macros/s/.../exec
Apps Script -> appendRow (or update the row matching that email) in a Google Sheet
```

The source is `internal/site/apps-script/Code.gs` (gitignored, deployed by hand
inside Google). It handles both the registration form and the feedback form, in
two sheets: `Responses` and `Feedback`.

Things that look wrong but are deliberate:

- **`text/plain` content type.** It keeps the POST a "simple" CORS request so
  the browser sends no preflight. Apps Script cannot answer `OPTIONS`, so
  `application/json` fails in a browser while working in `curl`. Do not "fix" it.
- **Re-submission replaces, matched on lowercased email.** An update rewrites
  only the first 24 columns, so hand-maintained roster columns to the right
  (attendance, notes) survive.
- **Values starting with `=`, `+`, `-`, or `@` get an apostrophe prefix**, so a
  registrant cannot land a live formula in the roster or in Excel after export.
- **`LockService` serializes writes** so simultaneous submissions cannot
  interleave.
- `register.html` refuses to submit while the endpoint string is still the
  literal `APPS_SCRIPT_EXEC_URL` placeholder, rather than discarding answers
  silently. Leave that guard in place.

Editing `Code.gs` does **not** change what the live URL runs. Redeploy with
**Deploy, Manage deployments, edit, Version: New version, Deploy**. Creating a
*new* deployment gives a different URL and the form keeps posting to the old one.

## Participants stats page

`site/participants/stats.js` is generated. Never hand-edit it. `build_stats.py`
reads only the aggregate-safe columns, and folds any answer chosen by fewer than
`MIN_COUNT` (3) people into "Other", dropping even the "Other" bucket if it falls
below that, so no individual can be singled out. Adding a question to the page
means adding it to `QUESTIONS` or `RATINGS` in `build_stats.py` and regenerating,
not editing the output.

## Content sources

`README.md` and `session1/README.md` are the student-facing index of sessions,
plans, and materials; keep their tables in sync with the site as sessions are
added. The AI use disclosure in `README.md` and at `/#ai-disclosure` is part of
the course's own subject matter, so keep it accurate when tooling changes.
