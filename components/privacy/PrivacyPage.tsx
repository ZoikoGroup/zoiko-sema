'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Custom interface for feature cards
interface FeatureCardProps {
  title: string;
  description: string;
  badgeText: string;
  badgeBg: string;
  linkText: string;
  accentColor: string;
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('at-a-glance');

  // Intersection Observer to handle scroll reveal animations dynamically
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Update active sidebar link based on current section visible
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white text-slate-900 transition-colors duration-300 overflow-x-hidden font-sans">
      
      {/* Background Decorative Element */}
      <div className="absolute size-56 right-10 top-28 bg-gradient-to-br from-violet-500/10 to-transparent dark:from-violet-500/5 blur-xl pointer-events-none z-0" />

      

      {/* Main Container Wrapper Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start bg-slate-900 dark:bg-black text-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">On this page</h3>
          <ul className="space-y-3 text-sm font-semibold text-slate-300">
            {[
              { id: 'at-a-glance', label: 'At a glance' },
              { id: 'purposes', label: 'Processing purposes' },
              { id: 'controls', label: 'Admin controls' },
              { id: 'ai-data', label: 'AI & meeting data' },
              { id: 'subprocessors', label: 'Subprocessors' }
            ].map((item) => (
              <li 
                key={item.id} 
                className={`border-l-2 pl-3 transition-all cursor-pointer ${
                  activeSection === item.id 
                    ? 'border-violet-500 text-white' 
                    : 'border-transparent text-slate-400 hover:border-slate-500 hover:text-slate-200'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Dynamic Stack */}
        <div className="lg:col-span-3 space-y-24">
          
          {/* SECTION 1: AT A GLANCE */}
          <section 
            id="at-a-glance" 
            className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out space-y-8"
          >
            <div className="space-y-3">
              <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wide block uppercase">
                Privacy at a glance
              </span>
              <h2 className="text-3xl font-bold dark:text-white tracking-tight">
                Data practices in plain language.
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-base max-w-2xl leading-relaxed">
                A quick summary of how Zoiko Sema handles data — with deeper terms routed to the Privacy Notice, DPA, Security Policy, and Admin Console.
              </p>
            </div>

            {/* Grid layout with dynamic hover state shifting effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                title="Transparency"
                description="We explain what data is handled and why, then route deeper terms to the Privacy Notice."
                badgeText="TR"
                badgeBg="bg-violet-600"
                linkText="View Privacy Notice"
                accentColor="text-violet-600 dark:text-violet-400"
              />
              <FeatureCard 
                title="Customer control"
                description="Workspace owners and admins configure access, sharing, retention, and exports where supported."
                badgeText="CC"
                badgeBg="bg-blue-500"
                linkText="View Admin Console"
                accentColor="text-blue-500 dark:text-blue-400"
              />
              <FeatureCard 
                title="AI & meeting data"
                description="AI summaries, transcripts, and meeting data connect to Responsible AI governance."
                badgeText="AI"
                badgeBg="bg-teal-600"
                linkText="Read AI Use Policy"
                accentColor="text-teal-600 dark:text-teal-400"
              />
              <FeatureCard 
                title="Request routes"
                description="Submit access, correction, deletion, or export requests through the right workflow."
                badgeText="RR"
                badgeBg="bg-green-500"
                linkText="Submit a request"
                accentColor="text-green-600 dark:text-green-400"
              />
            </div>
          </section>

          {/* SECTION 2: PROCESSING PURPOSES */}
          <section 
            id="purposes" 
            className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out space-y-8"
          >
            <div className="space-y-2">
              <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wide block uppercase">
                Processing Purposes
              </span>
              <h2 className="text-3xl font-bold dark:text-white tracking-tight">
                Why data is processed.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="space-y-8">
                <PurposeItem 
                  num="01" 
                  title="Service delivery" 
                  desc="Provide, maintain, and secure communication, meeting, and collaboration features." 
                  tag="Privacy Notice"
                  tagColor="bg-sky-100 dark:bg-sky-950/40 text-blue-500"
                />
                <PurposeItem 
                  num="03" 
                  title="Support & operations" 
                  desc="Respond to requests, troubleshoot issues, and operate customer accounts." 
                  tag="Help Center"
                  tagColor="bg-green-100 dark:bg-green-950/40 text-teal-600"
                />
              </div>

              <div className="space-y-8">
                <PurposeItem 
                  num="02" 
                  title="Security & integrity" 
                  desc="Protect accounts, prevent abuse, detect incidents, and safeguard the platform." 
                  tag="Security Policy"
                  tagColor="bg-violet-100 dark:bg-violet-950/40 text-violet-600"
                />
                <PurposeItem 
                  num="04" 
                  title="AI features" 
                  desc="Generate summaries, action items, and assistive output where features are enabled." 
                  tag="AI Use Policy"
                  tagColor="bg-green-100 dark:bg-green-950/40 text-green-500"
                />
              </div>
            </div>

            {/* Note Panel */}
            <div className="bg-indigo-50/50 dark:bg-slate-800/40 border border-indigo-100 dark:border-slate-700/60 rounded-2xl p-6 transition-shadow hover:shadow-sm">
              <h4 className="text-sm font-bold dark:text-white mb-2">Legal / privacy note</h4>
              <p className="text-indigo-950 dark:text-gray-300 text-xs leading-relaxed">
                Purposes are stated at a high level for orientation. Legal bases, transfers, and regulatory language are defined only in the approved Privacy Notice and Data Processing Addendum.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// Sub-component for individual clean grid-cards
function FeatureCard({ title, description, badgeText, badgeBg, linkText, accentColor }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className={`size-11 ${badgeBg} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4 shadow-sm`}>
          {badgeText}
        </div>
        <h3 className="text-lg font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6">{description}</p>
      </div>
      <a href="#" className={`${accentColor} text-xs font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform`}>
        {linkText} <span className="text-sm">&rarr;</span>
      </a>
    </div>
  );
}

// Sub-component for Processing items
function PurposeItem({ num, title, desc, tag, tagColor }: { num: string; title: string; desc: string; tag: string; tagColor: string }) {
  return (
    <div className="flex gap-4 items-start group hover:-translate-y-0.5 transition-transform duration-200">
      <span className="text-4xl font-black text-slate-300 dark:text-slate-700 leading-none group-hover:text-blue-500 dark:group-hover:text-violet-400 transition-colors">
        {num}
      </span>
      <div>
        <h4 className="text-base font-bold dark:text-white mb-1">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2.5 leading-relaxed">{desc}</p>
        <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full inline-block ${tagColor}`}>
          {tag}
        </span>
      </div>
    </div>
  );
}