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

export default function CommunityAnatomySuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <QuestionAnatomy />
      <ComposerWorkflow />
      <ExpertSessions />
      <ProductFeedback />
    </div>
  );
}

/* ==========================================================================
   1. QUESTION AND THREAD ANATOMY SECTION (Dark Gradient Hero Style)
   ========================================================================== */
function QuestionAnatomy() {
  const { ref, isVisible } = useScrollReveal();

  const details = [
    { title: "Environment", desc: "Product, plan, platform, version, and role — so answers actually fit." },
    { title: "Accepted solution", desc: "One primary answer, with a documented rule for moderator maintenance." },
    { title: "History", desc: "Material edits, merges, and supersession stay visible — never rewritten quietly." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              QUESTION AND THREAD ANATOMY
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Structured context in, a maintained answer out.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Graphic Side */}
          <div className="lg:col-span-6 w-full aspect-[599/399] rounded-[20px] overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10">
            <img 
              className="w-full h-full object-cover" 
              src="/community/image 304.png" 
              alt="Structural breakdown diagram of thread parameters showing user roles and timeline states" 
            />
          </div>

          {/* Cards Stack Side */}
          <div className="lg:col-span-6 space-y-4">
            {details.map((item, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-xl"
              >
                <h3 className="text-white text-sm sm:text-base font-bold   mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-normal   leading-relaxed">
                  {item.desc}
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
   2. COMPOSER AND POSTING WORKFLOW SECTION
   ========================================================================== */
function ComposerWorkflow() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    { num: "1", color: "bg-blue-600", label: "Choose type" },
    { num: "2", color: "bg-indigo-600", label: "Duplicate check" },
    { num: "3", color: "bg-teal-600", label: "Add context" },
    { num: "4", color: "bg-yellow-700", label: "Sensitive-data check" },
    { num: "5", color: "bg-red-700", label: "Set visibility" },
    { num: "6", color: "bg-slate-900 dark:bg-slate-800", label: "Publish" }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              COMPOSER AND POSTING WORKFLOW
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Guided from the first keystroke — including a warning before you overshare.
          </h2>
        </div>

        <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 306.png" 
            alt="Advanced user composer interface with dynamic data fields warning module checks representation" 
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="group p-5 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className={`size-7 flex items-center justify-center text-white text-xs font-extrabold   rounded-full ${step.color} mb-4 shadow-sm`}>
                {step.num}
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold   transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {step.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. EXPERT SESSIONS AND OFFICE HOURS SECTION
   ========================================================================== */
function ExpertSessions() {
  const { ref, isVisible } = useScrollReveal();

  const sessions = [
    { title: "Admin clinics", desc: "Roles, retention, AI policy, and integrations, live with the team." },
    { title: "Developer Q&A", desc: "Direct access to implementation guidance." },
    { title: "Community showcases", desc: "Champions share real workflows — education first, never a hidden sales call." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-950/40 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              EXPERT SESSIONS AND OFFICE HOURS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Live time with the people who know the product best.
          </h2>
        </div>

        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 305.png" 
            alt="Corporate streaming office hours scheduler session console layout environment" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold   mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {session.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                {session.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   4. PRODUCT FEEDBACK AND IDEAS SECTION
   ========================================================================== */
function ProductFeedback() {
  const { ref, isVisible } = useScrollReveal();

  const statuses = [
    { name: "New", class: "bg-violet-100 text-gray-700 dark:bg-slate-800 dark:text-slate-300" },
    { name: "Under review", class: "bg-orange-100 text-yellow-700 dark:bg-amber-950/40 dark:text-amber-400" },
    { name: "Planned", class: "bg-violet-200 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400" },
    { name: "In development", class: "bg-violet-200 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400" },
    { name: "Shipped", class: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400" },
    { name: "Declined", class: "bg-rose-100 text-red-700 dark:bg-rose-950/40 dark:text-rose-400" }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              PRODUCT FEEDBACK AND IDEAS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Structured feedback, honest status — never a delivery promise.
          </h2>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 307.png" 
            alt="Ecosystem product ideas timeline lifecycle tracking roadmap board interface blueprint" 
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {statuses.map((status, idx) => (
            <div 
              key={idx}
              className="group flex items-center justify-center p-5 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_4px_12px_rgba(18,19,43,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
            >
              <span className={`px-4 py-1.5 text-xs font-bold   rounded-full tracking-wide transition-transform group-hover:scale-105 ${status.class}`}>
                {status.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-400 dark:text-gray-500 text-xs font-normal   leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-900/60">
          No status is a contractual delivery commitment. Votes signal interest, not priority guarantees.
        </p>
      </div>
    </section>
  );
}