"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
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
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function CommunityHubSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <CommunityHubSection />
      <FeaturedQuestionsSection />
      <TopicSpacesSection />
    </div>
  );
}

/* ==========================================================================
   1. COMMUNITY HUB SECTION
   ========================================================================== */
function CommunityHubSection() {
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    { title: "Discovery controls", desc: "Topic, product, content type, solved status, and sort." },
    { title: "Feed tabs", desc: "Latest, Solved, Unanswered, Events, Ideas, Following." },
    { title: "Right rail", desc: "Start here, saved topics, upcoming events, guidelines." },
    { title: "Honest empty state", desc: "Curated official starters — never fake activity." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              COMMUNITY HUB
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Search, browse, or follow — public content works before you sign in.
          </h2>
        </div>

        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 302.png" 
            alt="Community Hub main content Feed dynamic structural interface layout presentation dashboard view" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-[20px] bg-white dark:bg-gray-950 border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold   mb-2 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. FEATURED QUESTIONS AND SOLUTIONS SECTION (Light Violet Canvas)
   ========================================================================== */
function FeaturedQuestionsSection() {
  const { ref, isVisible } = useScrollReveal();

  const statuses = [
    {
      badge: "Solved",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",
      q: "How do I scope AI Meeting Summaries to one workspace?",
      meta: "Accepted answer · verified for current version"
    },
    {
      badge: "Official answer",
      badgeClass: "bg-violet-200 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400",
      q: "Setting retention rules for Confidential Mode",
      meta: "Answered by a Zoiko Sema representative"
    },
    {
      badge: "Under review",
      badgeClass: "bg-orange-100 text-yellow-700 dark:bg-amber-950/40 dark:text-amber-400",
      q: "Best practice for guest access in Channels & Spaces",
      meta: "Moderator reviewing for accuracy"
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-950/40 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              FEATURED QUESTIONS AND SOLUTIONS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[720px] mx-auto leading-snug sm:leading-10">
            Maintained, evidence-backed answers — not a stale archive.
          </h2>
        </div>

        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-100 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 303.png" 
            alt="Interactive solved query streams resolution workflows metrics tracking layout preview" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statuses.map((item, idx) => (
            <div 
              key={idx}
              className="group flex flex-col justify-between p-6 sm:p-7 min-h-[176px] bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="space-y-4">
                <span className={`inline-flex items-center px-3.5 py-1 text-xs font-bold   rounded-full ${item.badgeClass}`}>
                  {item.badge}
                </span>
                <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold   leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {item.q}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   mt-4 pt-3 border-t border-slate-50 dark:border-slate-900/60">
                {item.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. TOPIC SPACES SECTION
   ========================================================================== */
function TopicSpacesSection() {
  const { ref, isVisible } = useScrollReveal();

  const spaces = [
    { title: "Get started", desc: "Onboarding, quick-start guides, and solved first-week questions." },
    { title: "Admin & security", desc: "Roles, retention, Confidential Mode, and Trust Center links." },
    { title: "Developer", desc: "API, webhooks, and implementation patterns." },
    { title: "Sema + ZoikoTime", desc: "Boundary questions and governed integration patterns." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              TOPIC SPACES
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight">
            Organized around what you're trying to do.
          </h2>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/community/Topic spaces for onboarding, meetings, AI, admin, integrations, and security..png" 
            alt="Topic spaces structural category cluster organization graph mapping architecture overview" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, idx) => (
            <div 
              key={idx}
              className="group p-6 sm:p-7 min-h-[160px] flex flex-col justify-start bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-indigo-600 dark:text-indigo-400 text-xs font-bold   uppercase tracking-wide mb-3">
                {space.title}
              </h3>
              <p className="text-slate-900 dark:text-gray-300 text-sm sm:text-base font-normal   leading-relaxed">
                {space.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}