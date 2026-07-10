"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
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

const capabilities = [
  {
    title: "Daily brief",
    description:
      "Start each day with priorities, meetings, follow-ups, and important context in one view.",
    cta: "Open brief",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill={BRAND} stroke="none" />
      </svg>
    ),
  },
  {
    title: "Priority inbox",
    description:
      "Separate high-signal work from routine noise across messages, tasks, and meetings.",
    cta: "Open inbox",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Task planning",
    description:
      "Create, assign, prioritize, and complete tasks from conversations and meetings.",
    cta: "Open tasks",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Meeting preparation",
    description:
      "Collect agendas, files, notes, and context before the meeting starts.",
    cta: "Open meetings",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Notes and decisions",
    description:
      "Capture notes, decisions, and saved work context in a structured personal workspace.",
    cta: "Open notes",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    title: "Focus mode",
    description:
      "Protect deep work blocks and reduce interruptions while keeping critical signals visible.",
    cta: "Open focus",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill={BRAND} stroke="none" />
      </svg>
    ),
  },
];

export default function IndividualProductivityCapabilitiesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ipcFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipc-hidden  { opacity: 0; transform: translateY(32px); }
        .ipc-visible { animation: ipcFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipc-card { opacity: 0; transform: translateY(28px); }
        .ipc-card.ipc-card-in {
          animation: ipcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipc-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .ipc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px -20px rgba(15,23,42,0.18);
        }

        .ipc-icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
        .ipc-card:hover .ipc-icon { transform: scale(1.08); }

        .ipc-link { transition: color .2s ease, gap .2s ease; }
        .ipc-link .ipc-arrow { transition: transform .2s ease; display: inline-block; }
        .ipc-link:hover .ipc-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .ipc-hidden, .ipc-card { opacity: 1 !important; transform: none !important; }
          .ipc-visible, .ipc-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Capabilities mapped to daily work"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ipc-hidden ${headIn ? "ipc-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Core Productivity Features
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900">
              Capabilities mapped to daily work
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`ipc-card ${gridIn ? "ipc-card-in" : ""} bg-white rounded-2xl p-6`}
                style={{ animationDelay: `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.06}s` }}
              >
                <div
                  className="ipc-icon w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#E6E9FB" }}
                >
                  {cap.icon}
                </div>

                <h3 className="text-[15.5px] font-bold text-gray-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500 mb-4">
                  {cap.description}
                </p>

                <a
                  href="#"
                  className="ipc-link inline-flex items-center gap-1 text-[13px] font-semibold"
                  style={{ color: BRAND }}
                >
                  {cap.cta}
                  <span className="ipc-arrow">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}