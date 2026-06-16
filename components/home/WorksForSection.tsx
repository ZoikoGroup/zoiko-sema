"use client";

import React, { useEffect, useState, useRef } from "react";

const businessFeatures = [
  { left: "Team messaging",        right: "Video meetings" },
  { left: "AI summaries",          right: "Admin controls" },
  { left: "Security policies",     right: "ZoikoTime route" },
  { left: "Enterprise deployment", right: "Compliance exports" },
];

const teamsFeatures = [
  { left: "Channels & spaces", right: "Group calls" },
  { left: "Shared files",      right: "Action items" },
  { left: "Project rooms",     right: "Team search" },
];

const individualFeatures = [
  { left: "1:1 messaging", right: "Audio calls" },
  { left: "Video calls",   right: "Voice notes" },
  { left: "Group calls",   right: "Mobile-first" },
];

// ── Intersection observer hook ─────────────────────────────────────────────
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

export default function WorksForSection() {
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.1);

  return (
    <>
      <style>{`
        /* ── fade-up entrance ── */
        @keyframes wfFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .wf-hidden  { opacity: 0; transform: translateY(36px); }
        .wf-visible { animation: wfFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── card hover ── */
        .wf-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .wf-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.13);
        }

        /* ── shimmer CTA ── */
        @keyframes wfShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%);  }
        }
        .wf-btn {
          position: relative; overflow: hidden;
          transition: opacity .2s ease, transform .2s ease;
        }
        .wf-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.22) 50%,
            transparent 75%
          );
          transform: translateX(-120%);
        }
        .wf-btn:hover::after { animation: wfShimmer .7s ease forwards; }
        .wf-btn:hover { transform: translateY(-1px); }

        /* ── dot ── */
        .wf-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .wf-hidden, .wf-visible { opacity:1 !important; transform:none !important; animation:none !important; }
          .wf-card:hover { transform: none; }
          .wf-btn:hover  { transform: none; }
          .wf-btn::after { display: none; }
        }
      `}</style>

      <section
        aria-label="Built for the way you work"
        className="w-full bg-white py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-12 text-center wf-hidden ${headInView ? "wf-visible" : ""}`}
          >
            <h2
              className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4"
              style={{ fontSize: "clamp(26px,3.5vw,44px)" }}
            >
              Built for the way you work and the way your business runs
            </h2>
            <p className="mx-auto max-w-[580px] text-[15.5px] leading-[1.75] text-gray-500">
              Sema is business-first and individual-accessible. Companies get governed
              communication and operational clarity. Individuals get secure, intelligent
              calls and conversations — no business account required.
            </p>
          </div>

          {/* ── Cards grid ── */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          >

            {/* ══ Card 1 — Business (purple/indigo) ══ */}
            <div
              className={`wf-card flex flex-col rounded-[20px] p-8 wf-hidden ${cardsInView ? "wf-visible" : ""}`}
              style={{ background: "#474787", animationDelay: "0s" }}
            >
              {/* Label */}
              <p
                className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#a5a8e0" }}
              >
                Primary · Business-First
              </p>

              {/* Title */}
              <h3
                className="font-bold leading-tight text-white mb-3"
                style={{ fontSize: "clamp(22px,2.2vw,30px)" }}
              >
                Sema for Business
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.72] mb-7" style={{ color: "#c7caed" }}>
                For companies that need communication, accountability and operational
                clarity — across teams, departments, regions and roles.
              </p>

              {/* Features 2-col grid */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-[10px] mb-auto">
                {businessFeatures.map((row, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#a5a8e0" }} />
                      <span className="text-[13.5px] leading-snug" style={{ color: "#dde0f5" }}>
                        {row.left}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#a5a8e0" }} />
                      <span className="text-[13.5px] leading-snug" style={{ color: "#dde0f5" }}>
                        {row.right}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* CTA — white pill */}
              <a
                href="#business"
                className="wf-btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-gray-900 bg-white"
              >
                Explore Sema for Business
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* ══ Card 2 — Teams (blush/pink) ══ */}
            <div
              className={`wf-card flex flex-col rounded-[20px] p-8 wf-hidden ${cardsInView ? "wf-visible" : ""}`}
              style={{ background: "#FBE6E6", animationDelay: "0.12s" }}
            >
              {/* Label */}
              <p
                className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#b06060" }}
              >
                Teams
              </p>

              {/* Title */}
              <h3
                className="font-bold leading-tight text-gray-900 mb-3"
                style={{ fontSize: "clamp(20px,2vw,28px)" }}
              >
                Sema for Teams
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.72] text-gray-600 mb-7">
                For small teams, departments, projects and professional groups who
                need one place to communicate and coordinate.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-[10px] mb-auto">
                {teamsFeatures.map((row, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#c08080" }} />
                      <span className="text-[13px] leading-snug text-gray-700">{row.left}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#c08080" }} />
                      <span className="text-[13px] leading-snug text-gray-700">{row.right}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* CTA — dark pill */}
              <a
                href="#teams"
                className="wf-btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ background: "#1a1a2e" }}
              >
                Explore Teams
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* ══ Card 3 — Individuals (blue) ══ */}
            <div
              className={`wf-card flex flex-col rounded-[20px] p-8 wf-hidden ${cardsInView ? "wf-visible" : ""}`}
              style={{ background: "#C2D8FF", animationDelay: "0.24s" }}
            >
              {/* Label */}
              <p
                className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#3a6ab0" }}
              >
                Individuals
              </p>

              {/* Title */}
              <h3
                className="font-bold leading-tight text-gray-900 mb-3"
                style={{ fontSize: "clamp(20px,2vw,28px)" }}
              >
                Sema for You
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.72] text-gray-700 mb-7">
                For people who want secure audio calls, video calls and intelligent
                conversation memory — without needing a business account.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-[10px] mb-auto">
                {individualFeatures.map((row, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#3a6ab0" }} />
                      <span className="text-[13px] leading-snug text-gray-800">{row.left}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="wf-dot" style={{ background: "#3a6ab0" }} />
                      <span className="text-[13px] leading-snug text-gray-800">{row.right}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* CTA — dark pill */}
              <a
                href="#individuals"
                className="wf-btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ background: "#1a1a2e" }}
              >
                Use Sema for free
                <span aria-hidden="true">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}