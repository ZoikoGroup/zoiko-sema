"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is Teams & Groups in ZoikoTime?",
      answer:
        "A governed organization structure for departments, teams, managers, purpose groups, policies, approvals, access, reporting, and lifecycle.",
    },
    {
      question: "What is the difference between a team and a group?",
      answer:
        "Teams define organizational line reporting and operational chains, whereas groups act as dynamic or functional cross-cutting categories for specific policy application.",
    },
    {
      question: "Can one worker belong to multiple groups?",
      answer:
        "Yes. Workers can be dynamically or manually assigned across multiple functional cross-cutting groups without modifying their structural core team alignment.",
    },
    {
      question: "Can managers see every worker record?",
      answer:
        "No. Visibility permissions adhere strictly to configured scoping blueprints and least-privilege structures relevant to line ownership parameters.",
    },
    {
      question: "Does ZoikoTime support HRIS and SCIM?",
      answer:
        "Yes. Native automated integrations support real-time synchronizations with common directory providers alongside inbound structural updates dynamically.",
    },
    {
      question: "How do dynamic groups work?",
      answer:
        "Dynamic groups automatically evaluate attribute baselines across your total worker landscape, immediately enrolling profiles matching parameters.",
    },
    {
      question: "Can we reorganize teams without losing history?",
      answer:
        "Yes. Every revision generates structural timeline points allowing simple validation previews, tracking modifications without destroying legacy lineages.",
    },
    {
      question: "Can workers see their team and manager information?",
      answer:
        "Yes. Full access rules secure individual record interfaces, ensuring transparent notice options regarding current assignments and active dependencies.",
    },
  ];

  // Set first index open by default to exactly match the image state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpFaq {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-faq {
              animation: fadeUpFaq 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-faq">
        {/* Top Header Block */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              16 – FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight">
            Common questions answered.
          </h2>
        </div>

        {/* Minimal Borderless Stack Accordion Interface */}
        <div className="mx-auto max-w-3xl flex flex-col border-t border-[#ebedf5]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full border-b border-[#ebedf5] py-5 flex flex-col transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="font-bold text-[#0f1124] text-[15px] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[20px] font-medium leading-none select-none transition-transform duration-200 ${
                      isOpen ? "text-[#784ce6]" : "text-[#784ce6]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Expandable Content Frame */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#51567d] text-[13px] leading-relaxed font-medium max-w-4xl">
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
  );
}
