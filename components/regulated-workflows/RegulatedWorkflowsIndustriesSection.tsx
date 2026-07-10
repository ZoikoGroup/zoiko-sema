"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other pages. */
function useInView(threshold = 0.2) {
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
const CARD_WIDTH = 260;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

const industries = [
  {
    initials: "HC",
    label: "Healthcare",
    color: "#16A34A",
    bg: "#DCFCE7",
    description:
      "Coordinate sensitive operational work while protecting PHI-related collaboration.",
  },
  {
    initials: "LG",
    label: "Legal",
    color: "#7C3AED",
    bg: "#EDE9FE",
    description:
      "Manage case, matter, approval, and disclosure workflows without losing context.",
  },
  {
    initials: "FN",
    label: "Finance",
    color: BRAND,
    bg: "#E6E9FB",
    description:
      "Collaborate on decisions that require traceability, approvals, and retention.",
  },
  {
    initials: "PS",
    label: "Public Sector",
    color: "#D97706",
    bg: "#FEF3C7",
    description:
      "Keep policy-controlled work organized with role-based access and audit trails.",
  },
  {
    initials: "IN",
    label: "Insurance",
    color: "#7C3AED",
    bg: "#EDE9FE",
    description:
      "Route claims, reviews, and approvals with full context and traceability.",
  },
  {
    initials: "GV",
    label: "Government",
    color: "#0D9488",
    bg: "#CCFBF1",
    description:
      "Manage public communications and approvals with complete auditability.",
  },
];

const N = industries.length;
// Triple the list so there's always a real-looking buffer on both sides,
// letting the carousel loop forever without ever showing an empty gap.
const extended = [...industries, ...industries, ...industries];

export default function RegulatedWorkflowsIndustriesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: trackWrapRef, inView: trackIn } = useInView(0.1);

  const [index, setIndex] = useState(N); // start in the middle copy
  const [withTransition, setWithTransition] = useState(true);

  const goTo = (newIndex: number) => {
    setWithTransition(true);
    setIndex(newIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // After each animated move, silently snap back into the middle copy
  // once we've drifted into the cloned buffer — this is what makes the
  // loop feel infinite instead of hitting a hard edge.
  const handleTransitionEnd = () => {
    if (index >= N * 2) {
      setWithTransition(false);
      setIndex(index - N);
    } else if (index < N) {
      setWithTransition(false);
      setIndex(index + N);
    }
  };

  // re-enable the transition on the next tick after a silent snap
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  const activeDot = ((index % N) + N) % N;

  return (
    <>
      <style>{`
        @keyframes rwiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rwi-hidden  { opacity: 0; transform: translateY(28px); }
        .rwi-visible { animation: rwiFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .rwi-arrow {
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .rwi-arrow:hover {
          background: ${BRAND};
          border-color: ${BRAND};
          transform: translateY(-2px);
        }
        .rwi-arrow:hover svg { stroke: white; }
        .rwi-arrow svg { transition: stroke .2s ease; }

        .rwi-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .rwi-card:hover {
          transform: translateY(-4px);
          border-color: #c7cff9;
          box-shadow: 0 16px 32px -20px rgba(52,87,232,0.3);
        }
        .rwi-badge { transition: transform .25s ease; }
        .rwi-card:hover .rwi-badge { transform: scale(1.1); }

        .rwi-dot {
          transition: width .3s ease, background .25s ease;
        }
        .rwi-dot:hover { background: #9aa5f0; }

        @media (prefers-reduced-motion: reduce) {
          .rwi-hidden { opacity: 1 !important; transform: none !important; }
          .rwi-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Industries built for regulated workflows"
        className="w-full bg-white py-20 md:py-24 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading row */}
          <div
            ref={headRef}
            className={`rwi-hidden ${headIn ? "rwi-visible" : ""} flex items-start justify-between gap-6 mb-10`}
          >
            <h2 className="text-[clamp(22px,3vw,30px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[560px]">
              Built for teams that cannot leave proof, policy, or chance.
            </h2>

            <div className="flex items-center gap-3 flex-shrink-0 pt-1">
              <button
                type="button"
                aria-label="Previous industry"
                onClick={prev}
                className="rwi-arrow w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next industry"
                onClick={next}
                className="rwi-arrow w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel track */}
          <div ref={trackWrapRef} className={`rwi-hidden ${trackIn ? "rwi-visible" : ""} overflow-hidden`} style={{ animationDelay: "0.1s" }}>
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${index * STEP}px)`,
                transition: withTransition ? "transform .45s cubic-bezier(.22,1,.36,1)" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extended.map((industry, i) => (
                <div
                  key={i}
                  className="rwi-card flex-none bg-white rounded-2xl border border-gray-200 p-6"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  <div
                    className="rwi-badge w-9 h-9 rounded-full flex items-center justify-center mb-4"
                    style={{ background: industry.bg }}
                  >
                    <span className="text-[11px] font-bold" style={{ color: industry.color }}>
                      {industry.initials}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    {industry.label}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {industries.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to ${industries[i].label}`}
                onClick={() => goTo(N + i)}
                className="rwi-dot h-1.5 rounded-full"
                style={{
                  width: activeDot === i ? "20px" : "6px",
                  background: activeDot === i ? BRAND : "#D6DAF5",
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}