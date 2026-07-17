"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

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

export default function TrustProcurementSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes trustFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .trust-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .trust-visible{
          animation:trustFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .trust-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .trust-image:hover{
          transform:translateY(-4px) scale(1.01);
          box-shadow:0 24px 55px rgba(0,0,0,.18);
        }

        .trust-link{
          transition:all .3s ease;
        }

        .trust-link:hover{
          color:#3348F5;
          transform:translateY(-2px);
        }

        .trust-link svg{
          transition:transform .3s ease;
        }

        .trust-link:hover svg{
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
                        className={`mx-auto max-w-4xl text-center ${inView ? "trust-visible" : "trust-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Trust and Procurement
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Governance, security,
                            privacy, and AI policy —
                            reviewed before rollout.
                        </h2>

                    </div>
                    {/* Trust & Procurement Image */}

                    <div
                        className={`mt-14 ${inView ? "trust-visible" : "trust-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/trust-procurement.png"
                                alt="Trust and Procurement"
                                width={1600}
                                height={900}
                                priority
                                className="trust-image h-[240px] w-full object-cover sm:h-[360px] lg:h-auto"
                            />

                        </div>
                    </div>

                    {/* CTA */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`${inView ? "trust-visible" : "trust-hidden"
                            } mt-10 flex justify-center`}
                    >
                        <Link
                            href="/trust-center"
                            className="trust-link inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5]"
                        >
                            Visit Trust &amp; Governance

                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}