"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiSearch,
    FiFileText,
    FiPhoneCall,
    FiVideo,
    FiClipboard,
    FiCheckSquare,
    FiAward,
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

type Step = {
    id: string;
    title: string;
    description: string;
    icon: IconType;
};

const STEPS: Step[] = [
    {
        id: "01",
        title: "Discover",
        description:
            "Role page, mission context, team information, and FAQ.",
        icon: FiSearch,
    },
    {
        id: "02",
        title: "Apply",
        description:
            "Application form, resume, portfolio, and optional referral.",
        icon: FiFileText,
    },
    {
        id: "03",
        title: "Recruiter review",
        description:
            "Confirmation and clear next-step guidance.",
        icon: FiPhoneCall,
    },
    {
        id: "04",
        title: "Interview",
        description:
            "Stages, prep guidance, and accessibility support.",
        icon: FiVideo,
    },
    {
        id: "05",
        title: "Work sample",
        description:
            "Only if the role requires it, with clear expectations.",
        icon: FiClipboard,
    },
    {
        id: "06",
        title: "Decision",
        description:
            "Offer, decline, hold, or talent-community route.",
        icon: FiCheckSquare,
    },
    {
        id: "07",
        title: "Onboard",
        description:
            "First-week readiness, tools, and secure setup.",
        icon: FiAward,
    },
];

export default function HiringProcessSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: headingRef, inView: headingIn } = useInView(0.25);
    const { ref: subRef, inView: subIn } = useInView(0.25);
    const { ref: timelineRef, inView: timelineIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes hpFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .hp-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .hp-visible{
          animation:hpFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hp-step{
          transition:
            transform .35s ease,
            opacity .35s ease;
        }

        .hp-step:hover{
          transform:translateY(-6px);
        }

        .hp-icon{
          transition:
            transform .3s ease,
            background-color .3s ease;
        }

        .hp-step:hover .hp-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){

          .hp-hidden,
          .hp-visible{
            opacity:1 !important;
            transform:none !important;
            animation:none !important;
          }

          .hp-step:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            ref={badgeRef}
                            className={`hp-hidden ${badgeIn ? "hp-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Hiring Process
                        </p>

                        <h2
                            ref={headingRef}
                            style={{ animationDelay: ".08s" }}
                            className={`hp-hidden ${headingIn ? "hp-visible" : ""
                                } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            A clear, honest candidate journey
                        </h2>

                        <p
                            ref={subRef}
                            style={{ animationDelay: ".16s" }}
                            className={`hp-hidden ${subIn ? "hp-visible" : ""
                                } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
                        >
                            Know what to expect at every stage. Exact steps per role are
                            confirmed by your recruiting team.
                        </p>

                    </div>

                    {/* Timeline */}

                    <div
                        ref={timelineRef}
                        className={`hp-hidden ${timelineIn ? "hp-visible" : ""
                            } relative mt-16`}
                        style={{ animationDelay: ".22s" }}
                    >
                        {/* Desktop Connector */}

                        <div className="absolute left-[7%] right-[7%] top-6 hidden h-px bg-[#C9CCFF] dark:bg-[#4F5BD5]/30 lg:block" />

                        {/* Timeline */}

                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-6">

                            {STEPS.map((step, index) => {

                                const Icon = step.icon;

                                return (

                                    <div
                                        key={step.id}
                                        style={{
                                            animationDelay: `${0.2 + index * 0.08}s`,
                                        }}
                                        className={`hp-step hp-hidden ${timelineIn ? "hp-visible" : ""
                                            } relative flex flex-col items-center text-center`}
                                    >

                                        {/* Mobile Vertical Line */}

                                        {index !== STEPS.length - 1 && (
                                            <div className="absolute left-6 top-14 h-[70px] w-px bg-[#C9CCFF] dark:bg-[#4F5BD5]/30 lg:hidden" />
                                        )}

                                        {/* Icon */}

                                        <div className="hp-icon relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FF] text-[#4F5BD5] shadow-sm dark:bg-[#4F5BD5]/15 dark:text-[#8A94F8]">

                                            <Icon className="h-5 w-5" />

                                        </div>

                                        {/* Number */}

                                        <span className="mt-4 text-[11px] font-bold tracking-[0.18em] text-[#5B63F6]">
                                            {step.id}
                                        </span>

                                        {/* Title */}

                                        <h3 className="mt-2 text-[17px] font-semibold text-[#172046] dark:text-white">
                                            {step.title}
                                        </h3>

                                        {/* Description */}

                                        <p className="mt-3 max-w-[180px] text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                                            {step.description}
                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}