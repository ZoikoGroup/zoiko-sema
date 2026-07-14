"use client";

import { useState } from "react";

export function ComplianceFaqSection() {
  const faqs = [
    {
      question: "What is the Zoiko Sema Compliance page?",
      answer: "It is the central Trust & Security route for enterprise buyers and reviewers to understand compliance posture, policy coverage, evidence availability, and control areas — and to request gated evidence or a formal review.",
    },
    {
      question: "Does Zoiko Sema display certification badges?",
      answer: "We avoid unverified or unsupported certification claims. We only display frameworks and statements that are actively approved by our security and legal teams.",
    },
    {
      question: "What evidence is public vs. gated?",
      answer: "Our Evidence Library outlines exactly what is public (like our Security Center and Privacy Notice) and what is gated or requires an NDA (like detailed audit reports or pen test summaries).",
    },
    {
      question: "How do I request compliance evidence?",
      answer: "You can use the 'Request a review' form on this page to route a request directly to the appropriate team (Security, Privacy, Procurement, or Legal).",
    },
    {
      question: "How are subprocessors and status handled?",
      answer: "Subprocessor changes and system status are communicated through our operational trust channels. You can subscribe to updates directly on those dedicated pages.",
    },
    {
      question: "How quickly will I get a response?",
      answer: "Response times depend on the nature of the request and required NDA execution, but our routing system ensures it reaches the right team immediately without bouncing around.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="flex flex-col w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[756px] mx-auto w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-['Sora']">
          Compliance FAQ
        </h2>
        <div className="flex flex-col w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
            >
              <span className="text-slate-900 text-base font-bold font-['Plus_Jakarta_Sans']">
                {faq.question}
              </span>
              <span className="text-violet-600 text-xl font-normal ml-4 transform transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}>
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-500 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
