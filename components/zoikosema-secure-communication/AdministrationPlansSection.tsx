"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";

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

const TABLE_DATA = [
    {
        action: "Change access",
        owner: "Full",
        security: "Full",
        compliance: "View",
        auditor: "View",
        guest: "No",
    },
    {
        action: "Change retention",
        owner: "Full",
        security: "View",
        compliance: "Full",
        auditor: "View",
        guest: "No",
    },
    {
        action: "Place legal hold",
        owner: "Full",
        security: "View",
        compliance: "Full",
        auditor: "View",
        guest: "No",
    },
    {
        action: "Export evidence",
        owner: "Full",
        security: "Limited",
        compliance: "Full",
        auditor: "Permitted",
        guest: "No",
    },
    {
        action: "Invite guest",
        owner: "Full",
        security: "Full",
        compliance: "View",
        auditor: "View",
        guest: "No",
    },
];

const FEATURES = [
    {
        title: "Confidential Mode",
        description:
            "Business and Enterprise. Talk to sales.",
    },
    {
        title: "Retention policies",
        description:
            "Business+. Talk to sales to configure.",
    },
    {
        title: "Legal hold",
        description:
            "Enterprise, sales-assisted.",
    },
    {
        title: "Advanced DLP / SIEM",
        description:
            "Enterprise. Request architecture review.",
    },
];

export default function AdministrationPlansSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: tableRef, inView: tableIn } = useInView(0.1);

    const renderValue = (value: string) => {
        if (value === "Full" || value === "Permitted") {
            return (
                <span className="inline-flex items-center gap-1 font-medium text-green-600 dark:text-green-400">
                    <FiCheck className="h-3.5 w-3.5" />
                    {value}
                </span>
            );
        }

        return (
            <span className="text-gray-500 dark:text-gray-400">
                {value}
            </span>
        );
    };

    return (
        <>
            <style>{`
        @keyframes apFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes apScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .ap-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .ap-visible{
          animation:apFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ap-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .ap-visible-img{
          animation:apScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ap-image{
          transition:transform .45s ease, box-shadow .45s ease;
        }

        .ap-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.12);
        }

        .ap-card{
          transition:all .3s ease;
        }

        .ap-card:hover{
          transform:translateY(-5px);
          border-color:#4F5BD5;
          box-shadow:0 18px 42px rgba(79,91,213,.12);
        }

        @media(prefers-reduced-motion:reduce){
          .ap-hidden,
          .ap-visible,
          .ap-hidden-img,
          .ap-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }
        }
      `}</style>

            <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "ap-visible" : "ap-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Administration and Plans
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Named roles, so no single admin controls
                            every sensitive action.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-14 ${imageIn ? "ap-visible-img" : "ap-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">
                            <Image
                                src="/zoikosema-secure-communication/administration-plans.png"
                                alt="Administration & Plans"
                                width={1600}
                                height={900}
                                priority
                                className="ap-image h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                    {/* Permission Table */}

                    <div
                        ref={tableRef}
                        className={`mt-10 ${tableIn ? "ap-visible" : "ap-hidden"
                            }`}
                    >
                        <div className="overflow-x-auto rounded-[24px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">
                            <table className="min-w-[900px] w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-[#E8EAF5] dark:border-white/10">
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Action
                                        </th>

                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Owner
                                        </th>

                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Security Admin
                                        </th>

                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Compliance Admin
                                        </th>

                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Auditor
                                        </th>

                                        <th className="px-6 py-5 text-left text-sm font-semibold text-[#172046] dark:text-white">
                                            Guest
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {TABLE_DATA.map((row, index) => (
                                        <tr
                                            key={row.action}
                                            className={`border-b border-[#E8EAF5] last:border-none dark:border-white/10 ${tableIn ? "ap-visible" : "ap-hidden"
                                                }`}
                                            style={{
                                                animationDelay: `${0.1 + index * 0.05}s`,
                                            }}
                                        >
                                            <td className="px-6 py-5 text-sm font-semibold text-[#172046] dark:text-white">
                                                {row.action}
                                            </td>

                                            <td className="px-6 py-5 text-sm">
                                                {renderValue(row.owner)}
                                            </td>

                                            <td className="px-6 py-5 text-sm">
                                                {renderValue(row.security)}
                                            </td>

                                            <td className="px-6 py-5 text-sm">
                                                {renderValue(row.compliance)}
                                            </td>

                                            <td className="px-6 py-5 text-sm">
                                                {renderValue(row.auditor)}
                                            </td>

                                            <td className="px-6 py-5 text-sm">
                                                {renderValue(row.guest)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Feature Cards */}

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {FEATURES.map((item, index) => (
                            <div
                                key={item.title}
                                style={{
                                    animationDelay: `${0.35 + index * 0.08}s`,
                                }}
                                className={`ap-card ${tableIn ? "ap-visible" : "ap-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

        </>

    );
}