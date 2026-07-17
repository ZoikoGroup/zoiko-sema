"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

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

const CHECKS = [
  "Unified Communication Feed",
  "AI-Powered Recap & Drafts",
  "Real-time Review Status",
];

export function FinancialControlCenterSection() {
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView<HTMLUListElement>(0.2);
  const { ref: imgRef, inView: imgIn } = useInView<HTMLDivElement>(0.15);

  return (
    <>
      <style>{`
        @keyframes fccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fccFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .fcc-hidden   { opacity: 0; transform: translateY(28px); }
        .fcc-visible  { animation: fccFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .fcc-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .fcc-visible-x { animation: fccFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .fcc-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .fcc-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(16,24,40,0.28); }

        @media (prefers-reduced-motion: reduce) {
          .fcc-hidden, .fcc-visible, .fcc-hidden-x, .fcc-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .fcc-image:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Financial control center"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        {/* Narrow text column + wide image column to match the design proportions */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12">
          {/* LEFT — copy + checklist */}
          <div>
            <h2
              ref={headRef}
              className={`fcc-hidden ${headIn ? "fcc-visible" : ""} mb-4 text-[clamp(24px,3.4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 dark:text-white`}
            >
              Financial Control Center
            </h2>

            <p
              ref={subRef}
              className={`fcc-hidden ${subIn ? "fcc-visible" : ""} mb-7 text-[15px] leading-[1.75] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.08s" }}
            >
              A single pane of glass for all high-value communications. Monitor
              feeds, approve AI-generated summaries, and manage the review queue
              from one unified dashboard.
            </p>

            <ul ref={listRef} className="flex flex-col gap-3.5">
              {CHECKS.map((item, i) => (
                <li
                  key={item}
                  className={`fcc-hidden ${listIn ? "fcc-visible" : ""} flex items-center gap-3`}
                  style={{ animationDelay: `${0.12 + i * 0.09}s` }}
                >
                  <FiCheckCircle
                    className="h-5 w-5 flex-shrink-0 text-[#2F6BEB] dark:text-[#6B8AF5]"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] font-medium text-gray-800 dark:text-gray-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — dashboard image (fills the wider column) */}
          <div
            ref={imgRef}
            className={`fcc-hidden-x ${imgIn ? "fcc-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* 👇 replace src with your Figma export (PNG in /public/images/) */}
            <img
              src="/financial-services/financial-control-center.jpg"
              alt="Zoiko Sema advisor workspace dashboard shown on a monitor, unifying communication feeds and review queues"
              loading="lazy"
              className="fcc-image w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialControlCenterSection;