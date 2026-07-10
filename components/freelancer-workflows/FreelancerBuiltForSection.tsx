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

const roles = [
  "Freelancers",
  "Consultants",
  "Fractional leaders",
  "Boutique studios",
  "Agencies",
  "Client-facing operators",
];

export default function FreelancerBuiltForSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  const [activePill, setActivePill] = useState(-1);

  useEffect(() => {
    if (!rowIn) return;
    let i = 0;
    const timer = setInterval(() => {
      setActivePill(i);
      i++;
      if (i >= roles.length) clearInterval(timer);
    }, 90);
    return () => clearInterval(timer);
  }, [rowIn]);

  return (
    <>
      <style>{`
        @keyframes fwbFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwb-hidden  { opacity:0; transform:translateY(24px); }
        .fwb-visible { animation: fwbFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes fwbPillIn {
          from { opacity:0; transform:translateY(14px) scale(.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .fwb-pill { opacity:0; }
        .fwb-pill.active { animation: fwbPillIn .4s cubic-bezier(.22,1,.36,1) forwards; }

        .fwb-pill-inner {
          transition: transform .25s ease, border-color .25s ease, background-color .25s ease;
        }
        .fwb-pill-inner:hover {
          transform: translateY(-3px);
          border-color: #3457E8;
          background-color: rgba(52,87,232,0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwb-hidden, .fwb-pill { opacity:1!important; transform:none!important; animation:none!important; }
          .fwb-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Built for independent work and client service"
        className="w-full py-16 md:py-20"
        style={{ background: "#0B0F2E" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          <div
            ref={headRef}
            className={`fwb-hidden ${headIn ? "fwb-visible" : ""} text-center mb-8`}
          >
            <p className="text-[13px] font-semibold text-[#8892C4] tracking-[0.01em]">
              Built for independent work and client service
            </p>
          </div>

          <div
            ref={rowRef}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-3.5"
          >
            {roles.map((role, i) => (
              <div
                key={role}
                className={`fwb-pill ${i <= activePill ? "active" : ""}`}
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <div
                  className="fwb-pill-inner rounded-full px-5 py-2.5 border text-[13.5px] font-medium text-[#C7CCE8] whitespace-nowrap"
                  style={{
                    borderColor: "rgba(136,146,196,0.35)",
                    background: "rgba(136,146,196,0.06)",
                  }}
                >
                  {role}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}