"use client";

import { useRouter } from "next/navigation";
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

const cards = [
  {
    title: "Connection status",
    desc: "See whether ZoikoTime is disconnected, available, pending setup, or active.",
    emoji: "🔗",
  },
  {
    title: "Workspace mapping",
    desc: "Map calls from selected Sema workspaces to ZoikoTime teams, departments, or projects.",
    emoji: "🗺️",
  },
  {
    title: "Policy alignment",
    desc: "Align eligible calls with approved work sessions, attendance context, or operational workflows.",
    emoji: "✅",
  },
  {
    title: "Privacy modes",
    desc: "Apply jurisdiction-aware privacy controls and limit visible workforce-context signals.",
    emoji: "🕵️",
  },
  {
    title: "Exception reporting",
    desc: "Flag policy gaps, unmapped workspaces, failed syncs, or missing consent settings.",
    emoji: "⚠️",
  },
  {
    title: "Verified call context",
    desc: "Show occurrence, time window, workspace, and policy state within governance rules.",
    emoji: "🔍",
  },
];

export default function AudioCallsZoikoTimeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes ztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zt-hidden  { opacity: 0; transform: translateY(28px); }
        .zt-visible { animation: ztFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .zt-card { opacity: 0; transform: translateY(24px) scale(.98); }
        .zt-grid.zt-visible .zt-card {
          animation: ztFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zt-card-inner {
          transition: transform .35s cubic-bezier(.22,1,.36,1),
                      box-shadow .35s ease,
                      background-color .35s ease;
        }
        .zt-card-inner:hover {
          transform: translateY(-6px);
          background-color: rgba(255,255,255,0.12);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .zt-icon-box {
          transition: transform .35s cubic-bezier(.22,1,.36,1), background-color .35s ease;
        }
        .zt-card-inner:hover .zt-icon-box {
          transform: scale(1.12) rotate(-4deg);
          background-color: rgba(255,255,255,0.28);
        }

        .zt-btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .zt-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

        .zt-btn-secondary { transition: transform .25s ease, background-color .25s ease; }
        .zt-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.12); }

        @media (prefers-reduced-motion: reduce) {
          .zt-hidden, .zt-visible, .zt-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .zt-card-inner:hover, .zt-card-inner:hover .zt-icon-box,
          .zt-btn-primary:hover, .zt-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime integration"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#554fa9" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge — plain uppercase label, no pill */}
          <div
            ref={badgeRef}
            className={`zt-hidden ${badgeIn ? "zt-visible" : ""} text-center mb-3`}
          >
            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white/80">
              ZoikoTime Integration
            </span>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`zt-hidden ${headIn ? "zt-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-extrabold leading-[1.2] tracking-tight text-white max-w-[720px] mx-auto mb-4">
              Connect calls to workforce context when accountability matters.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/70 max-w-[620px] mx-auto">
              Show call occurrence, time window, workspace, participants, and
              policy state — without turning content into employee
              monitoring.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`zt-grid ${gridIn ? "zt-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="zt-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="zt-card-inner h-full rounded-2xl bg-[#FFFFFF14] p-6 sm:p-7">
                  <span className="zt-icon-box inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 text-[18px] mb-4">
                    {c.emoji}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/65">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`zt-hidden ${ctaIn ? "zt-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3`}
          >
            <button onClick={()=>router.push('/zoikotime-integration')}
            className="zt-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-gray-900 bg-white">
              Explore ZoikoTime integration
            </button>
            <button onClick={()=>router.push('/contact')}
            className="zt-btn-secondary rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Talk to sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}