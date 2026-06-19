"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const topics = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Accountable Communication",
    desc: "Practical guidance on turning conversations into decisions, follow-ups, and coordinated work.",
    count: 5,
    href: "#accountable-communication",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h6"/>
      </svg>
    ),
    title: "AI Meeting Intelligence",
    desc: "How AI summaries, action items, decision capture, and source-aware outputs help teams reduce meeting waste.",
    count: 4,
    href: "#ai-meeting",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Team Collaboration",
    desc: "Resources for teams improving communication, alignment, workflows, and cross-functional coordination.",
    count: 3,
    href: "#team-collaboration",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Governance and Trust",
    desc: "Privacy, responsible AI, security, data handling, retention, and enterprise readiness.",
    count: 4,
    href: "#governance",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Sema + ZoikoTime",
    desc: "How Sema can connect communication context with ZoikoTime workforce truth where appropriate.",
    count: 3,
    href: "#sema-zoikotime",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
        <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
      </svg>
    ),
    title: "Comparisons",
    desc: "Practical comparisons for teams evaluating Sema alongside Slack, Teams, Zoom, Google Meet, and AI note-taking tools.",
    count: 4,
    href: "#comparisons",
  },
];

export default function ResourcesTopicsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes rtFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .rt-hidden  { opacity:0; transform:translateY(26px); }
        .rt-visible { animation: rtFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card stagger */
        .rt-card { opacity:0; transform:translateY(22px); transition:transform .28s ease, box-shadow .28s ease; }
        .rt-grid-in .rt-card:nth-child(1) { animation: rtFadeUp .55s ease .04s forwards; }
        .rt-grid-in .rt-card:nth-child(2) { animation: rtFadeUp .55s ease .10s forwards; }
        .rt-grid-in .rt-card:nth-child(3) { animation: rtFadeUp .55s ease .16s forwards; }
        .rt-grid-in .rt-card:nth-child(4) { animation: rtFadeUp .55s ease .22s forwards; }
        .rt-grid-in .rt-card:nth-child(5) { animation: rtFadeUp .55s ease .28s forwards; }
        .rt-grid-in .rt-card:nth-child(6) { animation: rtFadeUp .55s ease .34s forwards; }
        .rt-card:hover { transform:translateY(-4px)!important; box-shadow:0 12px 32px rgba(71,71,135,0.10)!important; }

        /* icon box */
        .rt-icon-box { transition:background .2s,transform .2s; }
        .rt-card:hover .rt-icon-box { background:#e0e7ff!important; transform:scale(1.08); }

        /* CTA */
        .rt-cta { display:inline-flex; align-items:center; gap:6px; transition:gap .2s; }
        .rt-cta:hover { gap:10px; }
        .rt-arrow { display:inline-block; transition:transform .2s; }
        .rt-cta:hover .rt-arrow { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .rt-hidden,.rt-card { opacity:1!important; transform:none!important; animation:none!important; }
          .rt-visible { animation:none!important; opacity:1!important; }
          .rt-card:hover { transform:none!important; }
          .rt-card:hover .rt-icon-box { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Six paths into the Sema library"
        className="w-full bg-white py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`rt-hidden ${headIn ? "rt-visible" : ""} text-center mb-12`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#4f46e5" }}>
              Browse by Topic
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              Six paths into the Sema library
            </h2>
            <p className="mx-auto max-w-[380px] text-[14.5px] leading-[1.75] text-gray-500">
              Editorially curated topic hubs. Empty categories are hidden until they have published resources.
            </p>
          </div>

          {/* ── 3×2 grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${gridIn ? "rt-grid-in" : ""}`}
          >
            {topics.map((topic, i) => (
              <div
                key={i}
                className="rt-card flex flex-col rounded-2xl p-7"
                style={{
                  background: "#EEF2FF",
                  border: "1px solid #e0e7ff",
                  boxShadow: "0 2px 12px rgba(71,71,135,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="rt-icon-box w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: "#fff", color: "#4f46e5" }}
                >
                  {topic.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-gray-900 mb-3 leading-snug">
                  {topic.title}
                </h3>

                {/* Desc */}
                <p className="text-[13.5px] leading-[1.75] text-gray-500 mb-7 flex-1">
                  {topic.desc}
                </p>

                {/* Count CTA */}
                <a
                  href={topic.href}
                  className="rt-cta text-[13.5px] font-semibold mt-auto"
                  style={{ color: "#474787" }}
                >
                  {topic.count} resources
                  <span className="rt-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}