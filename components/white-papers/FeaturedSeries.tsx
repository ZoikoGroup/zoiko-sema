"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const series = [
  {
    number: "1",
    label: "DISCOVER",
    title: (
      <>
        Why accountable <br />
        communication is now a <br />
        board-level concern
      </>
    ),
    type: "Executive brief",
    color: "#A98CF0",
  },
  {
    number: "2",
    label: "EVALUATE",
    title: (
      <>
        A buyer&apos;s framework for <br />
        accountable <br />
        communication platforms
      </>
    ),
    type: "Buyer guide",
    color: "#3457E8",
  },
  {
    number: "3",
    label: "PILOT",
    title: (
      <>
        Governing AI meeting <br />
        summaries in the enterprise
      </>
    ),
    type: "Executive brief",
    color: "#2DD4BF",
  },
  {
    number: "4",
    label: "DEPLOY",
    title: (
      <>
        Enterprise deployment <br />
        patterns for workforce <br />
        structure
      </>
    ),
    type: "Research paper",
    color: "#2DD4BF",
  },
];

export default function FeaturedSeries() {
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
      className="overflow-hidden bg-[#12163A] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1178px]">
        {/* HEADER */}
        <div
          className={`mb-16 flex flex-col justify-between gap-8 transition-all duration-1000 ease-out lg:flex-row lg:items-end ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 font-mono text-xs font-bold tracking-wide text-[#2DD4BF]">
              FEATURED SERIES
            </p>

            <h2 className="text-[30px] font-extrabold leading-[36px] text-white sm:text-[34px] sm:leading-[40.8px]">
              The enterprise evaluation
              <br />
              journey.
            </h2>

            <p className="mt-5 max-w-[550px] text-[15px] leading-6 text-[#B6B4D6]">
              Four papers, read in order, that take a buyer from understanding
              the category to a defensible internal decision.
            </p>
          </div>

          <a
            href="#library"
            className="group self-start text-sm font-bold text-[#2DD4BF] transition-all duration-300 hover:translate-x-1 lg:self-end"
          >
            Explore series{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* SERIES CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {series.map((item, index) => (
            <div
              key={item.number}
              style={{
                transitionDelay: isVisible
                  ? `${index * 120 + 200}ms`
                  : "0ms",
              }}
              className={`group relative min-h-[188px] cursor-pointer rounded-[14px] border border-white/[0.10] bg-white/[0.04] p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* NUMBER + LABEL */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <span className="font-mono text-xs font-bold text-[#12163A]">
                    {item.number}
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold tracking-[1px] text-[#9A9BB8]">
                  {item.label}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-8 text-base font-extrabold leading-[20.8px] text-white transition-colors duration-300 group-hover:text-[#A98CF0]">
                {item.title}
              </h3>

              {/* TYPE */}
              <p className="mt-6 text-[11.5px] font-semibold text-[#9A9BB8]">
                {item.type}
              </p>

              {/* HOVER ARROW */}
              <span className="absolute bottom-6 right-6 text-lg text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2DD4BF]">
                →
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM IMAGE */}
        <div
          className={`group relative mt-16 h-[240px] overflow-hidden rounded-[22px] bg-white transition-all duration-1000 ease-out sm:h-[300px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <Image
            src="/white-papers/enterprise-evaluation.png"
            alt="Enterprise evaluation journey"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1178px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#12163A]/0 transition-all duration-500 group-hover:bg-[#12163A]/10" />
        </div>
      </div>
    </section>
  );
}