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

const groups = [
  {
    title: "Communicate",
    desc: "Meetings, Messaging, Calls, Video Meetings, Channels & Spaces — the daily communication core.",
  },
  {
    title: "Plan & Coordinate",
    desc: "Calendar, Mail, Files, Search — scheduling, email, documents, and retrieval in context.",
  },
  {
    title: "Intelligence & Governance",
    desc: "Sema AI, AI Meeting Summaries, Sema Notes, Confidential Mode, Admin Console.",
  },
];

export default function ProductOverviewModulesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes pomFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pomFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pom-hidden  { opacity: 0; transform: translateY(28px); }
        .pom-visible { animation: pomFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pom-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .pom-img-visible { animation: pomFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .pom-card { opacity: 0; transform: translateY(24px); }
        .pom-grid.pom-visible .pom-card {
          animation: pomFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pom-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pom-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .pom-hidden, .pom-visible, .pom-card, .pom-img-hidden, .pom-img-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pom-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Platform overview modules"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pom-hidden ${badgeIn ? "pom-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Stack
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pom-hidden ${headIn ? "pom-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Three connected capability groups not a scattered feature
              inventory.
            </h2>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`pom-img-hidden ${imgIn ? "pom-img-visible" : ""} relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-4 sm:mb-5`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/product-stack.webp"
              alt="Team member collaborating with an AI assistant, representing Zoiko Sema's connected communication, coordination, and intelligence capabilities"
              fill
              className="object-cover"
            />
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`pom-grid ${gridIn ? "pom-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {groups.map((g, i) => (
              <div
                key={i}
                className="pom-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="pom-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm flex flex-col">
                  <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-gray-900 mb-2 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}