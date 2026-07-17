import React from "react";

export default function OutcomeStrip() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-os">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpOS {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-os {
          animation: fadeUpOS 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#4F46E5] uppercase">
            OUTCOME STRIP
          </span>
        </div>

        {/* Centered Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center tracking-tight leading-[1.2] max-w-3xl mb-12">
          Faster review, less noise, stronger evidence.
        </h2>

        {/* Empty Image Container Slot (using flex/grid instead of spans) */}
        <div className="w-full flex justify-center">
          <div>
            <img
              src="/alerts-notifications/faster.png"
              alt="Outcome strip evidence and review workspace on screen"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
