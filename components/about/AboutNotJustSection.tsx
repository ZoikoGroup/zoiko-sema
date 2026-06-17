"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.12) {
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

const modules = [
  "Secure messaging",  "Audio calls",       "Video meetings",    "AI summaries",
  "Decision extraction","Action items",     "Searchable memory", "Workspace admin",
  "Role-based access", "Retention controls","Compliance exports", "ZoikoTime route",
];

export default function AboutNotJustSection() {
  const { ref: headRef,   inView: headIn   } = useInView(0.2);
  const { ref: isntRef,   inView: isntIn   } = useInView(0.15);
  const { ref: isRef,     inView: isIn     } = useInView(0.15);
  const { ref: modulesRef,inView: modulesIn} = useInView(0.08);

  // stagger module pills
  const [pillActive, setPillActive] = useState(-1);
  useEffect(() => {
    if (!modulesIn) return;
    modules.forEach((_, i) => {
      setTimeout(() => setPillActive(i), i * 60);
    });
  }, [modulesIn]);

  // strikethrough draw animation trigger
  const [strikeOn, setStrikeOn] = useState(false);
  useEffect(() => {
    if (isntIn) setTimeout(() => setStrikeOn(true), 300);
  }, [isntIn]);

  return (
    <>
      <style>{`
        @keyframes njFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .nj-hidden  { opacity:0; transform:translateY(26px); }
        .nj-visible { animation: njFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* strikethrough line draw */
        .nj-strike {
          position: relative;
          display: inline;
        }
        .nj-strike::after {
          content: "";
          position: absolute;
          left: 0; right: 0;
          top: 52%;
          height: 2.5px;
          background: #dc2626;
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform .7s cubic-bezier(.22,1,.36,1);
          border-radius: 2px;
        }
        .nj-strike.on::after { transform: scaleX(1); }

        /* pill entrance */
        @keyframes njPillIn {
          from { opacity:0; transform:scale(.92) translateY(6px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        .nj-pill { opacity:0; }
        .nj-pill.on { animation: njPillIn .3s ease forwards; }

        /* pill hover */
        .nj-pill-item { transition: background .2s ease, transform .2s ease, box-shadow .2s ease; }
        .nj-pill-item:hover {
          background: #e8edff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(71,71,135,0.1);
        }

        /* "what sema isn't" pill bounce on enter */
        @keyframes njBadgePop {
          0%   { opacity:0; transform:scale(.85); }
          65%  { transform:scale(1.06); }
          100% { opacity:1; transform:scale(1); }
        }
        .nj-badge-isnt { opacity:0; }
        .nj-badge-isnt.on { animation: njBadgePop .45s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes njBadgePopDark {
          0%   { opacity:0; transform:scale(.85); }
          65%  { transform:scale(1.06); }
          100% { opacity:1; transform:scale(1); }
        }
        .nj-badge-is { opacity:0; }
        .nj-badge-is.on { animation: njBadgePopDark .45s cubic-bezier(.22,1,.36,1) .1s forwards; }

        @media (prefers-reduced-motion:reduce) {
          .nj-hidden,.nj-pill,.nj-badge-isnt,.nj-badge-is { opacity:1!important; transform:none!important; animation:none!important; }
          .nj-visible { animation:none!important; opacity:1!important; }
          .nj-strike::after { transition:none; transform:scaleX(1); }
        }
      `}</style>

      <section
        aria-label="Not just chat. Not just meetings."
        className="w-full py-20 md:py-28"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-center">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`nj-hidden ${headIn ? "nj-visible" : ""} text-center mb-12`}
          >
            <h2 className="text-[clamp(24px,3.8vw,35px)] font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
              Not just chat. Not just meetings. Not just AI notes
            </h2>
            <p className="mx-auto max-w-[540px] text-[15px] leading-[1.8] text-gray-500">
              Sema brings these surfaces together as one communication layer where everyday
              conversations become context the whole organization can use.
            </p>
          </div>

          {/* ── WHAT SEMA ISN'T block ── */}
          <div
            ref={isntRef}
            className="w-full flex flex-col items-center mb-10"
          >
            {/* Label pill — pink/red */}
            <span
              className={`nj-badge-isnt ${isntIn ? "on" : ""} inline-flex items-center px-5 py-2 rounded-full mb-6 text-[11.5px] font-semibold uppercase tracking-[0.13em]`}
              style={{ background: "#E25C5C1A", color: "#BB3333" }}
            >
              What Sema Isn&apos;t
            </span>

            {/* Strikethrough text */}
            <p
              className={`nj-hidden ${isntIn ? "nj-visible" : ""} text-[clamp(18px,2.4vw,27px)] font-semibold text-center leading-snug`}
              style={{ color: "#dc2626", animationDelay: "0.1s" }}
            >
              <span className={`nj-strike ${strikeOn ? "on" : ""}`}>
                A new chat app. A meetings tool. A standalone AI notetaker.
              </span>
            </p>
          </div>

          {/* ── WHAT SEMA IS block ── */}
          <div
            ref={isRef}
            className="w-full flex flex-col items-center mb-12"
          >
            {/* Label pill — dark */}
            <span
              className={`nj-badge-is ${isIn ? "on" : ""} inline-flex items-center px-5 py-2 rounded-full mb-7 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-white`}
              style={{ background: "#474889" }}
            >
              What Sema Is
            </span>

            {/* Statement */}
            <p
              className={`nj-hidden ${isIn ? "nj-visible" : ""} text-[clamp(19px,2.6vw,27px)] font-Regular text-center leading-[1.35] max-w-[780px]`}
              style={{ color: "#3730a3", animationDelay: "0.12s" }}
            >
              The communication layer where conversations become usable context — for individuals,
              teams and businesses alike.
            </p>
          </div>

          {/* ── Core modules card ── */}
          <div
            ref={modulesRef}
            className={`nj-hidden ${modulesIn ? "nj-visible" : ""} w-full rounded-2xl bg-white px-8 py-8 md:px-10 md:py-10`}
            style={{ animationDelay: "0.08s", boxShadow: "0 2px 24px rgba(71,71,135,0.07)" }}
          >
            <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gray-400 mb-7">
              Core Modules
            </p>

            {/* 4-column pill grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {modules.map((label, i) => (
                <div
                  key={i}
                  className={`nj-pill nj-pill-item ${i <= pillActive ? "on" : ""} flex items-center gap-2.5 rounded-xl px-4 py-3`}
                  style={{
                    background: "#F3F5FF",
                    animationDelay: `${i * 0.04}s`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#6366f1" }}
                  />
                  <span className="text-[13.5px] font-medium text-gray-700 leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}