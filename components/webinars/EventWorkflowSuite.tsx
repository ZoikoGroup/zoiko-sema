"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function EventWorkflowSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <EventSeriesPaths />
      <EventDetailPage />
      <RegistrationWorkflow />
    </div>
  );
}

/* ==========================================================================
   1. EVENT SERIES AND LEARNING PATHS SECTION
   ========================================================================== */
function EventSeriesPaths() {
  const { ref, isVisible } = useScrollReveal();
  
  const paths = [
    { label: "Getting started", desc: "Account setup through first-value workflows." },
    { label: "Admin clinics", desc: "Users, roles, security, and integrations." },
    { label: "Governance and trust", desc: "Responsible AI, privacy, and regulated workflows." },
    { label: "Customer office hours", desc: "Troubleshooting and adoption review." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              EVENT SERIES AND LEARNING PATHS
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight">
            Repeatable education, not a one-off webinar.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden shadow-2xl border border-white/10 aspect-[587/377]">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]" 
              src="/webinars/Topic and audienc (6).png" 
              alt="Learning roadmap tracking interfaces overview visual layout maps"
            />
          </div>

          {/* Paths Vertical List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {paths.map((path, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-lg"
              >
                <h3 className="text-white text-sm sm:text-base font-bold   mb-1">
                  {path.label}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-normal   leading-relaxed">
                  {path.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. EVENT DETAIL PAGE SECTION
   ========================================================================== */
function EventDetailPage() {
  const { ref, isVisible } = useScrollReveal();

  const details = [
    { title: "Who should attend", desc: "Roles, problems addressed, and what the session does not cover." },
    { title: "What you'll learn", desc: "Three to five specific, verifiable outcomes." },
    { title: "Recording & AI notice", desc: "Visible before registration and again before joining." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              EVENT DETAIL PAGE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   leading-snug sm:leading-10 tracking-tight max-w-[800px]">
            Who should attend, what you'll learn, and how to join — before you register.
          </h2>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/webinars/Topic and audienc (3).png" 
            alt="Event breakdown and agenda dynamic layout components blueprint mapping details"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-950 p-6 sm:p-7 rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.03)] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold   mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. REGISTRATION WORKFLOW SECTION
   ========================================================================== */
function RegistrationWorkflow() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    { num: 1, label: "Discover", bg: "bg-blue-600 text-white" },
    { num: 2, label: "Register", bg: "bg-indigo-600 text-white" },
    { num: 3, label: "Consent", bg: "bg-teal-600 text-white" },
    { num: 4, label: "Confirm", bg: "bg-amber-700 text-white" },
    { num: 5, label: "Remind", bg: "bg-red-700 text-white" },
    { num: 6, label: "Follow up", bg: "bg-slate-900 text-white dark:bg-gray-800" }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              REGISTRATION WORKFLOW
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight">
            Minimal data. Clear consent. A confirmation you can trust.
          </h2>
        </div>

        <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/webinars/Topic and audienc (15).png" 
            alt="Multi step interactive workflow analytics layout metrics display mapping parameters data pipeline charts"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-950 p-5 rounded-[20px] border-2 border-slate-200 dark:border-slate-800 flex flex-col justify-between items-start gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg"
            >
              <div className={`size-7 rounded-full flex items-center justify-center text-xs font-extrabold   ${step.bg}`}>
                {step.num}
              </div>
              <span className="text-slate-900 dark:text-slate-200 text-xs sm:text-sm font-bold   transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}