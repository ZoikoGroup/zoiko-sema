"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function AlertsFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What are workforce alerts and notifications?",
      answer:
        "Workforce alerts and notifications are policy-aware system signals triggered by specific operational events—such as unexpected break durations, unexcused overtime, or missing shift handoffs. They are designed to bring critical operational exceptions directly to the attention of designated reviewers with complete context.",
    },
    {
      question: "Does ZoikoTime send inactivity alerts?",
      answer:
        "Yes. Depending on your team's custom configuration, the system can detect periods of unexpected system inactivity during scheduled shifts and notify appropriate managers based on pre-defined threshold rules.",
    },
    {
      question: "Can ZoikoTime alert us before overtime or break violations?",
      answer:
        "Absolutely. You can set proactive thresholds (e.g., warning a manager 15 minutes before a team member reaches a mandatory overtime limit or misses a state-regulated meal break window) to proactively correct issues before they become compliance liabilities.",
    },
    {
      question: "How does ZoikoTime prevent alert fatigue?",
      answer:
        "We use advanced routing and fatigue controls—including grouping duplicate events, custom cooldown matrices, automatic suppression rules, quiet-hour pauses, and secondary escalation paths—to ensure that only high-priority, actionable exceptions trigger active notifications.",
    },
    {
      question: "Can alerts trigger automatic disciplinary action?",
      answer:
        "No. Our system is built around human-in-the-loop review. Alerts surface policy exceptions for review and evaluation; they do not automatically make disciplinary, performance, pay, or employment decisions.",
    },
    {
      question: "Can workers see alerts about themselves?",
      answer:
        "Yes. Transparency is a core value of our platform. Workers can be granted access to view their own exception logs, submit notes or context directly from their dashboard, and review finalized outcomes to ensure open communication.",
    },
  ];

  // State to track the index of the expanded FAQ item (null if none expanded)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-faq">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpFaq {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-faq {
          animation: fadeUpFaq 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center tracking-tight leading-[1.2] mb-12">
          Questions about Alerts & Notifications
        </h2>

        {/* Interactive FAQ Accordion List */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#0F172A] text-sm md:text-base hover:text-[#4F46E5] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 p-1 rounded-full bg-slate-50 text-[#3457E8] group-hover:text-[#4F46E5]">
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
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
