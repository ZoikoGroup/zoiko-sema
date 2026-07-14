'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image'; 
import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type LinkItem = { title: string; description: string; color: string; action: string };

const navigation = [
  ['at-a-glance', 'At a glance'],
  ['data-categories', 'Data categories'],
  ['purposes', 'Processing purposes'],
  ['controls', 'Admin controls'],
  ['meeting-data', 'AI & meeting data'],
  ['lifecycle', 'Retention & export'],
  ['subprocessors', 'Subprocessors'],
  ['requests', 'Privacy requests'],
  ['related-links', 'Related links'],
  ['faq', 'FAQ'],
];

const overviewCards = [
  ['TR', 'Transparency', 'We explain what data is handled and why, then route deeper terms to the Privacy Notice.', 'View Privacy Notice', 'bg-violet-600', 'bg-violet-100/60', 'text-violet-600'],
  ['CC', 'Customer control', 'Workspace owners and admins configure access, sharing, retention, and exports where supported.', 'View Admin Console', 'bg-blue-500', 'bg-sky-100/60', 'text-blue-500'],
  ['AI', 'AI & meeting data', 'AI summaries, transcripts, and meeting data connect to Responsible AI governance.', 'Read AI Use Policy', 'bg-teal-600', 'bg-emerald-100/60', 'text-teal-600'],
  ['RR', 'Request routes', 'Submit access, correction, deletion, or export requests through the right workflow.', 'Submit a request', 'bg-green-500', 'bg-green-100/60', 'text-green-500'],
  ['SP', 'Subprocessors', 'A category overview plus the authoritative list and change-notification process.', 'View Subprocessors', 'bg-amber-500', 'bg-amber-100/60', 'text-amber-500'],
  ['EN', 'Enterprise review', 'DPA, Security Policy, and Compliance materials connected for procurement and legal.', 'View DPA', 'bg-slate-900', 'bg-slate-200', 'text-slate-900'],
];

const purposesLeft = [
  ['01', 'Service delivery', 'Provide, maintain, and secure communication, meeting, and collaboration features.', 'Privacy Notice', 'text-blue-500', 'bg-sky-100'],
  ['03', 'Support & operations', 'Respond to requests, troubleshoot issues, and operate customer accounts.', 'Help Center', 'text-teal-600', 'bg-green-100'],
  ['05', 'Admin governance', 'Enable customer-configured access, retention, sharing, and audit controls.', 'Admin Console', 'text-amber-500', 'bg-orange-100'],
];

const purposesRight = [
  ['02', 'Security & integrity', 'Protect accounts, prevent abuse, detect incidents, and safeguard the platform.', 'Security Policy', 'text-violet-600', 'bg-violet-100'],
  ['04', 'AI features', 'Generate summaries, action items, and assistive output where features are enabled.', 'AI Use Policy', 'text-green-500', 'bg-green-100'],
  ['06', 'Legal & compliance', 'Meet legal obligations and support compliance and assurance review.', 'DPA & Compliance', 'text-slate-900', 'bg-slate-200'],
];

const dataRows = [
  ['AI meeting summaries', 'Summaries, highlights, and decisions generated from meetings where enabled by admins.', 'AI Use Policy'],
  ['Transcripts & captions', 'Meeting captions and transcripts where the feature is turned on and supported.', 'AI Use Policy'],
  ['Recordings', 'Meeting recordings governed by admin settings, retention, and sharing controls.', 'Admin Console'],
  ['Channels & spaces', 'Messages, threads, and shared files within workspace channels and spaces.', 'Privacy Notice'],
  ['Exports & reports', 'Customer-initiated exports of communication and meeting records where supported.', 'Admin Console'],
  ['Developer / API', 'Data exchanged through API workflows and integrations admins enable.', 'Developer Docs'],
];

const subprocessorCategories = [
  { prefix: 'Infra', title: 'Cloud infrastructure', desc: 'Hosting, storage, and compute providers.', color: 'bg-blue-500' },
  { prefix: 'Comms', title: 'Communications', desc: 'Real-time meeting and messaging delivery.', color: 'bg-violet-600' },
  { prefix: 'AI', title: 'AI processing', desc: 'AI model and feature processing where enabled.', color: 'bg-teal-600' },
  { prefix: 'Ops', title: 'Operations & support', desc: 'Analytics, support, and platform tooling.', color: 'bg-amber-500' },
];

const relatedLinks: LinkItem[] = [
  { title: 'Security Center', description: 'Security safeguards, access controls, and enterprise security review.', color: '#3b82f6', action: 'Visit Security Center' },
  { title: 'Responsible AI', description: 'How AI features are governed, reviewed, and kept transparent.', color: '#0d9488', action: 'View Responsible AI' },
  { title: 'Compliance', description: 'Compliance posture, assurance documents, and review paths.', color: '#10b981', action: 'View Compliance' },
  { title: 'Data Processing Addendum', description: 'Supports enterprise privacy and legal review of data processing.', color: '#7c3aed', action: 'View DPA' },
  { title: 'Accessibility', description: 'Accessibility commitments and barrier-reporting routes.', color: '#334155', action: 'View Accessibility' },
  { title: 'Report a Concern', description: 'Raise a privacy, security, or misuse concern to the right team.', color: '#f43f5e', action: 'Report a Concern' },
];

const faqsList = [
  {question:'What is the Privacy & Data page?', answer:'It is a practical privacy hub that summarizes how Zoiko Sema handles data — categories, purposes,admin controls, AI and meeting data, retention, subprocessors, and request routes — and links to approved legal documents like the Privacy Notice and DPA.'},
  {question:'What data does Zoiko Sema handle?', answer:'The data depends on the products and settings your workspace uses, including account, communication, and meeting information.'},
  {question:'Who controls data in my workspace?', answer:'Workspace owners and administrators manage the controls available through their plan and assigned role.'},
  {question:'How do I submit a privacy request?', answer:'Use the request form above and provide enough details for the privacy team to route the request correctly.'},
  {question:'What do enterprise reviewers need?', answer:'The DPA, Security Center, Compliance materials, and Subprocessor list provide the relevant review paths.'}
];

export default function PrivacyPage() {
  const [activeRequest, setActiveRequest] = useState('access');
    const [sectionRef, isVisible] = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeSection, setActiveSection] = useState('at-a-glance');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

  return (
    <main className="relative w-full overflow-hidden bg-gray-50 text-slate-900 sans-serif">
      {/* Background radial accent node */}
      <div className="pointer-events-none absolute right-[5rem] top-[117px] h-56 w-56 rounded-full bg-radial from-violet-100 to-transparent to-70% blur-xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#10183d] text-white">
        <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-80 w-70 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="mx-auto grid min-h-[27rem] max-w-62xl items-center gap-10 px-9 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_25rem] lg:px-12 lg:py-20">
          <Reveal className="relative z-10 max-w-xl">
            <p className="text-xs font-bold uppercase text-violet-300 tracking-wide">Privacy & data</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Privacy & Data you can review, control, and request.</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">A practical privacy hub for understanding your data, making informed choices, and accessing the controls and support routes that matter to your workspace.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#at-a-glance" className="bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100">Privacy overview</a>
              <a href="#requests" className="bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-500">Submit a privacy request</a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto w-full">
            <div className="absolute -inset-8 bg-violet-400/15 blur-2xl" />
            <Image src="/privacy&data/image 104.png" alt="Professional reviewing privacy and data controls" width={707} height={540} priority className="rounded-xl relative aspect-[1.12]   shadow-2xl shadow-black/30" />
          </Reveal>
        </div>
      </section>

      {/* 2-Column Main Section Grid */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[20rem_minmax(0,1fr)] pt-0 pb-0  lg:pt-0 items-stretch">
        
        {/* Sidebar Track: Keeps the blue column filled completely to the bottom of the section */}
        <aside className="hidden lg:block bg-[#10183d] text-white rounded-l-2xl relative">
          <div className="sticky top-24 p-6 py-8 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wide">On this page</p>
            <ul className="flex flex-col gap-1">
              {navigation.map(([id, label]) => (
                <li key={id} className={`border-l-2 transition-all ${activeSection === id ? 'border-violet-400 bg-white/10' : 'border-transparent'}`}>
                  <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} className="w-full px-4 py-2 text-left text-sm font-semibold text-white/90 hover:text-white transition">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Primary Content Stream Panel */}
        <div className="min-w-0 space-y-24 lg:space-y-32 bg-white p-8 rounded-r-2xl border-y border-r border-slate-100">
          
          {/* Section: At A Glance */}
          <section id="at-a-glance" data-section className="scroll-mt-24">
            <div className="max-w-2xl flex flex-col gap-3">
              <p className="text-xs font-bold uppercase text-violet-600 tracking-wide">PRIVACY AT A GLANCE</p>
              <h2 className="text-3xl font-bold text-slate-900">Data practices in plain language.</h2>
              <p className="text-base font-normal text-slate-600 leading-6">
                A quick summary of how Zoiko Sema handles data — with deeper terms routed to the Privacy Notice, DPA, Security Policy, and Admin Console.
              </p>
            </div>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {overviewCards.map(([badge, title, description, link, badgeColor, surface, linkColor], index) => (
                <Reveal key={title} delay={index * 80} className={`${surface} flex min-h-[220px] flex-col justify-between rounded-2xl p-6 shadow-sm border border-black/5`}>
                  <div>
                    <span className={`${badgeColor} mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white`}>{badge}</span>
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-xs font-normal leading-5 text-slate-600">{description}</p>
                  </div>
                  <a href="#" className={`mt-5 inline-flex items-center gap-1 text-xs font-bold ${linkColor}`}>{link}<span> →</span></a>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Section: Data Categories */}
          {/* Section: Data Categories */}
<section id="data-categories" data-section className="scroll-mt-24">
  <div className="max-w-[730px] flex flex-col gap-3">
    <p className="text-xs font-bold uppercase text-violet-600 tracking-wide">DATA CATEGORIES</p>
    <h2 className="text-3xl font-bold font-sora text-slate-900">The data surfaces that matter for Zoiko Sema.</h2>
    <p className="text-base font-normal text-slate-600 leading-6">
      Product-specific data categories — not a generic list. Final definitions live in the <br /> Privacy Notice.
    </p>
  </div>

  <Reveal className="mt-7 grid grid-cols-1 md:grid-cols-[469.7px_1fr] bg-violet-100 border border-violet-100 rounded-2xl overflow-hidden shadow-sm max-w-[942px]">
    {/* Left Column: Data Items */}
    <div className="flex flex-col gap-[1px] bg-violet-100">
      {[
        {
          code: 'AC',
          title: 'Account data',
          description: 'Name, email, role, and profile details used to create and manage accounts.',
          bgIcon: 'bg-sky-100',
          textColor: 'text-blue-500'
        },
        {
          code: 'CM',
          title: 'Communication data',
          description: 'Messages, threads, channels, files, and shared content within workspaces.',
          bgIcon: 'bg-green-100',
          textColor: 'text-teal-600'
        },
        {
          code: 'AI',
          title: 'AI-generated data',
          description: 'Summaries, action items, and decisions produced by AI features where enabled.',
          bgIcon: 'bg-orange-100',
          textColor: 'text-amber-500'
        },
        {
          code: 'US',
          title: 'Usage data',
          description: 'Product interaction, diagnostics, and performance signals to run the service.',
          bgIcon: 'bg-sky-100',
          textColor: 'text-blue-500'
        }
      ].map(({ code, title, description, bgIcon, textColor }) => (
        <div key={title} className="flex gap-4 p-6 bg-white h-28 items-start">
          <div className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-sora font-bold text-xs ${bgIcon} ${textColor}`}>
            {code}
          </div>
          <div>
            <h3 className="font-bold font-sora text-slate-900 text-base">{title}</h3>
            <p className="mt-1 text-xs font-normal leading-5 text-gray-500 whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Column: Dynamic Image Visual */}
    <div className="relative min-h-[18rem] md:h-full w-full">
      <Image 
        src="/privacy&data/image 105.png" 
        alt="Zoiko Sema data surfaces visual" 
        width={598} 
        height={435} 
        className="w-full h-full object-cover"
      />
    </div>
  </Reveal>
</section>

          {/* Section: Processing Purposes */}
          <section id="purposes" data-section className="scroll-mt-24">
            <div className="max-w-2xl flex flex-col gap-3 mb-6">
              <p className="text-xs font-bold uppercase text-violet-600 tracking-wide">PROCESSING PURPOSES</p>
              <h2 className="text-3xl font-bold text-slate-900">Why data is processed.</h2>
            </div>
            <div className="grid gap-x-12 md:grid-cols-2">
              <div className="flex flex-col">
                {purposesLeft.map(([number, title, description, tag, numberColor, tagColor], index) => (
                  <Reveal key={title} delay={index * 60} className="flex flex-col relative border-t border-violet-100 py-6 min-h-[144px]">
                    <div className="flex items-start gap-4">
                      <span className={`text-4xl font-extrabold leading-none ${numberColor}`}>{number}</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                        <p className="text-sm font-normal text-gray-500 leading-5 pr-2">{description}</p>
                        <div className="mt-3">
                          <span className={`inline-block rounded-full px-4 py-1 text-xs font-bold ${numberColor} ${tagColor}`}>{tag}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="flex flex-col">
                {purposesRight.map(([number, title, description, tag, numberColor, tagColor], index) => (
                  <Reveal key={title} delay={index * 60} className="flex flex-col relative border-t border-violet-100 py-6 min-h-[144px]">
                    <div className="flex items-start gap-4">
                      <span className={`text-4xl font-extrabold leading-none ${numberColor}`}>{number}</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                        <p className="text-sm font-normal text-gray-500 leading-5 pr-2">{description}</p>
                        <div className="mt-3">
                          <span className={`inline-block rounded-full px-4 py-1 text-xs font-bold ${numberColor} ${tagColor}`}>{tag}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="mt-6 border border-indigo-100 bg-indigo-50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-slate-900">Legal / privacy note</h3>
              <p className="mt-2 text-xs font-normal leading-5 text-indigo-900">Purposes are stated at a high level for orientation. Legal bases, transfers, and regulatory language are defined only in the approved Privacy Notice and Data Processing Addendum.</p>
            </Reveal>
          </section>

          {/* Section: Admin Data Controls */}
          <section id="controls" data-section className="bg-slate-900 px-8 py-14 text-white rounded-2xl scroll-mt-24">
            <p className="text-xs font-bold uppercase text-violet-400 tracking-wide">ADMIN DATA CONTROLS</p>
            <h2 className="mt-2 text-3xl font-bold">Customers govern their own data.</h2>
            <p className="mt-4 max-w-2xl text-base font-normal text-slate-300 leading-6">Zoiko Sema provides controls — workspace owners and admins are responsible for access, sharing, retention, exports, guest access, integrations, and AI settings where supported by plan and role.</p>
            <Reveal className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5">
              <div className="relative h-72 w-full bg-slate-800 rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="/privacy&data/image 106.png" alt="Admin Dashboard Controls Structure Overview" />
              </div>
            </Reveal>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition rounded-full hover:bg-blue-500">View controls in Admin Console</a>
            </div>
          </section>

          {/* Section: AI & Meeting Data */}
          <section id="meeting-data" data-section className="scroll-mt-24">
            <div className="max-w-3xl flex flex-col gap-3">
              <p className="text-xs font-bold uppercase text-violet-600 tracking-wide">AI, MEETING & COLLABORATION DATA</p>
              <h2 className="text-3xl font-bold text-slate-900">Where communication data is generated.</h2>
              <p className="text-base font-normal text-slate-600 leading-6">AI summaries, meetings, captions, recordings, channels, and exports each connect to governance. Responsible AI details live in the AI Use Policy.</p>
            </div>
            <div className="mt-8 border border-violet-100 bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-slate-100">
              {dataRows.map(([title, description, actionText], index) => (
                <Reveal key={title} delay={index * 65} className="grid gap-4 p-6 sm:grid-cols-[14rem_minmax(0,1fr)_10rem] sm:items-center">
                  <h3 className="font-bold text-sm text-slate-900">{title}</h3>
                  <p className="text-sm font-normal text-gray-500 leading-5">{description}</p>
                  <div className="sm:text-right">
                    <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-violet-700">
                      {actionText} <span>→</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

         

         {/* Section: Data Retention Lifecycle */}
<section id="lifecycle" data-section className="scroll-mt-24">
  <div className="max-w-[1122px] bg-indigo-50/50 p-10 rounded-2xl overflow-hidden">
    <div className="max-w-[942px] mx-auto flex flex-col gap-7">
      
      {/* Header */}
      <div className="max-w-[471px] flex flex-col gap-3">
        <p className="text-xs font-bold uppercase text-violet-600 tracking-wide font-sans">
          RETENTION, DELETION & EXPORT
        </p>
        <h2 className="text-3xl font-bold font-sora text-slate-900">
          The data lifecycle at a glance.
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-2 items-start">
        
        {/* Step Indicator & Content List Combo */}
        <div className="flex-1 flex gap-5">
          
          {/* Vertical Timeline Track */}
          <div className="hidden sm:flex flex-col items-center py-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500 flex items-center justify-center font-sora font-bold text-white text-base">
              1
            </div>
            <div className="w-0.5 h-16 bg-slate-200"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-violet-600 flex items-center justify-center font-sora font-bold text-white text-base">
              2
            </div>
            <div className="w-0.5 h-20 bg-slate-200"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-teal-600 flex items-center justify-center font-sora font-bold text-white text-base">
              3
            </div>
            <div className="w-0.5 h-16 bg-slate-200"></div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-green-500 flex items-center justify-center font-sora font-bold text-white text-base">
              4
            </div>
          </div>

          {/* Steps Content Cards Column */}
          <div className="flex-1 flex flex-col gap-4">
            {[
              {
                title: 'Collect',
                desc: 'Data is created through accounts, communication, meetings, and AI features.',
                hasBadge: false,
              },
              {
                title: 'Retain',
                desc: 'Retention follows customer-configured settings where supported by plan.',
                hasBadge: false,
              },
              {
                title: 'Delete',
                desc: 'Data is deleted per settings, request routes, or contractual terms.',
                hasBadge: false,
              },
              {
                title: 'Export',
                desc: 'Customers can export records where supported for portability and review.',
                hasBadge: true,
              },
            ].map((step, idx) => (
              <div 
                key={step.title} 
                className="relative bg-white rounded-2xl border border-violet-100 p-5 min-h-[5rem] flex flex-col justify-center"
              >
                {/* Mobile step badges */}
                <div className="sm:hidden mb-1 font-bold text-xs text-violet-500">
                  STEP 0{idx + 1}
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold font-sora text-slate-900 text-base">
                    {step.title}
                  </h3>
                  {step.hasBadge && (
                    <span className="bg-green-100 text-teal-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      On request
                    </span>
                  )}
                </div>
                
                <p className="mt-2 text-gray-500 text-sm font-normal font-sans leading-5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Dynamic Image Visual */}
        <div className="w-full lg:w-100 h-120 shrink-0 relative bg-slate-900 rounded-2xl overflow-hidden self-stretch lg:self-auto">
          <Image 
            src="/privacy&data/image 107.png" 
            alt="Zoiko Sema workspace illustration" 
            width={414} 
            height={551} 
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  </div>
</section>
          {/* Section: Privacy Requests Form */}
         {/* Section: Privacy Requests Form */}
<section id="requests" data-section className="scroll-mt-24">
  <div className="max-w-[941px] flex flex-col gap-5">
    
    {/* Header */}
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold uppercase text-violet-600 tracking-wide font-sans">
        PRIVACY REQUESTS
      </p>
      <h2 className="text-3xl font-bold font-sora text-slate-900">
        Submit a privacy request.
      </h2>
      <p className="text-base font-normal text-slate-600 leading-6 font-sans">
        Choose a request type — the form adapts routing guidance and confirmation. This is a<br className="hidden md:inline" /> design prototype; live submissions route to the approved privacy workflow.
      </p>
    </div>

    {/* Form & Sidebar Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-[530px_1fr] gap-4 items-start">
      
      {/* Interactive Form Card */}
      <div className="bg-white rounded-2xl border border-violet-100 p-7 shadow-[0px_24px_50px_-34px_rgba(20,22,60,0.22)]">
        
        {/* Request Type Buttons */}
        <div className="mb-6">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3 font-sans">
            Request type
          </span>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'access', label: 'Access my data' },
              { id: 'delete', label: 'Delete my data' },
              { id: 'export', label: 'Export my data' },
              { id: 'question', label: 'Ask a privacy question' }
            ].map((type) => {
              const isActive = activeRequest === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setActiveRequest(type.id)}
                  className={`px-4 py-2 h-9 rounded-[999px] text-sm font-bold font-sans border transition-all duration-150 ${
                    isActive
                      ? 'bg-violet-600 text-white border-violet-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Context Notice Banner */}
        <div className="flex gap-3 bg-purple-50 border border-violet-100 rounded-xl p-4 mb-6 items-start">
          <span className="mt-2 w-2 h-2 shrink-0 rounded-sm bg-violet-600" />
          <p className="text-gray-500 text-xs font-normal font-sans leading-5">
            {activeRequest === 'access' && 'Access requests confirm your identity and route to the privacy team for a copy of applicable data.'}
            {activeRequest === 'delete' && 'Deletion requests route to our data deletion pipeline. Note that certain workspace records may be managed by your administrator.'}
            {activeRequest === 'export' && 'Export requests generate portable archives of your data. Large workspaces may take some time to compile.'}
            {activeRequest === 'question' && 'Have a generic question about our data protection policies? Our privacy officer will respond within 3 business days.'}
          </p>
        </div>

        {/* Input: Work Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-slate-600 text-xs font-bold mb-2 font-sans">
            Work email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="w-full h-11 px-4 rounded-[10px] border border-slate-200 outline-none text-sm text-slate-900 placeholder-neutral-500 focus:border-violet-600 font-sans"
          />
        </div>

        {/* Input: Details */}
        <div className="mb-6">
          <label htmlFor="details" className="block text-slate-600 text-xs font-bold mb-2 font-sans">
            Details
          </label>
          <textarea
            id="details"
            rows={4}
            placeholder={
              activeRequest === 'access' ? 'Which data would you like to access? Include workspace or account context.' :
              activeRequest === 'delete' ? 'Please specify the account details or workspace data you want deleted.' :
              activeRequest === 'export' ? 'Describe the specific data parameters or timeframes you would like exported.' :
              'What questions do you have about how Zoiko Sema processes your data?'
            }
            className="w-full p-4 rounded-[10px] border border-slate-200 outline-none text-sm text-slate-900 placeholder-neutral-500 focus:border-violet-600 resize-none leading-5 font-sans"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full h-12 bg-violet-600 hover:bg-violet-700 transition text-white text-base font-bold rounded-[999px] font-sans mb-6">
          Submit privacy request
        </button>

        {/* Notice Disclaimer */}
        <p className="text-center text-slate-400 text-xs font-normal font-sans leading-4 max-w-[454px] mx-auto">
          By submitting you agree this prototype does not process real personal data. See the<br />Privacy Notice for live request handling.
        </p>
      </div>

      {/* Sidebar Area */}
      <div className="flex flex-col gap-4 w-full max-w-[384px]">
        
        {/* Sidebar Image */}
        <div className="w-full h-64 bg-slate-900 rounded-2xl overflow-hidden relative">
          <Image 
            src="/privacy&data/image 108.png" 
            alt="Security support asset" 
            width={395} 
            height={395} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Guidelines / Alternative routes */}
        <div className="flex flex-col gap-3">
          {[
            { title: 'Account changes', text: 'Update profile or settings in your workspace.' },
            { title: 'Workspace / admin', text: 'Contact your workspace owner or admin.' },
            { title: 'Security concern', text: 'Use Security Center / Report a Concern.' },
            { title: 'Enterprise review', text: 'Contact Sales or the Trust Center.' }
          ].map((card) => (
            <div 
              key={card.title} 
              className="bg-white rounded-2xl border border-violet-100 px-5 flex flex-col justify-center h-20"
            >
              <h4 className="text-slate-900 text-sm font-bold font-sans">
                {card.title}
              </h4>
              <p className="text-slate-400 text-xs font-normal font-sans mt-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>
</section>

          {/* Section: Connected Trust Links */}
          <section id="related-links" data-section className="scroll-mt-24 pb-4">
            <div className="max-w-2xl flex flex-col gap-2">
              <p className="text-xs font-bold uppercase text-violet-600 tracking-wide">SECURITY & COMPLIANCE LINKS</p>
              <h2 className="text-3xl font-bold text-slate-900">Connected trust material.</h2>
            </div>
            <div className="mt-8 border border-violet-100 bg-white rounded-2xl overflow-hidden shadow-sm">
              {relatedLinks.map((item, index) => (
                <Reveal key={item.title} delay={index * 55} className="group grid gap-4 p-5 border-b border-gray-100 last:border-0 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center">
                  <span className="h-2 w-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 font-normal leading-5">{item.description}</p>
                  </div>
                  <div>
                    <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-violet-600">
                      {item.action} <span>→</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Full-Bleed Breakout Context Canvas (Canvas and FAQs block breaking out completely) */}
      <div className="mx-auto lg:py-24 space-y-24 lg:space-y-32">
        {/* Section: Canvas Procurement Banner */}
        <Reveal className="bg-gradient-to-r from-violet-600 to-indigo-900 p-8 py-14 text-center text-white rounded-2xl shadow-lg w-full">
          <h2 className="text-3xl font-bold sm:text-4xl leading-10">Running privacy or procurement review?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-purple-200 text-base font-normal leading-7">Request the DPA, review Security & Compliance, check Subprocessors, or connect with the right team for enterprise privacy and data-processing questions.</p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a href="#" className="bg-white px-6 py-3.5 text-base font-bold text-indigo-800 rounded-full transition hover:bg-purple-50">View DPA</a>
            <a href="#" className="bg-white/10 border border-white/40 px-6 py-3.5 text-base font-bold text-white rounded-full transition hover:bg-white/20">Visit Trust Center</a>
            <a href="#" className="text-base font-bold text-white transition border-b border-white/50 pb-0.5 hover:border-white">Contact sales</a>
          </div>
        </Reveal>

        {/* Section: Accordion FAQ Engine */}
        <section id="faq" data-section className="scroll-mt-14 w-full mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
          <div className=" flex flex-col gap-2 mb-6 ">
            <p className="text-3xl font-bold  text-black text-center ">Privacy & data FAQ</p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqsList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full py-4 transition-all duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 group focus:outline-none"
                >
                  <span className="text-base font-bold font-sans tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Indicator */}
                  <span className={`text-xl font-medium font-sans text-violet-600 dark:text-violet-400 select-none shrink-0 transition-transform duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>

                {/* Collapsible Content Wrapper */}
                <div
                  className={`grid transition-all duration-300 ease-in-out text-sm text-gray-500 dark:text-gray-400 font-sans leading-relaxed ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-2 max-w-[90%]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </section>
      </div>
    </main>
  );
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'} ${className}`}>{children}</div>;
}