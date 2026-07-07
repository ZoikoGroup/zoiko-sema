"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

// ── Replace image URLs with your own — keep array length flexible ─────────
const testimonials: Testimonial[] = [
  {
    quote:
      "The accuracy of Sema's transcripts is genuinely impressive and the ability to search every meeting we've ever had has changed how our directors work with their teams.",
    name: "Maya Calderón",
    role: "Head of Operations · Northbound Studio",
    image: "/home/maya-calderon.jpg",
  },
  {
    quote:
      "Sema replaced four separate tools overnight. Our team communication is faster, more secure, and the AI meeting summaries alone save us hours every week.",
    name: "James Whitfield",
    role: "CTO · Stratify Global",
    image: "/home/james-whitfield.jpg",
  },
  {
    quote:
      "Security was our biggest concern before adopting Sema. Their compliance logging and encrypted channels cleared our InfoSec review in days, not months.",
    name: "Priya Kapoor",
    role: "CISO · NovaBridge Health",
    image: "/home/priya-kapoor.jpg",
  },
  {
    quote:
      "ZoikoTime integration is the feature that sold our leadership team. We finally have real visibility into how our remote staff actually collaborate.",
    name: "Daniel Osei",
    role: "VP People Ops · ClearPath Logistics",
    image: "/home/daniel-osei.jpg",
  },
];

// ── Intersection-observer hook ──────────────────────────────────────────
function useInView(threshold = 0.12) {
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

export default function TestimonialCarouselSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const { ref: ctaRef, inView: ctaIn } = useInView(0.25);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev") => {
      setDirection(dir);
      setActive(((idx % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1, "next"), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1, "prev"), [active, goTo]);

  // ── Auto-rotate / loop carousel ──
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection("next");
      setActive((a) => (a + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  const current = testimonials[active];

  return (
    <>
      <style>{`
        @keyframes tcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-hidden  { opacity: 0; transform: translateY(28px); }
        .tc-visible { animation: tcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── carousel slide transitions ── */
        @keyframes tcSlideInNext {
          from { opacity: 0; transform: translateX(28px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes tcSlideInPrev {
          from { opacity: 0; transform: translateX(-28px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .tc-slide-next { animation: tcSlideInNext .5s cubic-bezier(.22,1,.36,1) forwards; }
        .tc-slide-prev { animation: tcSlideInPrev .5s cubic-bezier(.22,1,.36,1) forwards; }

        /* image cross-fade */
        @keyframes tcImgFade {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        .tc-img-fade { animation: tcImgFade .6s ease forwards; }

        /* quote mark pulse */
        @keyframes tcQuotePulse {
          0%,100% { opacity: .9; }
          50%     { opacity: .55; }
        }
        .tc-quote-mark { animation: tcQuotePulse 3s ease-in-out infinite; }

        /* nav arrow buttons */
        .tc-nav-btn {
          transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease;
        }
        .tc-nav-btn:hover {
          transform: translateY(-2px) scale(1.06);
          box-shadow: 0 8px 18px rgba(0,0,0,0.18);
        }
        .tc-nav-btn:active { transform: scale(0.95); }

        /* dots */
        .tc-dot {
          transition: width .3s ease, background-color .3s ease, opacity .3s ease;
        }

        /* CTA buttons */
        .tc-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .tc-btn:hover { transform: translateY(-2px); opacity: .92; }
        @keyframes tcShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .tc-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .tc-btn:hover::after { animation: tcShimmer .65s ease forwards; }

        /* video mockup hover */
        .tc-video-frame {
          transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease;
        }
        .tc-video-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(15,15,40,0.18);
        }
        .tc-video-frame img { transition: transform .6s ease; }
        .tc-video-frame:hover img { transform: scale(1.03); }

        .tc-call-icon {
          transition: transform .2s ease, background-color .2s ease;
        }
        .tc-call-icon:hover { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .tc-hidden { opacity: 1 !important; transform: none !important; }
          .tc-visible { animation: none !important; opacity: 1 !important; }
          .tc-slide-next, .tc-slide-prev, .tc-img-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
          .tc-quote-mark { animation: none !important; }
          .tc-nav-btn:hover, .tc-btn:hover, .tc-video-frame:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Customer testimonials"
        style={{ backgroundColor: "#EAEEFC" }}
        className="w-full py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">

          {/* ══════════ Testimonial Carousel ══════════ */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative rounded-[20px] overflow-hidden grid grid-cols-1 sm:grid-cols-[260px_1fr] mb-20 shadow-sm"
            style={{ background: "#A9C3FB" }}
          >
            {/* Left — rotating photo */}
            <div className="relative h-[260px] sm:h-auto bg-white">
              <img
                key={`img-${active}`}
                src={current.image}
                alt={current.name}
                className="tc-img-fade w-full h-full object-cover"
              />
            </div>

            {/* Right — quote content */}
            <div className="relative p-8 sm:p-10 flex flex-col justify-center min-h-[260px]">
              <span
                key={`quote-mark-${active}`}
                aria-hidden="true"
                className="tc-quote-mark text-[42px] leading-none font-serif text-white/70 mb-1"
              >
                &quot;
              </span>

              <p
                key={`quote-${active}`}
                className={`text-[16px] sm:text-[17px] leading-relaxed text-[#15131F] mb-6 max-w-[460px] ${
                  direction === "next" ? "tc-slide-next" : "tc-slide-prev"
                }`}
              >
                {current.quote}
              </p>

              <div
                key={`meta-${active}`}
                className={direction === "next" ? "tc-slide-next" : "tc-slide-prev"}
              >
                <p className="text-[14.5px] font-bold text-[#15131F]">{current.name}</p>
                <p className="text-[12.5px] text-[#3f3d56]/80">{current.role}</p>
              </div>

              {/* Nav arrows */}
              <div className="absolute bottom-7 right-8 flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="tc-nav-btn w-9 h-9 rounded-full bg-white/70 flex items-center justify-center text-[#15131F]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="tc-nav-btn w-9 h-9 rounded-full bg-[#474787] flex items-center justify-center text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-7">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx, idx > active ? "next" : "prev")}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className="tc-dot h-[6px] rounded-full"
                    style={{
                      width: idx === active ? "22px" : "8px",
                      background: idx === active ? "#1E1A3C" : "rgba(30,26,60,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ══════════ Heading + CTA ══════════ */}
          <div
            ref={ctaRef}
            className={`tc-hidden ${ctaIn ? "tc-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,36px)" }}
            >
              Use Sema your way — as an individual, a team or a business.
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75] text-[#5C5870] mb-7">
              Start with secure conversations. Add intelligence as you grow. Connect
              to ZoikoTime when communication needs to become verified workforce context.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="/start-free/"
                className="tc-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ background: "#474787" }}
              >
                Start free
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#explore-zoikotime"
                className="tc-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-[#15131F] bg-white border border-gray-200"
              >
                Explore Sema + ZoikoTime
              </a>
            </div>
          </div>

          {/* ══════════ Full video-call mockup image ══════════ */}
          <div
            ref={imgRef}
            className={`tc-hidden ${imgIn ? "tc-visible" : ""}`}
          >
            <div className="tc-video-frame relative w-full rounded-[20px] overflow-hidden shadow-xl">
              <img
                src="/home/video-call-full.webp"
                alt="Sema video call interface"
                className="w-full h-auto object-cover block"
              />

              {/* Bottom call-control bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#15131F] flex items-center justify-center gap-5 py-4">
                {[
                  {
                    label: "Captions",
                    icon: (
                      <span className="text-[13px] font-bold leading-none">A↑</span>
                    ),
                  },
                  {
                    label: "Mute",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                      </svg>
                    ),
                  },
                  {
                    label: "Speaker",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    ),
                  },
                  {
                    label: "Camera",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 7l-7 5 7 5V7z" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    ),
                  },
                  {
                    label: "End call",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(135deg)" }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    danger: true,
                  },
                ].map((btn, i) => (
                  <button
                    key={i}
                    aria-label={btn.label}
                    className="tc-call-icon w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: btn.danger ? "#1E5FE0" : "rgba(255,255,255,0.12)",
                    }}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
