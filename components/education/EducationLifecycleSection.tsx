"use client";

import React from "react";

export default function EducationLifecycleSection() {
  return (
    <section className="bg-[#0A0D1F] px-6 py-24">
      <style>{`
        @keyframes lifecycle-float {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lifecycle-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.35); }
        }
        @keyframes lifecycle-chevron-move {
          0%, 100% { transform: translate(-2px, -50%); opacity: 0.55; }
          50% { transform: translate(2px, -50%); opacity: 1; }
        }
        @keyframes lifecycle-twinkle {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.9; }
        }
        .lifecycle-node {
          animation: lifecycle-float 0.7s cubic-bezier(0.16, 1, 0.3, 1) both,
                     lifecycle-pulse 4s ease-in-out infinite;
        }
        .lifecycle-chevron {
          animation: lifecycle-chevron-move 1.4s ease-in-out infinite;
        }
        .lifecycle-star {
          animation: lifecycle-twinkle 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .lifecycle-node, .lifecycle-chevron, .lifecycle-star { animation: none !important; }
        }
      `}</style>
      <h2 className="text-center text-[32px] font-extrabold tracking-tight text-white sm:text-[38px]">
        The Education Lifecycle
      </h2>
      <p className="mx-auto mt-4 text-center text-[16px] text-slate-400">
        From curriculum planning to archiving, manage the entire learning
        journey in one place.
      </p>
      <div className="hero-rise hero-rise-3 mx-auto mt-16 max-w-6xl">
        <img src="/education/lifecycle.png" alt="image" />
      </div>
    </section>
  );
}
