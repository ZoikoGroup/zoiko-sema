"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiVideo,
    FiMic,
    FiWifi,
    FiShield,
    FiClock,
    FiFileText,
    FiCheckCircle,
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

type HealthItem = {
    icon: IconType;
    title: string;
    value: string;
    color: string;
};

type GovernanceItem = {
    icon: IconType;
    title: string;
};

const HEALTH_ITEMS: HealthItem[] = [
    {
        icon: FiVideo,
        title: "Camera Stream",
        value: "EXCELLENT",
        color: "#16A34A",
    },
    {
        icon: FiMic,
        title: "Microphone Fidelity",
        value: "100% CLEAR",
        color: "#16A34A",
    },
    {
        icon: FiWifi,
        title: "Network Latency",
        value: "14ms",
        color: "#172046",
    },
];

const GOVERNANCE_ITEMS: GovernanceItem[] = [
    {
        icon: FiShield,
        title: "E2E Encrypted",
    },
    {
        icon: FiClock,
        title: "Auto-Record On",
    },
    {
        icon: FiFileText,
        title: "AI Summary On",
    },
    {
        icon: FiCheckCircle,
        title: "SLA Compliant",
    },
];

export default function MeetingHealthSection() {
    const { ref, inView } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes mhFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .mh-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .mh-visible{
          animation:mhFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .mh-panel{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .mh-panel:hover{
          transform:translateY(-5px);
          box-shadow:0 20px 45px rgba(15,23,42,.08);
        }

        .mh-item{
          transition:
            background-color .25s ease,
            transform .25s ease;
        }

        .mh-item:hover{
          transform:translateX(4px);
          background:#F8F8FD;
        }

        .dark .mh-item:hover{
          background:#1C1A36;
        }

        .mh-card{
          transition:
            transform .25s ease,
            border-color .25s ease;
        }

        .mh-card:hover{
          transform:translateY(-4px);
          border-color:#4F5BD5;
        }

        @media(prefers-reduced-motion:reduce){

          .mh-hidden,
          .mh-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .mh-panel:hover,
          .mh-item:hover,
          .mh-card:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-14">

                <div
                    ref={ref}
                    className={`mx-auto max-w-7xl px-6 sm:px-8 ${inView ? "mh-visible" : "mh-hidden"
                        }`}
                >

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                        {/* ===================================================== */}
                        {/* LEFT PANEL */}
                        {/* ===================================================== */}

                        <div className="mh-panel rounded-3xl border border-[#E8EAF5] bg-white p-7 dark:border-white/10 dark:bg-[#151233]">

                            <div className="mb-6 flex items-center justify-between">

                                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                    Real-Time Health
                                </h2>

                                <button className="text-sm font-semibold text-[#4F5BD5]">
                                    Run Full Test
                                </button>

                            </div>

                            {/* Health Status */}

                            <div className="space-y-4">
                                {HEALTH_ITEMS.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="mh-item flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between rounded-2xl border border-[#E8EAF5] px-5 py-4 dark:border-white/10"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                                                    <Icon
                                                        className="h-5 w-5"
                                                        style={{ color: item.color }}
                                                    />
                                                </div>

                                                <span className="text-[15px] font-medium text-[#172046] dark:text-white">
                                                    {item.title}
                                                </span>
                                            </div>

                                            <span
                                                className="text-[13px] font-semibold"
                                                style={{ color: item.color }}
                                            >
                                                {item.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        {/* ===================================================== */}
                        {/* RIGHT PANEL */}
                        {/* ===================================================== */}

                        <div className="mh-panel rounded-3xl border border-[#E8EAF5] bg-white p-5 dark:border-white/10 dark:bg-[#151233]">

                            <div className="mb-6">
                                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                    Governance &amp; Compliance
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                {GOVERNANCE_ITEMS.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="mh-card flex flex-col items-center justify-center rounded-2xl border border-[#E8EAF5] bg-[#FAFBFF] px-4 py-7 text-center dark:border-white/10 dark:bg-[#1A1735]"
                                        >
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF1FF] dark:bg-[#4F5BD5]/15">
                                                <Icon className="h-5 w-5 text-[#4F5BD5] dark:text-[#8A94F8]" />
                                            </div>

                                            <p className="text-[14px] font-medium text-[#172046] dark:text-white">
                                                {item.title}
                                            </p>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}