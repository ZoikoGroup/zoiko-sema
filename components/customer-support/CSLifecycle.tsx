"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Inbox, 
  Layers, 
  UserCheck, 
  Search, 
  GitPullRequest, 
  CheckCircle, 
  ShieldAlert, 
  GraduationCap 
} from 'lucide-react';

export default function CSLifecycle() {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Intake",
      description: "Normalize source while preserving channel, author, time, consent, and customer identity.",
      icon:"/customer-support/Icon (26).png",
      themeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20"
    },
    {
      number: 2,
      title: "Triage",
      description: "Confirm category, impact, urgency, entitlement, sensitivity, and required skill.",
      icon: "/customer-support/Icon (27).png",
      themeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20"
    },
    {
      number: 3,
      title: "Ownership",
      description: "Assign queue and accountable owner. Show first-response target and backup.",
      icon: "/customer-support/Icon.svg",
      themeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20"
    },
    {
      number: 4,
      title: "Investigate",
      description: "Use internal thread, tasks, files, meetings, knowledge, and system evidence.",
      icon: "/customer-support/Icon (1).svg",
      themeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20"
    },
    {
      number: 5,
      title: "Escalation",
      description: "Complete handoff packet, specialist accepts ownership, customer updates continue.",
      icon: "/customer-support/Icon (2).svg",
      themeColor: "text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10 border-blue-600/10 dark:border-blue-400/20"
    },
    {
      number: 6,
      title: "Resolution",
      description: "Confirm fix, workaround, or limitation. Prepare and send approved customer response.",
      icon: "/customer-support/Icon (3).svg",
      themeColor: "text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10 border-blue-600/10 dark:border-blue-400/20"
    },
    {
      number: 7,
      title: "Verification",
      description: "Customer or authorized agent confirms outcome. Unresolved impact stays visible.",
      icon: "/customer-support/Icon (4).svg",
      themeColor: "text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10 border-blue-600/10 dark:border-blue-400/20"
    },
    {
      number: 8,
      title: "Learning",
      description: "Update article, macro, routing rule, or product feedback. Assign owner and review date.",
      icon: "/customer-support/Icon (5).svg",
      themeColor: "text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10 border-blue-600/10 dark:border-blue-400/20"
    }
  ];

  return (
    <section
      ref={containerRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-slate-50 dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-400 text-xs font-semibold  uppercase tracking-wide leading-none">
              INTAKE-TO-RESOLUTION LIFECYCLE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight max-w-3xl">
            Every stage is traceable, owned, and linked to its source.
          </h2>
        </div>

        {/* Dynamic Matrix Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/50 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 group"
              >
                {/* Upper Metrics Row */}
                <div className="w-full flex items-center justify-between">
                  <div className={`size-9 rounded-[10px] flex justify-center items-center border ${step.themeColor}`}>
                    <img className="size-4.5 transition-transform group-hover:scale-110" src={step.icon} />
                  </div>
                  <span className="text-2xl font-extrabold   leading-none text-teal-400/20 dark:text-teal-400/10 group-hover:text-teal-400/35 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Typography Information Hierarchy */}
                <div className="space-y-2">
                  <h3 className="text-slate-900 dark:text-white text-sm font-bold   leading-tight tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-normal  leading-relaxed min-h-[60px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}