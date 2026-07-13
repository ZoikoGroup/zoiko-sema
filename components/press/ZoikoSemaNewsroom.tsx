"use client"
import React, { useEffect, useRef, useState } from "react";

// Intersection Observer hook for scroll-triggered float entries
function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
}

export default function ZoikoSemaNewsroom() {
  const [newsRef, isVisible] = useElementOnScreen({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "All", "Company news", "Product launch", "Partnership", 
    "Customer story", "Awards", "Media mention", "Events"
  ];

  const newsData = [
    {
      category: "Product launch",
      tagColor: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
      date: "July 2026",
      title: "Zoiko Sema adds decision tracking to meeting summaries",
      desc: "Decisions are captured, owned, and traceable to the source — human-reviewed and governed by policy."
    },
    {
      category: "Partnership",
      tagColor: "bg-orange-50 text-orange-600 dark:bg-amber-950/40 dark:text-amber-400",
      date: "June 2026",
      title: "Zoiko Sema joins a technology partner ecosystem",
      desc: "An illustrative partnership announcement placeholder — approved partner details replace this before publication."
    },
    {
      category: "Customer story",
      tagColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
      date: "May 2026",
      title: "How a client-facing team improved follow-up with Zoiko Sema",
      desc: "A placeholder customer story showing directional outcomes — verified customer statements required before publishing."
    },
    {
      category: "Product launch",
      tagColor: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
      date: "April 2026",
      title: "Zoiko Sema expands admin governance controls",
      desc: "New workspace-level AI policy, retention, and audit controls for administrators."
    },
    {
      category: "Media mention",
      tagColor: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
      date: "April 2026",
      title: "Zoiko Sema recognized in an industry roundup",
      desc: "Placeholder media-mention card — link and outlet added only when approved."
    },
    {
      category: "Events",
      tagColor: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
      date: "March 2026",
      title: "Zoiko Sema to host a governed-AI communication webinar",
      desc: "An illustrative event listing placeholder for upcoming live streams and learning sessions."
    },
    {
      category: "Company news",
      tagColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400",
      date: "Feb 2026",
      title: "Zoiko Tech shares its approach to responsible AI in communication",
      desc: "A placeholder company-news item detailing core operating principles and organizational governance values."
    },
    {
      category: "Media mention",
      tagColor: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
      date: "Jan 2026",
      title: "Zoiko Sema referenced in an analyst brief",
      desc: "Placeholder analyst-mention card — verified metrics and notes added on regulatory authorization approval."
    },
    {
      category: "Awards",
      tagColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
      date: "Dec 2025",
      title: "Zoiko Sema named to a workplace-tech list",
      desc: "Placeholder awards card — recognition details published only when officially verified."
    }
  ];

  // Client filtering orchestration
  const filteredNews = newsData.filter(item => {
    const matchesFilter = activeFilter === "All" || item.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section 
      ref={newsRef}
      className="w-full bg-white dark:bg-gray-950 py-16 sm:py-20 md:py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10 space-y-12">
        {/* Header Block */}
        <div className={`text-center max-w-3xl mx-auto space-y-3 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
              Latest News & Announcements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white tracking-tight">
            Newsroom
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Recent releases, product launches, milestones, and media mentions.
          </p>
        </div>
       <div 
      className={`w-full bg-slate-50 dark:bg-gray-900 rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_2px_8px_rgba(16,22,60,0.02)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
      }`}
    >
      {/* Left Column: Visual Showcase Media Asset */}
      <div className="lg:col-span-5  relative overflow-hidden flex items-center justify-center p-6 sm:p-8">
        <img 
          className="w-full max-w-[720px] min-h-[260px] h-auto self-stretch rounded-xl  select-none transform hover:scale-105 transition-transform duration-500" 
          src="/press/div.fimg.png" 
          alt="Governed AI workspace summary visual dashboard metric timeline illustration" 
        />
      </div>

      {/* Right Column: Text & Call-To-Action Details */}
      <div className="bg-color-white-solid p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-center space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide font-sans">
            Product launch
          </span>
          <span className="text-slate-300 dark:text-gray-700 select-none">•</span>
          <span className="text-slate-500 dark:text-gray-400 text-xs font-normal font-sans">
            Sample date
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white tracking-tight leading-snug">
          Zoiko Sema introduces governed AI meeting summaries
        </h3>

        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
          Human-reviewed recaps, decisions, and action items — controlled by workspace policy, retention settings, and systemic data audits. Illustrative placeholder for approved copy.
        </p>

        <div className="pt-2">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-gray-850 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Read announcement</span>
            <span className="font-bold text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </div>

        {/* CONTROLS: SEARCH + SEAMLESS FILTERING PILLS */}
        <div 
          style={{ transitionDelay: "200ms" }}
          className={`space-y-4 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          {/* Search Inputs */}
          <div className="relative max-w-md w-full group">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search announcements by title or keyword..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Pill Selector Stream */}
          <div className="flex flex-wrap gap-2 items-center">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap ${
                    isSelected 
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm scale-102" 
                      : "bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-400 hover:border-slate-300 dark:hover:border-gray-700 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEED INDEX INDEX CARDS GRID MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((article, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_1px_3px_rgba(16,22,60,0.03)] border border-slate-200/80 dark:border-gray-800 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                {/* Visual Accent Top Bar Gradient line */}
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex items-center justify-between w-full">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wide ${article.tagColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-gray-500 font-medium">
                      {article.date}
                    </span>
                  </div>
                  
                  <h4 className="text-slate-900 dark:text-white text-base font-bold font-['Plus_Jakarta_Sans'] leading-snug">
                    {article.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                    {article.desc}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-gray-800/50">
                  <a href="#" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold group hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span>Read announcement</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 font-bold">→</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 dark:text-gray-500 text-sm font-medium border border-dashed border-slate-200 dark:border-gray-800 rounded-2xl">
              No matching announcements found in this section criteria.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}