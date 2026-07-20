"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiCheck, FiXCircle, FiX } from "react-icons/fi";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

const COORDINATES = [
  "Room (masked ID) requests extra towels — assigned to Housekeeping, SLA 6 min",
  "Dietary restriction on file — surfaced to F&B for room service order",
  "Late checkout requested — authorization required from Front Desk manager",
  "Concierge request: restaurant booking — task owned by Rosa L.",
  "Noise complaint from (masked room) — duty manager notified, task assigned",
  "Early arrival request — room readiness check initiated in Housekeeping workspace",
];

const BOUNDARIES = [
  "Guest surnames or full names in shared coordination channels",
  "AI autonomous response to guest-facing requests",
  "Health, payment, or loyalty data surfaced in staff workspaces",
  "Unmasked room numbers linked to guest identity in shared spaces",
  "Recording or AI in sensitivity-flagged guest interactions",
  "Guest preference data shared beyond authorized department",
];

export function TravelGuestServiceSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tgsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tgsRise {
          from { opacity: 0; transform: translateY(36px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tgs-hidden  { opacity: 0; transform: translateY(28px); }
        .tgs-visible { animation: tgsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .tgs-hidden-r  { opacity: 0; transform: translateY(36px) scale(.99); }
        .tgs-visible-r { animation: tgsRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .tgs-hidden, .tgs-visible, .tgs-hidden-r, .tgs-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Guest-service coordination with privacy boundaries"
        className="w-full bg-[#EEF0FA] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span
              ref={eyebrowRef}
              className={`tgs-hidden ${eyebrowIn ? "tgs-visible" : ""} mb-5 inline-flex items-center rounded-full border border-[#2F6BEB]/30 bg-[#2F6BEB]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Guest-Service Coordination
            </span>
            <h2
              ref={headRef}
              className={`tgs-hidden ${headIn ? "tgs-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Coordinate service. Protect guest privacy.
            </h2>
            <p
              ref={subRef}
              className={`tgs-hidden ${subIn ? "tgs-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Sema coordinates what needs to be actioned — not who the guest is.
              Guest identity is separated from coordination by design.
            </p>
          </div>

          {/* Two contrasting cards */}
          <div ref={cardsRef} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* GREEN — What Sema coordinates */}
            <div
              className={`tgs-hidden ${cardsIn ? "tgs-visible" : ""} rounded-2xl border border-[#16A34A]/15 bg-[#EDF4F1] p-6 dark:border-[#22C55E]/20 dark:bg-[#151233] sm:p-7`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#16A34A]/10 text-[#16A34A] dark:bg-[#22C55E]/20 dark:text-[#4ADE80]">
                  <FiCheckCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">
                  What Sema coordinates
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {COORDINATES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#16A34A] dark:text-[#4ADE80]" aria-hidden="true" />
                    <span className="text-[13px] leading-[1.5] text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RED — Privacy boundaries by design */}
            <div
              className={`tgs-hidden ${cardsIn ? "tgs-visible" : ""} rounded-2xl border border-[#EF4444]/15 bg-[#FBF1F1] p-6 dark:border-[#F87171]/20 dark:bg-[#151233] sm:p-7`}
              style={{ animationDelay: "0.18s" }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#EF4444]/10 text-[#EF4444] dark:bg-[#F87171]/20 dark:text-[#F87171]">
                  <FiXCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">
                  Privacy boundaries by design
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {BOUNDARIES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <FiX className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#EF4444] dark:text-[#F87171]" aria-hidden="true" />
                    <span className="text-[13px] leading-[1.5] text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`tgs-hidden-r ${imgIn ? "tgs-visible-r" : ""} mt-8 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            {/* replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/usecase-travel-hospitality/travel-guest-service.png"
              alt="A hospitality operations team collaborating around a table in a bright office"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/6] lg:aspect-[16/5]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelGuestServiceSection;