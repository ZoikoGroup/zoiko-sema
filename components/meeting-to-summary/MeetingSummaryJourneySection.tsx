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

const steps = [
  {
    step: "Step 1",
    title: "Schedule",
    desc: "Create or join from calendar, workspace, or channel.",
    tag: "Policy applied",
    color: "#4F46E5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    step: "Step 2",
    title: "Meet",
    desc: "Discuss, share files, and make decisions.",
    tag: "Summary-ready",
    color: "#4F46E5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    step: "Step 3",
    title: "Generate summary",
    desc: "Overview, key points, decisions, and action candidates.",
    tag: "Host enabled",
    color: "#4F46E5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
  {
    step: "Step 4",
    title: "Review & assign",
    desc: "Edit wording, assign owners and due dates.",
    tag: "Human review",
    color: "#4F46E5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    step: "Step 5",
    title: "Share recap",
    desc: "Shared to allowed participants, workspace, or channel.",
    tag: "Rules applied",
    color: "#4F46E5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    step: "Step 6",
    title: "Retain context",
    desc: "Summary, decisions, tasks, and audit events stay searchable.",
    tag: "Retained",
    color: "#22B573",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function MeetingSummaryJourneySection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: rowRef, inView: rowIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes mtsjFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mtsj-hidden  { opacity:0; transform:translateY(28px); }
        .mtsj-visible { animation: mtsjFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mtsj-step { opacity:0; transform:translateY(18px); }
        .mtsj-step.active { animation: mtsjFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .mtsj-line {
          transform: scaleX(0);
          transform-origin: left;
        }
        .mtsj-line.active {
          animation: mtsjLineGrow .6s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes mtsjLineGrow {
          to { transform: scaleX(1); }
        }

        .mtsj-step {
          transition: transform .25s ease;
        }
        .mtsj-step:hover {
          transform: translateY(-4px);
        }
        .mtsj-icon-box {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .mtsj-step:hover .mtsj-icon-box {
          transform: scale(1.1);
          box-shadow: 0 10px 22px rgba(79,70,229,0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .mtsj-hidden, .mtsj-step { opacity:1!important; transform:none!important; animation:none!important; }
          .mtsj-visible { animation:none!important; opacity:1!important; }
          .mtsj-line { transform:scaleX(1)!important; animation:none!important; }
          .mtsj-step:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Workflow Journey"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`mtsj-hidden ${headIn ? "mtsj-visible" : ""} text-center mb-16`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Workflow Journey
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[640px] mx-auto">
              Six steps from schedule to searchable context
            </h2>
            <p className="mx-auto max-w-[600px] text-[15px] leading-[1.75] text-gray-500">
              Meeting output becomes work — with policy, human review, and
              retention applied along the way.
            </p>
          </div>

          {/* Steps row */}
          <div ref={rowRef} className="relative">
            {/* connecting line, desktop only */}
            <div
              className={`mtsj-line hidden lg:block absolute top-6 left-0 right-0 h-[2px]`}
              style={{
                background: "repeating-linear-gradient(to right, #C7CCF5 0, #C7CCF5 6px, transparent 6px, transparent 12px)",
                marginLeft: "48px",
                marginRight: "48px",
              }}
              data-active={rowIn}
            />
            <div
              className={`mtsj-line ${rowIn ? "active" : ""} hidden lg:block absolute top-6 left-0 right-0 h-[2px]`}
              style={{
                background: "repeating-linear-gradient(to right, #C7CCF5 0, #C7CCF5 6px, transparent 6px, transparent 12px)",
                marginLeft: "48px",
                marginRight: "48px",
              }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 relative">
              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className={`mtsj-step ${rowIn ? "active" : ""} flex flex-col items-center text-center cursor-default`}
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <div
                    className="mtsj-icon-box w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                    style={{ background: s.color }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-[11px] font-bold mb-1.5" style={{ color: s.color }}>
                    {s.step}
                  </p>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-gray-500 mb-4 max-w-[140px]">
                    {s.desc}
                  </p>
                  <span
                    className="inline-block rounded-full px-3 py-1.5 text-[11px] font-semibold"
                    style={{ background: "rgba(79,70,229,0.10)", color: s.color }}
                  >
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}