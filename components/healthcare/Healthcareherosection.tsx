"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
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

const CHIPS = [
  "Role-based access",
  "Reviewed AI",
  "External partner controls",
  "Retention & audit",
  "Sales-assisted contracting",
];

export function HealthcareHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.25);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.25);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.25);
  const { ref: chipRef, inView: chipIn } = useInView(0.25);
  const { ref: noteRef, inView: noteIn } = useInView<HTMLParagraphElement>(0.25);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }

        /* Reveal animation lives on the CONTAINER only */
.hc-hidden  { opacity: 0; transform: translateY(28px); }
.hc-visible { animation: hcFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

/* Button hovers — transform + colour, no opacity, no !important, no force-color-adjust */
.hc-btn-primary   { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
.hc-btn-primary:hover  { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(47,107,235,0.5); }

.hc-btn-secondary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
.hc-btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.3); }

.hc-link-arrow { transition: transform .25s ease; }
.hc-link:hover .hc-link-arrow { transform: translateX(4px); }

        .hc-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .hc-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .hc-hidden, .hc-visible, .hc-hidden-x, .hc-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .hc-btn-primary:hover, .hc-btn-secondary:hover, .hc-image:hover { transform: none !important; }
          .hc-link:hover .hc-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Healthcare — coordinate sensitive work with clarity and control"
        className="relative w-full overflow-hidden bg-[#0D0B24] py-8 sm:py-10 lg:py-14"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(47,107,235,0.28) 0%, rgba(47,107,235,0) 70%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div
              ref={badgeRef}
              className={`hc-hidden ${badgeIn ? "hc-visible" : ""} mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B8AF5]`}
            >
              Healthcare · Solutions by Industry
            </div>

            <h1
              ref={headRef}
              className={`hc-hidden ${headIn ? "hc-visible" : ""} mb-5 text-[clamp(34px,5.2vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Coordinate sensitive healthcare work with clarity and control.
            </h1>

            <p
              ref={subRef}
              className={`hc-hidden ${subIn ? "hc-visible" : ""} mb-8 max-w-[500px] text-[15px] leading-[1.75] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Zoiko Sema brings messages, meetings, handoffs, files, decisions,
              and follow-up into governed workspaces with role-based access,
              reviewed AI, retention, and audit visibility.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`hc-hidden ${ctaIn ? "hc-visible" : ""} flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
              style={{ animationDelay: "0.24s" }}
            >
              <Link href="/get-a-demo" className="w-full sm:w-auto">
                <button
                  type="button"
                  className=" w-full rounded-full bg-[#2F6BEB] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#3B78F0]"
                >
                  Get a demo
                </button>
              </Link>

              <Link href="/contact-sales" className="w-full sm:w-auto">
                <button
                  type="button"
                  className=" w-full rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-[#171436] hover:bg-gray-100"
                >
                  Talk to sales
                </button>
              </Link>

              <Link href="/trust-center">
                <button
                  type="button"
                  className="hc-link inline-flex items-center justify-center gap-1.5 px-2 py-3 text-[14px] font-semibold text-[#6B8AF5] hover:text-white"
                >
                  Visit Trust Center
                  <FiArrowRight className="hc-link-arrow h-4 w-4" aria-hidden="true" />
                </button>
              </Link>
            </div>

            {/* Tag chips */}
            <div
              ref={chipRef}
              className={`hc-hidden ${chipIn ? "hc-visible" : ""} mt-7 flex flex-wrap gap-2.5`}
              style={{ animationDelay: "0.32s" }}
            >
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-gray-300"
                >
                  <FiCheck className="h-3.5 w-3.5 text-[#6B8AF5]" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>

            {/* Fine print */}
            <p
              ref={noteRef}
              className={`hc-hidden ${noteIn ? "hc-visible" : ""} mt-7 max-w-[500px] text-[12px] leading-[1.6] text-gray-500`}
              style={{ animationDelay: "0.4s" }}
            >
              Designed to support privacy-conscious healthcare communication.
              Customer configuration, contracts, policies, notices, permissions,
              and applicable law determine lawful use.
            </p>
          </div>

          {/* RIGHT — hero image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`hc-hidden-x ${imgIn ? "hc-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* replace src with your exported artwork (PNG in /public/images/) */}
            <img
              src="/healthcare/healthcare-hero.png"
              alt="Zoiko Sema care coordination dashboard shown above a healthcare team meeting"
              loading="eager"
              className="hc-image ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareHeroSection;