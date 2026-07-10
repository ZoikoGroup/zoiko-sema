"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
function useInView(threshold = 0.2) {
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

const stats = [
  {
    value: "3.2x",
    label: "Faster response time",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    value: "48%",
    label: "Fewer status meetings",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    value: "99.9%",
    label: "Uptime target",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function IndividualProductivityTestimonialSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: quoteRef, inView: quoteIn } = useInView(0.2);
  const { ref: authorRef, inView: authorIn } = useInView(0.2);
  const { ref: statsRef, inView: statsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes iptFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipt-hidden  { opacity: 0; transform: translateY(28px); }
        .ipt-visible { animation: iptFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipt-stat { opacity: 0; transform: translateY(24px); }
        .ipt-stat.ipt-stat-in {
          animation: iptFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipt-stat {
          transition: transform .25s ease, background .25s ease;
        }
        .ipt-stat:hover {
          transform: translateY(-3px) translateX(2px);
          background: rgba(255,255,255,0.16);
        }

        .ipt-stat-icon { transition: transform .25s ease; }
        .ipt-stat:hover .ipt-stat-icon { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .ipt-hidden, .ipt-stat { opacity: 1 !important; transform: none !important; }
          .ipt-visible, .ipt-stat-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="What teams say"
        className="w-full py-20 md:py-24"
        style={{ background: BRAND }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

            {/* LEFT — quote */}
            <div>
              <p
                ref={eyebrowRef}
                className={`ipt-hidden ${eyebrowIn ? "ipt-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-5`}
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                What Teams Say
              </p>

              <div
                ref={quoteRef}
                className={`ipt-hidden ${quoteIn ? "ipt-visible" : ""}`}
                style={{ animationDelay: "0.05s" }}
              >
                <span className="text-[40px] leading-none text-white/50 font-serif">
                  &ldquo;
                </span>
                <p className="text-[clamp(20px,2.6vw,26px)] font-bold leading-[1.4] text-white -mt-2 max-w-[520px]">
                  I start every morning in one place now. My priorities,
                  meetings, and follow-ups are ready before I open anything
                  else — nothing slips.
                </p>
              </div>

              <div
                ref={authorRef}
                className={`ipt-hidden ${authorIn ? "ipt-visible" : ""} flex items-center gap-3 mt-8`}
                style={{ animationDelay: "0.1s" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #ffffff30, #ffffff10)" }}
                >
                  <span className="text-[13px] font-bold text-white">VG</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">
                    Veer Grover
                  </p>
                  <p className="text-[12.5px] leading-tight" style={{ color: "rgba(255,255,255,0.7)" }}>
                    VP of Operations · Northwind Labs
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — stat cards */}
            <div ref={statsRef} className="flex flex-col gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`ipt-stat ${statsIn ? "ipt-stat-in" : ""} flex items-center gap-4 rounded-2xl px-5 py-4`}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div
                    className="ipt-stat-icon w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.14)" }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[19px] font-bold text-white leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {stat.label}
                    </p>
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