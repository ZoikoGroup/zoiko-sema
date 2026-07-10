"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const BRAND = "#3457E8";

const steps = [
  {
    number: 1,
    title: "Connect ZoikoTime",
    description: "Link your ZoikoTime organization and confirm permissions.",
    badge: "Connected",
  },
  {
    number: 2,
    title: "Map workspaces",
    description:
      "Map teams, departments, locations, or units to Sema workspaces and channels.",
    badge: "Workspace mapping",
  },
  {
    number: 3,
    title: "Configure privacy mode",
    description:
      "Define what context can be shared, where it appears, and who can view it.",
    badge: "Privacy configured",
  },
  {
    number: 4,
    title: "Test sync & activate",
    description:
      "Review sync health and exceptions, then activate communication workflows.",
    badge: "Configured",
  },
];

export default function ZoikoCustomersIntegrationStepsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: numbersRef, inView: numbersIn } = useInView(0.1);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes zcisFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zcis-hidden  { opacity: 0; transform: translateY(28px); }
        .zcis-visible { animation: zcisFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .zcis-number { opacity: 0; transform: scale(.6); }
        .zcis-number.zcis-number-in {
          animation: zcisNumberIn .45s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes zcisNumberIn {
          from { opacity: 0; transform: scale(.6); }
          to   { opacity: 1; transform: scale(1); }
        }

        .zcis-line { transform: scaleX(0); transform-origin: left; }
        .zcis-line.zcis-line-in {
          animation: zcisLineIn .5s ease forwards;
        }
        @keyframes zcisLineIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .zcis-card { opacity: 0; transform: translateY(20px); }
        .zcis-card.zcis-card-in {
          animation: zcisFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zcis-card:hover .zcis-badge {
          background: #dde2fb;
        }
        .zcis-card:hover .zcis-num-box {
          transform: scale(1.08);
        }
        .zcis-num-box { transition: transform .25s ease; }
        .zcis-badge { transition: background .2s ease; }

        @media (prefers-reduced-motion: reduce) {
          .zcis-hidden, .zcis-number, .zcis-card { opacity: 1 !important; transform: none !important; }
          .zcis-visible, .zcis-number-in, .zcis-card-in { animation: none !important; }
          .zcis-line { transform: scaleX(1) !important; }
        }
      `}</style>

      <section
        aria-label="Connect in four controlled steps"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`zcis-hidden ${headIn ? "zcis-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              ZoikoTime Integration Depth
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900 mb-4">
              Connect in four controlled steps
            </h2>
            <p className="mx-auto max-w-[600px] text-[14.5px] leading-relaxed text-gray-500">
              Admin-led or sales-assisted setup that maps workspaces to your
              ZoikoTime teams — implementation that feels controlled, not
              complex.
            </p>
          </div>

          {/* Connected step numbers */}
          <div
            ref={numbersRef}
            className="grid grid-cols-4 items-center mb-6"
          >
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`zcis-number ${numbersIn ? "zcis-number-in" : ""} zcis-num-box w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}
                  style={{ background: "#E6E9FB", animationDelay: `${i * 0.12}s` }}
                >
                  <span className="text-[13px] font-bold" style={{ color: BRAND }}>
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`zcis-line ${numbersIn ? "zcis-line-in" : ""} h-px bg-gray-200 flex-1 ml-2`}
                    style={{ animationDelay: `${i * 0.12 + 0.1}s` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content — grid rows stretch so badges line up on the same line */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`zcis-card ${gridIn ? "zcis-card-in" : ""} flex flex-col h-full`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500 mb-5 flex-1">
                  {step.description}
                </p>
                <span
                  className="zcis-badge inline-flex items-center justify-center rounded-full px-4 py-2 text-[12.5px] font-semibold self-start"
                  style={{ background: "#EEF0FC", color: BRAND }}
                >
                  {step.badge}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}