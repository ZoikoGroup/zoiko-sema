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

const FRAMEWORK = [
    {
        title: "Outcomes",
        description:
            "Approved work completed, service delivery, and measurable business impact.",
    },
    {
        title: "Quality",
        description:
            "Reviewable evidence, human validation, compliance, and accuracy signals.",
    },
    {
        title: "Flow",
        description:
            "Work progression, bottlenecks, collaboration continuity, and throughput.",
    },
    {
        title: "Capacity",
        description:
            "Available effort, approved workload, scheduling balance, and utilization.",
    },
    {
        title: "Confidence",
        description:
            "Human-reviewed AI, explainability, governance, and policy confidence.",
    },
];

export default function MeasurementFrameworkSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes frameworkFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .framework-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .framework-visible{
          animation:frameworkFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .framework-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .framework-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          box-shadow:0 18px 45px rgba(79,91,213,.12);
        }

        .framework-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .framework-image:hover{
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
                        className={`mx-auto max-w-4xl text-center ${inView ? "framework-visible" : "framework-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Balanced Measurement Framework
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Outcomes, quality, flow, capacity,
                            and confidence — together,
                            not one score.
                        </h2>

                    </div>

                    {/* Framework Image */}

                    <div
                        className={`mt-14 ${inView ? "framework-visible" : "framework-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/measurement-framework.png"
                                alt="Balanced Measurement Framework"
                                width={1600}
                                height={900}
                                priority
                                className="framework-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Framework Cards */}

                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

                        {FRAMEWORK.map((item, index) => (
                            <div
                                key={item.title}
                                style={{
                                    animationDelay: `${0.2 + index * 0.08}s`,
                                }}
                                className={`framework-card ${inView ? "framework-visible" : "framework-hidden"
                                    } flex min-h-[200px] flex-col rounded-[22px] border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                            >
                                {/* Small Label */}

                                <span className="text-[13px] font-semibold text-[#172046] dark:text-white">
                                    {item.title}
                                </span>

                                {/* Divider */}

                                <div className="my-5 h-px w-full bg-[#EEF1F8] dark:bg-white/10" />

                                {/* Description */}

                                <p className="text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}