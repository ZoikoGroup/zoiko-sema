"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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

const TAGS = [
    "Outcome & quality insight",
    "Explainable metrics",
    "Human-reviewed AI",
];

export default function PerformanceAnalyticsHeroSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes heroFadeLeft{
          from{
            opacity:0;
            transform:translateX(-40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes heroFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes heroFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .hero-hidden{
          opacity:0;
        }

        .hero-left{
          animation:heroFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-right{
          animation:heroFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-tag{
          animation:heroFadeUp .6s ease forwards;
        }

        .hero-btn{
          transition:all .3s ease;
        }

        .hero-btn:hover{
          transform:translateY(-3px);
        }

        .hero-image{
          transition:transform .45s ease, box-shadow .45s ease;
        }

        .hero-image:hover{
          transform:translateY(-6px) scale(1.01);
          box-shadow:0 30px 70px rgba(0,0,0,.35);
        }

        .hero-pill{
          transition:all .3s ease;
        }

        .hero-pill:hover{
          border-color:#4F5BD5;
          background:#1E2450;
        }
      `}</style>

            <section className="overflow-hidden bg-gradient-to-br from-[#171B44] via-[#131735] to-[#0E122B] py-10 sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8"
                >

                    {/* LEFT CONTENT */}

                    <div className={inView ? "hero-left" : "hero-hidden"}>

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/25 bg-[#4F5BD5]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Performance Analytics
                        </span>

                        <h1 className="mt-8 text-[clamp(30px,5vw,42px)] font-bold leading-[1.05] text-white">
                            Turn governed
                            <br />
                            workforce records into
                            <br />
                            decision-ready
                            <br />
                            performance insight.
                        </h1>

                        <p className="mt-5 max-w-xl text-[17px] leading-8 text-gray-300">
                            Connect outcomes, quality, delivery flow, workload,
                            approved time, and reviewable evidence in one role-scoped
                            analytics experience — with clear definitions and human oversight.
                        </p>

                        {/* CTA Buttons */}

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link href="geta-a-demo">
                            <button className="hero-btn rounded-full bg-[#4F5BD5] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4F5BD5]/25">
                                Request a demo
                            </button>
                        </Link>
                        <Link href="/start-free">
                            <button className="hero-btn rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:border-[#4F5BD5] hover:bg-white/5">
                                Start free
                            </button>
                        </Link>
                        </div>

                        {/* Explore Link */}

                        <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7C86F0] transition-all duration-300 hover:gap-3 hover:text-white">
                            Explore Reporting & Workforce Analytics

                            <FiArrowRight className="h-4 w-4" />
                        </button>

                        {/* Feature Pills */}

                        <div className="mt-10 flex flex-wrap gap-3">

                            {TAGS.map((tag, index) => (
                                <span
                                    key={tag}
                                    style={{
                                        animationDelay: `${0.25 + index * 0.08}s`,
                                    }}
                                    className={`hero-pill hero-tag ${inView ? "" : "opacity-0"
                                        } rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-gray-300 backdrop-blur-sm`}
                                >
                                    {tag}
                                </span>
                            ))}

                        </div>

                        {/* Disclaimer */}

                        <p className="mt-8 max-w-xl text-[13px] leading-6 text-gray-500">
                            No single productivity score. No public worker or team
                            leaderboard. Material decisions remain human, reviewable,
                            and auditable.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div
                        className={`flex justify-center lg:justify-end ${inView ? "hero-right" : "hero-hidden"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,.35)]">

                            <Image
                                src="/zoikotime-performance-analytics/performance-analytics.png"
                                alt="Performance Analytics"
                                width={900}
                                height={650}
                                priority
                                className="hero-image h-auto w-full max-w-[640px] object-cover"
                            />

                        </div>
                    </div>

                </div>

            </section>

        </>

    );
}