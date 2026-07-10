import React from 'react';

export default function TeamCollaborationHero() {
  const statusTags = [
    { label: 'Active', color: 'bg-emerald-400' },
    { label: 'Pending review', color: 'bg-amber-500' },
    { label: 'Guest', color: 'bg-indigo-400' },
    { label: 'External', color: 'bg-blue-400' },
    { label: 'Synced', color: 'bg-emerald-400' },
    { label: 'AI summary ready', color: 'bg-sky-400' }
  ];

  return (
    <section className="relative w-full min-h-[734px] bg-slate-950 text-white overflow-hidden flex items-center py-16 md:py-24 selection:bg-indigo-500/30">
      
      {/* Figma Radial Gradient Aura Effect Layout */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_-8%,rgba(59,130,246,0.22),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column Content Area */}
        <div className="lg:col-span-6 flex flex-col space-y-6 max-w-[568px] mx-auto lg:mx-0">
          
          {/* Over-title Sub-header Label */}
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400  ">
              Team Collaboration
            </span>
          </div>

          {/* Main Context Typography Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white  ">
            Bring every team into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              one clear workspace.
            </span>
          </h1>

          {/* Core Body Explainer Messaging */}
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-[540px]  ">
            Zoiko Sema helps teams align conversations, meetings, shared spaces, files, tasks, and AI-assisted follow-up so work moves forward with context and control.
          </p>

          {/* Embedded Interaction Navigation CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            
            {/* Primary Action Button */}
            <button className="relative px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-base   shadow-[0px_10px_24px_-10px_rgba(79,70,229,0.75)] transition-all duration-200 flex items-center gap-2 group">
              <span>Get a demo &rarr; </span>
              
            </button>

            {/* Secondary Option Action */}
            <button className="px-6 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl font-semibold text-base   border border-white/20 transition-all duration-200">
              Start free
            </button>

            {/* Inline Text Link Integration CTA */}
            <button className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-white font-semibold text-base   group transition-colors duration-150">
              <span className="flex items-center justify-center size-5 bg-white/10 rounded-full text-xs">▶</span>
              <span>Watch product tour</span>
            </button>
          </div>

          {/* Active Framework Dynamic Indicators Group */}
          <div className="flex flex-wrap gap-2 pt-2 max-w-[500px]">
            {statusTags.map((tag, idx) => (
              <div 
                key={idx} 
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-xs"
              >
                <span className={`size-1.5 rounded-full ${tag.color}`} />
                <span className="text-slate-300 text-xs font-semibold   leading-tight">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>

          {/* Supplemental Fine-Print Subtext Details */}
          <p className="text-slate-400 text-sm font-normal leading-relaxed max-w-[500px] pt-2  ">
            Built for growing teams, business workspaces, and secure collaboration across departments.
          </p>
        </div>

        {/* Right Column Visual Graphic Area */}
        <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[400px]">
          <div className="relative w-full max-w-[533px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 backdrop-blur-md">
            <img 
              className="w-full h-full object-cover opacity-80" 
              src="/TeamCollaboration/hero.png" 
              alt="Zoiko Sema Workspace Interface" 
            />
            
            {/* Embedded Floating Secondary Graphic Component Overlay */}
            <div className="absolute left-6 bottom-6 w-28 md:w-32 aspect-[1/2] rounded-xl overflow-hidden border border-white/20 shadow-xl hidden sm:block">
              <img 
                className="w-full h-full object-cover" 
                src="/TeamCollaboration/mobile-hero.png" 
                alt="Zoiko Sema Mobile Interface View" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}