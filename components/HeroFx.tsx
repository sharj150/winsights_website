"use client";

import { useEffect } from "react";

// Interactions for the full-screen hero (content/hero-v3.html): live TradingView widgets,
// background price-action line, cursor glow, 3D panel tilt, card parallax, magnetic CTA, cycling headline
// word and a live London clock with London / New York session status.
export default function HeroFx() {
  useEffect(() => {
    const hero = document.getElementById("hx");
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // TradingView widgets (real market data)
    hero.querySelectorAll<HTMLElement>("[data-tv-src]").forEach((slot) => {
      if (slot.dataset.tvLoaded) return;
      slot.dataset.tvLoaded = "1";
      const wrap = document.createElement("div");
      wrap.className = "tradingview-widget-container";
      wrap.style.cssText = "height:100%;width:100%";
      const inner = document.createElement("div");
      inner.className = "tradingview-widget-container__widget";
      inner.style.cssText = slot.id === "hx-tv-chart" ? "height:calc(100% - 22px);width:100%" : "height:100%;width:100%";
      wrap.appendChild(inner);
      if (slot.id === "hx-tv-chart") {
        const credit = document.createElement("div");
        credit.className = "tradingview-widget-copyright";
        credit.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">Live data by TradingView</a>';
        wrap.appendChild(credit);
      }
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = slot.dataset.tvSrc || "";
      s.innerHTML = slot.dataset.tvConfig || "{}";
      wrap.appendChild(s);
      slot.appendChild(wrap);
    });

    // London clock + session status
    const fmt = (tz: string) =>
      new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", weekday: "short", hour12: false }).formatToParts(new Date());
    const status = () => {
      const part = (p: Intl.DateTimeFormatPart[], t: string) => p.find((x) => x.type === t)?.value || "";
      const lon = fmt("Europe/London");
      const ny = fmt("America/New_York");
      const mins = (p: Intl.DateTimeFormatPart[]) => parseInt(part(p, "hour"), 10) * 60 + parseInt(part(p, "minute"), 10);
      const weekday = (p: Intl.DateTimeFormatPart[]) => !["Sat", "Sun"].includes(part(p, "weekday"));
      const clock = document.getElementById("hx-clock");
      if (clock) clock.textContent = `London ${part(lon, "hour")}:${part(lon, "minute")}`;
      const set = (id: string, open: boolean, label: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle("open", open);
        el.innerHTML = `<i></i>${label} ${open ? "open" : "closed"}`;
      };
      set("hx-lon", weekday(lon) && mins(lon) >= 480 && mins(lon) < 990, "London");
      set("hx-ny", weekday(ny) && mins(ny) >= 570 && mins(ny) < 960, "New York");
    };
    status();
    const clockTimer = window.setInterval(status, 15000);
    cleanups.push(() => window.clearInterval(clockTimer));

    // Pointer: glow, card parallax, panel tilt, magnetic button
    const cards = Array.from(hero.querySelectorAll<HTMLElement>(".hx-card"));
    const panel = document.getElementById("hx-panel");
    const magnet = document.getElementById("hx-magnet");
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      hero.style.setProperty("--mx", `${x}px`);
      hero.style.setProperty("--my", `${y}px`);
      if (reduce) return;
      const dx = (x / r.width - 0.5) * 2;
      const dy = (y / r.height - 0.5) * 2;
      cards.forEach((c) => {
        const d = parseFloat(c.dataset.depth || "1");
        c.style.transform = `translate3d(${dx * d * -12}px, ${dy * d * -12}px, 0)`;
      });
      if (panel) panel.style.transform = `rotateY(${dx * 6}deg) rotateX(${dy * -5}deg)`;
      if (magnet) {
        const b = magnet.getBoundingClientRect();
        const mx = e.clientX - (b.left + b.width / 2);
        const my = e.clientY - (b.top + b.height / 2);
        magnet.style.transform = Math.hypot(mx, my) < 150 ? `translate(${mx * 0.18}px, ${my * 0.25}px)` : "";
      }
    };
    const onLeave = () => {
      cards.forEach((c) => (c.style.transform = ""));
      if (panel) panel.style.transform = "";
      if (magnet) magnet.style.transform = "";
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    });

    // Cycling headline ending
    const cycle = document.getElementById("hx-cycle");
    const words = ["invest in it.", "trade it.", "buy it.", "sell it."];
    if (cycle && !reduce) {
      const span = cycle.querySelector("span");
      let i = 0;
      const t = window.setInterval(() => {
        if (!span) return;
        cycle.classList.add("out");
        window.setTimeout(() => {
          i = (i + 1) % words.length;
          span.textContent = words[i];
          cycle.classList.remove("out");
          cycle.classList.add("in");
          requestAnimationFrame(() => requestAnimationFrame(() => cycle.classList.remove("in")));
        }, 200);
      }, 2000);
      cleanups.push(() => window.clearInterval(t));
    }

    // Background price action: a faint, slowly scrolling market line behind the hero
    const canvas = document.getElementById("hx-bgchart") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const step = 9;
      let w = 0, h = 0, raf = 0, offset = 0, visible = true;
      let price = 0.5, trend = 0, pts: number[] = [];
      const next = () => {
        if (Math.random() < 0.04) trend = (Math.random() - 0.5) * 0.012;
        const shock = Math.random() < 0.03 ? (Math.random() - 0.5) * 0.09 : 0;
        price += trend + (Math.random() - 0.5) * 0.022 + shock + (0.5 - price) * 0.012;
        price = Math.min(0.92, Math.max(0.08, price));
        return price;
      };
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = hero.clientWidth;
        h = hero.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        while (pts.length < Math.ceil(w / step) + 3) pts.push(next());
      };
      const top = () => h * 0.28;
      const span = () => h * 0.55;
      const yAt = (i: number) => top() + (1 - pts[i]) * span();
      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const x = (i: number) => i * step - offset;
        const path = () => {
          ctx.beginPath();
          ctx.moveTo(x(0), yAt(0));
          for (let i = 1; i < pts.length; i++) ctx.lineTo(x(i), yAt(i));
        };
        const grad = ctx.createLinearGradient(0, top(), 0, h);
        grad.addColorStop(0, "rgba(242,169,59,0.10)");
        grad.addColorStop(1, "rgba(242,169,59,0)");
        path();
        ctx.lineTo(x(pts.length - 1), h);
        ctx.lineTo(x(0), h);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        path();
        ctx.strokeStyle = "rgba(242,169,59,0.32)";
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.stroke();
        // last price marker
        const li = pts.length - 2;
        ctx.setLineDash([3, 6]);
        ctx.strokeStyle = "rgba(242,169,59,0.22)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, yAt(li));
        ctx.lineTo(w, yAt(li));
        ctx.stroke();
        ctx.setLineDash([]);
      };
      const frame = () => {
        if (visible && !document.hidden) {
          offset += 0.35;
          if (offset >= step) {
            offset -= step;
            pts.shift();
            pts.push(next());
          }
          draw();
        }
        raf = requestAnimationFrame(frame);
      };
      resize();
      draw();
      if (!reduce) raf = requestAnimationFrame(frame);
      const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
      io.observe(hero);
      window.addEventListener("resize", resize);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("resize", resize);
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);
  return null;
}
