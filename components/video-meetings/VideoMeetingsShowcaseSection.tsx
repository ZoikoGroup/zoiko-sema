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

export default function VideoMeetingsShowcaseSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: frameRef, inView: frameIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vsFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vs-hidden  { opacity: 0; transform: translateY(32px); }
        .vs-visible { animation: vsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .vs-subcard { opacity: 0; transform: translateY(18px); }
        .vs-frame.vs-visible .vs-subcard {
          animation: vsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vs-frame {
          transition: box-shadow .35s ease;
        }
        .vs-frame:hover {
          box-shadow: 0 30px 60px rgba(15,15,40,0.12);
        }

        .vs-inner-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vs-inner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 30%, transparent);
        }

        .vs-pill-tab {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .vs-pill-tab:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-hidden, .vs-visible, .vs-subcard { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vs-frame:hover, .vs-inner-card:hover, .vs-pill-tab:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Video meetings product showcase"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vs-hidden ${badgeIn ? "vs-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Showcase
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`vs-hidden ${headIn ? "vs-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.4vw,38px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              Fast Join. AI Decisions. Connected Workspace. Enterprise
              Controls.
            </h2>
          </div>

          {/* Browser-style frame */}
          <div
            ref={frameRef}
            className={`vs-frame vs-hidden ${frameIn ? "vs-visible" : ""} rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(15,15,40,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.15s" }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-gray-100">
              <span className="w-2 h-2 rounded-full bg-gray-200" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
            </div>

            {/* Content grid */}
            <div className="p-5 sm:p-7 md:p-9 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Left column */}
              <div
                className="vs-subcard flex flex-col gap-4"
                style={{ animationDelay: "0.25s" }}
              >
                <div className="vs-pill-tab self-start rounded-full border border-gray-200 px-4 py-2">
                  <span className="text-[12.5px] font-semibold text-gray-900">
                    Fast Join
                  </span>
                </div>

                <div className="vs-inner-card rounded-2xl border border-gray-100 p-5 sm:p-6">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-1.5">
                    Q3 Launch Planning
                  </h3>
                  <p className="text-[13px] text-gray-500 mb-4">
                    Growth Team → #launch-planning
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11.5px] font-medium text-emerald-700">
                      Recording on
                    </span>
                    <span className="rounded-full border border-gray-200 px-3 py-1.5 text-[11.5px] font-medium text-gray-700">
                      Guest lobby active
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div
                className="vs-subcard flex flex-col gap-4"
                style={{ animationDelay: "0.35s" }}
              >
                <div className="vs-pill-tab self-start rounded-full border border-gray-200 px-4 py-2">
                  <span className="text-[12.5px] font-semibold text-gray-900">
                    AI Decisions
                  </span>
                </div>

                <div className="vs-inner-card rounded-2xl border border-gray-100 p-5 sm:p-6 flex-1">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-3">
                    Summary · Decisions · Action items
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-[13px] leading-[1.7] text-gray-600">
                      Decision: Launch confirmed for Oct 14.
                    </p>
                    <p className="text-[13px] leading-[1.7] text-gray-600">
                      Action: Daniel — share recap in channel.
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