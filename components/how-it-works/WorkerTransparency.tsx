"use client";

import React from "react";

export default function WorkerTransparency() {
  return (
    <section className="w-full bg-[#F3F2FD] text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpTrans {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-trans {
              animation: fadeUpTrans 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-trans">
        <span className="text-[#2b56f5] text-[10px] font-black tracking-widest uppercase mb-3 block">
          ✦ WORKER TRANSPARENCY
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          What workers see, what managers see, and how corrections work.
        </h2>

        {/* Transparency Workspace Showcase Viewport */}
        <div className="w-full aspect-[2.4] rounded-3xl overflow-hidden shadow-sm bg-white mb-8 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 8.png"
            alt="Shared workspace visibility console blueprint"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[#33344A] text-sm leading-relaxed font-medium text-left p-5">
          Workers see their own records, source, explanation, and status — with
          a correction and appeal path. Managers see only scoped operational
          records for their team, never peer data or hidden ranking.
        </p>
      </div>
    </section>
  );
}
