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
    title: "Start & schedule",
    desc: "Instant meetings, scheduled meetings, recurring meetings, calendar invites, and shareable links.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Join experience",
    desc: "One-click join, browser join, mobile join, pre-join preview, and guest lobby.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Host controls",
    desc: "Mute all, remove participant, lock meeting, assign co-host, and waiting room.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Meeting quality",
    desc: "HD video, audio optimization, adaptive bitrate, and low-bandwidth mode.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Recording & history",
    desc: "Cloud recording, transcript, meeting chat, shared files, and searchable history.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Participant experience",
    desc: "Reactions, hand raise, captions, layout controls, and live notifications.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a5 5 0 0 1 5-5h1" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M17 21v-1a5 5 0 0 0-3.5-4.77" />
      </svg>
    ),
  },
];

export default function VideoMeetingsCoreCapabilitiesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ccpFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ccp-hidden  { opacity: 0; transform: translateY(28px); }
        .ccp-visible { animation: ccpFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ccp-card { opacity: 0; transform: translateY(24px); }
        .ccp-grid.ccp-visible .ccp-card {
          animation: ccpFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ccp-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ccp-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .ccp-card-inner:hover .ccp-icon {
          transform: scale(1.1);
          color: var(--brand);
        }
        .ccp-icon {
          transition: transform .3s ease, color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .ccp-hidden, .ccp-visible, .ccp-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ccp-card-inner:hover, .ccp-card-inner:hover .ccp-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Core meeting capabilities"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ccp-hidden ${badgeIn ? "ccp-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Core Capabilities
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ccp-hidden ${headIn ? "ccp-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              A complete meeting feature set, grouped by what matters.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ccp-grid ${gridIn ? "ccp-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="ccp-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="ccp-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                  <span className="ccp-icon inline-flex text-brand mb-4">
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