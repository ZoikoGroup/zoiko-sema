"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const items = [
  "AI Meeting Summaries",
  "Decision Capture",
  "Follow-Up Drafting",
  "Searchable Memory",
];

export default function ProductOverviewIntelligenceLayerSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: listRef, inView: listIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes poilFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes poilFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .poil-hidden  { opacity: 0; transform: translateY(28px); }
        .poil-visible { animation: poilFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .poil-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .poil-img-visible { animation: poilFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .poil-row { opacity: 0; transform: translateY(16px); }
        .poil-list.poil-visible .poil-row {
          animation: poilFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        .poil-row-inner {
          transition: border-color .2s ease, background-color .2s ease;
        }
        .poil-row-inner:hover {
          border-color: rgba(255,255,255,0.28);
          background-color: rgba(255,255,255,0.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .poil-hidden, .poil-visible, .poil-img-hidden, .poil-img-visible, .poil-row { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Intelligence layer"
        className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 15%, #2A2266 0%, transparent 55%), linear-gradient(150deg, #0A0C24 0%, #12123A 45%, #1B1550 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`poil-hidden ${badgeIn ? "poil-visible" : ""} flex justify-center mb-6`}
          >
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9AA3F5]">
              Intelligence Layer
            </span>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`poil-hidden ${headIn ? "poil-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-white mb-4">
              AI that helps conversations become useful work.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-[#A6ABCE] max-w-[620px] mx-auto">
              Sema AI summarizes meetings, captures decisions, extracts
              follow-ups, and keeps context searchable across your
              workspace.
            </p>
          </div>

          {/* Image + list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            <div
              ref={imgRef}
              className={`poil-img-hidden ${imgIn ? "poil-img-visible" : ""} relative w-full aspect-[16/11.5] md:aspect-auto rounded-2xl overflow-hidden`}
            >
              <Image
                src="/Images/intelligence-layer.webp"
                alt="A finger touching a glowing AI chip icon surrounded by circuit lines, representing Zoiko Sema's AI intelligence layer"
                fill
                className="object-cover"
              />
            </div>

            <div
              ref={listRef}
              className={`poil-list ${listIn ? "poil-visible" : ""} grid grid-rows-4 gap-3 sm:gap-4`}
            >
              {items.map((label, i) => (
                <div
                  key={label}
                  className="poil-row"
                  style={{ animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div
                    className="poil-row-inner h-full flex items-center rounded-2xl border px-6 py-5"
                    style={{ borderColor: "rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    <span className="text-[14px] sm:text-[14.5px] font-semibold text-white">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
