import React from 'react';

export default function MeasureMatters() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-mm">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpMM {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-mm {
          animation: fadeUpMM 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title and Intro Paragraph */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Measure what matters most.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Zoiko Sema transforms raw campaign activity into high-level strategic insights for CMOs and marketing operations.
          </p>
        </div>

        {/* Empty Image Container for Dashboard Mockup Graphic */}
        <div className="w-full max-w-5xl rounded-3xl p-4 md:p-6">
          <div>
            <img 
              src="/marketing/dash.png" 
              alt="Advanced Marketing Command Center dashboard analytics" 
              className="w-full h-full shadow-[0_4px_10px_0_#00000040] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}