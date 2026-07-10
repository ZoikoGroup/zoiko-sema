import React from 'react';

interface UseCaseCard {
  tag: string;
  title: string;
  description: string;
  subText: string;
  icon: React.ReactNode;
}

export default function TeamWayOfWorking() {
  const useCases: UseCaseCard[] = [
    {
      tag: 'Leadership communication',
      title: 'Share updates and priorities across teams',
      description: 'Post decisions and priorities with clarity in recurring update spaces.',
      subText: 'Recurring update spaces keep teams returning.',
      icon: (
        <img className='w-6 h-6'  src="/TeamCollaboration/Frame (7).png"/>
      ),
    },
    {
      tag: 'Project coordination',
      title: 'Keep plans, files, tasks, and blockers in one space',
      description: 'Discussions, files, tasks, blockers, and decisions live together in a shared workspace.',
      subText: "Work history becomes the project's memory.",
      icon: (
        <img className='w-6 h-6'  src="/TeamCollaboration/Frame (9).png"/>

      ),
    },
    {
      tag: 'Client collaboration',
      title: 'Work with clients and partners in controlled spaces',
      description: 'Guest access, external chips, and workspace-level permissions keep partners in scope.',
      subText: 'Secure external spaces reduce tool switching.',
      icon: (
           <img className='w-6 h-6'  src="/TeamCollaboration/Frame (8).png"/>

      ),
    },
    {
      tag: 'Remote team alignment',
      title: 'Bring people together across time zones',
      description: 'Async updates and meeting summaries keep distributed teams aligned.',
      subText: 'Async summaries and follow-ups sustain usage.',
      icon: (
        <svg className="size-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        
        {/* Header Block Container */}
        <div className="max-w-[720px] w-full text-center flex flex-col items-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block   ">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10   ">
            Recognize your team's way of working
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed    max-w-[640px]">
            From leadership updates to distributed teams, Zoiko Sema adapts to how your teams already collaborate.
          </p>
        </div>

        {/* Use Cases Split / Multi-Grid Layout Structure */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] flex flex-col sm:flex-row overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Graphic/Icon Sidebar Plate */}
              <div className="w-full sm:w-36 bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center py-8 sm:py-0 shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
                <div className="size-12 rounded-xl  flex items-center justify-center ">
                  {useCase.icon}
                </div>
              </div>

              {/* Text Information Container */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block   ">
                    {useCase.tag}
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-base font-bold    leading-snug">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal    leading-relaxed pt-1">
                    {useCase.description}
                  </p>
                </div>

                {/* Subtext Context Indicator Row */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <svg className="size-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-normal   ">
                    {useCase.subText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Trigger Button */}
        <div className="pt-4">
          <button className="relative group px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-base font-semibold    rounded-xl shadow-[0px_10px_24px_-10px_rgba(79,70,229,0.5)] transition-all duration-150 flex items-center gap-2">
            <span>Explore team workflows</span>
            <svg 
              className="size-4 transform group-hover:translate-x-0.5 transition-transform duration-150" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}