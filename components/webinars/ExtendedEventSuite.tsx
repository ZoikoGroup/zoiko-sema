"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function ExtendedEventSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <LiveWebinarExperience />
      <AIGovernance />
      <RolesSeparation />
      <FAQBlock />
    </div>
  );
}

/* ==========================================================================
   4. LIVE WEBINAR EXPERIENCE SECTION (Dark Gradient Hero Style)
   ========================================================================== */
function LiveWebinarExperience() {
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    { label: "Joining lobby", desc: "Device check, captions, recording notice, and support." },
    { label: "Q&A and polls", desc: "Moderated, keyboard-accessible, with answer status visible." },
    { label: "Recording indicator", desc: "Visible start/stop state and late-joiner notice." },
    { label: "Exit continuation", desc: "Feedback, replay timing, resources, and next steps." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              LIVE WEBINAR EXPERIENCE
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight max-w-[750px] leading-snug sm:leading-10">
            Accessible by default — captions, transcript view, and keyboard-operable Q&A.
          </h2>
        </div>

        <div className="w-full aspect-[1136/433] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="/webinars/Topic and audienc (12).png" 
            alt="Live streaming accessibility interface with live captions panel layout structural visualization" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 hover:shadow-xl"
            >
              <h3 className="text-white text-sm sm:text-base font-bold   mb-3">
                {card.label}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-normal   leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   5. RECORDING, TRANSCRIPTION AND AI GOVERNANCE SECTION
   ========================================================================== */
function AIGovernance() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              RECORDING, TRANSCRIPTION AND AI GOVERNANCE
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight">
            No event becomes on-demand automatically.
          </h2>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gray-950 shadow-sm">
          <img 
            className="w-full h-full object-cover" 
            src="/webinars/Topic and audienc (13).png" 
            alt="AI safe workflows validation and human reviewer redaction timeline console panel mock metrics" 
          />
        </div>

        <div className="w-full p-6 sm:p-8 bg-violet-50 dark:bg-gray-950 border border-violet-100 dark:border-slate-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
          <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base font-normal   leading-relaxed">
            AI may draft a title, summary, chapters, and Q&A themes from permitted sources. A named reviewer corrects, redacts, verifies claims, and approves before anything publishes — never autonomous posting, attendee profiling, or lead scoring from question content.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   6. HOST, SPEAKER, AND MODERATOR ROLES SECTION
   ========================================================================== */
function RolesSeparation() {
  const { ref, isVisible } = useScrollReveal();

  const roles = [
    { title: "Event producer", desc: "Owns platform, run-of-show, and contingency." },
    { title: "Host", desc: "Opens and closes the session, manages transitions." },
    { title: "Speaker", desc: "Approves bio, slides, claims, and recording permission." },
    { title: "Moderator", desc: "Moderates Q&A, abuse, and accessibility requests." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/40 dark:bg-gray-950/40 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              HOST, SPEAKER, AND MODERATOR ROLES
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold   tracking-tight">
            Separation of duties, before, during, and after the event.
          </h2>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/webinars/Topic and audienc (5).png" 
            alt="Roles configurations mapping canvas access hierarchy workflow layout structure" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-950 p-6 rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.03)] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold   mb-2 uppercase tracking-wide">
                {role.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   7. INTERACTIVE FAQ ACCORDION BLOCK SECTION
   ========================================================================== */
function FAQBlock() {
  const { ref, isVisible } = useScrollReveal();
  
  // Track open state for individual items
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What events are available?", a: "We offer structured onboarding cohorts, interactive administrator deep dives, core governance review sessions, and daily open floor technical engineering consulting hours." },
    { q: "Are recordings provided?", a: "Yes, fully timestamped indexing captures, compliance certified structural transcripts, and presentation resources are made safe and accessible following reviewer claim validation confirmation." },
    { q: "How is AI used in webinars?", a: "AI acts purely as an assistive initial summarizer and structural layout suggestions generator. No automated post actions, metadata pushes, profiling strategies, or ranking logic occurs without real physical verification checks." },
    { q: "Are captions available?", a: "Fully interactive human matching real-time accurate closed captions stream natively throughout all standard digital meetings, layout presentation intervals, and live group breakout labs." },
    { q: "Can customers get private training?", a: "Dedicated corporate groups, secure hybrid tenant architectures, specialized agency branches, and custom high-assurance enterprise pathways can acquire specialized localized learning courses." },
    { q: "What data do you collect at registration?", a: "We apply rigorous structural minimize data practices: capturing only basic identifier parameters, clear intent usage consents, and communication verification details." }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[756px] mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold   tracking-tight">
            Questions about Webinars & Events
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="group bg-white dark:bg-gray-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-200 text-sm sm:text-base font-bold   transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {faq.q}
                  </span>
                  
                  {/* Plus/Minus Interactive SVG Indicator */}
                  <div className="relative size-5 shrink-0 flex items-center justify-center">
                    <div className="absolute w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-sm" />
                    <div className={`absolute w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-sm transition-transform duration-300 ${
                      isOpen ? 'rotate-90 scale-y-0' : 'rotate-0 scale-y-100'
                    }`} />
                  </div>
                </button>

                {/* Animated Collapsible Expand Drawer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-900' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal   leading-relaxed bg-slate-50/50 dark:bg-gray-900/40">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}