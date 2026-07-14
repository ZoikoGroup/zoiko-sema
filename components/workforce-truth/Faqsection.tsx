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

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is Workforce Truth?",
    answer:
      "Workforce Truth turns meetings, decisions, tasks, owners, risks, and approvals into verified, source-linked work records — so teams have a reliable account of what happened, what was decided, and who owns next steps.",
  },
  {
    question: "Is this employee surveillance?",
    answer:
      "No. Workforce Truth records work artifacts — decisions, tasks, and approvals — not individuals. It reflects workflow quality and follow-through, never keystrokes, screens, or activity monitoring, and visibility is governed by role.",
  },
  {
    question: "How does a meeting become a work record?",
    answer:
      "A meeting creates a source event. Its summary is reviewed, decisions and tasks are logged with owners and due dates, and each item stays linked back to its original meeting, thread, or space.",
  },
  {
    question: "Who can see the truth signals?",
    answer:
      "Access is admin-governed and role-based. Workspace permissions determine who can view portfolio signals, source meetings, and audit trails — and a visibility chip explains who can see each record and why.",
  },
  {
    question: "How are AI summaries governed?",
    answer:
      "AI-generated summaries and tasks carry reviewed / unreviewed states. A human can review or correct them before they're relied on, and every change is captured in the audit record.",
  },
  {
    question: "How is data retained and audited?",
    answer:
      "Retention for summaries, tasks, evidence, and audit events follows your workspace and admin settings. Enterprise audit events show source, actor, time, change, and affected object.",
  },
];

export function FaqSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.1);

  // First item open by default; one open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((current) => (current === i ? null : i));

  return (
    <>
      <style>{`
        @keyframes fqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fq-hidden  { opacity: 0; transform: translateY(28px); }
        .fq-visible { animation: fqFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth height via grid rows — no JS measuring needed */
        .fq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .fq-panel.fq-open { grid-template-rows: 1fr; }
        .fq-panel > .fq-inner { overflow: hidden; }

        .fq-icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
        .fq-icon.fq-rot { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .fq-hidden, .fq-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .fq-panel { transition: none !important; }
          .fq-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <p
              ref={eyebrowRef}
              className={`fq-hidden ${eyebrowIn ? "fq-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              FAQ
            </p>
            <h2
              ref={headRef}
              className={`fq-hidden ${headIn ? "fq-visible" : ""} text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Workforce Truth, answered
            </h2>
          </div>

          {/* Accordion */}
          <div ref={listRef} className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div
                  key={faq.question}
                  className={`fq-hidden ${listIn ? "fq-visible" : ""} rounded-2xl border bg-white transition-colors dark:bg-[#151233] ${
                    isOpen
                      ? "border-[#4F5BD5]/30 dark:border-[#4F5BD5]/40"
                      : "border-gray-100 dark:border-white/10"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                      <FiPlus
                        className={`fq-icon h-4 w-4 ${isOpen ? "fq-rot" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`fq-panel ${isOpen ? "fq-open" : ""}`}
                  >
                    <div className="fq-inner">
                      <p className="px-5 pb-5 text-[14px] leading-[1.7] text-gray-500 dark:text-gray-400 sm:px-6 sm:pb-6">
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

export default FaqSection;