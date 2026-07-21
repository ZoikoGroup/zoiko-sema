"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    initials: "EX",
    title: "Executive buyer",
    description: "Strategic value, risk, and implications",
    color: "#3457E8",
  },
  {
    initials: "IT",
    title: "IT / Security",
    description: "Architecture, identity, and controls",
    color: "#B7791F",
  },
  {
    initials: "CL",
    title: "Compliance / Legal",
    description: "Governance, audit, and jurisdiction",
    color: "#6C4FE0",
  },
  {
    initials: "OP",
    title: "Operations leader",
    description: "Adoption and accountable follow-through",
    color: "#2DD4BF",
  },
  {
    initials: "PR",
    title: "Procurement",
    description: "Defensible evaluation and stable citations",
    color: "#A98CF0",
  },
];

export default function FindYourPath() {
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
      className="w-full overflow-hidden bg-[#F3F1FA] px-6 py-24"
    >
      {/* Header */}
      <div
        className={`mx-auto mb-20 text-center transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <p className="mb-3 font-mono text-xs font-bold tracking-wide text-[#6C4FE0]">
          FIND YOUR PATH
        </p>

        <h2 className="text-[34px] font-extrabold leading-[40.8px] text-[#14162B]">
          Start from a topic, or from your role.
        </h2>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-[1178px] grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Card */}
        <div
          className={`group relative h-[481px] overflow-hidden rounded-[18px] bg-white transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
          }`}
        >
          <Image
  src="/white-papers/find-your-path.png"
  alt="Find your path"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>

          {/* Hover Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#6C4FE0]/0 transition-all duration-500 group-hover:bg-[#6C4FE0]/10" />
        </div>

        {/* Audience Card */}
        <div
          className={`rounded-[18px] bg-[#14162B] p-9 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0"
          }`}
        >
          <p className="mb-6 text-[13px] font-bold text-white">
            By audience
          </p>

          <div className="space-y-[10px]">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 100 + 200}ms`
                    : "0ms",
                }}
                className={`group flex h-[65.6px] cursor-pointer items-center rounded-[11px] border border-white/[0.08] bg-white/[0.04] px-[18.8px] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {/* Icon */}
                <div
                  className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: audience.color,
                  }}
                >
                  <span className="font-sans text-xs font-extrabold text-white">
                    {audience.initials}
                  </span>
                </div>

                {/* Text */}
                <div className="ml-[13px] min-w-0">
                  <p className="text-[13.5px] font-bold text-white transition-colors duration-300 group-hover:text-[#A98CF0]">
                    {audience.title}
                  </p>

                  <p className="mt-[2px] text-[11.5px] font-normal text-[#9A9BB8]">
                    {audience.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="ml-auto text-base font-bold text-[#9A9BB8] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}