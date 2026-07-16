"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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

type Faq = { question: string; answer: string };

const FAQS: Faq[] = [
  {
    question: "What is Zoiko Sema for healthcare?",
    answer:
      "Zoiko Sema is a governed communication and coordination workspace for healthcare operations teams — messages, meetings, handoffs, decisions, and follow-up with role-based access, reviewed AI, retention, and audit. It is not a clinical or medical-records system.",
  },
  {
    question: "Is Zoiko Sema an EHR or clinical system?",
    answer:
      "No. Zoiko Sema coordinates operational work, not diagnosis or clinical records. It complements your clinical systems rather than replacing them, and integrates only with confirmed, verified connections.",
  },
  {
    question: "Can healthcare organizations use AI summaries?",
    answer:
      "Yes, under governance. AI outputs start as reviewed drafts with eligibility checks, sensitive-space exclusions, and named human review before anything is shared or relied on.",
  },
  {
    question: "How is access limited to minimum-necessary information?",
    answer:
      "Access is governed by purpose, role, scope, and time. Named roles and permission sets replace broad 'all staff' access, and every grant, change, and revocation is logged.",
  },
  {
    question: "Does Zoiko Sema guarantee HIPAA compliance?",
    answer:
      "No automatic HIPAA compliance claim is made. BAA review is available through sales-assisted contracting where offered and approved. Compliance depends on your configuration, contracts, policies, safeguards, and applicable law.",
  },
  {
    question: "Can external care partners collaborate?",
    answer:
      "Yes. Guests and partners join scoped workspaces with permission-aware access, expiry, and audit — never broad or implied access to the wider organization.",
  },
  {
    question: "Can communication evidence be exported?",
    answer:
      "Yes. Decisions, source links, reviewer history, corrections, and audit events can be exported for review. Export counts and readiness do not by themselves imply legal compliance.",
  },
];

export function HealthcareFaqSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.08);

  // All collapsed by default (matches the design); one open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((current) => (current === i ? null : i));

  return (
    <>
      <style>{`
        @keyframes hcfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hcf-hidden  { opacity: 0; transform: translateY(28px); }
        .hcf-visible { animation: hcfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .hcf-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .hcf-panel.hcf-open { grid-template-rows: 1fr; }
        .hcf-panel > .hcf-inner { overflow: hidden; }

        .hcf-chev { transition: transform .3s ease; }
        .hcf-chev.hcf-rot { transform: rotate(180deg); }

        @media (prefers-reduced-motion: reduce) {
          .hcf-hidden, .hcf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .hcf-panel { transition: none !important; }
          .hcf-chev { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Healthcare frequently asked questions"
        className="w-full bg-[#EEF0FA] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-2xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <p
              ref={eyebrowRef}
              className={`hcf-hidden ${eyebrowIn ? "hcf-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              FAQ
            </p>
            <h2
              ref={headRef}
              className={`hcf-hidden ${headIn ? "hcf-visible" : ""} text-[clamp(28px,4.5vw,40px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Common questions answered.
            </h2>
          </div>

          {/* Accordion — cards */}
          <div ref={listRef} className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `hcfaq-panel-${i}`;
              const buttonId = `hcfaq-button-${i}`;
              return (
                <div
                  key={faq.question}
                  className={`hcf-hidden ${listIn ? "hcf-visible" : ""} overflow-hidden rounded-xl border bg-white shadow-[0_1px_3px_rgba(16,24,40,0.06)] transition-colors dark:bg-[#151233] dark:shadow-none ${
                    isOpen
                      ? "border-[#2F6BEB]/30 dark:border-[#2F6BEB]/40"
                      : "border-gray-100 dark:border-white/10"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.06}s` }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-[14px] font-medium text-gray-800 dark:text-gray-100">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`hcf-chev h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500 ${isOpen ? "hcf-rot" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`hcf-panel ${isOpen ? "hcf-open" : ""}`}
                  >
                    <div className="hcf-inner">
                      <p className="px-5 pb-4 text-[13px] leading-[1.7] text-gray-500 dark:text-gray-400 sm:px-6">
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

export default HealthcareFaqSection;