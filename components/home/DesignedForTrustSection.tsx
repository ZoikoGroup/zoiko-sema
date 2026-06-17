"use client";

import React, { useEffect, useRef, useState } from "react";

interface Pillar {
  label: string;
  number: string;
  title: string;
  items: string[];
  footer: string;
  dark: boolean;
}

const pillars: Pillar[] = [
  {
    label: "PILLAR ONE",
    number: "01",
    title: "Secure by Architecture",
    items: [
      "Encryption in transit",
      "Secure access controls",
      "Workspace isolation",
      "Role-based permissions",
      "Admin governance",
      "Device & session controls",
    ],
    footer:
      "Trust is not a marketing layer. It is built into how Sema manages identity, access, workspaces, data and communication boundaries.",
    dark: true,
  },
  {
    label: "PILLAR TWO",
    number: "02",
    title: "Responsible AI",
    items: [
      "AI summaries are explainable",
      "User controls for AI features",
      "Admin-level AI governance",
      "No hidden AI decisioning",
      "Content vs. analytics separation",
      "Human review for sensitive flows",
    ],
    footer:
      "Sema's AI is designed to assist communication, not replace judgment. Every output is traceable to its conversation source.",
    dark: false,
  },
  {
    label: "PILLAR THREE",
    number: "03",
    title: "Governance + Individual Control",
    items: [
      "Business admins govern workspaces",
      "Individuals control personal usage",
      "Permissioned ZoikoTime integration",
      "Customer-defined retention",
      "Per-workspace compliance",
      "Jurisdiction-aware policies",
    ],
    footer:
      "Sema supports business governance without treating every personal conversation like an enterprise record.",
    dark: false,
  },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
function useInView(threshold = 0.12) {
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

export default function DesignedForTrustSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.4);

  return (
    <>
      <style>{`
        @keyframes dtFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .dt-hidden  { opacity: 0; transform: translateY(28px); }
        .dt-visible { animation: dtFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered pillar entrance */
        .dt-card-wrap { opacity: 0; transform: translateY(24px); }
        .dt-grid-in .dt-card-wrap {
          animation: dtFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .dt-grid-in .dt-card-wrap:nth-child(1) { animation-delay: .05s; }
        .dt-grid-in .dt-card-wrap:nth-child(2) { animation-delay: .15s; }
        .dt-grid-in .dt-card-wrap:nth-child(3) { animation-delay: .25s; }

        /* card hover */
        .dt-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1),
                      box-shadow .3s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .dt-card:hover {
          transform: translateY(-6px);
        }
        .dt-card-dark:hover {
          box-shadow: 0 22px 44px rgba(71,71,135,0.35);
        }
        .dt-card-light:hover {
          box-shadow: 0 18px 38px rgba(71,71,135,0.14);
        }

        /* big number — subtle float on hover */
        .dt-number { transition: transform .3s ease, opacity .3s ease; }
        .dt-card:hover .dt-number { transform: translateY(-3px); opacity: 1; }

        /* list item hover micro-interaction */
        .dt-item {
          transition: padding-left .2s ease, opacity .2s ease;
          opacity: 0.92;
        }
        .dt-item:hover { padding-left: 4px; opacity: 1; }

        /* CTA pill hover */
        .dt-cta {
          transition: transform .25s cubic-bezier(.22,1,.36,1),
                      box-shadow .25s ease,
                      background-color .25s ease;
        }
        .dt-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(71,71,135,0.22);
          background-color: #f8f8ff;
        }
        .dt-cta-arrow { display: inline-block; transition: transform .2s ease; }
        .dt-cta:hover .dt-cta-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .dt-hidden, .dt-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .dt-visible { animation: none !important; opacity: 1 !important; }
          .dt-card:hover, .dt-cta:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Designed for trust before scale"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`dt-hidden ${headIn ? "dt-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.12] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(26px,3.6vw,35px)" }}
            >
              Designed for trust before scale
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-[#5C5870]">
              Sema is built for secure communication, responsible AI, controlled access
              and enterprise-grade deployment — while remaining simple enough for
              individuals to use every day.
            </p>
          </div>

          {/* ── 3-pillar grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch ${
              gridIn ? "dt-grid-in" : ""
            }`}
          >
            {pillars.map((p) => (
              <div key={p.number} className="dt-card-wrap h-full">
                <div
                  className={`dt-card h-full rounded-[20px] p-8 flex flex-col ${
                    p.dark ? "dt-card-dark" : "dt-card-light"
                  }`}
                  style={{
                    background: p.dark ? "#49508D" : "#E3EDFF",
                  }}
                >
                  {/* Top row: label + big number */}
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: p.dark ? "#2A6BE3" : "#4B2EC9" }}
                    >
                      {p.label}
                    </span>
                    <span
                      className="dt-number font-serif leading-none select-none"
                      style={{
                        fontSize: "50px",
                        color: p.dark ? "rgba(255,255,255,0.85)" : "rgba(71,71,135,0.18)",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {p.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[20px] font-bold leading-snug mb-5"
                    style={{ color: p.dark ? "#fff" : "#15131F" }}
                  >
                    {p.title}
                  </h3>

                  {/* List items with dotted dividers */}
                  <ul className="flex-1">
                    {p.items.map((item, idx) => (
                      <li
                        key={item}
                        className="dt-item text-[13.5px] leading-relaxed py-[9px]"
                        style={{
                          color: p.dark ? "#FFFFFF" : "#5C5870",
                          borderBottom:
                            idx < p.items.length - 1
                              ? p.dark
                                ? "1px dotted rgba(255,255,255,0.18)"
                                : "1px dotted rgba(71,71,135,0.18)"
                              : "none",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Footer copy */}
                  <p
                    className="text-[12.5px] leading-relaxed mt-6 pt-5"
                    style={{
                      color: p.dark ? "#b8baea" : "#6b7280",
                      borderTop: p.dark
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "1px solid rgba(71,71,135,0.12)",
                    }}
                  >
                    {p.footer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA pill ── */}
          <div
            ref={ctaRef}
            className={`dt-hidden ${ctaIn ? "dt-visible" : ""} flex justify-center`}
          >
            <a
              href="#trust-centre"
              className="dt-cta inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#15131F]"
            >
              Visit the Trust Centre
              <span className="dt-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}