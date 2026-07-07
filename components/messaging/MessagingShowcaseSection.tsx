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

const navItems = ["Direct Messages", "Channels", "Spaces", "Meetings", "Files"];

const messages = [
  {
    label: "#launch-planning",
    text: "Eva: Already on it. Drafts shipped to the channel.",
  },
  {
    label: "Andy → Johnson",
    text: "Sure — for this task we need icons and animation.",
  },
];

export default function MessagingShowcaseSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes mssFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mss-hidden  { opacity: 0; transform: translateY(28px); }
        .mss-visible { animation: mssFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .mss-hidden, .mss-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Messaging product showcase"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`mss-hidden ${badgeIn ? "mss-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Showcase
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`mss-hidden ${headIn ? "mss-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[560px] mx-auto">
              Fast messaging for people. Structured communication for work.
            </h2>
          </div>

          {/* App mockup card */}
          <div
            ref={cardRef}
            className={`mss-hidden ${cardIn ? "mss-visible" : ""} rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] lg:grid-cols-[160px_1fr_200px]">
              {/* Sidebar */}
              <div className="border-b sm:border-b-0 sm:border-r border-gray-100 px-5 py-5 sm:py-6">
                <p className="text-[13px] font-bold text-gray-900 mb-3">Growth Team</p>
                <div className="flex flex-col gap-2.5">
                  {navItems.map((item) => (
                    <span key={item} className="text-[12.5px] text-gray-500">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="px-5 py-5 sm:py-6 flex flex-col gap-3 border-b sm:border-b-0 lg:border-r border-gray-100">
                {messages.map((m, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 px-5 py-4">
                    <p className="text-[13px] font-bold text-gray-900 mb-1">{m.label}</p>
                    <p className="text-[12.5px] text-gray-500 leading-[1.6]">{m.text}</p>
                  </div>
                ))}
              </div>

              {/* AI summary */}
              <div className="px-5 py-5 sm:py-6">
                <div className="rounded-xl border border-gray-100 px-5 py-4 h-full">
                  <p className="text-[13px] font-bold text-gray-900 mb-3">AI summary</p>
                  <p className="text-[12.5px] text-gray-500 leading-[1.6] mb-3">
                    Decision: ship draft icons by Friday.
                  </p>
                  <p className="text-[12.5px] text-gray-500 leading-[1.6]">
                    Pinned file: launch-checklist.pdf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}