"use client";

import { useEffect, useRef, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const FAQS = [
    {
        question: "What is performance analytics in ZoikoTime?",
        answer:
            "ZoikoTime Performance Analytics provides evidence-based operational insights using workflow outcomes, quality, cycle time, capacity, and reviewable metrics rather than productivity scoring.",
    },
    {
        question: "Does ZoikoTime give every worker a productivity score?",
        answer:
            "No. ZoikoTime does not create public rankings or productivity scores. Insights focus on operational health, service quality, and approved business outcomes.",
    },
    {
        question: "How are metrics calculated?",
        answer:
            "Every metric includes a documented formula, cohort, denominator, version, reporting period, and source so teams can understand how results were produced.",
    },
    {
        question: "Can managers compare teams or workers?",
        answer:
            "Managers can review operational trends where policy allows. Individual visibility follows role-based permissions and organizational governance policies.",
    },
    {
        question:
            "Can a ZoikoTime insight automatically affect pay or employment?",
        answer:
            "No. AI-generated insights are reviewable signals only. Material employment or compensation decisions always require authorized human review.",
    },
    {
        question: "What can workers see?",
        answer:
            "Workers can access their own approved records, understand how metrics are calculated, and request corrections where organizational policy supports it.",
    },
];

export default function PerformanceAnalyticsFAQSection() {
    const { ref, inView } = useInView();

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            <style>{`
      @keyframes faqFade{
        from{
          opacity:0;
          transform:translateY(30px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      .faq-hidden{
        opacity:0;
        transform:translateY(30px);
      }

      .faq-visible{
        animation:faqFade .8s cubic-bezier(.22,1,.36,1) forwards;
      }

      .faq-card{
        transition:
          border-color .3s ease,
          box-shadow .3s ease,
          transform .3s ease;
      }

      .faq-card:hover{
        transform:translateY(-2px);
        border-color:#4F5BD5;
        box-shadow:0 16px 35px rgba(79,91,213,.08);
      }

      .faq-answer{
        overflow:hidden;
        transition:
          max-height .35s ease,
          opacity .35s ease;
      }

      .faq-icon{
        transition:transform .3s ease;
      }

      .faq-open{
        transform:rotate(180deg);
      }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-5xl px-6 lg:px-8"
                >

                    <div
                        className={`text-center ${inView ? "faq-visible" : "faq-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            FAQ
                        </span>

                        <h2 className="mt-6 text-[clamp(30px,4vw,42px)] font-bold text-[#172046] dark:text-white">
                            Questions about Performance Analytics
                        </h2>

                    </div>
                    {/* FAQ List */}

                    <div className="mt-14 space-y-4">

                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.08}s`,
                                    }}
                                    className={`faq-card ${inView ? "faq-visible" : "faq-hidden"
                                        } overflow-hidden rounded-2xl border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                                    >
                                        <span className="pr-6 text-[15px] font-semibold text-[#172046] dark:text-white sm:text-[16px]">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`faq-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E8EAF5] bg-[#F8F9FD] dark:border-white/10 dark:bg-white/5 ${isOpen ? "faq-open" : ""
                                                }`}
                                        >
                                            {isOpen ? (
                                                <FiMinus className="h-5 w-5 text-[#4F5BD5]" />
                                            ) : (
                                                <FiPlus className="h-5 w-5 text-[#4F5BD5]" />
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        className="faq-answer"
                                        style={{
                                            maxHeight: isOpen ? "220px" : "0px",
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        <div className="border-t border-[#EEF1F8] px-6 py-5 dark:border-white/10 sm:px-8">
                                            <p className="text-[15px] leading-8 text-gray-600 dark:text-gray-300">
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