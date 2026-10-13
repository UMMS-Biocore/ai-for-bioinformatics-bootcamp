/* Turns the handout into a slide deck.
   P present / exit, arrows, space, PageUp/PageDown (clickers) move,
   Home/End jump, N toggles presenter notes, W opens a synced presenter window,
   T restarts the clock, F full screen, Esc leaves present mode.
   Each .slide carries data-min (planned minutes) and data-part (its label);
   the clock compares elapsed time with the planned start of the current slide. */
(function () {
  var root = document.documentElement;
  var slides = [], cur = 0, t0 = null, hud = null, tick = null;
  var chan = ('BroadcastChannel' in window) ? new BroadcastChannel('ai101-deck') : null;

  function mmss(min) {
    var s = Math.max(0, Math.round(min * 60));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (x < 10 ? '0' : '') + x;
  }

  function show(k, quiet) {
    if (!slides.length) return;
    cur = Math.max(0, Math.min(slides.length - 1, k));
    slides.forEach(function (s, j) { s.classList.toggle('is-current', j === cur); });
    if (root.classList.contains('presenting')) {
      history.replaceState(null, '', '#' + slides[cur].id);
      slides[cur].scrollTop = 0;
    }
    paint();
    if (chan && !quiet) chan.postMessage({ slide: cur, t0: t0 });
  }

  function paint() {
    if (!hud) return;
    var s = slides[cur];
    hud.querySelector('.part').textContent = s.getAttribute('data-part') || '';
    hud.querySelector('.count').textContent = (cur + 1) + ' / ' + slides.length;
    hud.querySelector('.progress').style.width = ((cur + 1) / slides.length * 100) + '%';
    var plan = parseFloat(s.getAttribute('data-start')) || 0;
    var clock = hud.querySelector('.clock');
    if (t0) {
      var el = (Date.now() - t0) / 60000;
      clock.textContent = 'plan ' + mmss(plan) + ' · now ' + mmss(el);
      clock.classList.toggle('behind', el - plan > 3);
    } else {
      clock.textContent = 'plan ' + mmss(plan) + ' · T starts the clock';
    }
  }

  function present(on, quiet) {
    root.classList.toggle('presenting', on);
    if (on) {
      if (!t0) t0 = Date.now();
      if (!tick) tick = setInterval(paint, 1000);
      show(cur, quiet);
    } else {
      slides.forEach(function (s) { s.classList.remove('is-current'); });
      if (document.fullscreenElement) document.exitFullscreen();
      slides[cur].scrollIntoView();
    }
  }

  function toggleNotes() { root.classList.toggle('show-notes'); }

  document.addEventListener('DOMContentLoaded', function () {
    slides = Array.prototype.slice.call(document.querySelectorAll('.deck .slide'));
    var acc = 0;
    slides.forEach(function (s, k) {
      if (!s.id) s.id = 's' + (k + 1);
      var min = parseFloat(s.getAttribute('data-min')) || 0;
      s.setAttribute('data-start', acc);
      var tag = document.createElement('p');
      tag.className = 'slide-tag';
      tag.textContent = (k + 1) + ' / ' + slides.length + ' · ' + mmss(acc) + (min ? ' · ' + min + ' min' : '');
      s.insertBefore(tag, s.firstChild);
      acc += min;
    });

    hud = document.createElement('div');
    hud.className = 'hud';
    hud.innerHTML = '<span class="progress"></span><span class="part"></span>' +
      '<button type="button" data-go="-1" aria-label="Previous slide">&larr;</button>' +
      '<span class="count"></span>' +
      '<button type="button" data-go="1" aria-label="Next slide">&rarr;</button>' +
      '<span class="clock"></span>' +
      '<button type="button" data-exit aria-label="Leave present mode">Esc</button>';
    document.body.appendChild(hud);
    hud.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.hasAttribute('data-exit')) present(false);
      else show(cur + parseInt(b.getAttribute('data-go'), 10));
    });

    var pb = document.getElementById('present-btn');
    if (pb) pb.addEventListener('click', function () { cur = 0; present(true); });
    var nb = document.getElementById('notes-btn');
    if (nb) nb.addEventListener('click', toggleNotes);
    var wb = document.getElementById('window-btn');
    if (wb) wb.addEventListener('click', openPresenter);

    var m = location.hash.match(/^#s(\d+)$/);
    if (m) cur = parseInt(m[1], 10) - 1;
    var q = location.search;
    if (/[?&]notes\b/.test(q)) root.classList.add('show-notes');
    if (/[?&]present\b/.test(q)) present(true);

    if (chan) chan.onmessage = function (e) {
      if (typeof e.data.slide !== 'number') return;
      if (e.data.t0) t0 = e.data.t0;
      cur = e.data.slide;
      present(true, true);
    };
  });

  function openPresenter() {
    var url = location.pathname + '?present&notes#' + (slides[cur] ? slides[cur].id : 's1');
    window.open(url, 'ai101-presenter', 'width=1200,height=760');
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    var on = root.classList.contains('presenting');
    var k = e.key;
    if (k === 'p' || k === 'P') { present(!on); e.preventDefault(); return; }
    if (k === 'n' || k === 'N') { toggleNotes(); return; }
    if (k === 'w' || k === 'W') { openPresenter(); return; }
    if (!on) return;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ') { show(cur + 1); e.preventDefault(); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { show(cur - 1); e.preventDefault(); }
    else if (k === 'Home') { show(0); e.preventDefault(); }
    else if (k === 'End') { show(slides.length - 1); e.preventDefault(); }
    else if (k === 't' || k === 'T') { t0 = Date.now(); show(cur); }
    else if (k === 'f' || k === 'F') {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (root.requestFullscreen) root.requestFullscreen();
    }
    else if (k === 'Escape') present(false);
  });
})();
