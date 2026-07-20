"use client";

import { useEffect, useRef, useState } from "react";
import {
    FiBriefcase,
    FiGlobe,
    FiShield,
} from "react-icons/fi";
import Link from "next/link";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const OPTIONS = [
    {
        icon: FiBriefcase,
        title: "Single property",
        description:
            "Create workspace → department channels → shift handoff template → first handoff.",
        button: "Start free",
        link: "/start-free",
    },
    {
        icon: FiGlobe,
        title: "Hotel group / brand",
        description:
            "Multi-property hub, brand policy, cross-property visibility, and governance dashboard.",
        button: "Get a demo",
        link: "/get-a-demo",
    },
    {
        icon: FiShield,
        title: "Enterprise chain",
        description:
            "Custom identity, legal hold, audit exports, PMS/CRS integration scope, and deployment support.",
        button: "Talk to sales",
        link: "/contact-sales",
    },
];

const TAGS = [
    "Multi-property coordination",
    "Shift-aware handoffs",
    "Privacy-first guest service",
    "Governed disruption response",
    "No staff surveillance",
    "No PMS replacement",
];

export default function TravelHospitalityCTASection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes ctaFadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .cta-hidden{
          opacity:0;
          transform:translateY(35px);
        }

        .cta-visible{
          animation:ctaFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cta-card{
          transition:
          transform .35s ease,
          border-color .35s ease,
          box-shadow .35s ease,
          background .35s ease;
        }

        .cta-card:hover{
          transform:translateY(-8px);
          border-color:#4F5BD5;
          background:#1C2145;
          box-shadow:0 25px 60px rgba(79,91,213,.18);
        }

        .cta-btn{
          transition:all .3s ease;
        }

        .cta-btn:hover{
          transform:translateY(-2px);
        }

        .tag-pill{
          transition:all .3s ease;
        }

        .tag-pill:hover{
          background:#202653;
          border-color:#4F5BD5;
        }
      `}</style>

            <section className="bg-[#11142D] py-8 sm:py-10 lg:py-12">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "cta-visible" : "cta-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/25 bg-[#4F5BD5]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Get Started
                        </span>

                        <h2 className="mt-8 text-[clamp(30px,5vw,44px)] font-bold leading-tight text-white">
                            Every shift connected.
                            <br />
                            Every guest handoff governed.
                            <br />
                            <span className="text-[#4F5BD5]">
                                Every property in one hub.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-gray-400">
                            Choose the route that matches your property type.
                        </p>

                    </div>
                    {/* CTA Cards */}

                    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

                        {OPTIONS.map((option, index) => {
                            const Icon = option.icon;

                            return (
                                <div
                                    key={option.title}
                                    style={{
                                        animationDelay: `${0.12 + index * 0.08}s`,
                                    }}
                                    className={`cta-card ${inView ? "cta-visible" : "cta-hidden"
                                        } flex min-h-[310px] flex-col rounded-[28px] border border-white/10 bg-[#181C3C] p-4`}
                                >
                                    {/* Icon */}

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202653]">

                                        <Icon className="h-6 w-6 text-[#7C86F0]" />

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 text-[24px] font-semibold text-white">
                                        {option.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-5 flex-1 text-[15px] leading-7 text-gray-400">
                                        {option.description}
                                    </p>

                                    {/* CTA */}
                                
                                    <Link href={option.link}>
                                        <button
                                            className="cta-btn w-full mt-8 rounded-full border border-[#3A438A] bg-[#202653] px-6 py-3 text-sm font-semibold text-[#7C86F0]"
                                        >
                                            {option.button}
                                        </button>
                                    </Link>

                                </div>
                            );
                        })}

                    </div>

                    {/* Feature Pills */}

                    <div
                        className={`mt-8 flex flex-wrap items-center justify-center gap-3 ${inView ? "cta-visible" : "cta-hidden"
                            }`}
                        style={{
                            animationDelay: ".45s",
                        }}
                    >
                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className=" inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#181C3C] px-4 py-2 text-[13px] text-gray-300"
                            >
                                <span className="h-2 w-2 rounded-full bg-[#4F5BD5]" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}