"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const updates = [
  {
    date: "15 Jul 2026",
    status: "UPDATED",
    statusClass: "bg-[#3457E8]/10 text-[#3457E8]",
    title: "Governing AI meeting summaries in the enterprise",
    description:
      "Added retention and disclosure guidance; expanded limitations.",
    version: "v2.1",
    action: "View update →",
  },
  {
    date: "12 Jul 2026",
    status: "NEW",
    statusClass: "bg-[#2DD4BF]/[0.12] text-[#139482]",
    title: "A buyer's framework for accountable communication platforms",
    description: "First edition published with methodology and references.",
    version: "v1.0",
    action: "Read online →",
  },
  {
    date: "02 Jun 2026",
    status: "UPDATED",
    statusClass: "bg-[#3457E8]/10 text-[#3457E8]",
    title: "From meeting to accountable work: an operations model",
    description: "Refreshed workflow model; corrected a mislabeled figure.",
    version: "v2.0",
    action: "View change →",
  },
  {
    date: "10 Nov 2025",
    status: "SUPERSEDED",
    statusClass: "bg-[#B7791F]/[0.12] text-[#9B6518]",
    title: "Evaluating messaging governance and retention",
    description:
      "Replaced by the 2026 edition; URL and citation preserved.",
    version: "v1.0",
    action: "Go to current →",
  },
];

export default function LatestUpdated() {
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1178px]">
        {/* Header */}
        <div
          className={`mb-14 flex flex-col justify-between gap-6 transition-all duration-1000 ease-out lg:flex-row lg:items-center ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 font-mono text-xs font-bold text-[#6C4FE0]">
              LATEST &amp; UPDATED
            </p>

            <h2 className="text-[34px] font-extrabold leading-[42.4px] text-[#14162B]">
              Freshness you can cite.
            </h2>
          </div>

          <p className="text-left text-[13px] leading-5 text-[#9A9BB8] lg:text-right">
            Superseded and retired papers keep stable
            <br />
            URLs and a route to the current edition.
          </p>
        </div>

        {/* Updates */}
        <div>
          {updates.map((item, index) => (
            <div
              key={item.title}
              style={{
                transitionDelay: isVisible ? `${index * 120 + 150}ms` : "0ms",
              }}
              className={`group grid grid-cols-1 gap-4 border-t border-[#F0EEF8] py-7 transition-all duration-700 ease-out md:grid-cols-[110px_114px_minmax(260px,1.2fr)_minmax(220px,1fr)_auto_auto] md:items-center md:gap-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Date */}
              <span className="font-mono text-[12.5px] font-medium text-[#9A9BB8]">
                {item.date}
              </span>

              {/* Status */}
              <span
                className={`flex h-[22.8px] w-[114px] items-center justify-center rounded-md text-[10.5px] font-bold tracking-[0.3px] transition-transform duration-300 group-hover:scale-105 ${item.statusClass}`}
              >
                {item.status}
              </span>

              {/* Title */}
              <h3 className="text-[14.5px] font-bold leading-6 text-[#14162B] transition-colors duration-300 group-hover:text-[#3457E8]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-5 text-[#4A5D75]">
                {item.description}
              </p>

              {/* Version */}
              <span className="font-mono text-xs font-medium text-[#9A9BB8]">
                {item.version}
              </span>

              {/* Action */}
              <button className="whitespace-nowrap text-left text-[13px] font-bold text-[#3457E8] transition-all duration-300 hover:translate-x-1 md:text-right">
                {item.action}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Images */}
        <div
          className={`mt-14 grid grid-cols-1 gap-6 transition-all duration-1000 ease-out md:grid-cols-2 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? "650ms" : "0ms",
          }}
        >
          {/* Image 1 */}
          <div className="group relative h-[289px] overflow-hidden rounded-[13px] border border-[#E8E5F2] bg-[#3C1313]">
            <Image
              src="/white-papers/latest-update-1.png"
              alt="Latest research update"
              fill
              sizes="(max-width: 768px) 100vw, 570px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </div>

          {/* Image 2 */}
          <div className="group relative h-[289px] overflow-hidden rounded-[13px] border border-[#E8E5F2] bg-[#3C1313]">
            <Image
              src="/white-papers/latest-update-2.png"
              alt="Research methodology update"
              fill
              sizes="(max-width: 768px) 100vw, 570px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}