"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

const FEATURE_PILLS_ROW_1 = ["Meetings", "Messaging", "Calls", "Mail", "Calendar"];
const FEATURE_PILLS_ROW_2 = ["AI Summaries", "Confidential Mode", "Admin Controls"];

export default function ProductOverviewHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: pillsRef, inView: pillsIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes poFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes poFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .po-hidden  { opacity: 0; transform: translateY(28px); }
        .po-visible { animation: poFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .po-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .po-img-visible { animation: poFadeScale .8s cubic-bezier(.22,1,.36,1) forwards; }

        .po-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .po-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(79, 91, 255, 0.45);
        }
        .po-btn-primary:active { transform: translateY(0); }

        .po-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease, border-color .25s ease;
        }
        .po-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.4);
          background-color: rgba(255,255,255,0.06);
        }
        .po-btn-secondary:active { transform: translateY(0); }

        .po-pill {
          transition: border-color .2s ease, background-color .2s ease;
        }
        .po-pill:hover {
          border-color: rgba(255,255,255,0.32);
          background-color: rgba(255,255,255,0.09);
        }

        @media (prefers-reduced-motion: reduce) {
          .po-hidden, .po-visible, .po-img-hidden, .po-img-visible {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .po-btn-primary:hover, .po-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Product overview hero"
        className="relative w-full overflow-hidden py-20 md:py-28"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 15%, #2A2266 0%, transparent 55%), linear-gradient(150deg, #0A0C24 0%, #12123A 45%, #1B1550 100%)",
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-10">
          {/* Left column */}
          <div className="text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className={`po-hidden ${badgeIn ? "po-visible" : ""} mb-6 inline-flex items-center gap-2`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C8CFF]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9AA3F5]">
                Zoiko Sema Products
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headRef}
              className={`po-hidden ${headIn ? "po-visible" : ""} text-[clamp(32px,4.6vw,50px)] font-bold leading-[1.14] tracking-tight text-white mb-6`}
              style={{ animationDelay: "0.08s" }}
            >
              One workspace for every conversation that moves work forward.
            </h1>

            {/* Subtext */}
            <p
              ref={subRef}
              className={`po-hidden ${subIn ? "po-visible" : ""} max-w-[520px] text-[15px] leading-[1.75] text-[#A6ABCE] mb-9`}
              style={{ animationDelay: "0.16s" }}
            >
              Zoiko Sema brings meetings, messaging, calls, video, mail,
              calendar, files, search, AI summaries, notes, Confidential
              Mode, and admin controls into one secure communication
              platform.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`po-hidden ${ctaIn ? "po-visible" : ""} mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-3`}
              style={{ animationDelay: "0.24s" }}
            >
              <button
                className="po-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white"
                style={{ backgroundColor: "#4F5BFF" }}
              >
                Start free
              </button>
              <button
                className="po-btn-secondary rounded-full border px-7 py-3 text-[14px] font-semibold text-white"
                style={{ borderColor: "rgba(255,255,255,0.22)" }}
              >
                Contact sales
              </button>
            </div>

            {/* Feature pills */}
            <div
              ref={pillsRef}
              className={`po-hidden ${pillsIn ? "po-visible" : ""} flex flex-col gap-2.5`}
              style={{ animationDelay: "0.32s" }}
            >
              <div className="flex flex-wrap gap-2.5">
                {FEATURE_PILLS_ROW_1.map((label) => (
                  <span
                    key={label}
                    className="po-pill rounded-full border px-4 py-1.5 text-[12.5px] font-medium text-[#D7DAF5]"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {FEATURE_PILLS_ROW_2.map((label) => (
                  <span
                    key={label}
                    className="po-pill rounded-full border px-4 py-1.5 text-[12.5px] font-medium text-[#D7DAF5]"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: image */}
          <div
            ref={imgRef}
            className={`po-img-hidden ${imgIn ? "po-img-visible" : ""} relative w-full`}
            style={{ animationDelay: "0.12s" }}
          >
            <div
              className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[28px]"
            >
              <Image
                src="/Images/hero-video-call.webp"
                alt="Team member on a Zoiko Sema video call giving a thumbs up, with meeting participants visible on a laptop screen"
                fill
                priority
                className="object-cover"
                
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}