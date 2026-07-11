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
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ai-hidden  { opacity: 0; transform: translateY(28px); }
        .ai-visible { animation: aiFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ai-item { opacity: 0; transform: translateY(16px); }
        .ai-left.ai-visible .ai-item {
          animation: aiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-frame-hidden { opacity: 0; transform: translateY(32px) scale(0.96); }
        .ai-frame-visible { animation: aiFadeUpR .75s cubic-bezier(.22,1,.36,1) forwards; }

        .ai-frame {
          transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease;
        }
        .ai-frame:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 34px 68px rgba(20,20,60,0.4);
        }
        .ai-frame img {
          transition: transform .6s cubic-bezier(.22,1,.36,1);
          display: block;
        }
        .ai-frame:hover img {
          transform: scale(1.04);
        }

        .ai-check {
          transition: transform .25s ease;
        }
        .ai-item:hover .ai-check {
          transform: scale(1.15);
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-hidden, .ai-visible, .ai-item,
          .ai-frame-hidden, .ai-frame-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ai-frame:hover, .ai-frame:hover img, .ai-item:hover .ai-check { transform: none !important; }
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
              <p
                className="ai-item text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#4F46E5" }}
              >
                AI Call Intelligence
              </p>

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
                    <span
                      className="ai-check flex-shrink-0 mt-0.5 font-bold text-[14px]"
                      style={{ color: "#16A34A" }}
                    >
                      ✓
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] leading-[1.7] text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — single mockup image */}
            <div
              ref={rightRef}
              className={`ai-frame ai-frame-hidden ${rightIn ? "ai-frame-visible" : ""} rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,10,30,0.25)]`}
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src="/Images/AudioCallsAIIntelligence.webp" // 👈 add the AI chip/circuit image URL here
                alt="Abstract AI chip illustration representing AI call intelligence"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}