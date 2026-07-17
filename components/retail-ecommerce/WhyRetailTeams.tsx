import React from "react";

export default function WhyRetailTeams() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 animate-fade-up-wrt">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpWRT {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-wrt {
          animation: fadeUpWRT 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Retail Teams Choose Zoiko Sema
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-3">
            Modernizing the connection between headquarters and the storefront.
          </p>
        </div>

        {/* Two Column Grid for Side-by-Side Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column Image Slot (Chaotic/Disconnected) */}
          <div>
            <img
              src="/retail-ecommerce/left.png"
              alt="Chaotic and disconnected retail operational flow"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column Image Slot (Organized/Integrated) */}
          <div>
            <img
              src="/retail-ecommerce/right.png"
              alt="Streamlined and governed storefront operations layout"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
