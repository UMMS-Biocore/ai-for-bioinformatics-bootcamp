/**
 * Registration backend for the AI for Bioinformatics Bootcamp.
 *
 * Receives a JSON POST from site/register.html and appends (or replaces) one
 * row in the bound spreadsheet. Deploy as a web app: Execute as "Me",
 * Who has access "Anyone". See README.md in this folder.
 */

var SHEET_NAME = 'Responses';

/** Columns 1..24 are written by the form. Everything after is filled in by hand. */
var RESPONSE_HEADERS = [
  'ID',
  'Submitted',
  'Updated',
  'Email',
  'Name',
  'Lab or PI name',
  'Role',
  'Laptop OS',
  'Accounts held',
  'Account usernames',
  'Command line comfort',
  'Data types',
  'AI tools used',
  'How AI is used today',
  'Human subject data',
  'Confidence about safe AI data use',
  'Rating - how AI and LLMs work',
  'Rating - using AI responsibly',
  'Rating - stats and figures',
  'Rating - bulk vs single-cell vs spatial',
  'Rating - Foundry Connect analysis',
  'Rating - protecting data and reproducibility',
  'Anything else to cover',
  'Taken a previous bootcamp'
];

/** Roster columns. The form never touches these, so notes survive a re-submission. */
var ROSTER_HEADERS = [
  'Confirmed',
  'Foundry account verified',
  'Session 1', 'Session 2', 'Session 3',
  'Session 4', 'Session 5', 'Session 6',
  'Capstone',
  'Needs loaner laptop',
  'Follow-up needed',
  'Notes'
];

/** Payload keys, in the order they map onto RESPONSE_HEADERS columns 4..24. */
var FIELD_ORDER = [
  'email', 'name', 'lab', 'role', 'os', 'accounts', 'usernames', 'cli',
  'dataTypes', 'aiTools', 'aiUses', 'humanData', 'confidence',
  'r1', 'r2', 'r3', 'r4', 'r5', 'r6',
  'anythingElse', 'takenBefore'
];

var REQUIRED = [
  'email', 'name', 'lab', 'role', 'os', 'accounts', 'cli',
  'dataTypes', 'aiTools', 'aiUses', 'humanData', 'confidence',
  'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'takenBefore'
];

var EMAIL_COL = 4;               // 1-indexed column holding the email
var RESPONSE_WIDTH = RESPONSE_HEADERS.length;

// ---------------------------------------------------------------------------

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  } catch (err) {
    return json({ ok: false, error: 'The server is busy. Please try again in a moment.' });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'Empty request.' });
    }

    var data = JSON.parse(e.postData.contents);

    // Honeypot. Report success so a bot has no signal to adapt to, but write nothing.
    if (data.website) {
      return json({ ok: true, status: 'created' });
    }

    var missing = REQUIRED.filter(function (k) {
      return !data[k] || !String(data[k]).trim();
    });
    if (missing.length) {
      return json({ ok: false, error: 'Missing required answers: ' + missing.join(', ') });
    }

    var email = String(data.email).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return json({ ok: false, error: 'That email address does not look valid.' });
    }

    var sheet = getSheet();
    var now = new Date();
    var existingRow = findRowByEmail(sheet, email);

    var values = FIELD_ORDER.map(function (k) { return safe(data[k]); });

    if (existingRow > 0) {
      // Overwrite only columns 1..RESPONSE_WIDTH so roster notes to the right survive.
      var id = sheet.getRange(existingRow, 1).getValue();
      var submitted = sheet.getRange(existingRow, 2).getValue();
      sheet.getRange(existingRow, 1, 1, RESPONSE_WIDTH)
           .setValues([[id, submitted, now].concat(values)]);
      return json({ ok: true, status: 'updated' });
    }

    var nextId = Math.max(0, sheet.getLastRow() - 1) + 1;
    sheet.appendRow([nextId, now, ''].concat(values));
    return json({ ok: true, status: 'created' });

  } catch (err) {
    return json({ ok: false, error: String((err && err.message) || err) });
  } finally {
    lock.releaseLock();
  }
}

/** Health check: open the /exec URL in a browser and you should see ok. */
function doGet() {
  return json({ ok: true, service: 'bootcamp-registration' });
}

// ---------------------------------------------------------------------------

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    var headers = RESPONSE_HEADERS.concat(ROSTER_HEADERS);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function findRowByEmail(sheet, email) {
  var last = sheet.getLastRow();
  if (last < 2) return -1;
  var col = sheet.getRange(2, EMAIL_COL, last - 1, 1).getValues();
  var needle = email.toLowerCase();
  for (var i = 0; i < col.length; i++) {
    if (String(col[i][0]).trim().toLowerCase() === needle) return i + 2;
  }
  return -1;
}

/**
 * Neutralize spreadsheet formula injection. A field beginning with =, +, - or @
 * is evaluated as a formula by Sheets and by Excel after export, so a
 * registrant could otherwise run something in whatever opens the roster.
 * Prefixing with an apostrophe forces it to stay text.
 */
function safe(v) {
  var s = (v === null || v === undefined) ? '' : String(v);
  s = s.slice(0, 5000);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to create the header row without waiting for a submission. */
function setup() {
  var sheet = getSheet();
  Logger.log('Ready. Sheet "%s" has %s columns.', SHEET_NAME, sheet.getLastColumn());
}
