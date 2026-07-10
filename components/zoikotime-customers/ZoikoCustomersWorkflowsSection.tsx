"use client";

import React, { useEffect, useRef, useState } from "react";

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

const cards = [
  {
    title: "Manager handoffs",
    desc: "Managers move from coverage context to structured handoff notes.",
    tag: "Handoff channel · owner field",
    dotColor: "#4F46E5",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: "Shift & team updates",
    desc: "Teams receive operational updates in the right workspace or channel.",
    tag: "Channel feed · pinned note",
    dotColor: "#22C55E",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Exception resolution",
    desc: "Coverage, attendance, or operational exceptions become a meeting or task.",
    tag: "Signal card → meeting / task",
    dotColor: "#D97706",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Client & department coordination",
    desc: "Workspaces support departments, client groups, or operational units.",
    tag: "Workspace map · access boundaries",
    dotColor: "#4F46E5",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "AI-assisted summaries",
    desc: "Summarize handoffs, meetings, and action items where policy allows.",
    tag: "AI panel · admin-controlled",
    dotColor: "#4F46E5",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
  {
    title: "Reporting & audit",
    desc: "Leaders and admins review communication outcomes and policy alignment.",
    tag: "Analytics cards · audit timeline",
    dotColor: "#0EA5E9",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function ZoikoCustomersWorkflowsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztcwfFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztcwf-hidden  { opacity:0; transform:translateY(28px); }
        .ztcwf-visible { animation: ztcwfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcwf-card { opacity:0; transform:translateY(20px); }
        .ztcwf-card.active { animation: ztcwfFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcwf-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .ztcwf-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(79,70,229,0.12);
          border-color: #4F46E5;
        }
        .ztcwf-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .ztcwf-card:hover .ztcwf-icon-box {
          transform: scale(1.08);
          background-color: rgba(79,70,229,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztcwf-hidden, .ztcwf-card { opacity:1!important; transform:none!important; animation:none!important; }
          .ztcwf-visible { animation:none!important; opacity:1!important; }
          .ztcwf-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Operational Collaboration Workflows"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ztcwf-hidden ${headIn ? "ztcwf-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Operational Collaboration Workflows
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              Coordination for managers, teams, and departments
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500">
              Every workflow ties back to a ZoikoTime customer expansion use
              case — communication aligned with the work, never monitoring
              of people.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`ztcwf-card ${gridIn ? "active" : ""} rounded-2xl border border-gray-200 bg-white p-6`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="ztcwf-icon-box w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500 mb-4">{card.desc}</p>
                <div
                  className="w-full inline-flex items-center gap-2 rounded-[10px] px-3.5 py-2 text-[12px] font-medium text-gray-600"
                  style={{ background: "#F6F5FE" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: card.dotColor }}
                  />
                  {card.tag}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}