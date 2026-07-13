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

const steps = [
  {
    title: "Sema Search",
    desc: "Messages · meetings · mail · files",
    iconBg: "bg-[#3B47DE]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Policy Gate",
    desc: "Permissions · roles · retention",
    iconBg: "bg-gradient-to-br from-orange-400 via-rose-400 to-emerald-500",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "ZoikoTime Context",
    desc: "Work sessions · approved signals",
    iconBg: "bg-[#3A3628]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 13.5" />
      </svg>
    ),
  },
  {
    title: "Answer",
    desc: "Decision · owner · source trail",
    iconBg: "bg-[#4B47E5]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4.5l1.7-3.4A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
    ),
  },
];

export default function SearchZoikoTimeBridgeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: flowRef, inView: flowIn } = useInView(0.1);
  const { ref: noticeRef, inView: noticeIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes ztbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztb-hidden  { opacity: 0; transform: translateY(28px); }
        .ztb-visible { animation: ztbFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ztb-step { opacity: 0; transform: translateY(24px); }
        .ztb-flow.ztb-visible .ztb-step {
          animation: ztbFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .ztb-arrow { opacity: 0; }
        .ztb-flow.ztb-visible .ztb-arrow {
          animation: ztbFadeUp .5s ease forwards;
        }

        .ztb-card {
          transition: transform .3s ease, border-color .3s ease, background-color .3s ease;
        }
        .ztb-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 143, 224, 0.35);
          background-color: rgba(255, 255, 255, 0.04);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztb-hidden, .ztb-visible, .ztb-step, .ztb-arrow { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ztb-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime bridge"
        className="w-full bg-[#0D0B22] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ztb-hidden ${badgeIn ? "ztb-visible" : ""} flex justify-center mb-5`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8B8FE0]">
              ZoikoTime Bridge
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ztb-hidden ${headIn ? "ztb-visible" : ""} text-center mb-6`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-white max-w-[760px] mx-auto mb-5">
              Search connected work context, when policy allows.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/50 max-w-[620px] mx-auto">
              Sema Search can surface approved ZoikoTime context for authorized users without exposing private or unpermitted data.
            </p>
          </div>

          {/* Flow */}
          <div
            ref={flowRef}
            className={`ztb-flow ${flowIn ? "ztb-visible" : ""} flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-2 mt-12 mb-8`}
          >
            {steps.map((step, i) => (
              <React.Fragment key={step.title}>
                <div
                  className="ztb-step w-full lg:w-[220px]"
                  style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                >
                  <div className="ztb-card h-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center">
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full mb-3 ${step.iconBg}`}>
                      {step.icon}
                    </span>
                    <h3 className="text-[14px] font-bold text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[12px] leading-[1.6] text-white/40">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div
                    className="ztb-arrow hidden lg:flex items-center justify-center px-1"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Notice */}
          <div
            ref={noticeRef}
            className={`ztb-hidden ${noticeIn ? "ztb-visible" : ""} flex justify-center`}
          >
            <div className="w-full max-w-[720px] flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p className="text-[12.5px] text-white/60">
                <span className="font-semibold text-white/85">Mandatory:</span> ZoikoTime results are permissioned, policy-governed, and shown only to authorized users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}