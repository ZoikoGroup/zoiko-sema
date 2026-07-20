"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook for Floating Transitions ---
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function WorkspaceSettingsPortal() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <RegionalAndNotifications />
      <GovernanceModules />
      <PersonalPreferences />
      <SettingsFAQ />
    </div>
  );
}

/* ==========================================================================
   1. LOCALIZATION & NOTIFICATION POLICIES SECTION
   ========================================================================== */
function RegionalAndNotifications() {
  const { ref, isVisible } = useScrollReveal();
  const [dateFormat, setDateFormat] = useState<'MM' | 'DD'>('MM');

  return (
    <section
      ref={ref}
      className="w-full py-16 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Localization & Regional Card */}
        <div
          className={`p-6 sm:p-8 bg-white dark:bg-gray-950 rounded-[20px] border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="size-10 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-lg flex justify-center items-center flex-shrink-0 font-bold">
              🌐
            </div>
            <div>
              <h3 className="text-gray-950 dark:text-white text-base font-bold    leading-6">
                Localization & Regional
              </h3>
              <p className="text-zinc-700 dark:text-gray-400 text-sm font-normal   ">
                Manage global time and language standards.
              </p>
            </div>
          </div>

          {/* Form Settings Stack */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-zinc-700 dark:text-gray-400 text-xs font-bold    tracking-wide uppercase">Default Language</label>
              <div className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 rounded-lg border border-neutral-300 dark:border-gray-700 text-zinc-900 dark:text-zinc-100    text-sm">
                English (US)
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-700 dark:text-gray-400 text-xs font-bold    tracking-wide uppercase">Organization Time Zone</label>
              <div className="w-full px-4 py-2.5 bg-white dark:bg-gray-900 rounded-lg border border-neutral-300 dark:border-gray-700 text-zinc-900 dark:text-zinc-100    text-sm">
                (UTC-05:00) Eastern Time
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-700 dark:text-gray-400 text-xs font-bold    tracking-wide uppercase">Date Format</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDateFormat('MM')}
                  className={`px-4 py-1.5 text-sm font-normal    rounded-lg transition-all ${
                    dateFormat === 'MM'
                      ? 'bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm'
                      : 'bg-zinc-100 dark:bg-gray-800 text-zinc-900 dark:text-gray-300'
                  }`}
                >
                  MM/DD/YYYY
                </button>
                <button
                  onClick={() => setDateFormat('DD')}
                  className={`px-4 py-1.5 text-sm font-normal    rounded-lg transition-all ${
                    dateFormat === 'DD'
                      ? 'bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm'
                      : 'bg-zinc-100 dark:bg-gray-800 text-zinc-900 dark:text-gray-300'
                  }`}
                >
                  DD/MM/YYYY
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-zinc-700 dark:text-gray-400 text-xs font-bold    tracking-wide uppercase">Currency Preview</label>
              <div className="w-full px-4 py-2 bg-zinc-100 dark:bg-gray-800 rounded-lg text-gray-950 dark:text-zinc-100    text-sm font-medium">
                $1,234,567.89 USD
              </div>
            </div>
          </div>
        </div>

        {/* Notification Policies Card */}
        <div
          className={`p-6 sm:p-8 bg-white dark:bg-gray-950 rounded-[20px] border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-700 transform delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="size-10 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-lg flex justify-center items-center flex-shrink-0 font-bold">
              🔔
            </div>
            <div>
              <h3 className="text-gray-950 dark:text-white text-base font-bold    leading-6">
                Notification Policies
              </h3>
              <p className="text-zinc-700 dark:text-gray-400 text-sm font-normal   ">
                Governance-locked messaging rules.
              </p>
            </div>
          </div>

          {/* Configuration List Stack */}
          <div className="space-y-6">
            <div className="flex justify-between items-center group/item">
              <div>
                <h4 className="text-gray-950 dark:text-white text-base font-bold   ">Email Digest</h4>
                <p className="text-zinc-700 dark:text-gray-400 text-xs font-normal   ">Weekly compliance & usage reports.</p>
              </div>
              <input type="checkbox" defaultChecked className="accent-indigo-600 size-4 rounded cursor-pointer" />
            </div>

            <div className="flex justify-between items-center group/item">
              <div>
                <h4 className="text-gray-950 dark:text-white text-base font-bold   ">Mandatory Notices</h4>
                <p className="text-zinc-700 dark:text-gray-400 text-xs font-normal   ">In-app banners for security updates.</p>
              </div>
              <img className="w-4 h-5 " src="/settings/Icon (6).png" />
            </div>

            <div className="flex justify-between items-center group/item">
              <div>
                <h4 className="text-gray-950 dark:text-white text-base font-bold   ">Quiet Hours</h4>
                <p className="text-zinc-700 dark:text-gray-400 text-xs font-normal   ">Suppress non-critical alerts 10PM - 6AM.</p>
              </div>
              <input type="checkbox" className="accent-indigo-600 size-4 rounded cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ==========================================================================
   2. COMPREHENSIVE GOVERNANCE MODULES SECTION
   ========================================================================== */
function GovernanceModules() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-gray-950 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Heading Text Stack */}
        <div className="max-w-[672px] mx-auto text-center space-y-3">
          <h2
            className={`text-2xl sm:text-3xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Comprehensive Governance Modules
          </h2>
          <p
            className={`text-zinc-700 dark:text-gray-400 text-sm sm:text-base font-normal    leading-relaxed transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Navigate through specialized configuration environments designed for institutional-scale security.
          </p>
        </div>

        {/* Dashboard Frame Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div
            className={`lg:col-span-7 w-full group transition-all duration-1000 ease-out transform delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="w-full aspect-[792/442] rounded-[20px] overflow-hidden shadow-xl border border-neutral-200/60 dark:border-gray-800 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/settings/Settings Categories Grid.png"
                alt="Governance framework technical operational console metrics view"
              />
            </div>
          </div>

          {/* Cards Modules List Block Container */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                title: "Role Separation",
                desc: "Configure precise access controls with multi-layered permission matrices.",
                icon: "/settings/Icon (7).png"
              },
              {
                title: "Audit History",
                desc: "Every change is tracked, recorded, and attributed for permanent oversight.",
                icon: "/settings/Icon (8).png"
              }
            ].map((module, idx) => (
              <div
                key={idx}
                className={`p-6 bg-white dark:bg-gray-950 rounded-[20px] border border-neutral-300 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + idx * 100}px` }}
              >
                <img className="mb-2" src={module.icon} />
                <h4 className="text-gray-950 dark:text-white text-base font-bold    mb-1">
                  {module.title}
                </h4>
                <p className="text-zinc-700 dark:text-gray-400 text-sm font-normal    leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. PERSONAL PREFERENCES MODULE SECTION
   ========================================================================== */
function PersonalPreferences() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('appearance');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40 text-gray-950 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Navigation Sidebar Tabs Container */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <h2
              className={`text-2xl sm:text-3xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              Personal Preferences
            </h2>
            <p
              className={`text-zinc-700 dark:text-gray-400 text-sm sm:text-base font-normal    transition-all duration-700 ease-out transform delay-150 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              Customize your individual experience without affecting global organizational settings.
            </p>
          </div>

          <div
            className={`flex flex-col gap-2 pt-2 transition-all duration-700 ease-out transform delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {[
              { id: 'account', label: 'Account Information', icon: '👤' },
              { id: 'appearance', label: 'Appearance', icon: '🎨' },
              { id: 'accessibility', label: 'Accessibility', icon: '♿' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl    text-sm sm:text-base font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-sky-950 dark:bg-white text-white dark:text-gray-950 shadow-md'
                    : 'text-zinc-900 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Configuration Panel View */}
        <div
          className={`lg:col-span-8 w-full p-6 sm:p-8 bg-white dark:bg-gray-950 rounded-[20px] border border-neutral-300 dark:border-gray-800 shadow-xl transition-all duration-1000 ease-out transform delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Theme Configuration */}
              <div className="space-y-4">
                <h4 className="text-gray-950 dark:text-white text-base font-bold   ">Interface Theme</h4>
                <div className="flex flex-wrap gap-3">
                  {/* Light Selection box */}
                  <button
                    onClick={() => setTheme('light')}
                    className={`p-2 rounded-lg flex flex-col items-center gap-2 border-2 transition-all ${
                      theme === 'light' ? 'border-indigo-600 ring-2 ring-indigo-600/20' : 'border-neutral-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="w-24 h-12 bg-gray-50 rounded border border-neutral-200" />
                    <span className="text-zinc-900 dark:text-zinc-300 text-xs font-bold   ">Light</span>
                  </button>

                  {/* Dark Selection box */}
                  <button
                    onClick={() => setTheme('dark')}
                    className={`p-2 rounded-lg flex flex-col items-center gap-2 border-2 transition-all ${
                      theme === 'dark' ? 'border-indigo-600 ring-2 ring-indigo-600/20' : 'border-neutral-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="w-24 h-12 bg-gray-950 rounded border border-neutral-800" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs font-bold   ">Dark</span>
                  </button>

                  {/* System Selection box */}
                  <button
                    onClick={() => setTheme('system')}
                    className={`p-2 rounded-lg flex flex-col items-center gap-2 border-2 transition-all ${
                      theme === 'system' ? 'border-indigo-600 ring-2 ring-indigo-600/20' : 'border-neutral-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="w-24 h-12 bg-gradient-to-r from-gray-50 to-gray-950 rounded border border-neutral-300 dark:border-gray-700" />
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs font-bold   ">System</span>
                  </button>
                </div>
              </div>

              {/* Display Density Switch */}
              <div className="space-y-4">
                <h4 className="text-gray-950 dark:text-white text-base font-bold   ">Display Density</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group/radio">
                    <input type="radio" name="density" defaultChecked className="accent-indigo-600 size-4" />
                    <span className="text-zinc-900 dark:text-gray-300 text-sm font-normal   ">
                      Compact (Recommended for Admins)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group/radio">
                    <input type="radio" name="density" className="accent-indigo-600 size-4" />
                    <span className="text-zinc-900 dark:text-gray-300 text-sm font-normal   ">
                      Comfortable
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons Frame Footer */}
            <div className="pt-6 border-t border-neutral-200 dark:border-gray-800 flex justify-end items-center gap-4">
              <button className="px-6 py-3 text-zinc-700 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-base font-bold    rounded-xl transition-all">
                Discard Changes
              </button>
              <button className="px-8 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-base font-bold    rounded-xl shadow-md hover:-translate-y-0.5 transition-all">
                Save Preferences
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ==========================================================================
   4. SETTINGS FAQ INTERACTIVE ACCORDION SECTION
   ========================================================================== */
function SettingsFAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      q: "How are Personal vs Organization settings separated?",
      a: "Organization settings define the global governance, billing, and security standards for all users. Personal settings allow individual users to customize their UI experience, notification triggers, and accessibility needs without compromising the organizational compliance posture."
    },
    {
      q: "Can I restrict billing permissions to specific individuals?",
      a: "Yes, utilizing our advanced Role Separation matrices, you can delegate fine-grained financial access controls exclusively to authorized users or enterprise billing heads."
    },
    {
      q: "Are audit logs exportable for external auditing?",
      a: "Absolutely. All platform log modifications are permanently saved and can be exported at any time in multiple formats for institutional compliance audits."
    }
  ];

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-gray-950 dark:text-white"
    >
      <div className="max-w-[768px] mx-auto space-y-8">
        {/* Title stack */}
        <div className="text-center space-y-2">
          <h2
            className={`text-2xl sm:text-3xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Settings FAQ
          </h2>
        </div>

        {/* Interactive Accordion Frame Wrapper */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-950 rounded-xl border border-neutral-300 dark:border-gray-800 overflow-hidden transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + idx * 100}px` }}
              >
                {/* Clickable Row Title header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-left    focus:outline-none group"
                >
                  <span className="text-gray-950 dark:text-white text-base font-bold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {item.q}
                  </span>
                  <span className={`text-xl font-light transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>

                {/* Smooth Expandable Context View */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 border-t border-neutral-200 dark:border-gray-800 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 text-zinc-700 dark:text-gray-300 text-sm font-normal    leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}