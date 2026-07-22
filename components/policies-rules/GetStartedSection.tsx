import React from "react";

export default function GetStartedSection() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="relative w-full text-white px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpCenter {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-center {
          animation: fadeUpCenter 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Blended Background Image Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/policies-rules/image.png"
          alt="image"
          className="w-full h-full object-cover opacity-75 mix-blend-overlay scale-105"
        />
        {/* Vignette gradient overlay to blend edges seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05061c]/60 via-transparent to-[#040514]/90" />
      </div>

      {/* Radial ambient light details */}
      <div className="absolute top-[30%] left-[15%] w-[40%] h-[40%] rounded-full bg-[#3539a3] opacity-20 blur-[130px] pointer-events-none" />

      {/* Content Container */}
      <div
        className="relative z-10 max-w-3xl flex flex-col items-center animate-fade-up-center"
        style={{ animationDelay: "0.1s" }}
      >
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5d65f6]"></span>
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#8c94ff] uppercase">
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[42px] font-bold tracking-tight leading-[1.15] mb-6 text-white max-w-2xl">
          Turn your workforce policy into a governed rule set.
        </h2>

        {/* Subtitle description */}
        <p className="text-[#a5a9cc] text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light">
          Request a guided demo, run a policy scenario yourself, or start free
          with a single policy set.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/get-a-demo" className="bg-[#2a4bf7] hover:bg-[#223ec7] text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#2a4bf7]/20">
            Request a demo
          </a>
          <a href="/privacy" className="bg-transparent border border-[#2b2e56] hover:border-[#424785] text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200">
            Read Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
