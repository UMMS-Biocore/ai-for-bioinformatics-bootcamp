/* Loaded in <head> so a reader who chose dark never sees a flash of light.
   Uses the same storage entry as index.html, so the choice carries across pages. */
(function () {
  var STORE = 'bootcamp-theme';
  try {
    var t = localStorage.getItem(STORE);
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var root = document.documentElement;
    function label() {
      btn.setAttribute('aria-label',
        root.getAttribute('data-theme') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    label();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
      label();
    });
  });
})();
