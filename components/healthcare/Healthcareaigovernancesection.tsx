"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
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
  "Eligibility: plan, role, classification, meeting type, and sensitive-space exclusions evaluated before AI runs",
  "Participant notice where required by customer policy or applicable law",
  "Human review: source timestamps, edit/correction, approval, reopen, and version history",
  "Sensitive exclusions: behavioral health, reproductive health, legal, HR, and investigations",
  "Manual fallback: notes, decisions, and tasks available when AI is unavailable or disabled",
];

export function HealthcareAiGovernanceSection() {
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView<HTMLUListElement>(0.2);
  const { ref: linkRef, inView: linkIn } = useInView<HTMLAnchorElement>(0.3);

  return (
    <>
      <style>{`
        @keyframes haiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes haiFadeLeft {
          from { opacity: 0; transform: translateX(-36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .hai-hidden   { opacity: 0; transform: translateY(28px); }
        .hai-visible  { animation: haiFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hai-hidden-x  { opacity: 0; transform: translateX(-36px) translateY(12px); }
        .hai-visible-x { animation: haiFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards; }

        .hai-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .hai-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(0,0,0,0.55); }

        .hai-link-icon { transition: transform .25s ease; }
        .hai-link:hover .hai-link-icon { transform: translate(2px, -2px); }

        @media (prefers-reduced-motion: reduce) {
          .hai-hidden, .hai-visible, .hai-hidden-x, .hai-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .hai-image:hover { transform: none !important; }
          .hai-link:hover .hai-link-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="AI governance — reviewed drafts, not medical records"
        className="w-full bg-[#0D0B24] py-20 sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`hai-hidden-x ${imgIn ? "hai-visible-x" : ""} order-1 w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            
            <img
              src="/healthcare/healthcare-ai-governance.png"
              alt="AI Governance draft review queue shown on a tablet held by a gloved clinician"
              loading="lazy"
              className="hai-image w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* RIGHT — copy + checklist */}
          <div className="order-2 max-w-xl">
            <p
              ref={eyebrowRef}
              className={`hai-hidden ${eyebrowIn ? "hai-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#6B8AF5]`}
            >
              AI Governance
            </p>

            <h2
              ref={headRef}
              className={`hai-hidden ${headIn ? "hai-visible" : ""} mb-4 text-[clamp(28px,4.4vw,42px)] font-bold leading-[1.1] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              AI outputs are reviewed drafts — not medical records.
            </h2>

            <p
              ref={subRef}
              className={`hai-hidden ${subIn ? "hai-visible" : ""} mb-6 text-[15px] leading-[1.7] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Every AI summary begins as a draft with generation status, source
              coverage, and limitations visible. Named reviewers check source
              timestamps, add corrections, and approve — before any sharing in a
              governed space.
            </p>

            <ul ref={listRef} className="mb-7 flex flex-col gap-3">
              {CHECKS.map((item, i) => (
                <li
                  key={item}
                  className={`hai-hidden ${listIn ? "hai-visible" : ""} flex items-start gap-2.5`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <FiCheckCircle
                    className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#6B8AF5]"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] leading-[1.5] text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

              <a
                ref={linkRef}
                href="#"
                className={`hai-hidden hai-link ${linkIn ? "hai-visible" : ""} inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6B8AF5]`}
                style={{ animationDelay: "0.6s" }}
              >
              Read AI Use Policy
              <FiExternalLink className="hai-link-icon h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareAiGovernanceSection;