'use client';

import React, { useEffect, useState, useRef } from 'react';

interface SpaceRow {
  name: string;
  owner: string;
  members: string;
  privacy: string;
  policy: string;
  policyStatus: 'applied' | 'review';
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

export default function WorkspaceOrganization() {
  const { ref: sectionRef, inView: sectionInView } = useInView(0.15);

  const spacesData: SpaceRow[] = [
    {
      name: '#client-delivery-acme',
      owner: 'M. Alvarez',
      members: '12 · 2 guests',
      privacy: 'Guest-enabled',
      policy: 'Applied',
      policyStatus: 'applied'
    },
    {
      name: '#leadership',
      owner: 'S. Chen',
      members: '8',
      privacy: 'Private',
      policy: 'Applied',
      policyStatus: 'applied'
    },
    {
      name: '#ops-handoffs',
      owner: 'R. Patel',
      members: '24',
      privacy: 'Open',
      policy: 'Applied',
      policyStatus: 'applied'
    },
    {
      name: '#support-queue',
      owner: 'D. Okafor',
      members: '16 · 5 guests',
      privacy: 'Guest-enabled',
      policy: 'Review',
      policyStatus: 'review'
    }
  ];

  return (
    <>
      <style>{`
        /* ── Scroll Entrance Reveal Keyframes ── */
        @keyframes orgFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .org-hidden  { opacity: 0; transform: translateY(32px); }
        .org-visible { animation: orgFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .org-hidden, .org-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="w-full bg-slate-50 dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Detail Column */}
          <div 
            className={`lg:col-span-5 flex flex-col items-start text-left space-y-6 org-hidden ${
              sectionInView ? "org-visible" : ""
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Organize communication around the way your business works.
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Create spaces for departments, projects, leadership, clients, support queues, or operating rhythms with the right members, permissions, and context.
            </p>

            <div className="pt-2">
              <button className="group px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-full shadow-md shadow-blue-600/10 transition-all duration-150 hover:-translate-y-0.5 flex items-center gap-2">
                <span>Explore workspace setup</span>
                <svg className="size-4 transform group-hover:translate-x-0.5 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Data Grid Panel Preview Column */}
          <div 
            className={`lg:col-span-7 w-full org-hidden ${
              sectionInView ? "org-visible" : ""
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-full bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-violet-100 dark:border-slate-800 rounded-2xl shadow-[0px_30px_60px_-30px_rgba(20,22,60,0.12)] overflow-hidden">
              
              {/* Responsive Horizontal Scrolling Wrapper Container */}
              <div className="w-full overflow-x-auto scrollbar-thin">
                <table className="w-full text-left border-collapse min-w-[620px]">
                  
                  {/* Table Headers */}
                  <thead>
                    <tr className="bg-gray-50/70 dark:bg-slate-800/40 border-b border-violet-100 dark:border-slate-800/60">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Space</th>
                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Owner</th>
                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Members</th>
                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Privacy</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Policy</th>
                    </tr>
                  </thead>

                  {/* Table Bodies Matrix */}
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                    {spacesData.map((row, idx) => (
                      <tr 
                        key={idx}
                        className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors duration-150"
                      >
                        {/* Space Name */}
                        <td className="px-6 py-4 text-xs font-bold text-slate-900 dark:text-white transition-colors duration-150 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {row.name}
                        </td>
                        
                        {/* Owner */}
                        <td className="px-4 py-4 text-xs font-normal text-slate-500 dark:text-slate-400">
                          {row.owner}
                        </td>
                        
                        {/* Members count indicator */}
                        <td className="px-4 py-4 text-xs font-normal text-slate-500 dark:text-slate-400">
                          {row.members}
                        </td>
                        
                        {/* Privacy Configuration badge text */}
                        <td className="px-4 py-4 text-xs font-normal text-slate-500 dark:text-slate-400">
                          {row.privacy}
                        </td>
                        
                        {/* Operational Status Action Badges */}
                        <td className="px-6 py-4 text-xs font-bold">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider ${
                            row.policyStatus === 'applied'
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                              : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400'
                          }`}>
                            {row.policy}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}