"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: "Personal / Free",
    description: "Start with personal task management and source-linked follow-through.",
    features: [
      "Basic personal tasks",
      "Manual task creation",
      "Source traceability (limited)",
      "My Work view",
      "List view"
    ],
    cta: "Start Free",
    link:"/start-free",
    popular: false,
    featured: false
  },
  {
    name: "Pro",
    description: "Advanced views, projects, saved views, and templates for growing individuals.",
    features: [
      "Everything in Free",
      "Projects & saved views",
      "Board, timeline, calendar views",
      "Templates & recurrence",
      "Limited AI suggestions"
    ],
    cta: "Start Free",
    link:"/start-free",
    popular: false,
    featured: false
  },
  {
    name: "Team",
    description: "Shared workspaces, dependencies, approvals, and team-level AI action capture.",
    features: [
      "Everything in Pro",
      "Shared team tasks",
      "Dependencies & approvals",
      "Team-level AI suggestions",
      "Guest task collaboration",
      "Basic admin & audit"
    ],
    cta: "Explore Teams",
    link:"/teams",
    popular: true,
    featured: true
  },
  {
    name: "Business",
    description: "Advanced governance, automation, reporting, and enterprise integrations.",
    features: [
      "Everything in Team",
      "Advanced dependencies",
      "Workflow automation & APIs",
      "Advanced admin & export",
      "Advanced AI & governance",
      "Guest & role policies"
    ],
    cta: "Get a demo",
    link:"/get-a-demo",
    popular: false,
    featured: false
  }
];

export default function PricingPlans() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.05 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Section Header */}
        <div className={`text-center space-y-4 max-w-2xl transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
              Plans
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Start free. Scale as you grow.
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed">
            Every plan builds on source-linked task management. Advanced governance, automation, and enterprise controls scale to your organization.
          </p>
        </div>

        {/* Pricing Tiers Responsive Grid Framework */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-4">
          {PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border flex flex-col justify-between transition-all duration-500 transform group hover:-translate-y-2 ${
                plan.featured 
                  ? 'bg-slate-900 dark:bg-slate-950 border-blue-600 shadow-[0px_20px_60px_0px_rgba(52,87,232,0.15)] text-white' 
                  : 'bg-white dark:bg-slate-950 border-violet-100 dark:border-slate-800 shadow-sm hover:shadow-md'
              } ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${150 + idx * 75}ms` }}
            >
              {/* Popularity Ribbon Tag Indicator */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 bg-blue-600 rounded-full shadow-md z-10">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider block leading-4">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Meta Content */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className={`text-base font-bold tracking-tight ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-normal leading-relaxed ${plan.featured ? 'text-slate-400' : 'text-gray-500 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Vertical Features Checklist Container */}
                <ul className="space-y-2.5 pt-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 group/item">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check className={`w-3.5 h-3.5 ${plan.featured ? 'text-blue-400' : 'text-teal-600 dark:text-teal-400'}`} />
                      </div>
                      <span className={`text-xs font-normal leading-tight ${
                        plan.featured ? 'text-white/75' : 'text-gray-500 dark:text-slate-400'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button Segment */}
              <div className="pt-6 mt-auto">
                <a href={plan.link}>
                <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border active:scale-95 ${
                  plan.featured
                    ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/10'
                    : 'bg-blue-600/5 dark:bg-blue-600/10 border-blue-600/20 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-600/20'
                }`}>
                  {plan.cta}
                </button></a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer Label */}
        <div className={`w-full text-center transition-all duration-1000 delay-500 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-gray-400 dark:text-slate-500 text-[11px] font-normal leading-normal max-w-2xl mx-auto">
            Plan eligibility requires Product and Commercial approval before publication. All features subject to product-approved plan behavior.
          </p>
        </div>

      </div>
    </section>
  );
}
