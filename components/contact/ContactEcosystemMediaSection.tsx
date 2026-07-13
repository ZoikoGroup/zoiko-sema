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

const routes = [
  {
    title: "Partnership inquiry",
    desc: "Technology, channel, implementation, consulting, referral, or marketplace routes — routed to the partnerships team. Include partner type, region, and proposal.",
    iconBg: "bg-[#B4680A]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    links: [
      { label: "Partner Inquiry", primary: true },
      { label: "Partners page", primary: false },
      { label: "Developer Docs", primary: false },
    ],
  },
  {
    title: "Press inquiry",
    desc: "Media contact, brand assets, company facts, or interviews — routed to communications. Include publication, deadline, and request details.",
    iconBg: "bg-[#5B4CE0]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
    links: [
      { label: "Press Contact", primary: true },
      { label: "Press page", primary: false },
      { label: "Media kit", primary: false },
    ],
  },
];

export default function ContactEcosystemMediaSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes emsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ems-hidden  { opacity: 0; transform: translateY(28px); }
        .ems-visible { animation: emsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ems-card { opacity: 0; transform: translateY(24px); }
        .ems-grid.ems-visible .ems-card {
          animation: emsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ems-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ems-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 31, 78, 0.08);
          border-color: rgba(91, 76, 224, 0.25);
        }

        .ems-btn {
          transition: background-color .2s ease, border-color .2s ease, color .2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .ems-hidden, .ems-visible, .ems-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ems-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Ecosystem and media routes"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ems-hidden ${badgeIn ? "ems-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand">
              Partners &amp; Press
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ems-hidden ${headIn ? "ems-visible" : ""} text-center mb-12 sm:mb-16`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              Ecosystem and media routes
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ems-grid ${gridIn ? "ems-visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5`}
          >
            {routes.map((r, i) => (
              <div
                key={r.title}
                className="ems-card"
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                <div className="ems-card-inner h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${r.iconBg} shrink-0`}
                    >
                      {r.icon}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mb-2">
                        {r.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-5">
                        {r.desc}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {r.links.map((link) => (
                          <button
                            key={link.label}
                            type="button"
                            className={`ems-btn inline-flex items-center rounded-lg px-4 py-2 text-[13px] font-semibold ${
                              link.primary
                                ? "bg-brand text-white hover:bg-brand/90"
                                : "bg-white text-gray-900 border border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    </div>
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