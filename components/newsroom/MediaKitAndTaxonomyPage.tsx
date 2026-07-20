"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Reusable Intersection Observer Scroll-Reveal Hook ---
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
      { threshold: 0.05 } // Triggers cleanly as soon as the element enters view
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function MediaKitAndTaxonomyPage() {
  // Independent scroll animations for each section
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();

  const taxonomyCards = [
    {
      label: "Press release",
      badgeClass: "bg-violet-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
      desc: "Material company, product, or governance announcements."
    },
    {
      label: "Product news",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
      desc: "Approved launches, features, and availability changes."
    },
    {
      label: "Company news",
      badgeClass: "bg-violet-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
      desc: "Verified milestones, leadership, and partnerships."
    },
    {
      label: "Media resource",
      badgeClass: "bg-orange-100 text-yellow-800 dark:bg-amber-950 dark:text-amber-300",
      desc: "Fact sheets, logos, screenshots, and press FAQ."
    },
    {
      label: "Correction",
      badgeClass: "bg-rose-100 text-red-700 dark:bg-rose-950 dark:text-rose-300",
      desc: "Material factual updates, clarifications, withdrawals."
    }
  ];

  const libraryItems = [
    {
      title: "Logos & marks",
      desc: "Primary, reversed, monochrome, with clear-space rules."
    },
    {
      title: "Product screenshots",
      desc: "Synthetic data, accurate current labels, no customer data."
    },
    {
      title: "Boilerplate",
      desc: "25-, 50-, and 100-word approved descriptions."
    },
    {
      title: "Leadership assets",
      desc: "Approved headshots with consent and review date."
    }
  ];

  const factsRows = [
    {
      title: "Company facts",
      desc: "Legal name, Zoiko Tech relationship, approved locations, and press contact — with a legal/company owner behind every line."
    },
    {
      title: "Product facts",
      desc: "Current modules, buyer audiences, and governance positioning, checked against availability and plan."
    },
    {
      title: "Spokesperson profiles",
      desc: "Name, approved role, topic authority, and explicit consent — removed or updated on role change."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* =========================================================================
          SECTION 1: CONTENT TAXONOMY
          ========================================================================= */}
      <section
        ref={section1.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-950 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 ease-out transform ${
          section1.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-8">
          {/* Header Stack */}
          <div className="max-w-[680px] space-y-3">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                CONTENT TAXONOMY
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              Five content types, five different approval thresholds.
            </h2>
          </div>

          {/* Asset Preview Frame */}
          <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-sm group bg-slate-50 dark:bg-gray-900">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
              src="/newsroom/Newsroom.png"
              alt="Content taxonomy schematic overview"
            />
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {taxonomyCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] border border-slate-200/60 dark:border-slate-800/80 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className={`px-3 py-1.5 rounded-full inline-flex items-center text-xs font-bold   leading-tight ${card.badgeClass}`}>
                  {card.label}
                </div>
                <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MEDIA KIT AND ASSET LIBRARY
          ========================================================================= */}
      <section
        ref={section2.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-950 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 ease-out transform ${
          section2.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-8">
          {/* Header Stack */}
          <div className="max-w-[680px] space-y-3">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                MEDIA KIT AND ASSET LIBRARY
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              Current, rights-cleared assets — never a stale download.
            </h2>
          </div>

          {/* Media Matrix Preview Frame */}
          <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-sm group bg-slate-50 dark:bg-gray-900">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
              src="/newsroom/Media kit.png"
              alt="Media asset file library grid kit"
            />
          </div>

          {/* Content Dynamic Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {libraryItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-start items-start gap-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
              >
                <h3 className="text-slate-900 dark:text-slate-100 text-xs font-bold  leading-5 tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPANY FACTS AND SPOKESPERSONS
          ========================================================================= */}
      <section
        ref={section3.ref}
        className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/60 dark:bg-gray-900/40 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
          section3.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-7">
          {/* Header Stack */}
          <div className="max-w-[680px] space-y-3.5">
            <div className="flex items-center gap-3.5 h-5">
              <div className="size-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
                COMPANY FACTS AND SPOKESPERSONS
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              Facts with an owner. Quotes with a name.
            </h2>
          </div>

          {/* Stacked Interactive Data Rows Framework */}
          <div className="w-full px-6 sm:px-8 py-2 bg-white dark:bg-gray-950 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] border border-slate-200/60 dark:border-slate-800/80 flex flex-col">
            {factsRows.map((row, idx) => (
              <div
                key={idx}
                className={`py-5 flex flex-col justify-start items-start gap-1 transition-all duration-300 group ${
                  idx !== factsRows.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''
                }`}
              >
                <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold  leading-7 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {row.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm font-normal   leading-relaxed max-w-[960px]">
                  {row.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}