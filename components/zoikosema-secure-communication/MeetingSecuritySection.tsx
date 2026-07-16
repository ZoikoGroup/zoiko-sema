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

const STAGES = [
    {
        title: "Before",
        description:
            "Approved invitees, domain rules, passcode, waiting room, and recording/AI eligibility notices.",
    },
    {
        title: "During",
        description:
            "Host controls, role-based screen sharing, guest badge, and visible recording/AI state.",
    },
    {
        title: "After",
        description:
            "Reviewed summary, decisions, action items, retention, and audit.",
    },
];

export default function MeetingSecuritySection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes msFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes msScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .ms-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .ms-visible{
          animation:msFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ms-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .ms-visible-img{
          animation:msScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ms-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ms-image:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(0,0,0,.12);
        }

        .ms-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .ms-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 40px rgba(79,91,213,.12);
        }

        @media(prefers-reduced-motion:reduce){

          .ms-hidden,
          .ms-visible,
          .ms-hidden-img,
          .ms-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .ms-card:hover,
          .ms-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "ms-visible" : "ms-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Meeting Security
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Policy is visible before, during,
                            <br />
                            and after the meeting.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-10 ${imageIn ? "ms-visible-img" : "ms-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/meeting-security.png"
                                alt="Meeting Security"
                                width={1600}
                                height={900}
                                priority
                                className="ms-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Timeline Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
                    >
                        {STAGES.map((stage, index) => (
                            <div
                                key={stage.title}
                                style={{
                                    animationDelay: `${0.12 + index * 0.08}s`,
                                }}
                                className={`ms-card ${cardsIn ? "ms-visible" : "ms-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <h3 className="text-[18px] font-semibold text-[#172046] dark:text-white">
                                    {stage.title}
                                </h3>

                                <p className="mt-4 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
                                    {stage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}