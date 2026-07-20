"use client";

import React from "react";

export default function GovernanceAndAI() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="w-full text-white px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,76,230,0.1),transparent_70%)] pointer-events-none" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpGov {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-gov {
              animation: fadeUpGov 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-gov relative z-10">
        <span className="text-[#00e1c6] text-[10px] font-bold tracking-widest uppercase mb-3 block">
          ✦ GOVERNANCE AND AI
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-white max-w-3xl leading-tight mb-12">
          AI stays visibly subordinate to policy and human decision-making.
        </h2>

        {/* AI Alignment Grid Viewport */}
        <div className="w-full aspect-[2.4] rounded-3xl overflow-hidden shadow-2xl bg-[#0e112a] border border-white/5 mb-8">
          <img
            src="/how-it-works/image 9.png"
            alt="AI subordination parameters check environment dashboard"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[#a5a9cc] text-sm leading-relaxed font-medium text-black text-left bg-[#F3F2FD] border border-[#ECEAFB] p-5 rounded-xl shadow-sm">
          Every automated signal shows source, purpose, confidence or
          limitation, review state, and a challenge path. ZoikoTime does not
          make automatic disciplinary or significant employment decisions.
        </p>
      </div>
    </section>
  );
}
