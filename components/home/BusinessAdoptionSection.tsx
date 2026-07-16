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
  "One person starts using Sema",
  "A team workspace forms organically",
  "Managers see communication clarity",
  "The business adopts Sema with admin controls",
  "ZoikoTime integration adds workforce truth where required",
];

export default function BusinessAdoptionSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes basFadeLeft {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes basFadeRight {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bas-left-hidden  { opacity: 0; transform: translateY(24px); }
        .bas-left-visible { animation: basFadeLeft .65s cubic-bezier(.22,1,.36,1) forwards; }

        .bas-right-hidden  { opacity: 0; transform: translateY(24px); }
        .bas-right-visible { animation: basFadeRight .65s cubic-bezier(.22,1,.36,1) forwards; }

        .bas-step { opacity: 0; transform: translateX(-10px); }
        .bas-steps.bas-steps-visible .bas-step {
          animation: basStepIn .45s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes basStepIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .bas-img {
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .bas-img-wrap:hover .bas-img {
          transform: scale(1.02);
        }

        .bas-btn {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .bas-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .bas-left-hidden, .bas-left-visible,
          .bas-right-hidden, .bas-right-visible, .bas-step {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .bas-img-wrap:hover .bas-img, .bas-btn:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Business adoption"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
            {/* Left - full image (sits on top, higher z-index) */}
            <div
              ref={leftRef}
              className={`bas-left-hidden ${leftIn ? "bas-left-visible" : ""} bas-img-wrap relative z-20 lg:mr-[-40px]`}
            >
              <img
                src="/Home/BusinessAdoptionSection.webp"
                alt="Business adoption of Sema"
                className="bas-img w-full h-auto rounded-2xl"
              />
            </div>

            {/* Right - purple content card (sits behind, shifted down) */}
            <div
              ref={rightRef}
              className={`bas-right-hidden ${rightIn ? "bas-right-visible" : ""} relative z-10 lg:mt-15`}
              style={{ animationDelay: "0.12s" }}
            >
              <div
                className="rounded-[22px] shadow-[0_30px_60px_rgba(46,42,110,0.3)] p-7 sm:p-9 sm:pl-20"
                style={{ background: "#2D2A7A" }}
              >
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/60 mb-3">
                  Path B &middot; Business Adoption
                </p>
                <h3 className="text-[19px] sm:text-[21px] font-bold leading-[1.3] text-white mb-6">
                  One person starts. The whole organization scales into governed communication.
                </h3>

                <ol
                  className={`bas-steps ${rightIn ? "bas-steps-visible" : ""} flex flex-col gap-3 mb-8`}
                >
                  {steps.map((step, i) => (
                    <li
                      key={step}
                      className="bas-step flex items-start gap-3"
                      style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 text-white text-[10.5px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/75">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
<a
                
                  href="/get-a-demo"
                  className="bas-btn inline-flex items-center justify-center rounded-full text-[#fff] bg-[#4F46E5] text-[14px] font-semibold px-7 py-3.5"
                >
                  Get a business demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}