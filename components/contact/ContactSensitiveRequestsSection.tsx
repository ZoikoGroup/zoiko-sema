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
    title: "Security concern",
    desc: "Report a vulnerability, suspicious access, or request a security review with a severity level.",
    tags: ["Security Policy", "Trust Center", "System Status"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Legal request",
    desc: "Ask about Terms, DPA, policy questions, or enterprise contracts.",
    tags: ["Terms", "DPA", "Acceptable Use"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    ),
  },
  {
    title: "Privacy request",
    desc: "Data access, deletion, cookie choices, or DPA routing.",
    tags: ["Privacy Notice", "Cookie Policy", "DPA"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "AI governance request",
    desc: "Questions about AI summaries, admin controls, retention, human review, or policy.",
    tags: ["AI Use Policy", "Admin Console", "Trust Center"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
      </svg>
    ),
  },
  {
    title: "Abuse report",
    desc: "Report misuse, spam, harmful content, or a policy violation.",
    tags: ["Acceptable Use", "Security Policy"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Enterprise review",
    desc: "Procurement, security questionnaires, and deployment conversations.",
    tags: ["Trust Center", "DPA", "Contact Sales"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
];

export default function ContactSensitiveRequestsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes srsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .srs-hidden  { opacity: 0; transform: translateY(28px); }
        .srs-visible { animation: srsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .srs-card { opacity: 0; transform: translateY(24px); }
        .srs-grid.srs-visible .srs-card {
          animation: srsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .srs-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .srs-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
          border-color: rgba(148, 163, 253, 0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .srs-hidden, .srs-visible, .srs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .srs-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Sensitive requests"
        className="w-full bg-[#0B1330] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`srs-hidden ${badgeIn ? "srs-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-indigo-300">
              Security, Legal &amp; Privacy
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`srs-hidden ${headIn ? "srs-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-white max-w-[720px] mx-auto">
              Sensitive requests, handled carefully
            </h2>
          </div>

          {/* Subtext */}
          <p
            className={`srs-hidden ${headIn ? "srs-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-slate-400 max-w-[640px] mx-auto mb-12 sm:mb-16`}
            style={{ animationDelay: "0.14s" }}
          >
            Dedicated routes for security, legal, privacy, AI governance, and
            abuse — each with the right policy links and safe handling.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`srs-grid ${gridIn ? "srs-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="srs-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="srs-card-inner h-full bg-[#111A3B] rounded-2xl border border-white/10 p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-slate-400 mb-4">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-400/25 px-3 py-1 text-[11.5px] font-medium text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}