import React from "react";

import { Clapperboard, Palette, ArrowRight } from "lucide-react";

export default function CommandCenter() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-cc">
      {/* Inline CSS for entry animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCC {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-cc {
          animation: fadeUpCC 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#4F46E5] uppercase block mb-2">
              THE COMMAND CENTER
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Visibility across every workstream
            </h2>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#E9E7EB] px-6 py-4 rounded-full border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
              <span className="text-xs font-semibold text-[#475569]">
                12 Active Campaigns
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#E9E7EB] px-6 py-4 rounded-full border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
              <span className="text-xs font-semibold text-[#475569]">
                3 At Risk
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Gantt Timeline Mockup Area */}
          <div className="lg:col-span-8 overflow-x-auto">
            <img src="/marketing/cmd.png" alt="image" />
          </div>

          {/* Side Info Cards Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* Live Campaign Sentiment Block */}
            <div className="bg-[#FBF9FCB2] rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between min-h-[170px] relative overflow-hidden group hover:shadow-md transition-all">
              <span className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase">
                LIVE CAMPAIGN SENTIMENT
              </span>
              <div className="py-15 flex flex-col justify-center items-center">
                <span className="text-5xl font-black text-[#4F46E5] tracking-tight block">
                  94%
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Positive Brand Alignment
                </span>
              </div>
            </div>

            {/* Upcoming Approvals Block */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col min-h-[220px] justify-between hover:shadow-md transition-all">
              <span className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase mb-4 block">
                UPCOMING APPROVALS
              </span>

              <div className="space-y-3">
                {/* Approval Task 1 */}
                <div className="flex items-center justify-between p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6462EC] text-white">
                      <Clapperboard size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F172A]">
                        Holiday Teaser
                      </h4>
                      <p className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                        LEGAL REVIEW
                      </p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">
                    <ArrowRight size={17} strokeWidth={2} />
                  </span>
                </div>

                {/* Approval Task 2 */}
                <div className="flex items-center justify-between p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2F6] text-[#1B1B1E]">
                      <Palette size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F172A]">
                        Spring Catalog
                      </h4>
                      <p className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                        CREATIVE DIR.
                      </p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">
                    <ArrowRight size={17} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
