"use client";

import React from "react";

interface Step {
  number: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "We review your request",
    desc: "We review your team size, role, product interest, and message so your request reaches the right person.",
  },
  {
    number: "02",
    title: "We follow up",
    desc: "A member of the Sema team will follow up with the next best step, typically within one business day.",
  },
  {
    number: "03",
    title: "Your demo is tailored",
    desc: "The demo is shaped around your use case, tools, team size, and whether ZoikoTime integration is relevant.",
  },
];

export default function GetDemoWhatHappensSection() {
  return (
    <>
      <style>{`
        @keyframes gdwFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gdwDotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow: 0 0 0 6px rgba(71,71,135,0); }
        }
        @keyframes gdwLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .gdw-enter-1 { animation: gdwFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .gdw-enter-2 { animation: gdwFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }

        .gdw-step-enter {
          animation: gdwFadeUp 0.55s cubic-bezier(.22,1,.36,1) both;
        }

        .gdw-badge-circle {
          animation: gdwDotPulse 2.6s ease-in-out infinite;
        }

        /* connector line between circles — desktop only */
        .gdw-connector {
          transform-origin: left;
          animation: gdwLineGrow 0.7s cubic-bezier(.22,1,.36,1) both;
        }

        /* card hover */
        .gdw-step {
          transition: transform .25s cubic-bezier(.22,1,.36,1);
        }
        .gdw-step:hover {
          transform: translateY(-3px);
        }
        .gdw-step:hover .gdw-badge-circle {
          box-shadow: 0 8px 18px rgba(71,71,135,0.35);
        }
        .gdw-step-title { transition: color .2s ease; }
        .gdw-step:hover .gdw-step-title { color: #474787; }

        @media (prefers-reduced-motion: reduce) {
          .gdw-enter-1, .gdw-enter-2, .gdw-step-enter, .gdw-connector {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .gdw-badge-circle { animation: none !important; }
          .gdw-step:hover { transform: none; }
        }

        /* ── mobile responsive: vertical timeline ── */
        @media (max-width: 767px) {
          .gdw-steps-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 36px;
          }
          .gdw-step-wrap {
            width: 100% !important;
            display: flex;
            align-items: flex-start;
            gap: 16px;
          }
          .gdw-step-number-col {
            flex-direction: column;
            align-items: center;
          }
          .gdw-connector {
            width: 2px !important;
            height: 36px !important;
            position: absolute;
            left: 17px;
            top: 38px;
            transform-origin: top;
          }
          .gdw-step-index-label {
            display: none;
          }
        }
      `}</style>

      <section
        aria-label="What happens next"
        className="w-full bg-white py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div className="text-center mb-14">
            <p className="gdw-enter-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#474787] mb-3">
              After you submit
            </p>
            <h2
              className="gdw-enter-2 font-bold leading-[1.18] tracking-tight text-[#15131F]"
              style={{ fontSize: "30px" }}
            >
              What happens next
            </h2>
          </div>

          {/* ── Steps row ── */}
          <div className="gdw-steps-row flex items-start justify-between gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="gdw-step-wrap relative"
                style={{ width: i < steps.length - 1 ? "31%" : "31%" }}
              >
                <div
                  className="gdw-step-enter"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="gdw-step">
                    {/* Number row: "1." + circle + connector */}
                    <div className="gdw-step-number-col flex items-center gap-3 mb-5 relative">
                      <span className="gdw-step-index-label text-[13px] font-semibold text-gray-400 flex-shrink-0">
                        {i + 1}.
                      </span>

                      <span
                        className="gdw-badge-circle flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold relative z-10"
                        style={{ background: "#474787", border: "2px solid #a5b4fc" }}
                      >
                        {step.number}
                      </span>

                      {/* connector line to next step — desktop horizontal */}
                   
                      {/* connector line — mobile vertical */}
                      {i < steps.length - 1 && (
                        <span
                          className="gdw-connector md:hidden"
                          style={{
                            background: "#D8DCF2",
                            animationDelay: `${0.2 + i * 0.15}s`,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="gdw-step-title text-[16px] font-bold text-[#15131F] mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] leading-[1.7] text-[#5C5870] max-w-[260px]">
                      {step.desc}
                    </p>
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