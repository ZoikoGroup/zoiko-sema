"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can we restrict access between HR and Sales workspaces?",
    answer:
      "Yes. Role-aware visibility lets admins define strict boundaries between department workspaces, so sensitive HR records stay isolated from Sales and other teams.",
  },
  {
    question: "How does AI Summarization work with Compliance?",
    answer:
      "AI-generated summaries respect each department's governance policies — redaction rules, retention windows, and audit requirements are applied automatically before a summary is surfaced.",
  },
];

export default function CommonInquiries() {
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
              Common Inquiries
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
