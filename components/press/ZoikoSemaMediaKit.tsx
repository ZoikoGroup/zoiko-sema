"use client"
import React, { useEffect, useRef, useState } from "react";

// --- CUSTOM HOOK FOR SCROLL-DRIVEN FLOAT ANIMATION ---
function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaMediaKit() {
  const [factsRef, factsVisible] = useIntersectionObserver();
  const [assetsRef, assetsVisible] = useIntersectionObserver();

  return (
    <div className="w-full min-h-screen  bg-violet-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* ========================================================================= */}
      {/* SECTION 1: COMPANY FACTS & BOILERPLATE                                    */}
      {/* ========================================================================= */}
      <section
        ref={factsRef}
        className={`max-w-6xl mx-auto transform transition-all duration-1000 ease-out ${
          factsVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans block">
            Company Facts & Boilerplate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white tracking-tight">
            Approved, copy-ready language
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Use these versioned, approved descriptions verbatim. Copy any block with one click.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Media Illustration */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden shadow-md dark:shadow-black/20 transform transition-transform duration-500 hover:-translate-y-1">
            <img
              className="w-full h-full min-h-[320px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              src="/press/Frame 216.png"
              alt="Zoiko Tech Company overview analytics representation visual placeholder"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
          </div>

          {/* Quick Facts Interactive Card */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-950 border border-slate-200/60 dark:border-gray-850 rounded-2xl p-6 sm:p-8 shadow-[0px_4px_20px_rgba(16,22,60,0.02)] dark:shadow-none flex flex-col justify-between transform transition-all duration-300 hover:shadow-xl hover:border-slate-300/80 dark:hover:border-gray-800 hover:-translate-y-1">
            <div>
              <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-900 pb-4 mb-2">
                Quick facts
              </h3>
              
              <div className="divide-y divide-slate-100 dark:divide-gray-900 font-sans">
                {[
                  { label: "Product name", value: "Zoiko Sema" },
                  { label: "Company", value: "Zoiko Tech" },
                  { label: "Category", value: "Business communication" },
                  { label: "Product modules", value: "Messaging, Meetings, AI, Admin" },
                ].map((fact, index) => (
                  <div key={index} className="py-3.5 flex justify-between items-center text-xs sm:text-sm group/row">
                    <span className="font-medium text-slate-500 dark:text-gray-400 group-hover/row:text-slate-800 dark:group-hover/row:text-gray-300 transition-colors">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-gray-900 flex justify-between items-center text-xs sm:text-sm font-sans">
              <span className="font-medium text-slate-500 dark:text-gray-400">Company details</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400 tracking-wide text-right">
                Verified only *
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: MEDIA KIT & BRAND ASSETS                                       */}
      {/* ========================================================================= */}
      <section
        ref={assetsRef}
        className={`max-w-6xl mx-auto transform transition-all duration-1000 ease-out ${
          assetsVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans block">
            Media Kit & Brand Assets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white tracking-tight">
            Assets, with usage rules
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Download approved assets with the correct usage guidance. Some assets require a quick request for access.
          </p>
        </div>

        {/* Asset Cards Dynamic Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Logo package",
              meta: "SVG, PNG · light/dark · icon mark",
              desc: "Primary logo, dark/light variants, icon mark, and clear-space guidance.",
              rule: "Keep clear space, don't recolor or distort, don't add effects.",
              status: "Approved",
              action: "Download",
              icon: (
                <img className="w-5 h-5" src="/press/Frame (12).png" />
                 
              ),
            },
            {
              title: "Product screenshots",
              meta: "PNG · current product version",
              desc: "Messaging, video meetings, AI summaries, channels, admin console, system status.",
              rule: "Use current versions only; don't alter UI or add unapproved data.",
              status: "Approved",
              action: "Download",
              icon: (
                <img className="w-5 h-5" src="/press/Frame (10).png" />
              ),
            },
            {
              title: "Leadership photos",
              meta: "Available on approval",
              desc: "Approved headshots for named spokespeople, released only when published.",
              rule: "Use with correct name/title; don't crop or edit likeness.",
              status: "On request",
              action: "Request",
              icon: (
                <img className="w-5 h-5" src="/press/Frame (6).png" />
              ),
            },
            {
              title: "Boilerplate copy",
              meta: "One-liner · short · long",
              desc: "Approved, versioned company and product descriptions for article use.",
              rule: "Copy verbatim; see the \"please don't say\" list above.",
              status: "Approved",
              action: "View",
              icon: (
                <img className="w-5 h-5" src="/press/Frame.png" />
              ),
            },
            {
              title: "Brand guidelines",
              meta: "PDF · logo, color, type",
              desc: "Logo usage, colors, typography direction, and prohibited alterations.",
              rule: "Follow guidelines for any public Zoiko Sema representation.",
              status: "Approved",
              action: "Download",
              icon: (
                <img className="w-5 h-5" src="/press/Frame (8).png" />
              ),
            },
            {
              title: "Media kit bundle",
              meta: "ZIP · full approved package",
              desc: "Logos, screenshots, boilerplate, and guidelines in one download.",
              rule: "Latest approved bundle; check back for updated versions.",
              status: "Approved",
              action: "Download",
              icon: (
                <img className="w-5 h-5" src="/press/Frame (11).png" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 border border-slate-200/60 dark:border-gray-850 rounded-2xl p-5 flex flex-col justify-between space-y-5 shadow-[0px_2px_12px_rgba(16,22,60,0.015)] dark:shadow-none transform transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-gray-800 hover:-translate-y-1.5 group"
            >
              {/* Header Info */}
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-slate-50 dark:bg-gray-900 border border-slate-100 dark:border-gray-850 rounded-xl flex-shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:border-blue-100 dark:group-hover:border-blue-900/30 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-base font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-gray-500 font-sans">
                    {item.meta}
                  </p>
                </div>
              </div>

              {/* Description Body */}
              <p className="text-xs text-slate-600 dark:text-gray-400 font-sans leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Rule Hint Box */}
              <div className="bg-slate-50 dark:bg-gray-900/70 border border-slate-100 dark:border-gray-900 px-3 py-2 rounded-xl text-[11px] text-slate-500 dark:text-gray-400 font-sans leading-relaxed">
                {item.rule}
              </div>

              {/* Action Bar Footer */}
              <div className="flex items-center justify-between pt-1 font-sans">
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full select-none ${
                    item.status === "Approved"
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
                      : "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30"
                  }`}
                >
                  {item.status}
                </span>

                <button className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none">
                  <span>{item.action}</span>
                  {item.action === "View" ? (
                    <span>→</span>
                  ) : (
                    <svg className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}