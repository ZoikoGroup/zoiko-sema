"use client";

import React, { useEffect, useRef, useState } from "react";

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

const pillRowOne = ["Team availability", "Mail connected", "Meeting-ready", "Policy aware"];
const pillRowTwo = ["ZoikoTime-ready", "Cross-device access"];

export default function CalendarHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: pillsRef, inView: pillsIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes chsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chs-hidden  { opacity: 0; transform: translateY(28px); }
        .chs-visible { animation: chsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .chs-pill-group { opacity: 0; transform: translateY(20px); }
        .chs-pill-group.chs-visible {
          animation: chsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .chs-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .chs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(75, 71, 229, 0.4);
        }
        .chs-btn-outline {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .chs-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .chs-image-wrap {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }

        @media (prefers-reduced-motion: reduce) {
          .chs-hidden, .chs-visible, .chs-pill-group { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Zoiko Sema Calendar"
        className="w-full py-16 sm:py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 140% at 85% 0%, rgba(75,71,229,0.45) 0%, rgba(15,15,42,0) 55%), linear-gradient(135deg, #0D0B22 0%, #12122E 55%, #0F0F2A 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left column */}
            <div>
              <div
                ref={badgeRef}
                className={`chs-hidden ${badgeIn ? "chs-visible" : ""} flex items-center gap-2 mb-5`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B8FE0]" />
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8B8FE0]">
                  Zoiko Sema Calendar
                </span>
              </div>

              <div
                ref={headRef}
                className={`chs-hidden ${headIn ? "chs-visible" : ""}`}
                style={{ animationDelay: "0.06s" }}
              >
                <h1 className="text-[clamp(30px,4.6vw,44px)] font-bold leading-[1.12] tracking-tight text-white mb-5">
                  Calendar that keeps meetings, work, and policy in sync.
                </h1>
              </div>

              <div
                ref={bodyRef}
                className={`chs-hidden ${bodyIn ? "chs-visible" : ""}`}
                style={{ animationDelay: "0.12s" }}
              >
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/55 max-w-[520px] mb-8">
                  Schedule meetings, calls, events, and team work with calendar, mail, guests, availability, AI summaries, and workspace policies connected in one secure communication platform.
                </p>
              </div>

              <div
                ref={ctaRef}
                className={`chs-hidden ${ctaIn ? "chs-visible" : ""} flex flex-wrap items-center gap-3 mb-7`}
                style={{ animationDelay: "0.18s" }}
              >
                <a
                  href="/start-free"
                  className="chs-btn-primary inline-flex items-center justify-center rounded-full bg-[#4B47E5] text-white text-[13.5px] font-semibold px-6 py-3"
                >
                  Start free
                </a>
                <a
                  href="/contact"
                  className="chs-btn-outline inline-flex items-center justify-center rounded-full bg-transparent text-white text-[13.5px] font-semibold px-6 py-3 border border-white/25"
                >
                  Contact sales
                </a>
              </div>

              <div
                ref={pillsRef}
                className={`chs-pill-group ${pillsIn ? "chs-visible" : ""} flex flex-col gap-2`}
              >
                <div className="flex flex-wrap gap-2">
                  {pillRowOne.map((pill) => (
                    <span
                      key={pill}
                      className="text-[12px] font-medium text-white/70 bg-white/[0.05] border border-white/10 rounded-full px-3.5 py-1.5"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {pillRowTwo.map((pill) => (
                    <span
                      key={pill}
                      className="text-[12px] font-medium text-white/70 bg-white/[0.05] border border-white/10 rounded-full px-3.5 py-1.5"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - image */}
            <div
              ref={imgRef}
              className={`chs-hidden ${imgIn ? "chs-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="chs-image-wrap rounded-[1.75rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/CALENDAR_HERO.webp"
                  alt="Person using a digital planner calendar on a tablet"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}