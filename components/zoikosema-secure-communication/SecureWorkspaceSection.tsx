"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    {
        title: "Conversation stream",
        description:
            "Messages, threads, file cards, and decision markers.",
    },
    {
        title: "Meeting tile",
        description:
            "Schedule, guest status, recording/AI eligibility.",
    },
    {
        title: "Decision record",
        description:
            "Approver, timestamp, related files, audit event.",
    },
    {
        title: "Security context",
        description:
            "Access, guest expiry, retention, legal hold, export.",
    },
];

export default function SecureWorkspaceSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes swFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes swScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .sw-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .sw-visible{
          animation:swFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sw-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .sw-visible-img{
          animation:swScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sw-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .sw-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.12);
        }

        .sw-card{
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .sw-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 42px rgba(79,91,213,.12);
        }

        @media(prefers-reduced-motion:reduce){

          .sw-hidden,
          .sw-visible,
          .sw-hidden-img,
          .sw-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .sw-card:hover,
          .sw-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "sw-visible" : "sw-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Secure Workspace
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Chat, meetings, files, decisions,
                            and AI —
                            <br />
                            with policy always visible.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-14 ${imageIn ? "sw-visible-img" : "sw-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/secure-workspace.png"
                                alt="Secure workspace"
                                width={1600}
                                height={900}
                                priority
                                className="sw-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>
                    {/* Feature Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {FEATURES.map((feature, index) => (
                            <div
                                key={feature.title}
                                style={{
                                    animationDelay: `${0.12 + index * 0.08}s`,
                                }}
                                className={`sw-card ${cardsIn ? "sw-visible" : "sw-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

        </>

    );

}