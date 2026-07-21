"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is ZoikoTime?",
    answer:
      "ZoikoTime is a workforce assurance platform that verifies approved work sessions, applies workforce policies, and surfaces explainable exceptions with reviewable evidence — governed by named humans, not automated alone.",
  },
  {
    question: "How is workforce assurance different from employee monitoring?",
    answer:
      "Workforce assurance is policy-scoped, disclosed, and reviewable by the worker. Traditional monitoring is often hidden and unbounded. ZoikoTime requires purpose, notice, and a correction route for every data category collected.",
  },
  {
    question: "Does AI make decisions about employees?",
    answer:
      "No. AI classifies and explains signals with full source disclosure, but every consequential outcome — confirm, correct, dismiss, reassign, redact, or escalate — is decided by a named human reviewer.",
  },
  {
    question: "Can workers see or correct their data?",
    answer:
      "Yes. Every worker has a personal view of their own records, the policy applied, and the explanation behind any exception, along with a real route to dispute it and receive a recorded outcome.",
  },
  {
    question: "Is ZoikoTime compliant with employment and privacy laws?",
    answer:
      "ZoikoTime is designed around jurisdiction-aware policy, pre-deployment notice, and data minimization, but compliance ultimately depends on how your organization configures purpose, retention, and worker notice.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. You can download free to explore ZoikoTime with a single team, or request a guided demo to scope a pilot for a distributed, regulated, contractor, or enterprise deployment.",
  },
];

export default function ZoikoTimeOverviewFaq() {
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
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Questions about ZoikoTime
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="fade-up overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                  >
                    <span className="text-[15px] font-semibold text-[#202533]">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] transition-transform duration-300">
                      {isOpen ? (
                        <X size={16} className="text-[#4F63F0]" />
                      ) : (
                        <Plus size={16} className="text-[#4F63F0]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-7 text-[15px] leading-7 text-[#6B7280]">
                        {faq.answer}
                      </p>
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
