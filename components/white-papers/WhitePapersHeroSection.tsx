"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhitePapersHeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[760px] overflow-hidden bg-[#12163A]"
    >
      <div className="mx-auto flex min-h-[760px] max-w-[1440px] items-center px-6 py-24 sm:px-10 lg:px-[134px]">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_513px]">
          {/* LEFT CONTENT */}
          <div
            className={`max-w-[560px] transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Eyebrow */}
            <p className="font-mono text-[12px] font-bold tracking-[3px] text-[#A98CF0]">
              ZOIKO SEMA RESEARCH
            </p>

            {/* Heading */}
            <h1 className="mt-5 max-w-[530px] text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white sm:text-[50px] sm:leading-[54px]">
              Research for
              <br />
              communication teams
              <br />
              that need clarity,
              <br />
              control, and evidence.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[485px] text-[16px] leading-[25.6px] text-[#B6B4D6]">
              White papers, executive briefs, buyer guides, and research
              reports on accountable communication, governed AI, enterprise
              deployment, security, and operational follow-through.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#library" className="rounded-full bg-[#3457E8] px-6 py-[15px] text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4567F2] hover:shadow-[0_10px_30px_rgba(52,87,232,0.35)] active:translate-y-0">
                Read the featured paper
              </a>

              <a href="#library" className="rounded-full border border-white/25 bg-white px-6 py-[15px] text-[15px] font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:translate-y-0">
                Browse all white papers
              </a>

              <a href="/contact-sales" className="px-3 py-3 text-[15px] font-bold text-[#A98CF0] transition-all duration-300 hover:translate-x-1 hover:text-white">
                Talk to an expert →
              </a>
            </div>

            {/* BADGES */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Evidence reviewed",
                "Accessible HTML & PDF",
                "Version controlled",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.12] bg-white/[0.05] px-[15px] py-[8px] text-[11.5px] font-semibold text-[#C8D1E0] transition-all duration-300 hover:-translate-y-1 hover:border-[#A98CF0]/50 hover:bg-white/[0.1] hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* DISCLAIMER */}
            <p className="mt-6 max-w-[430px] text-[11.5px] leading-[17.25px] text-[#6B6D99]">
              Material claims require published sources, methodology, human
              review, and an approval record before release. No invented survey
              results, customers, analyst recognition, certifications, ROI, or
              market statistics.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`transition-all delay-200 duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="group relative h-[420px] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#414A94] transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] sm:h-[494px]">
             <Image
  src="/white-papers/image.png"
  alt="Zoiko Sema research visual"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12163A]/30 via-transparent to-white/5 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}