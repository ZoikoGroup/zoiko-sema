"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Columns, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  Sparkles,
  Layers,
  FileText,
  HelpCircle,
  AlertTriangle,
  Lock
} from 'lucide-react';

export default function ZoikoWorkspaceFeatures() {
  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <CaseWorkspaceSection />
      <EscalationSection />
      <AiGovernanceSection />
    </div>
  );
}

/* ==========================================================================
   1. CASE WORKSPACE SECTION
   ========================================================================== */
function CaseWorkspaceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={targetRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 border-b border-slate-100 dark:border-slate-800 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-500 dark:text-teal-400 text-xs font-semibold  uppercase tracking-wide">
              CASE WORKSPACE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight">
            Every surface has a clear audience and an audit trail.
          </h2>
          <p className="max-w-2xl text-gray-500 dark:text-gray-400 text-base font-normal font-['Inter']">
            Customer-visible and internal-only regions are explicitly separated, reviewed, and permission-bound — by design.
          </p>
        </div>

        {/* Feature Grid & Visual Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Element */}
          <div className="lg:col-span-4 w-full aspect-square max-h-[384px] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md group border border-slate-200/50 dark:border-transparent">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/customer-support/image 208.png" alt="Workspace visualization" />
          </div>

          {/* Center Info Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* Internal Collaboration Card */}
            <div className="p-6 bg-slate-50 dark:bg-gray-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-700/40 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group">
              <div className="size-11 bg-violet-400/10 rounded-2xl flex justify-center items-center mb-4 text-violet-500 dark:text-violet-400">
                <img className="size-5 transition-transform group-hover:rotate-6"  src="/customer-support/Icon (28).png"/>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold   mb-2">Internal Collaboration</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal  leading-relaxed">
                Private thread, tasks, files, decisions, and specialist comments. Never visible to customers.
              </p>
            </div>

            {/* Knowledge Panel Card */}
            <div className="p-6 bg-slate-50 dark:bg-gray-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-700/40 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group">
              <div className="size-11 bg-emerald-500/10 rounded-2xl flex justify-center items-center mb-4 text-emerald-600 dark:text-emerald-400">
                <BookOpen className="size-5 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold   mb-2">Knowledge Panel</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal  leading-relaxed">
                Suggested articles and macros. Agent verifies relevance and edits before use.
              </p>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="lg:col-span-4 w-full aspect-square max-h-[384px] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md group border border-slate-200/50 dark:border-transparent">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/customer-support/image 209.png" alt="Workspace knowledge panel metrics visualization" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. ESCALATION AND HANDOFF SECTION (Dark Theme Accentuated)
   ========================================================================== */
function EscalationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  const requirements = [
    "Packet blocks submission when required fields are missing",
    "Specialist must accept — not just be assigned",
    "Original owner retains customer-update responsibility",
    "Customer-update cadence is defined at escalation creation",
    "Return requires validated answer, not just a fix attempt"
  ];

  return (
    <section 
      ref={targetRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-slate-900 dark:bg-gray-950 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Informational Block */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-400 text-xs font-semibold  uppercase tracking-wide">
              ESCALATION AND HANDOFF
            </span>
          </div>
          
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold   leading-tight max-w-xl">
            No escalation without accepted ownership and a customer-update plan.
          </h2>
          
          <p className="text-slate-300 text-base font-normal  leading-relaxed max-w-2xl">
            Every escalation requires a complete packet, a named specialist who accepts, and a defined cadence for customer updates — even while the specialist is investigating.
          </p>

          {/* Custom Checklists */}
          <div className="w-full py-4 space-y-3">
            {requirements.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="pt-0.5 shrink-0">
                  <CheckCircle2 className="size-4 text-teal-400 transition-transform group-hover:scale-115" />
                </div>
                <p className="text-slate-300 dark:text-gray-300 text-sm font-normal  leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Core Action Button Trigger */}
          <button className="h-12 px-7 bg-blue-600 hover:bg-blue-500 rounded-full shadow-[0px_2px_12px_0px_rgba(52,87,232,0.35)] flex justify-center items-center gap-2 font-bold  text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98">
            View escalation flow
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* Right Graphical Dashboard Simulation Block */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] aspect-[4/3] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group transform transition-transform duration-500 hover:scale-[1.015] border border-white/5">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" src="/customer-support/image 210.png" alt="Escalation lifecycle map pipeline workflow graphic screen" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. AI GOVERNANCE SECTION
   ========================================================================== */
function AiGovernanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      index: "01",
      title: "Case summary",
      desc: "Summarizes customer-visible and internal context separately. Source links, audience boundary, and confidence shown.",
      type: "governed"
    },
    {
      index: "02",
      title: "Classification suggestion",
      desc: "Suggests issue type, product, severity, and required expertise. Authorized person confirms or overrides.",
      type: "governed"
    },
    {
      index: "03",
      title: "Reply draft",
      desc: "Drafts acknowledgements, updates, and workarounds. No autonomous legal, refund, credit, or outage commitments.",
      type: "governed"
    },
    {
      index: "04",
      title: "Escalation summary",
      desc: "Prepares reproduction, impact, evidence, and customer expectation. Agent validates completeness.",
      type: "governed"
    },
    {
      index: "05",
      title: "Knowledge candidate",
      desc: "Suggests article or macro from repeated resolution patterns. Knowledge owner reviews sources and safety.",
      type: "governed"
    },
    {
      index: "06",
      title: "Autonomous customer commitment",
      desc: "AI may not make refunds, credits, replacements, SLA credits, legal statements, or case-closure decisions autonomously.",
      type: "denied"
    }
  ];

  return (
    <section 
      ref={targetRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-slate-50 dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-500 dark:text-teal-400 text-xs font-semibold  uppercase tracking-wide">
              AI GOVERNANCE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight">
            AI assists. Authorized people decide.
          </h2>
          <p className="max-w-2xl text-gray-500 dark:text-gray-400 text-base font-normal ">
            Eligibility, source-linked assistance, human review, and authorized application are built into every AI capability in the support workspace.
          </p>
        </div>

        {/* Six-Column Core Data Card Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between ${
                card.type === 'denied' 
                  ? 'bg-red-500/[0.03] dark:bg-red-950/20 border-red-500/20 shadow-sm' 
                  : 'bg-white dark:bg-gray-800 border-slate-200/60 dark:border-slate-700/60 shadow-sm'
              }`}
            >
              <div>
                {/* Upper Dynamic Pill Tag Header Row */}
                <div className="w-full flex justify-between items-center mb-4">
                  <span className={`text-2xl font-extrabold   leading-none ${
                    card.type === 'denied' ? 'text-red-500/20 dark:text-red-400/20' : 'text-teal-400/20 dark:text-teal-500/30'
                  }`}>
                    {card.index}
                  </span>
                  
                  {card.type === 'denied' ? (
                    <div className="px-2.5 py-1 bg-red-500/10 dark:bg-red-400/10 rounded-full inline-flex items-center gap-1">
                      <Lock className="size-2.5 text-red-500 dark:text-red-400" />
                      <span className="text-red-500 dark:text-red-400 text-[10px] font-bold  tracking-wide">Not permitted</span>
                    </div>
                  ) : (
                    <div className="px-2.5 py-1 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full inline-flex items-center gap-1">
                      <Sparkles className="size-2.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold  tracking-wide">Governed</span>
                    </div>
                  )}
                </div>

                {/* Main Content Layout Body */}
                <h3 className={`text-sm font-bold   leading-snug mb-2 ${
                  card.type === 'denied' ? 'text-red-500 dark:text-red-400' : 'text-slate-900 dark:text-white'
                }`}>
                  {card.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 text-xs font-normal  leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Policy Scope Bottom Alert Banner */}
        <div className="p-6 bg-teal-400/[0.03] dark:bg-teal-950/10 rounded-2xl border border-teal-500/20 dark:border-teal-500/30 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
          <div className="pt-0.5 text-teal-500 dark:text-teal-400 shrink-0">
            <ShieldCheck className="size-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-teal-600 dark:text-teal-400 text-sm font-bold  leading-tight">
              AI governance scope applies to every workspace
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal  leading-relaxed">
              Eligibility evaluates organization, workspace, case type, participant, role, and plan before processing. Sensitive cases — legal, security, regulated — can disable AI independently. Every AI use, review, correction, and rejection is recorded in the audit trail.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}