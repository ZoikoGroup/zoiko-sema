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

export default function ContactHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: noteRef, inView: noteIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes chsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chs-hidden  { opacity: 0; transform: translateY(28px); }
        .chs-visible { animation: chsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .chs-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .chs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(75, 71, 229, 0.4);
        }
        .chs-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .chs-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .chs-hidden, .chs-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Contact Zoiko Sema"
        className="w-full py-16 sm:py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(110% 130% at 90% 10%, rgba(75,71,229,0.3) 0%, rgba(15,15,42,0) 55%), linear-gradient(135deg, #0D0B22 0%, #0F0E28 55%, #0D0B22 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left column */}
            <div>
              <div
                ref={badgeRef}
                className={`chs-hidden ${badgeIn ? "chs-visible" : ""} mb-5`}
              >
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8B8FE0]">
                  Company
                </span>
              </div>

              <div
                ref={headRef}
                className={`chs-hidden ${headIn ? "chs-visible" : ""}`}
                style={{ animationDelay: "0.06s" }}
              >
                <h1 className="text-[clamp(28px,4.4vw,42px)] font-bold leading-[1.15] tracking-tight mb-5">
                  <span className="text-white">Contact Zoiko Sema </span>
                  <span className="text-[#6C7CFF]">without getting sent to the wrong place.</span>
                </h1>
              </div>

              <div
                ref={bodyRef}
                className={`chs-hidden ${bodyIn ? "chs-visible" : ""}`}
                style={{ animationDelay: "0.12s" }}
              >
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/55 max-w-[520px] mb-8">
                  Choose the right path for sales, support, partnerships, press, legal, privacy, security, or enterprise deployment questions.
                </p>
              </div>

              <div
                ref={ctaRef}
                className={`chs-hidden ${ctaIn ? "chs-visible" : ""} flex flex-wrap items-center gap-3 mb-6`}
                style={{ animationDelay: "0.18s" }}
              >
                <a
                  href="/contact-sales"
                  className="chs-btn-primary inline-flex items-center justify-center rounded-full bg-[#4B47E5] text-white text-[13.5px] font-semibold px-6 py-3"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-support"
                  className="chs-btn-secondary inline-flex items-center justify-center rounded-full bg-white text-gray-900 text-[13.5px] font-semibold px-6 py-3"
                >
                  Get Support
                </a>
              </div>

              <div
                ref={noteRef}
                className={`chs-hidden ${noteIn ? "chs-visible" : ""} flex items-start gap-2`}
                style={{ animationDelay: "0.22s" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="text-[12px] text-white/40">
                  Your inquiry is routed to the appropriate team based on the topic you select.
                </p>
              </div>
            </div>

            {/* Right column - image */}
            <div
              ref={imgRef}
              className={`chs-hidden ${imgIn ? "chs-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="rounded-[1.75rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/contact-banner.webp"
                  alt="Person on a video call desk with connected routing paths to support team members"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}