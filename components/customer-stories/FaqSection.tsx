"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How are these stories verified?",
    answer:
      "Every customer story is reviewed with the participating organization before publication. We verify key facts, outcomes, and approvals to ensure the information accurately reflects their experience.",
  },
  {
    question: "Can I talk to a customer directly?",
    answer:
      "In some cases, yes. Where customers have agreed to participate in reference calls, we can help facilitate an introduction through our team, subject to their availability and approval.",
  },
  {
    question: "How do I share my organization's story?",
    answer:
      "We'd love to hear from you. Contact our team with details about your experience using Zoiko Sema, and we'll work with you to develop a case study or success story that highlights your organization's journey.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Frequently Asked Questions
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
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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
