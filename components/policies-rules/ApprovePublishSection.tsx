import React from "react";

export default function ApprovePublishSection() {
  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-16 lg:px-24 py-20 md:py-28 flex flex-col items-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpBlocks {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-blocks {
          animation: fadeUpBlocks 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Section Header */}
      <div
        className="text-center max-w-3xl mb-12 md:mb-16 animate-fade-up-blocks"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a4bf7]"></span>
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#2a4bf7] uppercase">
            Approve, publish, rollback
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-[#0f1124]">
          The person who approves is never the person who wrote it.
        </h2>
      </div>

      {/* Showcase Image Banner */}
      <div
        className="w-full max-w-5xl mb-12 md:mb-16 animate-fade-up-blocks"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <img
            src="/policies-rules/approve.png"
            alt="image"
            className="w-full h-auto object-cover max-h-[380px] rounded-3xl"
          />
        </div>
      </div>

      {/* Step Sequence Timeline Cards */}
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl animate-fade-up-blocks"
        style={{ animationDelay: "0.5s" }}
      >
        {/* Step 1 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between items-start min-h-[110px]">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4bf7] text-white font-bold text-[11px]">
            1
          </span>
          <span className="text-xs font-bold text-[#0f1124] mt-6">Draft</span>
        </div>

        {/* Step 2 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between items-start min-h-[110px]">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5d3bf2] text-white font-bold text-[11px]">
            2
          </span>
          <span className="text-xs font-bold text-[#0f1124] mt-6">Review</span>
        </div>

        {/* Step 3 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between items-start min-h-[110px]">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00a878] text-white font-bold text-[11px]">
            3
          </span>
          <span className="text-xs font-bold text-[#0f1124] mt-6">Approve</span>
        </div>

        {/* Step 4 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between items-start min-h-[110px]">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#a36200] text-white font-bold text-[11px]">
            4
          </span>
          <span className="text-xs font-bold text-[#0f1124] mt-6">Publish</span>
        </div>

        {/* Step 5 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 col-span-2 md:col-span-1 flex flex-col justify-between items-start min-h-[110px]">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#070926] text-white font-bold text-[11px]">
            5
          </span>
          <span className="text-xs font-bold text-[#0f1124] mt-6">
            Rollback if needed
          </span>
        </div>
      </div>
    </section>
  );
}
