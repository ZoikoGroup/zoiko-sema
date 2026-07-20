"use client";

import React, { useState } from "react";

export default function HowItWorksFaq() {
  const faqs = [
    {
      question: "How does ZoikoTime work?",
      answer:
        "ZoikoTime automatically tracks work hours, attendance, productivity, and project activity in real time. It provides managers with accurate insights while helping employees manage their time more effectively.",
    },
    {
      question: "What does ZoikoTime record?",
      answer:
        "ZoikoTime records work hours, attendance, application and website usage, task activity, idle time, and productivity metrics. It focuses on work-related data to improve efficiency and reporting.",
    },
    {
      question: "Is ZoikoTime employee surveillance software?",
      answer:
        "No. ZoikoTime is designed as a workforce productivity and time management platform. It emphasizes transparency, accountability, and operational insights rather than intrusive employee surveillance.",
    },
    {
      question: "Can ZoikoTime make employment decisions automatically?",
      answer:
        "No. ZoikoTime does not make hiring, promotion, disciplinary, or termination decisions. It provides reports and analytics that managers can use alongside their own judgment.",
    },
    {
      question: "What can workers see?",
      answer:
        "Employees can view their own timesheets, attendance records, productivity reports, tracked hours, and performance insights, giving them complete visibility into their work data.",
    },
    {
      question: "Can we try ZoikoTime before buying?",
      answer:
        "Yes. ZoikoTime offers a free trial so your team can explore its features, evaluate the reporting capabilities, and determine whether it fits your organization's needs before purchasing.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>();

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpFaqShell {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes faqExpand {
              from {
                opacity: 0;
                max-height: 0;
                transform: translateY(-6px);
              }
              to {
                opacity: 1;
                max-height: 300px;
                transform: translateY(0);
              }
            }

            .animate-fade-up-faq-shell {
              animation: fadeUpFaqShell 0.8s cubic-bezier(0.16, 1, 0.3, 1)
                forwards;
            }

            .faq-answer {
              animation: faqExpand 0.3s ease forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-up-faq-shell">
        <span className="text-[#2b56f5] text-[10px] font-black tracking-widest uppercase mb-3 block">
          ✦ FAQ
        </span>

        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight mb-12">
          Questions about how ZoikoTime works
        </h2>

        <div className="w-full flex flex-col gap-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 border-[#ebedf5] shadow-sm hover:border-[#d7dae6]`}
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-bold text-[#0f1124] text-[13.5px] pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`text-[#2b56f5] text-2xl font-medium transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer px-5 pb-5">
                    <div className="h-px bg-[#ebedf5] mb-4" />

                    <p className="text-[14px] leading-7 text-[#5b6478]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
