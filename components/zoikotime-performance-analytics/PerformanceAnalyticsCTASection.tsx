"use client";

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

export default function PerformanceAnalyticsCTASection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
      @keyframes ctaFade{
        from{
          opacity:0;
          transform:translateY(35px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      .cta-hidden{
        opacity:0;
        transform:translateY(35px);
      }

      .cta-visible{
        animation:ctaFade .85s cubic-bezier(.22,1,.36,1) forwards;
      }

      .primary-btn,
      .secondary-btn{
        transition:
          transform .3s ease,
          box-shadow .3s ease,
          background .3s ease,
          border-color .3s ease;
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

      .cta-link{
        transition:all .3s ease;
      }

      .cta-link svg{
        transition:transform .3s ease;
      }

      .cta-link:hover{
        color:#7C86F0;
      }

      .cta-link:hover svg{
        transform:translateX(5px);
      }

      `}</style>

            <section className="relative overflow-hidden bg-gradient-to-br from-[#191C48] via-[#111531] to-[#0D1027] py-10 sm:py-12 lg:py-14">

                {/* Background Glow */}

                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4F5BD5]/20 blur-[140px]" />

                    <div className="absolute right-0 top-0 h-[260px] w-[260px] rounded-full bg-[#4F5BD5]/10 blur-[110px]" />

                    <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#6D5EF7]/10 blur-[120px]" />

                </div>

                <div
                    ref={ref}
                    className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8"
                >

                    <div className={inView ? "cta-visible" : "cta-hidden"}>

                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Get Started
                        </span>

                        <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(30px,5vw,42px)] font-bold leading-tight text-white">
                            See performance clearly —
                            without a single score
                            or leaderboard.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-gray-300">
                            Request a guided demo, start free, or talk to sales about
                            enterprise governance.
                        </p>

                    </div>
                    {/* CTA Buttons */}

                    <div
                        style={{
                            animationDelay: ".15s",
                        }}
                        className={`${inView ? "cta-visible" : "cta-hidden"
                            } mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}
                    >
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
                    </div>

                    {/* Bottom CTA Link */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`${inView ? "cta-visible" : "cta-hidden"
                            } mt-8 flex justify-center`}
                    >
                        <Link
                            href="/zoikotime/workforce-overview"
                            className="cta-link inline-flex items-center gap-2 text-sm font-semibold text-[#7C86F0]"
                        >
                            Explore Reporting &amp; Workforce Analytics

                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}