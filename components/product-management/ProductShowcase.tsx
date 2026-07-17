import React from "react";

export function ProductShowcase() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-blue-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            04 — Product Showcase
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            The Overview Command Center, annotated.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column (Metrics Panel) */}
          <div className="w-full lg:w-7/12 flex flex-col rounded-xl outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden bg-white shadow-sm">
            
            {/* Scope Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border-b border-violet-100 gap-2">
              <span className="text-slate-900 text-xs font-bold font-['Inter']">
                Scope banner
              </span>
              <span className="text-teal-700 text-xs font-semibold font-['Inter']">
                All departments · current pay period · updated 4m ago
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3">
              <div className="p-4 border-r border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Verified sessions</span>
                <span className="text-blue-600 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">1,240</span>
              </div>
              <div className="p-4 border-r border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Needs review</span>
                <span className="text-yellow-600 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">22</span>
              </div>
              <div className="p-4 border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Policy-aligned</span>
                <span className="text-teal-700 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">91%</span>
              </div>
              <div className="p-4 border-r border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Notice coverage</span>
                <span className="text-violet-600 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">96%</span>
              </div>
              <div className="p-4 border-r border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Integration health</span>
                <span className="text-blue-600 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">5/7</span>
              </div>
              <div className="p-4 border-b border-slate-50 flex flex-col justify-center">
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] mb-1">Evidence complete</span>
                <span className="text-teal-700 text-2xl font-extrabold font-['Plus_Jakarta_Sans']">89%</span>
              </div>
            </div>

            {/* Policy Health Section */}
            <div className="border-t border-violet-100 p-4">
              <h3 className="text-slate-900 text-xs font-bold font-['Inter'] mb-4">
                Policy health
              </h3>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2 border-t border-slate-50">
                  <span className="text-slate-900 text-xs font-semibold font-['Inter']">Active policies</span>
                  <span className="text-slate-900 text-xs font-bold font-['Inter']">18</span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-slate-50">
                  <span className="text-slate-900 text-xs font-semibold font-['Inter']">Expiring within 30 days</span>
                  <span className="text-yellow-600 text-xs font-bold font-['Inter']">2</span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-slate-50">
                  <span className="text-slate-900 text-xs font-semibold font-['Inter']">Conflicting rules</span>
                  <span className="text-red-500 text-xs font-bold font-['Inter']">1</span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-slate-50">
                  <span className="text-slate-900 text-xs font-semibold font-['Inter']">Missing jurisdiction coverage</span>
                  <span className="text-teal-700 text-xs font-bold font-['Inter']">0</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-5/12 min-h-[400px] lg:min-h-0 bg-slate-900 rounded-xl overflow-hidden relative shadow-sm flex-1">
            <img 
              src="/product-management/capabilities-overview.png" 
              alt="Overview Command Center Image"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
