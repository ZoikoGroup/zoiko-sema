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

const FEATURES = [
  {
    title: "Period lock",
    description:
      "Export scope respects pay-period boundaries and approval status.",
  },
  {
    title: "Pay groups & cost centers",
    description:
      "Field authority stays explicit across systems.",
  },
  {
    title: "Replacement export",
    description:
      "Corrections replace, not silently duplicate, prior records.",
  },
];

export default function PayrollFinanceSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @keyframes payrollFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .payroll-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .payroll-visible{
          animation:payrollFadeUp .85s cubic-bezier(.22,1,.36,1) forwards;
        }

        .payroll-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .payroll-image:hover{
          transform:translateY(-4px) scale(1.008);
          box-shadow:0 26px 55px rgba(0,0,0,.16);
        }

        .payroll-card{
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .payroll-card:hover{
          transform:translateY(-6px);
          border-color:#4F5BD5;
          box-shadow:0 20px 45px rgba(79,91,213,.10);
        }

      `}</style>

      <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-12 lg:py-14">

        <div
          ref={ref}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >

          {/* Header */}

          <div
            className={`mx-auto max-w-3xl text-center ${
              inView ? "payroll-visible" : "payroll-hidden"
            }`}
          >
            <span className="inline-flex rounded-full border border-[#4F5BD5]/20 bg-[#4F5BD5]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F5BD5] dark:text-[#7C86F0]">
              Payroll and Finance
            </span>

            <h2 className="mt-6 text-[clamp(30px,4vw,42px)] font-bold leading-tight text-[#172046] dark:text-white">
              Approved exports and reconciliation —
              never a silent overwrite.
            </h2>
          </div>
          {/* Showcase Image */}

          <div
            className={`mt-14 ${
              inView ? "payroll-visible" : "payroll-hidden"
            }`}
            style={{
              animationDelay: ".15s",
            }}
          >
            <div className="overflow-hidden rounded-[30px] border border-[#E8EAF5] bg-white shadow-sm dark:border-white/10 dark:bg-[#171A35]">

              <Image
                src="/zoikotime-integrations/payroll-finance.png"
                alt="Payroll and Finance"
                width={1600}
                height={900}
                priority
                className="payroll-image h-[240px] w-full object-cover sm:h-[360px] lg:h-[520px]"
              />

            </div>
          </div>

          {/* Feature Cards */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${0.25 + index * 0.08}s`,
                }}
                className={`payroll-card ${
                  inView ? "payroll-visible" : "payroll-hidden"
                } rounded-3xl border border-[#E8EAF5] bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#171A35]`}
              >
                <h3 className="text-[15px] font-semibold text-[#172046] dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 text-[14px] leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}