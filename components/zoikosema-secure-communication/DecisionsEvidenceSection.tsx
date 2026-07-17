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

const FEATURES = [
    {
        title: "Decision record",
        description: "Approver, timestamp, related files.",
    },
    {
        title: "Action items",
        description: "Owner, due date, completion evidence.",
    },
    {
        title: "Corrections",
        description: "Version history; never a silent rewrite.",
    },
    {
        title: "Audit export",
        description: "Scope, redaction, reviewer approval, manifest.",
    },
];

export default function DecisionsEvidenceSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes deFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes deScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .de-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .de-visible{
          animation:deFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .de-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .de-visible-img{
          animation:deScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .de-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .de-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.12);
        }

        .de-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .de-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 40px rgba(79,91,213,.12);
        }

        @media(prefers-reduced-motion:reduce){

          .de-hidden,
          .de-visible,
          .de-hidden-img,
          .de-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .de-card:hover,
          .de-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "de-visible" : "de-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Decisions, Follow-ups and Evidence
                        </p>

                        <h2 className="text-[clamp(30px,4vw,40px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Sensitive conversation becomes accountable
                            <br />
                            work — without losing source context.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-10 ${imageIn ? "de-visible-img" : "de-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/decisions-evidence.png"
                                alt="Decisions and Evidence"
                                width={1600}
                                height={900}
                                priority
                                className="de-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Feature Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {FEATURES.map((feature, index) => (
                            <div
                                key={feature.title}
                                style={{
                                    animationDelay: `${0.12 + index * 0.08}s`,
                                }}
                                className={`de-card ${cardsIn ? "de-visible" : "de-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}