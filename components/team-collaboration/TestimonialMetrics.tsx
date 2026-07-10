'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MetricStat {
  value: string;
  label: string;
  icon: React.ReactNode;
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

export default function TestimonialMetrics() {
  // Separate observer triggers so the quote and the metrics column
  // can reveal independently as the user scrolls
  const { ref: quoteRef, inView: quoteInView } = useInView(0.2);
  const { ref: metricsRef, inView: metricsInView } = useInView(0.15);

  const metrics: MetricStat[] = [
    {
      value: '3.2x',
      label: 'Faster response time',
      icon: (
        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '48%',
      label: 'Fewer status meetings',
      icon: (
                <img className='w-5 h-5'  src="/TeamCollaboration/Frame (15).png"/>

      )
    },
    {
      value: '99.9%',
      label: 'Uptime target',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (16).png"/>
      )
    }
  ];

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes tmFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .tm-hidden  { opacity: 0; transform: translateY(28px); }
        .tm-visible { animation: tmFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Individual metric card cascade — parent toggles the trigger class */
        .tm-card { opacity: 0; transform: translateY(24px); }
        .tm-metrics.tm-metrics-in .tm-card {
          animation: tmFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        /* Quote mark subtle pulse for a bit of life */
        @keyframes tmQuotePulse {
          0%,100% { opacity: .3; }
          50%     { opacity: .55; }
        }
        .tm-quote-mark { animation: tmQuotePulse 3.2s ease-in-out infinite; }

        /* Metric card hover polish */
        .tm-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1),
                      box-shadow .3s ease,
                      background-color .2s ease,
                      border-color .2s ease;
        }
        .tm-card:hover {
          transform: translateY(-4px) translateX(2px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.18);
        }
        .tm-icon-wrap {
          transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .3s ease;
        }
        .tm-card:hover .tm-icon-wrap {
          transform: scale(1.1) rotate(3deg);
          background-color: rgba(255,255,255,0.28);
        }

        /* Avatar hover */
        .tm-avatar {
          transition: transform .25s ease, border-color .25s ease;
        }
        .tm-avatar:hover {
          transform: scale(1.06);
          border-color: rgba(255,255,255,0.7);
        }

        @media (prefers-reduced-motion: reduce) {
          .tm-hidden, .tm-visible, .tm-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .tm-quote-mark { animation: none !important; }
          .tm-card:hover, .tm-card:hover .tm-icon-wrap, .tm-avatar:hover { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-indigo-600 py-16 md:py-20 text-white font-sans antialiased overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hand: Testimonial Block Quote */}
          <div
            ref={quoteRef}
            className={`lg:col-span-7 flex flex-col justify-start items-start space-y-6 tm-hidden ${
              quoteInView ? "tm-visible" : ""
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200 block font-['Inter']">
              What teams say
            </span>
            
            <div className="relative">
              <span className="tm-quote-mark absolute -left-2 -top-6 text-7xl font-bold font-['Plus_Jakarta_Sans'] text-white/30 pointer-events-none select-none">
                &ldquo;
              </span>
              <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-relaxed font-['Plus_Jakarta_Sans'] pl-4">
                We stopped losing decisions in scattered threads. Conversations, meetings, files, and follow-ups now live in one governed space — and our teams move faster with less back-and-forth.
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-2 pl-4">
              <img 
                className="tm-avatar size-12 rounded-full border-2 border-white/40 object-cover" 
                src="/TeamCollaboration/div.png" 
                alt="Priya Nair" 
              />
              <div className="flex flex-col">
                <span className="text-base font-bold font-['Inter'] text-white leading-snug">
                  Priya Nair
                </span>
                <span className="text-sm font-normal font-['Inter'] text-indigo-100/80">
                  VP of Operations · Northwind Labs
                </span>
              </div>
            </div>
          </div>

          {/* Right Hand: Context Sidecard Metrics Column */}
          <div
            ref={metricsRef}
            className={`tm-metrics ${metricsInView ? "tm-metrics-in" : ""} lg:col-span-5 w-full flex flex-col space-y-3.5`}
          >
            {metrics.map((metric, idx) => {
              const { prefix, target, suffix, decimals } = parseStatValue(metric.value);
              return (
                <div 
                  key={idx}
                  className="tm-card w-full px-5 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-[2px] flex items-center gap-4 hover:bg-white/15"
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  {/* Shield Plate SVG Frame */}
                  <div className="tm-icon-wrap size-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                    {metric.icon}
                  </div>
                  
                  {/* Info Frame blocks */}
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-2xl font-extrabold leading-7 text-white">
                      <CountUp
                        target={target}
                        prefix={prefix}
                        suffix={suffix}
                        decimals={decimals}
                        start={metricsInView}
                        delay={idx * 120}
                      />
                    </div>
                    <div className="text-xs font-normal leading-5 text-indigo-100">
                      {metric.label}
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