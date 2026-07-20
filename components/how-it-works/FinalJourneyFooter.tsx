"use client";

import React from "react";

export default function FinalJourneyFooter() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="w-full text-white px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center relative overflow-hidden text-center"
    >
      {/* Dynamic continuous gradient spotlight atmosphere background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(43,86,245,0.15),transparent_60%)] pointer-events-none" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpJourney {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-journey {
              animation: fadeUpJourney 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 animate-fade-up-journey">
        <span className="text-[#00e1c6] text-[10px] font-bold tracking-widest uppercase mb-4 block">
          ✦ GET STARTED
        </span>

        <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-white leading-tight mb-4">
          See the full journey, from policy to proof.
        </h2>

        <p className="text-[#a5a9cc] text-[13px] font-medium leading-relaxed mb-10 max-w-lg">
          Start the guided demo, create a free workspace, or request a tailored
          walkthrough.
        </p>

        {/* Action Controls Elements Alignment Grouping */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="bg-[#2b56f5] hover:bg-[#2044cc] text-white font-bold text-[13px] px-6 py-3.5 rounded-xl transition-all shadow-md whitespace-nowrap">
              Start guided demo
            </button>

            <button className="bg-transparent border border-white/20 hover:border-white/40 text-white font-bold text-[13px] px-6 py-3.5 rounded-xl transition-all whitespace-nowrap">
              Request a demo
            </button>
          </div>

          <button className="text-[12px] font-bold text-[#8B7BFF] hover:text-white transition-colors flex items-center gap-1 mt-2">
            Start free <span className="text-[10px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
