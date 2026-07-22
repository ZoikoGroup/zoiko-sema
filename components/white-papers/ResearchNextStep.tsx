"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const options = [
  {
    label: "SELF-SERVE",
    title: "Start free",
    description: (
      <>
        Try the accountable-communication
        <br className="hidden sm:block" />
        workflow with your own team.
      </>
    ),
    linkText: "Start free →",
    href: "/start-free",
    type: "primary",
  },
  {
    label: "GUIDED",
    title: "Get a demo",
    description: (
      <>
        Map the research to your real
        <br className="hidden sm:block" />
        workflows, integrations, and
        <br className="hidden sm:block" />
        governance.
      </>
    ),
    linkText: "Get a demo →",
    href: "/get-a-demo",
    type: "guided",
  },
  {
    label: "ENTERPRISE",
    title: "Contact Sales",
    description: (
      <>
        Discuss security, identity, DPA,
        <br className="hidden sm:block" />
        deployment, and support at scale.
      </>
    ),
    linkText: "Contact Sales →",
    href: "/contact-sales",
    type: "enterprise",
  },
];

export default function ResearchNextStep() {
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
      className="overflow-hidden bg-[#12163A] px-6 py-24"
    >
      <div className="mx-auto max-w-[1178px]">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-xs font-bold tracking-[3px] text-[#A98CF0]">
            FROM RESEARCH TO NEXT STEP
          </p>

          <h2 className="text-[34px] font-extrabold leading-[1.2] text-white sm:text-[38px] sm:leading-[45.6px]">
            Turn the research into a decision
            <br className="hidden sm:block" />
            you can defend.
          </h2>
        </div>

        {/* Options */}
        <div className="mx-auto grid max-w-[888px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => {
            const isPrimary = option.type === "primary";

            return (
              <Link
                key={option.label}
                href={option.href}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 120 + 200}ms`
                    : "0ms",
                }}
                className={`group relative min-h-[213px] rounded-2xl p-6 transition-all duration-700 ease-out hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } ${
                  isPrimary
                    ? "bg-[#3457E8] hover:bg-[#4264ED] hover:shadow-[0_20px_45px_rgba(52,87,232,0.35)]"
                    : "border border-white/[0.14] bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                }`}
              >
                {/* Label */}
                <p
                  className={`font-mono text-[10.5px] font-bold tracking-[1px] ${
                    isPrimary
                      ? "text-white/60"
                      : option.type === "enterprise"
                        ? "text-[#2DD4BF]"
                        : "text-[#A98CF0]"
                  }`}
                >
                  {option.label}
                </p>

                {/* Title */}
                <h3 className="mt-5 text-[19px] font-extrabold text-white transition-transform duration-300 group-hover:translate-x-1">
                  {option.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-4 text-[12.5px] leading-[18.75px] ${
                    isPrimary
                      ? "text-white/80"
                      : "text-[#B6B4D6]"
                  }`}
                >
                  {option.description}
                </p>

                {/* Link */}
                <span
                  className={`absolute bottom-6 left-6 text-[13.5px] font-bold transition-transform duration-300 group-hover:translate-x-1 ${
                    isPrimary
                      ? "text-white"
                      : option.type === "enterprise"
                        ? "text-[#2DD4BF]"
                        : "text-[#A98CF0]"
                  }`}
                >
                  {option.linkText}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}