"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
function useInView(threshold = 0.1) {
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

const BRAND = "#3457E8";

const paths = [
  {
    tag: "Individuals",
    title: "Remember and follow up faster",
    description: "Remember conversations, capture notes, and follow up faster.",
    cta: "Start Free",
  },
  {
    tag: "Teams",
    title: "Summarize into shared action",
    description: "Summarize meetings, messages, and calls into shared action.",
    cta: "Explore Team Collaboration",
  },
  {
    tag: "Businesses",
    title: "Deploy with admin controls",
    description: "Deploy AI communication with admin controls and policy.",
    cta: "Contact Sales",
  },
  {
    tag: "Regulated Teams",
    title: "Stronger governance",
    description: "Use AI with stronger governance, review, retention, and audit controls.",
    cta: "Explore Trust Center",
  },
];

export default function SemaAiAudiencePathsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sapaFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sapa-hidden  { opacity: 0; transform: translateY(28px); }
        .sapa-visible { animation: sapaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sapa-card { opacity: 0; transform: translateY(22px); }
        .sapa-card.sapa-card-in {
          animation: sapaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sapa-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .sapa-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px -20px rgba(15,23,42,0.2);
        }

        .sapa-link { transition: gap .2s ease; }
        .sapa-link .sapa-arrow { transition: transform .2s ease; display: inline-block; }
        .sapa-link:hover .sapa-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .sapa-hidden, .sapa-card { opacity: 1 !important; transform: none !important; }
          .sapa-visible, .sapa-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Audience paths"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`sapa-hidden ${headIn ? "sapa-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Audience Paths
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900">
              Built for how you&apos;ll actually use it.
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {paths.map((path, i) => (
              <div
                key={path.tag}
                className={`sapa-card ${gridIn ? "sapa-card-in" : ""} bg-white rounded-2xl p-6`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-3">
                  {path.tag}
                </p>
                <h3 className="text-[14.5px] font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-gray-500 mb-4">
                  {path.description}
                </p>
                <a
                  href="#"
                  className="sapa-link inline-flex items-center gap-1 text-[12.5px] font-semibold"
                  style={{ color: BRAND }}
                >
                  {path.cta}
                  <span className="sapa-arrow">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}