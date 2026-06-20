"use client";

import { useState } from "react";

/**
 * StartSignupFAQSection
 * "Signup blockers answered." — minimal 2-column FAQ grid, no icons in the
 * collapsed state (matches the flat pill design). Clicking a question
 * expands the answer inline with a smooth height animation. Hover, focus,
 * and active states on every row.
 */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is Sema actually free, or is it a trial?",
    answer:
      "It's genuinely free for personal use, not a time-limited trial. There's no auto-conversion to a paid plan — you choose to upgrade only when you need more.",
  },
  {
    question: "What happens when I outgrow the free plan?",
    answer:
      "You'll see clear prompts when you hit a limit (like history or AI summaries). You can upgrade to Starter or Business at any time without losing your existing data.",
  },
  {
    question: "Can my team join after I sign up?",
    answer:
      "Yes. You can invite teammates from your workspace settings at any point — there's no requirement to add everyone up front.",
  },
  {
    question: "How does Sema handle our data and AI summaries?",
    answer:
      "Your workspace data stays yours. AI summaries are workspace-controlled and are not used to train external models unless explicitly stated in your plan.",
  },
  {
    question: "Is Sema right for regulated industries?",
    answer:
      "Teams with compliance, SSO/SAML, or audit requirements typically move to Business or Enterprise, where those controls are available.",
  },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StartSignupFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#EEF1FB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Questions
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Signup blockers answered.
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`self-start rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md ${
                isOpen ? "ring-1 ring-indigo-100" : ""
              }`}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 rounded-xl px-5 py-4 text-left transition-colors duration-200 hover:bg-slate-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 active:bg-slate-100"
              >
                <span className="text-[13.5px] font-semibold text-slate-900">
                  {faq.question}
                </span>
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center text-slate-400 transition-all duration-300 ${
                    isOpen ? "rotate-180 text-indigo-600" : "rotate-0"
                  }`}
                >
                  <ChevronIcon className="h-4 w-4" />
                </span>
              </button>

              {/* Smooth expand/collapse */}
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="px-5 pb-4 text-[13px] leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}