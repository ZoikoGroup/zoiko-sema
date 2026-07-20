"use client";

import { useEffect, useRef, useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

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
        question: "Does Sema replace our PMS or CRS?",
        answer:
            "No. Your PMS and CRS remain the source of truth for reservations, rates, and guest records. Sema is the coordination layer — it receives only the masked operational context needed to action a request.",
    },
    {
        question: "Can Sema access guest payment or loyalty data?",
        answer:
            "No. Payment data and loyalty tiers stay in your PMS and CRM. Sema does not receive, store, or surface financial or loyalty information in staff workspaces.",
    },
    {
        question: "How does Sema handle guest identity in staff channels?",
        answer:
            "Guest names and identifying details are masked at the coordination layer. Staff see a room reference and service context — not personally identifiable information — unless their role and policy explicitly authorize it.",
    },
    {
        question: "Can AI respond to guests automatically?",
        answer:
            "No. AI may draft suggested staff responses for human review, but autonomous guest-facing replies are not permitted. Every AI-assisted response requires an authorized staff member to review, edit, and send.",
    },
    {
        question: "Does Sema support multi-property hotel groups?",
        answer:
            "Yes. Each property has its own workspace with property-specific settings. Cross-property visibility, shared brand channels, and group reporting are configured at the brand or group level within the policy hierarchy.",
    },
    {
        question: "Is Sema a safety or emergency system?",
        answer:
            "No. Life-safety events, medical emergencies, and security incidents follow your property emergency protocols. Sema coordinates the operational response after emergency services are engaged.",
    },
    {
        question: "Can vendors and event partners access Sema?",
        answer:
            "Authorized vendors can be invited as scoped guests in event workspaces with explicit role, purpose, expiry, and access controls. Vendor access is logged and expires automatically at event close.",
    },
    {
        question: "Does Sema score or monitor hospitality staff?",
        answer:
            "No. Sema does not generate productivity scores, attendance monitoring, or hidden performance rankings. Reporting focuses on coordination health and service outcomes — not individual staff surveillance.",
    },
];

export default function TravelHospitalityFaqSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes thFaqFadeUp{
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
          animation:thFaqFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .faq-item{
          transition:all .3s ease;
        }

        .faq-item:hover{
          transform:translateX(6px);
        }

        .faq-item:hover .faq-icon{
          color:#7C86F0;
          transform:scale(1.1);
        }

        .faq-icon{
          transition:all .3s ease;
        }

      `}</style>

            <section className="bg-[#10142F] py-10 sm:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-3xl text-center ${inView ? "faq-visible" : "faq-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Common Questions
                        </span>

                        <h2 className="mt-6 text-[clamp(34px,4vw,48px)] font-bold text-white">
                            Questions answered directly.
                        </h2>

                    </div>
                    {/* FAQ Grid */}

                    <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
                        {FAQS.map((faq, index) => (
                            <div
                                key={faq.question}
                                style={{
                                    animationDelay: `${0.08 + index * 0.06}s`,
                                }}
                                className={`faq-item ${inView ? "faq-visible" : "faq-hidden"
                                    } border-b border-white/10 pb-8 last:border-b lg:last:border-b lg:[&:nth-last-child(-n+2)]:border-b-0`}
                            >
                                {/* Question */}

                                <div className="flex items-start gap-3">

                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4F5BD5]/10">
                                        <FiHelpCircle className="faq-icon h-4 w-4 text-[#7C86F0]" />
                                    </div>

                                    <h3 className="text-[18px] font-semibold leading-7 text-white">
                                        {faq.question}
                                    </h3>

                                </div>

                                {/* Answer */}

                                <p className="mt-5 pl-9 text-[15px] leading-8 text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}