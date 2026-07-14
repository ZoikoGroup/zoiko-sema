"use client";

import React, { useEffect, useState, useRef } from "react";

// TODO: replace with the final specialist/meeting photo URL.
const SPECIALIST_IMAGE_URL = "/Images/Specialist-Image-Placeholder-Replacement.png";

function useInView(threshold = 0.15) {
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

const routes = [
  {
    title: "Product specialist",
    desc: "For general team and workflow walkthroughs.",
  },
  {
    title: "Enterprise solutions",
    desc: "For security, compliance, and large-scale rollout.",
  },
  {
    title: "ZoikoTime solutions",
    desc: "For governed integration and workforce context evaluation.",
  },
];

export default function GetDemoSpecialistSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes gdsFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .gds-hidden  { opacity:0; transform:translateY(22px); }
        .gds-visible { animation: gdsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .gds-card { opacity:0; transform:translateY(18px); transition:transform .28s ease, border-color .28s ease, background-color .28s ease; }
        .gds-grid-in .gds-card:nth-child(1) { animation: gdsFadeUp .55s ease .04s forwards; }
        .gds-grid-in .gds-card:nth-child(2) { animation: gdsFadeUp .55s ease .13s forwards; }
        .gds-grid-in .gds-card:nth-child(3) { animation: gdsFadeUp .55s ease .22s forwards; }
        .gds-card:hover { transform:translateY(-3px)!important; border-color:rgba(255,255,255,0.28)!important; background-color:rgba(255,255,255,0.07)!important; }

        @media (prefers-reduced-motion:reduce) {
          .gds-hidden,.gds-card { opacity:1!important; transform:none!important; animation:none!important; }
          .gds-visible { animation:none!important; opacity:1!important; }
          .gds-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Who you speak with"
        className="w-full py-16 md:py-20"
        style={{ background: "#12143a" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`gds-hidden ${headIn ? "gds-visible" : ""} mb-9`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#a5b4fc" }}>
              Who You Speak With
            </p>
            <h2 className="font-bold leading-[1.15] tracking-tight text-white max-w-[720px]" style={{ fontSize: "clamp(24px,3vw,32px)" }}>
              A product-trained Sema specialist — routed to fit your need.
            </h2>
          </div>

          {/* ── Image + routing cards ── */}
          <div ref={gridRef} className={`grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-stretch ${gridIn ? "gds-grid-in" : ""}`}>

            {/* Photo */}
            <div className="gds-card rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              {SPECIALIST_IMAGE_URL ? (
                <img src={SPECIALIST_IMAGE_URL} alt="Sema specialist meeting with a team" className="w-full h-full object-cover block" />
              ) : (
                <div
                  className="w-full h-full min-h-[280px] flex items-center justify-center text-[13px]"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#8b8fc7" }}
                >
                  Add SPECIALIST_IMAGE_URL to display the photo
                </div>
              )}
            </div>

            {/* Routing cards */}
            <div className="flex flex-col gap-4">
              {routes.map((route) => (
                <div
                  key={route.title}
                  className="gds-card rounded-xl px-6 py-5"
                  style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)" }}
                >
                  <p className="text-[15px] font-bold text-white mb-1.5 leading-snug">
                    {route.title}
                  </p>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "#b7bbe8" }}>
                    {route.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
