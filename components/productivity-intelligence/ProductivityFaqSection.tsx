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
    question: "What is Productivity Intelligence?",
    answer:
      "It turns meeting-to-work signals, decisions, action items, and verified collaboration records into governed, aggregate insight — so leaders can see follow-through health, blockers, and where better coordination is needed.",
  },
  {
    question: "Is this employee monitoring or productivity scoring?",
    answer:
      "No. Productivity Intelligence reports on aggregate work health — follow-through, blockers, and coordination — not individuals. There is no per-person scoring, no keystroke or screen tracking, and no surveillance framing.",
  },
  {
    question: "Where does the insight come from?",
    answer:
      "It is built from source-linked work records: reviewed meeting summaries, logged decisions, assigned tasks, and status changes. Every signal traces back to a real collaboration artifact, not inferred activity.",
  },
  {
    question: "Can insights be exported or synced automatically?",
    answer:
      "Yes, with governance. Exports and syncs follow a review-before-sync step and workspace permissions, so nothing leaves or updates downstream systems until it is approved.",
  },
  {
    question: "How is privacy protected?",
    answer:
      "Insight is permissioned and aggregate by design. Visibility is role-based, individual scoring is never produced, and retention for underlying records follows your workspace and admin settings.",
  },
  {
    question: "Who can access advanced dashboards and exports?",
    answer:
      "Access is admin-governed. Roles determine who can view advanced dashboards, portfolio signals, and export packs — and each record carries a visibility chip explaining who can see it and why.",
  },
];

export function ProductivityFaqSection() {
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
        @keyframes pfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pf-hidden  { opacity: 0; transform: translateY(28px); }
        .pf-visible { animation: pfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth height via grid rows — no JS measuring needed */
        .pf-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .pf-panel.pf-open { grid-template-rows: 1fr; }
        .pf-panel > .pf-inner { overflow: hidden; }

        .pf-icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
        .pf-icon.pf-rot { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .pf-hidden, .pf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pf-panel { transition: none !important; }
          .pf-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Productivity Intelligence — frequently asked questions"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <p
              ref={eyebrowRef}
              className={`pf-hidden ${eyebrowIn ? "pf-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              FAQ
            </p>
            <h2
              ref={headRef}
              className={`pf-hidden ${headIn ? "pf-visible" : ""} text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Productivity Intelligence, answered
            </h2>
          </div>

          {/* Accordion */}
          <div ref={listRef} className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `pfaq-panel-${i}`;
              const buttonId = `pfaq-button-${i}`;
              return (
                <div
                  key={faq.question}
                  className={`pf-hidden ${listIn ? "pf-visible" : ""} rounded-2xl border bg-white transition-colors dark:bg-[#151233] ${
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
                        className={`pf-icon h-4 w-4 ${isOpen ? "pf-rot" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`pf-panel ${isOpen ? "pf-open" : ""}`}
                  >
                    <div className="pf-inner">
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

export default ProductivityFaqSection;