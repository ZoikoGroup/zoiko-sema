"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Zoiko Sema Responsible AI?",
    answer:
      "Zoiko Sema Responsible AI is our framework for designing, deploying, and governing AI features with a focus on transparency, privacy, security, human oversight, and enterprise controls.",
  },
  {
    question: "Are AI meeting summaries a final record?",
    answer:
      "No. AI-generated meeting summaries are intended to assist users and should always be reviewed, edited where necessary, and approved before being treated as an official record.",
  },
  {
    question: "How do admins govern AI features?",
    answer:
      "Workspace administrators can manage AI availability, permissions, sharing policies, retention settings, audit visibility, and other governance controls based on organizational requirements.",
  },
  {
    question: "How is AI-related data handled?",
    answer:
      "AI-related data follows Zoiko Sema's privacy and security controls, including approved processing, access permissions, retention policies, and applicable compliance requirements.",
  },
  {
    question: "Where do I report an inaccurate or sensitive AI output?",
    answer:
      "Users can report inaccurate, misleading, or sensitive AI outputs through the appropriate reporting tools or by following the AI Use Policy and Security reporting process.",
  },
  {
    question: "How do enterprise teams review AI governance?",
    answer:
      "Enterprise teams review AI governance through documented policies, audit logs, compliance materials, privacy documentation, security reviews, and ongoing human oversight of AI-enabled workflows.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Responsible AI FAQ
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
