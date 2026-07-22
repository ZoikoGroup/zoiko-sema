"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are the default rate limits?",
    answer:
      "By default, every app starts with 1,000 requests per minute. Enterprise customers can request customized tier limits based on their expected traffic and deployment requirements.",
  },
  {
    question: "Is there a sandbox environment for testing integrations?",
    answer:
      "Yes. Every developer account includes access to a fully isolated sandbox environment where you can test APIs, webhooks, authentication flows, and integrations without affecting production data.",
  },
  {
    question: "How do I rotate my Client Secret?",
    answer:
      "Navigate to the Developer Dashboard, select your application, open Security settings, generate a new Client Secret, update your integration, and then revoke the previous secret once the migration is complete.",
  },
];

export default function FaqSection() {
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

      <section id="faq" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-semibold text-[#202533] md:text-[32px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="fade-up overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-[#202533]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
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
                    <p className="px-6 pb-7 text-[17px] leading-8 text-[#6B7280]">
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
