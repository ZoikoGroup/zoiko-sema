"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

// Structured data for tabs and dynamic content
const FEATURES_DATA = [
  {
    id: "decisions",
    tabLabel: "Get decisions captured",
    title: "Decisions, captured automatically",
    desc: "Meeting Intelligence turns discussion into a clear summary of decisions and owners — reviewed by the host before it's shared, at no extra cost on eligible plans.",
    image: "/video-meeting/Feature preview.png",
    link: "/about"
  },
  {
    id: "screens",
    tabLabel: "Share multiple screens",
    title: "Simultaneous sharing for better context",
    desc: "Allow multiple participants to share their screens at the exact same time. Compare designs, analyze code, and debug issues collaboratively side-by-side without passing controls back and forth.",
    image: "/video-meeting/Feature preview.png",
    link: "/about"
  },
  {
    id: "organized",
    tabLabel: "Stay organized",
    title: "Everything in its right place",
    desc: "Automate your pre- and post-meeting organization. Instantly attach recordings, generated action items, transcripts, and shared resources right back to your designated team channels.",
    image: "/video-meeting/Feature preview.png",
    link: "/about"
  },
  {
    id: "tools",
    tabLabel: "Connect your tools",
    title: "Deep ecosystem integrations",
    desc: "Sync decisions seamlessly directly into Jira, Asana, Slack, and Notion. Keep your team's existing product workflows active without manual copy-pasting.",
    image: "/video-meeting/Feature preview.png",
    link: "/about"
  }
];

export default function VideoMeetingsShowcaseSection() {
  const [activeTab, setActiveTab] = useState("decisions");
  
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: contentRef, inView: contentIn } = useInView(0.15);

  const currentFeature = FEATURES_DATA.find((f) => f.id === activeTab) || FEATURES_DATA[0];

  return (
    <>
      <style>{`
        @keyframes vcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-hidden  { opacity: 0; transform: translateY(28px); }
        .vc-visible { animation: vcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth crossfade modifier for content swapping */
        @keyframes tabSwap {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-tab-swap {
          animation: tabSwap 0.4s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vc-interactive-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vc-interactive-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px color-mix(in srgb, var(--brand, #3457e8) 8%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-hidden, .vc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vc-interactive-card:hover { transform: none !important; }
          .animate-tab-swap { animation: none !important; }
        }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          
          {/* Header Section */}
          <div 
            ref={headerRef}
            className={`vc-hidden ${headerIn ? "vc-visible" : ""} text-center max-w-2xl mx-auto mb-10 sm:mb-12`}
          >
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              KEY FEATURES
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold leading-[1.15] text-slate-900">
              Accomplish more with Zoiko Sema Meetings
            </h2>
          </div>

          {/* Interactive Tab Switchers */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-10 sm:mb-14">
            {FEATURES_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 outline outline-1 outline-offset-[-1px] ${
                    isActive
                      ? "bg-slate-900 text-white outline-slate-900 shadow-md scale-[1.02]"
                      : "bg-violet-50 text-gray-600 outline-violet-100 hover:bg-violet-100/70 hover:text-slate-900"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Main Showcase Dashboard Display */}
          <div
            ref={contentRef}
            className={`vc-hidden ${contentIn ? "vc-visible" : ""} vc-interactive-card bg-violet-50 rounded-3xl border border-violet-100 p-6 sm:p-10 md:p-12`}
          >
            {/* Key attribute forces animation reset when switching tabs */}
            <div 
              key={activeTab} 
              className="animate-tab-swap grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Feature Image Frame */}
              <div className="md:col-span-5 flex justify-center">
                <img
                  className="w-full max-w-[489px] h-auto aspect-[489/300] object-cover rounded-2xl "
                  src={currentFeature.image}
                  alt={currentFeature.title}
                />
              </div>

              {/* Feature Copy details */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {currentFeature.title}
                </h3>
                <p className="text-[15px] sm:text-base leading-relaxed text-slate-600 max-w-[520px] mb-6">
                  {currentFeature.desc}
                </p>
                <div>
                  <a
                    href={currentFeature.link}
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                  >
                    Learn more{" "}
                    <span className="inline-block transform translate-x-1 transition-transform group-hover:translate-x-2 ml-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}