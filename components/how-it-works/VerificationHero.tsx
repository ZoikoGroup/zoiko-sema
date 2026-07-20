"use client";

import React, { useState } from "react";

export default function VerificationHero() {
  const [activeTab, setActiveTab] = useState("Operations");

  const primaryTabs = [
    "Operations",
    "HR/People",
    "Finance",
    "Compliance",
    "IT/Security",
  ];
  const secondaryTabs = ["Manager", "Worker", "Executive"];

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
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,76,230,0.15),transparent_50%)] pointer-events-none" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpHero {
              from {
                opacity: 0;
                transform: translateY(25px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-hero {
              animation: fadeUpHero 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 animate-fade-up-hero">
        {/* Left Column Text & Controls */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="text-[#00e1c6] text-[10px] font-bold tracking-widest uppercase">
              ✦ SEE HOW ZOIKOTIME WORKS
            </span>
          </div>

          <h1 className="text-4xl md:text-[46px] font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-xl">
            Turn workforce activity into verified, reviewable records.
          </h1>

          <p className="text-[#a5a9cc] text-[14px] font-medium leading-relaxed mb-8 max-w-lg">
            Follow the journey from policy setup and transparent record capture
            to human review, reporting, and audit-ready evidence — with
            explainable automation and role-based control.
          </p>

          {/* Core Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="bg-[#2b56f5] hover:bg-[#2044cc] text-white font-bold text-[13px] px-6 py-3.5 rounded-xl transition-all shadow-md">
              Start guided demo
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[13px] px-6 py-3.5 rounded-xl transition-all">
              Request a demo
            </button>
            <button className="text-[13px] font-bold text-[#a5a9cc] hover:text-white transition-colors flex items-center gap-1 ml-2">
              Start free <span className="text-[11px]">→</span>
            </button>
          </div>

          {/* Interactive Role / Functional Matrices */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 max-w-xl">
            <div className="flex flex-wrap gap-2">
              {primaryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-bold px-4 py-2 bg-[#FFFFFF12] text-[#FFFFFFD9] rounded-full
                    border border-[#FFFFFF12] border transition-all`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {secondaryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-bold px-4 py-2 bg-[#FFFFFF12] text-[#FFFFFFD9] rounded-full
                    border border-[#FFFFFF12] border transition-all`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-[#FFFFFF80] italic mt-6 font-medium">
            Synthetic demonstration data only. ZoikoTime supports human
            resources; it does not make automated disciplinary or employment
            decisions.
          </p>
        </div>

        {/* Right Column Visual Showcase Terminal */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full aspect-[1.55] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0e112a]">
            <img
              src="/how-it-works/image 1.png"
              alt="Workforce verification tracking environment active overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
