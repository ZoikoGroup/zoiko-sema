"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiCheckCircle,
    FiGitBranch,
    FiUserCheck,
    FiPlay,
    FiShield,
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
    number: string;
    title: string;
    description: string;
    icon: IconType;
    color: string;
    bg: string;
};

const STEPS: Step[] = [
    {
        number: "1",
        title: "Approved event",
        description:
            "The record starts the workflow with visible scope and owner.",
        icon: FiCheckCircle,
        color: "#3B82F6",
        bg: "#DBEAFE",
    },
    {
        number: "2",
        title: "Evaluate rules",
        description:
            "Conditions branch by path explicitly.",
        icon: FiGitBranch,
        color: "#2563EB",
        bg: "#DBEAFE",
    },
    {
        number: "3",
        title: "Human check",
        description:
            "Pause for approval when policy requires.",
        icon: FiUserCheck,
        color: "#16A34A",
        bg: "#DCFCE7",
    },
    {
        number: "4",
        title: "Authorized action",
        description:
            "Execute scoped, approved connector actions.",
        icon: FiPlay,
        color: "#2563EB",
        bg: "#DBEAFE",
    },
    {
        number: "5",
        title: "Verify outcome",
        description:
            "Confirm success and record the evidence.",
        icon: FiShield,
        color: "#6B7280",
        bg: "#F3F4F6",
    },
];

export default function WorkflowProcessSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: titleRef, inView: titleIn } = useInView(0.25);
    const { ref: timelineRef, inView: timelineIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes wpFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .wp-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .wp-visible{
          animation:wpFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .wp-step{
          transition:
            transform .35s ease,
            opacity .35s ease;
        }

        .wp-step:hover{
          transform:translateY(-6px);
        }

        .wp-circle{
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .wp-step:hover .wp-circle{
          transform:scale(1.08);
          box-shadow:0 10px 25px rgba(79,91,213,.20);
        }

        @media(prefers-reduced-motion:reduce){

          .wp-hidden,
          .wp-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .wp-step:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-white py-20 dark:bg-[#0D0B24] sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-4xl text-center">

                        <p
                            ref={badgeRef}
                            className={`wp-hidden ${badgeIn ? "wp-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            How a Workflow Runs
                        </p>

                        <h2
                            ref={titleRef}
                            style={{ animationDelay: ".08s" }}
                            className={`wp-hidden ${titleIn ? "wp-visible" : ""
                                } text-[clamp(34px,5vw,52px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            Event, rules, human check,
                            <br />
                            action, verification.
                        </h2>

                    </div>

                    {/* Workflow Timeline */}

                    <div
                        ref={timelineRef}
                        style={{ animationDelay: ".18s" }}
                        className={`wp-hidden ${timelineIn ? "wp-visible" : ""
                            } relative mt-16`}
                    >
                        {/* Desktop Connector */}

                        <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-[#D8DEFF] dark:bg-[#4F5BD5]/30 lg:block" />

                        {/* Timeline */}

                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                            {STEPS.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <div
                                        key={step.number}
                                        style={{
                                            animationDelay: `${0.22 + index * 0.08}s`,
                                        }}
                                        className={`wp-step wp-hidden ${timelineIn ? "wp-visible" : ""
                                            } relative flex flex-col items-center text-center`}
                                    >
                                        {/* Mobile Connector */}

                                        {index !== STEPS.length - 1 && (
                                            <div className="absolute left-6 top-16 h-[72px] w-px bg-[#D8DEFF] dark:bg-[#4F5BD5]/30 lg:hidden" />
                                        )}

                                        {/* Circle */}

                                        <div
                                            className="wp-circle relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white shadow-md dark:border-white/10"
                                            style={{
                                                backgroundColor: step.bg,
                                            }}
                                        >
                                            {/* <Icon
                                                className="h-6 w-6"
                                                style={{
                                                    color: step.color,
                                                }}
                                            /> */}
                                            <span
                                             className="h-6 w-6"
                                                style={{
                                                    color: step.color,
                                                }}>
                                                {step.number}
                                            </span>

                                            {/* Number */}
{/* 
                                            <span
                                                className="absolute -bottom-2 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white shadow"
                                                style={{
                                                    backgroundColor: step.color,
                                                }}
                                            >
                                                {step.number}
                                            </span> */}
                                        </div>

                                        {/* Title */}

                                        <h3 className="mt-8 text-[18px] font-semibold text-[#172046] dark:text-white">
                                            {step.title}
                                        </h3>

                                        {/* Description */}

                                        <p className="mt-3 max-w-[220px] text-[14px] leading-7 text-gray-500 dark:text-gray-400">
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