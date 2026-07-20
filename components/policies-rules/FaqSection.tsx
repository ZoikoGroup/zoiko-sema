"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Reusable FAQ Item component
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#2a4bf7]/20 shadow-md"
          : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left"
      >
        <h3 className="text-base font-semibold text-[#0f1124] pr-4">
          {question}
        </h3>

        <div className="w-9 h-9 rounded-full bg-[#EEF3FF] flex items-center justify-center text-[#2a4bf7] flex-shrink-0 transition-transform duration-300">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[15px] leading-7 text-[#5A6475] border-t border-gray-100 pt-5">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const faqs = [
    {
      question: "What is a workforce policy engine?",
      answer:
        "A workforce policy engine centralizes the rules that govern scheduling, attendance, overtime, breaks, leave, and compliance. ZoikoTime automatically evaluates these policies in real time so managers can enforce them consistently across teams and locations.",
    },
    {
      question: "What is the difference between a policy and a rule?",
      answer:
        "A policy defines the business objective or compliance requirement, while a rule specifies the exact conditions used to enforce that policy. Multiple rules can work together to implement a single workforce policy.",
    },
    {
      question: "Can we test a policy before publishing it?",
      answer:
        "Yes. ZoikoTime lets administrators validate and simulate policies before they go live, allowing teams to identify conflicts, review expected outcomes, and ensure policies behave as intended without impacting employees.",
    },
    {
      question: "Can workers see policies that affect them?",
      answer:
        "Yes. Employees can view the policies relevant to their schedules, attendance, leave, and workplace requirements through their self-service portal, improving transparency and reducing confusion.",
    },
    {
      question: "Does AI make policy decisions?",
      answer:
        "No. AI assists by identifying potential issues, recommending optimizations, and highlighting exceptions. Final policy configuration and approval always remain under the control of your organization.",
    },
    {
      question: "Can ZoikoTime replace legal advice?",
      answer:
        "No. ZoikoTime helps automate workforce compliance based on the policies you configure, but it is not a substitute for professional legal or regulatory advice. Organizations should consult qualified legal experts for jurisdiction-specific requirements.",
    },
  ];

  return (
    <section className="w-full bg-[#f6f8fc] px-6 md:px-16 lg:px-24 py-20 md:py-28 flex flex-col items-center">
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
              animation: fadeUpFaq .8s cubic-bezier(0.16,1,0.3,1) forwards;
            }
          `,
        }}
      />

      {/* Section Header */}
      <div
        className="text-center max-w-2xl mb-12 md:mb-16 animate-fade-up-faq"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a4bf7]" />
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#2a4bf7] uppercase">
            FAQ
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#0f1124]">
          Questions about Policies & Rules
        </h2>

        <p className="mt-5 text-[#667085] text-base md:text-lg leading-7">
          Everything you need to know about creating, managing, and enforcing
          workforce policies with ZoikoTime.
        </p>
      </div>

      {/* FAQ List */}
      <div
        className="w-full max-w-4xl flex flex-col gap-4 animate-fade-up-faq"
        style={{ animationDelay: "0.3s" }}
      >
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
