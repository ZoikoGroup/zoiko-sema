import React from "react";
import { ArrowRight } from "lucide-react";

export default function RouteExceptionsCTA() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="relative text-white px-6 py-24 md:py-32 overflow-hidden animate-fade-up-recta"
    >
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRECTA {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-recta {
          animation: fadeUpRECTA 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {/* Decorative Radial Background Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 space-y-8">
        {/* Top Tagline */}
        <div className="flex items-center gap-1.5 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5F56FD]" />
          <span className="text-[11px] font-extrabold tracking-widest text-[#7C74FF] uppercase">
            GET STARTED
          </span>
        </div>

        {/* Big Impact Heading */}
        <h2 className="text-4xl md:text-[32px] font-extrabold text-white tracking-tight leading-[1.15] max-w-150">
          Route exceptions to the right reviewer, every time.
        </h2>

        {/* Subtitle description */}
        <p className="text-[#FFFFFFB8] text-sm md:text-base max-w-xl leading-relaxed">
          Request a guided demo, start free, or talk to sales about
          multi-jurisdiction deployment.
        </p>

        {/* Button Controls Frame */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center w-full">
          <a href="/get-a-demo" className="w-full sm:w-auto bg-[#2F54EB] hover:bg-blue-600 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-500/20 text-center">
            Request a demo
          </a>
          <a href="/start-free" className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-semibold text-sm px-8 py-4 rounded-full border border-white/20 transition-all text-center">
            Start free
          </a>
        </div>

        {/* Link Control */}
        <div className="pt-2">
          <a
            href="#policy-controls"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#8C84FF] hover:text-white transition-colors"
          >
            Explore policy controls
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
