"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Check } from 'lucide-react';

// --- Custom Intersection Observer Hook for Entrance Animations ---
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
      { threshold: 0.02 } // Trigger early when the top appears
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function AllArticlesFeed() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState("All types");

  const categories = [
    "All types",
    "Press release",
    "Product news",
    "Company news",
    "Media resource",
    "Correction"
  ];

  const articles = [
    {
      img: "/newsroom/Article thumbnail (7).png",
      category: "Press release",
      badgeBg: "bg-violet-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      title: "Zoiko Sema launches AI Meeting Summaries for enterprise workspaces",
      desc: "Reviewed summaries connect decisions, owners, and follow-through across every meeting.",
      date: "Published July 2, 2026 · Product news"
    },
    {
      img: "/newsroom/Article thumbnail (1).png",
      category: "Product news",
      badgeBg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      title: "Confidential Mode now available across all Business and Enterprise workspaces",
      desc: "End-to-end encrypted meetings and messaging for sensitive internal conversations.",
      date: "Published June 18, 2026 · Updated June 20, 2026"
    },
    {
      img: "newsroom/Article thumbnail2x.png",
      category: "Company news",
      badgeBg: "bg-violet-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      title: "Zoiko Sema opens new operating hub to support EU customers",
      desc: "Approved regional presence supporting data residency and local support.",
      date: "Published June 3, 2026"
    },
    {
      img: "/newsroom/Article thumbnail (2).png",
      category: "Media resource",
      badgeBg: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
      title: "Updated media kit: logos, product screenshots, and boilerplate",
      desc: "Current rights-cleared assets replacing all prior versions.",
      date: "Published May 27, 2026"
    },
    {
      img: "/newsroom/Article thumbnail (3).png",
      category: "Partnership",
      badgeBg: "bg-violet-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      title: "Zoiko Sema and approved ecosystem partner announce integration",
      desc: "Mutual approval and scoped integration now available to shared customers.",
      date: "Published May 14, 2026"
    },
    {
      img: "/newsroom/Article thumbnail2x (1).png",
      category: "Correction",
      badgeBg: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
      title: "Correction: April 2026 governance update figure",
      desc: "Clarifies a figure referenced in the April governance release.",
      date: "Published April 22, 2026 · Corrected April 24, 2026"
    },
    {
      img: "/newsroom/Article thumbnail (4).png",
      category: "Company news",
      badgeBg: "bg-violet-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      title: "Zoiko Sema appoints new VP of Trust and Security",
      desc: "Verified leadership appointment effective April 2026.",
      date: "Published April 8, 2026"
    },
    {
      img: "/newsroom/Article thumbnail (5).png",
      category: "Product news",
      badgeBg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      title: "Sema Notes launches searchable meeting memory across workspaces",
      desc: "Notes now connect to mail, calendar, files, and search by default.",
      date: "Published March 19, 2026"
    },
    {
      img: "/newsroom/Article thumbnail (6).png",
      category: "Archived",
      badgeBg: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      title: "Zoiko Sema Series A milestone and platform roadmap",
      desc: "Early platform direction — retained for historical reference.",
      date: "Published Jan 14, 2026 · Archived"
    }
  ];

  // Optional functional filter layer
  const filteredArticles = articles.filter(article => {
    if (selectedCategory === "All types") return true;
    return article.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 relative bg-slate-900 dark:bg-gray-950 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-600/35 to-indigo-600/0 to-60% pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-[680px] space-y-3.5">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-indigo-400 rounded-full" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              ALL ARTICLES
            </span>
          </div>
          <h2 className="text-white dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  tracking-tight leading-snug">
            Every verified update, in one searchable feed.
          </h2>
          <p className="text-white/70 dark:text-gray-400 text-sm sm:text-base font-normal  ">
            Filter by type, topic, or year — newest published first.
          </p>
        </div>

        {/* Dynamic Category Pill Controls Row */}
        <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-white/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold   rounded-full backdrop-blur-[6px] border transition-all duration-200 outline-none ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/10 scale-105"
                  : "bg-white/5 text-white/90 border-white/15 hover:bg-white/12 hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Articles Grid Framework */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredArticles.map((article, idx) => (
              <div
                key={idx}
                className="p-5 bg-white dark:bg-gray-900 rounded-[20px] border border-slate-200/60 dark:border-slate-800/80 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 group"
              >
                <div className="space-y-4">
                  {/* Image Display */}
                  <div className="w-full aspect-[312/195] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={article.img}
                      alt={article.title}
                    />
                  </div>

                  {/* Meta Category Tag */}
                  <span className={`inline-block px-3 py-1 text-[11px] font-bold   uppercase tracking-wider rounded-full ${article.badgeBg}`}>
                    {article.category}
                  </span>

                  {/* Title & Description stack */}
                  <div className="space-y-2">
                    <h3 className="text-slate-900 dark:text-white text-base font-bold  leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Stamp Date line */}
                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-gray-400 dark:text-gray-500 text-xs font-medium  ">
                    {article.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-white/60   text-sm">No articles found matching this filter scenario.</p>
          </div>
        )}

        {/* Load More Trigger Foot Link */}
        <div className="flex justify-center pt-6">
          <button className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm   transition-all group py-2 px-4 rounded-full hover:bg-white/5">
            <span>Load more articles &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}