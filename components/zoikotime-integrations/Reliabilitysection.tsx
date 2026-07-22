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

export function ReliabilitySection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const { ref: linkRef, inView: linkIn } = useInView<HTMLAnchorElement>(0.4);

  return (
    <>
      <style>{`
        @keyframes rlFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rlRise {
          from { opacity: 0; transform: translateY(40px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .rl-hidden  { opacity: 0; transform: translateY(28px); }
        .rl-visible { animation: rlFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .rl-hidden-r  { opacity: 0; transform: translateY(40px) scale(.99); }
        .rl-visible-r { animation: rlRise .85s cubic-bezier(.22,1,.36,1) forwards; }

        .rl-link-arrow { transition: transform .25s ease; }
        .rl-link:hover .rl-link-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .rl-hidden, .rl-visible, .rl-hidden-r, .rl-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rl-link:hover .rl-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Reliability — status, alerts, retries, and support"
        className="w-full bg-white py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`rl-hidden ${eyebrowIn ? "rl-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BEB] dark:bg-[#6B8AF5]" />
              Reliability
            </p>
            <h2
              ref={headRef}
              className={`rl-hidden ${headIn ? "rl-visible" : ""} text-[clamp(30px,4vw,44px)] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Status, alerts, retries, and support — no false current data.
            </h2>
          </div>

          {/* Wide image */}
          <div
            ref={imgRef}
            className={`rl-hidden-r ${imgIn ? "rl-visible-r" : ""} mt-10 overflow-hidden rounded-2xl`}
            style={{ animationDelay: "0.05s" }}
          >
            {/*  replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/zoikotime-integrations/reliability.png"
              alt="An operations specialist reviewing a status checklist in front of live monitoring dashboards"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/7] lg:aspect-[16/6]"
            />
          </div>

          {/* Link */}
          <div className="mt-8 text-center">
            <Link
              href="/status"
              ref={linkRef}
              className={`rl-hidden rl-link ${linkIn ? "rl-visible" : ""} inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              View System Status
              <FiArrowRight className="rl-link-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReliabilitySection;