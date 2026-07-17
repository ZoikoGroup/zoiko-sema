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

export default function AIGovernanceSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes aiFadeUp{
          from{
            opacity:0;
            transform:translateY(32px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .ai-hidden{
          opacity:0;
          transform:translateY(32px);
        }

        .ai-visible{
          animation:aiFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ai-image:hover{
          transform:translateY(-5px) scale(1.01);
          box-shadow:0 28px 60px rgba(0,0,0,.18);
        }

        .info-box{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .info-box:hover{
          transform:translateY(-4px);
          border-color:#4F5BD5;
          box-shadow:0 20px 45px rgba(79,91,213,.12);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "ai-visible" : "ai-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            AI Governance
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Automated insights are reviewable
                            signals, not verdicts.
                        </h2>

                    </div>
                    {/* AI Governance Image */}

                    <div
                        className={`mt-14 ${inView ? "ai-visible" : "ai-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/ai-governance.png"
                                alt="AI Governance"
                                width={1600}
                                height={900}
                                priority
                                className="ai-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Information Panel */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`info-box ${inView ? "ai-visible" : "ai-hidden"
                            } mt-8 rounded-[22px] border border-[#E8EAF5] bg-[#F7F8FD] p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35] sm:p-8`}
                    >
                        <p className="text-[15px] leading-8 text-gray-600 dark:text-gray-300">
                            Automated insights are labeled as reviewable signals with
                            sources, confidence, and alternative explanations shown.
                            Material decisions remain with authorized humans and require
                            applicable review.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}