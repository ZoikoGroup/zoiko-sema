"use client";

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

const BARS = [
    42, 58, 50, 74, 82, 66,
    54, 78, 86, 58, 46, 70,
];

export default function SessionPerformanceSection() {
    const { ref, inView } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes spFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes spGrow{
          from{
            transform:scaleY(0);
          }
          to{
            transform:scaleY(1);
          }
        }

        .sp-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .sp-visible{
          animation:spFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sp-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .sp-card:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(15,23,42,.08);
        }

        .sp-bar{
          transform-origin:bottom;
          animation:spGrow .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media(prefers-reduced-motion:reduce){

          .sp-hidden,
          .sp-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .sp-bar{
            animation:none!important;
          }

        }

      `}</style>

            <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div
                    ref={ref}
                    className={`mx-auto max-w-7xl px-6 sm:px-8 ${inView ? "sp-visible" : "sp-hidden"
                        }`}
                >

                    <div className="sp-card rounded-[30px] border border-[#E7EAF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#151233]">

                        {/* Header */}

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                            <div>

                                <h2 className="text-[32px] font-bold text-[#172046] dark:text-white">
                                    Session Performance
                                </h2>

                                <p className="mt-3 text-[15px] text-gray-500 dark:text-gray-400">
                                    Real-time monitoring of your connection health.
                                </p>

                            </div>

                            <div className="flex gap-8">

                                <div>

                                    <h3 className="text-[34px] font-bold text-[#2563EB]">
                                        99.8%
                                    </h3>

                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Join Success
                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-[34px] font-bold text-[#2563EB]">
                                        1.2s
                                    </h3>

                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Latency
                                    </p>

                                </div>

                            </div>

                        </div>
                        {/* Chart */}

                        <div className="mt-12">

                            <div className="flex h-52 items-end gap-2 sm:gap-3">

                                {BARS.map((height, index) => (

                                    <div
                                        key={index}
                                        className={`sp-bar flex-1 rounded-t-md ${index === 8
                                                ? "bg-[#8FB1DB] dark:bg-[#4F5BD5]"
                                                : "bg-[#DCE7F5] dark:bg-[#2A335C]"
                                            }`}
                                        style={{
                                            height: `${height}%`,
                                            animationDelay: `${0.05 * index}s`,
                                        }}
                                    />

                                ))}

                            </div>

                            {/* Footer Labels */}

                            <div className="mt-5 flex items-center justify-between">

                                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
                                    08:00 AM
                                </span>

                                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                                    Active Join Windows
                                </span>

                                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
                                    06:00 PM
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );
}