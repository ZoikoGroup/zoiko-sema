"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

export function LeadershipVisibilitySection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes lvFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lvFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .lv-hidden   { opacity: 0; transform: translateY(28px); }
        .lv-visible  { animation: lvFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .lv-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .lv-visible-x { animation: lvFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .lv-image {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .lv-image:hover {
          transform: translateY(-6px);
          box-shadow: 0 34px 70px rgba(16,24,40,0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .lv-hidden, .lv-visible, .lv-hidden-x, .lv-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .lv-image:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Leadership truth view"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <p
              ref={eyebrowRef}
              className={`lv-hidden ${eyebrowIn ? "lv-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Leadership truth view
            </p>

            <h2
              ref={headRef}
              className={`lv-hidden ${headIn ? "lv-visible" : ""} mb-5 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Responsible visibility into follow-through
            </h2>

            <p
              ref={subRef}
              className={`lv-hidden ${subIn ? "lv-visible" : ""} max-w-[460px] text-[15px] leading-[1.75] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Leaders see work health, decision follow-through, overdue
              commitments, blockers, and an escalation queue — all source-linked.
              It&rsquo;s about workflow quality, not ranking or watching
              individuals.
            </p>
          </div>

          {/* RIGHT — dashboard image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`lv-hidden-x ${imgIn ? "lv-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            
            <img
              src="/workforcetruth/leadership-truth-view.png"
              alt="A leader reviewing a Zoiko Sema work-health dashboard showing decision follow-through, completion rate, and escalation metrics"
              loading="lazy"
              className="lv-image ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LeadershipVisibilitySection;