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

export default function RolesIntegrationsSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes rolesFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .roles-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .roles-visible{
          animation:rolesFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .roles-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .roles-image:hover{
          transform:translateY(-5px) scale(1.01);
          box-shadow:0 28px 60px rgba(0,0,0,.18);
        }

        .roles-link{
          transition:all .3s ease;
        }

        .roles-link:hover{
          color:#4F5BD5;
        }

        .roles-link:hover svg{
          transform:translateX(4px);
        }

        .roles-link svg{
          transition:transform .3s ease;
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "roles-visible" : "roles-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Roles and Integrations
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Least privilege by default,
                            connected to your
                            systems of record.
                        </h2>

                    </div>

                    {/* Roles & Integrations Image */}

                    <div
                        className={`mt-14 ${inView ? "roles-visible" : "roles-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/roles-integrations.png"
                                alt="Roles and Integrations"
                                width={1600}
                                height={900}
                                priority
                                className="roles-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* CTA Links */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`${inView ? "roles-visible" : "roles-hidden"
                            } mt-10 flex flex-wrap items-center justify-center gap-8`}
                    >
                        <Link
                            href="/zoikotime-integrations"
                            className="roles-link inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5]"
                        >
                            See Integrations

                            <FiArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/contact-sales"
                            className="roles-link inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5]"
                        >
                            Talk to Sales

                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}