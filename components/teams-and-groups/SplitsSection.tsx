"use client";

import React from "react";

export default function SplitsSection() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpSection {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-section {
              animation: fadeUpSection 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-section">
        {/* Top Header Block */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
                01 – CRITICAL REFINEMENT
              </span>
            </div>
            <h2 className="text-3xl md:text-[38px] font-bold tracking-tight leading-[1.15] text-[#0f1124]">
              A generic team directory isn't enough for enterprise evaluation.
            </h2>
          </div>

          <div className="max-w-[260px] md:text-right pb-1">
            <p className="text-[12px] leading-relaxed text-[#6b719c] font-medium">
              Every menu promise below is refined into a governed, auditable
              capability.
            </p>
          </div>
        </div>

        {/* 3-Column Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
          {/* Left Column - Image */}
          <div className="w-full flex">
            <img
              src="/teams-and-groups/left.png"
              alt="image"
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Middle Column - Stacked Informational Alert Cards */}
          <div className="flex flex-col gap-4 justify-between w-full">
            {/* Card 1 */}
            <div className="flex-1 bg-[#f5f7fc]/60 border border-[#e8ecf5] p-6 rounded-2xl flex flex-col justify-center">
              <span className="text-[12px] font-semibold text-[#8b91b5] mb-3 block">
                "Set managers" lacks authority boundaries
              </span>
              <div className="w-6 h-[1px] bg-[#d3d8e8] mb-4" />
              <p className="text-[13px] font-bold text-[#0f1124] leading-relaxed">
                Primary/secondary manager, approval authority, delegation,
                start/end dates, and conflict-of-interest checks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-[#f5f7fc]/60 border border-[#e8ecf5] p-6 rounded-2xl flex flex-col justify-center">
              <span className="text-[12px] font-semibold text-[#8b91b5] mb-3 block">
                No lifecycle or reorganization flow
              </span>
              <div className="w-6 h-[1px] bg-[#d3d8e8] mb-4" />
              <p className="text-[13px] font-bold text-[#0f1124] leading-relaxed">
                Create, import, activate, transfer, merge, split, archive,
                offboard, rollback, and effective-dated history.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full flex">
            <img
              src="/teams-and-groups/right.png"
              alt="image"
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
