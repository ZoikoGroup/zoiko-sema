'use client';

import React, { useEffect, useRef, useState } from 'react';

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

function SharedStyles() {
  return (
    <style>{`
      @keyframes scFadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes scFloat {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-10px); }
      }
      .sc-hidden  { opacity: 0; transform: translateY(30px); }
      .sc-visible { animation: scFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

      .sc-item { opacity: 0; transform: translateY(22px); }
      .sc-group.sc-group-in .sc-item {
        animation: scFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
      }

      .sc-card {
        transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
      }
      .sc-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(76,29,149,0.12);
      }
      .sc-card-dark:hover {
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        border-color: rgba(255,255,255,0.22) !important;
      }
      .sc-badge { transition: transform .25s ease; }
      .sc-card:hover .sc-badge { transform: scale(1.06); }

      .sc-icon-wrap {
        transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .3s ease;
      }
      .sc-card:hover .sc-icon-wrap {
        transform: scale(1.08) rotate(3deg);
      }

      .sc-btn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
      .sc-btn:hover { transform: translateY(-2px); }

      .sc-nav-link { transition: color .2s ease; }
      .sc-nav-link:hover { color: #4f46e5; }

      .sc-faq-row { transition: border-color .25s ease; }
      .sc-faq-row:hover { border-color: rgb(196 181 253); }

      .sc-float { animation: scFloat 5s ease-in-out infinite; }

      .sc-avatar { transition: transform .25s ease, border-color .25s ease; }
      .sc-avatar:hover { transform: scale(1.06); border-color: rgba(255,255,255,0.7); }

      @media (prefers-reduced-motion: reduce) {
        .sc-hidden, .sc-visible, .sc-item { opacity: 1 !important; transform: none !important; animation: none !important; }
        .sc-card:hover, .sc-btn:hover, .sc-float { transform: none !important; animation: none !important; }
      }
    `}</style>
  );
}


function Hero() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <section className="relative w-full bg-violet-50 dark:bg-slate-900/40 overflow-hidden py-14 sm:py-20 lg:py-0 lg:min-h-[635px] flex items-center font-sans antialiased">
      <div className="relative z-10 max-w-[1248px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div ref={textRef} className={`sc-hidden ${textIn ? 'sc-visible' : ''} flex flex-col items-start gap-4 max-w-[562px]`}>
          <div className="flex items-center gap-2">
            <svg className="size-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Use Case &middot; Secure Communication
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-gray-900 dark:text-white">
            Secure communication for work that{' '}
            <span style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              cannot leak, drift, or lose context.
            </span>
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 leading-7 max-w-[560px]">
            Give teams controlled spaces for sensitive conversations, meetings, files, AI summaries, decisions, and follow-ups — with role-based access, audit trails, retention controls, and guest safeguards.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="sc-btn px-6 py-3 rounded-full text-white text-sm font-semibold shadow-[0px_12px_24px_-12px_rgba(60,60,120,0.6)]" style={{ background: '#4f46e5' }}>
              Get a demo
            </button>
            <button className="sc-btn px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-400 text-sm font-semibold">
              Talk to sales
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-5 pt-1.5 max-w-[520px]">
            Built for confidential collaboration, enterprise governance, and privacy-respecting communication control.
          </p>
        </div>

        <div ref={imageRef} className={`sc-hidden ${imageIn ? 'sc-visible' : ''} w-full flex justify-center lg:justify-end`}>
          <div className={`sc-card ${imageIn ? 'sc-float' : ''} w-full max-w-[608px] aspect-[608/456] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(76,29,149,0.16)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}>
            <img src="/secure-communication/securehero.png" alt="Secure communication workspace preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-violet-200/30 dark:bg-violet-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 size-[380px] rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-3xl pointer-events-none" />
    </section>
  );
}

function IndustriesBar() {
  const { ref, inView } = useInView(0.2);
  const industries = ['Legal', 'Finance', 'HR & People', 'Healthcare', 'Client services', 'Regulated ops'];
  return (
    <section className="w-full bg-slate-900 py-8 font-sans antialiased">
      <div ref={ref} className={`sc-hidden ${inView ? 'sc-visible' : ''} max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-4`}>
        <p className="text-xs font-semibold text-blue-300 text-center tracking-tight">
          Built for confidential teams, client-facing work, and regulated operations
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span key={ind} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-blue-200">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySecureCommunication() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const cards = [
    { title: 'Protect sensitive work', desc: 'Keep confidential discussions, files, and meetings inside approved spaces.', badge: 'Private secure rooms' ,icon:"/secure-communication/Frame (17).png"},
    { title: 'Control access precisely', desc: 'Use roles, domains, expiry, and guest rules to reduce exposure.', badge: 'RBAC · guest expiry' ,icon:"/secure-communication/Frame (18).png"},
    { title: 'Preserve evidence', desc: 'Capture decisions, policy changes, and exports in an auditable trail.', badge: 'Audit-ready',icon:"/secure-communication/Frame (19).png" },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Why Secure Communication</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sensitive work, easier to coordinate — and under control
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[700px]">
            Protect confidential conversations, control who can join, and keep an auditable trail of every decision, policy change, and export.
          </p>
        </div>

        <div ref={gridRef} className={`sc-group ${gridIn ? 'sc-group-in' : ''} w-full grid grid-cols-1 md:grid-cols-3 gap-5`}>
          {cards.map((c, idx) => (
            <div key={c.title} className="sc-item sc-card bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] p-6" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="sc-icon-wrap size-11 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <img className="size-5" src={c.icon} alt="" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{c.title}</h3>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-6 mb-4">{c.desc}</p>
              <span className="sc-badge px-2.5 py-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400">
                {c.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecureWorkspace() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  const leftCards = [
    { title: 'Conversation stream', desc: 'Messages, file cards, decision markers, mentions, and threads in one place.',icon:"/secure-communication/Frame (20).png" },
    { title: 'Meeting tile', desc: 'Scheduled meeting with host controls and recording-permission status.',icon:"/secure-communication/Frame (21).png" },
    { title: 'AI summary panel', desc: 'Action items and decision capture, with guest-visibility rules applied.' ,icon:"/secure-communication/Frame (22).png"},
  ];
  const rightCards = [
    { title: 'Security context panel', desc: 'MFA, domain rules, guest expiry, retention, legal hold, and audit status.' ,icon:"/secure-communication/Frame (23).png"},
    { title: 'File protection', desc: 'Download restrictions and approved-guest sharing on every attachment.' ,icon:"/secure-communication/Frame (24).png"},
    { title: 'Evidence trail', desc: 'Recent audit events with actor, action, timestamp, and object changed.' ,icon:"/secure-communication/Frame (25).png"},
  ];

  const MiniCard = ({ title, desc, idx, icon }: { title: string; desc: string; idx: number,icon:string}) => (
    <div className="sc-item sc-card bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] px-4 py-3.5" style={{ animationDelay: `${idx * 0.1}s` }}>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="sc-icon-wrap size-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
          <img className="size-4 text-blue-600" src={icon} alt="" />
        </div>
        <span className="text-sm font-bold text-slate-900 dark:text-white">{title}</span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">{desc}</p>
    </div>
  );

  return (
    <section className="w-full bg-violet-50 dark:bg-slate-900/60 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Secure Workspace</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            One governed space for the whole sensitive conversation
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[700px]">
            Chat, meetings, files, decisions, AI summaries, and the security context that keeps every action visible — without interrupting the work.
          </p>
        </div>

        <div ref={rowRef} className={`sc-group ${rowIn ? 'sc-group-in' : ''} w-full grid grid-cols-1 lg:grid-cols-[224px_1fr_224px] gap-6 items-center`}>
          <div className="flex flex-col gap-3.5 order-2 lg:order-1">
            {leftCards.map((c, idx) => <MiniCard key={c.title} {...c} idx={idx} />)}
          </div>

          <div className="sc-item sc-card order-1 lg:order-2 w-full aspect-[568/396] max-w-[568px] mx-auto rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(76,29,149,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <img src="/secure-communication/secureimage.png" alt="Secure workspace preview" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-3.5 order-3">
            {rightCards.map((c, idx) => <MiniCard key={c.title} {...c} idx={idx + 3} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowJourney() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  const steps = [
    { n: 'Step 1', title: 'Create secure space', desc: 'Open a space for a client, deal, case, or regulated workflow.', badge: 'Policy template applied',icon:"/secure-communication/Frame (26).png" },
    { n: 'Step 2', title: 'Apply policy', desc: 'Set access, guest, AI, retention, and export controls.', badge: 'Locked / allowed shown',icon:"/secure-communication/Frame (27).png" },
    { n: 'Step 3', title: 'Invite safely', desc: 'Add internal users and approved guests with expiry and domain rules.', badge: 'Scoped guest access' ,icon:"/secure-communication/Frame (28).png"},
    { n: 'Step 4', title: 'Communicate', desc: 'Chat, meet, share files, capture decisions, and assign follow-ups.', badge: 'Security context visible' ,icon:"/secure-communication/Frame (29).png"},
    { n: 'Step 5', title: 'Review evidence', desc: 'Authorized admins review the audit log and export required evidence.', badge: 'Export ready',icon:"/secure-communication/Frame (30).png" },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Workflow Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            From a sensitive conversation to reviewable evidence
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[700px]">
            Five governed steps take work from invitation to audit-ready evidence — with policy applied automatically along the way.
          </p>
        </div>

        <div ref={rowRef} className={`sc-group ${rowIn ? 'sc-group-in' : ''} w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3`}>
          {steps.map((s, idx) => (
            <div key={s.n} className="sc-item relative flex flex-col items-center text-center px-2" style={{ animationDelay: `${idx * 0.1}s` }}>
              {idx !== steps.length - 1 && (
                <span className="hidden lg:block absolute top-[22px] left-1/2 w-full h-0.5 bg-gradient-to-r from-violet-300 to-slate-200 dark:from-violet-800 dark:to-slate-700 -z-10" />
              )}
              <div className="sc-icon-wrap size-11 bg-gradient-to-br from-violet-400 to-blue-600 rounded-xl ring-4 ring-slate-50 dark:ring-slate-800 flex items-center justify-center mb-3">
                <img className="size-5" src={s.icon} alt="" />
              </div>
              <span className="text-xs font-extrabold text-violet-400">{s.n}</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{s.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mt-1 mb-2">{s.desc}</p>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400">
                {s.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  const scenarios = [
    { tag: 'Decision pin', title: 'Executive communication', desc: 'Board updates, strategic decisions, confidential announcements, and follow-up ownership in a restricted room.',icon:"/secure-communication/Frame (31).png" },
    { tag: 'Guest expiry', title: 'Client & partner work', desc: 'External collaboration with scoped file access, approved sharing, and meeting notes — guests expire on schedule.',icon:"/secure-communication/Frame (32).png" },
    { tag: 'Audit trail', title: 'Legal & contract review', desc: 'Redlines, approvals, legal hold, decision records, and evidence export in one contract-review panel.' ,icon:"/secure-communication/Frame (33).png"},
    { tag: 'AI restricted', title: 'HR & people operations', desc: 'Private employee matters, interviews, and policy conversations — with sensitive-space AI restrictions on.',icon:"/secure-communication/Frame (34).png" },
    { tag: 'Access labels', title: 'Finance & procurement', desc: 'Vendor negotiations, budget approvals, and restricted attachments with clear role visibility.',icon:"/secure-communication/Frame (35).png" },
    { tag: 'Export card', title: 'Regulated operations', desc: 'Retention, audit trail, sensitive-topic exclusions, and evidence-ready workflows for compliance teams.' ,icon:"/secure-communication/Frame (36).png"},
  ];

  return (
    <section className="w-full bg-violet-50 dark:bg-slate-900/60 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Secure Communication Scenarios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Recognize your team&apos;s sensitive work
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[700px]">
            From boardroom to client project to regulated operations — secure spaces adapt to the work that can&apos;t leak.
          </p>
        </div>

        <div ref={gridRef} className={`sc-group ${gridIn ? 'sc-group-in' : ''} w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
          {scenarios.map((s, idx) => (
            <div key={s.title} className="sc-item sc-card bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] overflow-hidden" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="px-4 py-4 flex flex-col gap-2.5" style={{ background: 'linear-gradient(115deg, #1e2255, #2b2f6e)' }}>
                <div className="sc-icon-wrap size-9 bg-cyan-400/20 rounded-[10px] flex items-center justify-center">
                  <img className="size-5" src={s.icon} alt="" />
                </div>
                <span className="sc-badge w-fit px-2 py-[3px] bg-blue-400/20 border border-blue-400/30 rounded-full text-[9.5px] font-bold text-blue-100">
                  {s.tag}
                </span>
              </div>
              <div className="px-4 pt-3.5 pb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernanceControls() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  const controls = [
    { title: 'Access control', desc: 'Prevents uncontrolled participation and makes responsibility clear.', tags: ['Roles', 'Approved domains', 'Guest expiry', 'Ownership transfer'],icon:"/secure-communication/Frame (40).png" },
    { title: 'Meeting security', desc: 'Keeps sensitive live discussions inside approved boundaries.', tags: ['Passcodes', 'Waiting room', 'Host controls', 'Recording rules'] ,icon:"/secure-communication/Frame (41).png"},
    { title: 'File protection', desc: 'Reduces risk while keeping collaboration practical.', tags: ['Download limits', 'External sharing', 'Classification', 'Approved storage'] ,icon:"/secure-communication/Frame (42).png"},
    { title: 'Data governance', desc: 'Supports compliance workflows and long-term evidence.', tags: ['Retention', 'Legal hold', 'Export policy', 'Region preference'],icon:"/secure-communication/Frame (43).png" },
    { title: 'AI governance', desc: 'Allows AI assistance without uncontrolled exposure.', tags: ['Summary approval', 'Guest visibility', 'Sensitive exclusions', 'AI audit log'] ,icon:"/secure-communication/Frame (44).png"},
    { title: 'Audit readiness', desc: 'Creates evidence for internal review and procurement confidence.', tags: ['Admin actions', 'Access changes', 'Policy updates', 'Export & AI usage'] ,icon:"/secure-communication/Frame (45).png"},
  ];

  return (
    <section className="w-full bg-slate-900 py-20 md:py-24 font-sans antialiased text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Governance Controls</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Enterprise security and admin readiness
          </h2>
          <p className="text-base text-blue-200 leading-7 max-w-[700px]">
            Visible, precise controls across access, meetings, files, data, AI, and audit — calm security language, no surveillance.
          </p>
        </div>

        <div ref={gridRef} className={`sc-group ${gridIn ? 'sc-group-in' : ''} w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
          {controls.map((c, idx) => (
            <div key={c.title} className="sc-item sc-card sc-card-dark bg-white/[0.04] rounded-2xl border border-white/10 p-5" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="sc-icon-wrap size-11 bg-blue-400/20 rounded-xl flex items-center justify-center mb-3">
                <img className="size-6" src={c.icon} alt="" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{c.title}</h3>
              <p className="text-sm text-blue-100/80 leading-5 mb-3">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-blue-400/[0.14] border border-blue-400/[0.26] rounded-full text-[10px] font-semibold text-blue-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIGovernance() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <section className="w-full bg-violet-50 dark:bg-slate-900/40 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className={`sc-hidden ${textIn ? 'sc-visible' : ''} flex flex-col items-start gap-3.5 max-w-[540px]`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">AI Governance for Sensitive Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            AI that is visible, explainable, and auditable
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-6">
            Zoiko Sema never treats AI as unrestricted. In secure spaces, summaries and follow-ups run only where policy allows — with scope labels, guest controls, and audit events on by default.
          </p>
        </div>

        <div ref={imageRef} className={`sc-hidden ${imageIn ? 'sc-visible' : ''} w-full`}>
          <div className={`sc-card ${imageIn ? 'sc-float' : ''} w-full aspect-[661/496] max-w-[661px] mx-auto rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(76,29,149,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}>
            <img src="/secure-communication/secure2.png" alt="AI governance preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AuditTrail() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.1);

  const rows = [
    { time: 'Today, 10:32 AM', actorInitial: 'AP', actor: 'Ava Patel', role: 'Security Admin', action: 'Guest access expiry changed', object: 'Secure room: client-contract-review', change: ['7 days', '3 days'] },
    { time: 'Today, 10:18 AM', actorInitial: 'ML', actor: 'Marcus Lee', role: 'Compliance Admin', action: 'Decision logged', object: 'Approve clause 4.2', change: ['—', 'Recorded'] },
    { time: 'Today, 09:57 AM', actorInitial: 'AP', actor: 'Ava Patel', role: 'Security Admin', action: 'AI summary allowed', object: 'Room policy: AI governance', change: ['Off', 'Approved spaces'] },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Audit, Retention &amp; Evidence</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Every change is recorded and ready to export
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[700px]">
            Access changes, policy updates, AI usage, and exports are captured in an auditable trail — available to the right roles.
          </p>
        </div>

        <div ref={tableRef} className={`sc-hidden ${tableIn ? 'sc-visible' : ''} w-full max-w-[1000px] bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0px_12px_34px_-14px_rgba(23,28,70,0.28)] overflow-hidden`}>
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex flex-wrap items-center gap-3 justify-between">
            <div className="flex items-center gap-2">
              <svg className="size-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base font-bold text-slate-900 dark:text-white">Audit log &middot; client-contract-review</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-900 dark:text-gray-300">
                Retention <span className="text-blue-600 dark:text-blue-400 font-bold">90 days</span>
              </span>
              <span className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-900 dark:text-gray-300">
                Legal hold <span className="text-blue-600 dark:text-blue-400 font-bold">Off</span>
              </span>
              <span className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-900 dark:text-gray-300">
                Export <span className="text-blue-600 dark:text-blue-400 font-bold">Compliance &amp; Auditor</span>
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  {['Timestamp', 'Actor', 'Action', 'Object', 'Before → After', 'Policy'].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-gray-400 border-b border-slate-100 dark:border-slate-700">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                    <td className="px-4 py-3 text-xs text-slate-900 dark:text-gray-300 align-top">{r.time}</td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-lg bg-gradient-to-br from-violet-400 to-blue-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                          {r.actorInitial}
                        </span>
                        <div>
                          <div className="text-xs text-slate-900 dark:text-white">{r.actor}</div>
                          <div className="text-xs text-slate-500 dark:text-gray-400">{r.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-900 dark:text-white align-top">{r.action}</td>
                    <td className="px-4 py-3 text-xs text-slate-900 dark:text-white align-top">{r.object}</td>
                    <td className="px-4 py-3 text-xs align-top">
                      <span className="text-slate-500 dark:text-gray-400">{r.change[0]}</span>
                      <span className="text-slate-900 dark:text-white"> &rarr; </span>
                      <span className="text-slate-900 dark:text-white font-semibold">{r.change[1]}</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 dark:text-emerald-400">
                        &#10003; Compliant
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-2">
            <span className="w-fit px-3.5 py-2 bg-slate-100 dark:bg-slate-800 rounded-[10px] border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-2 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
              &#10003; Export requested successfully. This action has been recorded in the audit log.
            </span>
            <span className="text-xs text-slate-500 dark:text-gray-400">
              Viewable &amp; exportable by Owner, Compliance Admin, Security Admin, and Auditor.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialOutcomes() {
  const { ref: quoteRef, inView: quoteIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.1);

  const outcomes = [
    { title: 'Sensitive work stays in approved spaces', desc: 'Private rooms with role-based access',icon:"/secure-communication/Frame (37).png" },
    { title: 'Guest exposure reduced', desc: 'Scoped access with expiry and domain rules' ,icon:"/secure-communication/Frame (38).png"},
    { title: 'Evidence ready on request', desc: 'Decisions, exports, and audit events preserved' ,icon:"/secure-communication/Frame (39).png"},
  ];

  return (
    <section className="w-full bg-indigo-700 py-20 md:py-24 font-sans antialiased text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div ref={quoteRef} className={`sc-hidden ${quoteIn ? 'sc-visible' : ''} flex flex-col items-start gap-6`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Outcomes</span>
          <div className="relative">
            <span className="absolute -left-2 -top-6 text-6xl font-bold text-white/40 pointer-events-none select-none">&ldquo;</span>
            <blockquote className="text-2xl sm:text-3xl font-bold leading-9 pl-4">
              Sensitive client and legal work used to be spread across email and chat with no trail. Now it lives in one governed room — controlled guests, clear decisions, and audit evidence we can export on request.
            </blockquote>
          </div>
          <div className="flex items-center gap-3 pt-2 pl-4">
            <img className="sc-avatar size-12 rounded-3xl border-2 border-white/40 object-cover" src="/secure-communication/div (1).png" alt="Security & Compliance Lead" />
            <div>
              <div className="text-base font-bold leading-6">Security &amp; Compliance Lead</div>
              <div className="text-sm text-slate-300 leading-5">Professional services firm</div>
            </div>
          </div>
        </div>

        <div ref={listRef} className={`sc-group ${listIn ? 'sc-group-in' : ''} flex flex-col gap-3.5`}>
          {outcomes.map((o, idx) => (
            <div key={o.title} className="sc-item sc-card sc-card-dark w-full px-5 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-[2px] flex items-center gap-4" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="sc-icon-wrap size-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <img className="size-5 text-white" src={o.icon} alt="" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-5">{o.title}</div>
                <div className="text-xs text-slate-300 leading-5">{o.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.05);

  const faqs = [
    { q: 'What is Zoiko Sema Secure Communication?', a: "It's a Zoiko Sema use case for managing sensitive chats, meetings, files, decisions, AI summaries, follow-ups, and audit trails inside controlled communication spaces." },
    { q: 'How does Zoiko Sema help protect sensitive conversations?' },
    { q: 'Can external guests join secure spaces?' },
    { q: 'Can AI summaries be restricted in secure communication spaces?' },
    { q: 'Does Zoiko Sema support audit trails?' },
    { q: 'Is Secure Communication only for regulated teams?' },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 md:py-24 font-sans antialiased text-slate-900 dark:text-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        <div ref={headRef} className={`sc-hidden ${headIn ? 'sc-visible' : ''} max-w-[760px] text-center flex flex-col items-center space-y-3`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Answers for security, IT, and compliance
          </h2>
        </div>

        <div ref={listRef} className={`sc-group ${listIn ? 'sc-group-in' : ''} w-full flex flex-col gap-3`}>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`sc-item sc-faq-row bg-white dark:bg-slate-800 rounded-xl border overflow-hidden ${isOpen ? 'border-violet-200 dark:border-violet-800 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)]' : 'border-slate-100 dark:border-slate-700'}`}
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <button onClick={() => toggle(idx)} className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left group">
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{item.q}</span>
                  <span className="text-violet-600 dark:text-violet-400 text-lg font-semibold shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 text-base text-slate-500 dark:text-slate-400 leading-6">
                    {item.a || 'Placeholder content detailing specifics, configurations, integration patterns, and operational controls tailored to secure communication.'}
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

function FinalCTA() {
  const { ref, inView } = useInView(0.2);
  return (
    <section className="w-full bg-slate-900 py-20 md:py-24 font-sans antialiased text-white">
      <div ref={ref} className={`sc-hidden ${inView ? 'sc-visible' : ''} max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-6`}>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to see secure communication in action?
        </h2>
        <p className="text-base text-blue-100 leading-7 max-w-[640px]">
          See how Zoiko Sema gives teams governed spaces for sensitive conversations, meetings, files, AI summaries, decisions, and audit-ready evidence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button className="sc-btn px-6 py-3 rounded-full text-white text-sm font-semibold shadow-[0px_12px_24px_-12px_rgba(60,60,120,0.6)]" style={{ background: '#4f46e5' }}>
            Get a demo
          </button>
          <button className="sc-btn px-6 py-3 rounded-full bg-white border border-gray-200 text-indigo-700 text-sm font-semibold">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default function SecureCommunicationPage() {
  return (
    <div className="w-full bg-white dark:bg-slate-900">
      <SharedStyles />
      <Hero />
      <IndustriesBar />
      <WhySecureCommunication />
      <SecureWorkspace />
      <WorkflowJourney />
      <Scenarios />
      <GovernanceControls />
      <AIGovernance />
      <AuditTrail />
      <TestimonialOutcomes />
      <FAQ />
      <FinalCTA />
    </div>
  );
}