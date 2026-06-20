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

const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Sema for your workflow",
    desc: "See how Sema supports your real communication patterns — messaging, meetings, channels, follow-ups, and collaboration.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: "How it fits with your current tools",
    desc: "If you use Slack, Teams, Zoom, Google Meet, or WhatsApp Business today, we'll explain where Sema complements, consolidates, or replaces existing workflows.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "ZoikoTime, where relevant",
    desc: "If workforce truth, productivity intelligence, or meeting-to-work context matters to your organization, we can include the Sema + ZoikoTime pathway.",
  },
];

export default function GetDemoCoverSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes gdcFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .gdc-hidden  { opacity:0; transform:translateY(24px); }
        .gdc-visible { animation: gdcFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .gdc-card { opacity:0; transform:translateY(20px); transition:transform .28s ease, box-shadow .28s ease; }
        .gdc-grid-in .gdc-card:nth-child(1) { animation: gdcFadeUp .55s ease .04s forwards; }
        .gdc-grid-in .gdc-card:nth-child(2) { animation: gdcFadeUp .55s ease .13s forwards; }
        .gdc-grid-in .gdc-card:nth-child(3) { animation: gdcFadeUp .55s ease .22s forwards; }
        .gdc-card:hover { transform:translateY(-4px)!important; box-shadow:0 12px 32px rgba(71,71,135,0.10)!important; }

        .gdc-icon-box { transition:background .2s,transform .2s; }
        .gdc-card:hover .gdc-icon-box { background:#e0e7ff!important; transform:scale(1.08); }

        @media (prefers-reduced-motion:reduce) {
          .gdc-hidden,.gdc-card { opacity:1!important; transform:none!important; animation:none!important; }
          .gdc-visible { animation:none!important; opacity:1!important; }
          .gdc-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="What the demo covers"
        className="w-full bg-white py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`gdc-hidden ${headIn ? "gdc-visible" : ""} text-center mb-10`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color:"#4f46e5" }}>
              What the Demo Covers
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontSize:"35px" }}>
              A focused walkthrough, tailored to your needs.
            </h2>
          </div>

          {/* ── 3 cards ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${gridIn ? "gdc-grid-in" : ""}`}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="gdc-card flex flex-col rounded-2xl p-7"
                style={{ background:"#EEF2FF", border:"1px solid #e0e7ff", boxShadow:"0 2px 12px rgba(71,71,135,0.05)" }}
              >
                {/* Icon */}
                <div
                  className="gdc-icon-box w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background:"#fff", color:"#4f46e5" }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-gray-900 mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Desc */}
                <p className="text-[13.5px] leading-[1.75] text-gray-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}