"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Site-wide scroll choreography (GSAP + ScrollTrigger, free license).
 * Opt-in via data attributes so pages stay plain markup:
 *   data-hero            hero container (photo zoom/parallax + headline line reveal)
 *   data-parallax="0.2"  element drifts against scroll by that factor
 *   data-clip            image wipes in from the bottom when it enters
 *   data-count           number counts up (uses the element's text, e.g. "2010", "2×", "#2")
 *   data-stagger         direct children rise in sequence
 * All motion is disabled under prefers-reduced-motion.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // ---- Hero
      document.querySelectorAll<HTMLElement>("[data-hero]").forEach((hero) => {
        const img = hero.querySelector<HTMLElement>(".hero__photo img");
        const lines = hero.querySelectorAll<HTMLElement>(".hero__title .line > span");
        const rest = hero.querySelectorAll<HTMLElement>("[data-hero-fade]");
        const tl = gsap.timeline({ defaults: { ease: "power4.out" }, onComplete: () => hero.classList.add("is-ready") });
        if (img) tl.fromTo(img, { scale: 1.18 }, { scale: 1.04, duration: 2.2, ease: "power2.out" }, 0);
        if (lines.length) tl.fromTo(lines, { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.15);
        if (rest.length) tl.fromTo(rest, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1, clearProps: "transform" }, 0.55);
        if (img)
          gsap.to(img, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
      });

      // ---- Parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const f = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(
          el,
          { yPercent: -f * 50 },
          {
            yPercent: f * 50,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // ---- Clip-path image reveals
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0% round 22px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 22px)",
            duration: 1.3,
            ease: "power4.inOut",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
        const inner = el.querySelector("img");
        if (inner)
          gsap.fromTo(inner, { scale: 1.25 }, { scale: 1, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });

      // ---- Count-ups
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const raw = el.textContent || "";
        const m = raw.match(/\d+/);
        if (!m) return;
        const target = parseInt(m[0], 10);
        const [pre, post] = raw.split(m[0]);
        const from = target > 1000 ? target - 40 : 0;
        const obj = { v: from };
        el.textContent = `${pre}${from}${post}`;
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => (el.textContent = `${pre}${Math.round(obj.v)}${post}`),
        });
      });

      // ---- Staggered children
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: el, start: "top 85%", once: true } }
        );
      });

      // ---- Big band text slide
      gsap.utils.toArray<HTMLElement>("[data-slide-x]").forEach((el) => {
        const dir = el.dataset.slideX === "left" ? -1 : 1;
        gsap.fromTo(el, { xPercent: dir * -12 }, { xPercent: dir * 4, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });

    // Refresh once images settle so trigger positions are right
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });

    return () => {
      window.clearTimeout(t);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
