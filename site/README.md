# Bootcamp website

**Target:** https://biocore.umassmed.edu/bootcamp/

| URL | Page |
|---|---|
| `/bootcamp/` | Landing page for the whole bootcamp |
| `/bootcamp/register.html` | Registration form |
| `/bootcamp/session1.0/` | Session 1 pre-work: setup, four green lights |
| `/bootcamp/session1.1/` | Session 1 opening: welcome and the six-week map (Alper) |
| `/bootcamp/session1.2/` | How AI actually works (Eric Ma), links to his interactive lesson |
| `/bootcamp/session1.3/` | Pilot or passenger (Tommy Tang), slides and demo links |
| `/bootcamp/session1.4/` | Session 1 closing: flight rules and daily practice (Alper) |

Each later session follows the same pattern: `sessionN.0/` for pre-work if any, then
`sessionN.1/`, `sessionN.2/`, and so on in teaching order.

**Previous location:** https://web.dolphinnext.com/biocoreweb/ (served from
`/data/pub/umms/pub/biocoreweb` on `umwlresdol02.umassmed.edu`). Links in the
registration email still point there.

**Deploy:** copy `index.html`, `register.html`, `assets/`, and every `session*/`
folder into the `bootcamp/` directory of the biocore.umassmed.edu web root. Keep
the layout as is: session pages use relative links (`../assets/`, `../session1.2/`),
so they work under any base path as long as the folders stay siblings.

Static files. No build step, no dependencies, no server-side code.

| File | What it is |
|---|---|
| `index.html` | Public landing page. Course outline, resolution ladder, schedule, materials. Keeps its own inline CSS. |
| `register.html` | The registration form. Posts to Apps Script, which writes to a Google Sheet. |
| `assets/bootcamp.css` | Colors, type, and base components, copied from `index.html`. |
| `assets/session.css` | Components used only by the session pages. |
| `assets/theme.js` | Light and dark toggle, shared with `index.html` through the same stored choice. |
| `sessionN.M/index.html` | One page per session part. |
| `apps-script/Code.gs` | The backend. Lives in Google, not on your server. |
| `apps-script/README.md` | **Deploy this first.** Twenty minutes, once. |

## How a registration actually travels

```
registrant's browser
    |
    |  1. GET  https://umwlresdol02.umassmed.edu/bootcamp/register.html
    v
umwlresdol02  (static files only)
    |
    |  2. POST JSON  (from the browser, not from your server)
    v
script.google.com/macros/s/.../exec       <- Apps Script, deployed once
    |
    |  3. appendRow, or update the row matching that email
    v
Google Sheet                              <- the roster
```

Your machine never talks to Google. It holds no credentials, no database, and
no long-running process. If Apps Script is unreachable the page still loads and
shows an error with a fallback email address.

## Order of operations

1. Deploy the Apps Script backend. Follow `apps-script/README.md` exactly,
   including the "Anyone" access setting.
2. Paste the `/exec` URL over `APPS_SCRIPT_EXEC_URL` in `register.html`.
   Until you do, the form refuses to submit and says so on screen, rather than
   discarding answers silently.
3. Submit a test registration, confirm the row lands, submit again with the same
   email, and confirm it replaces rather than duplicates. Delete the test rows.
4. Copy both HTML files to the web root on `umwlresdol02.umassmed.edu`.
   `apps-script/` does not need to be served.

## Hosting on umwlresdol02

Any static setup works. Serve `index.html` and `register.html` from the same
directory, since the register buttons use the relative link `register.html`.

**Serve it over HTTPS.** The page collects names and email addresses, and a
browser on a plain-HTTP page will warn or refuse on the cross-origin POST in
some configurations. TLS is functional here, not only good practice.

## What is still open

The Apps Script endpoint is set and the form is live. Remaining:

- The fallback contact address in `register.html` is `biocore@umassmed.edu`.
  Change it if that is not the right inbox.
- Confirm the Wang et al. 2026 citation on the landing page is final.
- Where people request a Foundry membership, and whether the old $90/month/lab
  fee still applies. The membership is listed as required on the landing page,
  but with no link and no cost, which is the gap to close before announcing.
- Delete the test rows from the response Sheet (see below).

## Test rows to delete

An end-to-end test wrote two rows. The Sheet should contain exactly these and
nothing else from testing:

| Email | Why it is there |
|---|---|
| `zz-test-delete-me@example.com` | Written once, then re-submitted. Lab should read "Test Lab CHANGED", proving the update path replaced rather than duplicated. |
| `zz-formula-test@example.com` | Lab field was sent as `=HYPERLINK(...)`. It must appear as literal text, not a live link. |

Three other test posts were correctly refused and must **not** appear:
`zz-bot@example.com` (honeypot), `zz2-test@example.com` (missing answers), and
one malformed address.

## What SSO used to do, and what replaces it

Microsoft Forms would have supplied verified identity for free. A self-hosted
form has none, so:

| Was free with SSO | How it is handled now |
|---|---|
| Verified name and email | The form asks. Nothing proves the address is real or belongs to the sender. |
| One response per person | Matching on lowercased email. Re-submitting replaces the earlier row. |
| Spam blocking | A honeypot field only. No CAPTCHA, no rate limit. |
| Institutional data boundary | Depends entirely on which Google account owns the Sheet. Use a UMass Workspace account. |

For a course announced by internal email this is a reasonable trade. If the URL
ends up somewhere public, watch the Sheet.

## Why this folder is in git and `registration/` is not

These pages contain no registrant information, so they are ordinary versioned
source. `registration/` stays gitignored because it holds the response data and
the roster.

## Design notes

- Light and dark are both defined, variables first, so the pages render
  correctly whether the viewer's OS is set to either or the browser reports
  nothing.
- The resolution-ladder figure on `index.html` is hand-authored inline SVG.
  Panels 2 and 3 deliberately hold the same 35 cells in the same 4 colors,
  because the whole point is that only their positions differ. Edit one panel
  and you must edit the other, or the caption stops being true.
- Type is a system font stack, so nothing loads from a CDN and the pages cannot
  silently fall back to a face nobody chose.
- `Code.gs` prefixes any value starting with `=`, `+`, `-` or `@` with an
  apostrophe, so a registrant cannot land a live formula in the roster, or in
  Excel after export.
