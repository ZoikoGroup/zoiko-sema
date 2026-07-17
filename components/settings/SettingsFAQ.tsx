"use client"

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function SettingsFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "How are Personal vs Organization settings separated?",
      answer:
        "Organization settings define the global governance, billing, and security standards for all users. Personal settings allow individual users to customize their UI experience, notification triggers, and accessibility needs without compromising the organizational compliance posture.",
    },
    {
      question: "Can I restrict billing permissions to specific individuals?",
      answer:
        "Yes. Using our Role-Based Access Control (RBAC), you can lock billing management to designated finance administrators, ensuring that regular developers and managers can configure workflows without viewing billing details.",
    },
    {
      question: "Are audit logs exportable for external auditing?",
      answer:
        "Absolutely. All changes to configurations, user policies, and organization structures are permanently tracked. These logs can be exported directly as CSV, JSON, or integrated directly via our webhook API for external compliance audits.",
    },
  ];

  // Set first item expanded by default to match the visual reference layout
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-sfaq">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpSFaq {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-sfaq {
          animation: fadeUpSFaq 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Centered Heading */}
        <h2 className="text-3xl font-extrabold text-[#0F172A] text-center tracking-tight mb-12">
          Settings FAQ
        </h2>

        {/* Accordion list */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-extrabold text-[#0F172A] text-xs md:text-sm hover:text-[#4F46E5] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 text-slate-400">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#4F46E5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Smooth Expand Container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
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
