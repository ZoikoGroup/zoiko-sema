"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

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
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

// --- REUSABLE FAQ ACCORDION COMPONENT ---
function FAQItem({ question }: { question: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans focus:outline-none"
      >
        <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
          {question}
        </span>
        <div className="relative w-4 h-4 flex-shrink-0 flex items-center justify-center">
          <div className="absolute w-3.5 h-0.5 bg-blue-600 rounded-sm"></div>
          <div
            className={`absolute w-0.5 h-3.5 bg-blue-600 rounded-sm transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : ""}`}
          ></div>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-slate-100 dark:border-gray-800" : "max-h-0"}`}
      >
        <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans bg-slate-50/50 dark:bg-gray-900/50">
          Zoiko Sema processes meeting audio dynamically to generate clear
          action summaries, structured key decisions, and automated downstream
          context depending entirely on your configuration parameters.
        </div>
      </div>
    </div>
  );
}

export default function ZoikoSemaPlatformTour() {
  const [sec1Ref, sec1Visible] = useScrollReveal();
  const [sec2Ref, sec2Visible] = useScrollReveal();
  const [sec3Ref, sec3Visible] = useScrollReveal();
  const [sec4Ref, sec4Visible] = useScrollReveal();
  const [sec5Ref, sec5Visible] = useScrollReveal();
  const router = useRouter();

  const useCasePaths = [
    {
      title: "Leadership meetings",
      desc: "Decisions, risks, executive follow-ups, and accountable owners.",
      link: "Explore Business",
    },
    {
      title: "Client calls",
      desc: "Client recap, commitments, objections, and follow-up email draft.",
      link: "Explore Client Calls",
    },
    {
      title: "Project standups",
      desc: "Blockers, tasks, dependencies, and due dates.",
      link: "Explore Teams",
    },
    {
      title: "Sales handoffs",
      desc: "Customer context, open questions, and next action.",
      link: "Explore Follow-Ups",
    },
    {
      title: "Remote teams",
      desc: "Time-zone-aware outcomes and searchable team memory.",
      link: "Explore Remote Work",
    },
    {
      title: "Regulated teams",
      desc: "Policy-aware summaries, retention, and controlled sharing.",
      link: "Contact Sales",
    },
  ];

  const comparisonData = [
    {
      matrix: "Fast recap",
      old: "Transcript-heavy records that users do not read.",
      sema: "Short recap focused on what changed and what matters.",
    },
    {
      matrix: "Clear decisions",
      old: "Lost or ambiguous decisions across chat, calls, and email.",
      sema: "Decisions captured with owners and source context.",
    },
    {
      matrix: "Follow-up discipline",
      old: "Manual follow-up drafting after every meeting.",
      sema: "Reviewable follow-up drafts and next-step suggestions.",
    },
    {
      matrix: "Searchable memory",
      old: "Summaries trapped in separate tools.",
      sema: "Meeting outcomes searchable across workspace context.",
    },
    {
      matrix: "Governance",
      old: "Unclear sharing, retention, and AI boundaries.",
      sema: "Policy-governed summaries with admin controls and audit support.",
    },
  ];

  const faqs = [
    "What are AI Meeting Summaries in Zoiko Sema?",
    "Does Zoiko Sema capture action items?",
    "Can Zoiko Sema draft follow-up messages?",
    "Are Zoiko Sema meeting summaries searchable?",
    "How does Confidential Mode affect AI summaries?",
    "Can admins control AI Meeting Summaries?",
    "How does this connect with ZoikoTime?",
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden selection:bg-blue-500/20">
      {/* ========================================== */}
      {/* SECTION 1: MOBILE AND DESKTOP EXPERIENCES  */}
      {/* ========================================== */}
      <section
        ref={sec1Ref}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Animated Float up Header Sentences */}
          <div
            className={`text-center space-y-3 transition-all duration-1000 transform ${sec1Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">
                Mobile and Desktop
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Summaries that keep up, wherever you review them.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
              Full summary panel and transcript on desktop; summary-ready cards,
              quick share, and action review on mobile.
            </p>
          </div>

          {/* Floating Visual Mockup Blocks Container */}
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-200 transform ${sec1Visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            {/* Desktop Mockup Simulation */}
            <div className="w-full max-w-[460px] aspect-[460/320] bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 dark:border-gray-800 overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-6 bg-violet-50 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 flex items-center gap-1.5 px-3">
                <span className="size-2 bg-slate-300 dark:bg-gray-600 rounded-sm" />
                <span className="size-2 bg-slate-300 dark:bg-gray-600 rounded-sm" />
                <span className="size-2 bg-slate-300 dark:bg-gray-600 rounded-sm" />
              </div>
              <div className="w-full h-[calc(100%-24px)] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/ai-meetings/image 57.png"
                  alt="Desktop application workspace rendering full data layouts"
                />
              </div>
            </div>

            {/* Mobile Device Simulation */}
            <div className="w-[160px] h-[140px] bg-white dark:bg-gray-900 rounded-3xl shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 dark:border-gray-800 p-2.5 flex flex-col items-center justify-between group transition-transform duration-500 hover:scale-105 md:self-end">
              <div className="w-10 h-1 bg-slate-200 dark:bg-gray-700 rounded-full" />
              <div className="w-full h-[105px] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/ai-meetings/image 58.png"
                  alt="Mobile optimized micro metrics display layout"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: USE CASE PATHS                  */}
      {/* ========================================== */}
      <section
        ref={sec2Ref}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-violet-50/50 dark:bg-gray-900/30 border-y border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Animated Header Sentences */}
          <div
            className={`text-center space-y-3 transition-all duration-1000 transform ${sec2Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">
                Use Case Paths
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Summary emphasis changes with business context — never one generic
              template.
            </h2>
          </div>

          {/* Large Hero Graphic Element */}
          <div
            className={`w-full max-w-[1136px] mx-auto aspect-[1136/384] bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden transition-all duration-1000 delay-150 transform ${sec2Visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} hover:scale-[1.005]`}
          >
            <img
              className="w-full h-full object-cover"
              src="/ai-meetings/image 59.png"
              alt="Comprehensive strategic view schematic illustrating workspace focus metrics"
            />
          </div>

          {/* Responsive Layout Grid of Contextual Action Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform ${sec2Visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            {useCasePaths.map((path, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 p-6 rounded-2xl shadow-[0px_4px_16px_rgba(18,19,43,0.02)] flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-400/20"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-sans">
                    {path.title}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-sans">
                    {path.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-200">
                  <span>{path.link}</span>
                  <span className="font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: WHY IT'S DIFFERENT              */}
      {/* ========================================== */}
      <section
        ref={sec3Ref}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      >
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Animated Header Sentences */}
          <div
            className={`text-center space-y-3 transition-all duration-1000 transform ${sec3Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">
                Why It's Different
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Separate meeting tools stop at transcription. Sema goes further.
            </h2>
          </div>

          {/* Hero Banner Feature */}
          <div
            className={`w-full max-w-[1136px] mx-auto aspect-[1136/320] rounded-2xl overflow-hidden shadow-sm transition-all duration-1000 delay-150 transform ${sec3Visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} hover:scale-[1.002]`}
          >
            <img
              className="w-full h-full object-cover"
              src="/ai-meetings/image 60.png"
              alt="Side by side structural framework analysis previewing functional architecture"
            />
          </div>

          {/* Fully Responsive Comparison Structured Grid Data View */}
          <div
            className={`w-full max-w-[1136px] mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-1000 delay-300 transform ${sec3Visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            {/* Desktop Structured View Header */}
            <div className="hidden md:grid grid-cols-12 bg-violet-50 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider font-sans">
              <div className="col-span-3 p-4">Buyer need</div>
              <div className="col-span-4 p-4 border-l border-slate-200 dark:border-gray-700">
                Separate meeting tools often create
              </div>
              <div className="col-span-5 p-4 border-l border-slate-200 dark:border-gray-700 bg-violet-100/50 dark:bg-slate-800/80">
                Zoiko Sema AI Meeting Summaries create
              </div>
            </div>

            {/* Matrix Mapping Rows */}
            <div className="divide-y divide-slate-200 dark:divide-gray-850">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 text-sm font-sans transition-colors duration-200 hover:bg-slate-50/50 dark:hover:bg-gray-850/40"
                >
                  {/* Category Target Box */}
                  <div className="md:col-span-3 p-4 font-bold text-slate-900 dark:text-white bg-slate-50/60 dark:bg-gray-900/40 md:bg-transparent md:dark:bg-transparent flex items-center">
                    {row.matrix}
                  </div>
                  {/* Old Approach Description Text */}
                  <div className="md:col-span-4 p-4 text-slate-600 dark:text-gray-400 md:border-l border-slate-200 dark:border-gray-700 flex items-center">
                    <span className="md:hidden font-semibold block text-xs uppercase tracking-tight text-slate-400 mb-1">
                      Legacy Tools:{" "}
                    </span>
                    {row.old}
                  </div>
                  {/* Sema System Approach Text Block */}
                  <div className="md:col-span-5 p-4 font-semibold text-slate-900 dark:text-white md:border-l border-slate-200 dark:border-gray-700 bg-emerald-50/20 dark:bg-emerald-950/10 flex items-center gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base flex-shrink-0">
                      ✓
                    </span>
                    <div>
                      <span className="md:hidden font-semibold block text-xs uppercase tracking-tight text-emerald-600 mb-1">
                        Zoiko Sema:{" "}
                      </span>
                      {row.sema}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: FAQ ACCORDION                   */}
      {/* ========================================== */}
      <section
        ref={sec4Ref}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-violet-50/50 dark:bg-gray-900/30 border-y border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Animated Header Sentences */}
          <div
            className={`text-center space-y-3 transition-all duration-1000 transform ${sec4Visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Questions about AI Meeting Summaries
            </h2>
          </div>

          {/* Render Stacked List Elements with Individual States */}
          <div
            className={`space-y-3 transition-all duration-1000 delay-200 transform ${sec4Visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            {faqs.map((faqText, index) => (
              <FAQItem key={index} question={faqText} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: GET STARTED CONTEXT ACTUATOR    */}
      {/* ========================================== */}
      <section
        ref={sec5Ref}
        className="w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 py-12 px-4 sm:px-6 lg:px-8 relative text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(at_20%_15%,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />

        <div
          className={`max-w-4xl mx-auto text-center space-y-8 relative z-10 transition-all duration-1000 transform ${sec5Visible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-sans">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl sm:text-3xl font-extrabold tracking-tight font-sans leading-tight">
              Make every meeting easier to remember,
              <br className="hidden sm:inline" /> share, and act on.
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
              Start free, invite your team, or speak with sales about governed
              AI meeting summaries for your organization.
            </p>
          </div>

          {/* Action Call buttons assembly layout container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => router.push("/start-free")}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start free
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="w-full sm:w-auto px-8 py-3.5 cursor-pointer border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold text-sm rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact sales
            </button>
          </div>

          {/* Core Navigation Downstream Node */}
          <div onClick={()=>router.push('/sema-meet')}
          className="pt-6 flex items-center justify-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group">
            <span>Explore Sema Meet</span>
            <span className="font-bold group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
