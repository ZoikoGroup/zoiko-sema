"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const card1Features = [
  { left: "Secure messaging",    right: "AI meeting intelligence"  },
  { left: "Admin & governance",  right: "Compliance-ready exports" },
  { left: "Role-based access",   right: "ZoikoTime integration"   },
  { left: "Enterprise deployment",right: "Audit trail"             },
];

const card2Features = [
  { left: "Channels & spaces", right: "Group calls"   },
  { left: "Shared files",      right: "Action items"  },
  { left: "Project rooms",     right: "Team search"   },
];

const card3Features = [
  { left: "1:1 messaging", right: "Audio calls"  },
  { left: "Video calls",   right: "Voice notes"  },
  { left: "Group calls",   right: "Mobile-first" },
];

export default function AboutBuiltForBothSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes bfbFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bfb-hidden  { opacity:0; transform:translateY(28px); }
        .bfb-visible { animation: bfbFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .bfb-card-wrap { opacity:0; transform:translateY(24px); }
        .bfb-cards-in .bfb-card-wrap:nth-child(1) { animation: bfbFadeUp .58s ease .04s forwards; }
        .bfb-cards-in .bfb-card-wrap:nth-child(2) { animation: bfbFadeUp .58s ease .13s forwards; }
        .bfb-cards-in .bfb-card-wrap:nth-child(3) { animation: bfbFadeUp .58s ease .22s forwards; }

        /* card hover */
        .bfb-card { transition: transform .28s ease, box-shadow .28s ease; }
        .bfb-card:hover { transform: translateY(-5px); }
        .bfb-card-1:hover { box-shadow: 0 20px 48px rgba(71,71,135,0.35); }
        .bfb-card-2:hover { box-shadow: 0 20px 48px rgba(0,0,0,0.10); }
        .bfb-card-3:hover { box-shadow: 0 20px 48px rgba(79,110,247,0.35); }

        /* shimmer on btn hover */
        @keyframes bfbShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .bfb-btn { position:relative; overflow:hidden; transition:opacity .2s,transform .2s; }
        .bfb-btn::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .bfb-btn:hover::after { animation: bfbShimmer .6s ease forwards; }
        .bfb-btn:hover { opacity:.9; transform:translateY(-1px); }
        .bfb-btn:active { transform:translateY(0); }

        /* arrow slide */
        .bfb-arrow { display:inline-block; transition:transform .2s ease; }
        .bfb-btn:hover .bfb-arrow { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .bfb-hidden,.bfb-card-wrap { opacity:1!important; transform:none!important; animation:none!important; }
          .bfb-visible { animation:none!important; opacity:1!important; }
          .bfb-card:hover { transform:none; }
          .bfb-btn:hover  { transform:none; }
        }
      `}</style>

      <section
        aria-label="Business-first. Individual accessible. Built for both."
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`bfb-hidden ${headIn ? "bfb-visible" : ""} text-center mb-12`}
          >
            <h2 className="text-[clamp(24px,3.8vw,35px)] font-bold leading-[1.1] tracking-tight text-gray-900 mb-4">
              Business-first. Individual accessible. Built for both.
            </h2>
            <p className="mx-auto max-w-[540px] text-[15px] leading-[1.8] text-gray-500">
              Companies get governed communication and operational clarity. Individuals get
              secure, intelligent calls and conversations no business account required.
            </p>
          </div>

          {/* ── Cards ── equal height, button aligned bottom ── */}
          {/*
            grid: card 1 takes lg:col-span-5 (wider), cards 2+3 share lg:col-span-3.5 each
            But since 12-col splits awkwardly, use 11-col trick: 5 + 3 + 3 = 11 → use gap to absorb
            Simplest reliable: flex row with flex-[1.45] on card1, flex-1 on 2 and 3
          */}
          <div
            ref={cardsRef}
            className={`flex flex-col lg:flex-row gap-5 items-stretch ${cardsIn ? "bfb-cards-in" : ""}`}
          >

            {/* ── CARD 1 — Business (wider) ── */}
            <div className="bfb-card-wrap" style={{ flex: "1.45" }}>
              <div
                className="bfb-card bfb-card-1 flex flex-col h-full rounded-2xl p-8"
                style={{ background: "#474889" }}
              >
                {/* Label */}
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#6FE3D7" }}>
                  Primary · Businesses
                </p>

                {/* Title */}
                <h3 className="text-[clamp(22px,2.2vw,30px)] font-bold leading-[1.15] text-white mb-4">
                  For organizations that need clarity at scale.
                </h3>

                {/* Body */}
                <p className="text-[13.5px] leading-[1.7] mb-7" style={{ color: "#c7caed" }}>
                  Secure communication, AI-powered meeting intelligence, administrative control
                  and a path to verified workforce truth through ZoikoTime.
                </p>

                {/* 2-col features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8 flex-1">
                  {card1Features.map((row, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#a5b4fc" }} />
                        <span className="text-[13px] leading-snug" style={{ color: "#dde0f5" }}>{row.left}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#a5b4fc" }} />
                        <span className="text-[13px] leading-snug" style={{ color: "#dde0f5" }}>{row.right}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA — outline white */}
                <a
                  href="#business"
                  className="bfb-btn mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-gray-900 bg-white"
                >
                  Explore Sema for Business
                  <span className="bfb-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* ── CARD 2 — Teams ── */}
            <div className="bfb-card-wrap" style={{ flex: "1" }}>
              <div
                className="bfb-card bfb-card-2 flex flex-col h-full rounded-2xl p-8 border"
                style={{ background: "#fff", borderColor: "#e5e7eb" }}
              >
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#2D8F6F" }}>
                  Teams
                </p>

                <h3 className="text-[clamp(20px,2vw,27px)] font-bold leading-[1.15] text-gray-900 mb-4">
                  For groups that need to move together.
                </h3>

                <p className="text-[13.5px] leading-[1.7] text-gray-500 mb-7">
                  Departments, projects, startups, agencies and operating teams that need one
                  structured place to message, meet, share context and execute.
                </p>

                {/* 2-col features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8 flex-1">
                  {card2Features.map((row, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#2D8F6F" }} />
                        <span className="text-[13px] leading-snug text-gray-600">{row.left}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#2D8F6F" }} />
                        <span className="text-[13px] leading-snug text-gray-600">{row.right}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA — dark */}
                <a
                  href="#teams"
                  className="bfb-btn mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-white"
                  style={{ background: "#1a1a2e" }}
                >
                  Explore Teams
                  <span className="bfb-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* ── CARD 3 — Individuals ── */}
            <div className="bfb-card-wrap" style={{ flex: "1" }}>
              <div
                className="bfb-card bfb-card-3 flex flex-col h-full rounded-2xl p-8"
                style={{ background: "#4F6EF7" }}
              >
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#bfcfff" }}>
                  Individuals
                </p>

                <h3 className="text-[clamp(20px,2vw,27px)] font-bold leading-[1.15] text-white mb-4">
                  For people who just want to talk — securely.
                </h3>

                <p className="text-[13.5px] leading-[1.7] mb-7" style={{ color: "#d4dcff" }}>
                  Secure messaging, audio calls, video calls, group conversations and intelligent
                  summaries — without needing a business account.
                </p>

                {/* 2-col features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8 flex-1">
                  {card3Features.map((row, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#bfcfff" }} />
                        <span className="text-[13px] leading-snug text-white">{row.left}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "#bfcfff" }} />
                        <span className="text-[13px] leading-snug text-white">{row.right}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA — dark */}
                <a
                  href="#individuals"
                  className="bfb-btn mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold text-white"
                  style={{ background: "#1a1a2e" }}
                >
                  Use Sema for free
                  <span className="bfb-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>{/* /flex row */}
        </div>
      </section>
    </>
  );
}