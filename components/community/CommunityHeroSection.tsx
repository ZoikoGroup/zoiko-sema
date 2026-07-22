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
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function CommunityHeroSection() {
  const { ref, isVisible } = useScrollReveal();

  const badges = [
    "Peer answers",
    "Verified experts",
    "Moderated participation",
    "Public learning"
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tagline Indicator */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 h-5">
              <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
                ZOIKO SEMA COMMUNITY
              </span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold   tracking-tight leading-[1.15]">
              Learn with the people building and using Zoiko Sema.
            </h1>
          </div>

          {/* Description Paragraph */}
          <p className="text-white/70 text-sm sm:text-base font-normal   leading-relaxed max-w-[540px]">
            Find practical answers, share workflows, join expert sessions, and
            connect with users, admins, developers, and Zoiko Sema
            specialists in one governed community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#featured-questions" className="px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold   rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/30 active:translate-y-0">
              Browse answers
            </a>
            <a href="/signup" className="px-7 py-3.5 bg-transparent text-white text-sm font-semibold   rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/50 active:translate-y-0">
              Join the community
            </a>
          </div>

          {/* Meta Information Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 border border-white/15 text-white/90 text-xs font-semibold   rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Compliance Disclaimer Guard */}
          <p className="text-white/40 text-xs font-normal   leading-relaxed max-w-[620px] pt-4 border-t border-white/5">
            Never share passwords, API secrets, private meeting content, personal data, or regulated information in public posts.
          </p>
        </div>

        {/* Right Feature Display Image Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] lg:max-w-none aspect-[540/320] rounded-[20px] overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0px_35px_90px_rgba(99,102,241,0.2)]">
            <img 
              className="w-full h-full object-cover" 
              src="/community/image 301.png" 
              alt="Zoiko Sema workspace collaboration interface ecosystem dashboard preview mock" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}