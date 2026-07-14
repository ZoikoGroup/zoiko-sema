"use client";

import { useState } from "react";

export function SubprocessorsFaqSection() {
  const faqs = [
    {
      question: "What is a subprocessor?",
      answer: "A subprocessor is a third-party service provider that may process data to help operate Zoiko Sema — for example hosting, notifications, support, security, analytics, or AI features. This page lists provider categories, not sensitive implementation details.",
    },
    {
      question: "Why show categories instead of exact vendors?",
      answer: "We focus on transparency of data processing roles rather than publishing internal vendor names, which can pose security risks. All categories are carefully vetted by our privacy and legal teams.",
    },
    {
      question: "What data may subprocessors process?",
      answer: "The data processed depends entirely on the subprocessor category. For example, hosting providers may process workspace data, while support tools process ticket data. We limit access strictly based on the required purpose.",
    },
    {
      question: "How will I know when the list changes?",
      answer: "You can subscribe to our subprocessor update notifications on this page. When a new provider is added or a significant change occurs, we will send an email detailing the change before it takes effect.",
    },
    {
      question: "How do I raise an objection or question?",
      answer: "Use the contact routes provided on this page to reach our privacy or legal teams. We have a formal review and objection process outlined in our Data Processing Addendum.",
    },
    {
      question: "Where are the legal terms?",
      answer: "The Data Processing Addendum (DPA) and Privacy Notice govern our use of subprocessors and data handling. Links to these resources are available in the 'Connected resources' section.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="flex flex-col w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[756px] mx-auto w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center font-['Sora']">
          Subprocessors FAQ
        </h2>
        <div className="flex flex-col w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
              >
                <span className="text-slate-900 text-base font-bold font-['Plus_Jakarta_Sans'] pr-8">
                  {faq.question}
                </span>
                <span className="text-violet-600 text-xl font-normal ml-4 transform transition-transform duration-200 shrink-0" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}>
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
