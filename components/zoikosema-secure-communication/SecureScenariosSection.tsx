"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
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

const SCENARIOS = [
    {
        category: "Executive Communication",
        title:
            "Restricted room, decision pins, board files, and owned follow-ups.",
        action: "Get a demo",
        link: "/get-a-demo",
    },
    {
        category: "Client & Partner Work",
        title:
            "Scoped guest room, meeting notes, restricted files, and expiry.",
        action: "Talk to sales",
        link: "/contact-sales",
    },
    {
        category: "Legal & Contract Review",
        title:
            "Redlines, approvals, decision record, legal hold, and evidence export.",
        action: "Explore regulated workflows",
        link: "/regulated-workflows",
    },
    {
        category: "HR & People Operations",
        title:
            "Private interviews, employee matters, and sensitive-space AI restrictions.",
        action: "View Trust Center",
        link: "/trust-center",
    },
    {
        category: "Finance & Procurement",
        title:
            "Budget, vendor, and approval workflows with separation of duties.",
        action: "Get a demo",
        link: "/get-a-demo",
    },
    {
        category: "Regulated Operations",
        title:
            "Policy-first workspace with approvals, retention, and legal hold.",
        action: "Explore regulated workflows",
        link: "/regulated-workflows",
    },
];

export default function SecureScenariosSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);
    const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes ssFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes ssScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .ss-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .ss-visible{
          animation:ssFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ss-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .ss-visible-img{
          animation:ssScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ss-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .ss-image:hover{
          transform:translateY(-6px);
          box-shadow:0 30px 60px rgba(0,0,0,.12);
        }

        .ss-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .ss-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 18px 42px rgba(79,91,213,.12);
        }

        .ss-arrow{
          transition:transform .25s ease;
        }

        .ss-card:hover .ss-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .ss-hidden,
          .ss-visible,
          .ss-hidden-img,
          .ss-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .ss-card:hover,
          .ss-image:hover{
            transform:none!important;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-4xl text-center ${headerIn ? "ss-visible" : "ss-hidden"
                            }`}
                    >
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Scenarios
                        </p>

                        <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Recognizable across executive,
                            client, legal, HR, finance,
                            and regulated work.
                        </h2>

                    </div>

                    {/* Image */}

                    <div
                        ref={imageRef}
                        className={`mt-10 ${imageIn ? "ss-visible-img" : "ss-hidden-img"
                            }`}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/zoikosema-secure-communication/secure-scenarios.png"
                                alt="Secure Scenarios"
                                width={1600}
                                height={900}
                                priority
                                className="ss-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                    {/* Scenario Cards */}

                    <div
                        ref={cardsRef}
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {SCENARIOS.map((item, index) => (
                            <div
                                key={item.category}
                                style={{
                                    animationDelay: `${0.12 + index * 0.08}s`,
                                }}
                                className={`ss-card ${cardsIn ? "ss-visible" : "ss-hidden"
                                    } rounded-2xl border border-[#E8EAF5] bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#151233]`}
                            >
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                                    {item.category}
                                </p>

                                <p className="mt-5 min-h-[72px] text-[15px] leading-7 text-[#172046] dark:text-white">
                                    {item.title}
                                </p>
                            <Link href={item.link}>
                                <button
                                    type="button"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] dark:text-[#8A94F8]"
                                >
                                    {item.action}

                                    <FiArrowRight className="ss-arrow h-4 w-4" />
                                </button>
                            </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}