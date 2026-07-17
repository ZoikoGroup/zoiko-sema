"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const OUTCOME_CARDS = [
    {
        title: "On-time delivery",
        description:
            "Commitments met against target, by cohort and period.",
    },
    {
        title: "Service quality",
        description:
            "Rework rate, reopen rate, and service-level reliability.",
    },
    {
        title: "Evidence",
        description:
            "Every outcome links to its source records and review history.",
    },
];

export default function OutcomeQualitySection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes outcomeFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .outcome-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .outcome-visible{
          animation:outcomeFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .outcome-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .outcome-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          box-shadow:0 22px 45px rgba(79,91,213,.12);
        }

        .outcome-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .outcome-image:hover{
          transform:translateY(-6px) scale(1.01);
          box-shadow:0 28px 60px rgba(0,0,0,.18);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "outcome-visible" : "outcome-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Outcome and Quality
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Commitments, service levels,
                            rework, and evidence.
                        </h2>

                    </div>
                    {/* Outcome Image */}

                    <div
                        className={`mt-14 ${inView ? "outcome-visible" : "outcome-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/outcome-quality.png"
                                alt="Outcome and Quality"
                                width={1600}
                                height={900}
                                priority
                                className="outcome-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Outcome Cards */}

                    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                        {OUTCOME_CARDS.map((card, index) => (
                            <div
                                key={card.title}
                                style={{
                                    animationDelay: `${0.25 + index * 0.08}s`,
                                }}
                                className={`outcome-card ${inView ? "outcome-visible" : "outcome-hidden"
                                    } flex min-h-[180px] flex-col rounded-[22px] border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                            >
                                {/* Card Title */}

                                <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                                    {card.title}
                                </h3>

                                {/* Divider */}

                                <div className="my-5 h-px w-full bg-[#EEF1F8] dark:bg-white/10" />

                                {/* Description */}

                                <p className="text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {card.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

        </>

    );
}