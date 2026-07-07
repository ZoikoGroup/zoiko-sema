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

const cards = [
  {
    title: "Reduce communication noise",
    desc: "Organize conversations by people, teams, projects, clients, and spaces.",
  },
  {
    title: "Keep decisions visible",
    desc: "Threads, pins, summaries, and action capture preserve the outcome of every conversation.",
  },
  {
    title: "Make communication searchable",
    desc: "Find messages, files, decisions, mentions, and AI-generated summaries across workspaces.",
  },
];

export default function MessagingProblemSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mpsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mps-hidden  { opacity: 0; transform: translateY(28px); }
        .mps-visible { animation: mpsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .mps-card { opacity: 0; transform: translateY(24px); }
        .mps-stack.mps-visible .mps-card {
          animation: mpsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .mps-hidden, .mps-visible, .mps-card { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Messaging problem and value"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column - text */}
            <div
              ref={textRef}
              className={`mps-hidden ${textIn ? "mps-visible" : ""}`}
            >
              <h2 className="text-[clamp(26px,4vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-5 max-w-[440px]">
                Stop losing decisions inside scattered conversations.
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-600 max-w-[460px]">
                Modern teams move between texts, meetings, emails, apps, and file threads. Decisions get buried, context disappears, and accountability weakens. Zoiko Sema Messaging gives teams one structured place to communicate, search, summarize, govern, and act.
              </p>
            </div>

            {/* Right column - stacked cards */}
            <div
              ref={cardsRef}
              className={`mps-stack ${cardsIn ? "mps-visible" : ""} flex flex-col gap-4 sm:gap-5`}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="mps-card"
                  style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                >
                  <div className="rounded-2xl border border-gray-100 p-6 sm:p-7">
                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                      {c.desc}
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