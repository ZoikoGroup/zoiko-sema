"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export default function WorkerTransparencySection() {
    const { ref, inView } = useInView();

    return (
        <>
            <style>{`
        @keyframes workerFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .worker-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .worker-visible{
          animation:workerFadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .worker-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .worker-image:hover{
          transform:translateY(-5px) scale(1.01);
          box-shadow:0 28px 60px rgba(0,0,0,.18);
        }

      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

                <div
                    ref={ref}
                    className="mx-auto max-w-7xl px-6 lg:px-8"
                >

                    {/* Header */}

                    <div
                        className={`mx-auto max-w-4xl text-center ${inView ? "worker-visible" : "worker-hidden"
                            }`}
                    >

                        <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
                            Worker Transparency
                        </span>

                        <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
                            Workers see their own relevant records —
                            with a path to correct and challenge.
                        </h2>

                    </div>
                    {/* Worker Transparency Image */}

                    <div
                        className={`mt-14 ${inView ? "worker-visible" : "worker-hidden"
                            }`}
                        style={{
                            animationDelay: ".15s",
                        }}
                    >
                        <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

                            <Image
                                src="/zoikotime-performance-analytics/worker-transparency.png"
                                alt="Worker Transparency"
                                width={1600}
                                height={900}
                                priority
                                className="worker-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                </div>

            </section>

        </>

    );
}