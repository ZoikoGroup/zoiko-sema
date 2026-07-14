"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Can I reuse these resources for my internal team training?",
    answer:
      "Yes, you are encouraged to use our playbooks and guides for internal training purposes. All we ask is that you maintain the Zoiko Sema attribution where applicable.",
  },
  {
    question: "How often is the blog updated?",
    answer:
      "Our blog is updated regularly with new product insights, accessibility guidance, best practices, and company announcements as new content becomes available.",
  },
  {
    question: "Are there gated resources or whitepapers?",
    answer:
      "Some resources, such as detailed whitepapers, research reports, or enterprise guides, may require a simple registration, while many articles and documentation remain freely accessible.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-3xl font-semibold leading-snug text-gray-900 mb-2 md:text-[32px]">
          Common Questions
        </p>
        <h2 className="text-center leading-snug text-[#45464D]">
          Quick answers to frequently asked questions about our resources.
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className={"bg-[#F7F9FB] border-b border-gray-200"}
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
