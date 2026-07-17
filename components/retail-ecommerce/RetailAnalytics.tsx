import React from "react";

import { TrendingUp, RefreshCw } from "lucide-react";

export default function RetailAnalytics() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-ra">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRA {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-ra {
          animation: fadeUpRA 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Empty Image Space */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
          <div>
            <img
              src="/retail-ecommerce/report.png"
              alt="Advanced retail analytics dashboard mockup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Copy Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-1 lg:order-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
              Advanced Retail Analytics
            </h2>
          </div>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
            Gain a 360-degree view of your entire retail footprint. Track
            campaign progress, store performance, and omnichannel sync status in
            one view.
          </p>

          {/* Simple Bullet Lists */}
          <div className="space-y-4 pt-2">
            {/* Bullet 1 */}
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A47D21A] text-[#4F46E5]">
                <TrendingUp size={18} strokeWidth={2} />
              </span>
              <span className="text-base font-bold text-[#1E293B]">
                Store Performance Trends
              </span>
            </div>

            {/* Bullet 2 */}
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A47D21A] text-[#4F46E5]">
                <RefreshCw size={18} strokeWidth={2} />
              </span>
              <span className="text-base font-bold text-[#1E293B]">
                Omnichannel Sync Tracking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
