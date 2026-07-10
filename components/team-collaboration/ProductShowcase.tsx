"use client"
import React, { useState } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProductShowcase() {
  // Active feature state for interactive focus on mobile/tablet or image switching
  const [activeFeature, setActiveFeature] = useState<string>('msg');

  const leftFeatures: FeatureItem[] = [
    {
      id: 'msg',
      title: 'Team messaging',
      description: 'Persistent chat, mentions, reactions, and threads with a full message composer.',
      icon: (
        <img className='w-4 h-4'  src="/TeamCollaboration/Frame.png"/>
      )
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
      icon: (
         <img className='w-4 h-4'  src="/TeamCollaboration/Frame (2).png"/>
      )
    }
  ];

  const rightFeatures: FeatureItem[] = [
    {
      id: 'files',
      title: 'Files & tasks',
      description: 'File cards, task assignment, owners, due dates, and approval chips inside the conversation.',
      icon: (
        <img className='w-4 h-4'  src="/TeamCollaboration/Frame (3).png"/>
      )
    },
    {
      id: 'ai',
      title: 'AI summaries',
      description: 'Governed meeting recaps with decisions, action items, and follow-up owners.',
      icon: (
         <img className='w-4 h-4'  src="/TeamCollaboration/Frame (4).png"/>

      )
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

  const renderCard = (item: FeatureItem) => {
    const isSelected = activeFeature === item.id;
    return (
      <div
        key={item.id}
        onClick={() => setActiveFeature(item.id)}
        className={`w-full p-4 bg-white dark:bg-slate-900 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] border cursor-pointer transition-all duration-200 flex flex-col gap-2 ${
          isSelected 
            ? 'border-indigo-500 ring-2 ring-indigo-500/10 scale-[1.01]' 
            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <h3 className="text-slate-900 dark:text-white text-sm font-bold   leading-4">
            {item.title}
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal   leading-5">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <section className="w-full bg-violet-50/60 dark:bg-slate-950 py-20 overflow-hidden font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-[720px] w-full text-center flex flex-col items-center space-y-3 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block  ">
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]  ">
            Work together in one place, from first message to final follow-up
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed   px-2">
            Bring team conversations, meetings, files, tasks, and decisions into a shared workspace where context stays visible and next steps are easy to own.
          </p>
        </div>

        {/* Showcase Grid Area */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Features (Desktop 3cols, Tablet 1col, Mobile 1col) */}
          <div className="xl:col-span-3 flex flex-col gap-4 order-2 md:order-1">
            {leftFeatures.map(renderCard)}
          </div>

          {/* Central Mockup Graphical Area */}
          <div className="xl:col-span-6 flex justify-center items-center order-1 md:order-2 w-full p-2">
            <div className="relative w-full max-w-[607px] aspect-[4/3] rounded-2xl overflow-hidden ">
              <img 
                className="w-full h-full object-cover transition-transform duration-300"
                src={`/TeamCollaboration/Frame 109.png`}
                alt="Zoiko Sema Platform Showcase Demonstration" 
              />
            </div>
          </div>

          {/* Right Column Features (Desktop 3cols, Tablet 1col, Mobile 1col) */}
          <div className="xl:col-span-3 flex flex-col gap-4 order-3">
            {rightFeatures.map(renderCard)}
          </div>

        </div>

      </div>
    </section>
  );
}