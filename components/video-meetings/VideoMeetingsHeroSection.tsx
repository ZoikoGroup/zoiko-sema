"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook (same pattern as your other sections)
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

export default function VideoMeetingsHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: subRef, inView: subIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);
  const { ref: mockupRef, inView: mockupIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes acFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ac-hidden  { opacity: 0; transform: translateY(28px); }
        .ac-visible { animation: acFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Primary button hover */
        .ac-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ac-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,91,213,0.45);
        }
        .ac-btn-primary:active { transform: translateY(0); }

        /* Secondary button hover */
        .ac-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ac-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        }
        .ac-btn-secondary:active { transform: translateY(0); }

        /* Mockup image */
        .ac-mockup {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .ac-mockup:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .ac-hidden, .ac-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ac-btn-primary:hover, .ac-btn-secondary:hover, .ac-mockup:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Audio calls hero"
        className="w-full py-24 md:py-15 bg-cover bg-center bg-no-repeat"
        style={{
          // 👈 replace with your full-bleed dark background image
          backgroundImage: "url('/Home/Container.webp')",
          backgroundColor: "#14122B", // fallback while the image loads
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ac-hidden ${badgeIn ? "ac-visible" : ""} inline-flex items-center bg-white/5  outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[5px] gap-2 rounded-full px-4 py-1.5 mb-6 shadow-sm`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F5BD5]" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white">
              ZOIKO SEMA MEETINGS
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headRef}
            className={`ac-hidden ${headIn ? "ac-visible" : ""} text-[clamp(30px,5vw,48px)] font-bold leading-[1.12] tracking-tight text-white mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
           Meetings that drive decisions.
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className={`ac-hidden ${subIn ? "ac-visible" : ""} mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray-300 mb-9`}
            style={{ animationDelay: "0.16s" }}
          >
           Host secure video meetings, collaborate in real time, capture
decisions with AI, and keep every follow-up connected to your Zoiko Sema workspace.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`ac-hidden ${ctaIn ? "ac-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3 mb-14`}
            style={{ animationDelay: "0.24s" }}
          >
            <button
              className="ac-btn-primary rounded-full px-15 py-3 text-[14px] font-semibold text-black"
              style={{ backgroundColor:"white" }}
            >
            Start free
            </button>
            <button className="ac-btn-secondary rounded-full px-15 py-3 text-[14px] font-semibold text-white bg-white/5  outline outline-1 outline-offset-[-1px] outline-white/20">
              Get a demo
            </button>
          </div>
        </div>

        {/* Voice call UI mockup — single image, not built from markup */}
        <div
          ref={mockupRef}
          className={`ac-hidden ${mockupIn ? "ac-visible" : ""} mx-auto w-full max-w-3xl px-6`}
          style={{ animationDelay: "0.3s" }}
        >
          <img
            src="/Images/Video call in progress.png" // 👈 replace with your call-UI mockup image
            alt="Voice call interface showing participants, transcript, and call controls"
            className="ac-mockup w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </>
  );
}