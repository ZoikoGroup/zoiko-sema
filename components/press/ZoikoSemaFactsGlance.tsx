"use client"
import React, { useEffect, useRef, useState } from "react";

// Hook to trigger scroll entry animations when the section arrives in view
function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
}

export default function ZoikoSemaFactsGlance() {
  const [sectionRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-violet-50 dark:bg-gray-950 py-16 sm:py-20 md:py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
        
        {/* Header Content Block */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
              Press at a Glance
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white tracking-tight leading-tight">
            Approved facts, fast
          </h2>
          
          <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            The essentials for accurate coverage — each field is owned and reviewed on a regular cycle in our CMS.
          </p>
        </div>

        {/* Info Grid Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: What Zoiko Sema is */}
          <div 
            style={{ transitionDelay: "100ms" }}
            className={`bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_1px_3px_rgba(16,22,60,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="size-10 bg-slate-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <img className="size-5" src="/press/Frame.png"/>
                
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold font-['Plus_Jakarta_Sans'] mb-2">
              What Zoiko Sema is
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              A secure business communication platform for messaging, meetings, AI summaries, channels, and admin-governed collaboration.
            </p>
          </div>

          {/* Card 2: Product category */}
          <div 
            style={{ transitionDelay: "200ms" }}
            className={`bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_1px_3px_rgba(16,22,60,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="size-10 bg-slate-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <img className="size-5" src="/press/Frame (1).png"/>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold font-['Plus_Jakarta_Sans'] mb-2">
              Product category
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Business communication and secure collaboration with AI meeting summaries and admin-governed workspaces.
            </p>
          </div>

          {/* Card 3: Primary audiences */}
          <div 
            style={{ transitionDelay: "300ms" }}
            className={`bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_1px_3px_rgba(16,22,60,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="size-10 bg-slate-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <img className="size-5" src="/press/Frame (2).png"/>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold font-['Plus_Jakarta_Sans'] mb-2">
              Primary audiences
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Business teams, remote teams, regulated teams, enterprise admins, and ZoikoTime-connected customers.
            </p>
          </div>

          {/* Card 4: Proof & context (Links List) */}
          <div 
            style={{ transitionDelay: "400ms" }}
            className={`bg-white dark:bg-gray-900 p-6 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_1px_3px_rgba(16,22,60,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="size-10 bg-slate-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <img className="size-5" src="/press/Frame (3).png"/>
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold font-['Plus_Jakarta_Sans'] mb-3">
              Proof & context
            </h3>
            
            <div className="flex flex-col gap-2">
              {[
                "Trust Center",
                "Product Overview",
                "Customer Stories"
              ].map((linkText, linkIdx) => (
                <a 
                  key={linkIdx} 
                  href="#" 
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold group hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-250 py-0.5"
                >
                  <span>{linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 font-bold">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}