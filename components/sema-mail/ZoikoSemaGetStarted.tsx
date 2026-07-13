import React from "react";

// Assuming you use an Intersection Observer mechanism similar to previous sections
interface GetStartedSectionProps {
  visibleFinal?: boolean; // True when section scrolls into view
  secRefFinal?: React.RefObject<HTMLDivElement | null>;
}

export default function ZoikoSemaGetStarted({ 
  visibleFinal = true, 
  secRefFinal 
}: GetStartedSectionProps) {
  return (
    <section 
      ref={secRefFinal}
      className="w-full relative bg-white dark:bg-gray-950 py-20 sm:py-24 md:py-28 overflow-hidden transition-colors duration-300 border-t border-slate-100 dark:border-gray-900"
    >
      {/* Dynamic Radial Gradient Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(79,70,229,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_15%,rgba(79,70,229,0.25),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 relative z-10 text-center">
        
        {/* Section Header & Subtitle */}
        <div className={`max-w-3xl mx-auto space-y-4 transform transition-all duration-1000 ease-out ${visibleFinal ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
              GET STARTED
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-none">
            Bring email into the workspace where <br className="hidden sm:inline" /> work happens.
          </h2>
          
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Start with Sema Mail, connect meetings and calendar, and give your team one secure place to communicate and follow through.
          </p>
        </div>

        {/* Primary Interactive CTA Buttons */} 
        <div 
          style={{ transitionDelay: "150ms" }}
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 ease-out ${visibleFinal ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <a 
            href="#" 
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-semibold rounded-full shadow-[0px_8px_24px_rgba(37,99,235,0.2)] hover:shadow-[0px_12px_28px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            Start free
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-900 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            Contact sales
          </a>
        </div>

        {/* Secondary Navigation Context Links */}
        <div 
          style={{ transitionDelay: "300ms" }}
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 transform transition-all duration-1000 ease-out ${visibleFinal ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            <span>Explore Calendar</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
          </a>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            <span>Open Sema Workspace</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}