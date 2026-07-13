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

export default function SearchFinalCtaSection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes sfcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sfc-hidden  { opacity: 0; transform: translateY(28px); }
        .sfc-visible { animation: sfcFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .sfc-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .sfc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }
        .sfc-btn-outline {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .sfc-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .sfc-link {
          transition: gap .2s ease, opacity .2s ease;
        }
        .sfc-link:hover {
          gap: 7px;
          opacity: 0.85;
        }

        @media (prefers-reduced-motion: reduce) {
          .sfc-hidden, .sfc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sfc-btn-primary:hover, .sfc-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Get started"
        className="w-full bg-white py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div
            ref={cardRef}
            className={`sfc-hidden ${cardIn ? "sfc-visible" : ""} relative overflow-hidden rounded-[2rem] px-6 sm:px-10 py-12 sm:py-16 text-center`}
            style={{
              background:
                "radial-gradient(140% 160% at 18% 15%, rgba(75,71,229,0.55) 0%, rgba(15,15,42,0.0) 55%), linear-gradient(135deg, #0F0F2A 0%, #12122E 55%, #0D0B22 100%)",
            }}
          >
            <h2 className="text-[clamp(20px,3.4vw,30px)] font-bold leading-[1.25] tracking-tight text-white max-w-[820px] mx-auto mb-7">
              Find what matters. Understand the context. Move the work forward.
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a
                href="/sema/start-free"
                className="sfc-btn-primary inline-flex items-center justify-center rounded-full bg-white text-gray-900 text-[13.5px] font-semibold px-6 py-2.5"
              >
                Start Free
              </a>
              <a
                href="/sema/contact-sales"
                className="sfc-btn-outline inline-flex items-center justify-center rounded-full bg-transparent text-white text-[13.5px] font-semibold px-6 py-2.5 border border-white/25"
              >
                Contact Sales
              </a>
              <a
                href="/sema/ai"
                className="sfc-btn-outline inline-flex items-center justify-center rounded-full bg-transparent text-white text-[13.5px] font-semibold px-6 py-2.5 border border-white/25"
              >
                Explore Sema AI
              </a>
            </div>

            <a
              href="/trust-center"
              className="sfc-link inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white/70"
            >
              Visit Trust Center
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}