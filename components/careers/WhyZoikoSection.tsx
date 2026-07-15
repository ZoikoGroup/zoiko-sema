"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiThumbsUp,
    FiBarChart2,
    FiGrid,
    FiUsers,
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

type Feature = {
    icon: IconType;
    title: string;
    description: string;
};

const FEATURES: Feature[] = [
    {
        icon: FiThumbsUp,
        title: "A clear mission",
        description:
            "Help teams communicate with context, governance, and trusted, human-reviewed AI workflows.",
    },
    {
        icon: FiBarChart2,
        title: "A real problem",
        description:
            "Business communication often loses decisions, ownership, and administrative risk. We fix that.",
    },
    {
        icon: FiGrid,
        title: "Substantial product",
        description:
            "Messaging, meetings, AI summaries, admin console, secure spaces, and enterprise deployment.",
    },
    {
        icon: FiUsers,
        title: "Meaningful impact",
        description:
            "Support teams that need clarity, continuity, and accountable communication at work.",
    },
];

export default function WhyZoikoSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: headingRef, inView: headingIn } = useInView(0.25);
    const { ref: subRef, inView: subIn } = useInView(0.25);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes whyFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .why-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .why-visible{
          animation:whyFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .why-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .why-card:hover{
          transform:translateY(-8px);
          border-color:rgba(79,91,213,.30);
          box-shadow:0 20px 45px rgba(79,91,213,.12);
        }

        .why-icon{
          transition:transform .3s ease;
        }

        .why-card:hover .why-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){

          .why-hidden,
          .why-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .why-card:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            ref={badgeRef}
                            className={`why-hidden ${badgeIn ? "why-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Why Zoiko Sema
                        </p>

                        <h2
                            ref={headingRef}
                            style={{ animationDelay: ".08s" }}
                            className={`why-hidden ${headingIn ? "why-visible" : ""
                                } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            Work that helps teams communicate with context
                        </h2>

                        <p
                            ref={subRef}
                            style={{ animationDelay: ".16s" }}
                            className={`why-hidden ${subIn ? "why-visible" : ""
                                } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
                        >
                            Business communication often lacks context, loses decisions,
                            and fragments follow-ups. Zoiko Sema keeps it connected,
                            governed, and actionable — and you'd help build it.
                        </p>

                    </div>
                    {/* Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.08}s`,
                                    }}
                                    className={`why-card why-hidden ${cardsIn ? "why-visible" : ""
                                        } flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                                >
                                    {/* Icon */}

                                    <div className="why-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                                        <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-6 text-[18px] font-semibold leading-tight text-[#172046] dark:text-white">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </>
    );
}