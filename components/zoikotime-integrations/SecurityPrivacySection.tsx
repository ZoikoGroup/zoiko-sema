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

export default function SecurityPrivacySection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes securityFadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .security-hidden{
          opacity:0;
          transform:translateY(35px);
        }

        .security-visible{
          animation:securityFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .security-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .security-image:hover{
          transform:translateY(-4px) scale(1.008);
          box-shadow:0 28px 60px rgba(0,0,0,.30);
        }

        .security-panel{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .security-panel:hover{
          transform:translateY(-3px);
          border-color:rgba(124,134,240,.35);
          box-shadow:0 18px 40px rgba(0,0,0,.18);
        }

        .security-link{
          transition:all .3s ease;
        }

        .security-link svg{
          transition:transform .3s ease;
        }

        .security-link:hover{
          color:#A3AEFF;
        }

        .security-link:hover svg{
          transform:translateX(5px);
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
                    className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "security-visible" : "security-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Security and Privacy
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(32px,4vw,42px)] font-bold leading-tight text-white">
                            A connector never silently broadens
                            worker-data collection.
                        </h2>

                    </div>
                    {/* Showcase Image */}

                    <div
                        className={`mt-14 ${inView ? "security-visible" : "security-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl">

                            <Image
                                src="/zoikotime-integrations/security-privacy.png"
                                alt="Security and Privacy"
                                width={1600}
                                height={900}
                                priority
                                className="security-image h-[240px] w-full object-cover sm:h-[360px] lg:h-[500px]"
                            />

                        </div>
                    </div>

                    {/* Information Panel */}

                    <div
                        style={{
                            animationDelay: ".3s",
                        }}
                        className={`${inView ? "security-visible" : "security-hidden"
                            }`}
                    >
                        <div className="security-panel mt-6 rounded-2xl border border-white/10 bg-white/90 p-6 shadow-lg backdrop-blur-sm dark:bg-white/10">

                            <p className="text-[14px] leading-7 text-[#4B5563] dark:text-gray-300">
                                Least privilege, scoped secrets, TLS, credential rotation,
                                and role separation apply to every connection. Purpose,
                                fields, roles, notice, and privacy governance remain
                                required regardless of connector.
                            </p>

                        </div>
                    </div>

                    {/* CTA */}

                    <div
                        style={{
                            animationDelay: ".45s",
                        }}
                        className={`${inView ? "security-visible" : "security-hidden"
                            } mt-8 flex justify-center`}
                    >
                        <Link
                            href="/trust-center"
                            className="security-link inline-flex items-center gap-2 text-sm font-semibold text-[#7C86F0]"
                        >
                            Visit Trust Center

                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                </div>

            </section>

        </>
    );
}