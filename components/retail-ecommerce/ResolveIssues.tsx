import React from "react";
import { TrendingUp, TriangleAlert } from "lucide-react";

export default function ResolveIssues() {
  return (
    <section className="bg-[#0B1030] text-white px-6 py-20 relative overflow-hidden animate-fade-up-ri">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRI {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-ri {
          animation: fadeUpRI 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Panel */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            Resolve customer issues with enterprise precision.
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
            Intelligent escalation routing ensures that critical storefront
            issues reach the right regional manager in seconds, not hours.
          </p>

          {/* Feature Cards Block */}
          <div className="space-y-4 pt-2">
            {/* Feature 1 */}
            <div className="bg-[#FFFFFF0D] border border-white/5 p-5 rounded-xl flex items-start gap-4">
              <TrendingUp
                size={20}
                className="mt-0.5 text-slate-300 shrink-0"
              />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  Smart Prioritization
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Auto-categorize issues by severity and store location.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FFFFFF0D] border border-white/5 p-5 rounded-xl flex items-start gap-4">
              <TriangleAlert
                size={20}
                className="mt-0.5 text-slate-300 shrink-0"
              />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  Resolution Timeline
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Track every step from investigation to closing the loop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Empty Image Space */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div>
            <img
              src="/retail-ecommerce/pc.png"
              alt="Customer escalation and resolution dashboard on laptop screen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
