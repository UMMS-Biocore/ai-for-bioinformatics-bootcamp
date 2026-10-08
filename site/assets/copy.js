/* Adds a Copy button to every prompt and command box on the page.
   Copies the box's own text, trimmed, as captured before the button is added.
   Where the clipboard API is unavailable, selects the text so the reader can copy it. */
(function () {
  function select(node) {
    var range = document.createRange();
    range.selectNodeContents(node);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.step blockquote.prompt, .step pre.cmd');
    Array.prototype.forEach.call(boxes, function (box) {
      var text = box.textContent.trim();
      var src = document.createElement('span');
      src.className = 'copy-src';
      while (box.firstChild) src.appendChild(box.firstChild);
      box.appendChild(src);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-live', 'polite');
      btn.addEventListener('click', function () {
        function done(label) {
          btn.textContent = label;
          setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
        }
        function fallback() { select(src); done('Press Ctrl+C'); }
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function () { done('Copied'); }, fallback);
        } else {
          fallback();
        }
      });
      box.classList.add('has-copy');
      box.appendChild(btn);
    });
  });
})();
