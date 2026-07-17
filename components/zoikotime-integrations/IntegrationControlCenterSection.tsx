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

const FEATURES = [
    {
        title: "KPI row",
        description:
            "Connected systems, failed syncs, retry queue, expiring credentials.",
    },
    {
        title: "Connected systems table",
        description:
            "Direction, objects, owner, status, and mapping version.",
    },
    {
        title: "Health panel",
        description:
            "Authorization, schema, sync latency, and API error rate.",
    },
    {
        title: "Mapping review queue",
        description:
            "Unmapped fields, type mismatch, and pending approval.",
    },
];

export default function IntegrationControlCenterSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes controlFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .control-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .control-visible{
          animation:controlFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .control-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .control-image:hover{
          transform:translateY(-4px) scale(1.008);
          box-shadow:0 26px 55px rgba(0,0,0,.16);
        }

        .control-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .control-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 40px rgba(79,91,213,.10);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-3xl text-center ${inView ? "control-visible" : "control-hidden"
                            }`}
                    >
                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Integration Control Center
                        </span>

                        <h2 className="mt-6 text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Connection health, mappings, sync,
                            credentials, and audit —
                            in one screen.
                        </h2>
                    </div>
                    {/* Showcase Image */}

                    <div
                        className={`mt-14 ${inView ? "control-visible" : "control-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-integrations/integration-control-center.png"
                                alt="Integration Control Center"
                                width={1600}
                                height={900}
                                priority
                                className="control-image h-[240px] w-full object-cover sm:h-[360px] lg:h-[520px]"
                            />

                        </div>
                    </div>

                    {/* Feature Cards */}

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {FEATURES.map((feature, index) => (
                            <div
                                key={feature.title}
                                style={{
                                    animationDelay: `${0.25 + index * 0.08}s`,
                                }}
                                className={`control-card ${inView ? "control-visible" : "control-hidden"
                                    } rounded-3xl border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                            >
                                <h3 className="text-[15px] font-semibold text-[#172046] dark:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}