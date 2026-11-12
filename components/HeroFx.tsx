"use client";

import { useEffect } from "react";

// Interactions for the full-screen hero (content/hero-v3.html): cursor glow, card parallax,
// magnetic CTA, cycling headline word and an illustrative animated market line.
export default function HeroFx() {
  useEffect(() => {
    const hero = document.getElementById("hx");
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Cursor glow + card parallax + magnetic button
    const cards = Array.from(hero.querySelectorAll<HTMLElement>(".hx-card"));
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
        c.style.transform = `translate3d(${dx * d * -10}px, ${dy * d * -10}px, 0)`;
      });
      if (magnet) {
        const b = magnet.getBoundingClientRect();
        const mx = e.clientX - (b.left + b.width / 2);
        const my = e.clientY - (b.top + b.height / 2);
        const dist = Math.hypot(mx, my);
        magnet.style.transform = dist < 140 ? `translate(${mx * 0.18}px, ${my * 0.25}px)` : "";
      }
    };
    const onLeave = () => {
      cards.forEach((c) => (c.style.transform = ""));
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
        }, 420);
      }, 2800);
      cleanups.push(() => window.clearInterval(t));
    }

    // Illustrative market line
    const stage = document.getElementById("hx-stage");
    const canvas = document.getElementById("hx-canvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (stage && canvas && ctx) {
      const step = 14;
      let w = 0, h = 0, offset = 0, raf = 0, visible = true;
      let pointerX: number | null = null;
      const pts: number[] = [];
      let v = 0.55;
      const next = () => {
        v += (Math.random() - 0.48) * 0.07 + (0.55 - v) * 0.04;
        v = Math.min(0.85, Math.max(0.2, v));
        return v;
      };
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = stage.clientWidth;
        h = stage.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        while (pts.length < Math.ceil(w / step) + 3) pts.push(next());
      };
      const yAt = (i: number) => h - pts[i] * h;
      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const xs = (i: number) => i * step - offset;
        // area
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, "rgba(242,169,59,0.28)");
        grad.addColorStop(1, "rgba(242,169,59,0)");
        ctx.beginPath();
        ctx.moveTo(xs(0), yAt(0));
        for (let i = 1; i < pts.length; i++) {
          const xc = (xs(i - 1) + xs(i)) / 2;
          ctx.quadraticCurveTo(xs(i - 1), yAt(i - 1), xc, (yAt(i - 1) + yAt(i)) / 2);
        }
        ctx.lineTo(xs(pts.length - 1), h);
        ctx.lineTo(xs(0), h);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        // line
        ctx.beginPath();
        ctx.moveTo(xs(0), yAt(0));
        for (let i = 1; i < pts.length; i++) {
          const xc = (xs(i - 1) + xs(i)) / 2;
          ctx.quadraticCurveTo(xs(i - 1), yAt(i - 1), xc, (yAt(i - 1) + yAt(i)) / 2);
        }
        ctx.strokeStyle = "#F2A93B";
        ctx.lineWidth = 2.5;
        ctx.shadowColor = "rgba(242,169,59,0.6)";
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.shadowBlur = 0;
        // crosshair
        if (pointerX !== null && pointerX > 0 && pointerX < w) {
          const i = Math.min(pts.length - 1, Math.max(0, Math.round((pointerX + offset) / step)));
          const y = yAt(i);
          ctx.strokeStyle = "rgba(255,255,255,0.35)";
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.beginPath();
          ctx.moveTo(pointerX, 0);
          ctx.lineTo(pointerX, h);
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = "#F2A93B";
          ctx.beginPath();
          ctx.arc(pointerX, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      };
      const tick = () => {
        if (visible && !document.hidden) {
          offset += 0.6;
          if (offset >= step) {
            offset -= step;
            pts.shift();
            pts.push(next());
          }
          draw();
        }
        raf = requestAnimationFrame(tick);
      };
      const onStageMove = (e: PointerEvent) => {
        pointerX = e.clientX - stage.getBoundingClientRect().left;
        if (reduce) draw();
      };
      const onStageLeave = () => {
        pointerX = null;
        if (reduce) draw();
      };
      resize();
      draw();
      if (!reduce) raf = requestAnimationFrame(tick);
      const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
      io.observe(stage);
      window.addEventListener("resize", resize);
      hero.addEventListener("pointermove", onStageMove);
      hero.addEventListener("pointerleave", onStageLeave);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("resize", resize);
        hero.removeEventListener("pointermove", onStageMove);
        hero.removeEventListener("pointerleave", onStageLeave);
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);
  return null;
}
