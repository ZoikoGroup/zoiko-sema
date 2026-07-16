"use client";

import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, UserX, FileSearch } from 'lucide-react';

const CARDS = [
  {
    icon: "/tasks-todo/Icon.png",
    bgIcon: 'bg-blue-600/10 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
    title: 'Context lives in conversations',
    desc: 'Action items get buried in threads and meeting recaps. Without an owned task, decisions fade and follow-through fails.'
  },
  {
    icon: "/tasks-todo/Icon (1).png",
    bgIcon: 'bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
    title: 'No clear owner or due date',
    desc: 'When everyone is responsible, no one is. Work without an assigned owner and due date rarely reaches completion.'
  },
  {
    icon: "/tasks-todo/Icon (2).png",
    bgIcon: 'bg-emerald-100 dark:bg-emerald-950/40 text-teal-600 dark:text-emerald-400',
    title: 'Source evidence disappears',
    desc: "Months later, teams can't locate the message, meeting, or decision that created the task. Context is lost permanently."
  }
];

export default function ProblemSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className={`text-center space-y-4 max-w-4xl transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
              The Problem
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white ">
            The cost of unconnected follow-through.
          </h2>
          
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            When tasks live apart from the communication that created them, ownership blurs, deadlines slip, and work repeats itself.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="w-full mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className={`p-7 bg-white dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800 flex flex-col items-start gap-4 hover:shadow-xl dark:hover:shadow-2xl/20 hover:-translate-y-2 transition-all duration-300 transform ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + idx * 75}ms` }}
              >
                {/* Custom Icon Box */}
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${card.bgIcon}`}>
                  <img className="w-5 h-5" src={card.icon}/>
                </div>

                {/* Card Title */}
                <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-500 dark:text-slate-400 text-sm font-normal leading-6">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}