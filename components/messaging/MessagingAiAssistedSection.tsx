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
  "Conversation summaries with clear source context",
  "Decision capture with approval visibility where available",
  "Smart replies that keep the person in control of final wording",
  "Ask Sema across accessible conversations, files, and meetings",
];

export default function MessagingAiAssistedSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes maasFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .maas-hidden  { opacity: 0; transform: translateY(28px); }
        .maas-visible { animation: maasFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .maas-hidden, .maas-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="AI-assisted messaging"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left column - text */}
            <div>
              <div
                ref={badgeRef}
                className={`maas-hidden ${badgeIn ? "maas-visible" : ""} inline-flex mb-6`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                    AI-Assisted Messaging
                  </span>
                </div>
              </div>

              <div
                ref={textRef}
                className={`maas-hidden ${textIn ? "maas-visible" : ""}`}
                style={{ animationDelay: "0.08s" }}
              >
                <h2 className="text-[clamp(24px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-5 max-w-[420px]">
                  AI that clarifies communication without taking over the conversation.
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[440px] mb-6">
                  Zoiko Sema AI is a governed communication assistant — it helps people understand long conversations, capture decisions, identify action items, and search context. It is never uncontrolled generative automation.
                </p>

                <ul className="flex flex-col gap-3">
                  {checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand mt-0.5 shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13.5px] sm:text-[14px] leading-[1.5] text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - dark preview card */}
            <div
              ref={cardRef}
              className={`maas-hidden ${cardIn ? "maas-visible" : ""}`}
              style={{ animationDelay: "0.12s" }}
            >
              <div className="rounded-2xl bg-[#0F1120] shadow-[0_30px_60px_rgba(15,17,32,0.35)] overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-5 py-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>

                <div className="px-5 pb-6 sm:px-7 sm:pb-8">
                  <p className="text-[11.5px] text-white/40 tracking-wide mb-3">
                    AI-generated &middot; Reviewed by Priya M.
                  </p>
                  <div className="rounded-xl bg-white/[0.05] border border-white/[0.07] px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-[13.5px] sm:text-[14.5px] text-white/85 leading-[1.6]">
                      Summary: The team agreed to ship draft icons by Friday and confirmed the launch stays on Oct 14.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}