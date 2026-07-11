"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const communicationModes = [
  {
    title: "Meetings",
    desc: "Capture agendas, decisions, and next steps during or after meetings.",
    linkText: "Use Notes in Meetings →",
    image: "/sema-notes/image 36.png",
  },
  {
    title: "Calls",
    desc: "Record call notes, outcomes, and follow-up tasks where policy allows.",
    linkText: "Use Notes in Calls →",
    image: "/sema-notes/image 37.png",
  },
  {
    title: "Messaging",
    desc: "Turn important thread moments into shared notes and decisions.",
    linkText: "Use Notes in Messaging →",
    image: "/sema-notes/image 38.png",
  },
  {
    title: "Mail",
    desc: "Create notes from customer or internal email context.",
    linkText: "Use Notes with Mail →",
    image: "/sema-notes/image 39.png",
  },
  {
    title: "Calendar",
    desc: "Attach notes to scheduled meetings, events, and recurring reviews.",
    linkText: "Use Notes with Calendar →",
    image: "/sema-notes/image 40.png",
    imageClass: "object-bottom",
  },
  {
    title: "Files",
    desc: "Keep notes connected to documents, decks, briefs, and attachments.",
    linkText: "Use Notes with Files →",
    image: "/sema-notes/image 41.png",
  },
];

export default function CommunicationModesSection() {
  const { ref: containerRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes blockFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mode-hidden { opacity: 0; transform: translateY(20px); }
        .mode-visible { animation: blockFadeInUp 0.6s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; }
      `}</style>

      <section className="w-full bg-[#faf9fe] dark:bg-slate-950 py-16 sm:py-20 md:py-24 overflow-hidden transition-colors duration-200">
        <div 
          ref={containerRef}
          className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10"
        >
          {/* Section Heading Setup */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="block text-blue-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3 select-none">
              NOTES ACROSS COMMUNICATION MODES
            </span>
            <h2 className="text-[clamp(24px,4vw,32px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              One notes layer, everywhere you already talk.
            </h2>
          </div>

          {/* Core Feature Dynamic Layout Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {communicationModes.map((item, idx) => (
              <div
                key={idx}
                style={{ 
                  animationDelay: `${idx * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
                className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-6 flex flex-col justify-between h-[310px] shadow-sm hover:shadow-md dark:shadow-none hover:border-slate-300/80 dark:hover:border-slate-700 transition-all duration-300 group mode-hidden ${
                  isVisible ? "mode-visible" : ""
                }`}
              >
                {/* Embedded Canvas/Media Display Compartment */}
                <div className="w-full h-36 bg-violet-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/50 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={`${item.title} integration visualization`}
                    className={`w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.03] ${item.imageClass || ''}`}
                    loading="lazy"
                  />
                </div>

                {/* Content Breakdown Elements */}
                <div className="mt-4 flex-grow flex flex-col justify-start">
                  <h3 className="text-slate-900 dark:text-white text-sm font-bold font-sans mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-normal leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Anchor Link Elements */}
                <div className="pt-3">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 dark:text-indigo-400 text-xs font-bold font-sans transition-colors duration-200 hover:text-blue-700 dark:hover:text-indigo-300"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}