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
  {
    title: "Calendar",
    desc: "Schedule meetings, calls, events, and team work.",
    linkLabel: "Explore Calendar",
    href: "/calendar",
  },
  {
    title: "Mail",
    desc: "Business email connected to your conversations and workspace context.",
    linkLabel: "Explore Mail",
    href: "/sema-mail",
  },
  {
    title: "Files",
    desc: "Keep files connected to conversations and decisions.",
    linkLabel: "Explore Files",
    href: "/files",
  },
  {
    title: "Search",
    desc: "Find messages, meetings, mail, notes, and decisions quickly.",
    linkLabel: "Explore Search",
    href: "/search",
  },
];

export default function ProductOverviewPlanCoordinateSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes popcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popcFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .popc-hidden  { opacity: 0; transform: translateY(28px); }
        .popc-visible { animation: popcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .popc-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .popc-img-visible { animation: popcFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .popc-card { opacity: 0; transform: translateY(24px); }
        .popc-grid.popc-visible .popc-card {
          animation: popcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .popc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .popc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
        }

        .popc-link {
          transition: gap .2s ease, color .2s ease;
        }
        .popc-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .popc-hidden, .popc-visible, .popc-img-hidden, .popc-img-visible, .popc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .popc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Plan and coordinate"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`popc-hidden ${badgeIn ? "popc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Plan & Coordinate
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`popc-hidden ${headIn ? "popc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Mail and Calendar as first-class products not secondary
              utilities.
            </h2>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`popc-img-hidden ${imgIn ? "popc-img-visible" : ""} relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-4 sm:mb-5`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/plan-coordinate.webp"
              alt="A finger touching a glowing point surrounded by floating mail envelope icons, representing Zoiko Sema's connected mail and calendar"
              fill
              className="object-cover"
            />
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`popc-grid ${gridIn ? "popc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {items.map((it, i) => (
              <div
                key={it.title}
                className="popc-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div
                  className="popc-card-inner h-full rounded-2xl p-6 flex flex-col"
                  style={{ backgroundColor: "#F3F2FD" }}
                >
                  <h3 className="text-[15px] sm:text-[15.5px] font-bold text-gray-900 mb-2">
                    {it.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {it.desc}
                  </p>
                  <a
                    href={it.href}
                    className="popc-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                  >
                    {it.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
