"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface FeatureItem {
  label: string;
}

const leftFeatures: FeatureItem[] = [
  { label: "1:1 messaging" },
  { label: "Video calls" },
  { label: "Voice notes" },
  { label: "Personal memory" },
];

const rightFeatures: FeatureItem[] = [
  { label: "Audio calls" },
  { label: "Group conversations" },
  { label: "Shared files & links" },
  { label: "Mobile-first access" },
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#474787" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#474787" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
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
          from { opacity: 0; transform: translateX(44px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes piFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes piPulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        @keyframes piWave {
          0%,100% { transform: scaleY(0.4); }
          50%      { transform: scaleY(1); }
        }
        @keyframes piShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        @keyframes piTypeFade {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }

        .pi-anim-1,.pi-anim-2,.pi-anim-3,.pi-anim-4,.pi-anim-5,.pi-anim-right { opacity: 0; }
        .pi-in .pi-anim-1 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .04s forwards; }
        .pi-in .pi-anim-2 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .12s forwards; }
        .pi-in .pi-anim-3 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .20s forwards; }
        .pi-in .pi-anim-4 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .30s forwards; }
        .pi-in .pi-anim-5 { animation: piFadeUp .55s cubic-bezier(.22,1,.36,1) .40s forwards; }
        .pi-in .pi-anim-right { animation: piSlideInRight .65s cubic-bezier(.22,1,.36,1) .15s forwards; }

        .pi-phone-float { animation: piFloat 5s ease-in-out infinite; }

        .pi-live-dot { animation: piPulseDot 2s ease-in-out infinite; }

        .pi-wave-bar { animation: piWave 1.1s ease-in-out infinite; transform-origin: bottom; }
        .pi-wave-bar:nth-child(1) { animation-delay: 0s; }
        .pi-wave-bar:nth-child(2) { animation-delay: .15s; }
        .pi-wave-bar:nth-child(3) { animation-delay: .3s; }
        .pi-wave-bar:nth-child(4) { animation-delay: .45s; }
        .pi-wave-bar:nth-child(5) { animation-delay: .6s; }

        .pi-summary-fade { animation: piTypeFade 3s ease-in-out infinite; }

        /* feature row hover */
        .pi-feature { transition: padding-left .18s ease; }
        .pi-feature:hover { padding-left: 4px; }

        /* call control buttons hover */
        .pi-call-btn { transition: transform .2s ease, filter .2s ease; }
        .pi-call-btn:hover { transform: scale(1.1); filter: brightness(1.1); }

        /* primary CTA shimmer */
        .pi-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .pi-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(71,71,135,0.35);
        }
        .pi-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .pi-btn-primary:hover::after { animation: piShimmer .65s ease forwards; }
        .pi-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .pi-btn-primary:hover .pi-btn-arrow { transform: translateX(4px); }

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

        /* phone frame hover lift */
        .pi-phone-frame { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .pi-phone-frame:hover { transform: translateY(-4px); }

        @media (prefers-reduced-motion: reduce) {
          .pi-anim-1,.pi-anim-2,.pi-anim-3,.pi-anim-4,.pi-anim-5,.pi-anim-right {
            opacity: 1 !important; animation: none !important;
          }
          .pi-phone-float, .pi-live-dot, .pi-wave-bar, .pi-summary-fade { animation: none !important; }
          .pi-btn-primary:hover, .pi-btn-secondary:hover, .pi-phone-frame:hover, .pi-call-btn:hover { transform: none; }
        }
      `}</style>

      <section
        ref={ref}
        aria-label="Use Sema for everyday conversations"
        className="pi-in w-full overflow-hidden"
        style={{ backgroundColor: "#ECF0FC" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ════ LEFT CONTENT ════ */}
          <div className="flex flex-col">

            {/* Heading — 35px */}
            <h2
              className="pi-anim-1 font-bold leading-[1.18] tracking-tight text-[#15131F] mb-5"
              style={{ fontSize: "35px" }}
            >
              Use Sema for everyday conversations not only business
              communication
            </h2>

            {/* Sub-copy */}
            <p className="pi-anim-2 text-[15px] leading-[1.75] text-[#5C5870] mb-7 max-w-[520px]">
              For people who want secure messaging, audio calls, video calls and
              AI-assisted memory without needing a business account. Mobile-first
              by design.
            </p>

            {/* Feature checklist — 2 columns */}
            <div className="pi-anim-3 grid grid-cols-2 gap-x-8 gap-y-3 mb-7">
              {leftFeatures.map((f, i) => (
                <div key={f.label} className="pi-feature flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[14px] text-[#2c2a45] font-medium">{f.label}</span>
                </div>
              ))}
              {rightFeatures.map((f, i) => (
                <div key={f.label} className="pi-feature flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[14px] text-[#2c2a45] font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Callout box */}
            <div
              className="pi-anim-4 rounded-xl p-5 mb-8"
              style={{ background: "#E2E6F6", borderLeft: "3px solid #474787" }}
            >
              <p className="text-[13.5px] leading-relaxed italic text-[#474068]">
                Sema for Individuals is not positioned as a generic replacement for
                every consumer chat app. It's for people who want secure,
                intelligent communication that can stay personal — or grow into a
                team workspace later.
              </p>
            </div>

            {/* CTAs */}
            <div className="pi-anim-5 flex flex-wrap items-center gap-3">
              <Link
                href="#use-free"
                className="pi-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white"
                style={{ background: "#474787" }}
              >
                Use Sema for free
                <span aria-hidden="true" className="pi-btn-arrow">→</span>
              </Link>

              <Link
                href="#download"
                className="pi-btn-secondary inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-medium text-gray-700"
              >
                Download app
              </Link>
            </div>
          </div>

          {/* ════ RIGHT — phone mockup ════ */}
          <div className="pi-anim-right relative flex items-center justify-center order-first lg:order-last">
            <div className="pi-phone-frame pi-phone-float relative" style={{ width: "300px" }}>

              {/* Phone outer shell */}
              <div
                className="relative rounded-[42px] p-[10px] shadow-2xl"
                style={{ background: "#0c0a14" }}
              >
                {/* Notch */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-[#0c0a14] rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="relative rounded-[34px] overflow-hidden bg-white" style={{ height: "560px" }}>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[12px] font-semibold text-[#15131F]">
                    <span>9:41</span>
                    <span className="tracking-[1px]">••••</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 pb-3 border-b border-gray-100">
                    <span className="text-[#474787]" aria-hidden="true">←</span>
                    <div className="text-center flex-1">
                      <p className="text-[14px] font-bold text-[#15131F] leading-none">Mom</p>
                      <p className="text-[10.5px] text-[#9CA3AF] mt-[2px]">Audio call · Encrypted</p>
                    </div>
                    <span className="w-4" />
                  </div>

                  {/* Call panel */}
                  <div
                    className="mx-4 mt-4 rounded-2xl p-6 flex flex-col items-center text-white"
                    style={{ background: "#474787" }}
                  >
                    <div className="flex items-center gap-1.5 mb-5 self-start">
                      <span className="pi-live-dot w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-300">
                        Connected
                      </span>
                    </div>

                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center text-[22px] font-bold mb-3">
                      M
                    </div>
                    <p className="text-[16px] font-bold mb-1">Mom</p>

                    {/* Waveform */}
                    <div className="flex items-end gap-[3px] h-5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="pi-wave-bar w-[3px] rounded-full bg-white/70"
                          style={{ height: `${[10, 16, 20, 14, 8][i]}px` }}
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-white/70 mb-5">12:08</p>

                    {/* Call controls */}
                    <div className="flex items-center gap-4">
                      <button aria-label="Mute" className="pi-call-btn w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="23" />
                        </svg>
                      </button>
                      <button aria-label="Speaker" className="pi-call-btn w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                      </button>
                      <button aria-label="End call" className="pi-call-btn w-11 h-11 rounded-full bg-red-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(135deg)" }}>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* AI Summary panel */}
                  <div className="mx-4 mt-4 rounded-xl p-4" style={{ background: "#F2F4FC" }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[12px]" aria-hidden="true">✦</span>
                      <span className="pi-summary-fade text-[10px] font-bold uppercase tracking-wider text-[#474787]">
                        Sema · Summary ready
                      </span>
                    </div>
                    <p className="text-[12px] leading-relaxed text-[#3f3d56]">
                      Talked about the trip dates (Oct 20–24) and Aunt Lily's visit.
                      Mom will text the flight options tomorrow.
                    </p>
                  </div>

                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-7 py-3 border-t border-gray-100 bg-white">
                    {[
                      { label: "Chats", active: true },
                      { label: "Calls", active: false },
                      { label: "Sema", active: false },
                      { label: "You", active: false },
                    ].map((tab) => (
                      <div key={tab.label} className="flex flex-col items-center gap-1">
                        <span
                          className="w-4 h-4 rounded-sm"
                          style={{ background: tab.active ? "#474787" : "#D1D5DB" }}
                        />
                        <span
                          className="text-[9.5px] font-medium"
                          style={{ color: tab.active ? "#474787" : "#9CA3AF" }}
                        >
                          {tab.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}