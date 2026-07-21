'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ── Intersection observer hook for scroll-triggered activation ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Shared scroll/hover styles used by every section below
function SharedStyles() {
  return (
    <style>{`
      @keyframes edFadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .ed-hidden  { opacity: 0; transform: translateY(32px); }
      .ed-visible { animation: edFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

      .ed-item { opacity: 0; transform: translateY(22px); }
      .ed-group.ed-group-in .ed-item {
        animation: edFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
      }

      .ed-card {
        transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
      }
      .ed-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(76,29,149,0.10);
      }
      html.dark .ed-card:hover {
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
      .ed-card-dark:hover {
        box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        border-color: rgba(255,255,255,0.22) !important;
      }

      .ed-badge {
        transition: transform .25s ease;
      }
      .ed-card:hover .ed-badge {
        transform: scale(1.06);
      }

      .ed-nav-btn {
        transition: transform .2s ease, background-color .2s ease;
      }
      .ed-nav-btn:hover {
        transform: scale(1.1);
      }

      .ed-faq-row {
        transition: border-color .25s ease, box-shadow .25s ease;
      }
      .ed-faq-row:hover {
        border-color: rgb(196 181 253);
      }

      .ed-btn {
        transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
      }
      .ed-btn:hover {
        transform: translateY(-2px);
      }

      @media (prefers-reduced-motion: reduce) {
        .ed-hidden, .ed-visible, .ed-item { opacity: 1 !important; transform: none !important; animation: none !important; }
        .ed-card:hover, .ed-nav-btn:hover, .ed-btn:hover { transform: none !important; }
      }
    `}</style>
  );
}

// ─────────────────────────────────────────────────────────────
// 1. Migration & Change Management
// ─────────────────────────────────────────────────────────────
function MigrationChangeManagement() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  const migrationRows = [
    { item: 'Legacy chat channels', owner: 'IT owner', status: 'Migrated', tone: 'emerald' },
    { item: 'Meeting history & recordings', owner: 'Ops owner', status: 'In progress', tone: 'violet' },
    { item: 'Shared files & records', owner: 'Compliance owner', status: 'In progress', tone: 'violet' },
    { item: 'User groups & directory', owner: 'Security owner', status: 'Queued', tone: 'yellow' },
    { item: 'Client / external spaces', owner: 'CS owner', status: 'At risk', tone: 'pink' },
  ];

  const toneClasses: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
    violet: 'bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400',
    yellow: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400',
    pink: 'bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-400',
  };

  const sideCards = [
    {
      title: 'Workspace templates',
      desc: 'Department, project, executive, external client, and regulated workspace templates ready to apply.',
    },
    {
      title: 'Training & champions',
      desc: 'Admin training, security training, end-user onboarding, and department champions with escalation paths.',
    },
    {
      title: 'Communications plan',
      desc: 'Launch emails, help-center links, leadership announcement, office hours, and a feedback loop.',
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-10">
        <div
          ref={headRef}
          className={`ed-hidden ${headIn ? 'ed-visible' : ''} max-w-[720px] w-full text-center flex flex-col items-center space-y-3`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Migration &amp; change management
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Move teams over without disruption.
          </h2>
        </div>

        <div
          ref={rowRef}
          className={`ed-group ${rowIn ? 'ed-group-in' : ''} w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start`}
        >
          {/* Migration board table */}
          <div className="ed-item ed-card w-full bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800 overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-200">Migration board</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-[1fr_180px_140px] px-5 py-2.5 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Source system</span>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Owner</span>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Status</span>
            </div>
            {migrationRows.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 sm:grid-cols-[1fr_180px_140px] gap-2 sm:gap-0 items-center px-5 py-3.5 ${
                  i !== migrationRows.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''
                }`}
              >
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 truncate">{row.item}</span>
                <span className="text-xs text-gray-500 dark:text-slate-400 truncate">{row.owner}</span>
                <span
                  className={`ed-badge w-fit px-2.5 py-1 rounded-[10px] text-xs font-bold ${toneClasses[row.tone]}`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          {/* Side info cards */}
          <div className="flex flex-col gap-4 w-full">
            {sideCards.map((card) => (
              <div
                key={card.title}
                className="ed-item ed-card bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800 p-5"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">{card.title}</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. Integrations & APIs (Slider Modifed)
// ─────────────────────────────────────────────────────────────
function IntegrationsAPIs() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const integrations = [
    { code: 'ID', name: 'Identity', desc: 'Microsoft Entra ID, Okta, Google Identity, SAML, OIDC, SCIM.', status: 'Connected', tone: 'emerald', chip: 'bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400' },
    { code: 'CAL', name: 'Calendar & meetings', desc: 'Google Calendar, Microsoft 365, Outlook, iCloud Calendar.', status: 'Connected', tone: 'emerald', chip: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400' },
    { code: 'STO', name: 'Storage & content', desc: 'Google Drive, OneDrive, SharePoint, Box, Dropbox.', status: 'Available', tone: 'violet', chip: 'bg-emerald-50 text-green-600 dark:bg-emerald-950/60 dark:text-emerald-400' },
    { code: 'WF', name: 'Workflow & business', desc: 'Salesforce, HubSpot, ServiceNow, Jira, Asana, Monday, Zendesk.', status: 'Available', tone: 'violet', chip: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/60 dark:text-yellow-400' },
    { code: 'DEV', name: 'Developer tools', desc: 'APIs, webhooks, event logs, deployment exports, audit stream.', status: 'Enterprise only', tone: 'yellow', chip: 'bg-violet-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-400' },
    { code: 'ZK', name: 'Zoiko ecosystem', desc: 'ZoikoTime, ZoikoID, Zoiko Cloud, ZoikoVertex.', status: 'Connected', tone: 'emerald', chip: 'bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400' },
  ];

  const toneClasses: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
    violet: 'bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400',
    yellow: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400',
  };

  // Showing exactly 4 cards at a time means maximum slide factor is length - 4
  const maxIndex = integrations.length - 4;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col gap-10">
        
        {/* Header Block with Linked Arrow Click Controls */}
        <div
          ref={headRef}
          className={`ed-hidden ${headIn ? 'ed-visible' : ''} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4`}
        >
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Integrations &amp; APIs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Fit into your existing enterprise stack.
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={handlePrev}
              aria-label="Previous" 
              className="ed-nav-btn size-10 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full border border-zinc-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white active:scale-95 transition-transform"
            >
              &larr;
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next" 
              className="ed-nav-btn size-10 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full border border-zinc-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white active:scale-95 transition-transform"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Mask Window Container */}
        <div className="w-full overflow-hidden">
          <div
            ref={gridRef}
            className={`ed-group ${gridIn ? 'ed-group-in' : ''} flex transition-transform duration-500 ease-out gap-5`}
            style={{ transform: `translateX(calc(-${currentIndex * 25}% + ${currentIndex * 3.75}px))` }}
          >
            {integrations.map((intg, idx) => (
              <div
                key={intg.name}
                // Calculates precise flex layout sizing to ensure exactly 4 cards are viewed at once on large monitors
                className="ed-item ed-card relative bg-white dark:bg-slate-800 rounded-2xl border border-violet-100 dark:border-slate-700 p-6 shrink-0 w-[280px] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] transition-all duration-300"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`size-10 rounded-xl flex items-center justify-center text-xs font-bold ${intg.chip}`}>
                    {intg.code}
                  </div>
                  <span className={`ed-badge px-2.5 py-1 rounded-[10px] text-[10px] font-bold ${toneClasses[intg.tone]}`}>
                    {intg.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{intg.name}</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">{intg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pagination Width Trackers */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className="h-2 rounded-md transition-all duration-300"
              style={{ 
                width: currentIndex === i ? '24px' : '8px', 
                background: currentIndex === i ? '#7c3aed' : '#ddd6fe' 
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. Adoption & Retention
// ─────────────────────────────────────────────────────────────
function AdoptionRetention() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  const kpis = [
    { value: '91%', label: 'Activated users' },
    { value: '84%', label: 'Training completion' },
    { value: '2', label: 'Open policy exceptions' },
    { value: '−37%', label: 'Support tickets vs. wk 1' },
  ];
  const weeks = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6'];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          ref={leftRef}
          className={`ed-hidden ${leftIn ? 'ed-visible' : ''} flex flex-col items-start space-y-5`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Adoption &amp; retention
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Deployment doesn&apos;t end at go-live.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-7 max-w-[520px]">
            Track activation, workspace engagement, training completion, policy exceptions, and support trends — and share executive reports that keep leadership confident.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 w-full sm:w-auto">
            <button className="ed-btn bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded-full w-full sm:w-auto">
              Get a demo
            </button>
            <a href="#reporting" className="text-violet-600 dark:text-violet-400 text-sm font-bold hover:underline w-full sm:w-auto text-center sm:text-left">
              See reporting
            </a>
          </div>
        </div>

        <div
          ref={cardRef}
          className={`ed-hidden ${cardIn ? 'ed-visible' : ''} ed-card w-full bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800 shadow-[0px_30px_60px_-30px_rgba(20,22,60,0.16)] p-5 sm:p-7`}
        >
          <div className="grid grid-cols-2 gap-3 mb-6">
            {kpis.map((k) => (
              <div key={k.label} className="bg-gray-50 dark:bg-slate-800/40 rounded-xl p-4">
                <div className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-1">{k.value}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400">{k.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200">Weekly active workspaces</span>
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full">
              &#9650; Trending up
            </span>
          </div>

          {/* Simple trend chart */}
          <div className="relative w-full h-28 mb-2">
            <svg viewBox="0 0 560 110" className="w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="28" x2="560" y2="28" stroke="#f1f1f4" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1.5" />
              <line x1="0" y1="56" x2="560" y2="56" stroke="#f1f1f4" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1.5" />
              <line x1="0" y1="84" x2="560" y2="84" stroke="#f1f1f4" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1.5" />
              <path
                d="M0,90 C90,70 140,40 220,45 C300,50 360,20 440,15 C480,12 520,10 560,5"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
              />
              <path
                d="M0,90 C90,70 140,40 220,45 C300,50 360,20 440,15 C480,12 520,10 560,5 L560,110 L0,110 Z"
                fill="url(#adoptionGradient)"
              />
              <defs>
                <linearGradient id="adoptionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="556" cy="6" r="6" fill="#4F46E5" stroke="#fff" strokeWidth="3" />
            </svg>
          </div>
          <div className="flex justify-between">
            {weeks.map((w) => (
              <span key={w} className="text-xs font-semibold text-slate-400 dark:text-slate-500">{w}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. Enterprise Support
// ─────────────────────────────────────────────────────────────
function EnterpriseSupport() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  const steps = [
    { num: '01', title: 'Pre-sales planning', desc: 'Build a deployment plan before procurement or security review.' },
    { num: '02', title: 'Implementation kickoff', desc: 'Align stakeholders, success metrics, security requirements, and timeline.' },
    { num: '03', title: 'Technical configuration', desc: 'Configure identity, policies, integrations, templates, and data settings.' },
    { num: '04', title: 'Training & launch', desc: 'Prepare admins, champions, support teams, and end users.' },
    { num: '05', title: 'Post-launch optimization', desc: 'Review adoption, support requests, policy exceptions, and outcomes.' },
  ];

  return (
    <section className="w-full bg-slate-900 dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-white transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        <div
          ref={headRef}
          className={`ed-hidden ${headIn ? 'ed-visible' : ''} max-w-[720px] w-full text-center flex flex-col items-center space-y-3`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Enterprise support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            A support model from pre-sales to post-launch optimization.
          </h2>
        </div>

        <div
          ref={rowRef}
          className={`ed-group ${rowIn ? 'ed-group-in' : ''} w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4`}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="ed-item ed-card ed-card-dark bg-white/5 dark:bg-slate-900/60 rounded-2xl border border-white/10 dark:border-slate-800 p-5 h-full"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="text-xl font-extrabold text-violet-400 mb-4">{step.num}</div>
              <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-300 dark:text-slate-400 leading-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. Enterprise FAQ
// ─────────────────────────────────────────────────────────────
function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.05);

  const faqs = [
    {
      q: 'What is Zoiko Sema Enterprise Deployment?',
      a: 'It is the guided rollout path for deploying Zoiko Sema across users, workspaces, identity systems, security policies, integrations, governance settings, and adoption programs.',
    },
    { q: 'Does Zoiko Sema support SSO and SCIM?' },
    { q: 'Can Zoiko Sema be rolled out in phases?' },
    { q: 'How does Zoiko Sema support enterprise security?' },
    { q: 'Can Zoiko Sema integrate with our existing systems?' },
    { q: 'Is deployment sales-assisted?' },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div
          ref={headRef}
          className={`ed-hidden ${headIn ? 'ed-visible' : ''} text-center`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Answers for IT, security, and procurement
          </h2>
        </div>

        <div
          ref={listRef}
          className={`ed-group ${listIn ? 'ed-group-in' : ''} w-full flex flex-col`}
        >
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="ed-item ed-faq-row border-b border-slate-200 dark:border-slate-800"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className="text-violet-600 dark:text-violet-400 text-xl font-normal shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-6 max-w-[680px]">
                    {item.a ||
                      'Placeholder content detailing specifics, configurations, integration patterns, and operational controls tailored to enterprise deployment.'}
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

// ─────────────────────────────────────────────────────────────
// 6. Final CTA banner
// ─────────────────────────────────────────────────────────────
function FinalCTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      className="w-full py-16 md:py-24 font-sans antialiased text-white"
      style={{ background: 'linear-gradient(115deg, #7c3aed 0%, #4338ca 100%)' }}
    >
      <div
        ref={ref}
        className={`ed-hidden ${inView ? 'ed-visible' : ''} max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-5`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          Ready to deploy Zoiko Sema across your enterprise?
        </h2>
        <p className="text-base text-purple-200 leading-7 max-w-[720px]">
          Build a rollout plan for identity, security, migration, governance, integrations, adoption, and support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <Link href="/get-a-demo" className="ed-btn bg-white text-indigo-800 text-base font-bold px-7 py-3.5 rounded-full w-full sm:w-auto inline-flex items-center justify-center">
            Get a demo
          </Link>
          <Link href="/contact-sales" className="ed-btn bg-white/10 border border-white/40 text-white text-base font-bold px-7 py-3.5 rounded-full w-full sm:w-auto inline-flex items-center justify-center">
            Talk to sales
          </Link>
          <Link href="/deploymentplan" className="text-white text-base font-bold border-b border-white/50 pb-1 pt-2 sm:pt-0">
            Request deployment plan
          </Link>
        </div>
        <p className="text-sm text-violet-200 pt-4 max-w-[700px]">
          Built for enterprise communication teams that need rollout confidence, governance, and measurable adoption.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Page assembly — all sections, in order, on one page
// ─────────────────────────────────────────────────────────────
export default function EnterpriseDeploymentPage() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      <SharedStyles />
      <MigrationChangeManagement />
      <IntegrationsAPIs />
      <AdoptionRetention />
      <EnterpriseSupport />
      <EnterpriseFAQ />
      <FinalCTA />
    </div>
  );
}