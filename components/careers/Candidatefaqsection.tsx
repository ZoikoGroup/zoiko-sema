"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

type Faq = {
    question: string;
    answer: string;
};

const FAQS: Faq[] = [
    {
        question: "How do I apply?",
        answer:
            "Apply through the role detail page for any live role. If no suitable role is available, join the talent community and we'll reach out when a relevant role opens.",
    },
    {
        question: "Can I apply for more than one role?",
        answer:
            "Yes. You're welcome to apply to any roles that match your skills and interests. If several look like a fit, our recruiting team can help point you toward the best match.",
    },
    {
        question: "Is Zoiko Sema remote, hybrid, or office-based?",
        answer:
            "It varies by role and team. Each role's detail page lists its location and work model — remote, hybrid, or office-based — once published and HR-approved.",
    },
    {
        question: "What is the hiring process?",
        answer:
            "Most processes include an application review, an intro conversation with recruiting, one or more role-specific interviews, and a final discussion. The exact steps are shared on the role page and confirmed by your recruiter.",
    },
    {
        question: "Can I request interview accommodations?",
        answer:
            "Absolutely. If you need an accommodation at any stage, let your recruiter know and we'll work with you to make the process accessible and comfortable.",
    },
    {
        question: "Will I receive feedback?",
        answer:
            "We aim to keep every candidate informed of their status. Where possible, we share feedback after interviews, though the level of detail can vary by role and stage.",
    },
    {
        question: "How is candidate data handled?",
        answer:
            "Your application data is processed per our Privacy Notice, used only for hiring purposes, and access is limited to the people involved in your process. Retention follows our data policies.",
    },
    {
        question: "Are internships or early-career roles available?",
        answer:
            "When open, internships and early-career roles are posted on the roles board alongside other positions. Join the talent community to be notified when new early-career openings go live.",
    },
];

export function CandidateFaqSection() {
    const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
    const { ref: headRef, inView: headIn } = useInView(0.3);
    const { ref: listRef, inView: listIn } = useInView(0.1);

    // First item open by default; one open at a time.
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) =>
        setOpenIndex((current) => (current === i ? null : i));

    return (
        <>
            <style>{`
        @keyframes cfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cf-hidden  { opacity: 0; transform: translateY(28px); }
        .cf-visible { animation: cfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth height via grid rows — no JS measuring needed */
        .cf-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .cf-panel.cf-open { grid-template-rows: 1fr; }
        .cf-panel > .cf-inner { overflow: hidden; }

        .cf-icon { transition: transform .3s cubic-bezier(.22,1,.36,1); }
        .cf-icon.cf-rot { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .cf-hidden, .cf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cf-panel { transition: none !important; }
          .cf-icon { transition: none !important; }
        }
      `}</style>

            <section
                aria-label="Candidate frequently asked questions"
                className="w-full bg-white py-10 dark:bg-[#0D0B24] sm:py-14"
            >
                <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <p
                            ref={eyebrowRef}
                            className={`cf-hidden ${eyebrowIn ? "cf-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Candidate FAQ
                        </p>
                        <h2
                            ref={headRef}
                            className={`cf-hidden ${headIn ? "cf-visible" : ""} text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
                            style={{ animationDelay: "0.08s" }}
                        >
                            Questions about applying
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div ref={listRef} className="flex flex-col gap-3">
                        {FAQS.map((faq, i) => {
                            const isOpen = openIndex === i;
                            const panelId = `cfaq-panel-${i}`;
                            const buttonId = `cfaq-button-${i}`;
                            return (
                                <div
                                    key={faq.question}
                                    className={`cf-hidden ${listIn ? "cf-visible" : ""} rounded-2xl border bg-white transition-colors dark:bg-[#151233] ${isOpen
                                            ? "border-[#4F5BD5]/30 dark:border-[#4F5BD5]/40"
                                            : "border-gray-100 dark:border-white/10"
                                        }`}
                                    style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                                >
                                    <button
                                        id={buttonId}
                                        type="button"
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                                    >
                                        <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                                            {faq.question}
                                        </span>
                                        <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                                            <FiPlus
                                                className={`cf-icon h-4 w-4 ${isOpen ? "cf-rot" : ""}`}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </button>

                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className={`cf-panel ${isOpen ? "cf-open" : ""}`}
                                    >
                                        <div className="cf-inner">
                                            <p className="px-5 pb-5 text-[14px] leading-[1.7] text-gray-500 dark:text-gray-400 sm:px-6 sm:pb-6">
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

export default CandidateFaqSection;