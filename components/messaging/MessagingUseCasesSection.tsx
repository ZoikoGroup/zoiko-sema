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

const useCases = [
  {
    title: "Founder-led teams",
    desc: "Fast decisions, direct context, lightweight structure, AI recaps.",
    linkLabel: "Start free",
  },
  {
    title: "Remote teams",
    desc: "Persistent channels, async updates, searchable history, meeting handoff.",
    linkLabel: "Start free",
  },
  {
    title: "Customer support",
    desc: "Client spaces, escalation threads, files, audit trail, shared decisions.",
    linkLabel: "Get a demo",
  },
  {
    title: "Operations teams",
    desc: "Announcements, follow-up actions, workforce context, policy visibility.",
    linkLabel: "Get a demo",
  },
  {
    title: "Enterprise organizations",
    desc: "SSO, retention, compliance exports, role-based controls, ZoikoTime integration.",
    linkLabel: "Talk to sales",
  },
];

export default function MessagingUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes mucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .muc-hidden  { opacity: 0; transform: translateY(28px); }
        .muc-visible { animation: mucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .muc-card { opacity: 0; transform: translateY(22px); }
        .muc-grid.muc-visible .muc-card {
          animation: mucFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .muc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .muc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        .muc-link {
          transition: gap .2s ease, color .2s ease;
        }
        .muc-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .muc-hidden, .muc-visible, .muc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .muc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`muc-hidden ${badgeIn ? "muc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Use Cases
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`muc-hidden ${headIn ? "muc-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Built for how teams actually communicate.
            </h2>
          </div>

          {/* Flex-wrap grid: 3 per row on desktop, last row centers automatically */}
          <div
            ref={gridRef}
            className={`muc-grid ${gridIn ? "muc-visible" : ""} flex flex-wrap justify-center gap-4 sm:gap-5`}
          >
            {useCases.map((u, i) => (
              <div
                key={i}
                className="muc-card w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="muc-card-inner h-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {u.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {u.desc}
                  </p>
                  <a
                    href="#"
                    className="muc-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                  >
                    {u.linkLabel}
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