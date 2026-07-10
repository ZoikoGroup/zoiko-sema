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

const BRAND = "#3457E8";

const outcomes = [
  {
    title: "Faster evidence preparation",
    sub: "Target · validating with early customers",
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h7v8l10-12h-7z" />
      </svg>
    ),
  },
  {
    title: "Fewer missed approvals",
    sub: "Target · validating with early customers",
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Improved policy visibility",
    sub: "Target · validating with early customers",
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Reduced tool switching",
    sub: "Target · validating with early customers",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
];

export default function RegulatedWorkflowsTestimonialSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes rtFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rt-hidden  { opacity: 0; transform: translateY(28px); }
        .rt-visible { animation: rtFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rt-item { opacity: 0; transform: translateY(16px); }
        .rt-list.rt-list-visible .rt-item {
          animation: rtFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rt-item-inner {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .rt-item-inner:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(52,87,232,0.1);
          border-color: rgba(52,87,232,0.18);
        }

        .rt-quote-mark {
          transition: transform .3s ease;
        }
        .rt-quote-card:hover .rt-quote-mark {
          transform: scale(1.1) rotate(-4deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .rt-hidden, .rt-visible, .rt-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rt-item-inner:hover, .rt-quote-card:hover .rt-quote-mark { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Testimonial and expected outcomes"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {/* Left - quote card */}
            <div
              ref={leftRef}
              className={`rt-hidden ${leftIn ? "rt-visible" : ""} rt-quote-card h-full`}
            >
              <div
                className="h-full rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, #EAEDFB 0%, #DCE1FA 100%)",
                }}
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="rt-quote-mark block text-[34px] leading-none font-serif mb-4"
                    style={{ color: BRAND }}
                  >
                    &ldquo;
                  </span>

                  <p className="text-[18px] sm:text-[20px] font-bold leading-[1.4] text-gray-900">
                    Zoiko Sema gives our team one place to collaborate, approve, and preserve the proof we need.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white text-[13px] font-bold shrink-0"
                    style={{ background: BRAND }}
                  >
                    MC
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-gray-900">Compliance Operations Lead</p>
                    <p className="text-[12px] text-gray-500">Regulated services &middot; placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - outcome cards */}
            <div
              ref={rightRef}
              className={`rt-list ${rightIn ? "rt-list-visible" : ""} h-full flex flex-col gap-3 sm:gap-4`}
            >
              {outcomes.map((o, i) => (
                <div
                  key={o.title}
                  className="rt-item flex-1"
                  style={{ animationDelay: `${0.06 + i * 0.08}s` }}
                >
                  <div className="rt-item-inner h-full rounded-2xl border border-gray-100 px-5 py-4 sm:py-5 flex items-center gap-4">
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ background: o.iconBg, color: o.iconColor }}
                    >
                      {o.icon}
                    </span>
                    <div>
                      <p className="text-[13.5px] sm:text-[14px] font-bold text-gray-900">{o.title}</p>
                      <p className="text-[11.5px] sm:text-[12px] text-gray-400">{o.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}