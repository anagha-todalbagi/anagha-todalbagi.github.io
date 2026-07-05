(function () {
  "use strict";

  document.documentElement.classList.add("js");
  if (/[?&]flat\b/.test(location.search)) document.documentElement.classList.add("flat");

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Reveals ---------- */

  var revealed = document.querySelectorAll(".reveal");
  if (!reducedMotion && "IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          ro.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    revealed.forEach(function (el) { ro.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Contact pin: appears after the hero ---------- */

  var heroEl = document.querySelector(".hero");
  if (heroEl && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      document.documentElement.classList.toggle("past-hero", !entries[0].isIntersecting);
    }, { rootMargin: "-64px 0px 0px 0px", threshold: 0 }).observe(heroEl);
  } else {
    document.documentElement.classList.add("past-hero");
  }

  /* ---------- Video facades ---------- */

  document.querySelectorAll(".facade").forEach(function (facade) {
    var button = facade.querySelector("button");
    button.addEventListener("click", function () {
      var id = facade.dataset.video;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = button.getAttribute("aria-label").replace(/^Play: /, "");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      button.replaceWith(iframe);
    });
  });

  /* ---------- Converging streamlines ---------- */

  var canvas = document.getElementById("stream");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var hero = canvas.parentElement;

  var W = 0, H = 0, dpr = 1;
  var STREAMS = 46;
  var SEGMENTS = 90;
  var ampScale = 1;
  var streams = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    STREAMS = Math.max(16, Math.min(46, Math.round(W / 28)));
    ampScale = Math.max(0.45, Math.min(1, W / 1100));
    build();
    draw(lastT);
  }

  function build() {
    streams = [];
    for (var i = 0; i < STREAMS; i++) {
      streams.push({
        y0: (i + 0.5) / STREAMS,
        amp: (14 + 30 * Math.abs(Math.sin(i * 12.9898))) * ampScale,
        freq: 1.1 + (i % 5) * 0.35,
        phase: i * 2.399,
        speed: 0.05 + (i % 7) * 0.012,
        alpha: 0.030 + 0.035 * Math.abs(Math.sin(i * 78.233))
      });
    }
  }

  function smoothstep(t) {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
  }

  var CONV_Y = 0.56;
  var CONV_START = 0.52;
  var CONV_END = 0.9;

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    var convY = H * CONV_Y;
    for (var i = 0; i < streams.length; i++) {
      var s = streams[i];
      ctx.strokeStyle = "rgba(22, 22, 19, " + s.alpha.toFixed(3) + ")";
      ctx.beginPath();
      for (var j = 0; j <= SEGMENTS; j++) {
        var p = j / SEGMENTS;
        var x = p * W;
        var wave = Math.sin(p * s.freq * Math.PI * 2 + s.phase - t * s.speed)
                 + 0.5 * Math.sin(p * s.freq * 4.7 + s.phase * 1.7 - t * s.speed * 1.6);
        var freeY = s.y0 * H + wave * s.amp;
        var blend = smoothstep((p - CONV_START) / (CONV_END - CONV_START));
        var y = freeY + (convY - freeY) * blend;
        if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  var lastT = 0;
  var running = false;
  var rafId = null;

  function frame(ms) {
    lastT = ms / 1000;
    draw(lastT);
    if (running) rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reducedMotion) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  resize();
  window.addEventListener("resize", resize);

  if (reducedMotion) {
    draw(0);
  } else {
    var heroVisible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        heroVisible && !document.hidden ? start() : stop();
      }, { threshold: 0.01 }).observe(hero);
    } else {
      start();
    }
    document.addEventListener("visibilitychange", function () {
      document.hidden || !heroVisible ? stop() : start();
    });
  }
})();
