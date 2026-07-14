"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What accessibility standard do you target?",
    answer:
      "We target WCAG 2.1 Level AA as our baseline and continue improving beyond it. We publish current conformance status by surface rather than claiming full compliance everywhere.",
  },
  {
    question: "Do you have a VPAT or ACR?",
    answer:
      "Yes. We provide VPAT and Accessibility Conformance Report (ACR) documentation for applicable products upon request to support procurement and accessibility reviews.",
  },
  {
    question: "How do I report an accessibility barrier?",
    answer:
      "You can report an accessibility issue using our accessibility feedback form or the designated support channels. Include details about the page, feature, and the barrier you encountered to help us investigate.",
  },
  {
    question: "What happens after I report a barrier?",
    answer:
      "Our accessibility team reviews each report, assesses its impact, prioritizes remediation where appropriate, and may contact you for additional information if needed. We aim to keep you informed throughout the process.",
  },
  {
    question: "Why do you list known limitations instead of hiding them?",
    answer:
      "We believe transparency builds trust. Documenting known limitations helps users make informed decisions, understand current accessibility gaps, and track improvements as they are implemented.",
  },
  {
    question: "How often is accessibility tested?",
    answer:
      "Accessibility is evaluated throughout the product lifecycle using a combination of automated testing, manual reviews, assistive technology testing, and periodic audits to support continuous improvement.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Accessibility FAQ
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className={
                  i !== faqs.length - 1 ? "border-b border-gray-200" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDEBFB] text-sm font-medium text-[#4F63F0]">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pr-14">
                    <p className="text-sm leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
