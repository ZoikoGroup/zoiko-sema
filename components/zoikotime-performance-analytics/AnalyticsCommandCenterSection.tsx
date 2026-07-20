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

const COMMAND_CARDS = [
    {
        title: "Scope banner",
        description:
            "Population, period, source coverage, and sensitivity label.",
    },
    {
        title: "KPI row",
        description:
            "On-time outcomes, cycle time, rework rate, and coverage.",
    },
    {
        title: "Process-health table",
        description:
            "Team/project completion, rework, cycle time, and trend.",
    },
    {
        title: "Insight queue",
        description:
            "Signal, confidence, owner, due date, and review status.",
    },
];

export default function AnalyticsCommandCenterSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes analyticsFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .analytics-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .analytics-visible{
          animation:analyticsFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .analytics-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .analytics-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          box-shadow:0 20px 45px rgba(79,91,213,.12);
        }

        .analytics-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .analytics-image:hover{
          transform:translateY(-6px) scale(1.01);
          box-shadow:0 30px 70px rgba(0,0,0,.18);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "analytics-visible" : "analytics-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Analytics Command Center
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Exact KPIs, filters, definitions,
                            drill-downs, and data quality.
                        </h2>

                    </div>

                    {/* Analytics Preview Image */}

                    <div
                        className={`mt-14 ${inView ? "analytics-visible" : "analytics-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/analytics-command-center.png"
                                alt="Analytics Command Center"
                                width={1600}
                                height={900}
                                priority
                                className="analytics-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Analytics Cards */}

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {COMMAND_CARDS.map((card, index) => (
                            <div
                                key={card.title}
                                style={{
                                    animationDelay: `${0.25 + index * 0.08}s`,
                                }}
                                className={`analytics-card ${inView ? "analytics-visible" : "analytics-hidden"
                                    } flex min-h-[185px] flex-col rounded-[22px] border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                            >
                                {/* Card Title */}

                                <h3 className="text-[15px] font-semibold text-[#172046] dark:text-white">
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