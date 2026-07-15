"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

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

type Faq = { question: string; answer: string };

const FAQS: Faq[] = [
  {
    question: "What can start a workflow?",
    answer:
      "A workflow can start from a Sema event, a submitted form, a schedule, or an action in a connected tool — whatever fits the process you're automating.",
  },
  {
    question: "Can a non-technical user build a workflow?",
    answer:
      "Yes. The guided builder uses readable triggers, conditions, and actions with a list view alongside the visual canvas, so no code is required to build or edit a workflow.",
  },
  {
    question: "Does AI automatically publish workflows?",
    answer:
      "No. AI can suggest steps, but nothing is published or run without human review. You stay in control of what goes live.",
  },
  {
    question: "How are failed or waiting runs handled?",
    answer:
      "Every run has a visible history. Failed steps surface with the reason, and waiting runs — like pending approvals — stay paused until they're actioned or time out per your rules.",
  },
  {
    question: "How is sensitive data handled in connectors?",
    answer:
      "Connector actions are permission-aware and scoped to only what's authorized. Sensitive data follows your workspace policies, and access is governed by role.",
  },
];

export function WorkflowsFaqSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.1);

  // All collapsed by default (matches the design); one open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((current) => (current === i ? null : i));

  return (
    <>
      <style>{`
        @keyframes wqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wq-hidden  { opacity: 0; transform: translateY(28px); }
        .wq-visible { animation: wqFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .wq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .wq-panel.wq-open { grid-template-rows: 1fr; }
        .wq-panel > .wq-inner { overflow: hidden; }

        .wq-icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
        .wq-icon.wq-rot { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .wq-hidden, .wq-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wq-panel { transition: none !important; }
          .wq-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Workflows frequently asked questions"
        className="w-full bg-white py-10 dark:bg-[#0A0A18] sm:py-14"
      >
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <p
              ref={eyebrowRef}
              className={`wq-hidden ${eyebrowIn ? "wq-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              FAQ
            </p>
            <h2
              ref={headRef}
              className={`wq-hidden ${headIn ? "wq-visible" : ""} text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Questions about Workflows
            </h2>
          </div>

          {/* Accordion — line-separated rows */}
          <div ref={listRef} className="flex flex-col">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `wqfaq-panel-${i}`;
              const buttonId = `wqfaq-button-${i}`;
              return (
                <div
                  key={faq.question}
                  className={`wq-hidden ${listIn ? "wq-visible" : ""} border-b border-gray-100 dark:border-white/10`}
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[14px] font-medium text-gray-800 dark:text-gray-100">
                      {faq.question}
                    </span>
                    <FiPlus
                      className={`wq-icon h-4 w-4 flex-shrink-0 text-[#4F5BD5] dark:text-[#8C95F2] ${isOpen ? "wq-rot" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`wq-panel ${isOpen ? "wq-open" : ""}`}
                  >
                    <div className="wq-inner">
                      <p className="pb-5 pr-8 text-[13px] leading-[1.7] text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkflowsFaqSection;