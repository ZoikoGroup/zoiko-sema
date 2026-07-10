'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Shared Reusable Intersection Observer Hook ──
function useElementInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ZoikoSemaProductSuite() {
  const { ref: planRef, inView: planInView } = useElementInView(0.10);
  const { ref: featureRef, inView: featureInView } = useElementInView(0.10);
  const { ref: ctaRef, inView: ctaInView } = useElementInView(0.10);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 font-sans antialiased transition-colors duration-300">
      
      {/* ────────────────────────────────────────────────────────
          SECTION 1: PLAN FIT (PRICING TIERS)
          ──────────────────────────────────────────────────────── */}
      <section 
        ref={planRef} 
        className="w-full py-12 lg:py-14 max-w-6xl mx-auto px-6 space-y-12 lg:space-y-16"
      >
        {/* Header Title Block */}
        <div className={`text-center space-y-4 max-w-2xl mx-auto transition-all duration-700 ease-out ${planInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase block">PLAN FIT</span>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Choose the path that matches how<br />your team works.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed pt-1">
            Start small, scale into business administration, or talk to sales for enterprise governance and ZoikoTime integration.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Growing Teams */}
          <div 
            className={`bg-white dark:bg-slate-900 rounded-[20px] border border-violet-100 dark:border-slate-800/80 p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${planInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '50ms' }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Growing teams</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">Best for teams under 50 people getting organized for the first time.</p>
              </div>
              <ul className="space-y-3 pt-2">
                {['Unlimited channels', 'Meetings & recaps', 'Guest access (limited)'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-900 dark:text-slate-200 text-sm">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 py-3 bg-violet-100 hover:bg-violet-200 text-violet-600 dark:bg-violet-950/40 dark:hover:bg-violet-900/60 dark:text-violet-400 font-bold text-sm rounded-[46px] transition-all duration-200 active:scale-98">
              Start free
            </button>
          </div>

          {/* Card 2: Business Teams (Featured Dark Theme) */}
          <div 
            className={`bg-slate-900 dark:bg-slate-900 rounded-[20px] border border-slate-900 dark:border-violet-500/20 p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl relative md:scale-[1.03] z-10 ${planInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-xl font-bold">Business teams</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">Best for departments needing structure, admin visibility, and AI governance.</p>
              </div>
              <ul className="space-y-3 pt-2">
                {['Admin console', 'AI recap policies', 'Advanced integrations'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-white text-sm">
                    <span className="text-violet-400 font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-[46px] transition-all duration-200 shadow-lg shadow-blue-600/20 active:scale-98">
              Get a demo
            </button>
          </div>

          {/* Card 3: Enterprise Organizations */}
          <div 
            className={`bg-white dark:bg-slate-900 rounded-[20px] border border-violet-100 dark:border-slate-800/80 p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${planInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Enterprise organizations</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">Best for organizations needing SSO, compliance, and ZoikoTime governance.</p>
              </div>
              <ul className="space-y-3 pt-2">
                {['SSO & SCIM', 'Enterprise reporting', 'ZoikoTime integration'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-900 dark:text-slate-200 text-sm">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 py-3 bg-violet-100 hover:bg-violet-200 text-violet-600 dark:bg-violet-950/40 dark:hover:bg-violet-900/60 dark:text-violet-400 font-bold text-sm rounded-[46px] transition-all duration-200 active:scale-98">
              Talk to sales
            </button>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 2: READY FOR BUSINESS (STRUCTURE & CONTROLS)
          ──────────────────────────────────────────────────────── */}
      <section 
        ref={featureRef}
        className="w-full bg-[#303059] dark:bg-slate-900 py-12 lg:py-14 text-white overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12 lg:space-y-16">
          
          {/* Section Titles */}
          <div className={`text-center space-y-4 max-w-2xl mx-auto transition-all duration-700 ease-out ${featureInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready for business communication<br />that needs structure and control.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed pt-1">
              Zoiko Sema supports secure access, admin visibility, policy controls, AI governance, integration readiness, and enterprise support.
            </p>
          </div>

          {/* Features Horizontal Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Access & identity', desc: 'Role-based access, SSO, and MFA support for controlled sign-in.' },
              { title: 'Data & retention', desc: 'Retention policies and audit logs for communication and AI usage.' },
              { title: 'AI governance', desc: 'Policy controls decide where and how AI recap features are used.' },
              { title: 'Guest oversight', desc: 'Expiring access, domain restrictions, and review reminders for external users.' }
            ].map((item, idx) => (
              <div 
                key={item.title}
                className={`bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-start space-y-2 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] ${featureInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <h3 className="text-white text-base font-bold tracking-tight">{item.title}</h3>
                <p className="text-slate-300 text-xs font-normal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Links */}
          <div className={`flex flex-wrap items-center justify-center gap-8 pt-4 transition-all duration-500 delay-300 ${featureInView ? 'opacity-100' : 'opacity-0'}`}>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-[62px] shadow-lg shadow-blue-600/10 transition-all duration-200 active:scale-95">
              Talk to sales
            </button>
            <button className="text-white hover:text-slate-200 text-sm font-bold border-b border-white/40 pb-1 transition-colors duration-200">
              Get a demo
            </button>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3: CLOSING ENDPOINT (CONVERGENT CTA BLOCK)
          ──────────────────────────────────────────────────────── */}
      <section 
        ref={ctaRef}
        className="w-full bg-[#303059] dark:bg-slate-900 pb-20 lg:pb-24 text-white border-t border-white/10 transition-colors duration-300"
      >
        <div className={`max-w-[1248px] mx-auto px-6 text-center space-y-8 transition-all duration-1000 ease-out ${ctaInView ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.98]'}`}>
          
          <div className="space-y-4 max-w-3xl mx-auto pt-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight lg:leading-12">
              Give your business one place to<br className="hidden sm:inline" /> communicate, meet, decide, and follow through.
            </h2>
            <p className="text-purple-200 text-base leading-relaxed max-w-2xl mx-auto pt-2">
              See how Zoiko Sema helps teams manage communication with structure, security, AI-assisted follow-up, and enterprise-ready governance.
            </p>
          </div>

          {/* Interaction Button Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-900 hover:bg-slate-100 text-base font-bold rounded-[50px] transition-all duration-200 active:scale-95 shadow-md">
              Get a demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-base font-bold rounded-[50px] border border-white/30 transition-all duration-200 active:scale-95 backdrop-blur-sm">
              Start free
            </button>
            <button className="w-full sm:w-auto py-2 sm:py-0 text-white hover:text-slate-200 text-base font-bold border-b border-white/40 transition-colors duration-200">
              Talk to sales
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}