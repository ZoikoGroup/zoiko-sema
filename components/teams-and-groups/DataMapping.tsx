"use client";

import React from "react";

export default function DataMapping() {
  return (
    <section className="w-full bg-[#F3F1FA] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpReorg {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-reorg {
              animation: fadeUpReorg 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-reorg">
        {/* Top Header Section */}
        <div className="w-full mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              10 – REORGANIZATION
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight max-w-3xl">
            Draft, preview impact, publish — and roll back without erasing
            history.
          </h2>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch w-full">
          {/* Left Column - Features 1 & 2 */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            {/* Card 1: Model proposed structure */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-1.5">
                Model proposed structure
              </span>
              <p className="text-[12px] text-[#6b719c] leading-relaxed">
                Create a draft hierarchy with no production effect; identify
                owners and effective date.
              </p>
            </div>

            {/* Card 2: Split team */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-1.5">
                Split team
              </span>
              <p className="text-[12px] text-[#6b719c] leading-relaxed">
                Create destination teams, map members/owners, and validate
                policies and access.
              </p>
            </div>
          </div>

          {/* Middle Column - Image Centerpiece */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-sm flex">
              <img
                src="/teams-and-groups/image 288.png"
                alt="Reorganization planning workspace"
                className="w-full h-auto lg:h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Features 3 & 4 */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            {/* Card 3: Merge teams */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-1.5">
                Merge teams
              </span>
              <p className="text-[12px] text-[#6b719c] leading-relaxed">
                Choose surviving object, owners, members, policies, access,
                schedules, and archive behavior.
              </p>
            </div>

            {/* Card 4: Rollback */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-1.5">
                Rollback
              </span>
              <p className="text-[12px] text-[#6b719c] leading-relaxed">
                Use a new corrective version or approved rollback workflow;
                never erase historical changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
