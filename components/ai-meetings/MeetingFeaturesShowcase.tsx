'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function MeetingFeaturesShowcase() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // FAQ State management
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-element');
          elements.forEach((el) => {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const useCases = [
    {
      title: 'Team standups',
      description: "Catch up fast with highlights, decisions, and the day's owned actions.",
      tag: 'Recurring',
      // SVG Icon representation
      icon: (
        <img className="size-6" src="/ai-meetings/Frame (64).png"/>
          
      )
    },
    {
      title: 'Client & sales calls',
      description: 'Turn calls into client-ready recaps and follow-up tasks under sharing controls.',
      tag: 'Client-ready',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (65).png"/>
      )
    },
    {
      title: 'Leadership decisions',
      description: 'Keep decisions confirmed, timestamped, and traceable to the source.',
      tag: 'Traceable',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (66).png"/>
      )
    },
    {
      title: 'Project reviews',
      description: 'Link summaries to the project space with tasks, files, and next steps.',
      tag: 'Connected',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (67).png"/>
      )
    },
    {
      title: 'Remote & async teams',
      description: 'Give distributed teams a shared record no matter who could attend.',
      tag: 'Async',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (68).png"/>
      )
    },
    {
      title: 'Sensitive meetings',
      description: 'For HR, legal, or executive spaces, summaries can be excluded by policy.',
      tag: 'AI restricted',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (69).png"/>
      )
    }
  ];

  const outcomes = [
    {
      title: 'Fewer recap gaps',
      description: 'Reviewed summaries after every meeting',
      icon: (
        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Clearer follow-through',
      description: 'Owned action items with due dates',
      icon: (
         <img className="size-6" src="/ai-meetings/Frame (66).png"/>
      )
    },
    {
      title: 'Searchable decisions',
      description: 'Decision log linked to source meetings',
      icon: (
        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'What are Zoiko Sema AI Meeting Summaries?',
      answer: 'A post-meeting recap with key points, decisions, action items, transcript, files, and follow-up tasks — connected to the workspace where the meeting happened.'
    },
    {
      question: 'Can users edit a meeting summary?',
      answer: 'Yes, designated reviewers and hosts can edit, refine, or regenerate parts of the summary before finalizing and publishing it.'
    },
    {
      question: 'Can admins control AI summaries?',
      answer: 'Absolutely. Admins can control permissions globally, specify restricted rooms/channels, toggle guest visibility, and define organizational retention thresholds.'
    },
    {
      question: 'Does it show action items and owners?',
      answer: 'Yes, action items are automatically parsed from conversation context and can be mapped directly to owners with assigned tracking dates.'
    },
    {
      question: 'Can summaries be exported?',
      answer: 'Summaries can be exported seamlessly into integrated project management spaces, shared channels, or custom documentation setups.'
    },
    {
      question: 'How does Zoiko Sema handle privacy?',
      answer: 'Data is protected under end-to-end organizational guidelines. Meeting audio is processed securely according to compliance rules and never used for baseline public model training.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* =======================================================================
          SECTION 1: USE CASES
          ======================================================================= */}
      <section 
        ref={section1Ref}
        className="relative w-full py-20 sm:py-28 px-6 md:px-12 max-w-[1248px] mx-auto flex flex-col items-center overflow-hidden"
      >
        <div className="max-w-[760px] w-full text-center flex flex-col items-center gap-3 mb-16 sm:mb-20">
          <span className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Use Cases
          </span>
          <h2 className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Built for the meetings your team runs
          </h2>
          <p className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-base text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
            From daily standups to client calls and leadership reviews — summaries keep every meeting connected to the work.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => (
            <div 
              key={index}
              className={`reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col transform hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 group`}
              style={{ transitionDelay: `${350 + index * 50}ms` }}
            >
              <div className="h-24 w-full relative bg-[#111184] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                <div className="group-hover:scale-110 transition-transform duration-300 z-10">
                  {item.icon}
                </div>
                <span className="absolute top-3 right-4 px-2 py-0.5 bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 font-bold text-[9px] rounded-full uppercase tracking-wider z-10">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-2">
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================================================================
          SECTION 2: OUTCOMES
          ======================================================================= */}
      <section 
        ref={section2Ref}
        className="relative w-full bg-indigo-700 dark:bg-indigo-950 text-white py-20 sm:py-24 overflow-hidden"
      >
        <div className="max-w-[1248px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Quote Block */}
          <div className="lg:col-span-7 flex flex-col gap-5 relative">
            <span className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-200">
              Outcomes
            </span>
            <div className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 relative pl-6">
              <span className="absolute top-[-10px] left-0 text-5xl font-serif font-bold text-indigo-300/40 leading-none">“</span>
              <p className="text-xl sm:text-2xl font-bold tracking-tight leading-relaxed text-indigo-50">
                Our meetings finally end with a decision record and owned actions instead of scattered notes. People trust it because someone always reviews the summary before it's shared.
              </p>
            </div>
            
            <div className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 flex items-center gap-4 mt-4 pt-4 border-t border-white/10 max-w-sm">
              <img className="size-12 rounded-full border-2 border-white/30 object-cover" src="/ai-meetings/div (2).png" alt="Head of Operations portrait" />
              <div>
                <h5 className="font-bold text-sm text-white">Head of Operations</h5>
                <p className="text-xs text-indigo-200">Growth-stage software company</p>
              </div>
            </div>
          </div>

          {/* Impact Stats Layout Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            {outcomes.map((outcome, idx) => (
              <div 
                key={idx}
                className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-5 py-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center gap-4 hover:bg-white/15 hover:scale-[1.02] hover:border-white/20 transition-all duration-300 group"
                style={{ transitionDelay: `${350 + idx * 75}ms` }}
              >
                <div className="size-11 bg-white/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {outcome.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-white">{outcome.title}</h4>
                  <p className="text-xs text-indigo-200 mt-0.5">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =======================================================================
          SECTION 3: FAQ
          ======================================================================= */}
      <section 
        ref={section3Ref}
        className="relative w-full py-20 sm:py-28 px-6 md:px-12 max-w-[868px] mx-auto flex flex-col items-center overflow-hidden"
      >
        <div className="w-full text-center flex flex-col items-center gap-2.5 mb-14">
          <span className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            FAQ
          </span>
          <h2 className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Questions about AI summaries
          </h2>
        </div>

        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300"
                style={{ transitionDelay: `${250 + index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none group"
                >
                  <span className="tracking-tight">{faq.question}</span>
                  <div className={`size-7 rounded-lg flex items-center justify-center border text-lg font-bold select-none shrink-0 transition-all duration-200 ${isOpen ? 'bg-indigo-600 border-indigo-600 text-white rotate-45' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                    +
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}