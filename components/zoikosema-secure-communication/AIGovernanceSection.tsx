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

const AI_POLICIES = [
    {
        title: "Eligibility",
        description:
            "Classification, participant type, guest presence, role, and plan.",
    },
    {
        title: "Human review",
        description:
            "Authorized reviewer edits, rejects, or approves before sharing.",
    },
    {
        title: "Sensitive exclusions",
        description:
            "Legal, executive, HR, healthcare, and client-confidential spaces.",
    },
];

export default function AIGovernanceSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes aiFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes aiFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .ai-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .ai-visible{
          animation:aiFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-hidden-right{
          opacity:0;
          transform:translateX(40px);
        }

        .ai-visible-right{
          animation:aiFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ai-image:hover{
          transform:translateY(-6px);
          box-shadow:0 34px 70px rgba(0,0,0,.45);
        }

        .ai-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .ai-card:hover{
          transform:translateY(-4px);
          border-color:rgba(124,134,240,.4);
          background:rgba(255,255,255,.08);
          box-shadow:0 20px 42px rgba(79,91,213,.18);
        }

        @media(prefers-reduced-motion:reduce){

          .ai-hidden,
          .ai-visible,
          .ai-hidden-right,
          .ai-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .ai-card:hover,
          .ai-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="relative overflow-hidden bg-[#0D0B24] py-10 sm:py-12 lg:py-14">

                {/* Background Glow */}

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-[#4F5BD5]/15 blur-[140px]" />

                    <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#4F5BD5]/10 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-4xl text-center ${headerIn ? "ai-visible" : "ai-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]">
                            AI Governance
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-white">
                            Eligibility, sources, human review,
                            <br />
                            and audit — for sensitive spaces.
                        </h2>

                    </div>

                    <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

                        {/* LEFT */}

                        <div
                            ref={imageRef}
                            className={imageIn ? "ai-visible" : "ai-hidden"}
                        >
                            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#151233] shadow-[0_30px_70px_rgba(0,0,0,.45)]">

                                <Image
                                    src="/zoikosema-secure-communication/ai-governance.png"
                                    alt="AI Governance"
                                    width={1400}
                                    height={1000}
                                    priority
                                    className="ai-image h-auto w-full object-cover"
                                />

                            </div>

                            <p className="mt-5 text-[13px] leading-6 text-gray-400">
                                The workspace remains fully usable when AI is disabled,
                                unavailable, or not permitted.
                            </p>

                        </div>
                        {/* RIGHT */}

                        <div
                            ref={cardsRef}
                            className={`space-y-5 ${cardsIn ? "ai-visible-right" : "ai-hidden-right"
                                }`}
                            style={{ animationDelay: ".15s" }}
                        >
                            {AI_POLICIES.map((item, index) => (
                                <div
                                    key={item.title}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.08}s`,
                                    }}
                                    className="ai-card rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                                >
                                    <h3 className="text-[18px] font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}