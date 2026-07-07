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

const topItems = [
  { step: "01 · Organization", title: "Zoiko Tech" },
  { step: "02 · Workspace", title: "Growth Team" },
  { step: "03 · Space", title: "Product Launch" },
  { step: "04 · Channel", title: "#launch-decisions" },
];

const bottomItems = [
  {
    title: "Spaces organize work by purpose",
    desc: "Enterprise Sales Space or Client Onboarding Space.",
  },
  {
    title: "Threads protect context and reduce noise",
    desc: "Focused replies without breaking the main conversation flow.",
  },
];

export default function ChannelsSpacesStructureSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes cssFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .css-hidden  { opacity: 0; transform: translateY(28px); }
        .css-visible { animation: cssFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .css-hidden, .css-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Organization structure showcase"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`css-hidden ${badgeIn ? "css-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Showcase
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`css-hidden ${headIn ? "css-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[640px] mx-auto">
              A structure for how your organization actually works.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`css-hidden ${headIn ? "css-visible" : ""} text-center text-[14px] sm:text-[15px] text-gray-500 mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Organization &rarr; Workspace &rarr; Space &rarr; Channel &rarr; Thread &rarr; Post.
          </p>

          {/* Browser-style card */}
          <div
            ref={cardRef}
            className={`css-hidden ${cardIn ? "css-visible" : ""} rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            </div>

            <div className="p-5 sm:p-7">
              {/* Top row - 4 items */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {topItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-4 sm:px-5 sm:py-5"
                  >
                    <p className="text-[11px] font-medium text-gray-400 mb-1.5">
                      {item.step}
                    </p>
                    <p className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom row - 2 items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {bottomItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white px-5 py-5 sm:px-6 sm:py-6"
                  >
                    <p className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}