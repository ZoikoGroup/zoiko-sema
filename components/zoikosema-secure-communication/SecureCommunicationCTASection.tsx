"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

function useInView(threshold = 0.2) {
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

export default function SecureCommunicationCTASection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes ctaFadeUp{
          from{
            opacity:0;
            transform:translateY(32px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .cta-hidden{
          opacity:0;
          transform:translateY(32px);
        }

        .cta-visible{
          animation:ctaFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cta-primary{
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .cta-primary:hover{
          transform:translateY(-3px);
          box-shadow:0 18px 40px rgba(79,91,213,.45);
        }

        .cta-secondary{
          transition:
            transform .3s ease,
            border-color .3s ease,
            background .3s ease;
        }

        .cta-secondary:hover{
          transform:translateY(-3px);
          border-color:#7C86F0;
          background:rgba(255,255,255,.06);
        }

        .cta-link{
          transition:color .25s ease;
        }

        .cta-link svg{
          transition:transform .25s ease;
        }

        .cta-link:hover svg{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .cta-hidden,
          .cta-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

        }

      `}</style>

            <section className="relative overflow-hidden bg-[#0D0B24] py-10 sm:py-12 lg:py-14">

                {/* Background Glow */}

                <div className="absolute inset-0">

                    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#4F5BD5]/15 blur-[140px]" />

                    <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#4F5BD5]/10 blur-[140px]" />

                </div>

                {/* Background Illustration */}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]">

                    <Image
                        src="/zoikosema-secure-communication/bg.jpg"
                        alt=""
                        width={900}
                        height={600}
                        priority
                        className="hidden md:block h-[100vh] w-[100vw] max-w-[100%] object-contain"
                    />

                </div>

                <div
                    ref={ref}
                    className="relative z-10 mx-auto max-w-4xl px-6 text-center"
                >

                    <div className={inView ? "cta-visible" : "cta-hidden"}>

                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]">
                            Get Started
                        </p>

                        <h2 className="mx-auto max-w-3xl text-[clamp(36px,4vw,56px)] font-bold leading-tight text-white">
                            Give sensitive work a governed place
                            to happen.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-gray-400">
                            See a guided demo, talk to sales,
                            or review evidence in the Trust Center.
                        </p>
                        {/* CTA Buttons */}

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/get-a-demo">
                                <button
                                    className="cta-primary w-full rounded-full bg-[#4F5BD5] px-8 py-4 text-sm font-semibold text-white"
                                >
                                    Get a demo
                                </button>
                            </Link>
                            <Link href="/contact-sales">
                                <button
                                    className="cta-secondary w-full rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white"
                                >
                                    Talk to sales
                                </button>
                            </Link>
                            <Link href="/trust-center">
                                <button
                                    className="cta-link inline-flex items-center gap-2 text-sm font-medium text-[#8A94F8]"
                                >
                                    View Trust Center

                                    <FiArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>

                        {/* Bottom Links */}

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                            <Link href="/trust-center">
                            <button className="cta-link inline-flex items-center gap-2 text-sm font-medium text-[#8A94F8]">
                                View Trust Center

                                <FiArrowRight className="h-4 w-4" />
                            </button>
                            </Link>
                            <Link href="/admin-console">
                            <button className="cta-link inline-flex items-center gap-2 text-sm font-medium text-[#8A94F8]">
                                Explore Admin Console

                                <FiArrowRight className="h-4 w-4" />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}