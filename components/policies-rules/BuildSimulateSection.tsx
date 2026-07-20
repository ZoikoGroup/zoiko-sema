import React from "react";

export default function BuildSimulateSection() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="relative w-full text-white px-6 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden flex flex-col items-center"
    >
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

      {/* Background Radial Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#181a5e] opacity-25 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div
        className="text-center max-w-3xl mb-16 md:mb-20 animate-fade-up-sec"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5d65f6]"></span>
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#8c94ff] uppercase">
            Build and simulate
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-white">
          Every rule is tested against real scenarios before it goes live.
        </h2>
      </div>

      {/* Main Grid Content */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full max-w-6xl items-center animate-fade-up-sec"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Left Side: Image Container */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="relative rounded-3xl overflow-hidden w-full">
            <img
              src="/policies-rules/simulate.png"
              alt="image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right Side: Feature List Blocks */}
        <div className="lg:col-span-5 flex flex-col gap-8 w-full">
          {/* Feature Item 1 */}
          <div className="bg-[#FFFFFF12] border border-[#FFFFFF29] rounded-2xl p-6 hover:border-[#313678] transition-all duration-300">
            <h3 className="text-sm font-bold text-white mb-2">
              Scope & conditions
            </h3>
            <p className="text-xs text-[#a5a9cc] leading-relaxed">
              Readable nested logic — no hidden operator precedence.
            </p>
          </div>

          {/* Feature Item 2 */}
          <div className="bg-[#FFFFFF12] border border-[#FFFFFF29] rounded-2xl p-6 hover:border-[#313678] transition-all duration-300">
            <h3 className="text-sm font-bold text-white mb-2">
              Simulate impact
            </h3>
            <p className="text-xs text-[#a5a9cc] leading-relaxed">
              Compare the proposed version against production, side by side.
            </p>
          </div>

          {/* Feature Item 3 */}
          <div className="bg-[#FFFFFF12] border border-[#FFFFFF29] rounded-2xl p-6 hover:border-[#313678] transition-all duration-300">
            <h3 className="text-sm font-bold text-white mb-2">
              No production effect
            </h3>
            <p className="text-xs text-[#a5a9cc] leading-relaxed">
              Simulation never creates a live alert, record, or payroll change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
