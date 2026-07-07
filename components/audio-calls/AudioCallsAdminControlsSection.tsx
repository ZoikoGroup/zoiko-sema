"use client";

import React, { useEffect, useRef, useState } from "react";

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

const controls = [
  {
    title: "Call permissions",
    desc: "Control who can start, join, invite, transfer, record, summarize, or export calls.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "External participant rules",
    desc: "Restrict guest calling, domain access, external invites, and external summary visibility.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Recording permissions",
    desc: "Define who may record, when consent is required, and where recordings are stored.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "AI summary controls",
    desc: "Set AI availability by plan, workspace, role, region, meeting type, and sensitivity level.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Retention policies",
    desc: "Apply retention periods for call logs, summaries, transcripts, recordings, and audit events.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Audit logs",
    desc: "Record call policy changes, recording events, AI usage, external participants, and exports.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function AudioCallsAdminControlsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes acdFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acd-hidden  { opacity: 0; transform: translateY(28px); }
        .acd-visible { animation: acdFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acd-card { opacity: 0; transform: translateY(24px); }
        .acd-grid.acd-visible .acd-card {
          animation: acdFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acd-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, background-color .3s ease, border-color .3s ease;
        }
        .acd-card-inner:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,0.05);
          border-color: color-mix(in srgb, var(--brand) 45%, transparent);
          box-shadow: 0 16px 32px rgba(0,0,0,0.35);
        }
        .acd-icon-box {
          transition: background-color .3s ease, color .3s ease;
        }
        .acd-card-inner:hover .acd-icon-box {
          background-color: var(--brand);
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          .acd-hidden, .acd-visible, .acd-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acd-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Business and admin controls"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#1B1642" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acd-hidden ${badgeIn ? "acd-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
                Business &amp; Admin Controls
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acd-hidden ${headIn ? "acd-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-white">
              Voice, governed like every other channel.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acd-grid ${gridIn ? "acd-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {controls.map((c, i) => (
              <div
                key={i}
                className="acd-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="acd-card-inner h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                  <span className="acd-icon-box inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white/70 mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/50">
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