"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

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

type Pair = { problem: string; solution: string };

const LEFT_ITEMS: Pair[] = [
  {
    problem: "Shift handoffs rely on verbal briefings that disappear.",
    solution:
      "Structured digital handoff with tasks, VIP notes, open issues, and acknowledgement — searchable and auditable.",
  },
  {
    problem: "Disruptions rely on radios and paper logs.",
    solution:
      "Governed disruption coordination room with owned tasks, guest impact tracking, and documented outcomes.",
  },
];

const RIGHT_ITEMS: Pair[] = [
  {
    problem: "Multi-property teams can't share context across locations.",
    solution:
      "Per-property workspaces with cross-property visibility where policy permits — one governed hub.",
  },
  {
    problem: "Event and group coordination is managed in email threads.",
    solution:
      "Event workspace with brief, attendee scope, vendor channels, staff tasks, and service delivery timeline.",
  },
];

function PairView({ pair, show, delay }: { pair: Pair; show: boolean; delay: number }) {
  return (
    <div
      className={`tcb-hidden ${show ? "tcb-visible" : ""} flex flex-1 flex-col gap-2`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Problem */}
      <div className="flex items-start gap-2.5 rounded-lg border border-[#EF4444]/15 bg-[#EF4444]/[0.06] px-4 py-3">
        <FiAlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F87171]" aria-hidden="true" />
        <p className="text-[13px] leading-[1.5] text-gray-200">{pair.problem}</p>
      </div>
      {/* Solution */}
      <div className="flex flex-1 items-start gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6B8AF5]" aria-hidden="true" />
        <p className="text-[13px] leading-[1.5] text-gray-400">{pair.solution}</p>
      </div>
    </div>
  );
}

export function TravelCoordinationBreaksSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes tcbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tcbRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tcb-hidden  { opacity: 0; transform: translateY(28px); }
        .tcb-visible { animation: tcbFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .tcb-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .tcb-visible-r { animation: tcbRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .tcb-hidden, .tcb-visible, .tcb-hidden-r, .tcb-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Why coordination breaks in fragmented hospitality operations"
        className="w-full bg-[#0D0B24] py-10 sm:py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span
              ref={eyebrowRef}
              className={`tcb-hidden ${eyebrowIn ? "tcb-visible" : ""} mb-5 inline-flex items-center rounded-full border border-[#6B8AF5]/30 bg-[#6B8AF5]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B8AF5]`}
            >
              Why Coordination Breaks
            </span>
            <h2
              ref={headRef}
              className={`tcb-hidden ${headIn ? "tcb-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Six ways fragmented hospitality ops lose context.
            </h2>
            <p
              ref={subRef}
              className={`tcb-hidden ${subIn ? "tcb-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              And how Sema keeps every handoff, request, and disruption connected.
            </p>
          </div>

          {/* items | image | items */}
          <div
            ref={gridRef}
            className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          >
            {/* LEFT */}
            <div className="flex flex-col gap-5">
              {LEFT_ITEMS.map((pair, i) => (
                <PairView key={pair.problem} pair={pair} show={gridIn} delay={0.1 + i * 0.1} />
              ))}
            </div>

            {/* CENTER image */}
            <div
              className={`tcb-hidden-r ${gridIn ? "tcb-visible-r" : ""} order-first min-h-[300px] overflow-hidden rounded-2xl lg:order-none lg:min-h-0`}
              style={{ animationDelay: "0.18s" }}
            >
              {/* replace src with your exported artwork (PNG in /public/images/) */}
              <img
                src="/usecase-travel-hospitality/travel-coordination.png"
                alt="Hotel front-desk staff welcoming and coordinating with a guest at check-in"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              {RIGHT_ITEMS.map((pair, i) => (
                <PairView key={pair.problem} pair={pair} show={gridIn} delay={0.2 + i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelCoordinationBreaksSection;