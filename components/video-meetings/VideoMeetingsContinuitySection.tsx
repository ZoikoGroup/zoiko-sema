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
    title: "Less context loss",
    desc: "Keep meeting notes, files, chat, recordings, and decisions tied to the right workspace.",
  },
  {
    title: "Faster follow-through",
    desc: "Turn discussion into owners, next steps, reminders, and searchable meeting memory.",
  },
  {
    title: "Stronger governance",
    desc: "Give administrators control over meeting policies, recording, retention, security, and AI usage.",
  },
];

export default function VideoMeetingsContinuitySection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-hidden  { opacity: 0; transform: translateY(28px); }
        .vc-visible { animation: vcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .vc-card { opacity: 0; transform: translateY(22px); }
        .vc-grid.vc-visible .vc-card {
          animation: vcFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vc-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 35%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-hidden, .vc-visible, .vc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Meeting continuity"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`vc-hidden ${headIn ? "vc-visible" : ""} text-center mb-10 sm:mb-12`}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[640px] mx-auto mb-4">
              Meetings should not disappear when the call ends.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[680px] mx-auto">
              Zoiko Sema connects the live meeting to the workspace around it
              — channels, files, AI summaries, action items, recordings, and
              governance — so conversations become accountable work.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className={`vc-grid ${cardsIn ? "vc-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="vc-card"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="vc-card-inner h-full bg-white rounded-2xl border border-gray-100 px-5 py-6 sm:px-6 sm:py-7 shadow-sm">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}