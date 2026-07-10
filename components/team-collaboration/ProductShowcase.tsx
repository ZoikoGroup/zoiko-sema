"use client"
import React, { useState, useEffect, useRef } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// ── Intersection observer hook for scroll-triggered activation ──
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

export default function ProductShowcase() {
  const [activeFeature, setActiveFeature] = useState<string>('msg');

  // Separate observer references to trigger animations smoothly on scroll
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: contentRef, inView: contentInView } = useInView(0.1);

  const leftFeatures: FeatureItem[] = [
    {
      id: 'msg',
      title: 'Team messaging',
      description: 'Persistent chat, mentions, reactions, and threads with a full message composer.',
      icon: <img className='w-4 h-4' src="/TeamCollaboration/Frame.png" alt="" />
    },
    {
      id: 'meet',
      title: 'Meetings',
      description: 'Start a meeting from any channel — async chat becomes a live conversation instantly.',
      icon: (
        <svg className="size-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'chan',
      title: 'Channels & spaces',
      description: 'Public and private channels, topic spaces, project spaces, and team areas.',
      icon: <img className='w-4 h-4' src="/TeamCollaboration/Frame (2).png" alt="" />
    }
  ];

  const rightFeatures: FeatureItem[] = [
    {
      id: 'files',
      title: 'Files & tasks',
      description: 'File cards, task assignment, owners, due dates, and approval chips inside the conversation.',
      icon: <img className='w-4 h-4' src="/TeamCollaboration/Frame (3).png" alt="" />
    },
    {
      id: 'ai',
      title: 'AI summaries',
      description: 'Governed meeting recaps with decisions, action items, and follow-up owners.',
      icon: <img className='w-4 h-4' src="/TeamCollaboration/Frame (4).png" alt="" />
    },
    {
      id: 'search',
      title: 'Search & history',
      description: 'Search decisions and reference specific sections of any meeting to keep context.',
      icon: (
        <svg className="size-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  const renderCard = (item: FeatureItem, index: number) => {
    const isSelected = activeFeature === item.id;
    return (
      <div
        key={item.id}
        onClick={() => setActiveFeature(item.id)}
        className={`group/card w-full p-4 bg-white dark:bg-slate-900 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] border cursor-pointer transition-all duration-300 flex flex-col gap-2 ps-card ps-hidden ${
          contentInView ? "ps-visible" : ""
        } ${
          isSelected 
            ? 'border-indigo-500 ring-4 ring-indigo-500/10 md:-translate-y-1 shadow-md' 
            : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
        }`}
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover/card:bg-indigo-100 dark:group-hover/card:bg-indigo-500/20 group-hover/card:scale-110 group-hover/card:rotate-3">
            {item.icon}
          </div>
          <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-4 transition-colors duration-300 group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400">
            {item.title}
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes psFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .ps-hidden  { opacity: 0; transform: translateY(36px); }
        .ps-visible { animation: psFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* Smooth micro-movement configuration for non-selected cards */
        .ps-card {
          will-change: transform, box-shadow;
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .ps-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15,15,40,0.10);
        }

        /* Central mockup hover polish */
        .ps-mockup {
          transition: box-shadow .4s ease, transform .4s cubic-bezier(.22,1,.36,1);
        }
        .ps-mockup:hover {
          box-shadow: 0 20px 44px rgba(79,70,229,0.18);
          transform: translateY(-4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .ps-hidden, .ps-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ps-card:hover, .ps-mockup:hover { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-violet-50/60 dark:bg-slate-950 py-20 overflow-hidden font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
          
          {/* Header Block — Floats up when entering view */}
          <div 
            ref={headRef}
            className={`max-w-[720px] w-full text-center flex flex-col items-center space-y-3 mb-14 md:mb-16 ps-hidden ${
              headInView ? "ps-visible" : ""
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block">
              Product Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Work together in one place, from first message to final follow-up
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed px-2">
              Bring team conversations, meetings, files, tasks, and decisions into a shared workspace where context stays visible and next steps are easy to own.
            </p>
          </div>

          {/* Showcase Grid Area */}
          <div 
            ref={contentRef}
            className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-8 items-center"
          >
            
            {/* Left Column Features — Cascade float up */}
            <div className="xl:col-span-3 flex flex-col gap-4 order-2 md:order-1">
              {leftFeatures.map((feat, idx) => renderCard(feat, idx))}
            </div>

            {/* Central Mockup Graphical Area — Floats up with side columns + transforms image state */}
            <div 
              className={`xl:col-span-6 flex justify-center items-center order-1 md:order-2 w-full p-2 ps-hidden ${
                contentInView ? "ps-visible" : ""
              }`}
              style={{ animationDelay: '0.15s' }}
            >
              <div className="ps-mockup relative w-full max-w-[607px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(15,15,40,0.08)] bg-slate-100 dark:bg-slate-900 group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                  src={`/TeamCollaboration/Frame 109.png`}
                  alt="Zoiko Sema Platform Showcase Demonstration" 
                />
              </div>
            </div>

            {/* Right Column Features — Cascade float up */}
            <div className="xl:col-span-3 flex flex-col gap-4 order-3">
              {rightFeatures.map((feat, idx) => renderCard(feat, idx + leftFeatures.length + 1))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}