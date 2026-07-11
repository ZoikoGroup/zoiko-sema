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

const featureItems = [
  {
    title: "Reduce communication noise",
    description: "Organize conversations by people, teams, projects, clients, and spaces.",
    isActive: true,
  },
  {
    title: "Keep decisions visible",
    description: "Threads, pins, summaries, and action capture preserve the outcome of every conversation.",
    isActive: false,
  },
  {
    title: "Make communication searchable",
    description: "Find messages, files, decisions, mentions, and AI-generated summaries across workspaces.",
    isActive: false,
  }
];

export default function FeaturesShowcaseSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes featFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .feat-hidden  { opacity: 0; transform: translateY(24px); }
        .feat-visible { animation: featFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
      `}</style>

      <section className="w-full bg-white py-11 sm:py-11 md:py-24 overflow-hidden">
        <div 
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 feat-hidden ${
            sectionIn ? "feat-visible" : ""
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Title & Managed Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 w-full">
              <div>
                <h2 className="text-[12132B] font-bold text-slate-900 leading-[1.25] tracking-tight max-w-md text-3xl">
                  Stop losing decisions inside scattered conversations.
                </h2>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {featureItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-full p-5 sm:p-6 rounded-2xl border transition-all duration-200 ${
                      item.isActive
                        ? "bg-violet-50 border-slate-200/90 shadow-sm"
                        : "bg-white border-slate-200/60 hover:border-slate-300"
                    }`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 select-none">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Graphic Context Container */}
            <div className="lg:col-span-6 w-full flex justify-center items-center">
              <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-square max-w-[500px] lg:max-w-none  rounded-2xl flex flex-col items-center justify-center p-6 text-center  relative group overflow-hidden">
                {/* Visual Background Placeholder decoration matching the branding style */}
                <div className="absolute inset-0 pointer-events-none" />
                <img className="rounded-xl" src="/messaging/image 14.png"/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}