"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const STEPS = [
    "Sponsor",
    "Identity",
    "Scope",
    "Capabilities",
    "Expiry",
    "Offboarding",
];

export default function GuestGovernanceSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes ggFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes ggScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .gg-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .gg-visible{
          animation:ggFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gg-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .gg-visible-img{
          animation:ggScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gg-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .gg-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.12);
        }

        .gg-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .gg-card:hover{
          transform:translateY(-5px);
          border-color:#4F5BD5;
          background:#FBFCFF;
          box-shadow:0 18px 40px rgba(79,91,213,.10);
        }

        .dark .gg-card:hover{
          background:#1A1735;
        }

        @media(prefers-reduced-motion:reduce){

          .gg-hidden,
          .gg-visible,
          .gg-hidden-img,
          .gg-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .gg-card:hover,
          .gg-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "gg-visible" : "gg-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Guest Governance
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Sponsor, verify, scope,
                            restrict, expire, and audit.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-10 ${imageIn ? "gg-visible-img" : "gg-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/guest-governance.png"
                                alt="Guest governance"
                                width={1600}
                                height={900}
                                priority
                                className="gg-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>
                    {/* Governance Steps */}

                    <div
                        ref={cardsRef}
                        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
                    >
                        {STEPS.map((step, index) => (
                            <div
                                key={step}
                                style={{
                                    animationDelay: `${0.12 + index * 0.06}s`,
                                }}
                                className={`gg-card ${cardsIn ? "gg-visible" : "gg-hidden"
                                    } flex min-h-[88px] items-center justify-center rounded-2xl border border-[#E8EAF5] bg-white px-5 text-center shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <span className="text-[15px] font-semibold text-[#172046] dark:text-white">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}

                    <p
                        className={`${cardsIn ? "gg-visible" : "gg-hidden"
                            } mt-6 text-center text-[14px] leading-7 text-gray-500 dark:text-gray-400`}
                        style={{ animationDelay: ".45s" }}
                    >
                        No indefinite external access without an approved exception.
                        Guest badges stay visible in roster, chat, meeting, file,
                        and AI panels.
                    </p>

                </div>

            </section>

        </>

    );

}