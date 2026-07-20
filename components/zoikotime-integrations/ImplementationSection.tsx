"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
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

export default function ImplementationSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes implementationFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .implementation-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .implementation-visible{
          animation:implementationFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .implementation-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .implementation-image:hover{
          transform:translateY(-4px) scale(1.008);
          box-shadow:0 24px 50px rgba(0,0,0,.16);
        }

        .implementation-link{
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .implementation-link:hover{
          color:#3348F5;
          transform:translateY(-2px);
        }

        .implementation-link svg{
          transition:transform .3s ease;
        }

        .implementation-link:hover svg{
          transform:translateX(5px);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-3xl text-center ${inView ? "implementation-visible" : "implementation-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Implementation
                        </span>

                        <h2 className="mt-6 text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Pilot, migration, cutover,
                            validation, and clear
                            ownership.
                        </h2>

                    </div>

                    {/* Showcase Image */}

                    <div
                        className={`mt-14 ${inView ? "implementation-visible" : "implementation-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-integrations/implementation.png"
                                alt="Implementation"
                                width={1600}
                                height={900}
                                priority
                                className="implementation-image h-[220px] w-full object-cover sm:h-[340px] lg:h-[500px]"
                            />

                        </div>
                    </div>

                    {/* CTA */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`${inView ? "implementation-visible" : "implementation-hidden"
                            } mt-8 flex justify-center`}
                    >
                        <Link
                            href="/implementation"
                            className="implementation-link inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5]"
                        >
                            Plan Implementation

                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}