'use client';

import React, { useEffect, useState, useRef } from 'react';

interface WorkflowStep {
  id: string;
  tag: string;
  title: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  imgSrc: string;
}

// ── Intersection Observer Hook for independent node triggers ──
function useElementInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // Retain structural state after entering
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' } // Triggers slightly before element meets the viewpoint frame
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ── Individual Card Wrapper Component ──
function WorkflowCard({ step, index }: { step: WorkflowStep; index: number }) {
  const { ref, inView } = useElementInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-violet-100/80 dark:border-slate-800/80 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 ease-out 
        /* Scroll Float-Up Animation Logic */
        ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'}
        /* Desktop Hover Interactions */
        hover:-translate-y-2 hover:scale-[1.01] hover:border-violet-200 hover:shadow-[0_20px_40px_rgba(109,40,217,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
      `}
      style={{
        transitionDelay: `${(index % 3) * 0.05}s`, // Staggers initial entry layouts
      }}
    >
      {/* Numeric Plate Identifier Tag */}
      <span className="absolute top-6 right-8 text-slate-300 dark:text-slate-600 font-bold tracking-wider text-sm font-mono group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-300">
        {step.id}
      </span>

      {/* Left Side: Mock Graphic Cover Container */}
      <div className="w-full md:w-44 h-44 shrink-0 bg-violet-50 dark:bg-slate-800 rounded-2xl overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-500">
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={step.imgSrc}
          alt={`${step.title} layout illustration preview`}
          loading="lazy"
        />
        {/* Subtle overlay accent on hover */}
        <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/[0.02] transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Right Side: Informative Text Block Area */}
      <div className="flex-1 flex flex-col items-start space-y-3 pr-0 md:pr-8">
        <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
          {step.description}
        </p>

        {/* Operational Scope Badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full transition-transform duration-300 group-hover:scale-105 ${step.badgeBg}`}>
          <span className={`text-[11px] font-bold tracking-wide ${step.badgeText}`}>
            {step.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkspaceWorkflows() {
  const { ref: headerRef, inView: headerInView } = useElementInView(0.1);

  const steps: WorkflowStep[] = [
    {
      id: '01',
      tag: 'Shared context',
      title: 'Align teams',
      description: 'Keep conversations organized by team, project, and client instead of scattered across tools and inboxes. Threaded channels give every discussion a home, so context stays intact and searchable long after the conversation ends.',
      badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
      badgeText: 'text-violet-600 dark:text-violet-400',
      imgSrc: '/buisness-communication/image 22.png',
    },
    {
      id: '02',
      tag: 'Agenda → recap',
      title: 'Run better meetings',
      description: 'Connect agendas, video meetings, and notes so nothing gets lost after the call ends. Pre-meeting briefs, live transcriptions, and auto-generated summaries keep everyone aligned whether they attended or not.',
      badgeBg: 'bg-sky-100 dark:bg-sky-950/60',
      badgeText: 'text-sky-700 dark:text-sky-400',
      imgSrc: '/buisness-communication/image 23.png',
    },
    {
      id: '03',
      tag: 'Decision log',
      title: 'Capture decisions',
      description: 'Turn meeting outcomes into logged decisions and assigned actions with clear owners and due dates. Track progress in real time and send automated reminders so follow-through never falls through the cracks.',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40',
      badgeText: 'text-green-600 dark:text-green-400',
      imgSrc: '/buisness-communication/image 24.png',
    },
    {
      id: '04',
      tag: 'Guest spaces',
      title: 'Coordinate clients',
      description: 'Bring partners and clients into controlled spaces without losing internal context or oversight. Set granular permissions for every guest, and keep sensitive discussions private while collaborating openly on shared deliverables.',
      badgeBg: 'bg-yellow-50 dark:bg-yellow-950/30',
      badgeText: 'text-yellow-700 dark:text-yellow-400',
      imgSrc: '/buisness-communication/image 25.png',
    },
    {
      id: '05',
      tag: 'RBAC · policy',
      title: 'Govern access',
      description: 'Apply roles, guest limits, and policy controls that scale as your organization grows. Audit logs and compliance dashboards give admins full visibility into who accessed what and when.',
      badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
      badgeText: 'text-violet-600 dark:text-violet-400',
      imgSrc: '/buisness-communication/image 26.png',
    },
    {
      id: '06',
      tag: 'Integrations',
      title: 'Keep workflows moving',
      description: 'Integrate calendars, storage, and workflow tools so work keeps moving between the apps teams already use. Two-way syncs ensure updates flow automatically, reducing manual handoffs and keeping every system in lockstep.',
      badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
      badgeText: 'text-indigo-700 dark:text-indigo-400',
      imgSrc: '/buisness-communication/image 27.png',
    },
  ];

  return (
    <>
      <style>{`
        .bg-grid-pattern {
          background-size: 44px 44px;
          background-image: 
            linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
        }
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(51, 65, 85, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(51, 65, 85, 0.12) 1px, transparent 1px);
        }
      `}</style>

      <section className="w-full relative bg-slate-50 dark:bg-slate-950 py-20 lg:py-28 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-70" />

        <div className="max-w-[1054px] mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
          
          {/* Header Block */}
          <div
            ref={headerRef}
            className={`max-w-[800px] text-center space-y-4 transition-all duration-700 ease-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              One workspace for the communication work that moves your business.
            </h2>
          </div>

          {/* Vertical Dynamic Task Flow Stack */}
          <div className="w-full flex flex-col gap-6">
            {steps.map((step, index) => (
              <WorkflowCard key={step.id} step={step} index={index} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}