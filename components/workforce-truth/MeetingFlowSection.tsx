"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiVideo,
  FiStar,
  FiCheckSquare,
  FiUser,
  FiShield,
} from "react-icons/fi";
import type { IconType } from "react-icons";

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

type Step = {
  num: string;
  icon: IconType;
  title: string;
  description: string;
  tag: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    icon: FiVideo,
    title: "Meet",
    description: "Team meets in Zoiko Sema or a connected workflow.",
    tag: "Meeting controls respected",
  },
  {
    num: "02",
    icon: FiStar,
    title: "Summarize",
    description: "Key points, questions, risks, and follow-ups — editable and reviewable.",
    tag: "Human-in-the-loop",
  },
  {
    num: "03",
    icon: FiCheckSquare,
    title: "Decide",
    description: "Decisions are logged with context and a source link.",
    tag: "Confirmable, not hidden",
  },
  {
    num: "04",
    icon: FiUser,
    title: "Assign",
    description: "Action items get owner, due date, priority, and dependency.",
    tag: "Role-permissioned",
  },
  {
    num: "05",
    icon: FiShield,
    title: "Verify",
    description: "Progress and audit trail show what changed, source-linked.",
    tag: "Admin-governed retention",
  },
];

export function MeetingFlowSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: stepsRef, inView: stepsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mfDrawLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .mf-hidden  { opacity: 0; transform: translateY(28px); }
        .mf-visible { animation: mfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .mf-line {
          transform: scaleX(0);
          transform-origin: left center;
        }
        .mf-line-visible {
          animation: mfDrawLine 1.1s cubic-bezier(.22,1,.36,1) .25s forwards;
        }

        .mf-node {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .mf-step:hover .mf-node {
          transform: translateY(-3px);
          border-color: rgba(124,134,240,0.55);
          box-shadow: 0 0 0 4px rgba(79,91,213,0.12), 0 10px 24px rgba(0,0,0,0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .mf-hidden, .mf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .mf-line, .mf-line-visible { transform: none !important; animation: none !important; }
          .mf-step:hover .mf-node { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="How a meeting becomes a verified work record"
        className="w-full bg-[#0D0B24] py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`mf-hidden ${eyebrowIn ? "mf-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Meeting-to-work flow
            </p>

            <h2
              ref={headRef}
              className={`mf-hidden ${headIn ? "mf-visible" : ""} mb-4 text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              How a meeting becomes a verified work record
            </h2>

            <p
              ref={subRef}
              className={`mf-hidden ${subIn ? "mf-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Meet, summarize, decide, assign, verify — each step carries source
              context and trust requirements forward.
            </p>
          </div>

          {/* Steps */}
          <div ref={stepsRef} className="relative mt-16">
            {/* Connector line — desktop only, spans between the first and last node centers */}
            <div
              aria-hidden="true"
              className={`mf-line ${stepsIn ? "mf-line-visible" : ""} absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-[#4F5BD5]/10 via-[#4F5BD5]/50 to-[#4F5BD5]/10 lg:block`}
            />

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className={`mf-step mf-hidden ${stepsIn ? "mf-visible" : ""} flex flex-col items-center px-3 text-center`}
                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    {/* Icon node (opaque bg cuts the connector line so it reads as segmented) */}
                    <span className="mf-node relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#171436] text-[#8C95F2]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="mb-1 text-[11px] font-semibold tracking-[0.15em] text-[#7C86F0]">
                      {step.num}
                    </span>
                    <h3 className="mb-2 text-[16px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mb-4 max-w-[220px] text-[13px] leading-[1.6] text-gray-400">
                      {step.description}
                    </p>

                    <span className="inline-flex items-center rounded-full border border-[#4F5BD5]/25 bg-[#4F5BD5]/15 px-3 py-1 text-[11px] font-medium text-[#9AA2F5]">
                      {step.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MeetingFlowSection;