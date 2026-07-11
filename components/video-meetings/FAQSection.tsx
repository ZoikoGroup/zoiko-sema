"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const faqData = [
  {
    question: "What's the difference between Basic and paid plans?",
    answer: "Basic plans are free and allow for group meetings up to 40 minutes with 100 participants. Paid plans unlock longer durations up to 30 hours, advanced features like AI-powered meeting summaries, unlimited whiteboards, and robust admin tools."
  },
  {
    question: "How many attendees can join a meeting?",
    answer: "On Basic and Pro plans, up to 100 participants can join simultaneously. Upgrading to Business tiers increases attendee limits up to 300 participants per meeting call room."
  },
  {
    question: "Does Meetings work on mobile devices?",
    answer: "Yes, Zoiko Sema Meetings is built with full native and web support across smartphones and tablets, allowing you to seamlessly share your screen, chat, and join live video events on the go."
  },
  {
    question: "How do meeting recordings and summaries work?",
    answer: "Once a meeting begins, hosts on eligible plans can enable automated recording. After the call finishes, our Meeting Intelligence generates chapters, full searchable transcripts, and actionable bullet summaries with assigned owners."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: accordionRef, inView: accordionIn } = useInView(0.1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-hidden  { opacity: 0; transform: translateY(30px); }
        .faq-visible { animation: faqFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .faq-item { opacity: 0; transform: translateY(20px); }
        .faq-container.faq-visible .faq-item {
          animation: faqFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-hidden, .faq-visible, .faq-item { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10">
          
          {/* Header */}
          <div
            ref={headerRef}
            className={`faq-hidden ${headerIn ? "faq-visible" : ""} text-center mb-12 sm:mb-16`}
          >
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold leading-tight text-slate-900 tracking-tight">
              Got questions? We've got answers.
            </h2>
          </div>

          {/* Accordion List Container */}
          <div
            ref={accordionRef}
            className={`faq-container ${accordionIn ? "faq-visible" : ""} flex flex-col gap-4 max-w-[740px] mx-auto`}
          >
            {faqData.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="faq-item"
                  style={{ animationDelay: `${0.08 * i}s` }}
                >
                  <div className="bg-violet-50 rounded-2xl border border-violet-100 overflow-hidden transition-colors duration-200 hover:bg-violet-100/40">
                    
                    {/* Toggle Button Header */}
                    <button
                      onClick={() => toggleAccordion(i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors focus:outline-none group"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4 select-none">
                        {faq.question}
                      </span>
                      <span 
                        className={`text-xl font-semibold text-blue-600 transform transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        ＋
                      </span>
                    </button>

                    {/* Smooth Collapsible Answer Container */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-48 border-t border-violet-100/60" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-sm sm:text-[14.5px] leading-relaxed text-slate-600 font-normal">
                        {faq.answer}
                      </div>
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