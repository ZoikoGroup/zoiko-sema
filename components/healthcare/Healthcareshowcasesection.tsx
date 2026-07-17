"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
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

const CHECKS = [
  "KPI row: open handoffs, reviews due, AI drafts, policy coverage, integration health",
  "Coordination queue with workflow type, owner, status, acknowledgement, and privacy classification",
  "Policy panel: classification, AI use, recording, retention, export, and workspace policy source",
  "Evidence panel: decisions, source links, reviewer, corrections, and export readiness",
];

export function HealthcareShowcaseSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView<HTMLUListElement>(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes hsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hsFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .hs-hidden   { opacity: 0; transform: translateY(28px); }
        .hs-visible  { animation: hsFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hs-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .hs-visible-x { animation: hsFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .hs-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .hs-btn-primary:hover { transform: translateY(-2px); background-color: #3B78F0; box-shadow: 0 12px 28px rgba(47,107,235,0.4); }
        .hs-btn-primary:active { transform: translateY(0); }

        .hs-link-arrow { transition: transform .25s ease; }
        .hs-link:hover .hs-link-arrow { transform: translateX(4px); }

        .hs-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .hs-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(16,24,40,0.28); }

        @media (prefers-reduced-motion: reduce) {
          .hs-hidden, .hs-visible, .hs-hidden-x, .hs-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .hs-btn-primary:hover, .hs-image:hover { transform: none !important; }
          .hs-link:hover .hs-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Healthcare coordination hub product showcase"
        className="w-full bg-white py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy + checklist + CTAs */}
          <div className="max-w-xl">
            <p
              ref={eyebrowRef}
              className={`hs-hidden ${eyebrowIn ? "hs-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Product showcase
            </p>

            <h2
              ref={headRef}
              className={`hs-hidden ${headIn ? "hs-visible" : ""} mb-4 text-[clamp(28px,4.2vw,40px)] font-bold leading-[1.12] tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              One governed workspace. Every stakeholder. Full context.
            </h2>

            <p
              ref={subRef}
              className={`hs-hidden ${subIn ? "hs-visible" : ""} mb-6 max-w-[460px] text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              The Healthcare Coordination Hub surfaces handoff queues, policy
              coverage, guest access reviews, AI draft statuses, integration
              health, and evidence export readiness — in a single view.
            </p>

            <ul ref={listRef} className="mb-8 flex flex-col gap-3">
              {CHECKS.map((item, i) => (
                <li
                  key={item}
                  className={`hs-hidden ${listIn ? "hs-visible" : ""} flex items-start gap-2.5`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <FiCheckCircle
                    className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#2F6BEB] dark:text-[#6B8AF5]"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] leading-[1.5] text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              ref={ctaRef}
              className={`hs-hidden ${ctaIn ? "hs-visible" : ""} flex flex-col items-stretch gap-3 sm:flex-row sm:items-center`}
              style={{ animationDelay: "0.5s" }}
            >
            <Link href="/get-a-demo">
              <button
                type="button"
                className="hs-btn-primary rounded-lg bg-[#2F6BEB] px-6 py-3 text-[14px] font-semibold text-white"
              >
                Get a demo
              </button>
              </Link>
              <Link href="#">
              <button
                type="button"
                className="hs-link inline-flex items-center justify-center gap-1.5 px-2 py-3 text-[14px] font-semibold text-[#2F6BEB] dark:text-[#6B8AF5]"
              >
                Explore Admin Console
                <FiArrowRight className="hs-link-arrow h-4 w-4" aria-hidden="true" />
              </button>
                </Link>
            </div>
          </div>

          {/* RIGHT — showcase image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`hs-hidden-x ${imgIn ? "hs-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            
            <img
              src="/healthcare/healthcare-showcase.png"
              alt="Zoiko Sema Admin Console policy panel shown above a healthcare coordination meeting"
              loading="lazy"
              className="hs-image ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareShowcaseSection;