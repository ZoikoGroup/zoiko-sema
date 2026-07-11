'use client';

import React from 'react';

export default function AISummariesHero() {
  return (
    <>
      {/* Injecting smooth CSS keyframe styles directly so you don't need external setup files */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes reveal-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-reveal {
          opacity: 0;
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <section className="relative w-full bg-violet-50 dark:bg-slate-900/40 overflow-hidden py-14 sm:py-20 lg:py-0 lg:min-h-[597px] flex items-center font-sans antialiased">
        <div className="relative z-10 max-w-[1248px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start gap-4 max-w-[562px]">
            {/* Tag Reveal */}
            <div className="animate-reveal flex items-center gap-2" style={{ animationDelay: '100ms' }}>
              <img className="size-3.5" 
              src="/ai-meetings/Frame (46).png"  />
               
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                AI Meeting Summaries
              </span>
            </div>

            {/* Heading Reveal */}
            <h1 className="animate-reveal text-4xl sm:text-5xl font-extrabold leading-[1.15] text-gray-900 dark:text-white tracking-tight" style={{ animationDelay: '250ms' }}>
              Turn meetings into{' '}
              <span className="inline-block transition-transform duration-300 hover:scale-[1.02] cursor-default" style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                clear summaries, decisions, and actions.
              </span>
            </h1>

            {/* Paragraph Reveal */}
            <p className="animate-reveal text-base text-gray-500 dark:text-gray-400 leading-7 max-w-[560px]" style={{ animationDelay: '400ms' }}>
              Zoiko Sema helps teams capture what mattered, confirm next steps, and keep meeting knowledge connected to channels, tasks, files, and audit trails.
            </p>

            {/* CTAs with active scaling and hover lifting properties */}
            <div className="animate-reveal flex flex-wrap items-center gap-3 pt-2" style={{ animationDelay: '550ms' }}>
              <button 
                className="px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-[0px_12px_24px_-12px_rgba(60,60,120,0.6)] hover:shadow-[0px_18px_30px_-10px_rgba(60,60,120,0.8)]" 
                style={{ background: '#4f46e5' }}
              >
                Get a demo
              </button>
              <button 
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-gray-50 dark:hover:bg-slate-750 shadow-sm"
              >
                Talk to sales
              </button>
            </div>

            {/* Subtext info reveal */}
            <div className="animate-reveal flex items-center gap-2 pt-1.5 max-w-[520px]" style={{ animationDelay: '700ms' }}>
              <svg className="size-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-5">
                AI-drafted, human-reviewed, and governed by workspace policies.
              </p>
            </div>
          </div>

          {/* Right Preview Column (Continuous Floating + Micro Hover Translation) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="animate-float w-full max-w-[603px] aspect-[603/453] rounded-[20px] overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] shadow-[0_20px_50px_rgba(76,29,149,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(76,29,149,0.22)]">
              <img 
                src="/ai-meetings/ai-meetinghero.png" 
                alt="AI meeting summaries workspace preview" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>
        </div>

        {/* Ambient background decoration shapes */}
        <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-violet-200/30 dark:bg-violet-900/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-24 -left-24 size-[380px] rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '11s' }} />
      </section>
    </>
  );
}