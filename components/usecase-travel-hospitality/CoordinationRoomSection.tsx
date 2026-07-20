"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

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

const FEATURES = [
    "Room opened by duty manager — not automated by AI",
    "Named participants only — no open broadcast",
    "Guest impact tracked by count and type — no identity",
    "Each task has a named owner and due time",
    "Safety decisions remain with trained staff — Sema does not dispatch or override",
    "Room closes with documented outcomes, not abandoned",
    "Full audit trail of who acted, when, and what was decided",
];

export default function CoordinationRoomSection() {
    const { ref: sectionRef, inView } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes crFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes crFadeLeft{
          from{
            opacity:0;
            transform:translateX(-40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes crFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .cr-hidden{
          opacity:0;
        }

        .cr-left{
          animation:crFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cr-right{
          animation:crFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cr-item{
          animation:crFadeUp .6s ease forwards;
        }

        .cr-image{
          transition:transform .45s ease, box-shadow .45s ease;
        }

        .cr-image:hover{
          transform:translateY(-6px);
          box-shadow:0 30px 70px rgba(0,0,0,.35);
        }

        .warning-card{
          transition:.3s ease;
        }

        .warning-card:hover{
          transform:translateY(-4px);
          border-color:#ef4444;
        }
      `}</style>

            <section className="bg-[#111633] py-8 sm:py-12 lg:py-14">

                <div
                    ref={sectionRef}
                    className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8"
                >

                    {/* LEFT */}

                    <div className={inView ? "cr-left" : "cr-hidden"}>

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/30 bg-[#4F5BD5]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C86F0]">
                            Disruption Coordination
                        </span>

                        <h2 className="mt-4 text-[clamp(30px,5vw,40px)] font-bold leading-tight text-white">
                            One coordination room.
                            <br />
                            Every team.
                            Every task.
                        </h2>

                        <p className="mt-4 max-w-xl text-[16px] leading-8 text-gray-300">
                            When a flight delay, storm, system outage, or event overrun
                            affects guests, Sema opens a time-bound coordination room scoped
                            to named staff, with task ownership, guest-impact tracking, and a
                            full audit record.
                        </p>
                        {/* Checklist */}

                        <ul className="mt-6 space-y-3">
                            {FEATURES.map((feature, index) => (
                                <li
                                    key={feature}
                                    style={{
                                        animationDelay: `${0.12 + index * 0.08}s`,
                                    }}
                                    className={`cr-item ${inView ? "" : "opacity-0"
                                        } flex items-start gap-3`}
                                >
                                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#4F5BD5]/15">
                                        <FiCheck className="h-3.5 w-3.5 text-[#7C86F0]" />
                                    </span>

                                    <span className="text-[15px] leading-7 text-gray-300">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Warning Card */}

                        <div className=" mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                            <div className="flex items-start gap-3">

                                <FiAlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />

                                <p className="text-[14px] leading-7 text-red-200">
                                    <span className="font-semibold">
                                        Sema is not a safety or emergency system.
                                    </span>{" "}
                                    Life-safety events, medical emergencies, and security
                                    incidents follow your property emergency protocols.
                                    Sema coordinates the operational response after emergency
                                    services are engaged.
                                </p>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT */}

                    <div
                        className={`${inView ? "cr-right" : "cr-hidden"
                            } flex justify-center lg:justify-end`}
                    >
                        <div className="overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,.35)]">

                            <Image
                                src="/usecase-travel-hospitality/coordination-room.png"
                                alt="Coordination Room"
                                width={850}
                                height={1000}
                                priority
                                className="cr-image h-auto w-full max-w-[620px] object-cover"
                            />

                        </div>
                    </div>

                </div>

            </section>

        </>

    );

}