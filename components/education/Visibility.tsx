"use client";

import React from "react";

export default function Visibility() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-24">
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
      <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1B1B1E] sm:text-[38px]">
        Total Visibility. Total Accountability.
      </h2>
      <p className="mx-auto mt-4 text-center text-[16px] text-[#46464D]">
        Admin dashboards showing live activity and risk metrics.
      </p>
      <div className="hero-rise hero-rise-3 mx-auto mt-16 max-w-6xl">
        <img src="/education/dashboard.png" alt="image" />
      </div>
    </section>
  );
}
