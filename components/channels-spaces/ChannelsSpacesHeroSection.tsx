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

export default function ChannelsSpacesHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: footRef, inView: footIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes csFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cs-hidden  { opacity: 0; transform: translateY(28px); }
        .cs-visible { animation: csFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .cs-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .cs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px color-mix(in srgb, var(--brand) 35%, transparent);
        }
        .cs-btn-primary:active { transform: translateY(0); }

        .cs-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .cs-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background-color: #f8f9ff;
        }
        .cs-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .cs-hidden, .cs-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cs-btn-primary:hover, .cs-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Channels and spaces hero"
        className="w-full py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #EEF1FF 0%, #F5F7FF 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cs-hidden ${badgeIn ? "cs-visible" : ""} inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
              Channels &amp; Spaces
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headRef}
            className={`cs-hidden ${headIn ? "cs-visible" : ""} text-[clamp(30px,5vw,48px)] font-bold leading-[1.12] tracking-tight text-gray-900 mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            Organized conversations. Smarter collaboration.
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`cs-hidden ${subIn ? "cs-visible" : ""} mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500 mb-9`}
            style={{ animationDelay: "0.16s" }}
          >
            Create structured workspaces, spaces, channels, threads, shared
            files, decisions, and AI-searchable context for teams that need
            communication to stay clear, accountable, and governed.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`cs-hidden ${ctaIn ? "cs-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-8`}
            style={{ animationDelay: "0.24s" }}
          >
            <button className="cs-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white bg-brand hover:bg-brand-dark">
              Start free
            </button>
            <button className="cs-btn-secondary rounded-full px-7 py-3 text-[14px] font-semibold text-gray-900 bg-white shadow-sm">
              Get a demo
            </button>
          </div>

          {/* Footnote */}
          <p
            ref={footRef}
            className={`cs-hidden ${footIn ? "cs-visible" : ""} text-[12.5px] text-gray-400`}
            style={{ animationDelay: "0.32s" }}
          >
            Built for individuals, teams, businesses, and enterprise
            workspaces.
          </p>
        </div>
      </section>
    </>
  );
}