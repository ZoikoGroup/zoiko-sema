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
    title: "Reduce operational risk",
    desc: "Keep users, permissions, guests, policies, and integrations under centralized control.",
  },
  {
    title: "Improve administrative speed",
    desc: "Give administrators faster ways to invite teams, assign roles, update policies, and resolve access issues.",
  },
  {
    title: "Support enterprise readiness",
    desc: "Prepare the organization for security review, compliance reporting, audit visibility, and structured growth.",
  },
];

export default function AdminConsoleGovernanceSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes acgsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acgs-hidden  { opacity: 0; transform: translateY(28px); }
        .acgs-visible { animation: acgsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acgs-card { opacity: 0; transform: translateY(24px); }
        .acgs-stack.acgs-visible .acgs-card {
          animation: acgsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .acgs-hidden, .acgs-visible, .acgs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Communication governance"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column - text */}
            <div
              ref={textRef}
              className={`acgs-hidden ${textIn ? "acgs-visible" : ""}`}
            >
              <h2 className="text-[clamp(26px,4vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-5 max-w-[540px]">
                Communication grows fast. Governance should keep up.
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-600 max-w-[460px]">
                As teams scale, conversations, meetings, files, decisions, guests, and AI-generated outputs spread across departments and tools. Zoiko Sema Admin Console gives organizations a single control layer to manage communication securely, consistently, and responsibly.
              </p>
            </div>

            {/* Right column - stacked cards */}
            <div
              ref={cardsRef}
              className={`acgs-stack ${cardsIn ? "acgs-visible" : ""} flex flex-col gap-4 sm:gap-5`}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="acgs-card"
                  style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm">
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