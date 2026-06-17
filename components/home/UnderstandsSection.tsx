"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const inputs = [
  {
    label: "Chat & threads",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: "Audio call",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Video meeting",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    label: "Shared file",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
  {
    label: "Deadline mentioned",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
];

const outputs = [
  "Summary generated",
  "Action items extracted",
  "Owner & due date assigned",
  "Decision logged",
  "ZoikoTime signal sent",
];

export default function UnderstandsSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: boxRef,   inView: boxIn   } = useInView(0.1);
  const { ref: colsRef,  inView: colsIn  } = useInView(0.1);

  // animate each input row in sequence once box is in view
  const [activeInput,  setActiveInput]  = useState(-1);
  const [activeOutput, setActiveOutput] = useState(-1);
  const [arrowPulse,   setArrowPulse]   = useState(false);

  useEffect(() => {
    if (!boxIn) return;
    let i = 0;
    const inputTimer = setInterval(() => {
      setActiveInput(i);
      i++;
      if (i >= inputs.length) clearInterval(inputTimer);
    }, 180);

    // after inputs done, pulse arrow then light up outputs
    const arrowTimer = setTimeout(() => {
      setArrowPulse(true);
      let o = 0;
      const outputTimer = setInterval(() => {
        setActiveOutput(o);
        o++;
        if (o >= outputs.length) clearInterval(outputTimer);
      }, 180);
    }, inputs.length * 180 + 300);

    return () => { clearInterval(inputTimer); clearTimeout(arrowTimer); };
  }, [boxIn]);

  return (
    <>
      <style>{`
        @keyframes usFadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .us-hidden  { opacity:0; transform:translateY(32px); }
        .us-visible { animation: usFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* input pill entrance */
        @keyframes usSlideIn {
          from { opacity:0; transform:translateX(-18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .us-input-pill { opacity:0; }
        .us-input-pill.active { animation: usSlideIn .35s ease forwards; }

        /* output pill entrance */
        @keyframes usSlideInR {
          from { opacity:0; transform:translateX(18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .us-output-pill { opacity:0; }
        .us-output-pill.active { animation: usSlideInR .35s ease forwards; }

        /* arrow pulse */
        @keyframes usArrowPop {
          0%   { transform:scale(1); }
          40%  { transform:scale(1.22); }
          70%  { transform:scale(0.92); }
          100% { transform:scale(1); }
        }
        .us-arrow.pulse { animation: usArrowPop .45s ease forwards; }

        /* pill hover */
        .us-input-pill:hover  { transform:translateX(3px)!important; transition:transform .2s ease; }
        .us-output-pill:hover { transform:translateX(-3px)!important; transition:transform .2s ease; }

        /* col cards */
        .us-col { transition: transform .3s ease; }
        .us-col:hover { transform: translateY(-4px); }

        @media (prefers-reduced-motion:reduce) {
          .us-hidden,.us-input-pill,.us-output-pill { opacity:1!important; transform:none!important; animation:none!important; }
          .us-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Sema understands what matters"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-12 text-center us-hidden ${headIn ? "us-visible" : ""}`}
          >
            <h2 className="text-[clamp(24px,3.6vw,35px)] font-bold leading-[1.12] tracking-tight text-gray-900 mb-4 max-w-[700px] mx-auto">
              More than carrying conversations Sema understands what matters inside them
            </h2>
            <p className="mx-auto max-w-[720px] text-[15px] leading-[1.75] text-gray-500">
              Every message, call, meeting and decision becomes structured context helping
              people remember, teams execute, and businesses operate with clarity.
            </p>
          </div>

          {/* ── Flow box ── */}
          <div
            ref={boxRef}
            className={`us-hidden ${boxIn ? "us-visible" : ""} rounded-2xl mb-12 p-8 md:p-10`}
            style={{ background: "#A7C7FF" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-6 items-center">

              {/* LEFT — Inputs */}
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#474787] mb-5">
                  Inputs · Communication
                </p>
                <div className="flex flex-col gap-3">
                  {inputs.map((item, i) => (
                    <div
                      key={i}
                      className={`us-input-pill flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm ${i <= activeInput ? "active" : ""}`}
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      <span className="text-[14px] font-medium text-gray-800">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER — Arrow */}
              <div className="flex items-center justify-center">
                <div
                  className={`us-arrow w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg ${arrowPulse ? "pulse" : ""}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>

              {/* RIGHT — Outputs */}
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#474787] mb-5">
                  Outputs · Intelligence
                </p>
                <div className="flex flex-col gap-3">
                  {outputs.map((label, i) => (
                    <div
                      key={i}
                      className={`us-output-pill flex items-center gap-3 rounded-xl px-4 py-3.5 ${i <= activeOutput ? "active" : ""}`}
                      style={{
                        background: "#474787",
                        animationDelay: `${i * 0.04}s`,
                      }}
                    >
                      {/* circle check icon */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#a5a8e0" }}>
                        {i <= activeOutput && (
                          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <polyline points="2,5 4,7 8,3" stroke="#a5a8e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      <span className="text-[14px] font-medium text-white">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── 3 columns ── */}
          <div
            ref={colsRef}
            className={`us-hidden ${colsIn ? "us-visible" : ""} grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Col 1 */}
            <div className="us-col px-0 md:pr-10 pb-8 md:pb-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8A8699] mb-3">
                For Individuals
              </p>
              <h3 className="text-[clamp(18px,1.8vw,22px)] font-bold text-gray-900 mb-3 leading-snug">
                Remember more of{" "}
                <em className="font-bold" style={{ fontFamily: "Georgia, serif", color: "#474787" }}>
                  what matters
                </em>
                .
              </h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">
                Sema helps individuals keep track of conversations, calls, follow-ups and decisions
                — without manually taking notes after every discussion.
              </p>
            </div>

            {/* Col 2 */}
            <div className="us-col px-0 md:px-10 py-8 md:py-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-3">
                For Teams
              </p>
              <h3 className="text-[clamp(18px,1.8vw,22px)] font-bold text-gray-900 mb-3 leading-snug">
                Turn conversations into{" "}
                <em className="font-bold" style={{ fontFamily: "Georgia, serif", color: "#474787" }}>
                  execution
                </em>
                .
              </h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">
                Sema helps teams move from discussion to action with AI summaries, task signals and
                searchable context across every channel and call.
              </p>
            </div>

            {/* Col 3 */}
            <div className="us-col px-0 md:pl-10 pt-8 md:pt-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-3">
                For Businesses
              </p>
              <h3 className="text-[clamp(18px,1.8vw,22px)] font-bold text-gray-900 mb-3 leading-snug">
                Create a{" "}
                <em className="font-bold" style={{ fontFamily: "Georgia, serif", color: "#474787" }}>
                  governed
                </em>
                {" "}communication layer.
              </h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">
                Sema gives businesses the foundation for structured communication, stronger
                accountability and integration into ZoikoTime where workforce verification is required.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}