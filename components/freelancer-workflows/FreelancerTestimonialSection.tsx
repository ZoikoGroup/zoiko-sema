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

const highlights = [
  {
    title: "Faster follow-up prep",
    desc: "Recaps and drafts ready right after the call",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fewer lost action items",
    desc: "Tasks captured straight from conversations",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Organized client history",
    desc: "Decisions, files, and approvals in one place",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function FreelancerTestimonialSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes fwtsFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwts-hidden  { opacity:0; transform:translateY(28px); }
        .fwts-visible { animation: fwtsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwts-item { opacity:0; transform:translateX(20px); }
        .fwts-item.active { animation: fwtsSlideIn .5s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes fwtsSlideIn {
          from { opacity:0; transform:translateX(20px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .fwts-item {
          transition: transform .3s ease, background-color .3s ease;
        }
        .fwts-item:hover {
          transform: translateX(-4px);
          background-color: rgba(255,255,255,0.22);
        }
        .fwts-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .fwts-item:hover .fwts-icon-box {
          transform: scale(1.08);
          background-color: rgba(255,255,255,0.28);
        }

        .fwts-avatar {
          transition: transform .3s ease;
        }
        .fwts-avatar-wrap:hover .fwts-avatar {
          transform: scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwts-hidden, .fwts-item { opacity:1!important; transform:none!important; animation:none!important; }
          .fwts-visible { animation:none!important; opacity:1!important; }
          .fwts-item:hover, .fwts-avatar-wrap:hover .fwts-avatar { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="What client-service pros say"
        className="w-full py-16 md:py-20"
        style={{ background: "#4A3FE0" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">

            {/* LEFT — Quote */}
            <div ref={leftRef} className={`fwts-hidden ${leftIn ? "fwts-visible" : ""}`}>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-6"
                style={{ color: "#C3C1F7" }}
              >
                What client-service pros say
              </p>

              <blockquote className="text-[clamp(19px,2.4vw,26px)] font-bold leading-[1.4] text-white mb-8">
                <span className="text-[1.3em] leading-none align-top" style={{ color: "#C3C1F7" }}>
                  &ldquo;
                </span>
                My client follow-ups used to live in five different apps. Now
                every call, file, and approval sits with the right client —
                I prep updates in minutes and nothing falls through the
                cracks.
              </blockquote>

              <div className="fwts-avatar-wrap flex items-center gap-3">
                <div className="fwts-avatar w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-white/20">
                  <img
                    src="" /* 👈 add avatar image URL here */
                    alt="Maya Ellison"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white">Maya Ellison</p>
                  <p className="text-[12.5px]" style={{ color: "#C3C1F7" }}>
                    Independent brand consultant
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Highlights */}
            <div ref={rightRef} className="flex flex-col gap-3.5">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`fwts-item ${rightIn ? "active" : ""} flex items-center gap-3.5 rounded-2xl px-5 py-4`}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    animationDelay: `${i * 110}ms`,
                  }}
                >
                  <span
                    className="fwts-icon-box w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    {h.icon}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-0.5">{h.title}</h3>
                    <p className="text-[12.5px]" style={{ color: "#D6D4FA" }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}