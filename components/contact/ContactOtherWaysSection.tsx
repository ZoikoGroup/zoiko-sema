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

const generalIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const officeIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const legalIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="5" y1="21" x2="5" y2="10" />
    <line x1="9" y1="21" x2="9" y2="10" />
    <line x1="15" y1="21" x2="15" y2="10" />
    <line x1="19" y1="21" x2="19" y2="10" />
    <polygon points="12 3 21 8 3 8" />
  </svg>
);

const socialIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const linkedinIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.7 8 21 10.3 21 14.03V23h-4v-8.1c0-1.93-.03-4.4-2.68-4.4-2.68 0-3.09 2.1-3.09 4.27V23h-4V8z" />
  </svg>
);

const xIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.5h7.59l5.24 6.93L18.9 1.5zm-1.3 18.8h2.04L6.5 3.6H4.3l13.3 16.7z" />
  </svg>
);

const youtubeIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
  </svg>
);

const cards = [
  {
    type: "general" as const,
    title: "General inquiry",
    desc: "Not sure where to start? Choose General and we'll route from there.",
    icon: generalIcon,
    cta: "General inquiry",
  },
  {
    type: "text" as const,
    title: "Office",
    desc: "Our official location is listed once verified.",
    note: "[Official company address to be confirmed]",
    icon: officeIcon,
  },
  {
    type: "text" as const,
    title: "Legal entity",
    desc: "Registered entity details are shown once verified by legal.",
    note: "[Legal entity details to be confirmed]",
    icon: legalIcon,
  },
  {
    type: "social" as const,
    title: "Social",
    desc: "Follow official Zoiko Sema channels.",
    icon: socialIcon,
    socials: [
      { label: "LinkedIn", icon: linkedinIcon },
      { label: "X", icon: xIcon },
      { label: "YouTube", icon: youtubeIcon },
    ],
  },
];

export default function ContactOtherWaysSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes owsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ows-hidden  { opacity: 0; transform: translateY(28px); }
        .ows-visible { animation: owsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ows-card { opacity: 0; transform: translateY(24px); }
        .ows-grid.ows-visible .ows-card {
          animation: owsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ows-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ows-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 31, 78, 0.08);
          border-color: rgba(91, 76, 224, 0.25);
        }

        .ows-social-btn {
          transition: background-color .2s ease, color .2s ease;
        }
        .ows-social-btn:hover {
          background-color: var(--brand);
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          .ows-hidden, .ows-visible, .ows-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ows-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Other ways to reach us"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ows-hidden ${badgeIn ? "ows-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand">
              Company Information
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ows-hidden ${headIn ? "ows-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              Other ways to reach us
            </h2>
          </div>

          {/* Subtext */}
          <p
            className={`ows-hidden ${headIn ? "ows-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[620px] mx-auto mb-12 sm:mb-16`}
            style={{ animationDelay: "0.14s" }}
          >
            Not sure which route fits? Start with a general inquiry — we&apos;ll
            still ask enough to route it correctly.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ows-grid ${gridIn ? "ows-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="ows-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="ows-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-gray-500 mb-1">
                    {c.desc}
                  </p>

                  {c.type === "text" && (
                    <p className="text-[12px] italic leading-[1.7] text-gray-400 mt-1">
                      {c.note}
                    </p>
                  )}

                  {c.type === "general" && (
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center rounded-lg bg-white text-gray-900 border border-gray-300 hover:border-gray-400 px-4 py-2 text-[13px] font-semibold transition-colors"
                    >
                      {c.cta}
                    </button>
                  )}

                  {c.type === "social" && (
                    <div className="flex gap-2 mt-4">
                      {c.socials.map((s) => (
                        <a
                          key={s.label}
                          href="#"
                          aria-label={s.label}
                          className="ows-social-btn inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}