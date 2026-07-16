"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiUserPlus,
    FiCalendar,
    FiFileText,
    FiUnlock,
    FiAlertTriangle,
    FiTruck,
    FiArrowRight,
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

type Template = {
    icon: IconType;
    label: string;
    title: string;
    description: string;
    action: string;
};

const TEMPLATES: Template[] = [
    {
        icon: FiUserPlus,
        label: "Customer Onboarding",
        title: "Guide new clients from kick-off to first value with owned steps.",
        description:
            "Create a structured onboarding workflow with approvals, assigned owners, and milestone tracking.",
        action: "Start from template",
    },
    {
        icon: FiCalendar,
        label: "Meeting Follow-up",
        title: "Turn meeting decisions into tracked actions automatically.",
        description:
            "Convert meeting outcomes into assigned follow-ups with reminders and progress visibility.",
        action: "Start from template",
    },
    {
        icon: FiFileText,
        label: "Document Approval",
        title: "Route drafts through reviewers with clear sign-off history.",
        description:
            "Track document approvals with version history, comments, and reviewer accountability.",
        action: "Start from template",
    },
    {
        icon: FiUnlock,
        label: "Guest Access Request",
        title: "Approve and provision external access with an audit trail.",
        description:
            "Manage guest requests with approval routing, expiry dates, and permission controls.",
        action: "Start from template",
    },
    {
        icon: FiAlertTriangle,
        label: "Incident Escalation",
        title: "Notify the right owners the moment a risk is flagged.",
        description:
            "Escalate operational issues automatically while maintaining review checkpoints.",
        action: "Start from template",
    },
    {
        icon: FiTruck,
        label: "Client Delivery",
        title: "Coordinate handoffs across teams for on-time delivery.",
        description:
            "Connect implementation, approvals, and customer communication in one workflow.",
        action: "Start from template",
    },
];

export default function TemplateGallerySection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: headingRef, inView: headingIn } = useInView(0.25);
    const { ref: gridRef, inView: gridIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes tgFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .tg-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .tg-visible{
          animation:tgFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .tg-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .tg-card:hover{
          transform:translateY(-6px);
          border-color:rgba(79,91,213,.25);
          box-shadow:0 18px 42px rgba(79,91,213,.10);
        }

        .tg-icon{
          transition:transform .3s ease;
        }

        .tg-card:hover .tg-icon{
          transform:scale(1.08);
        }

        .tg-arrow{
          transition:transform .25s ease;
        }

        .tg-card:hover .tg-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .tg-hidden,
          .tg-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .tg-card:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-white py-20 dark:bg-[#0D0B24] sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            ref={badgeRef}
                            className={`tg-hidden ${badgeIn ? "tg-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Template Gallery
                        </p>

                        <h2
                            ref={headingRef}
                            style={{ animationDelay: ".08s" }}
                            className={`tg-hidden ${headingIn ? "tg-visible" : ""
                                } text-[clamp(32px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            Start from a concrete use case,
                            <br />
                            not a blank canvas.
                        </h2>

                    </div>
                    {/* Template Grid */}

                    <div
                        ref={gridRef}
                        className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {TEMPLATES.map((template, index) => {
                            const Icon = template.icon;

                            return (
                                <div
                                    key={template.label}
                                    style={{
                                        animationDelay: `${0.15 + index * 0.08}s`,
                                    }}
                                    className={`tg-card tg-hidden ${gridIn ? "tg-visible" : ""
                                        } flex h-full flex-col rounded-2xl border border-[#E7E8F7] bg-white p-7 dark:border-white/10 dark:bg-[#151233]`}
                                >
                                    {/* Icon */}

                                    <div className="tg-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                                        <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                                    </div>

                                    {/* Label */}

                                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7C7F99] dark:text-gray-400">
                                        {template.label}
                                    </p>

                                    {/* Title */}

                                    <h3 className="mt-3 text-[20px] font-semibold leading-snug text-[#172046] dark:text-white">
                                        {template.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 flex-1 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                        {template.description}
                                    </p>

                                    {/* CTA */}

                                    <button
                                        type="button"
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] transition-colors hover:text-[#3945D8] dark:text-[#8A94F8] dark:hover:text-white"
                                    >
                                        {template.action}

                                        <FiArrowRight className="tg-arrow h-4 w-4" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </section>

        </>

    );

}