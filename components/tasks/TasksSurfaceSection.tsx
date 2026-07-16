"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Shield, ToggleLeft, Sparkles, UserCheck, Search, FileText, 
  MessageSquare, Video, FileCode, Hash, Calendar, GitBranch, Settings, Info, ArrowRight
} from 'lucide-react';

// Scroll reveal anchor hook for continuous transition animations
function useScrollReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.05 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

export default function ZoikoFeatureDeepDive() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();

  return (
    <div className="w-full bg-slate-900 text-white font-sans overflow-x-hidden selection:bg-blue-600/30">
      
      {/* SECTION 1: AI — Human Review */}
      <section 
        ref={s1.ref} 
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 transition-all duration-1000 transform ${s1.revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          
          {/* Header Block */}
          <div className="text-center space-y-4 max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 rounded-full border border-blue-600/30">
              <span className="text-blue-600 text-xs font-bold   uppercase tracking-wide leading-4">
                AI — Human Review
              </span>
            </div>
            <h2 className="text-white text-4xl font-bold   leading-10 tracking-tight">
              AI supports. A person decides.
            </h2>
            <p className="text-slate-400 text-base font-normal   leading-6 max-w-[520px] mx-auto">
              When enabled, AI may suggest action items from meetings, messages, or documents. Authorized users review, edit, reject, assign, and share — according to policy.
            </p>
          </div>

          {/* Stepper Timeline Matrix */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">
            {[
              { title: "Enable", desc: "Authorized workspace policy enables action extraction for eligible sources.", icon:"/tasks-todo/Icon (3).png" },
              { title: "Suggest", desc: "Draft title, owner candidate, due-date candidate, and source evidence — clearly labeled.", icon: "/tasks-todo/Icon (4).png" },
              { title: "Review", desc: "Authorized person accepts, edits, rejects, removes, or defers each suggestion.", icon: "/tasks-todo/Icon (5).png" },
              { title: "Assign", desc: "Reviewer chooses owner and destination, then confirms notification and visibility.", icon: "/tasks-todo/Icon (6).png" },
              { title: "Audit", desc: "Record who reviewed, what changed, what was assigned, and where.", icon: "/tasks-todo/Icon (7).png" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 group">
                <div className="relative flex flex-col items-center w-full">
                  <div className="p-3 bg-blue-600/20 rounded-full border border-indigo-400/20 transition-transform duration-300 group-hover:scale-110">
                    <img className="w-5 h-5 text-indigo-400" src={step.icon} />
                  </div>
                  {idx < 4 && (
                    <div className="hidden lg:block absolute left-[calc(50%+24px)] top-5 w-[calc(100%-48px)] h-[1px] bg-white/10" />
                  )}
                </div>
                <h4 className="text-xs font-bold   leading-5 text-white">{step.title}</h4>
                <p className="text-xs font-normal   leading-5 text-slate-400 px-2">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Guardrail Policy Alert Box */}
          <div className="w-full p-6 bg-blue-600/10 rounded-2xl border border-blue-600/30 flex items-start gap-4 hover:bg-blue-600/15 transition-all">
            <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <h5 className="text-white text-sm font-bold  leading-5">
                AI suggestions never become performance evaluation or disciplinary evidence.
              </h5>
              <p className="text-slate-400 text-xs font-normal  leading-5">
                Owner and due-date suggestions show their source basis. Rejected suggestions are not repeated. Users can always distinguish human-created tasks from AI-suggested ones.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Governance & Trust */}
      <section 
        ref={s2.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 transition-all duration-1000 transform ${s2.revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Details Stack */}
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="px-4 py-1 bg-blue-600/10 rounded-full">
              <span className="text-blue-600 text-xs font-bold   uppercase tracking-wide leading-4">
                Governance & Trust
              </span>
            </div>
            <h2 className="text-slate-900 text-4xl font-bold   leading-10 tracking-tight">
              A governed model for every role and relationship.
            </h2>
            <p className="text-gray-500 text-base font-normal   leading-7">
              Task authority and source authority are checked separately. A task role never automatically grants source access. Guests, external collaborators, and compliance reviewers operate within explicit, bounded boundaries.
            </p>

            {/* Micro Pill Badges Layer */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: "Role-based permissions", icon: UserCheck },
                { label: "Guest scope control", icon: Shield },
                { label: "Retention & legal hold", icon: FileText },
                { label: "Audit visibility", icon: Search }
              ].map((pill, idx) => (
                <div key={idx} className="px-4 py-2 bg-white rounded-full border border-violet-100 shadow-sm flex items-center gap-2 hover:border-blue-500 transition-all duration-200 cursor-default">
                  <pill.icon className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-slate-900 text-xs font-semibold   leading-5">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Graphical Interface Mockup */}
          <div className="w-full h-96 rounded-3xl overflow-hidden bg-slate-900 shadow-xl relative group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/tasks-todo/image 163.png" 
              alt="Governance Workspace Control Architecture Screen Panel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* SECTION 3: Connected Work */}
      <section 
        ref={s3.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 transition-all duration-1000 transform ${s3.revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16">
          
          {/* Header Typography Wrapper */}
          <div className="text-center space-y-4 max-w-2xl">
            <div className="inline-block px-4 py-1 bg-blue-600/10 rounded-full">
              <span className="text-blue-600 text-xs font-bold   uppercase tracking-wide leading-4">
                Connected Work
              </span>
            </div>
            <h2 className="text-slate-900 text-4xl font-bold   leading-10 tracking-tight">
              Tasks connect to every surface of Zoiko Sema.
            </h2>
            <p className="text-gray-500 text-base font-normal   leading-6 max-w-[520px] mx-auto">
              Work created from communication stays attached to it. Tasks integrate with messaging, meetings, documents, calendar, workflows, and the admin layer.
            </p>
          </div>

          {/* Surface Features Dynamic Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Messaging", desc: "Create tasks from threads; post completion back.", icon: "/tasks-todo/Icon (8).png", color: "bg-blue-600/10 text-blue-600" },
              { name: "Sema Meet", desc: "Tasks from meeting recaps, transcript moments, and decisions.", icon: "/tasks-todo/Icon (9).png", color: "bg-violet-600/10 text-violet-600" },
              { name: "AI Summaries", desc: "Review suggested actions and create owned tasks with evidence.", icon:"/tasks-todo/Icon (10).png", color: "bg-amber-600/10 text-amber-600" },
              { name: "Documents", desc: "Create tasks from document sections or file context.", icon: "/tasks-todo/Icon (11).png", color: "bg-teal-600/10 text-teal-600" },
              { name: "Channels", desc: "Tasks belong to workspace, space, channel, or project.", icon: "/tasks-todo/Icon (12).png", color: "bg-indigo-500/10 text-indigo-500" },
              { name: "Calendar", desc: "Due dates, reminders, and task calendar alongside events.", icon: "/tasks-todo/Icon (13).png", color: "bg-pink-500/10 text-pink-500" },
              { name: "Workflows", desc: "Rules create, route, approve, or close tasks with audit.", icon: "/tasks-todo/Icon (14).png", color: "bg-emerald-600/10 text-emerald-600" },
              { name: "Admin Console", desc: "Defaults, roles, guest policy, integrations, AI, and audit.", icon: "/tasks-todo/Icon (15).png", color: "bg-sky-600/10 text-sky-600" }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-50 rounded-2xl border border-violet-100 flex flex-col justify-start items-start gap-3 group hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`p-2.5 rounded-2xl ${card.color} flex items-center justify-center`}>
                  <img className="w-5 h-5" src={card.icon} />
                </div>
                <h4 className="text-slate-900 text-sm font-bold   leading-5">{card.name}</h4>
                <p className="text-gray-500 text-xs font-normal   leading-5 max-w-[240px]">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Workspace Twin Mockup Graphic Showcase */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="w-full h-96 rounded-3xl overflow-hidden bg-slate-900 shadow-md relative group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" src="/tasks-todo/image 161.png" alt="Platform Interactive Communication Log Module" />
            </div>
            <div className="w-full h-96 rounded-3xl overflow-hidden bg-slate-900 shadow-md relative group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" src="/tasks-todo/image 162.png" alt="Platform Metrics Overview Calendar Timeline Node" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}