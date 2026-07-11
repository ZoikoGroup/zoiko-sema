import React from "react";

export function CTASection() {
  return (
    <section className="w-full bg-[#6C4FE0] py-24 lg:py-32 font-sans antialiased">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        
        <h2 className="text-white text-4xl font-bold font-['Inter'] leading-10 w-[684.88px] max-w-full">
          Ready to bring project work into one<br/>governed workspace?
        </h2>
        
        <p className="text-violet-200 text-sm font-normal font-['Inter'] mt-6 max-w-[700px] leading-6">
          See how Zoiko Sema keeps project messages, meetings, decisions, files, and stakeholder updates<br className="hidden md:block" />connected &mdash; with governance built in.
        </p>
        
        <div className="flex items-center gap-4 mt-8">
          <button className="px-6 py-3 bg-white text-[#6C4FE0] rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Get a demo
          </button>
          <button className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm hover:bg-white/20 transition-all">
            Start free
          </button>
          <a href="#" className="text-white text-sm font-bold ml-2 underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors">
            Talk to sales
          </a>
        </div>

        <p className="text-violet-300/80 text-xs font-normal font-['Inter'] mt-8">
          For cross-functional teams, client projects, and enterprise delivery.
        </p>

      </div>
    </section>
  );
}
