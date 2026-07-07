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

const checklist = [
  "AI call summaries generated after eligible calls, subject to policy and consent",
  "Decision capture attached to the relevant chat, channel, or project",
  "Action items with owners, deadlines, and follow-up prompts",
  "Ask Sema — ask questions about a call summary within permission boundaries",
];

const tabs = ["Summary", "Decisions", "Action items"];

export default function AudioCallsAIIntelligenceSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes aiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aiFadeUpR {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ai-hidden  { opacity: 0; transform: translateY(28px); }
        .ai-visible { animation: aiFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ai-item { opacity: 0; transform: translateY(16px); }
        .ai-left.ai-visible .ai-item {
          animation: aiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-frame-hidden { opacity: 0; transform: translateY(32px) scale(0.98); }
        .ai-frame-visible { animation: aiFadeUpR .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ai-frame { transition: box-shadow .35s ease; }
        .ai-frame:hover { box-shadow: 0 30px 60px rgba(10,10,30,0.35); }

        .ai-tab { transition: transform .25s ease, background-color .25s ease; }
        .ai-tab:hover { transform: translateY(-2px); }

        @media (prefers-reduced-motion: reduce) {
          .ai-hidden, .ai-visible, .ai-item,
          .ai-frame-hidden, .ai-frame-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ai-frame:hover, .ai-tab:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="AI call intelligence"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT */}
            <div ref={leftRef} className={`ai-left ai-hidden ${leftIn ? "ai-visible" : ""}`}>
              <div className="ai-item inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                  AI Call Intelligence
                </span>
              </div>

              <h2
                className="ai-item text-[clamp(24px,3.6vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-5"
                style={{ animationDelay: "0.08s" }}
              >
                Structured support for decisions, not silent recording.
              </h2>

              <p
                className="ai-item text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 mb-7 max-w-[480px]"
                style={{ animationDelay: "0.14s" }}
              >
                AI call intelligence is always policy-controlled, permissioned,
                visible, and auditable — never a silent recording or
                transcription layer.
              </p>

              <ul className="flex flex-col gap-4">
                {checklist.map((item, i) => (
                  <li
                    key={i}
                    className="ai-item flex items-start gap-3"
                    style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                  >
                    <span className="flex-shrink-0 mt-0.5 text-brand font-bold text-[14px]">
                      ✓
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] leading-[1.7] text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — dark mockup */}
            <div
              ref={rightRef}
              className={`ai-frame ai-frame-hidden ${rightIn ? "ai-frame-visible" : ""} rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,10,30,0.25)]`}
              style={{ backgroundColor: "#15132B", animationDelay: "0.1s" }}
            >
              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-5 py-3.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              <div className="px-5 sm:px-7 pb-6 sm:pb-8">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tabs.map((tab, i) => (
                    <span
                      key={tab}
                      className={`ai-tab rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                        i === 0 ? "bg-brand text-white" : "bg-white/10 text-white/70"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                {/* Summary box */}
                <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 mb-4">
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/85">
                    Three decisions confirmed: launch Oct 14, hire two
                    engineers, defer Phase 2 to Q4. One blocker on the design
                    side.
                  </p>
                </div>

                {/* Footer note */}
                <p className="text-[11.5px] text-white/40">
                  AI summary enabled for this call · Consent confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}