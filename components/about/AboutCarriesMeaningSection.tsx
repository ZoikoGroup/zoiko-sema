"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const rows = [
  {
    leftLabel: "Ordinary Tools",
    leftText: "carry messages and calls — but the context they create disappears the moment the conversation ends.",
    rightLabel: "Sema",
    rightText: (
      <>
        turns every conversation into{" "}
        <em className="not-italic italic font-semibold" style={{ color: "#4f46e5", fontFamily: "Georgia, serif" }}>
          structured context
        </em>{" "}
        — searchable, attributable and ready to drive what happens next.
      </>
    ),
  },
  {
    leftLabel: "Ordinary Meeting Notes",
    leftText: "depend on someone typing fast enough to capture decisions and follow-ups before the next meeting starts.",
    rightLabel: "Sema's AI",
    rightText: (
      <>
        summarizes meetings, identifies decisions and extracts{" "}
        <em className="not-italic italic font-semibold" style={{ color: "#4f46e5", fontFamily: "Georgia, serif" }}>
          action items
        </em>{" "}
        with owners and due dates — automatically.
      </>
    ),
  },
  {
    leftLabel: "Ordinary Workforce Systems",
    leftText: "sit outside communication, leaving managers to reconcile meetings, time records and activity by hand.",
    rightLabel: "Sema + ZoikoTime",
    rightText: (
      <>
        connects communication to{" "}
        <em className="not-italic italic font-semibold" style={{ color: "#4f46e5", fontFamily: "Georgia, serif" }}>
          verified workforce context
        </em>{" "}
        for organizations that need deeper accountability.
      </>
    ),
  },
];

export default function AboutCarriesMeaningSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowsRef, inView: rowsIn } = useInView(0.08);

  const [rowActive, setRowActive] = useState(-1);

  useEffect(() => {
    if (!rowsIn) return;
    rows.forEach((_, i) => {
      setTimeout(() => setRowActive(i), i * 180);
    });
  }, [rowsIn]);

  return (
    <>
      <style>{`
        @keyframes acmFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .acm-hidden  { opacity:0; transform:translateY(22px); }
        .acm-visible { animation: acmFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* row entrance — left slides from left, right from right */
        @keyframes acmRowLeft {
          from { opacity:0; transform:translateX(-18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes acmRowRight {
          from { opacity:0; transform:translateX(18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes acmArrowPop {
          0%   { opacity:0; transform:scale(.7); }
          65%  { transform:scale(1.12); }
          100% { opacity:1; transform:scale(1); }
        }

        .acm-row-left  { opacity:0; }
        .acm-row-right { opacity:0; }
        .acm-row-arrow { opacity:0; }

        .acm-row-left.on  { animation: acmRowLeft  .45s ease forwards; }
        .acm-row-right.on { animation: acmRowRight .45s ease .08s forwards; }
        .acm-row-arrow.on { animation: acmArrowPop .4s cubic-bezier(.22,1,.36,1) .04s forwards; }

        /* arrow circle hover */
        .acm-arrow-circle {
          transition: background .2s ease, transform .2s ease, box-shadow .2s ease;
        }
        .acm-arrow-circle:hover {
          background: #4f46e5 !important;
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(79,70,229,0.28);
        }
        .acm-arrow-circle:hover svg { stroke: #fff !important; }

        /* row hover highlight */
        .acm-row-wrap {
          transition: background .2s ease;
          border-radius: 12px;
        }
        .acm-row-wrap:hover { background: #fafafa; }

        @media (prefers-reduced-motion:reduce) {
          .acm-hidden,.acm-row-left,.acm-row-right,.acm-row-arrow {
            opacity:1!important; transform:none!important; animation:none!important;
          }
          .acm-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Other tools carry messages. Sema carries meaning."
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`acm-hidden ${headIn ? "acm-visible" : ""} text-center mb-14`}
          >
            <h2 className="text-[clamp(24px,3.8vw,35px)] font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
              Other tools carry messages. Sema carries meaning
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.8] text-gray-500">
              Three places where Sema&apos;s behaviour deliberately diverges from the tools you already
              use — and why that matters when communication has to lead to action.
            </p>
          </div>

          {/* ── Comparison rows ── */}
          <div ref={rowsRef} className="flex flex-col">
            {rows.map((row, i) => (
              <div key={i}>
                {/* top divider */}
                <div className="w-full h-px bg-gray-100" />

                <div className="acm-row-wrap grid grid-cols-[1fr_56px_1fr] gap-6 items-center py-8 px-3">

                  {/* LEFT — ordinary / faded */}
                  <div className={`acm-row-left ${i <= rowActive ? "on" : ""} flex flex-col gap-2`}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8A8699]">
                      {row.leftLabel}
                    </p>
                    <p className="text-[15px] leading-[1.75] text-gray-400">
                      {row.leftText}
                    </p>
                  </div>

                  {/* CENTER — arrow circle */}
                  <div className="flex items-center justify-center">
                    <div
                      className={`acm-row-arrow acm-arrow-circle ${i <= rowActive ? "on" : ""} w-11 h-11 rounded-full flex items-center justify-center cursor-default`}
                      style={{ background: "#EEF2FF" }}
                    >
                      <svg
                        width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="#4f46e5"
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>

                  {/* RIGHT — Sema / bold + italic highlight */}
                  <div className={`acm-row-right ${i <= rowActive ? "on" : ""} flex flex-col gap-2`}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#4f46e5" }}>
                      {row.rightLabel}
                    </p>
                    <p className="text-[15px] leading-[1.75] font-semibold text-gray-900">
                      {row.rightText}
                    </p>
                  </div>

                </div>
              </div>
            ))}

            {/* bottom divider */}
            <div className="w-full h-px bg-gray-100" />
          </div>

        </div>
      </section>
    </>
  );
}