"use client";

import { useState } from "react";

/**
 * PricingFAQSection
 * Accordion-style FAQ list matching the "Questions about pricing" design.
 * White background, first item open by default.
 */

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" />
    </svg>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Which plan fits an individual or freelancer?",
    answer:
      "Free works for personal use and light exploration. Pro is built for freelancers and independent professionals who need full AI meeting summaries and Sema Notes & Search on top of everything in Free.",
  },
  {
    question: "What does Business add over Pro?",
    answer:
      "Business adds team-wide administration: an Admin Console with policies, Confidential Mode, and governance controls, on top of everything included in Pro. It requires a 3-seat minimum.",
  },
  {
    question: "Is Enterprise pricing public?",
    answer:
      "No. Enterprise is custom-priced based on seat count, deployment model, compliance requirements, and whether ZoikoTime integration is in scope. Talk to sales for a tailored quote.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch between Monthly and Annual billing at any time from your account settings, with charges prorated accordingly.",
  },
  {
    question: "Does ZoikoTime cost extra?",
    answer:
      "Yes. ZoikoTime is a separate, independently priced subscription. Business plans can add governed integration configuration where approved; Enterprise includes it as a permissioned capability.",
  },
];

export default function PricingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3B5BFF]">FAQ</p>
        <h2 className="mt-3 text-[28px] font-bold tracking-tight text-[#15131F] sm:text-[34px]">
          Questions about pricing
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF]/30 rounded-xl"
                >
                  <span className="text-[15px] font-semibold text-[#15131F]">{faq.question}</span>

                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-[#15131F] text-white" : "bg-[#EEF1FF] text-[#3B5BFF] hover:bg-[#E1E6FF]"
                    }`}
                  >
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
