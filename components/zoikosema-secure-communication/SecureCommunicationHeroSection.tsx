"use client";

import Image from "next/image";
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

const INDUSTRIES = [
    "Legal",
    "Finance",
    "HR & People",
    "Healthcare",
    "Client Services",
    "Regulated Operations",
];

export default function SecureCommunicationHeroSection() {
    const { ref: contentRef, inView: contentIn } = useInView(0.2);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes scFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes scFadeRight{
          from{
            opacity:0;
            transform:translateX(36px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .sc-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .sc-visible{
          animation:scFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sc-hidden-right{
          opacity:0;
          transform:translateX(36px);
        }

        .sc-visible-right{
          animation:scFadeRight .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sc-primary{
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            background .25s ease;
        }

        .sc-primary:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 32px rgba(79,91,213,.45);
        }

        .sc-secondary{
          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease;
        }

        .sc-secondary:hover{
          transform:translateY(-2px);
          background:rgba(255,255,255,.08);
          border-color:rgba(255,255,255,.4);
        }

        .sc-link{
          transition:color .25s ease;
        }

        .sc-arrow{
          transition:transform .25s ease;
        }

        .sc-link:hover .sc-arrow{
          transform:translateX(4px);
        }

        .sc-chip{
          transition:
            background .25s ease,
            transform .25s ease;
        }

        .sc-chip:hover{
          transform:translateY(-2px);
          background:rgba(255,255,255,.12);
        }

        .sc-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .sc-image:hover{
          transform:translateY(-6px);
          box-shadow:0 36px 70px rgba(0,0,0,.45);
        }

        @media(prefers-reduced-motion:reduce){

          .sc-hidden,
          .sc-hidden-right,
          .sc-visible,
          .sc-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .sc-primary:hover,
          .sc-secondary:hover,
          .sc-chip:hover,
          .sc-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="relative overflow-hidden bg-[#0D0B24] py-10 sm:py-12 lg:py-14">

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#4F5BD5]/20 blur-[120px]" />

                    <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#4F5BD5]/10 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">

                    {/* LEFT CONTENT */}

                    <div
                        ref={contentRef}
                        className={`max-w-xl ${contentIn ? "sc-visible" : "sc-hidden"
                            }`}
                    >
                        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]">
                            Use Case · Secure Communication
                        </p>

                        <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.05] tracking-tight text-white">
                            Security and
                            <br />
                            Compliance for
                            <br />
                            work that cannot leak,
                            <br />
                            drift, or lose context.
                        </h1>

                        <p className="mt-6 max-w-lg text-[16px] leading-8 text-gray-400">
                            Give teams controlled spaces for sensitive conversations,
                            meetings, files, AI summaries, decisions and follow-ups —
                            with role-based access, audit trails, retention controls and
                            guest safeguards.
                        </p>
                        {/* CTA */}

                        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                            <Link href="/get-a-demo">
                            <button
                                type="button"
                                className="sc-primary rounded-full bg-[#4F5BD5] px-8 py-3 text-sm font-semibold text-white"
                            >
                                Get a demo
                            </button>
                            </Link>
                            <Link href="/contact-sales">
                            <button
                                type="button"
                                className="sc-secondary rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white"
                            >
                                Talk to sales
                            </button>
                            </Link>
                            <Link href="/trust-center">
                            <button
                                type="button"
                                className="sc-link inline-flex items-center gap-2 text-sm font-semibold text-[#AEB6FF]"
                            >
                                View Trust Center

                                <FiArrowRight className="sc-arrow h-4 w-4" />
                            </button>
                            </Link>
                        </div>

                        {/* Industry Chips */}

                        <div className="mt-8 flex flex-wrap gap-3">

                            {INDUSTRIES.map((industry) => (

                                <span
                                    key={industry}
                                    className=" rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-medium text-gray-300 backdrop-blur-sm"
                                >
                                    {industry}
                                </span>

                            ))}

                        </div>

                    </div>

                    {/* ===================================================== */}
                    {/* RIGHT IMAGE */}
                    {/* ===================================================== */}

                    <div
                        ref={imageRef}
                        className={`${imageIn ? "sc-visible-right" : "sc-hidden-right"
                            }`}
                        style={{ animationDelay: ".15s" }}
                    >
                        <div className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,.25)]">

                            <Image
                                src="/zoikosema-secure-communication/hero-office.png"
                                alt="Secure enterprise communication workspace"
                                width={1400}
                                height={1100}
                                priority
                                className="sc-image h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}