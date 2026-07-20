"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

const CHIPS = [
  "Sandbox",
  "Scopes & rate limits",
  "Signed webhooks",
  "Retries & dead-letter",
  "Versioning",
];

export function ApisWebhooksSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const { ref: chipsRef, inView: chipsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes apwFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes apwRise {
          from { opacity: 0; transform: translateY(40px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .apw-hidden  { opacity: 0; transform: translateY(28px); }
        .apw-visible { animation: apwFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .apw-hidden-r  { opacity: 0; transform: translateY(40px) scale(.99); }
        .apw-visible-r { animation: apwRise .85s cubic-bezier(.22,1,.36,1) forwards; }

        .apw-chip { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease; }
        .apw-chip:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(16,24,40,0.10); }

        @media (prefers-reduced-motion: reduce) {
          .apw-hidden, .apw-visible, .apw-hidden-r, .apw-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .apw-chip:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="APIs and webhooks — developer contracts"
        className="w-full bg-[#EFEFFB] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`apw-hidden ${eyebrowIn ? "apw-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BEB] dark:bg-[#6B8AF5]" />
              APIs and Webhooks
            </p>
            <h2
              ref={headRef}
              className={`apw-hidden ${headIn ? "apw-visible" : ""} text-[clamp(30px,4vw,44px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Developer contracts built for reliable operations.
            </h2>
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`apw-hidden-r ${imgIn ? "apw-visible-r" : ""} mt-12 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            {/* 👇 replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/zoikotime-integrations/apis-webhooks.png"
              alt="Developers reviewing API code and webhook logs on multiple monitors"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/7] lg:aspect-[16/6]"
            />
          </div>

          {/* Chips */}
          <div
            ref={chipsRef}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >
            {CHIPS.map((chip, i) => (
              <div
                key={chip}
                className={`apw-chip apw-hidden ${chipsIn ? "apw-visible" : ""} rounded-xl border border-gray-100 bg-white px-5 py-4 text-[14px] font-semibold text-gray-800 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:text-gray-100 dark:shadow-none`}
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ApisWebhooksSection;