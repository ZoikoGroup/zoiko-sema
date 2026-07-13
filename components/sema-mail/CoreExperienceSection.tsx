"use client";

import React, { useEffect, useRef, useState } from "react";

// Hook to trigger clean cascade entry animation when scrolled into view
function useInView(threshold = 0.05) {
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

const features = [
  {
    title: "Connected inbox",
    desc: "Manage business email inside the same workspace as meetings, messages, calendar, files, and notes.",
    footer: "Inbox with related meeting and workspace context.",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-600/10 dark:bg-blue-500/10",
    svg: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2.5" y="5" width="15" height="10" rx="1.5" />
        <path d="M2.5 6l7.5 5 7.5-5" />
      </svg>
    ),
  },
  {
    title: "Threaded conversations",
    desc: "Keep email history, replies, attachments, and decisions together.",
    footer: "Thread view with message history and attachments.",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-600/10 dark:bg-indigo-500/10",
    svg: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 4h12v10H4z" />
        <circle cx="10" cy="9" r="2" />
      </svg>
    ),
  },
  {
    title: "Files in context",
    desc: "Connect attachments to the relevant conversation, meeting, or workspace record.",
    footer: "Attached file linked to a meeting summary.",
    iconColor: "text-green-700 dark:text-green-400",
    iconBg: "bg-green-700/10 dark:bg-green-500/10",
    svg: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 3h7l4 4v10a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <path d="M12 3v4h4" />
      </svg>
    ),
  },
  {
    title: "Searchable mail",
    desc: "Find mail alongside messages, meetings, notes, files, and decisions.",
    footer: "Global search result spanning mail and meetings.",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-600/10 dark:bg-blue-500/10",
    svg: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="9" cy="9" r="5" />
        <path d="M13 13l4 4" />
      </svg>
    ),
  },
];

export default function CoreExperienceSection() {
  const { ref: sectionRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes experienceFloatUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .exp-card-hidden { 
          opacity: 0; 
          transform: translateY(40px); 
        }
        .exp-card-animated { 
          animation: experienceFloatUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="w-full bg-violet-50 dark:bg-gray-900 py-16 sm:py-20 md:py-24 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
          
          {/* Header Typography Group */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-3 justify-center select-none">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans">
                CORE EXPERIENCE
              </span>
            </div>
            
            <h2 className="text-[clamp(24px,4vw,32px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              Everything a business inbox needs —<br />connected to everything else.
            </h2>
            
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Manage business email inside the same workspace as meetings, messages, calendar, files, and notes.
            </p>
          </div>

          {/* Core Feature Layout Frame split elegantly between standard nodes and imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Feature Card Subgrid Blocks */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    animationFillMode: "forwards"
                  }}
                  className={`bg-white dark:bg-gray-800/50 rounded-2xl border border-slate-200 dark:border-gray-800 p-6 sm:p-7 flex flex-col justify-between min-h-[256px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-700 group exp-card-hidden ${
                    isVisible ? "exp-card-animated" : ""
                  }`}
                >
                  <div>
                    {/* App Core Icon Element */}
                    <div className={`size-10 rounded-xl ${feat.iconBg} ${feat.iconColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                      {feat.svg}
                    </div>

                    <h3 className="text-slate-900 dark:text-white text-base font-bold font-sans mb-2.5 leading-snug">
                      {feat.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-gray-400 text-sm font-normal leading-relaxed mb-4">
                      {feat.desc}
                    </p>
                  </div>

                  {/* Micro-Context System Footer */}
                  <div className="text-gray-400 dark:text-gray-500 text-xs font-medium border-t border-slate-100 dark:border-gray-800 pt-3 mt-auto">
                    {feat.footer}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Media Dashboard Preview Block */}
            <div 
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              className={`lg:col-span-4 w-full flex justify-center lg:justify-end exp-card-hidden ${
                isVisible ? "exp-card-animated" : ""
              }`}
            >
              <div className="relative w-full max-w-[385px] bg-white dark:bg-gray-800/50 rounded-[20px] shadow-lg border border-slate-200 dark:border-gray-800 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 dark:hover:border-gray-700">
                <img 
                  className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02] block dark:opacity-90" 
                  src="/sema-mail/image 49.png" 
                  alt="Sema continuous workspace integration view demonstration"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}