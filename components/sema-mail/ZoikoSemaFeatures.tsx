"use client"
import React, { useEffect, useRef, useState } from "react";

// Simple custom hook to handle the scroll float-up triggers
function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
}

export default function ZoikoSemaFeatures() {
  const [secRef1, visible1] = useElementOnScreen({ threshold: 0.1 });
  const [secRef2, visible2] = useElementOnScreen({ threshold: 0.1 });
  const [secRef3, visible3] = useElementOnScreen({ threshold: 0.1 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* ----------------- SECTION 1: MAIL + CALENDAR + MEETINGS ----------------- */}
      <section 
        ref={secRef1}
        className="w-full py-16 sm:py-20 md:py-24 border-b border-slate-200/60 dark:border-gray-900 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Left Column */}
          <div className={`lg:col-span-7 space-y-6 transform transition-all duration-1000 ease-out ${visible1 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
            <div className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
                MAIL + CALENDAR + MEETINGS
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Email, meetings, and scheduling should work together.
            </h2>
            
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Sema Mail connects the thread, the calendar event, the meeting, and the follow-up so teams can move faster without losing context.
            </p>
            
           
          </div>

          {/* Graphical Right Column */}
          <div className={`lg:col-span-5 relative h-[320px] sm:h-[360px] md:h-[400px] w-full flex items-center justify-center transform transition-all duration-1000 ease-out delay-200 ${visible1 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
            <div className="absolute rounded-[30px] overflow-hidden shadow-2xl w-full max-w-[440px] aspect-[545/330]   transition-transform duration-500 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <img 
                className="w-full h-full object-cover select-none" 
                src="/sema-mail/image 50.png" 
                alt="Sema platform dashboard screenshot interface visualization illustration" 
              />
            </div>
          </div>
          
        </div>

        {/* Floating Component Metrics Cards Grid */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "Mail thread", tagBg: "bg-violet-100 dark:bg-violet-950/60 text-indigo-700 dark:text-indigo-300", title: "Acme renewal follow-up", text: "Subject, sender, attachment, related meeting, and an AI prompt ready for review." },
            { tag: "Calendar event", tagBg: "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300", title: "Renewal review meeting", text: "Agenda, guests, join button, and availability context, right beside the thread." },
            { tag: "Meeting follow-up", tagBg: "bg-orange-100 dark:bg-amber-950/60 text-yellow-700 dark:text-amber-300", title: "Owner: Maya Chen — due Friday", text: "Decision, owner, due date, drafted reply, and reminder, generated from the meeting." }
          ].map((card, idx) => (
            <div 
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`bg-white dark:bg-gray-900 rounded-[20px] p-6 border border-slate-200 dark:border-gray-800 shadow-[0px_8px_24px_rgba(18,19,43,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out transform ${visible1 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${card.tagBg}`}>
                {card.tag}
              </span>
              <h4 className="text-slate-900 dark:text-white text-base font-bold mb-2">{card.title}</h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
           <div className="pt-2">
              <a href="#" className="inline-flex items-center absolute left-[560px] gap-0 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide leading-6 group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
                <span>Explore Calendar</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </a>
            </div>
        </div>
        
      </section>

      {/* ----------------- SECTION 2: USE CASES ----------------- */}
      <section 
        ref={secRef2}
        className="w-full bg-violet-950 dark:bg-gray-900 py-16 sm:py-20 md:py-24 transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
          
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000 ease-out ${visible2 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-white" />
              <span className="text-white text-xs font-bold tracking-widest uppercase font-sans leading-5">
                USE CASES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built for how different teams actually work.
            </h2>
            <p className="text-violet-200/80 dark:text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              From client-facing roles to regulated back offices, Sema Mail adapts to the way each team already communicates.
            </p>
          </div>

          {/* Cards Layout Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Sales & Customer Success", desc: "Keep client threads, meetings, follow-ups, files, and renewal actions connected.", action: "Explore Client Follow-Up" },
              { label: "Professional Services", desc: "Turn client email into actions, owner assignments, meeting agendas, and searchable records.", action: "Explore Professional Workflows" },
              { label: "Operations Teams", desc: "Coordinate updates, approvals, vendor messages, and internal decisions without context loss.", action: "Explore Team Collaboration" },
              { label: "Executive Office", desc: "Keep sensitive correspondence connected to calendar, meetings, and follow-ups with appropriate controls.", action: "Explore Confidential Mode" },
              { label: "Regulated Workflows", desc: "Support retention, admin controls, auditability, and policy-governed AI assistance.", action: "Contact Sales" },
              { label: "Freelancers & Consultants", desc: "Manage client email, calls, meetings, notes, and project follow-ups in one workspace.", action: "Start Free" }
            ].map((useCase, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`bg-white dark:bg-gray-950 rounded-[20px] p-6 border border-transparent dark:border-gray-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between transform ${visible2 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                <div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide block mb-3">
                    {useCase.label}
                  </span>
                  <p className="text-slate-900 dark:text-gray-300 text-base leading-relaxed mb-6">
                    {useCase.desc}
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide group transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
                    <span>{useCase.action}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 3: FAQ ----------------- */}
      <section 
        ref={secRef3}
        className="w-full bg-violet-50 dark:bg-gray-950 py-16 sm:py-20 md:py-24 transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${visible3 ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase font-sans leading-5">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Questions about Sema Mail
            </h2>
          </div>

          {/* Collapsible Accordion Blocks */}
          <div className="space-y-4">
            {[
              { q: "What is Zoiko Sema Mail?", a: "Zoiko Sema Mail is an enterprise-grade smart communications hub that seamlessly anchors email threads, active meetings, and live calendar logs into one singular contextual view." },
              { q: "Does Zoiko Sema include email?", a: "Yes, it fully integrates standard workspace protocols alongside custom corporate inbox synchronization features." },
              { q: "How does Sema Mail connect to meetings and calendar?", a: "It continuously runs native database checks between incoming mail parameters, upcoming schedule hooks, and meeting identifiers automatically." },
              { q: "Does Sema Mail use AI?", a: "Yes, built-in context-aware models automatically parse message contexts to surface automated operational suggestions, drafts, and meeting reviews securely." },
              { q: "Is Sema Mail suitable for business use?", a: "Absolutely. Built with robust admin authorization mechanics, granular access controls, and policy compliance features perfect for secure scaling." },
              { q: "Does Sema Mail connect with ZoikoTime?", a: "Yes, native cross-app connectivity connects client updates directly with timeline management components effortlessly." }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-[0px_1px_2px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-500 ease-out transform ${visible3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 dark:hover:bg-gray-850 transition-colors"
                  >
                    <span className="text-slate-900 dark:text-white text-base font-bold leading-6">
                      {faq.q}
                    </span>
                    <div className="relative size-5 flex-shrink-0 flex items-center justify-center">
                      <span className="absolute w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300" />
                      <span className={`absolute w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-5 text-slate-600 dark:text-gray-400 text-sm leading-relaxed border-t border-slate-100 dark:border-gray-800/60 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}