"use client";

import React, { useEffect, useRef, useState } from "react";

interface Commitment {
  number: string;
  title: string;
  titleItalic: string;
  desc: string;
}

const commitments: Commitment[] = [
  {
    number: "01",
    title: "Clarity over",
    titleItalic: "noise",
    desc:
      "Communication tools should reduce noise, not multiply it. Every feature in Sema earns its place by making meaning easier to find.",
  },
  {
    number: "02",
    title: "Communication before",
    titleItalic: "bureaucracy",
    desc:
      "Tools should move out of the way of conversation. Governance is layered on for businesses that need it — never imposed on individuals.",
  },
  {
    number: "03",
    title: "Governance",
    titleItalic: "when required",
    desc:
      "For regulated and enterprise teams, governance is architectural — role-based access, retention, audit trails, compliance exports.",
  },
  {
    number: "04",
    title: "AI with",
    titleItalic: "accountability",
    desc:
      "AI summaries are explainable, traceable to source, and configurable. Sema's AI assists communication — it never replaces human judgment.",
  },
  {
    number: "05",
    title: "Integration without",
    titleItalic: "confusion",
    desc:
      "ZoikoTime connects when organizations need workforce truth. The integration is permissioned, configurable and policy-bound by default.",
  },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
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

export default function AboutCommitmentsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes acFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ac-hidden  { opacity: 0; transform: translateY(28px); }
        .ac-visible { animation: acFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .ac-card-wrap { opacity: 0; transform: translateY(24px); }
        .ac-grid-in .ac-card-wrap {
          animation: acFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .ac-grid-in .ac-card-wrap:nth-child(1) { animation-delay: .04s; }
        .ac-grid-in .ac-card-wrap:nth-child(2) { animation-delay: .12s; }
        .ac-grid-in .ac-card-wrap:nth-child(3) { animation-delay: .20s; }
        .ac-grid-in .ac-card-wrap:nth-child(4) { animation-delay: .28s; }
        .ac-grid-in .ac-card-wrap:nth-child(5) { animation-delay: .36s; }

        /* card hover */
        .ac-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      border-color .28s ease,
                      background-color .28s ease;
          will-change: transform;
        }
        .ac-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.35);
          background-color: rgba(255,255,255,0.04);
        }

        /* number — color shift + slight scale on hover */
        .ac-number { transition: color .28s ease, transform .28s ease; }
        .ac-card:hover .ac-number { color: #a5b4fc; transform: scale(1.08); }

        /* left accent bar grows on hover */
        .ac-accent {
          position: absolute; top: 0; left: 0; bottom: 0; width: 2px;
          background: rgba(255,255,255,0.18);
          transition: background-color .28s ease, width .28s ease;
        }
        .ac-card:hover .ac-accent {
          background-color: #818cf8;
          width: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ac-hidden, .ac-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ac-visible { animation: none !important; opacity: 1 !important; }
          .ac-card:hover { transform: none; }
          .ac-card:hover .ac-number { transform: none; }
        }
      `}</style>

      <section
        aria-label="Five commitments that shape every decision we ship"
        style={{ backgroundColor: "#474889" }}
        className="w-full py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`ac-hidden ${headIn ? "ac-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.15] tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,35px)" }}
            >
              Five commitments that shape every decision we ship
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75]" style={{ color: "#c7caed" }}>
              These principles keep Sema simple enough for individuals, useful enough
              for teams and governable enough for businesses.
            </p>
          </div>

          {/* ── 5-col grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${
              gridIn ? "ac-grid-in" : ""
            }`}
          >
            {commitments.map((c, idx) => (
              <div key={c.number} className="ac-card-wrap">
                <div
                  className="ac-card relative h-full px-6 py-7 lg:px-7"
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                   
                  }}
                >
                  <span className="ac-accent" aria-hidden="true" />

                  {/* Number */}
                  <span
                    className="ac-number block text-[11px] font-semibold tracking-wider mb-5"
                    style={{ color: "#9396d4", fontFamily: "monospace" }}
                  >
                    {c.number}
                  </span>

                  {/* Title — mixed roman + italic */}
                  <h3 className="text-[16.5px] font-bold leading-snug text-white mb-3">
                    {c.title}{" "}
                    <em className="font-serif italic font-normal" style={{ color: "#c7caed" }}>
                      {c.titleItalic}
                    </em>
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-[1.7]"
                    style={{ color: "#b3b6e0" }}
                  >
                    {c.desc}
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