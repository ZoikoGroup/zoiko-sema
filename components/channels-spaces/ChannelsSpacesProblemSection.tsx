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

const points = [
  "Reduce communication chaos",
  "Keep context attached to work",
  "Scale collaboration without losing governance",
];

export default function ChannelsSpacesProblemSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes cspFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csp-hidden  { opacity: 0; transform: translateY(24px); }
        .csp-visible { animation: cspFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .csp-item { opacity: 0; transform: translateY(16px); }
        .csp-left.csp-visible .csp-item {
          animation: cspFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .csp-pill { opacity: 0; transform: translateX(16px); }
        .csp-right.csp-visible .csp-pill {
          animation: cspSlideIn .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes cspSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .csp-pill-inner {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .csp-pill-inner:hover {
          transform: translateX(-3px);
          box-shadow: 0 10px 22px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 30%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .csp-hidden, .csp-visible, .csp-item, .csp-pill { opacity: 1 !important; transform: none !important; animation: none !important; }
          .csp-pill-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="The problem with scattered communication"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* LEFT */}
            <div ref={leftRef} className={`csp-left csp-hidden ${leftIn ? "csp-visible" : ""}`}>
              <h2 className="csp-item text-[clamp(22px,3.4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-4">
                Communication should not disappear into scattered chat.
              </h2>
              <p
                className="csp-item text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[460px]"
                style={{ animationDelay: "0.08s" }}
              >
                Teams lose time when decisions, files, client updates, and
                project conversations are spread across email, meetings,
                messages, and disconnected tools. Zoiko Sema gives every
                conversation a place, a purpose, and a searchable record.
              </p>
            </div>

            {/* RIGHT */}
            <div
              ref={rightRef}
              className={`csp-right csp-hidden ${rightIn ? "csp-visible" : ""} flex flex-col gap-4`}
            >
              {points.map((point, i) => (
                <div
                  key={i}
                  className="csp-pill"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="csp-pill-inner bg-white rounded-2xl border border-gray-200 px-6 py-5">
                    <p className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900">
                      {point}
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