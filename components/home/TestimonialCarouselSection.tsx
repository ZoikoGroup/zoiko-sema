"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

// ── Replace image URLs with your own ─────────────────────────────
const testimonials: Testimonial[] = [
  {
    name: "Hannah Schmitt",
    role: "COO, Clerks Ltd.",
    quote:
      "Zoiko Sema has brought real discipline to the way our teams communicate. Meetings no longer end with scattered notes, unclear ownership, or forgotten follow-ups. Sema gives us secure conversations, clear summaries, decisions, action items, and accountability in one workspace. It has made our daily operations faster, cleaner, and more dependable.",
    image: "/Home/hannah-3.png",
  },
  {
    name: "Hannah Schmitt",
    role: "CEO, Global Leader",
    quote:
      "Zoiko Sema gives our leadership team the clarity every growing organization needs. It brings meetings, messaging, AI summaries, and governed follow-up into one platform that feels secure, modern, and business-ready. What impressed us most is that Sema does not simply capture conversations — it helps turn them into decisions, ownership, and measurable progress.",
    image: "/Home/marcus-reyes.png",
  },
  {
    name: "Hannah Schmitt",
    role: "Lead Manager, Dasalt Ltd",
    quote:
      "Sema has made team coordination much easier. We can meet, message, summarize, assign actions, and keep everyone aligned without moving between disconnected tools. The AI meeting summaries save time after every discussion, while the governance controls give our managers confidence that communication stays organized, protected, and accountable.",
    image: "/Home/hannah-3.png",
  },
  {
    name: "Marcus Reyes",
    role: "Director of Ops, BrightPath",
    quote:
      "We evaluated four platforms before choosing Sema. None of the others combined real-time chat, structured meetings, and AI governance the way Sema does. Our compliance team signed off in under a week.",
    image: "/Home/marcus-reyes.png",
  },
  {
    name: "Elena Vos",
    role: "Head of People, Northline",
    quote:
      "The ZoikoTime integration turned our messy hybrid schedule into something we can actually report on. Leadership finally trusts the data coming out of day-to-day team communication.",
    image: "/Home/elena-vos.png",
  },
];

// ── Intersection-observer hook ────────────────────────────────────
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

export default function ClientTestimonialsCarouselSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const { ref: sectionRef, inView } = useInView(0.15);

  const goTo = useCallback(
    (idx: number) => {
      setActive(((idx % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // ── Infinite auto-loop ──
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, total]);

  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  const prevItem = testimonials[prevIdx];
  const activeItem = testimonials[active];
  const nextItem = testimonials[nextIdx];

  return (
    <>
      <style>{`
        @keyframes ctcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ctc-hidden  { opacity: 0; transform: translateY(28px); }
        .ctc-visible { animation: ctcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* Center card entrance */
        @keyframes ctcCenterIn {
          from { opacity: 0; transform: translateY(10px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ctc-center-card { animation: ctcCenterIn .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* Side cards entrance */
        @keyframes ctcSideInLeft {
          from { opacity: 0; transform: translateX(20px) rotate(-6deg) scale(0.9); }
          to   { opacity: .92; transform: translateX(0) rotate(-6deg) scale(1); }
        }
        @keyframes ctcSideInRight {
          from { opacity: 0; transform: translateX(-20px) rotate(6deg) scale(0.9); }
          to   { opacity: .92; transform: translateX(0) rotate(6deg) scale(1); }
        }
        .ctc-side-left  { animation: ctcSideInLeft .55s cubic-bezier(.22,1,.36,1) forwards; }
        .ctc-side-right { animation: ctcSideInRight .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* Continuous subtle float on side cards for "alive" feel */
        @keyframes ctcFloat {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50%      { transform: translateY(-6px) rotate(-6deg); }
        }
        @keyframes ctcFloatRight {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50%      { transform: translateY(-6px) rotate(6deg); }
        }
        .ctc-float-left  { animation: ctcFloat 4.5s ease-in-out infinite; }
        .ctc-float-right { animation: ctcFloatRight 4.5s ease-in-out infinite; }

        /* card hover lift */
        .ctc-card-wrap {
          transition: transform .35s cubic-bezier(.22,1,.36,1);
        }
        .ctc-card-wrap:hover {
          transform: translateY(-6px) scale(1.02);
        }

        /* quote mark */
        @keyframes ctcQuotePulse {
          0%,100% { opacity: .9; }
          50%     { opacity: .45; }
        }
        .ctc-quote-mark { animation: ctcQuotePulse 3s ease-in-out infinite; }

        /* avatar */
        .ctc-avatar {
          box-shadow: 0 8px 20px rgba(20,15,80,0.28);
        }

        /* nav arrows */
        .ctc-nav-btn {
          transition: transform .2s ease, background-color .2s ease;
        }
        .ctc-nav-btn:hover {
          transform: scale(1.15);
          background-color: rgba(255,255,255,0.18);
        }
        .ctc-nav-btn:active { transform: scale(0.92); }

        /* dots */
        .ctc-dot {
          transition: width .3s ease, background-color .3s ease, opacity .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .ctc-hidden, .ctc-center-card, .ctc-side-left, .ctc-side-right {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .ctc-float-left, .ctc-float-right, .ctc-quote-mark { animation: none !important; }
          .ctc-card-wrap:hover, .ctc-nav-btn:hover { transform: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Client testimonials"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className={`ctc-hidden ${inView ? "ctc-visible" : ""} w-full bg-[#fff] py-16 sm:py-20`}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 ">
          <div
            className="relative rounded-[28px] px-6 sm:px-10 md:px-14 pt-10 pb-16 sm:pb-24 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #4B47E5 0%, #3730A3 60%, #2E2A6E 100%)",
            }}
          >
            {/* Heading + nav arrows */}
            <div className="relative flex items-center justify-center mb-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="ctc-nav-btn absolute left-0 sm:left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <h2 className="text-[22px] sm:text-[28px] font-bold text-white text-center px-12">
                What Our Clients Say About Us
              </h2>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="ctc-nav-btn absolute right-0 sm:right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mb-10 sm:mb-14">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className="ctc-dot h-[7px] rounded-full"
                  style={{
                    width: idx === active ? "22px" : "7px",
                    background: idx === active ? "#fff" : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </div>

            {/* Three-card carousel */}
            <div className="relative flex items-center justify-center gap-4 sm:gap-6 min-h-[340px] sm:min-h-[380px]">
              {/* Left (previous) card */}
              <div
                key={`prev-${prevIdx}`}
                className="ctc-side-left ctc-float-left ctc-card-wrap hidden md:block absolute left-0 sm:left-6 md:left-8 lg:left-16 w-[240px] cursor-pointer"
                onClick={prev}
              >
                <TestimonialCard item={prevItem} compact />
              </div>

              {/* Center (active) card */}
              <div
                key={`active-${active}`}
                className="ctc-center-card relative z-10 w-full max-w-[380px] sm:max-w-[420px]"
              >
                <TestimonialCard item={activeItem} large />
              </div>

              {/* Right (next) card */}
              <div
                key={`next-${nextIdx}`}
                className="ctc-side-right ctc-float-right ctc-card-wrap hidden md:block absolute right-0 sm:right-6 md:right-8 lg:right-16 w-[240px] cursor-pointer"
                onClick={next}
              >
                <TestimonialCard item={nextItem} compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({
  item,
  large = false,
  compact = false,
}: {
  item: Testimonial;
  large?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="relative">
      {/* Shadow card behind for stacked-paper effect */}
      <div
        className="absolute inset-0 rounded-[28px] bg-[#2E2A6E]"
        style={{ transform: "translate(6px, 6px) rotate(2deg)" }}
      />

      {/* Front card */}
      <div
        className="relative rounded-[28px] bg-white pt-12 pb-6 px-5 sm:px-7 text-center"
        style={{
          minHeight: large ? "320px" : "260px",
        }}
      >
        {/* Avatar overlapping top */}
        <img
          src={item.image}
          alt={item.name}
          className="ctc-avatar absolute -top-8 left-1/2 -translate-x-1/2 rounded-full object-cover border-4 border-white"
          style={{
            width: large ? "72px" : "56px",
            height: large ? "72px" : "56px",
          }}
        />

        <h3
          className={`font-bold text-[#15131F] mb-0.5 ${
            large ? "text-[18px] sm:text-[19px]" : "text-[14.5px]"
          }`}
        >
          {item.name}
        </h3>
        <p
          className={`text-gray-500 mb-3 ${
            large ? "text-[13px]" : "text-[11.5px]"
          }`}
        >
          {item.role}
        </p>

        <span
          aria-hidden="true"
          className={`ctc-quote-mark block font-serif text-[#4B47E5] mb-1 ${
            large ? "text-[30px]" : "text-[22px]"
          }`}
        >
          &ldquo;
        </span>

        <p
          className={`leading-[1.65] text-gray-600 ${
            large ? "text-[13.5px] sm:text-[14px]" : "text-[11.5px]"
          } ${compact ? "line-clamp-6" : ""}`}
        >
          {item.quote}
        </p>
      </div>
    </div>
  );
}