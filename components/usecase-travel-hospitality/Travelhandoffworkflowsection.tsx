"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiFileText, FiMessageSquare, FiUserCheck, FiClock } from "react-icons/fi";
import type { IconType } from "react-icons";

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

type Step = {
  icon: IconType;
  number: string;
  title: string;
  description: string;
  required: string;
  featured?: boolean; // dark highlighted card
};

const STEPS: Step[] = [
  {
    icon: FiFileText,
    number: "01",
    title: "Shift-end preparation",
    description:
      "Outgoing team documents open issues, VIP context (masked), pending tasks, and property state. Requires named author and timestamp.",
    required: "Author, timestamp, linked tasks",
  },
  {
    icon: FiMessageSquare,
    number: "02",
    title: "Structured briefing note",
    description:
      "Handoff covers: active guests with special context, maintenance issues, event state, and department-specific flags.",
    required: "All required fields before submission",
  },
  {
    icon: FiUserCheck,
    number: "03",
    title: "Acknowledgement gate",
    description:
      "Incoming shift lead acknowledges the handoff. Unacknowledged notes escalate to duty manager after defined window.",
    required: "Named acknowledgement, timestamp",
    featured: true,
  },
  {
    icon: FiClock,
    number: "04",
    title: "Active shift context",
    description:
      "All handoff tasks, notes, and guest context remain live and searchable throughout the shift. No separate systems.",
    required: "Persistent, linked to workspace",
  },
];

function StepCard({ step, show, delay }: { step: Step; show: boolean; delay: number }) {
  const Icon = step.icon;

  if (step.featured) {
    return (
      <div
        className={`thw-card thw-hidden ${show ? "thw-visible" : ""} flex flex-col rounded-2xl bg-[#14122E] p-6`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="mb-4 flex items-start justify-between">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F6BEB]/25 text-[#6B8AF5]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-[26px] font-bold leading-none text-white/15">{step.number}</span>
        </div>
        <h3 className="mb-2 text-[16px] font-semibold text-white">{step.title}</h3>
        <p className="mb-4 text-[13px] leading-[1.6] text-gray-400">{step.description}</p>
        <span className="mt-auto inline-block self-start rounded-md bg-[#2F6BEB]/20 px-3 py-1.5 text-[11px] font-medium text-[#6B8AF5]">
          Required: {step.required}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`thw-card thw-hidden ${show ? "thw-visible" : ""} flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#2F6BEB] dark:bg-[#2F6BEB]/20 dark:text-[#6B8AF5]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-[26px] font-bold leading-none text-gray-200 dark:text-white/15">{step.number}</span>
      </div>
      <h3 className="mb-2 text-[16px] font-semibold text-gray-900 dark:text-white">{step.title}</h3>
      <p className="mb-4 text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400">{step.description}</p>
      <span className="mt-auto inline-block self-start rounded-md bg-[#EEF0FB] px-3 py-1.5 text-[11px] font-medium text-[#2F6BEB] dark:bg-[#2F6BEB]/20 dark:text-[#6B8AF5]">
        Required: {step.required}
      </span>
    </div>
  );
}

export function TravelHandoffWorkflowSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes thwFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes thwRise {
          from { opacity: 0; transform: translateY(36px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .thw-hidden  { opacity: 0; transform: translateY(28px); }
        .thw-visible { animation: thwFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .thw-hidden-r  { opacity: 0; transform: translateY(36px) scale(.98); }
        .thw-visible-r { animation: thwRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        .thw-card { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease; }
        .thw-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(16,24,40,0.12); }

        @media (prefers-reduced-motion: reduce) {
          .thw-hidden, .thw-visible, .thw-hidden-r, .thw-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .thw-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Shift handoff workflow"
        className="w-full bg-[#EEF0FA] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span
              ref={eyebrowRef}
              className={`thw-hidden ${eyebrowIn ? "thw-visible" : ""} mb-5 inline-flex items-center rounded-full border border-[#2F6BEB]/30 bg-[#2F6BEB]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Shift Handoff Workflow
            </span>
            <h2
              ref={headRef}
              className={`thw-hidden ${headIn ? "thw-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Context that survives every shift change.
            </h2>
            <p
              ref={subRef}
              className={`thw-hidden ${subIn ? "thw-visible" : ""} mx-auto max-w-md text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Six steps from shift-end to acknowledged handoff — all documented,
              all owned, none lost.
            </p>
          </div>

          {/* cards (2x2) | image */}
          <div
            ref={gridRef}
            className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          >
            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {STEPS.map((step, i) => (
                <StepCard key={step.number} step={step} show={gridIn} delay={0.1 + i * 0.08} />
              ))}
            </div>

            {/* Image */}
            <div
              className={`thw-hidden-r ${gridIn ? "thw-visible-r" : ""} min-h-[320px] overflow-hidden rounded-2xl lg:col-span-1 lg:min-h-0`}
              style={{ animationDelay: "0.2s" }}
            >
              {/* replace src with your exported artwork (PNG in /public/images/) */}
              <img
                src="/usecase-travel-hospitality/travel-handoff.png"
                alt="A hospitality staff member managing shift handoff tasks on a laptop with floating workflow panels"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelHandoffWorkflowSection;