"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

// CHANGED: icon is now explicitly typed as string
interface RouteCard {
  id: string;
  title: string;
  description: string;
  routesTo: string;
  icon: string; 
  bgClass: string;
  iconBgClass: string;
  iconColorClass: string;
  darkBgClass: string;
}

export default function ChooseRouteSection() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [selectedRoute, setSelectedRoute] = useState<string>('security');

  const routes: RouteCard[] = [
    {
      id: 'security',
      title: 'Security issue',
      description: 'Vulnerability, suspicious access, account takeover, exposed credential, or system weakness.',
      routesTo: 'Security / Trust',
      icon: "/report-concern/SVG.png",
      bgClass: 'bg-indigo-50/70 border-blue-600',
      iconBgClass: 'bg-blue-100 dark:bg-blue-950/60',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
      darkBgClass: 'dark:bg-blue-950/20'
    },
    {
      id: 'privacy',
      title: 'Privacy & data',
      description: 'Data access, deletion, correction, data handling, DPA, or a privacy request.',
      routesTo: 'Privacy / Legal',
      icon: "/report-concern/SVG (1).png",
      bgClass: 'bg-purple-50/70 border-purple-200 dark:border-purple-900/30',
      iconBgClass: 'bg-purple-100 dark:bg-purple-950/60',
      iconColorClass: 'text-purple-600 dark:text-purple-400',
      darkBgClass: 'dark:bg-purple-950/20'
    },
    {
      id: 'ai',
      title: 'Responsible AI',
      description: 'Incorrect summary, sensitive AI output, misattribution, misuse, or a governance concern.',
      routesTo: 'Responsible AI / Product',
      icon: "/report-concern/SVG (2).png",
      bgClass: 'bg-emerald-50/70 border-emerald-200 dark:border-emerald-900/30',
      iconBgClass: 'bg-emerald-100 dark:bg-emerald-950/60',
      iconColorClass: 'text-emerald-600 dark:text-emerald-400',
      darkBgClass: 'dark:bg-emerald-950/20'
    },
    {
      id: 'abuse',
      title: 'Acceptable use / abuse',
      description: 'Spam, harassment, fraud, impersonation, misuse, or unsafe content.',
      routesTo: 'Trust & Safety',
      icon: "/report-concern/SVG (3).png",
      bgClass: 'bg-amber-50/70 border-amber-200 dark:border-amber-900/30',
      iconBgClass: 'bg-amber-100 dark:bg-amber-950/60',
      iconColorClass: 'text-amber-600 dark:text-amber-400',
      darkBgClass: 'dark:bg-amber-950/20'
    },
    {
      id: 'accessibility',
      title: 'Accessibility barrier',
      description: 'Keyboard issue, screen-reader issue, captions, contrast, motion, or a form barrier.',
      routesTo: 'Accessibility / Product',
      icon: "/report-concern/SVG (4).png",
      bgClass: 'bg-sky-50/70 border-sky-200 dark:border-sky-900/30',
      iconBgClass: 'bg-sky-100 dark:bg-sky-950/60',
      iconColorClass: 'text-sky-600 dark:text-sky-400',
      darkBgClass: 'dark:bg-sky-950/20'
    },
    {
      id: 'legal',
      title: 'Legal concern',
      description: 'Formal notice, policy question, DPA, rights inquiry, or a contract question.',
      routesTo: 'Legal / Sales / Privacy',
      icon: "/report-concern/SVG (5).png",
      bgClass: 'bg-gray-50 border-gray-200 dark:border-gray-800',
      iconBgClass: 'bg-gray-200 dark:bg-gray-800',
      iconColorClass: 'text-slate-700 dark:text-slate-300',
      darkBgClass: 'dark:bg-gray-800/40'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-12">
        
        {/* Header Block */}
        <div 
          className={`flex flex-col items-start gap-3 max-w-2xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-widest uppercase">
            STEP 1 — CHOOSE A ROUTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What kind of concern is this?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed">
            Pick the closest route. We only ask for what the receiving team needs to review your report safely — no long generic form.
          </p>
        </div>

        {/* Dynamic Route Cards Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          {routes.map((route) => {
            const isSelected = selectedRoute === route.id;
            
            return (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer min-h-[224px] ${
                  isSelected 
                    ? `bg-indigo-50 dark:bg-violet-950/30 border-blue-600 dark:border-violet-500 shadow-[0_12px_24px_-10px_rgba(79,70,229,0.3)] dark:shadow-[0_12px_24px_-10px_rgba(139,92,246,0.15)]` 
                    : `${route.bgClass} ${route.darkBgClass} border-transparent hover:border-slate-200 dark:hover:border-gray-800`
                } hover:-translate-y-2 hover:shadow-lg`}
              >
                {/* Card Top Row Header */}
                <div className="flex items-center justify-between w-full">
                  {/* Icon Container with optimized image sizing */}
                  <div className={`p-2.5 rounded-xl ${route.iconBgClass} flex items-center justify-center`}>
                    <img 
                      className="w-6 h-6 object-contain" 
                      src={route.icon} 
                      alt={`${route.title} icon`} 
                    />                 
                  </div>
                  
                  {/* "Selected" Badge Indicator */}
                  {isSelected && (
                    <div className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-blue-100 dark:border-violet-950 px-3 py-1 rounded-full shadow-sm">
                      <Check className="h-3 w-3 text-blue-600 dark:text-violet-400 stroke-[3px]" />
                      <span className="text-blue-600 dark:text-violet-400 text-xs font-bold tracking-wide uppercase">
                        Selected
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Main Info Block */}
                <div className="mt-5 flex-grow">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {route.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {route.description}
                  </p>
                </div>

                {/* Routing Footer Tag */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-gray-800/40 flex items-center gap-1 text-xs">
                  <span className="text-violet-600 dark:text-violet-400 font-semibold uppercase tracking-wider">
                    Routes to:
                  </span>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">
                    {route.routesTo}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}