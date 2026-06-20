"use client";

import React, { useEffect, useState } from "react";

interface Category {
  label: string;
  dotColor: string;
}

interface Testimonial {
  quote: string;
  meta: string;
}

const categories: Category[] = [
  { label: "Tech startup", dotColor: "#8B5CF6" },
  { label: "Distributed agency", dotColor: "#10B981" },
  { label: "Professional services firm", dotColor: "#1E1B4B" },
  { label: "Healthcare network", dotColor: "#F59E0B" },
  { label: "Legal & compliance team", dotColor: "#EF4444" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Sema gives our team one place to talk, meet, summarize, and follow up without losing context. AI summaries alone saved us two hours a week.",
    meta: "Operations Lead · Distributed team · 34 members",
  },
  {
    quote:
      "We replaced three separate tools with Sema in under a week. The AI meeting summaries are accurate enough that nobody double-checks them anymore.",
    meta: "Founder · Tech startup · 12 members",
  },
  {
    quote:
      "As a compliance-heavy team, the audit trail and explainable AI were non-negotiable. Sema was the only platform that didn't ask us to compromise.",
    meta: "Compliance Director · Legal & advisory · 58 members",
  },
  {
    quote:
      "Client calls used to mean three follow-up emails. Now Sema drafts the recap before I've even closed my laptop.",
    meta: "Account Manager · Professional services · 9 members",
  },
];

export default function StartFreeTrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
      setFadeKey((k) => k + 1);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <>
      <style>{`
        @keyframes sftFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sftQuoteFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sft-enter-1 { animation: sftFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .sft-enter-2 { animation: sftFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }

        .sft-pill-enter {
          animation: sftFadeUp 0.5s cubic-bezier(.22,1,.36,1) both;
        }

        .sft-pill {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease;
        }
        .sft-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(15,15,40,0.08);
          border-color: #c7cbe8;
        }
        .sft-pill-dot { transition: transform .25s ease; }
        .sft-pill:hover .sft-pill-dot { transform: scale(1.25); }

        .sft-quote-block {
          animation: sftQuoteFade 0.5s cubic-bezier(.22,1,.36,1) both;
        }

        .sft-progress-dot {
          transition: width .3s ease, background-color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .sft-enter-1, .sft-enter-2, .sft-pill-enter, .sft-quote-block {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .sft-pill:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Trusted by teams building secure, coordinated communication"
        className="w-full bg-white py-14 md:py-16"
      >
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10 text-center">

          {/* ── Label ── */}
          <p className="sft-enter-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400 mb-7">
            Trusted by teams building secure, coordinated communication
          </p>

          {/* ── Category pills ── */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="sft-pill-enter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="sft-pill inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-[#15131F] cursor-default">
                  <span
                    className="sft-pill-dot w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: cat.dotColor }}
                  />
                  {cat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Rotating testimonial ── */}
          <div className="max-w-[640px] mx-auto">
            <div key={fadeKey} className="sft-quote-block">
              <p className="text-[16px] md:text-[17px] italic leading-relaxed text-[#3f3d56] mb-4">
                "{current.quote}"
              </p>
              <p className="text-[12.5px] text-gray-400">{current.meta}</p>
            </div>

            {/* progress dots */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className="sft-progress-dot h-1.5 rounded-full"
                  style={{
                    width: i === activeIndex ? "20px" : "6px",
                    background: i === activeIndex ? "#474787" : "#E2E5F5",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}