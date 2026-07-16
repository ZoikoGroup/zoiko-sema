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

type Feature = { title: string; description: string };

const FEATURES: Feature[] = [
  {
    title: "Relevant context",
    description: "Approvers see the source record, policy, and deadline.",
  },
  {
    title: "Escalation",
    description: "Route to a backup approver when a deadline is met.",
  },
  {
    title: "Recorded decision",
    description: "Every approval or rejection is captured with reasoning.",
  },
];

export function ApprovalsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes apFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes apRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ap-hidden   { opacity: 0; transform: translateY(28px); }
        .ap-visible  { animation: apFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .ap-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .ap-visible-r { animation: apRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .ap-hidden, .ap-visible, .ap-hidden-r, .ap-visible-r {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Approvals and requests"
        className="w-full bg-[#F7F8FB] py-20 dark:bg-[#0A0A18] sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`ap-hidden ${eyebrowIn ? "ap-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Approvals and requests
            </p>
            <h2
              ref={headRef}
              className={`ap-hidden ${headIn ? "ap-visible" : ""} text-[clamp(26px,4vw,38px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Judgment, escalation, and delegation — visible on any device.
            </h2>
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`ap-hidden-r ${imgIn ? "ap-visible-r" : ""} mt-12 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            {/* replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/workflows/approvals.png"
              alt="A team reviewing approvals and requests alongside a visual workflow canvas in Zoiko Sema"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover md:aspect-[16/5]"
            />
          </div>

          {/* Feature row */}
          <div
            ref={gridRef}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`ap-hidden ${gridIn ? "ap-visible" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <h3 className="mb-1.5 text-[14px] font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ApprovalsSection;