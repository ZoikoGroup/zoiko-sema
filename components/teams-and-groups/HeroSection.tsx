"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0b0e26] text-white py-12 lg:py-18 overflow-hidden flex items-center justify-center min-h-[640px]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-up {
              animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div
            className="w-full lg:col-span-6 flex flex-col animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#7e85d4] uppercase">
                TEAMS &amp; GROUPS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Build a workforce structure everyone can trust.
            </h1>

            <p className="text-[#989dbf] text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Organize departments, teams, managers, workforce groups, policies,
              approvals, and access from one governed system designed for clear
              ownership and responsible scale.
            </p>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="/get-a-demo" className="bg-[#2a4bf7] hover:bg-[#1e3bd4] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200">
                Request a Demo
              </a>

              <a href="/start-free" className="bg-white hover:bg-gray-100 text-[#0b0e26] font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200">
                Start Free
              </a>

              <a
                href="/how-it-works"
                className="text-[#00e5a3] hover:underline text-sm font-semibold flex items-center gap-1 ml-2 transition-all"
              >
                See how it works →
              </a>
            </div>

            {/* Micro Features Grid */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-[#9A9BB8] font-medium border-b border-[#1b2047] pb-6 mb-6 max-w-md">
              <span>Organization hierarchy</span>
              <span className="text-[#2c325e]">|</span>
              <span>Scoped managers</span>
              <span className="text-[#2c325e]">|</span>
              <span>Governed access</span>
              <span className="text-[#2c325e]">|</span>
              <span>Audit-ready changes</span>
            </div>

            {/* Bottom Disclaimer Info */}
            <p className="text-[11px] text-[#525885] leading-relaxed max-w-lg">
              Role and manager visibility is purpose-limited, reviewable, and
              worker-transparent — never an unrestricted employee surveillance
              view.
            </p>
          </div>

          {/* Right Image Container */}
          <div
            className="w-full lg:col-span-6 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[540px]">
              <img
                src="/teams-and-groups/hero.png"
                alt="image"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
