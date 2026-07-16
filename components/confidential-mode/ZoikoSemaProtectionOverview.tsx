"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER HOOK FOR FLOATING REVEAL EFFECTS ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaProtectionOverview() {
  const [protectRef, protectVisible] = useScrollReveal();
  const [changesRef, changesVisible] = useScrollReveal();

  const protectCards = [
    {
      title: 'Encrypted internal meetings',
      desc: 'Protect sensitive meeting content with a clear Confidential Mode state visible before and during the meeting.',
      linkText: 'Explore meetings',
      link:"/meeting-to-summary"
    },
    {
      title: 'Protected internal messaging',
      desc: 'Use secure conversations for sensitive internal topics where content handling must be stricter.',
      linkText: 'Explore messaging',
      link:"/messaging"
    },
    {
      title: 'Clear workspace policy',
      desc: 'Let admins define where Confidential Mode is available, required, or restricted.',
      linkText: 'Explore Admin Console',
      link:"/admin-console"
    }
  ];

  const changeCards = [
    {
      imgUrl: '/confidentail/image 73.png',
      tag: 'Protected',
      tagColor: 'bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300',
      title: 'End-to-end encrypted',
      desc: 'Internal meeting and messaging content is protected end-to-end.'
    },
    {
      imgUrl: '/confidentail/image 74.png',
      tag: 'Unavailable while active',
      tagColor: 'bg-rose-100 text-red-700 dark:bg-rose-950/60 dark:text-rose-300',
      title: 'AI, recording, transcription, search',
      desc: 'AI summaries, live transcription, recording, and content search for protected content.'
    },
    {
      imgUrl: '/confidentail/image 75.png',
      tag: 'Still controlled',
      tagColor: 'bg-violet-200 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300',
      title: 'Policy and audit',
      desc: 'Workspace policy, role permissions, guest rules, and audit-safe policy events.'
    }
  ];

  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden selection:bg-blue-500/20">

      {/* ========================================== */}
      {/* SECTION 1: WHAT IT PROTECTS                */}
      {/* ========================================== */}
      <section
        ref={protectRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Animated Header & Info Sentences */}
          <div className={`text-center space-y-4 transition-all duration-1000 transform ${protectVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">What It Protects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Protection for the conversations that require stronger privacy.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-sans leading-relaxed">
              Use Confidential Mode for sensitive internal meetings and messaging where content should not be available for AI processing, recording, transcript generation, or general content search.
            </p>
          </div>

          {/* Core Feature Image Block */}
          <div className={`w-full max-w-[1136px] mx-auto aspect-[1136/384] bg-slate-50 dark:bg-gray-900 rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-800 overflow-hidden transition-all duration-1000 delay-150 transform ${protectVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hover:scale-[1.002]`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]" 
              src="/confidentail/image 79@2x.png" 
              alt="Security operations schematic displaying configuration layout maps" 
            />
          </div>

          {/* Grid Layout of Protected Categories */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform ${protectVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {protectCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 p-6 rounded-2xl shadow-[0px_4px_16px_rgba(18,19,43,0.02)] flex flex-col justify-between space-y-5 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-400/20"
              >
                <div className="space-y-2.5">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
                <div onClick={()=>router.push(card.link)} className="flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-200">
                  <span>{card.linkText}</span>
                  <span className="font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 2: WHAT CHANGES                    */}
      {/* ========================================== */}
      <section
        ref={changesRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-violet-50/50 dark:bg-gray-900/30 border-t border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Animated Header & Info Sentences */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${changesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">What Changes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Stronger privacy, with clear feature trade-offs.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans">
              Confidential Mode is not "everything plus privacy." It's stronger privacy with honest limits.
            </p>
          </div>

          {/* Cards Grid Incorporating Media + Descriptions */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 transform ${changesVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {changeCards.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/60 dark:border-gray-800 shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-700"
              >
                {/* Media Module */}
                <div className="w-full aspect-square bg-slate-100 dark:bg-gray-950 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={item.imgUrl} 
                    alt={item.title} 
                  />
                </div>
                
                {/* Text Content Block */}
                <div className="p-6 flex-grow flex flex-col items-start gap-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide transition-transform group-hover:scale-105 ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compare Redirect Hub Node */}
          <div className={`pt-4 flex items-center justify-center transition-all duration-1000 delay-300 transform ${changesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div onClick={()=>router.push('/confidential-mode')} className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer group font-sans">
              <span>Compare normal mode and Confidential Mode</span>
              <span className="font-bold group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}