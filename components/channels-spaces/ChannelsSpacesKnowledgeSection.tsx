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

const tabs = ["Files", "Decisions", "Links", "Summaries", "Bookmarks"];

const items = [
  { label: "Launch checklist.pdf" },
  { label: "Decision: Move to Oct 14 launch" },
];

export default function ChannelsSpacesKnowledgeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes csksFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csks-hidden  { opacity: 0; transform: translateY(28px); }
        .csks-visible { animation: csksFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .csks-hidden, .csks-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Files, decisions and knowledge"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left column - text */}
            <div>
              <div
                ref={badgeRef}
                className={`csks-hidden ${badgeIn ? "csks-visible" : ""} inline-flex mb-6`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                    Files, Decisions &amp; Knowledge
                  </span>
                </div>
              </div>

              <div
                ref={textRef}
                className={`csks-hidden ${textIn ? "csks-visible" : ""}`}
                style={{ animationDelay: "0.08s" }}
              >
                <h2 className="text-[clamp(26px,4.2vw,38px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-4 max-w-[440px]">
                  Keep files, decisions, and knowledge where the work happens.
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[460px]">
                  Pinned files, bookmarks, decision logs, announcement records, meeting links, and AI-generated recap cards — attached to the space, not scattered across tools.
                </p>
              </div>
            </div>

            {/* Right column - Space Knowledge panel */}
            <div
              ref={cardRef}
              className={`csks-hidden ${cardIn ? "csks-visible" : ""}`}
              style={{ animationDelay: "0.12s" }}
            >
              <div className="rounded-2xl bg-white shadow-[0_20px_50px_rgba(15,31,78,0.1)] overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  </div>
                  <span className="text-[13px] text-gray-500">Space Knowledge</span>
                </div>

                <div className="p-5 sm:p-7">
                  {/* Tabs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tabs.map((tab, i) => (
                      <span
                        key={tab}
                        className={
                          i === 0
                            ? "rounded-full bg-brand/10 text-brand text-[12.5px] font-semibold px-4 py-1.5"
                            : "rounded-full border border-gray-200 text-gray-600 text-[12.5px] font-medium px-4 py-1.5"
                        }
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  {/* List items */}
                  <div className="flex flex-col gap-3">
                    {items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-100 px-5 py-4"
                      >
                        <p className="text-[13.5px] sm:text-[14px] font-semibold text-gray-900">
                          {item.label}
                        </p>
                      </div>
                    ))}
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