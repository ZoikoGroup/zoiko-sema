"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Plus, Minus, Layers, CheckSquare, FileText, Calendar, Search } from 'lucide-react';

// Intersection observer hook to handle the dynamic entry float-up transformations
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

export default function ZoikoSemaExtendedSuite() {
  const workspaceSection = useScrollEntrance();
  const useCasesSection = useScrollEntrance();
  const faqSection = useScrollEntrance();
  const footerCtaSection = useScrollEntrance();

  // State tracker for FAQ accordions
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* SECTION 1: Connected Workspace */}
      <section 
        ref={workspaceSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-violet-50/50 dark:bg-gray-900/40 border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 transform ${
          workspaceSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-12">
          
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                CONNECTED WORKSPACE
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
              Channels, tasks, files, documents, calendar, mail, and search.
            </h2>
          </div>

          {/* Hero Main Mockup Panel View */}
          <div className="w-full h-64 sm:h-80 md:h-[480px] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800/80 group relative bg-white dark:bg-gray-900">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              src="/sema-meet/image 183.png" 
              alt="Connected holistic collaborative ecosystem screen view framework layout"
            />
            {/* Center Hover Float Link Anchor */}
            <div className="absolute inset-0 bg-slate-950/10 dark:opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
          </div>

          <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold   text-sm transition-all group">
            <span>Explore workspace</span>
            <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Horizontal Grid Capability Pills matrix */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            {[
              { label: "Channels & Spaces"},
              { label: "Tasks & To-dos"},
              { label: "Documents & Files"},
              { label: "Calendar & Mail" },
              { label: "Search & Workflows"}
            ].map((pill, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-white dark:bg-gray-900 rounded-[20px] border border-slate-200 dark:border-slate-800 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-500/40 cursor-default"
              >
                <span className="text-slate-900 dark:text-gray-100 text-xs font-bold   leading-5">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: Use Cases */}
      <section 
        ref={useCasesSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 transform ${
          useCasesSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-12">
          
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                USE CASES
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
              Standups, client meetings, leadership, sales, onboarding, and regulated reviews.
            </h2>
          </div>

          <div className="w-full h-64 sm:h-80 rounded-[20px] overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              src="/sema-meet/image 184.png" 
              alt="Sema team sync dashboard applications matrix showcase grid view image"
            />
          </div>

          {/* 3x2 Grid Matrix of target operations */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "Team standups", desc: "Fast, recurring syncs with decisions captured automatically." },
              { tag: "Client meetings", desc: "Keep external conversations connected to files and follow-up." },
              { tag: "Leadership reviews", desc: "Confidential-ready discussions with clear governance." },
              { tag: "Sales calls", desc: "Connect calls to CRM context and next steps." },
              { tag: "Onboarding", desc: "Repeatable sessions with tracked completion." },
              { tag: "Regulated reviews", desc: "Policy-aware recording, retention, and audit trails." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white dark:bg-gray-900 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-500/40 group"
              >
                <div className="space-y-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold   uppercase tracking-wide block">
                    {item.tag}
                  </span>
                  <p className="text-slate-900 dark:text-gray-300 text-base font-normal   leading-6">
                    {item.desc}
                  </p>
                </div>
                
                <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold   text-sm group-hover:text-blue-700 transition-colors">
                  <span>Select use case</span>
                  <ArrowRight className="size-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: FAQ Accordion Panel Row Blocks */}
      <section 
        ref={faqSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          faqSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[756px] mx-auto flex flex-col items-center gap-10">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                FAQ
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold   leading-tight tracking-tight">
              Questions about Sema Meet
            </h2>
          </div>

          {/* Accordion List Container */}
          <div className="w-full flex flex-col gap-4">
            {[
              "What is Sema Meet?",
              "Are AI meeting summaries automatic?",
              "Can guests join a Sema Meet?",
              "How is recording and retention handled?",
              "Does Sema Meet connect to my workspace?",
              "Is Sema Meet suitable for enterprise deployment?"
            ].map((question, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="w-full bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left text-slate-900 dark:text-white font-bold   text-base hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <span>{question}</span>
                    <div className="text-blue-600 dark:text-blue-400 shrink-0 ml-4">
                      {isOpen ? <Minus className="size-4 stroke-[3px]" /> : <Plus className="size-4 stroke-[3px]" />}
                    </div>
                  </button>
                  
                  {/* Expandable Body Text Panel placeholder */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-sm text-slate-600 dark:text-gray-400   leading-6">
                      Sema Meet configures adaptive sync variables to structure secure channels, automated audit trails, and human-in-the-loop review layers customized explicitly to your enterprise policy architecture.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: Get Started CTA Footer Block Panel */}
      <section 
        ref={footerCtaSection.elementRef}
        className={`w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden transition-all duration-1000 transform ${
          footerCtaSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Deep Ambient Background Radiant */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.3),transparent_60%)] animate-pulse duration-[8000ms]" />

        <div className="max-w-[720px] mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-indigo-400 rounded-full" />
              <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
                GET STARTED
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold   tracking-tight leading-tight">
              Make every meeting count.
            </h2>
            <p className="text-white/70 text-base font-normal   leading-7 max-w-xl mx-auto">
              Start free, see a guided demo, or open Sema Meet if you already have a workspace.
            </p>
          </div>

          {/* Action Interactive Callout Row elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold   rounded-full shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all cursor-pointer">
              Start free
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-sm font-semibold   rounded-full hover:-translate-y-0.5 transition-all cursor-pointer">
              Get a demo
            </button>
          </div>

          <a href="#" className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold   text-sm pt-2 transition-colors group">
            <span>Open Sema Meet</span>
            <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </section>

    </div>
  );
}