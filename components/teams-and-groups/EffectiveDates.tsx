"use client";

import React from "react";

export default function EffectiveDates() {
  return (
    <section className="w-full bg-[#f8f9fd] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpGroups {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-groups {
              animation: fadeUpGroups 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-groups">
        {/* Top Header Section */}
        <div className="w-full mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              04 – GROUP TYPES
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight max-w-3xl">
            Purpose-specific groups, independent of reporting hierarchy.
          </h2>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch w-full">
          {/* Left Column - Cards 1, 2, 3 */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            {/* Card 1: Reporting team */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Reporting team
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Manager hierarchy, approvals, reporting
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Primary/secondary manager, direct/inherited members, subteam
                scope, review cadence.
              </p>
            </div>

            {/* Card 2: Project / client group */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Project / client group
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Temporary delivery, engagement
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Owner, start/end, project source, guest/external boundaries,
                archive.
              </p>
            </div>

            {/* Card 3: Dynamic group */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Dynamic group
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Rules-based membership
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Rule builder, preview, impact, version, approval, transparency,
                audit.
              </p>
            </div>
          </div>

          {/* Middle Column - Image Centerpiece */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-sm flex">
              <img
                src="/teams-and-groups/image 285.png"
                alt="image"
                className="w-full h-auto lg:h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Cards 4, 5, 6 */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            {/* Card 4: Schedule group */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Schedule group
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Shared shifts, working patterns
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Schedule source, effective dates, conflicts, availability
                notice, sync.
              </p>
            </div>

            {/* Card 5: Access group */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Access group
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Role, module, report, data scope
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Permission set, purpose, expiry, access review, separation of
                duties.
              </p>
            </div>

            {/* Card 6: Communication group */}
            <div className="bg-white border border-[#eef1f8] rounded-xl p-5 shadow-sm flex-1 flex flex-col justify-center">
              <span className="text-[14px] font-bold text-[#0f1124] block mb-0.5">
                Communication group
              </span>
              <span className="text-[11px] font-semibold text-[#664de6] block mb-2">
                Sema workspace, notice audience
              </span>
              <p className="text-[11px] text-[#6b719c] leading-relaxed">
                Source linkage, guest scope, retention, ownership, sync, opt-out
                where appropriate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
