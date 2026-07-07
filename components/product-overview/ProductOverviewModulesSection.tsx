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

const modules = [
  {
    title: "Business messaging without the noise.",
    desc: "Direct messages, group chats, threads, mentions, reactions, files, voice notes, and searchable history.",
    linkLabel: "Explore Messaging",
    href: "/messaging",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Voice calls that stay connected to work.",
    desc: "Start one-to-one or group calls from chats, contacts, channels, and workspaces with AI-assisted follow-up.",
    linkLabel: "Explore Audio Calls",
    href: "/audio-calls",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Meetings that drive decisions.",
    desc: "Schedule, join, collaborate, record, summarize, and follow up from the same communication platform.",
    linkLabel: "Explore Video Meetings",
    href: "/video-meetings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Turn meetings into action.",
    desc: "Capture summaries, decisions, action items, follow-ups, and searchable meeting intelligence.",
    linkLabel: "Explore AI Summaries",
    href: "/ai-summaries",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Organize work around context.",
    desc: "Structure conversations by team, project, department, client, or workspace.",
    linkLabel: "Explore Channels & Spaces",
    href: "/product/channels",
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
    title: "Govern communication with confidence.",
    desc: "Manage users, roles, policies, security, AI controls, integrations, reporting, and ZoikoTime connectivity.",
    linkLabel: "Explore Admin Console",
    href: "/admin-console",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ProductOverviewModulesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes pomFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pom-hidden  { opacity: 0; transform: translateY(28px); }
        .pom-visible { animation: pomFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pom-card { opacity: 0; transform: translateY(24px); }
        .pom-grid.pom-visible .pom-card {
          animation: pomFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pom-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pom-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .pom-card-inner:hover .pom-icon {
          transform: scale(1.1);
          color: var(--brand);
        }
        .pom-icon {
          transition: transform .3s ease, color .3s ease;
        }

        .pom-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pom-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .pom-hidden, .pom-visible, .pom-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pom-card-inner:hover, .pom-card-inner:hover .pom-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Platform overview modules"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pom-hidden ${badgeIn ? "pom-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Platform Overview
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pom-hidden ${headIn ? "pom-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Six modules. One structured platform.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`pom-grid ${gridIn ? "pom-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {modules.map((m, i) => (
              <div
                key={i}
                className="pom-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="pom-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm flex flex-col">
                  <span className="pom-icon inline-flex text-gray-700 mb-4">
                    {m.icon}
                  </span>
                  <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-gray-900 mb-2 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {m.desc}
                  </p>
                  <a
                    href={m.href}
                    className="pom-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                  >
                    {m.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}