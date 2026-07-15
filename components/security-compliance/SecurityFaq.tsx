"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Zoiko Sema handle data encryption?",
    answer:
      "All data is encrypted in transit with TLS 1.2+ and at rest with AES-256. Encryption keys are rotated automatically and managed through a dedicated key management service.",
  },
  {
    question: "Is your AI governance framework audit-ready?",
    answer:
      "Yes. Every AI-generated summary, decision, and action item is versioned and human-reviewable, with full audit trails available for compliance reporting.",
  },
  {
    question: "Can we integrate our existing SIEM tools?",
    answer:
      "Yes. Security events, access logs, and policy violations can be streamed to your existing SIEM through webhooks and our audit log API.",
  },
];

export default function SecurityFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="fade-up overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="text-[15px] font-semibold text-[#202533]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 text-[15px] leading-7 text-[#6B7280]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
