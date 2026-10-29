"use client";

import { useEffect } from "react";

// Wires up prev/next buttons for scroll-snap carousels in the static homepage HTML.
// Buttons carry data-carousel-prev / data-carousel-next with the id of the track they control.
export default function CarouselControls() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".w2-track").forEach((track) => {
      const prev = document.querySelector<HTMLButtonElement>(`[data-carousel-prev="${track.id}"]`);
      const next = document.querySelector<HTMLButtonElement>(`[data-carousel-next="${track.id}"]`);
      const step = () => {
        const slide = track.querySelector<HTMLElement>(".w2-slide");
        const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
        return slide ? slide.offsetWidth + gap : track.clientWidth * 0.9;
      };
      const update = () => {
        const max = track.scrollWidth - track.clientWidth - 2;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max;
      };
      const goPrev = () => track.scrollBy({ left: -step(), behavior: "smooth" });
      const goNext = () => track.scrollBy({ left: step(), behavior: "smooth" });
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
        if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      };
      prev?.addEventListener("click", goPrev);
      next?.addEventListener("click", goNext);
      track.addEventListener("scroll", update, { passive: true });
      track.addEventListener("keydown", onKey);
      window.addEventListener("resize", update);
      update();
      cleanups.push(() => {
        prev?.removeEventListener("click", goPrev);
        next?.removeEventListener("click", goNext);
        track.removeEventListener("scroll", update);
        track.removeEventListener("keydown", onKey);
        window.removeEventListener("resize", update);
      });
    });
    return () => cleanups.forEach((c) => c());
  }, []);
  return null;
}
