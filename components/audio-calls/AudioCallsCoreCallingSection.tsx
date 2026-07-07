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
    title: "1:1 and group calls",
    desc: "Start direct calls from profile cards, direct messages, contacts, and recent conversations, or bring a focused group together.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Channel & space calls",
    desc: "Start a call inside a channel or run persistent voice sessions for project spaces, client rooms, and operations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </svg>
    ),
  },
  {
    title: "Call handoff",
    desc: "Move calls between desktop, tablet, and mobile when authenticated, and switch devices without leaving the call.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Escalate to video",
    desc: "Convert an audio call to video the moment visual collaboration is needed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Call history",
    desc: "Track recent calls, participants, duration, source, summary status, and policy state.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Recording, where enabled",
    desc: "Enable recording only when plan, role, policy, and consent requirements are satisfied.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

export default function AudioCallsCoreCallingSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cc-hidden  { opacity: 0; transform: translateY(28px); }
        .cc-visible { animation: ccFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .cc-card { opacity: 0; transform: translateY(24px); }
        .cc-grid.cc-visible .cc-card {
          animation: ccFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .cc-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .cc-card-inner:hover .cc-icon {
          transform: scale(1.1);
          color: var(--brand);
        }
        .cc-icon {
          transition: transform .3s ease, color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-hidden, .cc-visible, .cc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cc-card-inner:hover, .cc-card-inner:hover .cc-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Core calling features"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cc-hidden ${badgeIn ? "cc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Core Calling
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`cc-hidden ${headIn ? "cc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Everything a voice-first team needs.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`cc-grid ${gridIn ? "cc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="cc-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="cc-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                  <span className="cc-icon inline-flex text-brand mb-4">
                    {f.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
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