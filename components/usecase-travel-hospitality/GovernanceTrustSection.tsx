"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
    FiChevronRight,
    FiDatabase,
    FiGlobe,
    FiHome,
    FiUsers,
} from "react-icons/fi";

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

const LEVELS = [
    {
        icon: FiDatabase,
        level: "LEVEL 1",
        title: "Organization / Group",
        dark: true,
        description:
            "Master policy: identity, AI eligibility, data retention, audit scope, integration permissions.",
        bullets: [
            "SSO and MFA required group-wide",
            "AI eligible properties only",
            "Retention: 90-day minimum across all",
            "Audit: exported monthly",
        ],
    },
    {
        icon: FiGlobe,
        level: "LEVEL 2",
        title: "Brand / Region",
        dark: false,
        description:
            "Brand-level norms: service standards, escalation paths, guest privacy language requirements.",
        bullets: [
            "Guest reference masking enforced",
            "Cross-property visibility defined",
            "Escalation: brand GM required for P1",
            "Reporting: brand dashboard",
        ],
    },
    {
        icon: FiHome,
        level: "LEVEL 3",
        title: "Property",
        dark: false,
        description:
            "Property defaults: department workspaces, shift handoff schedule, local integrations.",
        bullets: [
            "Shift timing: property-specific",
            "Vendor guest access scoped",
            "Event workspace: per property GM",
            "Local integration: PMS connector",
        ],
    },
    {
        icon: FiUsers,
        level: "LEVEL 4",
        title: "Department",
        dark: false,
        description:
            "Department workspace settings: member roles, task templates, permissions, SLA targets.",
        bullets: [
            "Members: role-assigned by property admin",
            "Channel policy inherited",
            "Task templates: department-owned",
            "AI: department head approves workspace",
        ],
    },
];

export default function GovernanceTrustSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes gtFadeUp{
          from{
            opacity:0;
            transform:translateY(32px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .gt-hidden{
            opacity:0;
            transform:translateY(32px);
        }

        .gt-visible{
            animation:gtFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gt-card{
            transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .gt-card:hover{
            transform:translateY(-8px);
            box-shadow:0 24px 50px rgba(79,91,213,.12);
        }

        .gt-arrow{
            transition:transform .3s ease;
        }

        .gt-card:hover + .gt-arrow{
            transform:translateX(4px);
        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-3xl text-center ${inView ? "gt-visible" : "gt-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Governance & Trust
                        </span>

                        <h2 className="mt-6 text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Policy flows from group to department.
                            Always.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-gray-500 dark:text-gray-400">
                            Governance is inherited, not repeated. Property and department
                            admins configure within the bounds their group sets — never
                            outside them.
                        </p>

                    </div>

                    {/* Governance Levels */}

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-4 md:gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">

                            {LEVELS.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Fragment key={item.level}>

                                        {/* Card */}

                                        <div
                                            style={{
                                                animationDelay: `${0.1 + index * 0.08}s`,
                                            }}
                                            className={`gt-card ${inView ? "gt-visible" : "gt-hidden"
                                                } rounded-[28px] border p-5 ${item.dark
                                                    ? "border-[#2B316A] bg-[#161B3D]"
                                                    : "border-[#E5E7F2] bg-white dark:border-white/10 dark:bg-[#171A35]"
                                                }`}
                                        >
                                            {/* Icon */}

                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.dark
                                                        ? "bg-[#2B316A]"
                                                        : "bg-[#EEF1FF] dark:bg-[#22264A]"
                                                    }`}
                                            >
                                                <Icon
                                                    className={`h-6 w-6 ${item.dark
                                                            ? "text-[#8C96FF]"
                                                            : "text-[#5B67E8]"
                                                        }`}
                                                />
                                            </div>

                                            {/* Level */}

                                            <p
                                                className={`mt-5 text-[11px] font-bold uppercase tracking-[0.18em] ${item.dark
                                                        ? "text-[#8C96FF]"
                                                        : "text-[#5B67E8]"
                                                    }`}
                                            >
                                                {item.level}
                                            </p>

                                            {/* Title */}

                                            <h3
                                                className={`mt-2 text-[22px] font-semibold leading-tight ${item.dark
                                                        ? "text-white"
                                                        : "text-[#172046] dark:text-white"
                                                    }`}
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description */}

                                            <p
                                                className={`mt-3 text-[14px] leading-7 ${item.dark
                                                        ? "text-gray-300"
                                                        : "text-gray-500 dark:text-gray-400"
                                                    }`}
                                            >
                                                {item.description}
                                            </p>

                                            {/* Bullets */}

                                            <ul className="mt-6 space-y-4">
                                                {item.bullets.map((bullet) => (
                                                    <li
                                                        key={bullet}
                                                        className={`flex items-start gap-3 text-[14px] leading-6 ${item.dark
                                                                ? "text-gray-300"
                                                                : "text-gray-500 dark:text-gray-400"
                                                            }`}
                                                    >
                                                        <span
                                                            className={`mt-1 h-2 w-2 rounded-full ${item.dark
                                                                    ? "bg-[#7C86F0]"
                                                                    : "bg-[#5B67E8]"
                                                                }`}
                                                        />

                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Desktop Arrow */}

                                        {index !== LEVELS.length - 1 && (
                                            <div className="gt-arrow hidden items-center justify-center lg:flex">
                                                <FiChevronRight className="h-8 w-8 text-[#B5BCF8]" />
                                            </div>
                                        )}
                                    </Fragment>
                                );
                            })}

                        </div>
                    </div>

                </div>

            </section>

        </>

    );
}