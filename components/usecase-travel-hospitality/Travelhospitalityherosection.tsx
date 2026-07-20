"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const CHIPS = [
    "Multi-property coordination",
    "Shift-aware handoffs",
    "Governed guest service",
    "Privacy-first design",
    "Disruption coordination",
];

export function TravelHospitalityHeroSection() {
    const { ref: badgeRef, inView: badgeIn } = useInView(0.4);
    const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
    const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
    const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
    const { ref: chipRef, inView: chipIn } = useInView(0.3);
    const { ref: imgRef, inView: imgIn } = useInView(0.1);

    return (
        <>
            <style>{`
        @keyframes thFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes thRise {
          from { opacity: 0; transform: translateY(40px) scale(.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .th-hidden  { opacity: 0; transform: translateY(28px); }
        .th-visible { animation: thFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .th-hidden-r  { opacity: 0; transform: translateY(40px) scale(.985); }
        .th-visible-r { animation: thRise .85s cubic-bezier(.22,1,.36,1) forwards; }

        .th-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .th-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(47,107,235,0.5); }
        .th-btn-primary:active { transform: translateY(0); }

        .th-btn-secondary { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .th-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.28); }
        .th-btn-secondary:active { transform: translateY(0); }

        .th-arrow { transition: transform .25s ease; }
        .th-btn-primary:hover .th-arrow { transform: translateX(4px); }

        .th-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .th-image:hover { transform: translateY(-6px); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }

        @media (prefers-reduced-motion: reduce) {
          .th-hidden, .th-visible, .th-hidden-r, .th-visible-r {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .th-btn-primary:hover, .th-btn-secondary:hover, .th-image:hover { transform: none !important; }
          .th-btn-primary:hover .th-arrow { transform: none !important; }
        }
      `}</style>

            <section
                aria-label="Travel & Hospitality — coordinate every property, shift, and guest handoff"
                className="relative w-full overflow-hidden bg-[#0D0B24] py-8 sm:py-10 lg:py-14"
            >
                {/* Ambient glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(47,107,235,0.22) 0%, rgba(47,107,235,0) 70%)",
                    }}
                />

                <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
                    {/* Centered copy */}
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <div
                            ref={badgeRef}
                            className={`th-hidden ${badgeIn ? "th-visible" : ""} mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5B8DEF]`}
                        >
                            <FiMapPin className="h-3 w-3" aria-hidden="true" />
                            Travel &amp; Hospitality
                        </div>

                        <h1
                            ref={headRef}
                            className={`th-hidden ${headIn ? "th-visible" : ""} mb-5 text-[clamp(32px,5.2vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white`}
                            style={{ animationDelay: "0.08s" }}
                        >
                            Coordinate every property,{" "}
                            <span className="text-[#5B8DEF]">shift, and guest handoff.</span>
                        </h1>

                        <p
                            ref={subRef}
                            className={`th-hidden ${subIn ? "th-visible" : ""} mx-auto mb-8 max-w-2xl text-[15px] leading-[1.75] text-gray-400`}
                            style={{ animationDelay: "0.16s" }}
                        >
                            Zoiko Sema is the coordination layer across your front desk,
                            housekeeping, concierge, F&amp;B, maintenance, and event teams —
                            keeping every shift briefing, guest handoff, and disruption response
                            connected and documented.
                        </p>

                        {/* CTAs */}
                        <div
                            ref={ctaRef}
                            className={`th-hidden ${ctaIn ? "th-visible" : ""} flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center`}
                            style={{ animationDelay: "0.24s" }}
                        >
                            <Link href="/get-a-demo">
                                <button
                                    type="button"
                                    className="th-btn-primary w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6BEB] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#3B78F0]"
                                >
                                    Get a demo
                                    <FiArrowRight className="th-arrow h-4 w-4" aria-hidden="true" />
                                </button>
                            </Link>
                            <Link href="/start-free">
                                <button
                                    type="button"
                                    className="th-btn-secondary w-full rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-[14px] font-semibold text-white"
                                >
                                    Start free
                                </button>
                            </Link>
                        </div>

                        {/* Tag chips */}
                        <div
                            ref={chipRef}
                            className={`th-hidden ${chipIn ? "th-visible" : ""} mt-7 flex flex-wrap justify-center gap-2.5`}
                            style={{ animationDelay: "0.32s" }}
                        >
                            {CHIPS.map((chip) => (
                                <span
                                    key={chip}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-gray-300"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#5B8DEF]" />
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Wide dashboard image (single asset, not built from markup) */}
                    <div
                        ref={imgRef}
                        className={`th-hidden-r ${imgIn ? "th-visible-r" : ""} mx-auto mt-8 w-full`}
                        style={{ animationDelay: "0.1s" }}
                    >
                        {/* replace src with your exported artwork (PNG in /public/images/) */}
                        <img
                            src="/usecase-travel-hospitality/travel-hospitality-hero.png"
                            alt="Property Operations Hub dashboard for Grand Meridian Group shown above a hospitality team meeting"
                            loading="eager"
                            className="th-image w-full rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default TravelHospitalityHeroSection;