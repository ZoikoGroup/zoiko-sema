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

export default function MessagingHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes mshFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .msh-hidden  { opacity: 0; transform: translateY(28px); }
        .msh-visible { animation: mshFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .msh-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .msh-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(59,71,222,0.28);
        }
        .msh-btn-outline {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .msh-btn-outline:hover {
          background-color: #F7F8FC;
          border-color: rgba(15,31,78,0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .msh-hidden, .msh-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .msh-btn-primary:hover, .msh-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Messaging hero"
        className="w-full py-20 sm:py-24 md:py-28"
        style={{
          background: "linear-gradient(180deg, #EEF1FB 0%, #F7F8FD 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`msh-hidden ${badgeIn ? "msh-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Messaging
              </span>
            </div>
          </div>

          {/* Heading + subheading */}
          <div
            ref={headRef}
            className={`msh-hidden ${headIn ? "msh-visible" : ""}`}
            style={{ animationDelay: "0.08s" }}
          >
            <h1 className="text-[clamp(28px,5vw,44px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-5">
              Messaging that turns conversations into action.
            </h1>
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-gray-500 max-w-[560px] mx-auto">
              Zoiko Sema brings direct messages, group chats, channels, files, AI summaries, search, and business governance into one structured communication platform.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`msh-hidden ${ctaIn ? "msh-visible" : ""} flex flex-wrap items-center justify-center gap-3 mt-9`}
            style={{ animationDelay: "0.14s" }}
          >
            <button className="msh-btn-primary rounded-full bg-[#3B47DE] text-white text-[14px] font-semibold px-7 py-3.5">
              Start free
            </button>
            <button className="msh-btn-outline rounded-full bg-white border border-gray-200 text-gray-900 text-[14px] font-semibold px-7 py-3.5">
              Get a demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}