"use client";

import React from "react";

export default function EndToEndIntegrations() {
  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpEndToEnd {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-end-to-end {
              animation: fadeUpEndToEnd 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-end-to-end">
        <span className="text-[#2b56f5] text-[10px] font-black tracking-widest uppercase mb-3 block">
          ✦ INTEGRATIONS AND EVIDENCE
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          Source systems, lineage, reporting, and audit — connected end to end.
        </h2>

        {/* Integration Viewport Layer */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-white mb-8 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 10.png"
            alt="Data lineage mapping flow visual layer showcase"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="text-[13px] font-bold text-[#2b56f5] hover:underline flex items-center gap-1 mt-2">
          Explore integrations <span className="text-[11px]">→</span>
        </button>
      </div>
    </section>
  );
}
