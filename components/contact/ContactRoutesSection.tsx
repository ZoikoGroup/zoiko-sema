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
    title: "Sales & demo",
    desc: "Talk to us about plans, pricing, demos, enterprise setup, and rollout.",
    linkLabel: "Contact Sales",
    href: "/contact/sales",
    iconBg: "bg-[#4B47E5]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Customer support",
    desc: "Get help with product issues, account questions, workspace settings, and troubleshooting.",
    linkLabel: "Get Support",
    href: "/contact/support",
    iconBg: "bg-emerald-600",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Partnerships",
    desc: "Explore channel, integration, implementation, or ecosystem partnerships.",
    linkLabel: "Partner Inquiry",
    href: "/contact/partnerships",
    iconBg: "bg-amber-600",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Press",
    desc: "Request media contact, brand assets, company facts, or interview support.",
    linkLabel: "Press Contact",
    href: "/contact/press",
    iconBg: "bg-[#6C63F5]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    title: "Security",
    desc: "Report security concerns or request a security review route.",
    linkLabel: "Report Concern",
    href: "/contact/security",
    iconBg: "bg-indigo-600",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Legal & privacy",
    desc: "Ask about legal policies, DPA, privacy requests, data processing, or AI use policy.",
    linkLabel: "Legal Request",
    href: "/contact/legal",
    iconBg: "bg-[#151538]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function ContactRoutesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes crsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .crs-hidden  { opacity: 0; transform: translateY(28px); }
        .crs-visible { animation: crsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .crs-card { opacity: 0; transform: translateY(24px); }
        .crs-grid.crs-visible .crs-card {
          animation: crsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .crs-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .crs-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 15, 42, 0.08);
          border-color: rgba(75, 71, 229, 0.24);
        }

        .crs-link {
          transition: gap .2s ease;
        }
        .crs-link:hover {
          gap: 7px;
        }

        @media (prefers-reduced-motion: reduce) {
          .crs-hidden, .crs-visible, .crs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .crs-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Contact routes"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`crs-hidden ${badgeIn ? "crs-visible" : ""} flex items-center justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Contact Routes
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`crs-hidden ${headIn ? "crs-visible" : ""} text-center mb-12 sm:mb-14`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-3">
              Choose the topic that matches your request
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-gray-500 max-w-[620px] mx-auto">
              Pick a route to open a form tailored to it. Sales and support are equally easy to reach — nothing hidden behind the other.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`crs-grid ${gridIn ? "crs-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {routes.map((route, i) => (
              <div
                key={route.title}
                className="crs-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="crs-card-inner h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col">
                  <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${route.iconBg}`}>
                    {route.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {route.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {route.desc}
                  </p>
                  <a
                    href={route.href}
                    className="crs-link mt-auto inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand"
                  >
                    {route.linkLabel}
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