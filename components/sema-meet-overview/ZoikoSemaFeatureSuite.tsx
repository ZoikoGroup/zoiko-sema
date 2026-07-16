"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Video, Sliders, ShieldCheck } from 'lucide-react';

// Intersection observer hook to handle the dynamic entrance fade/float transformations
function useScrollEntrance() {
  const [hasEntered, setHasEntered] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return { elementRef, hasEntered };
}

export default function ZoikoSemaFeatureSuite() {
  const lifecycleSection = useScrollEntrance();
  const showcaseSection = useScrollEntrance();
  const intelligenceSection = useScrollEntrance();

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* SECTION 1: Meeting Lifecycle */}
      <section 
        ref={lifecycleSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 transform ${
          lifecycleSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-12">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                MEETING LIFECYCLE
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
              Before, during, and after — one connected record.
            </h2>
          </div>

          {/* Hero Aspect Image Panel */}
          <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 group relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              src="/sema-meet/image 180.png" 
              alt="Zoiko Sema workspace meeting history timeline interface panel"
            />
          </div>

          {/* Stepper Steps Row Matrix */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
            {[
              { num: "1", step: "Before", color: "bg-blue-600", desc: "Schedule, select participants, agenda, devices." },
              { num: "2", step: "During", color: "bg-indigo-600", desc: "Video, shared content, chat, captions, host controls." },
              { num: "3", step: "Draft", color: "bg-teal-600", desc: "Eligible AI outputs generate after the meeting closes." },
              { num: "4", step: "Review", color: "bg-amber-700", desc: "Host or reviewer corrects summary, decisions, owners." },
              { num: "5", step: "Retain", color: "bg-slate-900 dark:bg-slate-800", desc: "Search, export, retain, or delete per policy." }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white dark:bg-gray-900 rounded-[20px] border border-slate-200 dark:border-slate-800 flex flex-col justify-start items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/40"
              >
                <div className={`size-7 ${card.color} text-white rounded-full flex items-center justify-center font-extrabold   text-xs`}>
                  {card.num}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold   leading-6 mb-1">
                    {card.step}
                  </h4>
                  <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   leading-5">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: Live Product Showcase */}
      <section 
        ref={showcaseSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden transition-all duration-1000 transform ${
          showcaseSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.25),transparent_60%)]" />

        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-12 relative z-10">
          
          {/* Header Block Context */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-indigo-400 rounded-full" />
              <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
                LIVE PRODUCT SHOWCASE
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
              Clarity and control in the meeting itself.
            </h2>
          </div>

          {/* Interactive Split Feature View Showcase */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left Graphic Display Mockup Side */}
            <div className="lg:col-span-6 w-full h-80 sm:h-96 rounded-[20px] overflow-hidden bg-slate-900 shadow-2xl border border-white/10 group relative">
              <img 
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-102" 
                src="/sema-meet/image 181.png" 
                alt="Sema Meet active call panel view context layout"
              />
            </div>

            {/* Right Capability Text Feature Cards stack */}
            <div className="lg:col-span-6 flex flex-col gap-4 w-full">
              {[
                { title: "Stage & tiles", desc: "Active speaker, gallery, shared content, spotlight." },
                { title: "Control bar", desc: "Mic, camera, share, chat, captions, AI/recording state." },
                { title: "Host controls", desc: "Lobby, admit, mute requests, roles, meeting lock." }
              ].map((pill, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-white/5 border border-white/10 backdrop-blur-[6px] rounded-xl flex flex-col gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2 text-white font-bold   text-sm">
                    <span>{pill.title}</span>
                  </div>
                  <p className="text-white/70 text-sm font-normal   leading-6 pl-6">
                    {pill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Anchor Nav Action Link */}
          <a href="#" className="inline-flex items-center gap-1.5 text-white hover:text-indigo-300 text-sm font-semibold   pt-4 transition-colors group cursor-pointer">
            <span>Explore meeting experience</span>
            <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </section>

      {/* SECTION 3: Meeting Intelligence */}
      <section 
        ref={intelligenceSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          intelligenceSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-10">
          
          {/* Main Title Center Block Typography */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                MEETING INTELLIGENCE
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
              Evidence-linked drafts. Human review, always.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base font-normal   leading-7 max-w-2xl mx-auto">
              AI-generated meeting outputs are reviewed before sharing. Summaries link to permitted transcript timestamps and speakers, and every correction preserves reviewer, reason, and version.
            </p>
          </div>

          {/* Large Workspace Product Interface Vector Frame */}
          <div className="w-full h-72 sm:h-96 md:h-[480px] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 group relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102" 
              src="/sema-meet/image 182.png" 
              alt="Zoiko Sema meeting text analytics and review pane overview mockup layout"
            />
          </div>

          {/* Action Context Interaction Button */}
          <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold   pt-4 transition-all group cursor-pointer">
            <span>Explore AI summaries</span>
            <ArrowRight className="size-4 transform group-hover:translate-x-0.5 transition-transform" />
          </a>

        </div>
      </section>

    </div>
  );
}