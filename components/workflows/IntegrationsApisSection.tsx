"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    FiArrowRight,
    FiZap,
    FiLink2,
    FiCode,
} from "react-icons/fi";
import type { IconType } from "react-icons";

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

type Integration = {
    icon: IconType;
    title: string;
};

const INTEGRATIONS: Integration[] = [
    {
        icon: FiZap,
        title: "Sema product actions",
    },
    {
        icon: FiLink2,
        title: "Third-party connectors",
    },
    {
        icon: FiCode,
        title: "Webhooks & APIs",
    },
];

export default function IntegrationsApisSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: titleRef, inView: titleIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.2);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes iaFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes iaFadeRight{
          from{
            opacity:0;
            transform:translateX(36px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .ia-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .ia-visible{
          animation:iaFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ia-hidden-right{
          opacity:0;
          transform:translateX(36px);
        }

        .ia-visible-right{
          animation:iaFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ia-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ia-image:hover{
          transform:translateY(-6px);
          box-shadow:0 26px 55px rgba(0,0,0,.30);
        }

        .ia-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            background-color .3s ease;
        }

        .ia-card:hover{
          transform:translateX(6px);
          border-color:rgba(79,91,213,.40);
          background:#1D2130;
        }

        .ia-icon{
          transition:transform .3s ease;
        }

        .ia-card:hover .ia-icon{
          transform:scale(1.08);
        }

        .ia-arrow{
          transition:transform .25s ease;
        }

        a:hover .ia-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .ia-hidden,
          .ia-hidden-right,
          .ia-visible,
          .ia-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

        }

      `}</style>

            <section className="bg-[#0D0F16] py-20 sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl">

                        <p
                            ref={badgeRef}
                            className={`ia-hidden ${badgeIn ? "ia-visible" : ""
                                } mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
                        >
                            Integrations and APIs
                        </p>

                        <h2
                            ref={titleRef}
                            style={{ animationDelay: ".08s" }}
                            className={`ia-hidden ${titleIn ? "ia-visible" : ""
                                } text-center text-[clamp(34px,5vw,54px)] font-bold leading-tight text-white`}
                        >
                            Sema actions, third-party tools,
                            <br />
                            webhooks, and custom connectors.
                        </h2>

                    </div>
                    {/* Content */}

                    <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.35fr_0.9fr]">

                        {/* Left Side */}

                        <div
                            ref={imageRef}
                            style={{ animationDelay: ".18s" }}
                            className={`ia-hidden ${imageIn ? "ia-visible" : ""
                                }`}
                        >
                            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171A22] p-5">

                                <Image
                                    src="/workflows/integrations-preview.png"
                                    alt="Integrations preview"
                                    width={1200}
                                    height={700}
                                    priority
                                    className="ia-image h-auto w-full rounded-2xl object-cover"
                                />

                            </div>

                            {/* CTA Links */}

                            <div className="mt-8 flex flex-wrap items-center gap-8">

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#8A94F8]"
                                >
                                    View Integrations

                                    <FiArrowRight className="ia-arrow h-4 w-4" />
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#8A94F8]"
                                >
                                    Developer Docs

                                    <FiArrowRight className="ia-arrow h-4 w-4" />
                                </a>

                            </div>

                        </div>

                        {/* Right Side */}

                        <div
                            ref={cardsRef}
                            className="flex flex-col gap-5"
                        >
                            {INTEGRATIONS.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <button
                                        key={item.title}
                                        type="button"
                                        style={{
                                            animationDelay: `${0.25 + index * 0.08}s`,
                                        }}
                                        className={`ia-card ia-hidden-right ${cardsIn ? "ia-visible-right" : ""
                                            } flex items-center justify-between rounded-2xl border border-white/10 bg-[#171A22] px-6 py-6 text-left`}
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="ia-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F5BD5]/15">

                                                <Icon className="h-5 w-5 text-[#8A94F8]" />

                                            </div>

                                            <span className="text-[16px] font-medium text-white">
                                                {item.title}
                                            </span>

                                        </div>

                                        <FiArrowRight className="h-5 w-5 text-[#8A94F8]" />

                                    </button>

                                );

                            })}
                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}