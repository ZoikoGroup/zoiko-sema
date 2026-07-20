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

const METRICS = [
    {
        title: "Definition drawer",
        description:
            "Plain-language definition, formula, period, cohort, and sources.",
    },
    {
        title: "Fairness safeguards",
        description:
            "Minimum group sizes, suppression, and comparable cohorts — never a public leaderboard.",
    },
    {
        title: "Freshness",
        description:
            "Last successful sync and coverage shown alongside every metric.",
    },
];

export default function MetricMethodologySection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes metricFadeLeft{
          from{
            opacity:0;
            transform:translateX(-40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes metricFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes metricFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .metric-hidden{
          opacity:0;
        }

        .metric-header{
          animation:metricFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .metric-left{
          animation:metricFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .metric-right{
          animation:metricFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .metric-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease,
            background .35s ease;
        }

        .metric-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          background:#23284D;
          box-shadow:0 24px 50px rgba(79,91,213,.18);
        }

        .metric-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .metric-image:hover{
          transform:translateY(-6px) scale(1.01);
          box-shadow:0 30px 70px rgba(0,0,0,.35);
        }

      `}</style>

            <section className="overflow-hidden bg-gradient-to-br from-[#171B44] via-[#131735] to-[#0E122B] py-10 sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "metric-header" : "metric-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Metric Methodology
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-white">
                            Every metric exposes its formula,
                            denominator, cohort,
                            and version.
                        </h2>

                    </div>
                    {/* Content */}

                    <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

                        {/* Left Image */}

                        <div
                            className={inView ? "metric-left" : "metric-hidden"}
                        >
                            <div className="overflow-hidden rounded-[28px]">

                                <Image
                                    src="/zoikotime-performance-analytics/metric-methodology.png"
                                    alt="Metric Methodology"
                                    width={900}
                                    height={650}
                                    className="metric-image h-auto w-full object-cover"
                                    priority
                                />

                            </div>
                        </div>

                        {/* Right Cards */}

                        <div className="space-y-5">

                            {METRICS.map((item, index) => (
                                <div
                                    key={item.title}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.1}s`,
                                    }}
                                    className={`metric-card ${inView ? "metric-right" : "metric-hidden"
                                        } rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm`}
                                >
                                    <h3 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}