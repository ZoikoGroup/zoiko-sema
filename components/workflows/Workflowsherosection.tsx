"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

const TAGS = [
  "Human checkpoints",
  "Permission-aware actions",
  "Visible run history",
  "Admin controls",
];

export function WorkflowsHeroSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.25);
  const { ref: tagRef, inView: tagIn } = useInView(0.25);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes wfFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wfFadeRight {
          from { opacity: 0; transform: translateX(36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .wf-hidden   { opacity: 0; transform: translateY(28px); }
        .wf-visible  { animation: wfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .wf-hidden-x  { opacity: 0; transform: translateX(36px) translateY(12px); }
        .wf-visible-x { animation: wfFadeRight .8s cubic-bezier(.22,1,.36,1) forwards; }

        .wf-btn-primary { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .wf-btn-primary:hover { transform: translateY(-2px); background-color: #5C68E0; box-shadow: 0 12px 28px rgba(79,91,213,0.5); }
        .wf-btn-primary:active { transform: translateY(0); }

        .wf-btn-secondary { transition: transform .25s ease, background-color .25s ease, border-color .25s ease; }
        .wf-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); }
        .wf-btn-secondary:active { transform: translateY(0); }

        .wf-link-arrow { transition: transform .25s ease; }
        .wf-link:hover .wf-link-arrow { transform: translateX(4px); }

        .wf-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .wf-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(0,0,0,0.6); }

        @media (prefers-reduced-motion: reduce) {
          .wf-hidden, .wf-visible, .wf-hidden-x, .wf-visible-x {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .wf-btn-primary:hover, .wf-btn-secondary:hover, .wf-image:hover { transform: none !important; }
          .wf-link:hover .wf-link-arrow { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Workflows"
        className="relative w-full overflow-hidden bg-[#0A0A18] py-8 sm:py-10 lg:py-14"
      >
        {/* Network backdrop — decorative */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-2/3"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 70% 40%, rgba(45,120,220,0.22) 0%, rgba(45,120,220,0) 70%)",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.18]"
            viewBox="0 0 600 500"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <g stroke="#5AA0F0" strokeWidth="1">
              <line x1="80" y1="120" x2="220" y2="60" />
              <line x1="220" y1="60" x2="360" y2="140" />
              <line x1="360" y1="140" x2="500" y2="90" />
              <line x1="80" y1="120" x2="160" y2="260" />
              <line x1="160" y1="260" x2="340" y2="300" />
              <line x1="340" y1="300" x2="360" y2="140" />
              <line x1="340" y1="300" x2="480" y2="380" />
              <line x1="160" y1="260" x2="120" y2="420" />
              <line x1="480" y1="380" x2="520" y2="240" />
              <line x1="500" y1="90" x2="520" y2="240" />
            </g>
            <g fill="#7FB6F5">
              {[
                [80, 120],
                [220, 60],
                [360, 140],
                [500, 90],
                [160, 260],
                [340, 300],
                [480, 380],
                [120, 420],
                [520, 240],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" />
              ))}
            </g>
          </svg>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <p
              ref={eyebrowRef}
              className={`wf-hidden ${eyebrowIn ? "wf-visible" : ""} mb-5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Workflows
            </p>

            <h1
              ref={headRef}
              className={`wf-hidden ${headIn ? "wf-visible" : ""} mb-5 text-[clamp(34px,5.5vw,56px)] font-extrabold leading-[1.05] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Automate the handoffs that keep work moving.
            </h1>

            <p
              ref={subRef}
              className={`wf-hidden ${subIn ? "wf-visible" : ""} mb-8 max-w-[500px] text-[15px] leading-[1.75] text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Build governed workflows for requests, approvals, follow-ups,
              notifications, and connected actions across Zoiko Sema and the
              tools your team already uses.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`wf-hidden ${ctaIn ? "wf-visible" : ""} flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
              style={{ animationDelay: "0.24s" }}
            >
            <Link href="/start-free">  
              <button
                type="button"
                className="wf-btn-primary w-full rounded-lg bg-[#4F5BD5] px-6 py-3 text-[14px] font-semibold text-white"
              >
                Start Free
              </button>
              </Link>
              <Link href="get-a-demo">
              <button
                type="button"
                className="wf-btn-secondary w-full rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-[14px] font-semibold text-white"
              >
                Get a demo
              </button>
            </Link>
            <Link href="">
              <button
                type="button"
                className="wf-link inline-flex items-center justify-center gap-1.5 px-2 py-3 text-[14px] font-semibold text-[#8C95F2]"
              >
                Explore workflow templates
                <FiArrowRight className="wf-link-arrow h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
            </div>

            {/* Tag chips */}
            <div
              ref={tagRef}
              className={`wf-hidden ${tagIn ? "wf-visible" : ""} mt-8 flex flex-wrap gap-2.5`}
              style={{ animationDelay: "0.32s" }}
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — hero image (single asset, not built from markup) */}
          <div
            ref={imgRef}
            className={`wf-hidden-x ${imgIn ? "wf-visible-x" : ""} w-full`}
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="/workflows/hero-pic.png"
              alt="A Zoiko Sema workflow view showing a team collaborating with connected data panels"
              loading="eager"
              className=" ml-auto w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkflowsHeroSection;