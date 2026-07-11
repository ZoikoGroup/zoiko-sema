"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface FeatureItem {
  label: string;
}

const features: FeatureItem[] = [
  { label: "1:1 messaging" },
  { label: "Video calls" },
  { label: "Personal memory" },
  { label: "Audio calls" },
  { label: "Shared photos & files" },
  { label: "Private, no ads" },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12.5l4.5 4.5L19 7" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Intersection-observer hook ─────────────────────────────
function useInView(threshold = 0.12) {
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

export default function ProductIndividualsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes piFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes piSlideInRight {
          from { opacity: 0; transform: translateX(44px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes piFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes piShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }

        .pi-anim-1,.pi-anim-2,.pi-anim-3,.pi-anim-4,.pi-anim-5,.pi-anim-6,.pi-anim-right { opacity: 0; }
        .pi-in .pi-anim-1 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .02s forwards; }
        .pi-in .pi-anim-2 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .08s forwards; }
        .pi-in .pi-anim-3 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .16s forwards; }
        .pi-in .pi-anim-4 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .24s forwards; }
        .pi-in .pi-anim-5 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .32s forwards; }
        .pi-in .pi-anim-6 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .40s forwards; }
        .pi-in .pi-anim-right { animation: piSlideInRight .7s cubic-bezier(.22,1,.36,1) .15s forwards; }

        .pi-illustration-float { animation: piFloat 5.5s ease-in-out infinite; }

        /* feature row hover */
        .pi-feature { transition: padding-left .18s ease; }
        .pi-feature:hover { padding-left: 4px; }

        /* primary CTA shimmer */
        .pi-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease;
        }
        .pi-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(15,15,40,0.14);
        }
        .pi-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(0,0,0,0.06) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .pi-btn-primary:hover::after { animation: piShimmer .65s ease forwards; }

        /* secondary CTA */
        .pi-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .pi-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(15,15,40,0.10);
          border-color: rgba(71,71,135,0.3);
          background-color: #fafaff;
        }

        /* illustration hover lift */
        .pi-illustration-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .pi-illustration-wrap:hover { transform: translateY(-6px) scale(1.01); }

        @media (prefers-reduced-motion: reduce) {
          .pi-anim-1,.pi-anim-2,.pi-anim-3,.pi-anim-4,.pi-anim-5,.pi-anim-6,.pi-anim-right {
            opacity: 1 !important; animation: none !important;
          }
          .pi-illustration-float { animation: none !important; }
          .pi-btn-primary:hover, .pi-btn-secondary:hover, .pi-illustration-wrap:hover { transform: none; }
        }
      `}</style>

      <section
        ref={ref}
        aria-label="Use Sema for everyday conversations"
        className="pi-in w-full overflow-hidden bg-white"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ════ LEFT CONTENT ════ */}
          <div className="flex flex-col">

            {/* Eyebrow label */}
            <span
              className="pi-anim-1 text-[11px] font-bold uppercase tracking-[0.14em] mb-3"
              style={{ color: "#3457E8" }}
            >
              Everyday Use
            </span>

            {/* Heading */}
            <h2
              className="pi-anim-2 font-extrabold leading-[1.2] tracking-tight text-[#15131F] mb-5"
              style={{ fontSize: "28px" }}
            >
              Use Sema for everyday conversations, not only business communication.
            </h2>

            {/* Sub-copy */}
            <p className="pi-anim-3 text-[14.5px] leading-[1.75] text-[#5C5870] mb-6 max-w-[620px]">
              For people who want secure messaging, audio calls, video calls and AI-assisted summaries without needing a business account. Mobile-first by design.
            </p>

            {/* Feature checklist — single column */}
            <div className="pi-anim-4 flex flex-col gap-2.5 mb-6">
              {features.map((f) => (
                <div key={f.label} className="pi-feature flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[14px] text-[#2c2a45]">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Note paragraph */}
            <p className="pi-anim-5 text-[13.5px] leading-[1.7] text-gray-400 mb-8 max-w-[520px]">
              For individuals, Sema is not positioned as a generic replacement for every consumer chat app. If it fits how a person already talks to friends and family, that&apos;s great — Sema doesn&apos;t require a business signup to make one connection.
            </p>

            {/* CTAs */}
            <div className="pi-anim-6 flex flex-wrap items-center gap-3">
              <Link
                href="#use-free"
                className="pi-btn-primary inline-flex items-center justify-center rounded-full border border-[#0B0F2D] bg-white px-7 py-3.5 text-[14px] font-semibold text-gray-900"
              >
                Use Sema for free
              </Link>

              <Link
                href="#download"
                className="pi-btn-secondary inline-flex items-center justify-center rounded-full border border-[#0B0F2D] bg-white px-7 py-3.5 text-[14px] font-semibold text-gray-900"
              >
                Download app
              </Link>
            </div>
          </div>

          {/* ════ RIGHT — illustration image ════ */}
          <div className="pi-anim-right flex items-center justify-center order-first lg:order-last">
            <div className="pi-illustration-wrap pi-illustration-float">
              <img
                src="/Images/messaging-2026-07-08-03-58-12-utc 1.png"
                alt="People connecting through Sema — messaging, calls, and shared moments"
                className="w-full h-auto"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}