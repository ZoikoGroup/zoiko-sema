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

const RISKS = [
    {
        title: "Leakage",
        description:
            "Sensitive files and conversations spread across tools without access or export controls.",
    },
    {
        title: "Context drift",
        description:
            "Decisions and approvals lose their source, owner, and evidence over time.",
    },
    {
        title: "Unclear access",
        description:
            "Guests and roles accumulate access with no review, expiry, or audit trail.",
    },
];

export default function WhySecureCommunicationSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes wsFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes wsScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .ws-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .ws-visible{
          animation:wsFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ws-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .ws-visible-img{
          animation:wsScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ws-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ws-image:hover{
          transform:translateY(-6px);
          box-shadow:0 30px 60px rgba(0,0,0,.12);
        }

        .ws-card{
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .ws-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 40px rgba(79,91,213,.12);
        }

        @media(prefers-reduced-motion:reduce){

          .ws-hidden,
          .ws-visible,
          .ws-hidden-img,
          .ws-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .ws-card:hover,
          .ws-image:hover{
            transform:none;
          }

        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "ws-visible" : "ws-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Why Secure Communication
                        </p>

                        <h2 className="text-[clamp(32px,4vw,44px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Sensitive work fails quietly —
                            through leakage, drift,
                            and lost context.
                        </h2>
                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-10 ${imageIn ? "ws-visible-img" : "ws-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/secure-team.png"
                                alt="Secure collaboration workspace"
                                width={1600}
                                height={900}
                                priority
                                className="ws-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Risk Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {RISKS.map((risk, index) => (
                            <div
                                key={risk.title}
                                style={{
                                    animationDelay: `${0.12 + index * 0.08}s`,
                                }}
                                className={`ws-card ${cardsIn ? "ws-visible" : "ws-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <h3 className="text-[18px] font-semibold text-[#172046] dark:text-white">
                                    {risk.title}
                                </h3>

                                <p className="mt-4 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {risk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );

}