"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiCircle, FiPlus } from "react-icons/fi";
import Link from "next/link";

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

const INTEGRATIONS = [
    {
        color: "text-red-500",
        title: "Property systems (NOT replaced)",
        items: [
            "Property Management System (PMS) — reservation source of truth",
            "Central Reservation System (CRS)",
            "Revenue Management platform",
            "Guest loyalty / CRM",
        ],
        footer:
            "Sema does not replace these. It receives masked coordination context only.",
    },
    {
        color: "text-blue-500",
        title: "Workforce & scheduling",
        items: [
            "Staff scheduling platforms (shift import)",
            "Payroll and HR identity sync only",
            "Training and compliance systems",
        ],
        footer:
            "Read: shift schedule. Write: none. Identity sync via SCIM.",
    },
    {
        color: "text-violet-500",
        title: "Event & venue management",
        items: [
            "Event management software (event-level sync)",
            "Catering and F&B ordering platforms",
            "AV and room-setup systems",
        ],
        footer:
            "Event name and brief reference imported. No guest data.",
    },
    {
        color: "text-blue-500",
        title: "Communication channels",
        items: [
            "In-room guest messaging platform",
            "WhatsApp / SMS gateway (inbound only)",
            "Email intake for group coordinators",
        ],
        footer:
            "Inbound only. Sema coordinates staff response — guest messages stay in source system.",
    },
    {
        color: "text-emerald-500",
        title: "Reporting & analytics",
        items: [
            "Business intelligence / reporting platform",
            "Guest satisfaction (NPS, reviews)",
            "Operational KPI dashboards",
        ],
        footer:
            "Sema exports coordinate metrics. Guest sentiment stays in dedicated tools.",
    },
];

export default function IntegrationsSection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes intFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .int-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .int-visible{
          animation:intFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .int-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .int-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          box-shadow:0 22px 50px rgba(79,91,213,.12);
        }

        .preview-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .preview-image:hover{
          transform:translateY(-6px);
          box-shadow:0 30px 70px rgba(0,0,0,.18);
        }
      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-3xl text-center ${inView ? "int-visible" : "int-hidden"
                            }`}
                    >
                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Integrations
                        </span>

                        <h2 className="mt-6 text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Sema coordinates.
                            Your systems stay the source of truth.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-gray-500 dark:text-gray-400">
                            Each integration has a defined scope, direction,
                            and data boundary. Nothing is a silent sync.
                        </p>

                    </div>
                    {/* Integration Cards */}

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {/* Standard Cards */}

                        {INTEGRATIONS.map((card, index) => (
                            <div
                                key={card.title}
                                style={{
                                    animationDelay: `${0.1 + index * 0.08}s`,
                                }}
                                className={`int-card ${inView ? "int-visible" : "int-hidden"
                                    } flex min-h-[290px] flex-col rounded-[24px] border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                            >
                                {/* Header */}

                                <div className="flex items-center gap-3">

                                    <FiCircle
                                        className={`h-3.5 w-3.5 fill-current ${card.color}`}
                                    />

                                    <h3 className="text-[17px] font-semibold text-[#172046] dark:text-white">
                                        {card.title}
                                    </h3>

                                </div>

                                {/* Bullet List */}

                                <ul className="mt-6 space-y-3">

                                    {card.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-[14px] leading-6 text-gray-500 dark:text-gray-400"
                                        >
                                            <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-[#5B67E8]" />

                                            <span>{item}</span>
                                        </li>
                                    ))}

                                </ul>

                                {/* Footer */}

                                <div className="mt-auto pt-6">

                                    <div className="rounded-xl border border-[#EEF1F8] bg-[#FAFBFE] p-4 dark:border-white/10 dark:bg-[#20254B]">

                                        <p className="text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                                            {card.footer}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                        {/* CTA Card */}

                        <div
                            style={{
                                animationDelay: ".55s",
                            }}
                            className={`int-card ${inView ? "int-visible" : "int-hidden"
                                } flex min-h-[290px] flex-col items-center justify-center rounded-[24px] border border-[#E8EAF5] bg-[#F5F7FF] p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1FF] dark:bg-[#22264A]">

                                <FiPlus className="h-8 w-8 text-[#5B67E8]" />

                            </div>

                            <h3 className="mt-8 text-[22px] font-semibold text-[#172046] dark:text-white">
                                Custom integration
                            </h3>

                            <p className="mt-5 max-w-xs text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                                API and webhook support for property-specific systems.
                                All scopes require explicit admin authorization.
                            </p>
                            <Link href="/contact">
                                <button className="mt-8 rounded-full bg-[#4F5BD5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E4BD1]">
                                    Talk to our team
                                </button>
                            </Link>
                        </div>

                    </div>

                    {/* Preview Image */}

                    <div
                        className={`mt-10 ${inView ? "int-visible" : "int-hidden"
                            }`}
                        style={{
                            animationDelay: ".7s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/usecase-travel-hospitality/integrations-preview.png"
                                alt="Integrations Preview"
                                width={1600}
                                height={900}
                                priority
                                className="preview-image h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}