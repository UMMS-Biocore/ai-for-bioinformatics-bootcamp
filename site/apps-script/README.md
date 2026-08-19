# Deploying the registration backend

Twenty minutes, once. Nothing here runs on `umwlresdol02`: the participant's
browser talks straight to Google, so the machine only ever serves static files.

```
participant browser ──POST JSON──> script.google.com/…/exec ──appendRow──> Google Sheet
        │
        └── loads register.html from umwlresdol02.umassmed.edu
```

## 0. Pick the Google account first

Whichever account creates the Sheet **owns the roster permanently**, and moving
it later means moving the Apps Script too. Use a UMass Chan Google Workspace
account if you have one, not a personal Gmail. This is a list of colleagues'
names and email addresses, so it belongs inside an institutional boundary.

## 1. Create the spreadsheet

New Google Sheet, name it something like `Bootcamp Fall 2026 registrations`.
Leave it empty. The script writes its own header row.

## 2. Attach the script

From that Sheet: **Extensions → Apps Script**. Delete the placeholder
`myFunction`, paste all of `Code.gs`, and save.

Because the script is created *from* the Sheet it is container-bound, so
`SpreadsheetApp.getActiveSpreadsheet()` resolves on its own and there is no
spreadsheet ID to paste anywhere.

Run `setup` once from the editor (select it in the function dropdown, press
Run). Google will ask you to authorize; approve it. You should see the header
row appear in the Sheet.

## 3. Deploy as a web app

**Deploy → New deployment → Web app.**

| Setting | Value | Why |
|---|---|---|
| Execute as | **Me** | The script writes as you, so registrants need no Google access to the Sheet. |
| Who has access | **Anyone** | Must be "Anyone", not "Anyone with a Google account", or registrants get a login wall. |

Copy the **Web app URL**. It ends in `/exec`.

Open that URL in a browser. You should see `{"ok":true,"service":"bootcamp-registration"}`.
If you get a login page instead, access is not set to "Anyone".

## 4. Point the form at it

**Done.** `site/register.html` holds the live `/exec` URL and the form is
deployed. The `APPS_SCRIPT_EXEC_URL` string still appears once, in a guard that
refuses to submit if the endpoint is ever reset to the placeholder. Leave it.

## 5. Test before announcing

Submit the form once yourself. Confirm a row lands in the Sheet, then submit
**again with the same email** and confirm it updates that row instead of adding
a second one.

While testing, type something in a text field beginning with `=`. It should
appear in the Sheet as literal text, not as a formula.

Delete your test rows before the announcement goes out.

## Re-deploying after an edit

Editing `Code.gs` does **not** change what the live URL runs. You must
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**.
Creating a *new deployment* instead gives you a different URL and the form
keeps posting to the old one, which is the usual way this breaks.

## Notes on the design

**Why `text/plain`.** The form posts JSON with a `text/plain` content type. That
keeps it a "simple" CORS request so the browser sends no preflight. Apps Script
cannot answer an `OPTIONS` preflight, so `application/json` would fail in the
browser while working perfectly in `curl`. Do not "fix" the content type.

**Re-submission replaces, it does not duplicate.** Matching is on lowercased
email. An update rewrites only the first 24 columns, so anything you have typed
in the roster columns to the right (attendance, notes) survives.

**Formula injection is neutralized.** A value starting with `=`, `+`, `-` or `@`
gets an apostrophe prefix, so a registrant cannot land a live formula in your
roster or in Excel after you export it.

**Concurrency.** `LockService` serializes writes, so two people submitting at
the same moment cannot interleave and corrupt a row.

**What this does not have.** No CAPTCHA and no rate limiting, only a honeypot.
A determined actor could submit junk. For an internal course announced by email
that is the right trade, but if the URL ends up somewhere public, watch the
Sheet. Nothing verifies that an email address is real or belongs to the person
typing it, which SSO used to guarantee.
