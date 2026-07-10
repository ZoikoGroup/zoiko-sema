"use client";

import React, { useEffect, useRef, useState } from "react";

/* ── Reveal: bottom-to-top fade-in on scroll, staggered by delay prop ── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fw-reveal ${inView ? "fw-reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function FreelancerHeroSection() {
  return (
    <>
      <style>{`
        .fw-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
        }
        .fw-reveal-in {
          opacity: 1;
          transform: translateY(0);
        }

        .fw-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .fw-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(52,87,232,0.35);
          background-color: #2c47c9;
        }
        .fw-btn-secondary {
          transition: transform .25s ease, border-color .25s ease, background-color .25s ease;
        }
        .fw-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #3457E8;
          background-color: #F4F6FF;
        }

        .fw-hero-img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .fw-hero-img-wrap:hover .fw-hero-img {
          transform: scale(1.015);
        }

        @media (prefers-reduced-motion: reduce) {
          .fw-reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .fw-btn-primary:hover, .fw-btn-secondary:hover, .fw-hero-img-wrap:hover .fw-hero-img {
            transform: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Freelancer Workflows Hero"
        className="w-full py-20 md:py-28"
        style={{ background: "#EEF1FC" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

            {/* LEFT — Copy */}
            <div>
              <Reveal delay={0}>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#3457E8" }}
                >
                  Freelancer Workflows
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-[clamp(30px,4.2vw,48px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-6">
                  Run client work from{" "}
                  <span style={{ color: "#3457E8" }}>
                    first message to final delivery.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-[15.5px] leading-[1.75] text-gray-500 max-w-[520px] mb-8">
                  Zoiko Sema helps freelancers manage client conversations,
                  project spaces, meetings, follow-ups, files, approvals, and
                  payment-ready workflows in one secure workspace.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <button
                    className="fw-btn-primary rounded-full px-6 py-3 text-[14.5px] font-semibold text-white"
                    style={{ background: "#3457E8" }}
                  >
                    Get a demo
                  </button>
                  <button
                    className="fw-btn-secondary rounded-full px-6 py-3 text-[14.5px] font-semibold text-gray-900 bg-white border border-gray-300"
                  >
                    Start free
                  </button>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex items-center gap-2">
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "#22C55E" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <polyline
                        points="2,5 4,7 8,3"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    No credit card required. Built for client work, solo
                    productivity, and growing service teams.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Image */}
            <Reveal delay={160}>
              <div className="fw-hero-img-wrap rounded-2xl overflow-hidden">
                <img
                  src="/Images/Freelancer-Workflows.webp" /* 👈 add your image URL here */
                  alt="Zoiko Sema freelancer workflow dashboard"
                  className="fw-hero-img w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}