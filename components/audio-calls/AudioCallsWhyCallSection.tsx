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
  { text: "Resolve questions faster than long message threads." },
  { text: "Create human connection without requiring cameras." },
  { text: "Move from chat to voice without losing conversation context." },
];

export default function AudioCallsWhyCallSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes wcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wc-hidden  { opacity: 0; transform: translateY(28px); }
        .wc-visible { animation: wcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .wc-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .wc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px color-mix(in srgb, var(--brand) 16%, transparent);
          border-color: color-mix(in srgb, var(--brand) 35%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-hidden, .wc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wc-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Why start a call"
        className="w-full py-16 sm:py-20 md:py-24 bg-[#F4F7FF]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Heading */}
          <div
            ref={headRef}
            className={`wc-hidden ${headIn ? "wc-visible" : ""} text-center mb-10 sm:mb-12`}
          >
            <h2 className="text-[clamp(22px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              When text slows down and video is too much, start a call.
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className={`wc-hidden ${cardsIn ? "wc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="wc-card bg-white rounded-2xl border border-gray-100 px-5 py-6 sm:px-6 sm:py-7 shadow-sm"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <p className="text-[13.5px] sm:text-[14px] leading-[1.7] text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}