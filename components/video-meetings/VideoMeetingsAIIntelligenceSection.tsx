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

const features = [
  {
    title: "Live notes",
    desc: "Captures key themes and discussion points during the meeting, with visible disclosure.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Meeting summaries",
    desc: "Generates structured recaps after the meeting, configurable by workspace and role.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Decision capture",
    desc: "Identifies approved decisions and unresolved items, editable before sharing.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Action items",
    desc: "Extracts owners, due dates, and next steps, permissioned before assigning.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Searchable history",
    desc: "Makes transcripts, summaries, files, and outcomes searchable under retention policy.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Follow-up reminders",
    desc: "Suggests follow-up messages, always with user confirmation before sending.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Ask Sema",
    desc: "Lets approved users ask questions across meeting history, respecting exclusions.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "AI audit visibility",
    desc: "Shows when AI was used and by whom — required for Business and Enterprise.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function VideoMeetingsAIIntelligenceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vaiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vai-hidden  { opacity: 0; transform: translateY(28px); }
        .vai-visible { animation: vaiFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .vai-card { opacity: 0; transform: translateY(22px); }
        .vai-grid.vai-visible .vai-card {
          animation: vaiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vai-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, background-color .3s ease, border-color .3s ease;
        }
        .vai-card-inner:hover {
          transform: translateY(-4px);
          background-color: rgba(255,255,255,0.05);
          border-color: color-mix(in srgb, var(--brand) 45%, transparent);
          box-shadow: 0 14px 28px rgba(0,0,0,0.35);
        }
        .vai-icon-box {
          transition: background-color .3s ease, color .3s ease;
        }
        .vai-card-inner:hover .vai-icon-box {
          background-color: var(--brand);
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          .vai-hidden, .vai-visible, .vai-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vai-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="AI meeting intelligence"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#1B1642" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vai-hidden ${badgeIn ? "vai-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
                AI Meeting Intelligence
              </span>
            </div>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`vai-hidden ${headIn ? "vai-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,34px)] font-bold leading-[1.2] tracking-tight text-white max-w-[640px] mx-auto mb-4">
              AI that turns meetings into accountable follow-up.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/50 max-w-[640px] mx-auto">
              A governed productivity layer that helps teams remember,
              decide, and follow through — never &ldquo;Magic AI,&rdquo; always precise
              and auditable.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`vai-grid ${gridIn ? "vai-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="vai-card"
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              >
                <div className="vai-card-inner h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                  <span className="vai-icon-box inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white/70 mb-4">
                    {f.icon}
                  </span>
                  <h3 className="text-[14px] sm:text-[14.5px] font-bold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.7] text-white/50">
                    {f.desc}
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