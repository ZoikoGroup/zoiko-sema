"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3F2FD] px-6 py-12">
      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-rise { animation: hero-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-rise-1 { animation-delay: 0s; }
        .hero-rise-2 { animation-delay: 0.08s; }
        .hero-rise-3 { animation-delay: 0.16s; }
        .hero-cta-primary {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -10px rgba(79, 70, 229, 0.55);
        }
        .hero-cta-secondary {
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }
        .hero-cta-secondary:hover {
          transform: translateY(-2px);
          background-color: #FAFAFF;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise, .hero-cta-primary, .hero-cta-secondary { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <h1 className="hero-rise hero-rise-1 text-[40px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-[52px] lg:text-[58px]">
          One governed collaboration platform
          <br className="hidden sm:block" /> for modern education.
        </h1>

        <p className="hero-rise hero-rise-2 mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-500 sm:text-[17px]">
          One connected workspace for courses, live classes, projects, learner
          support, reviewed AI, accessibility, institution governance and secure
          collaboration.
        </p>

        <div className="hero-rise hero-rise-3 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="hero-cta-primary w-full rounded-xl bg-[#4A47D2] px-15 py-5 text-[15px] font-semibold text-white sm:w-auto"
          >
            Get Started for Free
          </button>
          <button
            type="button"
            className="hero-cta-secondary w-full rounded-xl border border-slate-200 bg-white px-15 py-5 text-[15px] font-semibold text-slate-900 sm:w-auto"
          >
            Request Demo
          </button>
        </div>
      </div>

      <div className="hero-rise hero-rise-3 mx-auto mt-10 max-w-6xl">
        <img src="/education/hero.png" alt="image" />
      </div>
    </section>
  );
}
