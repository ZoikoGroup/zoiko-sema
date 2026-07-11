"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

const steps = [
  {
    title: "Enhance your productivity",
    desc: "ZoikoTime helps you plan your day — chapters, transcripts, and meeting summaries in one place.",
    image: "/video-meeting/Enhance productivity.png",
  },
  {
    title: "Connect your team",
    desc: "Zoiko Sema Workspace brings chat, channels, and files into every meeting you host.",
    image: "/video-meeting/Connect your team.png",
  },
  {
    title: "Next-generation docs",
    desc: "Generate project plans and recaps from meeting summaries with Zoiko Sema Docs.",
    image: "/video-meeting/Next-gen docs.png",
  },
];

export default function VideoMeetingsCoreCapabilitiesSection() {
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes swFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sw-hidden  { opacity: 0; transform: translateY(30px); }
        .sw-visible { animation: swFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .sw-card { opacity: 0; transform: translateY(24px); }
        .sw-grid.sw-visible .sw-card {
          animation: swFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sw-hover-effect {
          transition: transform .35s cubic-bezier(.25, 1, .5, 1), box-shadow .35s ease, border-color .35s ease;
        }
        .sw-hover-effect:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 22px 40px color-mix(in srgb, var(--brand, #3457e8) 10%, transparent);
          border-color: color-mix(in srgb, var(--brand, #3457e8) 25%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .sw-hidden, .sw-visible, .sw-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sw-hover-effect:hover { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-violet-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          
          {/* Header */}
          <div
            ref={headerRef}
            className={`sw-hidden ${headerIn ? "sw-visible" : ""} text-center mb-12 md:mb-16`}
          >
            <h2 className="text-[clamp(26px,4.5vw,36px)] font-extrabold leading-tight tracking-tight text-slate-900">
              Simplify your workday
            </h2>
          </div>

          {/* Cards Grid Container */}
          <div
            ref={cardsRef}
            className={`sw-grid ${cardsIn ? "sw-visible" : ""} grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="sw-card"
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <div className="sw-hover-effect h-full bg-white rounded-[20px] border border-violet-100 overflow-hidden flex flex-col shadow-sm">
                  
                  {/* Image Container */}
                  <div className="w-full aspect-[354/200] overflow-hidden bg-slate-100">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      src={step.image}
                      alt={step.title}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 font-normal">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}