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

export default function ChannelsSpacesAiSearchSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes cassFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cassFadeRight {
          from { opacity: 0; transform: translateY(28px) translateX(0); }
          to   { opacity: 1; transform: translateY(0) translateX(0); }
        }
        .cass-hidden  { opacity: 0; transform: translateY(28px); }
        .cass-visible { animation: cassFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .cass-hidden, .cass-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="AI search and ask Sema"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left column - text */}
            <div>
              <div
                ref={badgeRef}
                className={`cass-hidden ${badgeIn ? "cass-visible" : ""} inline-flex mb-6`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                    AI Search &amp; Ask Sema
                  </span>
                </div>
              </div>

              <div
                ref={textRef}
                className={`cass-hidden ${textIn ? "cass-visible" : ""}`}
                style={{ animationDelay: "0.08s" }}
              >
                <h2 className="text-[clamp(26px,4.2vw,38px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-4 max-w-[420px]">
                  Find the context behind every conversation.
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[440px]">
                  AI features are permission-aware — a person only receives answers from content they are authorized to access.
                </p>
              </div>
            </div>

            {/* Right column - dark preview card */}
            <div
              ref={cardRef}
              className={`cass-hidden ${cardIn ? "cass-visible" : ""}`}
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
                  <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex items-start gap-2.5 mb-4">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                      <p className="text-[14px] sm:text-[15px] text-white/90 leading-snug">
                        &ldquo;What did we decide about the Q3 roadmap?&rdquo;
                      </p>
                    </div>
                    <p className="text-[11.5px] text-white/35 tracking-wide">
                      Sourced from: #product-launch &middot; Decision log &middot; Meeting summary, Oct 2
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