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

type Step = { title: string; description: string };

const STEPS: Step[] = [
  { title: "Trigger", description: "Start from a Sema event, form, or connected tool." },
  { title: "Condition", description: "Branch based on explicit, readable rules." },
  { title: "Approval", description: "Pause for a named person when judgment is required." },
  { title: "Action", description: "Execute only authorized, scoped connector actions." },
];

export function WorkflowBuilderSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: subRef, inView: subIn } = useInView(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: stepsRef, inView: stepsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes wbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wbFadeLeft {
          from { opacity: 0; transform: translateX(-36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .wb-hidden   { opacity: 0; transform: translateY(28px); }
        .wb-visible  { animation: wbFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .wb-hidden-x  { opacity: 0; transform: translateX(-36px) translateY(12px); }
        .wb-visible-x { animation: wbFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards; }

        .wb-step { transition: transform .3s cubic-bezier(.22,1,.36,1), border-color .3s ease, background-color .3s ease; }
        .wb-step:hover { transform: translateY(-3px); border-color: rgba(124,134,240,0.5); background-color: rgba(79,91,213,0.08); }

        @media (prefers-reduced-motion: reduce) {
          .wb-hidden, .wb-visible, .wb-hidden-x, .wb-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .wb-step:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Workflow builder"
        className="w-full bg-[#0A0A18] py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`wb-hidden ${eyebrowIn ? "wb-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Workflow builder
            </p>
            <h2
              ref={headRef}
              className={`wb-hidden ${headIn ? "wb-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold leading-[1.15] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Triggers, conditions, approvals, and actions — laid out clearly.
            </h2>
            <p
              ref={subRef}
              className={`wb-hidden ${subIn ? "wb-visible" : ""} mx-auto max-w-xl text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              A guided workflow builder, not a blank automation promise. Every
              step is readable, testable, and reorderable — with a
              keyboard-accessible list view alongside the visual canvas.
            </p>
          </div>

          {/* Content */}
          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            {/* LEFT — framed image */}
            <div
              ref={imgRef}
              className={`wb-hidden-x ${imgIn ? "wb-visible-x" : ""} h-full rounded-2xl border border-white/[0.06] bg-[#101022] p-3`}
            >
              {/*  replace src with your exported builder artwork (PNG in /public/images/) */}
              <img
                src="/workflows/workflow-builder.png"
                alt="Zoiko Sema workflow builder showing a team alongside a visual automation canvas"
                loading="lazy"
                className="h-full min-h-[280px] w-full rounded-xl object-cover"
              />
            </div>

            {/* RIGHT — steps */}
            <div ref={stepsRef} className="flex flex-col gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className={`wb-step wb-hidden ${stepsIn ? "wb-visible" : ""} flex-1 rounded-xl border border-white/[0.06] bg-[#141430] p-5`}
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <h3 className="mb-1.5 text-[15px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkflowBuilderSection;