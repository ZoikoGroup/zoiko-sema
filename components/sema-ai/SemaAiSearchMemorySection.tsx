"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const BRAND = "#3457E8";

// TODO: replace with your actual photo path, e.g. "/images/sema-ai/search-and-memory.jpg"
const PHOTO_SRC = "/Images/search-and-memory.png";

export default function SemaAiSearchMemorySection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes sasmFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sasmFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sasm-hidden  { opacity: 0; transform: translateY(24px); }
        .sasm-visible { animation: sasmFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sasm-image-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .sasm-image-visible { animation: sasmFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .sasm-link { transition: gap .2s ease; }
        .sasm-link .sasm-arrow { transition: transform .2s ease; display: inline-block; }
        .sasm-link:hover .sasm-arrow { transform: translateX(3px); }

        .sasm-image-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .sasm-image-wrap:hover { transform: translateY(-6px); }
        .sasm-image-wrap img { transition: box-shadow .3s ease; }
        .sasm-image-wrap:hover img {
          box-shadow: 0 24px 48px -20px rgba(15,23,42,0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .sasm-hidden, .sasm-image-hidden { opacity: 1 !important; transform: none !important; }
          .sasm-visible, .sasm-image-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Search and memory"
        className="w-full py-16 md:py-20"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT — content */}
            <div>
              <p
                ref={eyebrowRef}
                className={`sasm-hidden ${eyebrowIn ? "sasm-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
                style={{ color: BRAND }}
              >
                Search and Memory
              </p>
              <h2
                ref={headingRef}
                className={`sasm-hidden ${headingIn ? "sasm-visible" : ""} text-[clamp(22px,3.2vw,30px)] font-bold leading-[1.3] tracking-tight text-gray-900 mb-4 max-w-[440px]`}
                style={{ animationDelay: "0.05s" }}
              >
                Ask a question. Get an answer with sources attached.
              </h2>
              <p
                ref={copyRef}
                className={`sasm-hidden ${copyIn ? "sasm-visible" : ""} text-[13.5px] leading-relaxed text-gray-500 mb-5 max-w-[440px]`}
                style={{ animationDelay: "0.1s" }}
              >
                Natural-language questions return concise answers with source
                cards, dates, and related content — shown only where the user
                has permission, and always honoring retention policy and
                access boundaries.
              </p>
              <div
                ref={linkRef}
                className={`sasm-hidden ${linkIn ? "sasm-visible" : ""}`}
                style={{ animationDelay: "0.15s" }}
              >
                <a
                  href="/search"
                  className="sasm-link inline-flex items-center gap-1.5 text-[13.5px] font-semibold"
                  style={{ color: BRAND }}
                >
                  Explore Search
                  <span className="sasm-arrow">→</span>
                </a>
              </div>
            </div>

            {/* RIGHT — contained rounded image */}
            <div
              ref={imageRef}
              className={`sasm-image-hidden ${imageIn ? "sasm-image-visible" : ""}`}
            >
              <div className="sasm-image-wrap">
                <img
                  src={PHOTO_SRC}
                  alt="Team discussing search results with source context"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}