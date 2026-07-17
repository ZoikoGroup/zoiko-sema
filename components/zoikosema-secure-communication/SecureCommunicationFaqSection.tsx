"use client";

import { useEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const FAQS = [
    {
        question: "What is Zoiko Sema Secure Communication?",
        answer:
            "Zoiko Sema Secure Communication combines chat, meetings, files, AI summaries, decisions, approvals, and governance into one policy-aware workspace for sensitive collaboration.",
    },
    {
        question: "What is Confidential Mode?",
        answer:
            "Confidential Mode applies stricter access controls, guest restrictions, retention rules, export controls, and audit requirements to sensitive workspaces.",
    },
    {
        question: "Can external guests join secure spaces?",
        answer:
            "Yes. Guests can be invited with scoped permissions, expiration dates, sponsor approval, and complete audit visibility.",
    },
    {
        question: "Can AI summaries be restricted?",
        answer:
            "Yes. AI availability can depend on workspace policies, participant roles, classification, guest presence, and administrative governance settings.",
    },
    {
        question:
            "Does this make an organization automatically compliant?",
        answer:
            "No. Zoiko Sema provides governance tools that help organizations support compliance initiatives, but regulatory compliance remains the responsibility of each organization.",
    },
    {
        question:
            "How is this different from the Security & Compliance Solution page?",
        answer:
            "This page focuses specifically on protecting communication workflows, while the Security & Compliance solution covers broader governance, identity, auditing, administration, and organizational controls.",
    },
];

export default function SecureCommunicationFaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const { ref, inView } = useInView(0.2);

    return (
        <>
            <style>{`
        @keyframes faqFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .faq-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .faq-visible{
          animation:faqFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .faq-card{
          transition:
            border-color .3s ease,
            transform .3s ease,
            box-shadow .3s ease;
        }

        .faq-card:hover{
          transform:translateY(-2px);
          border-color:#4F5BD5;
          box-shadow:0 14px 30px rgba(79,91,213,.10);
        }

        .faq-answer{
          overflow:hidden;
          transition:
            max-height .35s ease,
            opacity .35s ease,
            margin-top .35s ease;
        }

        .faq-icon{
          transition:transform .3s ease;
        }

        .faq-open .faq-icon{
          transform:rotate(180deg);
        }

        @media(prefers-reduced-motion:reduce){

          .faq-hidden,
          .faq-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .faq-answer{
            transition:none;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-4xl px-6 sm:px-8"
                >

                    {/* Header */}

                    <div
                        className={`text-center ${inView ? "faq-visible" : "faq-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            FAQ
                        </p>

                        <h2 className="text-[clamp(34px,4vw,46px)] font-bold text-[#172046] dark:text-white">
                            Questions about Secure Communication
                        </h2>

                    </div>
                    <div className="mt-8 space-y-4">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    style={{
                                        animationDelay: `${0.08 + index * 0.06}s`,
                                    }}
                                    className={`faq-card ${inView ? "faq-visible" : "faq-hidden"
                                        } ${isOpen ? "faq-open" : ""
                                        } overflow-hidden rounded-2xl border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="pr-6 text-[16px] font-semibold text-[#172046] dark:text-white">
                                            {faq.question}
                                        </span>

                                        {isOpen ? (
                                            <FiMinus className="faq-icon h-5 w-5 flex-shrink-0 text-[#4F5BD5]" />
                                        ) : (
                                            <FiPlus className="faq-icon h-5 w-5 flex-shrink-0 text-[#4F5BD5]" />
                                        )}
                                    </button>

                                    <div
                                        className="faq-answer"
                                        style={{
                                            maxHeight: isOpen ? "240px" : "0px",
                                            opacity: isOpen ? 1 : 0,
                                            marginTop: isOpen ? "0px" : "-4px",
                                        }}
                                    >
                                        <div className="border-t border-[#E8EAF5] px-6 py-5 dark:border-white/10">
                                            <p className="text-[15px] leading-7 text-gray-600 dark:text-gray-400">
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