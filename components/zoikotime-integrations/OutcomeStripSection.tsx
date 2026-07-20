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

export default function OutcomeStripSection() {
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
          animation:outcomeFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .outcome-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .outcome-image:hover{
          transform:translateY(-4px) scale(1.008);
          box-shadow:0 26px 55px rgba(0,0,0,.16);
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
                            Outcome Strip
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Less manual transfer,
                            reliable records,
                            controlled automation.
                        </h2>

                    </div>
                    {/* Showcase Image */}

                    <div
                        className={`mt-14 ${inView ? "outcome-visible" : "outcome-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-integrations/outcome-strip.png"
                                alt="Outcome Strip"
                                width={1600}
                                height={900}
                                priority
                                className="outcome-image h-[240px] w-full object-cover sm:h-[360px] lg:h-auto"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}