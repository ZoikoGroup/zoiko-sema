"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    FiShield,
    FiKey,
    FiClipboard,
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

type GovernanceItem = {
    icon: IconType;
    title: string;
    description: string;
    action: string;
};

const GOVERNANCE_ITEMS: GovernanceItem[] = [
    {
        icon: FiShield,
        title: "Workflow identity",
        description:
            "Every workflow has a named owner and run identity.",
        action: "Explore Admin Console",
    },
    {
        icon: FiKey,
        title: "Connector scopes",
        description:
            "Authorization scopes, secrets, and token expiry are explicit and revocable.",
        action: "Visit Trust Center",
    },
    {
        icon: FiClipboard,
        title: "Audit & retention",
        description:
            "Workflow changes, runs, and approvals are auditable where required.",
        action: "Read the AI Use Policy",
    },
];

export default function GovernanceConsoleSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
    const { ref: titleRef, inView: titleIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: listRef, inView: listIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes gcFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes gcFadeScale{
          from{
            opacity:0;
            transform:scale(.96);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .gc-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .gc-visible{
          animation:gcFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gc-hidden-img{
          opacity:0;
          transform:scale(.96);
        }

        .gc-visible-img{
          animation:gcFadeScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .gc-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .gc-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 55px rgba(0,0,0,.15);
        }

        .gc-row{
          transition:
            background-color .3s ease,
            transform .3s ease;
        }

        .gc-row:hover{
          transform:translateX(4px);
          background:rgba(79,91,213,.03);
        }

        .gc-arrow{
          transition:transform .25s ease;
        }

        .gc-row:hover .gc-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .gc-hidden,
          .gc-visible,
          .gc-hidden-img,
          .gc-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .gc-row:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div className="mx-auto max-w-4xl text-center">

                        <p
                            ref={badgeRef}
                            className={`gc-hidden ${badgeIn ? "gc-visible" : ""
                                } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
                        >
                            Governance and Admin Console
                        </p>

                        <h2
                            ref={titleRef}
                            style={{ animationDelay: ".08s" }}
                            className={`gc-hidden ${titleIn ? "gc-visible" : ""
                                } text-[clamp(34px,5vw,54px)] font-bold leading-tight text-[#172046] dark:text-white`}
                        >
                            Roles, scopes, secrets, audit,
                            <br />
                            and plan gates — all explicit.
                        </h2>

                    </div>
                    {/* Governance Preview */}

                    <div
                        ref={imageRef}
                        style={{ animationDelay: ".18s" }}
                        className={`gc-hidden-img ${imageIn ? "gc-visible-img" : ""
                            } mt-16`}
                    >
                        <div className="overflow-hidden rounded-[24px] border border-[#E7E8F7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/workflows/governance-console.png"
                                alt="Governance and Admin Console Preview"
                                width={1600}
                                height={900}
                                priority
                                className="gc-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Governance Rows */}

                    <div
                        ref={listRef}
                        className="mt-14 divide-y divide-[#E8EAF5] rounded-2xl border border-[#E8EAF5] bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#151233]"
                    >
                        {GOVERNANCE_ITEMS.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    style={{
                                        animationDelay: `${0.24 + index * 0.08}s`,
                                    }}
                                    className={`gc-row gc-hidden ${listIn ? "gc-visible" : ""
                                        } grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-[260px_1fr_auto]`}
                                >
                                    {/* Left */}

                                    <div className="flex items-center gap-4">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">

                                            <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />

                                        </div>

                                        <h3 className="text-[17px] font-semibold text-[#172046] dark:text-white">
                                            {item.title}
                                        </h3>

                                    </div>

                                    {/* Description */}

                                    <p className="text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>

                                    {/* Action */}

                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 justify-start md:justify-end text-sm font-semibold text-[#4F5BD5] transition-colors hover:text-[#3945D8] dark:text-[#8A94F8] dark:hover:text-white"
                                    >
                                        {item.action}

                                        <FiArrowRight className="gc-arrow h-4 w-4" />

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