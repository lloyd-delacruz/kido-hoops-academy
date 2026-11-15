"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Media } from "@/lib/media";
import Photo from "./Photo";

export default function Gallery({ items }: { items: { item: Media; caption: string }[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index !== null ? items[index] : null;

  return (
    <>
      <div className="gallery">
        {items.map(({ item, caption }, i) => (
          <figure className="gallery__item" key={item.base}>
            <button
              type="button"
              className="gallery__btn"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`View larger: ${caption}`}
            >
              <Photo media={item} sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </button>
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <div onClick={(e) => e.stopPropagation()}>
            <Photo media={current.item} sizes="90vw" priority />
            <p className="lightbox__caption">
              {current.caption} · {index! + 1} / {items.length}
            </p>
          </div>
          <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
