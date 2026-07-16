import React from "react";
import Image from "next/image";

export default function ProductProofSection() {
  return (
    <section id="dashboard" className="w-full bg-[#F5F3FF] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-[#4F46E5] text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-7 tracking-widest">
            Product proof
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            A reporting shell built for decisions,<br />not vanity
          </h2>
          <p className="text-[#475569] text-base font-normal font-['Inter'] leading-7 max-w-2xl mt-2">
            Switch modules to see role-aware scope, defined metrics, trends, and attention states. Every value is illustrative — open a metric's <span className="font-bold">ⓘ</span> to read its definition.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          
          {/* Top Bar */}
          <div className="w-full px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="ml-3 text-[#94A3B8] text-xs font-normal font-['JetBrains_Mono'] leading-4">insights-analytics / overview</span>
            </div>
            <div className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full">
              <span className="text-orange-600 text-xs font-bold font-['Inter']">Demonstration data</span>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex w-full min-h-[500px]">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col py-4 px-3 gap-1">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-2 pb-2">Reporting modules</div>
              
              <div className="px-3 py-2 bg-[#4F46E5] text-white rounded-lg text-sm font-semibold flex items-center gap-3">
                <span className="text-[10px]">■</span> Overview
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Adoption
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Meetings &<br/>Follow-through
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Collaboration
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> AI Usage
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Governance
              </div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Integrations
              </div>
              <div className="my-2 border-t border-gray-200"></div>
              <div className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold flex items-center gap-3 cursor-pointer">
                <span className="text-[10px] text-gray-400">●</span> Reports
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative bg-white p-6 overflow-y-auto">
              <div className="self-stretch inline-flex flex-col justify-start items-start w-full">
                {/* Header & Scope */}
                <div className="self-stretch pb-3 flex flex-col justify-start items-start w-full">
                  <div className="self-stretch flex justify-between items-center w-full">
                    <div className="text-[#1E1B4B] text-base font-bold font-['Plus_Jakarta_Sans'] leading-5">
                      Overview
                    </div>
                    <div className="px-2.5 pt-0.5 pb-[3px] bg-gray-50 rounded-full outline outline-1 outline-gray-200 flex flex-col justify-start items-start">
                      <div className="text-indigo-600 text-xs font-semibold font-['Inter'] leading-4">
                        Workspace scope · last 28 days
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start w-full">
                  <div className="self-stretch flex justify-start items-start gap-2 flex-wrap">
                    <div className="w-36 h-8 relative bg-white rounded-lg outline outline-1 outline-gray-200">
                      <div className="absolute left-[12px] top-[6px] text-[#64748B] text-xs font-semibold font-['Inter'] leading-4">Date</div>
                      <div className="absolute left-[44px] top-[6px] text-[#1E1B4B] text-xs font-semibold font-['Inter'] leading-4">Last 28 days</div>
                      <div className="absolute right-[8px] top-[9px] text-[#64748B] text-[9px] font-semibold font-['Inter'] leading-3">▾</div>
                    </div>
                    <div className="w-44 h-8 relative bg-white rounded-lg outline outline-1 outline-gray-200">
                      <div className="absolute left-[12px] top-[6px] text-[#64748B] text-xs font-semibold font-['Inter'] leading-4">Workspace</div>
                      <div className="absolute left-[81px] top-[6px] text-[#1E1B4B] text-xs font-semibold font-['Inter'] leading-4">All authorized</div>
                      <div className="absolute right-[8px] top-[9px] text-[#64748B] text-[9px] font-semibold font-['Inter'] leading-3">▾</div>
                    </div>
                    <div className="w-32 h-8 relative bg-white rounded-lg outline outline-1 outline-gray-200">
                      <div className="absolute left-[12px] top-[6px] text-[#64748B] text-xs font-semibold font-['Inter'] leading-4">Module</div>
                      <div className="absolute left-[60px] top-[6px] text-[#1E1B4B] text-xs font-semibold font-['Inter'] leading-4">Overview</div>
                      <div className="absolute right-[8px] top-[9px] text-[#64748B] text-[9px] font-semibold font-['Inter'] leading-3">▾</div>
                    </div>
                    <div className="w-24 h-8 relative bg-white rounded-lg outline outline-1 outline-gray-200">
                      <div className="absolute left-[12px] top-[6px] text-[#64748B] text-xs font-semibold font-['Inter'] leading-4">Policy</div>
                      <div className="absolute left-[52px] top-[6px] text-[#1E1B4B] text-xs font-semibold font-['Inter'] leading-4">Any</div>
                      <div className="absolute right-[8px] top-[9px] text-[#64748B] text-[9px] font-semibold font-['Inter'] leading-3">▾</div>
                    </div>
                    <button className="px-2.5 h-8 rounded-lg text-indigo-600 text-xs font-semibold font-['Inter'] leading-4 hover:bg-gray-50">
                      Reset
                    </button>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start w-full">
                  <div className="self-stretch flex justify-center items-start gap-2 w-full">
                    {/* Card 1 */}
                    <div className="flex-1 px-3 pt-3 pb-3.5 relative bg-white rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
                      <div className="text-[#64748B] text-xs font-semibold font-['Inter'] leading-4 pr-4">Active workspaces</div>
                      <div className="text-[#1E1B4B] text-2xl font-extrabold font-['Plus_Jakarta_Sans'] leading-6">1,284</div>
                      <div className="text-[#10B981] text-xs font-semibold font-['Inter'] leading-4">▲ +6% vs prior</div>
                      <div className="w-4 h-4 absolute right-3 top-3 bg-white rounded-full outline outline-1 outline-gray-200 flex justify-center items-center">
                        <div className="text-[#94A3B8] text-[10px] font-bold font-['Plus_Jakarta_Sans']">i</div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex-1 px-3 pt-3 pb-3.5 relative bg-white rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
                      <div className="text-[#64748B] text-xs font-semibold font-['Inter'] leading-4 pr-4">Meeting follow-through</div>
                      <div className="text-[#1E1B4B] text-2xl font-extrabold font-['Plus_Jakarta_Sans'] leading-6">78%</div>
                      <div className="text-[#10B981] text-xs font-semibold font-['Inter'] leading-4">▲ +3 pts</div>
                      <div className="w-4 h-4 absolute right-3 top-3 bg-white rounded-full outline outline-1 outline-gray-200 flex justify-center items-center">
                        <div className="text-[#94A3B8] text-[10px] font-bold font-['Plus_Jakarta_Sans']">i</div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex-1 px-3 pt-3 pb-3.5 relative bg-white rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
                      <div className="text-[#64748B] text-xs font-semibold font-['Inter'] leading-4 pr-4">AI summary review</div>
                      <div className="text-[#1E1B4B] text-2xl font-extrabold font-['Plus_Jakarta_Sans'] leading-6">91%</div>
                      <div className="text-[#10B981] text-xs font-semibold font-['Inter'] leading-4">▲ +2 pts</div>
                      <div className="w-4 h-4 absolute right-3 top-3 bg-white rounded-full outline outline-1 outline-gray-200 flex justify-center items-center">
                        <div className="text-[#94A3B8] text-[10px] font-bold font-['Plus_Jakarta_Sans']">i</div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flex-1 px-3 pt-3 pb-3.5 relative bg-white rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start gap-1.5 shadow-sm">
                      <div className="text-[#64748B] text-xs font-semibold font-['Inter'] leading-4 pr-4">Guest reviews due</div>
                      <div className="text-[#1E1B4B] text-2xl font-extrabold font-['Plus_Jakarta_Sans'] leading-6">12</div>
                      <div className="text-[#F59E0B] text-xs font-semibold font-['Inter'] leading-4">● needs attention</div>
                      <div className="w-4 h-4 absolute right-3 top-3 bg-white rounded-full outline outline-1 outline-gray-200 flex justify-center items-center">
                        <div className="text-[#94A3B8] text-[10px] font-bold font-['Plus_Jakarta_Sans']">i</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section (Chart + Needs Attention) */}
                <div className="self-stretch flex items-start gap-2 w-full mt-2">
                  
                  {/* Chart */}
                  <div className="flex-[2] px-4 py-3.5 rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start shadow-sm bg-white min-h-[280px]">
                    <div className="self-stretch pb-1 flex justify-between items-start">
                      <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans'] leading-4">Follow-through completion</div>
                      <div className="text-[#94A3B8] text-xs font-normal font-['Inter'] leading-4">Updated 2h ago</div>
                    </div>
                    <div className="self-stretch text-[#64748B] text-xs font-normal font-['Inter'] leading-4 mb-4">
                      Completed approved actions ÷ approved actions due · 12 weeks
                    </div>
                    
                    {/* Chart Area */}
                    <div className="self-stretch flex-1 relative flex flex-col justify-end mt-4 h-32 border-b border-gray-200">
                      {/* Grid lines */}
                      <div className="absolute w-full h-px bg-gray-100 top-0"></div>
                      <div className="absolute w-full h-px bg-gray-100 top-1/3"></div>
                      <div className="absolute w-full h-px bg-gray-100 top-2/3"></div>
                      
                      {/* Fake SVG Line Chart */}
                      <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon points="0,100 0,60 50,50 100,70 150,65 200,55 250,60 300,50 350,55 400,45 400,100" fill="url(#chartGradient)" />
                        <polyline points="0,60 50,50 100,70 150,65 200,55 250,60 300,50 350,55 400,45" fill="none" stroke="#4F46E5" strokeWidth="2" />
                        <circle cx="50" cy="50" r="3" fill="#4F46E5" />
                        <circle cx="100" cy="70" r="3" fill="#4F46E5" />
                        <circle cx="150" cy="65" r="3" fill="#4F46E5" />
                        <circle cx="200" cy="55" r="3" fill="#4F46E5" />
                        <circle cx="250" cy="60" r="3" fill="#4F46E5" />
                        <circle cx="300" cy="50" r="3" fill="#4F46E5" />
                        <circle cx="350" cy="55" r="3" fill="#4F46E5" />
                        <circle cx="400" cy="45" r="3" fill="#4F46E5" />
                      </svg>
                    </div>

                    <div className="self-stretch pt-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#4F46E5]"></div>
                        <span className="text-[#94A3B8] text-xs font-normal font-['Inter']">This period</span>
                        <span className="text-[#1E1B4B] text-xs font-bold font-['Inter']">78%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 border border-gray-300"></div>
                        <span className="text-[#94A3B8] text-xs font-normal font-['Inter']">Prior</span>
                        <span className="text-[#1E1B4B] text-xs font-bold font-['Inter']">75%</span>
                      </div>
                    </div>
                    
                    <div className="pt-2 text-indigo-600 text-xs font-semibold font-['Inter'] leading-4 cursor-pointer hover:underline">
                      View data table & summary
                    </div>
                  </div>

                  {/* Needs Attention */}
                  <div className="flex-1 px-4 pt-3.5 pb-4 rounded-xl outline outline-1 outline-gray-200 flex flex-col justify-start items-start bg-white shadow-sm h-full min-h-[280px]">
                    <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans'] leading-4 mb-1">Needs attention</div>
                    <div className="text-[#64748B] text-xs font-normal font-['Inter'] leading-4 mb-3">Aggregate routes to action — never a person ranking</div>
                    
                    <div className="w-full flex flex-col">
                      <div className="w-full py-2.5 flex justify-between items-center group cursor-pointer border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-sm"></div>
                          <div className="text-[#334155] text-xs font-normal font-['Inter']">Missing owners</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']">23</div>
                          <div className="text-indigo-600 text-[10px] font-semibold font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity">Review →</div>
                        </div>
                      </div>
                      
                      <div className="w-full py-2.5 flex justify-between items-center group cursor-pointer border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-sm"></div>
                          <div className="text-[#334155] text-xs font-normal font-['Inter']">Review backlog</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']">41</div>
                          <div className="text-indigo-600 text-[10px] font-semibold font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity">Review →</div>
                        </div>
                      </div>
                      
                      <div className="w-full py-2.5 flex justify-between items-center group cursor-pointer border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 bg-[#EF4444] rounded-sm"></div>
                          <div className="text-[#334155] text-xs font-normal font-['Inter']">Guest reviews due</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']">12</div>
                          <div className="text-indigo-600 text-[10px] font-semibold font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity">Review →</div>
                        </div>
                      </div>
                      
                      <div className="w-full py-2.5 flex justify-between items-center group cursor-pointer border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 bg-[#94A3B8] rounded-sm"></div>
                          <div className="text-[#334155] text-xs font-normal font-['Inter']">Policy exceptions</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']">5</div>
                          <div className="text-indigo-600 text-[10px] font-semibold font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity">Review →</div>
                        </div>
                      </div>
                      
                      <div className="w-full py-2.5 flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 bg-[#94A3B8] rounded-sm"></div>
                          <div className="text-[#334155] text-xs font-normal font-['Inter']">Stale integrations</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']">2</div>
                          <div className="text-indigo-600 text-[10px] font-semibold font-['Inter'] opacity-0 group-hover:opacity-100 transition-opacity">Review →</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
