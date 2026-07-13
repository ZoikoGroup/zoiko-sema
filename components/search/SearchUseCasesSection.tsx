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
    title: "Find meeting outcomes",
    desc: "Search for decisions, owners, and next steps after meetings.",
    linkLabel: "Explore Meetings",
    href: "/sema/meetings",
  },
  {
    title: "Recover client context",
    desc: "Find client discussions across calls, mail, files, and spaces.",
    linkLabel: "Explore Client Workflows",
    href: "/sema/client-workflows",
  },
  {
    title: "Search project history",
    desc: "Locate project updates, files, blockers, and resolved issues.",
    linkLabel: "Explore Channels & Spaces",
    href: "/sema/channels-spaces",
  },
  {
    title: "Find follow-ups",
    desc: "Search action items assigned across meetings, messages, and mail.",
    linkLabel: "Explore Sema AI",
    href: "/sema/ai",
  },
  {
    title: "Support governed review",
    desc: "Help authorized admins and managers find permitted records without overexposure.",
    linkLabel: "Explore Admin Console",
    href: "/sema/admin-console",
  },
];

export default function SearchUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes sucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .suc-hidden  { opacity: 0; transform: translateY(28px); }
        .suc-visible { animation: sucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .suc-card { opacity: 0; transform: translateY(24px); }
        .suc-grid.suc-visible .suc-card {
          animation: sucFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .suc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .suc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 24%, transparent);
        }

        .suc-link {
          transition: gap .2s ease, color .2s ease;
        }
        .suc-link:hover {
          gap: 7px;
        }

        @media (prefers-reduced-motion: reduce) {
          .suc-hidden, .suc-visible, .suc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .suc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-25">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`suc-hidden ${badgeIn ? "suc-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Use Cases
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`suc-hidden ${headIn ? "suc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Built for how teams actually search.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`suc-grid ${gridIn ? "suc-visible" : ""} flex flex-wrap justify-center gap-4 sm:gap-5`}
          >
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="suc-card w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="suc-card-inner h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {uc.desc}
                  </p>
                  <a
                    href={uc.href}
                    className="suc-link mt-auto inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand"
                  >
                    {uc.linkLabel}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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