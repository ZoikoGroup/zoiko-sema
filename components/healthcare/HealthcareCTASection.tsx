"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

export default function HealthcareCTASection() {
    const { ref, inView } = useInView(0.2);

    return (
        <>
            <style>{`
        @keyframes hcFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .hc-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .hc-visible{
          animation:hcFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hc-btn-primary{
          transition:
            transform .25s ease,
            background-color .25s ease,
            box-shadow .25s ease;
        }

        .hc-btn-primary:hover{
          transform:translateY(-2px);
          background:#F8F8FF;
          box-shadow:0 16px 32px rgba(255,255,255,.20);
        }

        .hc-btn-secondary{
          transition:
            transform .25s ease,
            border-color .25s ease,
            background-color .25s ease;
        }

        .hc-btn-secondary:hover{
          transform:translateY(-2px);
          background:rgba(255,255,255,.08);
          border-color:rgba(255,255,255,.45);
        }

        .hc-link{
          transition:color .25s ease;
        }

        .hc-arrow{
          transition:transform .25s ease;
        }

        .hc-link:hover .hc-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .hc-hidden,
          .hc-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .hc-btn-primary:hover,
          .hc-btn-secondary:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="overflow-hidden bg-[#4F5BD5] py-20 dark:bg-[#0D0B24] sm:py-24">

                <div
                    ref={ref}
                    className={`mx-auto flex max-w-5xl flex-col items-center px-6 text-center sm:px-8 ${inView ? "hc-visible" : "hc-hidden"
                        }`}
                >
                    <h2 className="max-w-4xl text-[clamp(34px,5vw,46px)] font-bold leading-tight text-white">
                        Ready to bring your healthcare
                        <br />
                        coordination into one governed
                        <br />
                        workspace?
                    </h2>

                    <p className="mt-6 max-w-2xl text-[16px] leading-8 text-indigo-100">
                        Get a demo, talk to sales, or explore the Trust Center to
                        start your evaluation.
                    </p>

                    {/* CTA Buttons */}

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        {/* Primary Button */}
                        <Link href="get-a-demo">
                        <button
                            type="button"
                            className="hc-btn-primary inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#4F5BD5]"
                        >
                            Get a demo
                        </button>
                        </Link>
                        {/* Secondary Button */}
                        <Link href="contact-sales">
                        <button
                            type="button"
                            className="hc-btn-secondary inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-transparent px-8 text-sm font-semibold text-white"
                        >
                            Talk to account team
                        </button>
                        </Link>
                        {/* Text Link */}
                        <Link href="trust-center">
                        <button
                            type="button"
                            className="hc-link inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                        >
                            Visit Trust Center

                            <FiArrowRight className="hc-arrow h-4 w-4" />

                        </button>
                        </Link>

                    </div>

                </div>

            </section>

        </>

    );

}