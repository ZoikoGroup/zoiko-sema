"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiGlobe,
    FiDollarSign,
    FiHeart,
    FiBookOpen,
    FiMonitor,
    FiBriefcase,
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

type Benefit = {
    icon: IconType;
    title: string;
    description: string;
    tag: string;
};

const BENEFITS: Benefit[] = [
    {
        icon: FiGlobe,
        title: "Work model",
        description:
            "Remote, hybrid, or office expectations by role and region.",
        tag: "HR-approved",
    },
    {
        icon: FiDollarSign,
        title: "Compensation approach",
        description:
            "Pay ranges, equity, and transparency details where applicable.",
        tag: "HR/legal-approved",
    },
    {
        icon: FiHeart,
        title: "Health & wellness",
        description:
            "Health benefits, leave, and support programs where offered.",
        tag: "HR-approved",
    },
    {
        icon: FiBookOpen,
        title: "Learning & growth",
        description:
            "Training, mentorship, and career-path support where available.",
        tag: "HR-approved",
    },
    {
        icon: FiMonitor,
        title: "Tools & setup",
        description:
            "Hardware, software, and secure home-office setup where applicable.",
        tag: "People/IT-approved",
    },
    {
        icon: FiBriefcase,
        title: "Accessibility & accommodations",
        description:
            "Request support during hiring — handled confidentially.",
        tag: "HR/legal-approved",
    },
];

export default function BenefitsSupportSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: headingRef, inView: headingIn } = useInView(0.25);
    const { ref: subRef, inView: subIn } = useInView(0.25);
    const { ref: gridRef, inView: gridIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes bsFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .bs-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .bs-visible{
          animation:bsFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .bs-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .bs-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.28);
          box-shadow:0 20px 45px rgba(79,91,213,.10);
        }

        .bs-icon{
          transition:transform .3s ease;
        }

        .bs-card:hover .bs-icon{
          transform:scale(1.08);
        }

        @media(prefers-reduced-motion:reduce){

          .bs-hidden,
          .bs-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .bs-card:hover{
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
                            className={`bs-hidden ${badgeIn ? "bs-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Benefits & Support
                        </p>

                        <h2
                            ref={headingRef}
                            style={{ animationDelay: ".08s" }}
                            className={`bs-hidden ${headingIn ? "bs-visible" : ""
                                } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            Candidate care, confirmed by our People team
                        </h2>

                        <p
                            ref={subRef}
                            style={{ animationDelay: ".16s" }}
                            className={`bs-hidden ${subIn ? "bs-visible" : ""
                                } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
                        >
                            We show benefits and work-model details only once they're
                            confirmed — placeholders below mark what will appear.
                        </p>

                    </div>
                    {/* Benefits Grid */}

                    <div
                        ref={gridRef}
                        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {BENEFITS.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.08}s`,
                                    }}
                                    className={`bs-card bs-hidden ${gridIn ? "bs-visible" : ""
                                        } flex h-full flex-col rounded-2xl border border-[#E8E9F7] bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                                >
                                    {/* Icon */}

                                    <div className="bs-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                                        <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-6 text-[18px] font-semibold leading-tight text-[#172046] dark:text-white">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                        {benefit.description}
                                    </p>

                                    {/* Status Badge */}

                                    <div className="mt-6">
                                        <span className="inline-flex items-center rounded-full bg-[#F2F3FC] px-3 py-1 text-[11px] font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                                            {benefit.tag}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </section>

        </>

    );

}