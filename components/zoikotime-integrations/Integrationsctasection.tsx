"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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

export function IntegrationsCtaSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView<HTMLButtonElement>(0.4);

  return (
    <>
      <style>{`
        @keyframes ictFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ict-hidden  { opacity: 0; transform: translateY(24px); }
        .ict-visible { animation: ictFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ict-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .ict-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(47,107,235,0.5); }
        .ict-btn-primary:active { transform: translateY(0); }

        .ict-btn-secondary { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .ict-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.28); }
        .ict-btn-secondary:active { transform: translateY(0); }

        .ict-link-arrow { transition: transform .25s ease; }
        .ict-link:hover .ict-link-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .ict-hidden, .ict-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ict-btn-primary:hover, .ict-btn-secondary:hover { transform: none !important; }
          .ict-link:hover .ict-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Get started — connect your systems without giving up control"
        className="relative w-full overflow-hidden bg-[#130F2E] py-10 sm:py-14"
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[560px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,240,0.25) 0%, rgba(124,92,240,0) 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[560px] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(47,107,235,0.22) 0%, rgba(47,107,235,0) 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-3xl px-6 text-center sm:px-8">
          <p
            ref={eyebrowRef}
            className={`ict-hidden ${eyebrowIn ? "ict-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#8C95F2]`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8C95F2]" />
            Get Started
          </p>

          <h2
            ref={headRef}
            className={`ict-hidden ${headIn ? "ict-visible" : ""} text-[clamp(28px,4.6vw,44px)] font-extrabold leading-[1.15] tracking-tight text-white`}
            style={{ animationDelay: "0.08s" }}
          >
            Connect your systems without giving up control.
          </h2>

          <p
            ref={subRef}
            className={`ict-hidden ${subIn ? "ict-visible" : ""} mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-gray-400`}
            style={{ animationDelay: "0.16s" }}
          >
            Request a guided demo, start free, or talk to sales about custom
            integration scope.
          </p>

          <div
            ref={ctaRef}
            className={`ict-hidden ${ctaIn ? "ict-visible" : ""} mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center`}
            style={{ animationDelay: "0.24s" }}
          >
            <Link href="/get-a-demo">
            <button
              type="button"
              className="ict-btn-primary rounded-full bg-[#2F6BEB] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#3B78F0]"
            >
              Request a demo
            </button>
            </Link>
            <Link href="/start-free">
            <button
              type="button"
              className="ict-btn-secondary rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-[14px] font-semibold text-white"
            >
              Start free
            </button>
            </Link>
          </div>

          <div className="mt-5">
           <Link href="/contact-sales">
            <button
              ref={linkRef}
              type="button"
              className={`ict-hidden ict-link ${linkIn ? "ict-visible" : ""} inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8C95F2] hover:text-white`}
              style={{ animationDelay: "0.32s" }}
            >
              Contact sales
              <FiArrowRight className="ict-link-arrow h-4 w-4" aria-hidden="true" />
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default IntegrationsCtaSection;