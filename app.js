(function () {
  "use strict";

  /* ------------------------------------------------------------------
     CONTENT — edit here. Everything on the site is rendered from this.
  ------------------------------------------------------------------ */
  var EMAIL = "bhavyashree.p.82@gmail.com";
  var GH = "https://github.com/Pbhavyashree";
  var LI = "https://linkedin.com/in/bhavyashree-prakash5";

  var item = {
    /* ---- projects ---- */
    gridpilot: {
      c: 8, k: "Python · ML", title: "GridPilot", live: true,
      sub: "Runs flexible jobs when German electricity is cheapest and greenest.",
      meta: "Deployed · Python · FastAPI · LightGBM",
      bullets: [
        "One-year backtest vs a nightly cron: <b>−50% cost, −42% CO₂</b>, capturing 97% of perfect-foresight savings.",
        "Backtest is honest: forecasts only use data known at 10:00 the day before, and weather inputs are real <i>forecasts</i>, not hindsight.",
        "Monitoring alerts on <b>silence</b>, not just errors — a stopped ingestor fails nothing."
      ],
      stack: ["Python", "FastAPI", "LightGBM", "pandas", "PostgreSQL", "Prometheus", "Grafana", "Docker"],
      links: [["Live", "https://gridpilot.duckdns.org"], ["Source", GH + "/gridpilot"]]
    },
    energyhub: {
      c: 45, k: "Integration", title: "energy-hub", live: true,
      sub: "API-led MuleSoft layer over German day-ahead power prices.",
      meta: "Deployed · MuleSoft 4 · RAML · DataWeave",
      bullets: [
        "Four Mule apps across system, process and experience layers; two independent upstreams cross-check each other on every request.",
        "Running unattended since early October and logs every poll, successful or not.",
        "<code>NOTES.md</code> documents five bugs that returned well-formed but wrong numbers."
      ],
      stack: ["MuleSoft 4", "RAML", "DataWeave", "MUnit", "PostgreSQL", "Docker", "Caddy"],
      links: [["Live", "https://energy-hub.duckdns.org"], ["Source", GH + "/energy-hub"]]
    },
    bahnwatch: {
      c: 160, k: "Real-time", title: "bahnwatch", live: true,
      sub: "Tells me when to leave for my commute, not just what's late.",
      meta: "Deployed · Python · FastAPI · WebSockets",
      bullets: [
        "Runs on the live VBB feed for a journey I actually make every day.",
        "Alerts on the shift in <i>leave time</i> (with hysteresis and a daily cap), because an alerter that cries wolf gets muted.",
        "Plans backwards through real train services instead of subtracting minutes."
      ],
      stack: ["Python", "FastAPI", "WebSockets", "asyncio", "NumPy", "SQLite"],
      links: [["Live", "https://bahnwatch.duckdns.org"], ["Source", GH + "/bahnwatch"]]
    },
    tracker: {
      c: 350, k: "Backend · TypeScript", title: "Shipment Tracking Aggregator", live: true,
      sub: "Many unreliable carrier APIs behind one reliable contract.",
      meta: "Deployed on Render · NestJS · 68 tests",
      bullets: [
        "Circuit breakers, retry with backoff + jitter, and token-bucket rate limiting to stay inside partner quotas.",
        "HMAC-signed webhooks; each carrier normalised to one schema at the adapter boundary."
      ],
      stack: ["TypeScript", "NestJS", "Docker", "Jest", "Render"],
      links: [["Live", "https://tracking-aggregator.onrender.com"], ["Source", GH]]
    },
    warehouse: {
      c: 205, k: "Data · SQL", title: "Parcel Analytics Warehouse",
      big: "1,592→0.95 ms", sub: "Scan-history query on 12.4M rows.", ci: true,
      meta: "PostgreSQL 16 · CI green",
      bullets: [
        "Star schema with <b>2M shipments and 10.4M scan events</b>, range-partitioned monthly.",
        "Every index justified by a before/after measurement; one query gained nothing, and the write-up says so."
      ],
      stack: ["PostgreSQL 16", "Partitioning", "Docker", "GitHub Actions"],
      links: [["Source & benchmarks", GH + "/parcel-analytics-warehouse"]]
    },
    ledger: {
      c: 270, k: "Data · Correctness", title: "Double-Entry Ledger", ci: true,
      sub: "Accounting rules enforced by the database, not the app.",
      meta: "PostgreSQL · PL/pgSQL · CI green",
      bullets: [
        "Entries must balance to zero; posted entries are immutable; corrections are reversals.",
        "A test reproduces a concurrent-withdrawal anomaly deterministically and proves SERIALIZABLE prevents it."
      ],
      stack: ["PostgreSQL 16", "PL/pgSQL", "Docker", "GitHub Actions"],
      links: [["Source", GH + "/ledger-core"]]
    },
    gitops: {
      c: 190, k: "DevOps", title: "GitOps Delivery Pipeline",
      sub: "Commit to running workload on Kubernetes, fully reproducible.",
      meta: "FastAPI · Helm · ArgoCD · 97% coverage",
      bullets: [
        "CI's last step writes the image tag to git; an in-cluster ArgoCD agent does the rest.",
        "18 tests at 97% coverage; runs on a local kind cluster."
      ],
      stack: ["FastAPI", "Helm", "ArgoCD", "kind", "Prometheus", "GitHub Actions"],
      links: [["Source", GH + "/gitops-pipeline"]]
    },
    flags: {
      c: 30, k: "Full-stack", title: "Feature Flag & A/B Service",
      sub: "Multi-tenant flags with deterministic percentage rollouts.",
      meta: "NestJS · React · 114 tests",
      bullets: [
        "Same user always lands in the same variant (deterministic bucketing).",
        "React + TypeScript operator console; 114 tests across both, CI on every merge."
      ],
      stack: ["NestJS", "TypeORM", "MySQL", "React", "Vite", "Jest"],
      links: [["Service", GH + "/feature-flag-service"], ["Console", GH + "/flag-console"]]
    },
    applytrack: {
      c: 100, k: "Django", title: "Applytrack", live: true,
      sub: "Job-application tracker built with Django.",
      meta: "Deployed · Django · DRF",
      bullets: ["Django ORM, migrations, admin and a DRF API.", "Live on the same free-tier server as my other projects."],
      stack: ["Django", "DRF", "SQL"],
      links: [["Live", "https://applytrack-bp.duckdns.org"], ["Source", GH + "/applytrack"]]
    },

    /* ---- recruiter stats ---- */
    s1: { c: 8, k: "Cognizant", big: "25+", title: "Production integrations", sub: "REST / Mule APIs built and maintained in Node.js and Java." },
    s2: { c: 150, k: "Reliability", big: "99.9%", title: "Partner-API uptime", sub: "OAuth 2.0 endpoints I owned and carried the pager for." },
    s3: { c: 205, k: "Shipped", big: "5", title: "Live deployments", sub: "Running unattended on a free-tier cloud server." },
    s4: { c: 270, k: "GridPilot", big: "−50% cost", title: "vs nightly cron", sub: "One-year backtest, no look-ahead. Also −42% CO₂." },
    s5: { c: 350, k: "Warehouse", big: "1,592→0.95 ms", title: "Query tuned", sub: "Partitioning + a measured index on 12.4M rows." },

    /* ---- experience / education ---- */
    cog: {
      c: 210, k: "2022 – 2024", title: "Programmer Analyst", sub: "Cognizant · Bengaluru · Backend & integration",
      meta: "Cognizant Technology Solutions · Bengaluru",
      bullets: [
        "Built and maintained <b>25+ production REST integrations</b> (Node.js, Java, MuleSoft 4) for an enterprise insurance client at 99.9% uptime.",
        "Payment gateway integration, settlement tracking and end-to-end <b>reconciliation</b> of gateway vs internal records.",
        "OAuth 2.0, two-way SSL, and a caching policy in the process API; moved logic out of system APIs so changes had one home.",
        "Built the shared mock endpoints that let the UI team develop in parallel."
      ],
      stack: ["Node.js", "Java", "MuleSoft 4", "REST", "OAuth 2.0"]
    },
    amz: {
      c: 35, k: "2024 – 2026", title: "Operations Associate", sub: "Amazon Logistics · Werder",
      meta: "Amazon Logistics · Werder",
      bullets: ["High-volume parcel receive, sort and dispatch operations."]
    },
    msc: {
      c: 280, k: "Completed Mar 2026", title: "MSc Computer Science", sub: "IU International University, Berlin",
      meta: "IU International University of Applied Sciences · Berlin",
      bullets: [
        "Thesis: <i>A Comparative Analysis of Audio-Based, Lyrics-Based, and Multimodal Deep Learning Approaches to Music Emotion Recognition</i>.",
        "Earlier: BE in Electronics and Electrical Engineering."
      ]
    },
    cert: {
      c: 195, k: "Certified", title: "MuleSoft", sub: "Developer Level 1 · Integration Associate",
      bullets: ["MuleSoft Certified Developer Level 1.", "MuleSoft Certified Integration Associate."]
    },

    /* ---- skills ---- */
    sk1: { c: 210, k: "Languages", title: "Write", chips: ["TypeScript / Node.js", "Python", "Java", "SQL"] },
    sk2: { c: 150, k: "Backend", title: "Build with", chips: ["NestJS", "FastAPI", "Django", "MuleSoft 4", "REST · OAuth 2.0"] },
    sk3: { c: 280, k: "Data", title: "Store in", chips: ["PostgreSQL", "MySQL", "Query tuning", "Partitioning"] },
    sk4: { c: 35, k: "Delivery", title: "Ship with", chips: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "Prometheus"] },
    sk5: { c: 320, k: "Spoken", title: "Languages", chips: ["English C1", "German B1", "Hindi native"] },

    /* ---- visitor ---- */
    v1: { c: 210, k: "Origin story", title: "Bengaluru to Berlin", sub: "Engineering degree, then integration work, then a Master's in Berlin.",
      bullets: ["BE in Electronics and Electrical Engineering in Bengaluru.", "Worked on enterprise integrations at Cognizant.", "Moved to Berlin and finished an MSc in Computer Science in 2026."] },
    v2: { c: 300, k: "Thesis", title: "Teaching machines to hear emotion", sub: "Audio, lyrics, or both? Which predicts a song's mood best.",
      bullets: ["Compared audio-only, lyrics-only and multimodal deep learning for music emotion recognition.", "It's how I got into machine learning; GridPilot is where I use it on real systems."] },
    v3: { c: 8, k: "What I care about", title: "Debuggable beats correct", sub: "The scary bugs return a clean answer with the wrong numbers.",
      bullets: ["I build things I can interrogate afterwards: logs, checks and write-ups of what broke.", "Anything can pass its tests on a good day."] },
    hi1: { c: 130, k: "Email", title: "Say hello", sub: EMAIL, href: "mailto:" + EMAIL },
    hi2: { c: 210, k: "LinkedIn", title: "Connect", sub: "linkedin.com/in/bhavyashree-prakash5", href: LI },
    hi3: { c: 0, k: "GitHub", title: "See the code", sub: "github.com/Pbhavyashree", href: GH },

    /* ---- developer ---- */
    w1: { c: 45, k: "War story", title: "Well-formed, wrong", sub: "Five bugs where every assertion passed and the numbers were wrong.",
      bullets: ["Flat price curve from a consumed stream; timestamps shifted two hours by a timezone relabel; an upstream that silently stopped being polled while monitoring reported success.", "All written up in energy-hub's <code>NOTES.md</code>."], links: [["energy-hub", GH + "/energy-hub"]] },
    w2: { c: 160, k: "War story", title: "The 20-minute-wrong leave time", sub: "Every input right, answer wrong: arithmetic doesn't know trains run on timetables.",
      bullets: ["The planner now works backwards through services that exist.", "Swapping a simulator for the real feed exposed a direction-matching bug the fake data could not."], links: [["bahnwatch", GH + "/bahnwatch"]] },
    w3: { c: 270, k: "War story", title: "Two withdrawals of 60 from 100", sub: "Both pass their own check and both commit. Balance: −20.",
      bullets: ["<code>SELECT … FOR UPDATE</code> doesn't help: the constraint spans an aggregate.", "A deterministic test reproduces it and proves SERIALIZABLE prevents it."], links: [["ledger-core", GH + "/ledger-core"]] },
    w4: { c: 8, k: "War story", title: "The backtest that knew the wind", sub: "Using actual weather instead of forecasts made everything look great and mean nothing.",
      bullets: ["Inputs are now weather forecasts issued two days earlier.", "A price forecast 38 hours out was wrong on level but right on shape, and a scheduler only needs the shape."], links: [["GridPilot", GH + "/gridpilot"]] },
    bench: { c: 205, k: "Benchmarks", title: "Measured, not guessed", bench: [
      ["Parcel scan history", "1,592 → 0.95 ms", 99.9],
      ["Customer full history", "271 → 13.4 ms", 95],
      ["Regional revenue (matview)", "979 → 14.5 ms", 98.5],
      ["SLA breaches (no gain)", "127 → 120 ms", 6]
    ] }
  };

  /* ------------------------------------------------------------------
     PROFILES
  ------------------------------------------------------------------ */
  var profiles = {
    recruiter: {
      name: "Recruiter", color: "#2f7fe8", hue: 215, desc: "The 30-second version",
      nav: [["Impact", "r-impact"], ["Experience", "r-exp"], ["Projects", "r-proj"], ["Skills", "r-skills"]],
      bb: {
        kicker: "Hiring mode",
        title: "Bhavyashree Prakash",
        sub: "Backend &amp; integration engineer. Production APIs in Node.js, TypeScript, Java and Python, plus MuleSoft.",
        meta: [["ok", "Open to roles"], ["", "Berlin · will relocate"], ["pill", "MuleSoft Certified"], ["pill", "MSc CS"], ["pill", "German B1"]],
        actions: [["p", "Contact me", "mailto:" + EMAIL], ["s", "LinkedIn", LI], ["s", "Resume", "resume.pdf", "resume"]]
      },
      rows: [
        { id: "r-impact", title: "Impact at a glance", items: ["s1", "s2", "s3", "s4", "s5"], type: "stat" },
        { id: "r-exp", title: "Experience", sub: "click for details", items: ["cog", "amz", "msc", "cert"] },
        { id: "r-proj", title: "Top 4 projects — start here", items: ["gridpilot", "energyhub", "tracker", "warehouse"], ranked: true },
        { id: "r-skills", title: "Skills", items: ["sk1", "sk2", "sk3", "sk4", "sk5"], type: "chips" }
      ]
    },
    visitor: {
      name: "Visitor", color: "#f5b82e", hue: 38, desc: "Just looking around",
      nav: [["Try these", "v-try"], ["My story", "v-story"], ["Say hi", "v-hi"]],
      bb: {
        kicker: "Welcome",
        title: "Hi, I'm Bhavyashree.",
        sub: "I build the layer between systems that were never designed to talk to each other. Here are a few things you can actually click on.",
        meta: [["ok", "Based in Berlin"], ["pill", "Engineer"], ["pill", "Commuter-app builder"]],
        actions: [["p", "Try bahnwatch", "https://bahnwatch.duckdns.org"], ["s", "More about me", "#v-story", "scroll"]]
      },
      rows: [
        { id: "v-try", title: "Things you can try right now", items: ["bahnwatch", "gridpilot", "energyhub", "applytrack"] },
        { id: "v-story", title: "My story", items: ["v1", "v2", "v3"] },
        { id: "v-hi", title: "Say hi", items: ["hi1", "hi2", "hi3"] }
      ]
    },
    developer: {
      name: "Developer", color: "#2fbf71", hue: 150, desc: "Show me the code",
      nav: [["Repos", "d-repos"], ["War stories", "d-war"], ["Benchmarks", "d-bench"]],
      bb: {
        kicker: "Source view",
        title: "Show me the code.",
        sub: "Ten repos, the failure logs, and the bugs that returned a perfectly well-formed wrong answer.",
        meta: [["ok", "CI green"], ["pill", "TypeScript"], ["pill", "Python"], ["pill", "PostgreSQL"]],
        actions: [["p", "Open GitHub", GH], ["s", "War stories", "#d-war", "scroll"]]
      },
      rows: [
        { id: "d-repos", title: "Repositories", items: ["gridpilot", "energyhub", "bahnwatch", "tracker", "warehouse", "ledger", "gitops", "flags", "applytrack"] },
        { id: "d-war", title: "War stories", sub: "what broke and what I learned", items: ["w1", "w2", "w3", "w4"] },
        { id: "d-bench", title: "Benchmarks", items: ["bench"] }
      ]
    }
  };

  /* ------------------------------------------------------------------
     HELPERS
  ------------------------------------------------------------------ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var body = document.body;

  function avatar(color) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" fill="' + color + '"/>' +
      '<circle cx="32" cy="40" r="6" fill="#fff"/><circle cx="68" cy="40" r="6" fill="#fff"/>' +
      '<path d="M26 62 Q50 84 74 62" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/></svg>';
  }
  var PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>';
  var INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>';

  function cardHTML(id, type) {
    var d = item[id], cls = "card", inner = "";
    if (d.k) inner += '<span class="k">' + d.k + '</span>';
    if (d.live) inner += '<span class="bd"><i></i>LIVE</span>';
    else if (d.ci) inner += '<span class="bd">CI ✓</span>';
    if (d.big) inner += '<div class="big' + (d.big.length > 8 ? ' sm' : '') + '">' + d.big + '</div>';
    inner += '<div class="t">' + d.title + '</div>';
    if (d.chips) {
      cls += " chipc";
      inner += '<div class="chips">' + d.chips.map(function (c) { return '<span class="chip">' + c + '</span>'; }).join("") + '</div>';
    } else if (d.bench) {
      cls += " benchc";
      inner += '<div class="bench">' + d.bench.map(function (b) {
        return '<div><span>' + b[0] + '</span><b>' + b[1] + '</b></div><u style="--w:' + b[2] + '%"></u>';
      }).join("") + '</div>';
    } else if (d.sub) {
      inner += '<div class="s">' + d.sub + '</div>';
    }
    var tag = d.href ? "a" : "button";
    var attrs = d.href ? ' href="' + d.href + '"' + (d.href.indexOf("mailto") ? ' target="_blank" rel="noopener"' : "") : ' type="button"';
    return "<" + tag + ' class="' + cls + '" style="--c:' + d.c + '" data-id="' + id + '"' + attrs + ">" + inner + "</" + tag + ">";
  }

  function rowHTML(r) {
    var cards = r.items.map(function (id, i) {
      var c = cardHTML(id, r.type);
      return r.ranked ? '<div class="rk"><span class="num" aria-hidden="true">' + (i + 1) + "</span>" + c + "</div>" : c;
    }).join("");
    return '<section class="row" id="' + r.id + '"><h2>' + r.title + (r.sub ? "<span>" + r.sub + "</span>" : "") + '</h2>' +
      '<button class="arrow l" aria-label="Scroll left" disabled>&#8249;</button>' +
      '<div class="track">' + cards + '</div>' +
      '<button class="arrow r" aria-label="Scroll right">&#8250;</button></section>';
  }

  /* ------------------------------------------------------------------
     SCREENS
  ------------------------------------------------------------------ */
  var current = null, introTimer = null;

  function show(screen) { body.setAttribute("data-screen", screen); window.scrollTo(0, 0); }

  function renderPicker() {
    $("#profiles").innerHTML = Object.keys(profiles).map(function (k) {
      var p = profiles[k];
      return '<button class="profile" data-p="' + k + '"><span class="av">' + avatar(p.color) + '</span>' +
        '<span class="nm">' + p.name + '</span><span class="ds">' + p.desc + '</span></button>';
    }).join("");
  }

  function openProfile(key) {
    var p = profiles[key]; if (!p) return;
    current = key;
    try{sessionStorage.setItem("introSeen","1");}catch(e){}
    document.documentElement.style.setProperty("--h", p.hue);
    $("#curName").textContent = p.name;
    $("#curAv").innerHTML = avatar(p.color);
    document.title = "Bhavyashree Prakash — " + p.name;
    $("#navLinks").innerHTML = p.nav.map(function (n) { return '<a href="#' + n[1] + '" data-scroll="' + n[1] + '">' + n[0] + "</a>"; }).join("");

    var b = p.bb;
    var meta = b.meta.map(function (m) { return '<span class="' + m[0] + '">' + m[1] + "</span>"; }).join("");
    var acts = b.actions.map(function (a) {
      var ext = a[2].indexOf("http") === 0;
      var icon = a[0] === "p" ? PLAY : (a[3] === "scroll" ? INFO : "");
      var extra = a[3] === "scroll" ? ' data-scroll="' + a[2].slice(1) + '"' : a[3] === "resume" ? ' data-resume hidden' : (ext ? ' target="_blank" rel="noopener"' : "");
      return '<a class="btn ' + a[0] + '" href="' + a[2] + '"' + extra + ">" + icon + a[1] + "</a>";
    }).join("");
    $("#bb").innerHTML =
      '<svg class="bb-mark" viewBox="0 0 100 140" aria-hidden="true"><path fill="#fff" fill-rule="evenodd" d="M14 10H62C84 10 94 24 94 40C94 53 87 62 77 67C91 72 100 84 100 99C100 118 88 130 64 130H14Z M38 30V52H58C67 52 71 47 71 41C71 34 67 30 58 30Z M38 80V110H62C72 110 76 104 76 95C76 86 71 80 62 80Z"/></svg>' +
      '<div class="bb-in"><div class="kicker"><i><svg viewBox="0 0 100 140"><path fill="#E50914" fill-rule="evenodd" d="M14 10H62C84 10 94 24 94 40C94 53 87 62 77 67C91 72 100 84 100 99C100 118 88 130 64 130H14Z M38 30V52H58C67 52 71 47 71 41C71 34 67 30 58 30Z M38 80V110H62C72 110 76 104 76 95C76 86 71 80 62 80Z"/></svg></i>' + b.kicker + "</div>" +
      '<h1 class="display">' + b.title + "</h1><p class=\"sub\">" + b.sub + '</p><div class="meta">' + meta + '</div><div class="actions">' + acts + "</div></div>";

    $("#rows").innerHTML = p.rows.map(rowHTML).join("");
    wireRows();
    show("browse");
    $("#nav").classList.remove("solid");

    // only show the Resume button if resume.pdf is actually in the repo
    var rb = $("[data-resume]");
    if (rb) fetch("resume.pdf", { method: "HEAD" }).then(function (r) { if (r.ok) { rb.hidden = false; rb.target = "_blank"; } }).catch(function () {});
  }

  function toPicker() {
    current = null;
    if (location.hash) history.replaceState(null, "", location.pathname);
    document.title = "Bhavyashree Prakash — Who's watching?";
    show("picker");
  }

  function wireRows() {
    document.querySelectorAll(".row").forEach(function (row) {
      var tr = $(".track", row), l = $(".arrow.l", row), r = $(".arrow.r", row);
      function sync() {
        l.disabled = tr.scrollLeft < 8;
        r.disabled = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 8;
      }
      l.onclick = function () { tr.scrollBy({ left: -tr.clientWidth * .85, behavior: "smooth" }); };
      r.onclick = function () { tr.scrollBy({ left: tr.clientWidth * .85, behavior: "smooth" }); };
      tr.addEventListener("scroll", sync, { passive: true });
      sync();
    });
  }

  /* ------------------------------------------------------------------
     MODAL
  ------------------------------------------------------------------ */
  var lastFocus = null;
  function openModal(id) {
    var d = item[id]; if (!d || !d.bullets) return;
    lastFocus = document.activeElement;
    $("#mhead").style.setProperty("--c", d.c);
    $("#mTitle").textContent = d.title;
    var h = '<div class="mmeta">' + (d.live ? '<span class="ok">● Live</span>' : "") + (d.meta ? "<span>" + d.meta + "</span>" : (d.k ? "<span>" + d.k + "</span>" : "")) + "</div>";
    h += "<ul>" + d.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>";
    if (d.stack) h += '<div class="mstack">' + d.stack.map(function (s) { return '<span class="chip">' + s + "</span>"; }).join("") + "</div>";
    if (d.links) h += '<div class="mlinks">' + d.links.map(function (l, i) {
      return '<a class="btn ' + (i ? "s" : "p") + '" href="' + l[1] + '" target="_blank" rel="noopener">' + (i ? "" : PLAY) + l[0] + "</a>";
    }).join("") + "</div>";
    $("#mbody").innerHTML = h;
    $("#modal").classList.add("open");
    body.style.overflow = "hidden";
    $("#mClose").focus();
  }
  function closeModal() {
    $("#modal").classList.remove("open");
    body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ------------------------------------------------------------------
     EVENTS
  ------------------------------------------------------------------ */
  document.addEventListener("click", function (e) {
    var t = e.target;
    var pf = t.closest(".profile");
    if (pf) { history.replaceState(null, "", "#" + pf.dataset.p); openProfile(pf.dataset.p); return; }
    if (t.closest("#switchBtn") || t.closest("#homeLogo")) { e.preventDefault(); toPicker(); return; }
    var sc = t.closest("[data-scroll]");
    if (sc) { e.preventDefault(); var el = document.getElementById(sc.dataset.scroll); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    var cd = t.closest(".card[data-id]");
    if (cd && cd.tagName === "BUTTON") { openModal(cd.dataset.id); return; }
    if (t.id === "modal" || t.closest("#mClose")) closeModal();
    if (t.id === "intro" || t.closest("#intro")) endIntro();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $("#modal").classList.contains("open")) closeModal();
    else if (body.getAttribute("data-screen") === "intro") endIntro();
  });
  window.addEventListener("scroll", function () {
    $("#nav").classList.toggle("solid", window.scrollY > 40);
  }, { passive: true });
  window.addEventListener("hashchange", function () {
    var k = location.hash.slice(1);
    if (profiles[k] && k !== current) openProfile(k);
  });

  function endIntro() {
    if (body.getAttribute("data-screen") !== "intro") return;
    clearTimeout(introTimer);
    try{sessionStorage.setItem("introSeen","1");}catch(e){}
    show("picker");
  }

  /* ------------------------------------------------------------------
     BOOT
  ------------------------------------------------------------------ */
  renderPicker();
  var hashKey = location.hash.slice(1);
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}

  if (profiles[hashKey]) openProfile(hashKey);          // direct link, e.g. /#recruiter
  else if (seen) show("picker");
  else { show("intro"); introTimer = setTimeout(endIntro, reduce ? 900 : 3300); }
})();
