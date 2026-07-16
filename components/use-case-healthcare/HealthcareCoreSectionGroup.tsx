"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Custom Intersection Observer Hook for Entrance Animations ---
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
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

// ==========================================
// 1. HEALTHCARE WORK PATTERNS SECTION
// ==========================================
function HealthcareWorkPatterns() {
  const { ref, isVisible } = useScrollReveal();

  const scenarios = [
    {
      badge: "Shift handoffs",
      text: "Source-linked handoff, receiving role, acknowledgement, and audit.",
      actionText: "See handoffs"
    },
    {
      badge: "Multidisciplinary huddles",
      text: "Virtual huddle, source coverage, reviewed summary, and owned follow-up.",
      actionText: "Explore huddles"
    },
    {
      badge: "Cross-facility coordination",
      text: "Facility filter, role groups, and tokenized references.",
      actionText: "Explore the hub"
    },
    {
      badge: "On-call & coverage",
      text: "Role-based coverage room, acknowledgement, and escalation path.",
      actionText: "See coordination"
    },
    {
      badge: "Quality & policy review",
      text: "Restricted review space, decision log, and corrective actions.",
      actionText: "Explore governance"
    },
    {
      badge: "External care-partner coordination",
      text: "Approved domain, purpose, scope, expiry, and revocation.",
      actionText: "See external access"
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-violet-50/50 dark:bg-slate-950/80 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              HEALTHCARE WORK PATTERNS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Recognizable scenarios for operational coordination.
          </h2>
        </div>

        {/* Hero Mockup Panel */}
        <div className="w-full aspect-[1136/320] rounded-[20px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-md group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/usecase-healthcare/image 91.png"
            alt="Dashboard displaying healthcare workspace scenarios"
          />
        </div>

        {/* Grid Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-[20px] border border-slate-200/80 dark:border-slate-700/80 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group/card"
            >
              <div className="space-y-3">
                <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                  {scenario.badge}
                </span>
                <p className="text-slate-900 dark:text-white text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                  {scenario.text}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold font-['Inter'] transition-colors"
                >
                  <span>{scenario.actionText}</span>
                  <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. EXTERNAL CARE-PARTNER COORDINATION SECTION
// ==========================================
function ExternalCarePartnerCoordination() {
  const { ref, isVisible } = useScrollReveal();

  const blocks = [
    {
      title: "Approved domain & purpose",
      desc: "Verified partner organization and stated business purpose."
    },
    {
      title: "Scope & expiry",
      desc: "Minimum necessary access with mandatory expiry or review."
    },
    {
      title: "Revocation",
      desc: "Offboarding revokes sessions and confirms records treatment."
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 relative bg-slate-900 dark:bg-gray-950 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Background radial soft light gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-600/30 to-indigo-600/0 to-60% pointer-events-none" />

      <div className="max-w-[1136px] mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-indigo-400 rounded-full" />
            <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              EXTERNAL CARE-PARTNER COORDINATION
            </span>
          </div>
          <h2 className="text-white dark:text-slate-100 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Labs, imaging, home care, and vendors — narrow, time-bounded access.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Block - Showcase Image */}
          <div className="lg:col-span-6 w-full aspect-[589/384] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="/usecase-healthcare/image 88.png"
              alt="External security dashboard review panel"
            />
          </div>

          {/* Right Block - Steps */}
          <div className="lg:col-span-6 space-y-4">
            {blocks.map((block, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 dark:bg-gray-900/40 rounded-2xl border border-white/15 dark:border-slate-800 backdrop-blur-[6px] transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/60"
              >
                <h4 className="text-white dark:text-slate-100 text-sm font-bold font-['Inter'] mb-1">
                  {block.title}
                </h4>
                <p className="text-white/70 dark:text-gray-400 text-sm font-normal font-['Inter'] leading-normal">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. GOVERNANCE AND BOUNDARIES SECTION
// ==========================================
function GovernanceAndBoundaries() {
  const { ref, isVisible } = useScrollReveal();

  const rules = [
    {
      title: "EHR / system-of-record boundary",
      desc: "The EHR/EMR remains the clinical system of record; Sema names the source and last sync."
    },
    {
      title: "AI governance",
      desc: "AI may summarize permitted communication and propose follow-up; it must not diagnose, recommend treatment, or replace clinical judgment."
    },
    {
      title: "Minimum-necessary access",
      desc: "Show only what's required for the coordination task — never the full clinical record."
    },
    {
      title: "Emergency-system boundary",
      desc: "Zoiko Sema is not an emergency dispatch, clinical alarm, or patient-safety monitoring system."
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              GOVERNANCE AND BOUNDARIES
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Identity, minimum necessary, AI review, retention, and clear system boundaries.
          </h2>
        </div>

        {/* Center Panel Mockup Showcase */}
        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/usecase-healthcare/image 89.png"
            alt="Governance monitoring boundary controls visual frame"
          />
        </div>

        {/* Detailed Guidelines List */}
        <div className="bg-white dark:bg-gray-800 rounded-[20px] border border-slate-200 dark:border-slate-700/80 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] divide-y divide-slate-100 dark:divide-slate-700 px-6 sm:px-8">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors rounded-lg px-2"
            >
              <h3 className="text-slate-900 dark:text-white text-base font-bold font-['Inter'] shrink-0 md:w-1/3">
                {rule.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-normal font-['Inter'] leading-relaxed md:w-2/3">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Redirect Action Link */}
        <div className="flex justify-center pt-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold font-['Inter'] transition-colors group"
          >
            <span>Explore security & compliance</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN COMBINED CONTAINER COMPONENT
// ==========================================
export default function HealthcareCoreSectionGroup() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900">
      <HealthcareWorkPatterns />
      <ExternalCarePartnerCoordination />
      <GovernanceAndBoundaries />
    </div>
  );
}