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

const useCases = [
  {
    title: "Founder-led teams",
    desc: "Fast decisions, direct context, lightweight structure, AI recaps.",
    link:"/start-free",
    linkLabel: "Start free →",
  },
  {
    title: "Remote teams",
    desc: "Persistent channels, async updates, searchable history, meeting handoff.",
    link:"/start-free",
    linkLabel: "Start free →",
  },
  {
    title: "Customer support",
    desc: "Client spaces, escalation threads, files, audit trail, shared docs.",
    link:"/get-a-demo",
    linkLabel: "Get a demo →",
  },
  {
    title: "Operations teams",
    desc: "Announcements, follow-up actions, workforce context, policy visibility.",
    link:"/get-a-demo",
    linkLabel: "Get a demo →",
  },
  {
    title: "Enterprise organizations",
    desc: "SSO, retention, compliance exports, role-based controls, ZoikoTime integration.",
    link:"/contact",
    linkLabel: "Talk to sales →",
  },
];

export default function MessagingUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes mucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .muc-hidden  { opacity: 0; transform: translateY(28px); }
        .muc-visible { animation: mucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .muc-card { opacity: 0; transform: translateY(22px); }
        .muc-grid.muc-visible .muc-card {
          animation: mucFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .muc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .muc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .muc-link {
          transition: transform .2s ease, color .2s ease;
        }
        .muc-link:hover {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .muc-hidden, .muc-visible, .muc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .muc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10">
          
          {/* Badge Label Block */}
          <div
            ref={badgeRef}
            className={`muc-hidden ${badgeIn ? "muc-visible" : ""} flex justify-center mb-3.5`}
          >
            <span className="text-center text-blue-600 text-xs font-bold tracking-widest uppercase select-none">
              USE CASES
            </span>
          </div>

          {/* Core Feature Heading */}
          <div
            ref={headRef}
            className={`muc-hidden ${headIn ? "muc-visible" : ""} text-center mb-14 sm:mb-16`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold leading-[1.25] tracking-tight text-slate-900 max-w-md mx-auto">
              Built for how teams actually communicate.
            </h2>
          </div>

          {/* 3x2 Grid Responsive Card Container */}
          <div
            ref={gridRef}
            className={`muc-grid ${gridIn ? "muc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 w-full`}
          >
            {useCases.map((u, i) => {
              // Base class settings
              let cardClasses = "w-full min-h-[160px] muc-card lg:col-span-2";
              
              // Apply column-start only to the 4th element (index 3) to center the second row
              if (i === 3) {
                cardClasses += " lg:col-start-2";
              }

              return (
                <div
                  key={i}
                  className={cardClasses}
                  style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                >
                  <div className="muc-card-inner h-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between items-start">
                    <div className="w-full">
                      <h3 className="text-sm font-bold text-slate-900 mb-2 select-none">
                        {u.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-5 mb-5">
                        {u.desc}
                      </p>
                    </div>
                    
                    <a
                      href={u.link}
                      className="muc-link inline-block text-blue-600 text-xs font-bold transition-colors duration-150 hover:text-blue-700"
                    >
                      {u.linkLabel}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}