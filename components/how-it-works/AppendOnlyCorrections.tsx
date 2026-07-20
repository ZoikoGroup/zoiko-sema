"use client";

import React from "react";

export default function AppendOnlyCorrections() {
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
      {/* Structural bottom gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,78,247,0.12),transparent_60%)] pointer-events-none" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpAppend {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-append {
              animation: fadeUpAppend 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-append relative z-10">
        {/* Top Header Label Block */}
        <div className="w-full text-center mb-16">
          <span className="text-[#00e1c6] text-[10px] font-bold tracking-widest uppercase mb-3 block">
            ✦ RESOLVE AND PROVE
          </span>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Append-only corrections. Versioned, audit-ready evidence.
          </h2>
        </div>

        {/* Split Asset and Parameter Block Grouping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column Viewport Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full aspect-[1.48] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0e112a]">
              <img
                src="/how-it-works/image 6.png"
                alt="Immutable audit trial reporting validation session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column Core Parameters Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-4">
            {/* Resolve Parameter Box */}
            <div className="bg-[#FFFFFF12] border border-[#FFFFFF29] rounded-xl pb-20 p-6 flex flex-col justify-start">
              <h4 className="font-bold text-white text-[14px] mb-2 tracking-wide">
                Resolve
              </h4>
              <p className="text-[#FFFFFFAD] text-[12.5px] leading-relaxed font-medium">
                Approve, correct, return, escalate, or speed — with worker input
                and no silent overwrite.
              </p>
            </div>

            {/* Prove Parameter Box */}
            <div className="bg-[#FFFFFF12] border border-[#FFFFFF29] rounded-xl pb-20 p-6 flex flex-col justify-start">
              <h4 className="font-bold text-white text-[14px] mb-2 tracking-wide">
                Prove
              </h4>
              <p className="text-[#FFFFFFAD] text-[12.5px] leading-relaxed font-medium">
                Returns, payroll/billing outputs, and compliance evidence with
                clear scope and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
