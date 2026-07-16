"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ChevronRight } from 'lucide-react';

export default function InstallationDashboardPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden">
      <InstallationJourneySection />
      <SecurityVerificationSection />
      <EnterpriseDeploymentSection />
    </div>
  );
}

// ============================================================================
// SECTION 1: Your Installation Journey (Dark Background Feature Block)
// ============================================================================
function InstallationJourneySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: 1, title: "Choose Platform", desc: "Detection service matches your OS automatically." },
    { id: 2, title: "Digital Verification", desc: "Integrity check ensures the publisher is verified." },
    { id: 3, title: "Instant Launch", desc: "One-click sign-in with your corporate SSO." }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-24 bg-slate-900 dark:bg-slate-950 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Content Block */}
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-3">
            <h2 className="text-white text-3xl sm:text-4xl font-semibold    leading-tight tracking-tight">
              Your Installation Journey
            </h2>
            <p className="text-slate-400 text-base font-normal    leading-relaxed max-w-xl">
              Follow our streamlined onboarding process to get up and running with Zoiko Sema in under 2 minutes. From platform selection to your first secure meeting.
            </p>
          </div>

          {/* Stepper Grid Container */}
          <div className="space-y-6 pt-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4 sm:gap-6 group">
                <div className="size-8 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold    text-sm shrink-0 shadow-sm group-hover:bg-indigo-600 transition-colors">
                  {step.id}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white text-base font-bold   ">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-normal    leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Frame Showcase Block */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-neutral-300/10 bg-slate-800 group relative">
            <img 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
              src="/download/Image1 (5).png" 
              alt="Zoiko Sema application simplified onboarding initialization overview interface layout" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2: Security Verification (Light / Adaptive Background Core Block)
// ============================================================================
function SecurityVerificationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-24 bg-white dark:bg-slate-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Media Frame Showcase Block */}
        <div className="flex-1 w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[540px] aspect-[16/9] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 dark:border-neutral-800 bg-neutral-100 dark:bg-slate-800 group">
            <img 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
              src="/download/Image1 (1).png" 
              alt="Zoiko Sema workspace configuration validation encryption shield compliance matrix status info graphic layout" 
            />
          </div>
        </div>

        {/* Content Block */}
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-3">
            <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-semibold    leading-tight tracking-tight">
              Security Verification
            </h2>
            <p className="text-zinc-700 dark:text-gray-300 text-base font-normal    leading-relaxed max-w-xl">
              Our software is digitally signed and verified by global certificate authorities. Every build undergoes rigorous automated integrity checks before deployment.
            </p>
          </div>

          {/* Verification Status Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Card 1 */}
            <div className="p-6 bg-zinc-100 dark:bg-slate-800/60 rounded-xl border border-transparent dark:border-slate-800 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-600/20 group">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 className="size-5 shrink-0" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-zinc-900 dark:text-white text-base font-bold   ">
                  Identity Verified
                </h4>
                <p className="text-zinc-600 dark:text-gray-400 text-xs font-normal   ">
                  Authentic Zoiko Sema Publisher
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-zinc-100 dark:bg-slate-800/60 rounded-xl border border-transparent dark:border-slate-800 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-600/20 group">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Lock className="size-5 shrink-0" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-zinc-900 dark:text-white text-base font-bold   ">
                  E2EE Ready
                </h4>
                <p className="text-zinc-600 dark:text-gray-400 text-xs font-normal   ">
                  End-to-End Encryption support
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: Enterprise Deployment Dashboard (Extended Framework Block)
// ============================================================================
function EnterpriseDeploymentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-violet-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-start gap-12 sm:gap-16">
        
        {/* Header Block Centered Layout */}
        <div className="max-w-[768px] w-full text-center flex flex-col items-center gap-4">
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-semibold    leading-tight tracking-tight">
            Enterprise Deployment Dashboard
          </h2>
          <p className="text-zinc-700 dark:text-gray-300 text-sm sm:text-base font-normal    leading-relaxed max-w-2xl">
            Centrally manage rollouts, update policies, and monitor device health across your entire organization.
          </p>
        </div>

        {/* Dashboard Frame Showcase */}
        <div className="w-full max-w-[1198px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-300/40 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-[6px] group">
          <img 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
            src="/download/Image1 (2).png" 
            alt="Zoiko Sema high-end enterprise systems dashboard administration console metrics panel illustration layout" 
          />
        </div>

      </div>
    </section>
  );
}