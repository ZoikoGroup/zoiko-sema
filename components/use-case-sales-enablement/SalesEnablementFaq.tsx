"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the human-in-the-loop AI review work?",
    answer:
      "Every AI-drafted summary and follow-up is queued for a human reviewer before it's sent or synced to your CRM. Reviewers can edit, approve, or reject drafts, and every decision is logged for audit.",
  },
  {
    question: "Which CRMs do you support?",
    answer:
      "Zoiko Sema syncs verified meeting notes and commitments with Salesforce, HubSpot, and Microsoft Dynamics out of the box, with additional connectors available via our API and webhooks.",
  },
  {
    question: "Can we limit AI recording to specific accounts?",
    answer:
      "Yes. Admins can scope AI recording, transcription, and summarization to specific accounts, deal stages, or workspaces through role-based policy controls.",
  },
];

export default function SalesEnablementFaq() {
  const [open, setOpen] = useState(-1);

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
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className={`fade-up ${index !== 0 ? "border-t border-[#E5E7EB]" : ""}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-[15px] font-medium text-[#1F2937]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#6B7280] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-[15px] leading-7 text-[#6B7280]">{faq.answer}</p>
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
