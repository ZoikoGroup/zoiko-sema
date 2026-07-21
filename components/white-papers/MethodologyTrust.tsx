"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const methodologySteps = [
  {
    number: "01",
    title: "Claim",
    description: (
      <>
        Exact approved wording
        <br />
        with a stable claim ID.
      </>
    ),
    color: "#3457E8",
  },
  {
    number: "02",
    title: "Evidence",
    description: (
      <>
        Primary source, owner,
        <br />
        and access date
        <br />
        recorded.
      </>
    ),
    color: "#6C4FE0",
    tall: true,
  },
  {
    number: "03",
    title: "Method",
    description: (
      <>
        Sample, period, analysis,
        <br />
        and limitations stated.
      </>
    ),
    color: "#A98CF0",
  },
  {
    number: "04",
    title: "Review",
    description: (
      <>
        SME, legal, privacy, and
        <br />
        accessibility sign-off.
      </>
    ),
    color: "#B7791F",
  },
  {
    number: "05",
    title: "Expiry",
    description: (
      <>
        A review or revalidation
        <br />
        date on every claim.
      </>
    ),
    color: "#2DD4BF",
  },
];

export default function MethodologyTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F8F9FC] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1178px]">
        {/* HEADER */}
        <div
          className={`mx-auto max-w-[700px] text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="font-mono text-xs font-bold tracking-wide text-[#3457E8]">
            METHODOLOGY &amp; TRUST
          </p>

          <h2 className="mt-3 text-[30px] font-extrabold leading-[36px] text-[#14162B] sm:text-[34px] sm:leading-[40.8px]">
            Every material claim is sourced,
            <br className="hidden sm:block" />
            reviewed, and dated.
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-6 text-[#4A5D75]">
            No fabricated benchmarks, customers, analyst rankings, or market
            statistics. Evidence follows a governed path before it is ever
            published.
          </p>
        </div>

        {/* METHODOLOGY FLOW */}
        <div className="mt-20">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
            {methodologySteps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-1 items-center"
              >
                <div
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 120 + 250}ms`
                      : "0ms",
                  }}
                  className={`group relative min-h-[128px] w-full rounded-[13px] border border-[#E8E5F2] bg-white p-[18px] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#D5D0EA] hover:shadow-[0_14px_35px_rgba(20,22,43,0.08)] ${
                    step.tall ? "lg:min-h-[145px]" : ""
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <p
                    className="font-mono text-[10px] font-bold transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </p>

                  <h3 className="mt-4 text-[15px] font-extrabold text-[#14162B] transition-colors duration-300 group-hover:text-[#3457E8]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[11.5px] leading-[17.25px] text-[#4A5D75]">
                    {step.description}
                  </p>
                </div>

                {/* ARROW */}
                {index < methodologySteps.length - 1 && (
                  <div
                    className={`hidden px-3 text-[15px] font-bold text-[#B4B2CE] transition-all duration-700 lg:block ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 120 + 350}ms`
                        : "0ms",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LOWER TRUST CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[282px_1fr_283px]">
          {/* ACCESSIBILITY */}
          <div
            className={`group min-h-[289px] rounded-[13px] border border-[#E8E5F2] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(20,22,43,0.08)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "850ms" : "0ms",
            }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#3457E8]/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-[13px] font-extrabold text-[#3457E8]">
                AA
              </span>
            </div>

            <h3 className="mt-12 text-[15px] font-extrabold text-[#14162B]">
              WCAG 2.2 AA
            </h3>

            <p className="mt-3 text-[12px] leading-[18px] text-[#4A5D75]">
              Keyboard, screen-reader, 320px reflow,
              <br />
              and 200% zoom tested.
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div
            className={`group relative min-h-[289px] overflow-hidden rounded-[13px] border border-[#E8E5F2] bg-white transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(20,22,43,0.08)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "950ms" : "0ms",
            }}
          >
            <Image
              src="/white-papers/methodology-trust.png"
              alt="Methodology and trust process"
              fill
              sizes="(max-width: 1024px) 100vw, 586px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-[#3457E8]/0 transition-all duration-500 group-hover:bg-[#3457E8]/5" />
          </div>

          {/* AI DISCLOSURE */}
          <div
            className={`group min-h-[289px] rounded-[13px] border border-[#E8E5F2] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(20,22,43,0.08)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "1050ms" : "0ms",
            }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2DD4BF]/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-[13px] font-extrabold text-[#139482]">
                AI
              </span>
            </div>

            <h3 className="mt-12 text-[15px] font-extrabold text-[#14162B]">
              AI disclosure
            </h3>

            <p className="mt-3 text-[12px] leading-[18px] text-[#4A5D75]">
              AI assists outlining and editing only; it
              <br />
              never fabricates evidence or authors a
              <br />
              paper.
            </p>
          </div>
        </div>

        {/* BOTTOM LINK */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "1150ms" : "0ms",
          }}
        >
          <button
            type="button"
            className="group text-sm font-bold text-[#3457E8] transition-all duration-300 hover:translate-x-1"
          >
            Review the full methodology &amp; claims policy{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}