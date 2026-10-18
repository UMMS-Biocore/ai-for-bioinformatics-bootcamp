/* Sign in for the recordings and the members pages, from the topbar.
   Videos (videos/) and members pages (private/) sit behind Apache form login:
   UMass username or email and password, plus an active Foundry account. This
   script puts a Sign in button next to GitHub on every page, asks the server
   whether this browser is signed in by fetching a tiny protected file, and,
   when it is not, swaps each video player for a note pointing at that button.
   The form posts to Apache's login handler, which sends the browser back to
   the page it came from either way. */
(function () {
  var me = document.currentScript;
  var ROOT = new URL("../", me ? me.src : location.href).href;
  var VIDEOS = ROOT + "videos/";
  var MEMBERS = ROOT + "private/";
  var FLAG = "bootcamp-signin-attempt";
  var USER = "bootcamp-signin-user"; // the username only, never the password
  var NEXT = "bootcamp-signin-next"; // a members page to return to after sign in

  function store(key, value) {
    try {
      if (value === undefined) return sessionStorage.getItem(key);
      if (value === null) sessionStorage.removeItem(key);
      else sessionStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    for (var k in attrs) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  function field(id, label, type, autocomplete, name) {
    return el("div", { "class": "signin-field" }, [
      el("label", { "for": id, text: label }),
      el("input", { id: id, name: name, type: type, autocomplete: autocomplete,
                    required: "", spellcheck: "false", autocapitalize: "off" })
    ]);
  }

  var right = document.querySelector(".topbar .right");
  if (!right) return;
  var box = el("div", { "class": "signin" });
  right.insertBefore(box, right.firstChild);

  var panel, form, status, toggle;

  function open(focusPassword) {
    if (!panel) return;
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    var u = form.elements.httpd_username, p = form.elements.httpd_password;
    (focusPassword || u.value ? p : u).focus();
  }

  function close() {
    if (!panel || panel.hidden) return;
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function signedOut(failed) {
    toggle = el("button", { type: "button", "class": "signin-toggle",
                            "aria-expanded": "false", "aria-controls": "signin-panel",
                            text: "Sign in" });
    form = el("form", { method: "post", action: VIDEOS + "dologin.html", novalidate: "" });
    status = el("p", { "class": "signin-error", role: "alert" });
    if (failed) status.textContent =
      "That sign in did not work. Check your password, and that your account has Foundry access.";
    var btn = el("button", { type: "submit", "class": "btn", text: "Sign in" });
    form.appendChild(el("h2", { text: "Sign in" }));
    form.appendChild(el("p", { "class": "signin-lede",
      text: "For the recordings and the members pages. Use your UMass Chan username or email and password; you also need an active Foundry account." }));
    form.appendChild(status);
    form.appendChild(field("signin-user", "Username or email", "text", "username", "httpd_username"));
    form.appendChild(field("signin-pass", "Password", "password", "current-password", "httpd_password"));
    form.appendChild(btn);
    form.appendChild(el("p", { "class": "signin-note",
      text: "No Foundry account yet? Ask the course team. Sign in lasts 8 hours on this browser." }));
    form.addEventListener("submit", function (e) {
      var u = form.elements.httpd_username, p = form.elements.httpd_password;
      if (!u.value.trim() || !p.value) {
        e.preventDefault();
        status.textContent = "Enter your username and password.";
        (u.value.trim() ? p : u).focus();
        return;
      }
      u.value = u.value.trim();
      store(USER, u.value);
      store(FLAG, "1");
      btn.disabled = true;
      btn.textContent = "Signing in…";
    });
    var last = store(USER);
    if (last) form.elements.httpd_username.value = last;

    panel = el("div", { id: "signin-panel", "class": "signin-panel", hidden: "" }, [form]);
    box.appendChild(toggle);
    box.appendChild(panel);

    toggle.addEventListener("click", function () { panel.hidden ? open(false) : close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { close(); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!box.contains(e.target) && !e.target.closest(".video-gate")) close();
    });

    lockVideos();
    if (failed) open(true);
    else if (/[?&]signin\b/.test(location.search) || store(NEXT)) open(false);
  }

  function signedIn() {
    var next = store(NEXT);
    store(NEXT, null);
    if (next && next.indexOf(MEMBERS) === 0 && next !== location.href) {
      location.replace(next);
      return;
    }
    box.classList.add("is-in");
    if (location.href.indexOf(MEMBERS) !== 0)
      box.appendChild(el("a", { "class": "signin-members", href: MEMBERS, text: "Members" }));
    box.appendChild(el("a", { "class": "signin-out", href: VIDEOS + "dologout.html", text: "Sign out" }));
  }

  // Each player becomes a note pointing at the topbar button.
  function lockVideos() {
    var figures = document.querySelectorAll("figure.video");
    if (!figures.length) return;
    document.documentElement.classList.add("videos-locked");
    Array.prototype.forEach.call(figures, function (fig) {
      var video = fig.querySelector("video");
      if (video) {
        // Stop the 401 requests the player would keep making for its file.
        Array.prototype.forEach.call(video.querySelectorAll("source"), function (s) {
          s.removeAttribute("src");
        });
        video.preload = "none";
        video.hidden = true;
        video.load();
      }
      var go = el("button", { type: "button", "class": "btn", text: "Sign in to watch" });
      go.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        open(false);
      });
      fig.insertBefore(el("div", { "class": "video-gate" }, [
        el("p", { text: "Sign in at the top of the page, next to GitHub, to watch this recording." }),
        go
      ]), fig.firstChild);
    });
  }

  fetch(VIDEOS + "signed-in.txt", { credentials: "same-origin", cache: "no-store" })
    .then(function (r) {
      var wasAttempt = store(FLAG) === "1";
      store(FLAG, null);
      if (r.status === 401 || r.status === 403) signedOut(wasAttempt);
      else if (r.ok) signedIn();
    })
    .catch(function () { /* offline or local preview: leave the page alone */ });
})();
