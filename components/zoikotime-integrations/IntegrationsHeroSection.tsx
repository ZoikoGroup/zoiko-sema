"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const target = ref.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const TAGS = [
    "Explicit data direction",
    "Source-aware mappings",
    "Monitored sync",
    "Audit-ready changes",
];

export default function IntegrationsHeroSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes fadeLeft{
          from{
            opacity:0;
            transform:translateX(-45px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes fadeRight{
          from{
            opacity:0;
            transform:translateX(45px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .hero-hidden{
          opacity:0;
        }

        .hero-left{
          animation:fadeLeft .9s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-right{
          animation:fadeRight .9s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .hero-image:hover{
          transform:translateY(-6px) scale(1.01);
          box-shadow:0 30px 65px rgba(0,0,0,.35);
        }

        .primary-btn,
        .secondary-btn{
          transition:all .3s ease;
        }

        .primary-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 18px 40px rgba(79,91,213,.35);
        }

        .secondary-btn:hover{
          transform:translateY(-3px);
          border-color:#4F5BD5;
          background:rgba(255,255,255,.06);
        }

        .hero-link{
          transition:all .3s ease;
        }

        .hero-link svg{
          transition:transform .3s ease;
        }

        .hero-link:hover{
          color:#7C86F0;
        }

        .hero-link:hover svg{
          transform:translateX(5px);
        }

        .tag{
          transition:
            transform .3s ease,
            border-color .3s ease,
            background .3s ease;
        }

        .tag:hover{
          transform:translateY(-2px);
          border-color:#4F5BD5;
          background:rgba(255,255,255,.08);
        }

      `}</style>

            <section className="relative overflow-hidden bg-gradient-to-br from-[#181B48] via-[#111531] to-[#0D1027] py-10 sm:py-12 lg:py-14">

                {/* Background Glow */}

                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-0 top-0 h-[340px] w-[340px] rounded-full bg-[#6D5EF7]/15 blur-[120px]" />

                    <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-[#4F5BD5]/15 blur-[120px]" />

                </div>

                <div
                    ref={ref}
                    className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8"
                >

                    {/* LEFT CONTENT */}

                    <div className={inView ? "hero-left" : "hero-hidden"}>

                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Integrations
                        </span>

                        <h1 className="mt-7 max-w-xl text-[clamp(30px,5vw,44px)] font-bold leading-[1.05] text-white">
                            Connect your
                            workforce stack
                            without losing
                            control.
                        </h1>

                        <p className="mt-8 max-w-xl text-[17px] leading-8 text-gray-300">
                            Bring identity, HRIS, payroll, finance, projects,
                            communication, reporting, and approved enterprise
                            data flows into ZoikoTime through governed connectors,
                            APIs, webhooks, mappings, and monitored synchronization.
                        </p>

                        {/* CTA */}

                        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

                            <Link
                                href="/get-a-demo"
                                className="primary-btn inline-flex items-center justify-center rounded-full bg-[#4F5BD5] px-8 py-4 text-sm font-semibold text-white"
                            >
                                Request a demo
                            </Link>

                            <Link
                                href="/start-free"
                                className="secondary-btn inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white"
                            >
                                Start free
                            </Link>

                            <Link
                                href="/contact-sales"
                                className="hero-link inline-flex items-center gap-2 text-sm font-semibold text-[#7C86F0]"
                            >
                                Contact sales

                                <FiArrowRight className="h-4 w-4" />
                            </Link>

                        </div>

                        {/* Tags */}

                        <div className="mt-10 flex flex-wrap gap-3">

                            {TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="tag rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-200"
                                >
                                    {tag}
                                </span>
                            ))}

                        </div>

                        {/* Bottom Note */}

                        <p className="mt-8 max-w-xl text-[13px] italic leading-7 text-gray-400">
                            Every connection is purpose-limited, role-scoped,
                            reviewable, and designed to avoid silent expansion of
                            worker-data collection.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className={inView ? "hero-right" : "hero-hidden"}>

                        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">

                            <Image
                                src="/zoikotime-integrations/hero-image.png"
                                alt="ZoikoTime Integrations"
                                width={900}
                                height={700}
                                priority
                                className="hero-image h-[260px] w-full object-cover sm:h-[420px] lg:h-auto"
                            />

                        </div>

                    </div>

                </div>

            </section>

        </>

    );
}