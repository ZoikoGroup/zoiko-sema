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
    emoji: "🛡️",
  },
  {
    title: "External participant rules",
    desc: "Restrict guest calling, domain access, external invites, and external summary visibility.",
    emoji: "🌐",
  },
  {
    title: "Recording permissions",
    desc: "Define who may record, when consent is required, and where recordings are stored.",
    emoji: "🔒",
  },
  {
    title: "AI summary controls",
    desc: "Set AI availability by plan, workspace, role, region, meeting type, and sensitivity level.",
    emoji: "🤖",
  },
  {
    title: "Retention policies",
    desc: "Apply retention periods for call logs, summaries, transcripts, recordings, and audit events.",
    emoji: "💾",
  },
  {
    title: "Audit logs",
    desc: "Record call policy changes, recording events, AI usage, external participants, and exports.",
    emoji: "📋",
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

        .acd-card { opacity: 0; transform: translateY(24px) scale(.98); }
        .acd-grid.acd-visible .acd-card {
          animation: acdFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acd-card-inner {
          transition: transform .35s cubic-bezier(.22,1,.36,1),
                      box-shadow .35s ease,
                      background-color .35s ease,
                      border-color .35s ease;
        }
        .acd-card-inner:hover {
          transform: translateY(-6px);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(124,124,255,0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .acd-icon-box {
          transition: transform .35s cubic-bezier(.22,1,.36,1), background-color .35s ease;
        }
        .acd-card-inner:hover .acd-icon-box {
          transform: scale(1.12) rotate(-4deg);
          background-color: rgba(255,255,255,0.14);
        }

        .acd-card-inner:hover .acd-title {
          color: #A5A6FF;
        }
        .acd-title {
          transition: color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .acd-hidden, .acd-visible, .acd-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acd-card-inner:hover, .acd-card-inner:hover .acd-icon-box { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Business and admin controls"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#0B0F2D" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge — plain uppercase label, no pill */}
          <div
            ref={badgeRef}
            className={`acd-hidden ${badgeIn ? "acd-visible" : ""} text-center mb-3`}
          >
            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#9FB0FF]">
              Business &amp; Admin Controls
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acd-hidden ${headIn ? "acd-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-extrabold leading-[1.15] tracking-tight text-white">
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
                <div className="acd-card-inner h-full rounded-2xl border border-[#FFFFFF14] bg-[#12163A] p-6 sm:p-7">
                  <span className="acd-icon-box inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-[18px] mb-4">
                    {c.emoji}
                  </span>
                  <h3 className="acd-title text-[15px] sm:text-[16px] font-bold text-white mb-2">
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