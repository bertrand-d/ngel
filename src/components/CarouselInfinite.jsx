"use client";

import { useRef, useEffect } from "react";

const DASH = " – ";
const ROW1_ITEMS = [
  "fenêtre",
  "porte fenêtre",
  "porte d'entrée",
  "volet roulant",
  "volet battant",
];
const ROW2_ITEMS = [
  "volet persienne",
  "store solaire",
  "moustiquaire",
  "porte de garage",
  "portail",
];

const SPEED_PX_PER_SEC = 60;

function RowContent({ items }) {
  return (
    <>
      {items.map((word, i) => (
        <span key={i} className="whitespace-nowrap">
          <span className="text-secondary-1">{word}</span>
          {i < items.length - 1 && <span className="text-primary-1 mr-2">{DASH}</span>}
        </span>
      ))}
    </>
  );
}

const COPIES_COUNT = 4;

function MarqueeRow({ items, direction }) {
  const trackRef = useRef(null);
  const contentRef = useRef(null);
  const offsetRef = useRef(0);
  const contentWidthRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const content = contentRef.current;
    if (!track || !content) return;

    const measure = () => {
      if (track.children.length >= 2) {
        const first = track.children[0];
        const second = track.children[1];
        contentWidthRef.current = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
      } else {
        contentWidthRef.current = content.offsetWidth;
      }
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const dir = direction === "ltr" ? -1 : 1;

    const tick = (now) => {
      lastTimeRef.current ??= now;
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const w = contentWidthRef.current;
      if (w <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      offsetRef.current += SPEED_PX_PER_SEC * dt * dir;
      if (dir > 0) {
        if (offsetRef.current >= w) offsetRef.current -= w;
      } else {
        if (offsetRef.current <= -w) offsetRef.current += w;
      }

      const translateX = dir > 0 ? offsetRef.current - w : offsetRef.current;
      track.style.transform = `translateX(${translateX}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [direction]);

  return (
    <div className="overflow-hidden w-full text-lg md:text-xl" aria-hidden="true">
      <div
        ref={trackRef}
        className="inline-flex flex-nowrap gap-2 will-change-transform"
        style={{ width: "max-content" }}
      >
        {Array.from({ length: COPIES_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? contentRef : null}
            className="inline-flex flex-nowrap items-baseline shrink-0"
          >
            <RowContent items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CarouselInfinite() {
  return (
    <div className="flex flex-col gap-4 py-15 marquee">
      <MarqueeRow items={ROW1_ITEMS} direction="ltr" />
      <MarqueeRow items={ROW2_ITEMS} direction="rtl" />
    </div>
  );
}
