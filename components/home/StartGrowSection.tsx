"use client";

import React, { useEffect, useRef, useState } from "react";

interface Step {
  num: number;
  text: string;
}

const pathASteps: Step[] = [
  { num: 1, text: "Download or open Sema on any device" },
  { num: 2, text: "Start messaging or calling — no setup" },
  { num: 3, text: "Create personal groups for friends and projects" },
  { num: 4, text: "Use AI summaries and follow-ups" },
  { num: 5, text: "Continue solo, or upgrade into a team workspace" },
];

const pathBSteps: Step[] = [
  { num: 1, text: "One person starts using Sema" },
  { num: 2, text: "A team workspace forms organically" },
  { num: 3, text: "Managers see communication clarity" },
  { num: 4, text: "The business adopts Sema with admin controls" },
  { num: 5, text: "ZoikoTime integration adds workforce truth where required" },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
function useInView(threshold = 0.12) {
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

export default function StartGrowSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes sgFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sg-hidden  { opacity: 0; transform: translateY(28px); }
        .sg-visible { animation: sgFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .sg-card-wrap { opacity: 0; transform: translateY(26px); }
        .sg-grid-in .sg-card-wrap {
          animation: sgFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .sg-grid-in .sg-card-wrap:nth-child(1) { animation-delay: .05s; }
        .sg-grid-in .sg-card-wrap:nth-child(2) { animation-delay: .18s; }

        /* card hover */
        .sg-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1),
                      box-shadow .3s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .sg-card:hover { transform: translateY(-6px); }
        .sg-card-light:hover { box-shadow: 0 22px 44px rgba(15,15,40,0.10); }
        .sg-card-dark:hover  { box-shadow: 0 22px 44px rgba(35,25,90,0.45); }

        /* step row hover */
        .sg-step { transition: padding-left .2s ease; }
        .sg-step:hover { padding-left: 6px; }
        .sg-step-num {
          transition: transform .2s ease, background-color .2s ease;
        }
        .sg-step:hover .sg-step-num { transform: scale(1.12); }

        /* CTA button */
        .sg-btn {
          position: relative; overflow: hidden;
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease, opacity .2s ease;
        }
        .sg-btn:hover { transform: translateY(-2px); opacity: .94; }
        .sg-btn-light:hover { box-shadow: 0 14px 30px rgba(71,71,135,0.35); }
        .sg-btn-dark:hover  { box-shadow: 0 14px 30px rgba(0,0,0,0.18); }

        @keyframes sgShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .sg-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .sg-btn:hover::after { animation: sgShimmer .7s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .sg-hidden, .sg-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sg-visible { animation: none !important; opacity: 1 !important; }
          .sg-card:hover, .sg-btn:hover { transform: none; }
          .sg-btn::after { display: none; }
        }
      `}</style>

      <section
        aria-label="Start with one conversation, grow when the need is real"
        style={{ backgroundColor: "#DDE4FB" }}
        className="w-full py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`sg-hidden ${headIn ? "sg-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.4vw,38px)" }}
            >
              Start with one conversation.
              <br />
              Grow when the need is real.
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75] text-[#5C5870]">
              Sema doesn&apos;t force every user into a business funnel. Individuals stay
              individuals if they want to. Businesses adopt Sema when the team is ready.
            </p>
          </div>

          {/* ── Two-path grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch ${
              gridIn ? "sg-grid-in" : ""
            }`}
          >

            {/* ══ Path A — Individual (light) ══ */}
            <div className="sg-card-wrap h-full">
              <div className="sg-card sg-card-light h-full rounded-[20px] bg-white p-8 md:p-9 flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#474787] mb-3">
                  Path A · Individual Use
                </span>

                <h3 className="text-[22px] font-bold leading-snug text-[#15131F] mb-6">
                  Start solo. Stay solo or invite a team when you&apos;re ready.
                </h3>

                <div className="flex-1 mb-7">
                  {pathASteps.map((s, idx) => (
                    <div
                      key={s.num}
                      className="sg-step flex items-center gap-4 py-[14px]"
                      style={{
                        borderBottom:
                          idx < pathASteps.length - 1 ? "1px solid #ECECF5" : "none",
                      }}
                    >
                      <span
                        className="sg-step-num flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold"
                        style={{ background: "#E4E2F9", color: "#474787" }}
                      >
                        {s.num}
                      </span>
                      <span className="text-[14px] leading-snug text-[#3f3d56]">
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#start-free"
                  className="sg-btn sg-btn-light inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-semibold text-white"
                  style={{ background: "#474787" }}
                >
                  Start free
                </a>
              </div>
            </div>

            {/* ══ Path B — Business (dark) ══ */}
            <div className="sg-card-wrap h-full">
              <div
                className="sg-card sg-card-dark h-full rounded-[20px] p-8 md:p-9 flex flex-col"
                style={{ background: "#261D50" }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2A6BE3] mb-3">
                  Path B · Business Adoption
                </span>

                <h3 className="text-[22px] font-bold leading-snug text-white mb-6">
                  One person starts. The whole organization scales into governed
                  communication.
                </h3>

                <div className="flex-1 mb-7">
                  {pathBSteps.map((s, idx) => (
                    <div
                      key={s.num}
                      className="sg-step flex items-center gap-4 py-[14px]"
                      style={{
                        borderBottom:
                          idx < pathBSteps.length - 1
                            ? "1px solid rgba(255,255,255,0.10)"
                            : "none",
                      }}
                    >
                      <span
                        className="sg-step-num flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold"
                        style={{ background: "#6FE3D726", color: "#c7c9f2" }}
                      >
                        {s.num}
                      </span>
                      <span className="text-[14px] leading-snug text-[#d6d7f5]">
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#business-demo"
                  className="sg-btn sg-btn-dark inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-semibold text-[#15131F] bg-white"
                >
                  Get a business demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}