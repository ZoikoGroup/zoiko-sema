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

const cards = [
  {
    tag: "Context → channel",
    title: "Turn workforce context into team action",
    desc: "Move from schedules, coverage changes, location context, and operational signals into the right message, meeting, handoff, or task.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    tag: "Workspace mapping",
    title: "Coordinate managers and teams in one ecosystem",
    desc: "Keep daily communication, follow-ups, and decisions connected to the teams and work contexts that need them.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    tag: "Privacy-respecting",
    title: "Govern communication with privacy-first controls",
    desc: "Use role-based visibility, privacy modes, policy alignment, retention, and auditability while keeping the experience trust-first.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ZoikoCustomersWhySection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ztcwFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztcw-hidden  { opacity:0; transform:translateY(28px); }
        .ztcw-visible { animation: ztcwFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcw-card { opacity:0; transform:translateY(22px); }
        .ztcw-card.active { animation: ztcwFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcw-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .ztcw-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(79,70,229,0.14);
          border-color: #4F46E5;
        }
        .ztcw-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .ztcw-card:hover .ztcw-icon-box {
          transform: scale(1.08);
          background-color: rgba(79,70,229,0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztcw-hidden, .ztcw-card { opacity:1!important; transform:none!important; animation:none!important; }
          .ztcw-visible { animation:none!important; opacity:1!important; }
          .ztcw-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Why Add Zoiko Sema"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ztcw-hidden ${headIn ? "ztcw-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Why Add Zoiko Sema
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              The communication layer for your ZoikoTime operations
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-gray-500">
              Turn workforce context into action, coordinate managers and
              teams in one ecosystem, and keep it all governed with
              privacy-first controls.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`ztcw-card ${cardsIn ? "active" : ""} rounded-2xl border border-gray-200 bg-white p-7`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div
                  className="ztcw-icon-box w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[16.5px] font-bold text-gray-900 mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500 mb-5">
                  {card.desc}
                </p>
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
                  style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}