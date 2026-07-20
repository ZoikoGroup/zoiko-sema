"use client";

import React from "react";

export default function MatrixStructure() {
  return (
    <section className="w-full bg-[#F8F9FC] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpMatrix {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-matrix {
              animation: fadeUpMatrix 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-matrix">
        {/* Top Header Section */}
        <div className="w-full mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              02 – PRODUCT SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-[#0f1124] leading-tight">
            The Teams &amp; Groups Command Center, annotated.
          </h2>
        </div>

        {/* Bottom Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Column (Content Panel/Card) */}
          <div className="w-full">
            <div className="bg-[#f8f9fd] border border-[#eef1f8] rounded-2xl p-6 shadow-sm">
              {/* Scope Banner header bar */}
              <div className="flex justify-between items-center border-b border-[#e6eaf3] pb-4 mb-5">
                <span className="text-xs font-bold text-[#0f1124]">
                  Scope banner
                </span>
                <span className="text-[10px] font-medium text-[#11845b]">
                  All departments · as of today · updated 6m ago
                </span>
              </div>

              {/* Top Summary Data Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Active teams
                  </span>
                  <span className="text-xl font-bold text-[#2a4bf7]">86</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Workers mapped
                  </span>
                  <span className="text-xl font-bold text-[#2a4bf7]">
                    1,204
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Manager coverage
                  </span>
                  <span className="text-xl font-bold text-[#11845b]">97%</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b border-[#e6eaf3] pb-5 mb-5">
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Unowned groups
                  </span>
                  <span className="text-xl font-bold text-[#bf7800]">3</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Reviews due
                  </span>
                  <span className="text-xl font-bold text-[#2a4bf7]">5</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7c82a6] font-medium block mb-0.5">
                    Sync exceptions
                  </span>
                  <span className="text-xl font-bold text-[#bf7800]">2</span>
                </div>
              </div>

              {/* Governance Section List */}
              <div>
                <span className="text-xs font-bold text-[#0f1124] block mb-3">
                  Governance panel
                </span>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#f0f2f7]">
                    <span className="text-[#3b405e]">
                      Duplicate memberships
                    </span>
                    <span className="font-bold text-[#bf7800]">4</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#f0f2f7]">
                    <span className="text-[#3b405e]">Conflicting policies</span>
                    <span className="font-bold text-[#df3838]">1</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#f0f2f7]">
                    <span className="text-[#3b405e]">Expired delegations</span>
                    <span className="font-bold text-[#bf7800]">2</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#3b405e]">Orphaned members</span>
                    <span className="font-bold text-[#df3838]">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image Showcase) */}
          <div className="w-full flex justify-center lg:justify-end">
            <img
              src="/teams-and-groups/image 283.png"
              alt="image"
              className="w-full h-auto rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
