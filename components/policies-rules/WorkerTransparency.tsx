import React from "react";

export default function WorkerTransparency() {
  return (
    <section className="w-full bg-[#f6f8fc] px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col items-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpSection {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-sec {
          animation: fadeUpSection 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Section Header */}
      <div
        className="text-center max-w-2xl mb-12 md:mb-16 animate-fade-up-sec"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a4bf7]"></span>
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#2a4bf7] uppercase">
            EXCEPTIONS AND WORKER TRANSPARENCY
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-[#0f1124]">
          Workers can see what applies to them — and challenge it.
        </h2>
      </div>

      {/* Main Image Banner */}
      <div
        className="w-full max-w-6xl mb-12 animate-fade-up-sec"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <img
            src="/policies-rules/view.png"
            alt="image"
            className="w-full h-auto object-cover max-h-[400px] rounded-3xl"
          />
        </div>
      </div>

      {/* Grid Features */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl animate-fade-up-sec"
        style={{ animationDelay: "0.5s" }}
      >
        {/* Feature 1 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">
            Personal policy view
          </h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            The policies that materially affect them, in plain language, with
            the reason they apply.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">Exceptions</h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            Scoped requests reviewed by an authorized person — AI can summarize,
            never decide.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 flex flex-col items-start min-h-[160px]">
          <h3 className="text-sm font-bold text-[#0f1124] mb-3">
            Correction & challenge
          </h3>
          <p className="text-sm text-[#646a86] leading-relaxed">
            Add context, request a correction, or appeal an outcome with a named
            reviewer.
          </p>
        </div>
      </div>
    </section>
  );
}
