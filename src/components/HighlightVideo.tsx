"use client";

import { useEffect, useRef, useState } from "react";
import { highlightVideo } from "@/lib/media";

/** Muted, looping career-highlight clip. Respects reduced-motion (no autoplay). */
export default function HighlightVideo({ label }: { label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      else {
        v.pause();
        setPlaying(false);
      }
    }, { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video-card">
      <video
        ref={ref}
        src={highlightVideo.src}
        poster={highlightVideo.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
      <button type="button" className="video-card__toggle" onClick={toggle} aria-pressed={playing}>
        {playing ? "Pause" : "Play"} clip
      </button>
    </div>
  );
}
