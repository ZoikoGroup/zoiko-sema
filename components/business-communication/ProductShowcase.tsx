'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for individual nodes ──
function useElementInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type TabKey = 'messages' | 'meetings' | 'recaps' | 'tasks';

interface TabContent {
  label: string;
  channelName: string;
  channels: string[];
  activeChannel: string;
  feedItems: { type: 'msg' | 'decision' | 'file' | 'alert'; text: string; author?: string }[];
  imgSrc: string;
}

export default function ProductShowcase() {
  const { ref: headerRef, inView: headerInView } = useElementInView(0.1);
  const { ref: navRef, inView: navInView } = useElementInView(0.1);
  const { ref: boardRef, inView: boardInView } = useElementInView(0.08);
  const { ref: footerRef, inView: footerInView } = useElementInView(0.05);

  const [activeTab, setActiveTab] = useState<TabKey>('messages');

  const tabData: Record<TabKey, TabContent> = {
    messages: {
      label: 'Messages',
      channelName: '#client-delivery-acme',
      channels: ['# client-delivery', '# leadership', '# ops-handoffs'],
      activeChannel: '# client-delivery',
      imgSrc: '/buisness-communication/image 30.png',
      feedItems: [
        { type: 'msg', author: 'S. Chen', text: "— sharing the revised timeline ahead of Friday's review" },
        { type: 'decision', text: '✓ Decision logged — extend phase 2 by one week' },
        { type: 'file', text: '📎 Timeline_v4.pdf shared to this channel' }
      ]
    },
    meetings: {
      label: 'Meetings',
      channelName: 'Huddle: Architecture Sync',
      channels: ['# client-delivery', '# architecture-sync 🔊', '# ops-handoffs'],
      activeChannel: '# architecture-sync 🔊',
      imgSrc: '/buisness-communication/image 30.png',
      feedItems: [
        { type: 'alert', text: '▶ Huddle started by M. Keller — 14m elapsed' },
        { type: 'msg', author: 'A. Patel', text: '— Screensharing "System_Topology_v2.excalidraw"' },
        { type: 'decision', text: '✓ Decision logged — Approved hybrid cloud migration path' }
      ]
    },
    recaps: {
      label: 'AI Recaps',
      channelName: 'AI Summary: Q3 Planning',
      channels: ['✨ AI-Summaries', '# client-delivery', '# leadership'],
      activeChannel: '✨ AI-Summaries',
      imgSrc: '/buisness-communication/image 30.png',
      feedItems: [
        { type: 'decision', text: '✨ Executive Summary: The team approved the adjusted roadmap timeline due to resource constraints.' },
        { type: 'file', text: '📦 Action Items extraction report generated (.md)' },
        { type: 'msg', author: 'Zoiko AI', text: '— parsed 3 critical decision markers from thread transcripts.' }
      ]
    },
    tasks: {
      label: 'Tasks',
      channelName: 'Milestone Tracking',
      channels: ['# client-delivery', '# ops-handoffs', '☑ shared-tasks'],
      activeChannel: '☑ shared-tasks',
      imgSrc: '/buisness-communication/image 30.png',
      feedItems: [
        { type: 'decision', text: '⎋ Task Assigned to @S.Chen: Deliver final asset package (Due: Friday)' },
        { type: 'alert', text: '⚡ Blocked flag removed on Phase 2 timeline asset audit' },
        { type: 'file', text: '✓ Milestone 1 marked completed by Product Ops' }
      ]
    }
  };

  const activeData = tabData[activeTab];

  return (
    <section className="w-full bg-slate-900 py-20 lg:py-28 font-sans antialiased text-white overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Section Header Block */}
        <div 
          ref={headerRef}
          className={`space-y-4 max-w-[720px] mx-auto transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block">
            Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            Bring conversations, meetings, and follow-up into one workstream.
          </h2>
          <p className="text-base text-slate-400 max-w-[640px] mx-auto leading-relaxed">
            Teams can move from message to meeting to decision to action without losing context across tools.
          </p>
        </div>

        {/* Interactive Navigation Controller Pills */}
        <div 
          ref={navRef}
          className={`flex flex-wrap justify-center items-center gap-2 mt-10 p-1.5 bg-slate-800/40 border border-slate-800/80 rounded-full max-w-full sm:w-max mx-auto transition-all duration-700 ease-out delay-100 ${
            navInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {(Object.keys(tabData) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform active:scale-95 ${
                activeTab === key
                  ? 'bg-white text-slate-900 shadow-[0_4px_12px_rgba(255,255,255,0.15)] scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tabData[key].label}
            </button>
          ))}
        </div>

        {/* Dynamic Mock Workspace UI Container */}
        <div 
          ref={boardRef}
          className={`w-full max-w-[1200px] mt-10 bg-white rounded-3xl text-slate-900 text-left grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[360px] border border-slate-100/10 transition-all duration-750 ease-out ${
            boardInView 
              ? 'opacity-100 translate-y-0 scale-100 shadow-[0px_40px_90px_-30px_rgba(0,0,0,0.8)]' 
              : 'opacity-0 translate-y-16 scale-[0.98] shadow-none'
          }`}
        >
          
          {/* Sidebar Left Navigation Stack */}
          <div className="lg:col-span-3 bg-slate-50 border-r border-slate-100 p-6 flex flex-col space-y-4">
            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              Spaces
            </span>
            <div className="flex flex-col gap-1.5">
              {activeData.channels.map((chan, i) => {
                const isActive = chan === activeData.activeChannel;
                return (
                  <div 
                    key={i}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer transform ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-600 shadow-sm translate-x-1' 
                        : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 hover:translate-x-0.5'
                    }`}
                  >
                    {chan}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle & Right Content Control Feeds */}
          <div className="lg:col-span-9 p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-8 relative items-stretch">
            
            {/* Message Streams Frame */}
            <div className="flex-1 flex flex-col justify-start space-y-4 max-w-[540px]">
              <h3 className="text-slate-900 font-bold text-base tracking-tight pb-1 border-b border-slate-100">
                {activeData.channelName}
              </h3>

              <div className="flex flex-col gap-3">
                {activeData.feedItems.map((item, idx) => {
                  // Standard structural base style with lift effect additions
                  const baseStyle = "w-full p-3.5 rounded-xl text-xs font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default ";
                  
                  if (item.type === 'decision') {
                    return (
                      <div key={idx} className={`${baseStyle} bg-indigo-50/80 border border-indigo-100/50 text-indigo-900 font-semibold`}>
                        {item.text}
                      </div>
                    );
                  }
                  if (item.type === 'file') {
                    return (
                      <div key={idx} className={`${baseStyle} bg-emerald-50/60 border border-emerald-100/30 text-emerald-800 flex items-center gap-1.5`}>
                        {item.text}
                      </div>
                    );
                  }
                  if (item.type === 'alert') {
                    return (
                      <div key={idx} className={`${baseStyle} bg-amber-50/70 border border-amber-100/40 text-amber-800`}>
                        {item.text}
                      </div>
                    );
                  }
                  return (
                    <div key={idx} className={`${baseStyle} bg-slate-100/80 text-slate-600`}>
                      <span className="font-bold text-slate-900">{item.author}</span>{' '}
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side Sidebar Dashboard Graphics Card */}
            <div className="w-full md:w-[390px] shrink-0 relative rounded-2xl overflow-hidden flex items-center justify-center min-h-[220px] md:min-h-auto group/img bg-slate-50 border border-slate-100">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                src={activeData.imgSrc} 
                alt={`${activeData.label} application view illustration`} 
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/[0.02] transition-colors duration-500 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* Bottom Actions Footer Trigger Group */}
        <div 
          ref={footerRef}
          className={`flex flex-wrap items-center justify-center gap-6 mt-12 transition-all duration-700 ease-out ${
            footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:scale-95 text-white font-bold text-sm rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
            View product tour
          </button>
          <button className="px-3 py-2 text-white font-bold text-sm border-b-2 border-white/10 hover:border-white transition-all duration-200 transform active:scale-95">
            Get a demo
          </button>
        </div>

      </div>
    </section>
  );
}