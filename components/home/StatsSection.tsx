"use client";

import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  decimals: number;
}

const stats: Stat[] = [
  { value: 200, suffix: "K+", prefix: "", label: "User using the platform", decimals: 0 },
  { value: 99, suffix: "%", prefix: "", label: "Revenue growth", decimals: 0 },
  { value: 150, suffix: "+", prefix: "", label: "Cooptation companies", decimals: 0 },
  { value: 10, suffix: "pb", prefix: "", label: "Data served", decimals: 0 },
];

function useInView(threshold = 0.3) {
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

function CountUp({
  target,
  duration = 1800,
  start,
  decimals = 0,
}: {
  target: number;
  duration?: number;
  start: boolean;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for a snappy-then-settle feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(target * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return <>{value.toFixed(decimals)}</>;
}

export default function StatsSection() {
  const { ref: sectionRef, inView } = useInView(0.35);

  return (
    <>
      <style>{`
        @keyframes stFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .st-hidden  { opacity: 0; transform: translateY(24px); }
        .st-visible { animation: stFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .st-stat { opacity: 0; transform: translateY(20px); }
        .st-in .st-stat {
          animation: stFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .st-in .st-stat:nth-child(1) { animation-delay: .05s; }
        .st-in .st-stat:nth-child(2) { animation-delay: .15s; }
        .st-in .st-stat:nth-child(3) { animation-delay: .25s; }
        .st-in .st-stat:nth-child(4) { animation-delay: .35s; }

        .st-value {
          transition: transform .3s ease;
        }
        .st-stat:hover .st-value {
          transform: scale(1.06);
        }

        .st-divider {
          transform-origin: center;
          transform: scaleY(0);
        }
        .st-in .st-divider {
          animation: stGrowLine .6s cubic-bezier(.22,1,.36,1) forwards;
          animation-delay: .3s;
        }
        @keyframes stGrowLine {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .st-hidden, .st-stat, .st-divider { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Platform statistics"
        className={`w-full py-16 sm:py-10 ${inView ? "st-in" : ""}`}
        style={{
          background: "linear-gradient(115deg, #4338CA 0%, #3730A3 55%, #2E2A6E 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Heading */}
          <div
            className={`st-hidden ${inView ? "st-visible" : ""} text-center mb-10 sm:mb-14`}
          >
            <h2 className="text-[clamp(22px,3.4vw,30px)] font-bold tracking-tight text-white">
              Used by Professionals on
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
            {stats.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center text-center px-2">
                {/* vertical divider between columns on desktop */}
                {i !== 0 && (
                  <span className="st-divider hidden lg:block absolute left-0 top-1 bottom-1 w-px bg-white/15" />
                )}

                <div className="st-stat">
                  <p className="st-value text-[30px] sm:text-[36px] font-bold text-white leading-none mb-2">
                    {s.prefix}
                    <CountUp target={s.value} start={inView} decimals={s.decimals} />
                    {s.suffix}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-white/65">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}