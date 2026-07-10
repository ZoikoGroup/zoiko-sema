'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

// ── Intersection observer hook for scroll-triggered activation ──
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

// Parses a display string like "3.2x", "48%", "99.9%" into a numeric
// target plus the prefix/suffix text and decimal precision needed to
// re-render it exactly as authored once the count-up finishes.
function parseStatValue(raw: string) {
  const match = raw.match(/^([^0-9.]*)([0-9]*\.?[0-9]+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { prefix, target: parseFloat(numStr), suffix, decimals };
}

function CountUp({
  target,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1600,
  start,
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  start: boolean;
  delay?: number;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    const run = () => {
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
    };

    timeoutId = setTimeout(run, delay);
    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration, delay]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function ResultsMetrics() {
  // Separate observer references so the header and the stat row can
  // reveal independently as the user scrolls
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.15);

  const stats: StatItem[] = [
    {
      value: '3.2x',
      label: 'Faster response time',
      subtext: 'across active team channels',
    },
    {
      value: '48%',
      label: 'Fewer status meetings',
      subtext: 'as coordination moves to shared spaces',
    },
    {
      value: '99.9%',
      label: 'Uptime target',
      subtext: 'with enterprise-grade support',
    },
  ];

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes rmFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .rm-hidden  { opacity: 0; transform: translateY(28px); }
        .rm-visible { animation: rmFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* Individual stat cascade — parent toggles the trigger class */
        .rm-stat { opacity: 0; transform: translateY(24px); }
        .rm-grid.rm-grid-in .rm-stat {
          animation: rmFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        /* Hover polish on each stat */
        .rm-stat-value {
          transition: transform .25s ease, text-shadow .25s ease;
        }
        .rm-stat:hover .rm-stat-value {
          transform: scale(1.08);
          text-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .rm-stat-label {
          transition: color .25s ease;
        }
        .rm-stat:hover .rm-stat-label {
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          .rm-hidden, .rm-visible, .rm-stat {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .rm-stat:hover .rm-stat-value { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-indigo-600 py-16 md:py-14 overflow-hidden antialiased text-white">
        <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
          
          {/* Header Typography Block */}
          <div
            ref={headRef}
            className={`w-full text-center flex flex-col items-center space-y-3 max-w-[720px] rm-hidden ${
              headInView ? 'rm-visible' : ''
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-9">
              Results teams feel in the first weeks
            </h2>
            <p className="text-base text-indigo-100 font-normal leading-6">
              Less time chasing status, more time moving work forward — with governance built in.
            </p>
          </div>

          {/* Core Statistical Metrics Row Layout */}
          <div
            ref={gridRef}
            className={`rm-grid ${gridInView ? 'rm-grid-in' : ''} w-full max-w-[820px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-center items-start pt-2`}
          >
            {stats.map((stat, idx) => {
              const { prefix, target, suffix, decimals } = parseStatValue(stat.value);
              return (
              <div
                key={idx}
                className="rm-stat w-full flex flex-col items-center text-center space-y-2 group"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                {/* Metric Hero Number — counts up from 0 once in view */}
                <div className="rm-stat-value text-5xl font-extrabold tracking-tight text-white leading-none">
                  <CountUp
                    target={target}
                    prefix={prefix}
                    suffix={suffix}
                    decimals={decimals}
                    start={gridInView}
                    delay={idx * 120}
                  />
                </div>

                {/* Context Label Text Elements */}
                <div className="space-y-1">
                  <div className="rm-stat-label text-indigo-50 text-sm font-semibold leading-5">
                    {stat.label}
                  </div>
                  <div className="text-indigo-200 text-xs font-normal leading-5 max-w-[200px] mx-auto">
                    {stat.subtext}
                  </div>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}