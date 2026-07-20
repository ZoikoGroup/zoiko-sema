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

const FLOW_CARDS = [
    {
        title: "Cycle time",
        description:
            "Average completion time across approved work items and operational processes.",
    },
    {
        title: "Blocked-time share",
        description:
            "Track stalled work, waiting periods, dependencies, and bottlenecks.",
    },
    {
        title: "Handoffs",
        description:
            "Measure ownership transfers, collaboration continuity, and workflow health.",
    },
    {
        title: "Workload & sustainability",
        description:
            "Balance capacity, workload distribution, and long-term operational resilience.",
    },
];

export default function FlowCapacitySection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes flowFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .flow-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .flow-visible{
          animation:flowFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .flow-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .flow-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          box-shadow:0 22px 45px rgba(79,91,213,.12);
        }

        .flow-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .flow-image:hover{
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
                        className={`mx-auto max-w-4xl text-center ${inView ? "flow-visible" : "flow-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Flow and Capacity
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Cycle time, blocked work,
                            handoffs, and sustainable
                            workload.
                        </h2>

                    </div>
                    {/* Flow & Capacity Image */}

                    <div
                        className={`mt-14 ${inView ? "flow-visible" : "flow-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/flow-capacity.png"
                                alt="Flow and Capacity Analytics"
                                width={1600}
                                height={900}
                                priority
                                className="flow-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Flow Cards */}

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {FLOW_CARDS.map((card, index) => (
                            <div
                                key={card.title}
                                style={{
                                    animationDelay: `${0.25 + index * 0.08}s`,
                                }}
                                className={`flow-card ${inView ? "flow-visible" : "flow-hidden"
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