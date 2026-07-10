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

const features = [
  {
    title: "Meeting recap",
    desc: "Decisions, risks, client requests, timeline changes, and next steps.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Follow-up draft",
    desc: "A client-ready email or message you can edit before sending.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Task extraction",
    desc: "Suggested tasks with due dates, owners, and project links.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Status update",
    desc: "A short project status summary from recent messages, tasks, and files.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
];

export default function FreelancerAISection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes fwaFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwa-hidden  { opacity:0; transform:translateY(28px); }
        .fwa-visible { animation: fwaFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwa-item { opacity:0; transform:translateY(18px); }
        .fwa-item.active { animation: fwaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .fwa-item {
          transition: transform .25s ease;
        }
        .fwa-item:hover {
          transform: translateX(4px);
        }
        .fwa-icon-box {
          transition: background-color .3s ease, transform .3s ease;
        }
        .fwa-item:hover .fwa-icon-box {
          background-color: rgba(52,87,232,0.35);
          transform: scale(1.06);
        }

        .fwa-img-wrap {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .fwa-img-wrap:hover {
          transform: translateY(-4px) scale(1.008);
          box-shadow: 0 28px 56px rgba(0,0,0,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .fwa-hidden, .fwa-item { opacity:1!important; transform:none!important; animation:none!important; }
          .fwa-visible { animation:none!important; opacity:1!important; }
          .fwa-item:hover, .fwa-img-wrap:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="AI Productivity"
        className="w-full py-20 md:py-15"
        style={{ background: "#0A0E2C" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* LEFT — Copy */}
            <div ref={leftRef}>
              <div className={`fwa-hidden ${leftIn ? "fwa-visible" : ""}`}>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#8C9CFF" }}
                >
                  AI Productivity
                </p>
              </div>

              <div className={`fwa-hidden ${leftIn ? "fwa-visible" : ""}`} style={{ animationDelay: "80ms" }}>
                <h2 className="text-[clamp(26px,3.6vw,36px)] font-extrabold leading-[1.15] tracking-tight text-white mb-5 max-w-[480px]">
                  Turn client conversations into finished work
                </h2>
              </div>

              <div className={`fwa-hidden ${leftIn ? "fwa-visible" : ""}`} style={{ animationDelay: "150ms" }}>
                <p className="text-[14.5px] leading-[1.75] mb-9 max-w-[480px]" style={{ color: "#A7ACC9" }}>
                  AI recaps meetings, drafts client-ready follow-ups, and
                  suggests tasks — always under your control and clearly
                  marked before anything is shared.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    className={`fwa-item ${leftIn ? "active" : ""} flex items-start gap-3.5 cursor-default`}
                    style={{ animationDelay: `${220 + i * 90}ms` }}
                  >
                    <span
                      className="fwa-icon-box w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(52,87,232,0.20)", color: "#8C9CFF" }}
                    >
                      {f.icon}
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-white mb-1">{f.title}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: "#8A8FB0" }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Image */}
            <div
              ref={imgRef}
              className={`fwa-hidden ${imgIn ? "fwa-visible" : ""}`}
            >
              <div className="fwa-img-wrap rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/FreelancerAISection.webp" /* 👈 add your image URL here */
                  alt="Zoiko Sema AI dashboard on laptop during a client meeting"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}