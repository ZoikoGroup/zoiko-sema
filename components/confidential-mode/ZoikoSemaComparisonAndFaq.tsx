"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER HOOK FOR SCROLL-DRIVEN REVEALS ---
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
        rootMargin: '0px 0px -20px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaComparisonAndFaq() {
  const [compRef, compVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  // FAQ Interactive State Management
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const comparisonRows = [
    {
      capability: 'Meeting content',
      standard: 'Available to normal meeting features based on settings.',
      confidential: 'End-to-end encrypted and unavailable to AI/recording features.',
      isAlert: false
    },
    {
      capability: 'AI summaries',
      standard: 'Available when enabled.',
      confidential: 'Unavailable while active.',
      isAlert: true
    },
    {
      capability: 'Recording',
      standard: 'Available when permitted.',
      confidential: 'Unavailable while active.',
      isAlert: true
    },
    {
      capability: 'Transcription',
      standard: 'Available when enabled.',
      confidential: 'Unavailable while active.',
      isAlert: true
    },
    {
      capability: 'Content search',
      standard: 'Available for indexed workspace content.',
      confidential: 'Protected content not searchable by content.',
      isAlert: true
    },
    {
      capability: 'Admin policy',
      standard: 'Workspace policy applies.',
      confidential: 'Workspace policy applies with stronger content boundary.',
      isAlert: false
    },
    {
      capability: 'Audit',
      standard: 'Standard audit events.',
      confidential: 'Audit-safe policy events without protected content.',
      isAlert: false
    }
  ];

  const faqItems = [
    { question: 'What is Zoiko Sema Confidential Mode?', answer: 'A secure, isolated communications environment offering complete end-to-end encryption for sensitive data protection and regulatory compliance workflows.' },
    { question: 'Can Zoiko read Confidential Mode content?', answer: 'No. Cryptographic keys remain exclusively in client possession, completely blackboxing zero-knowledge architecture vectors.' },
    { question: 'Are AI summaries available in Confidential Mode?', answer: 'To secure information vectors against indexing leaks, AI processing is completely bypassed during active Confidential Mode protocols.' },
    { question: 'Can admins enforce Confidential Mode?', answer: 'Yes, global parameters and workspace templates allow automatic conditional enforcement based on user roles or tags.' },
    { question: 'Can external guests join Confidential Mode meetings?', answer: 'External participants can connect securely provided they fulfill organizational cryptographic handshakes or verified identity routing.' },
    { question: 'How does Confidential Mode work with ZoikoTime?', answer: 'It isolates calendar indexing data logs, cleanly publishing availability schedules while holding event profiles strictly private.' }
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 selection:bg-indigo-500/20">

      {/* ========================================== */}
      {/* SECTION 1: STANDARD VS CONFIDENTIAL MODE   */}
      {/* ========================================== */}
      <section 
        ref={compRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 border-b border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header Reveal Container */}
          <div className={`text-center space-y-4 transition-all duration-1000 transform ${compVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              Standard Sema mode vs. Confidential Mode.
            </h2>
          </div>

          {/* Graphic Panel Wrapper Reveal */}
          <div className={`w-full aspect-[1136/320] bg-slate-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-gray-850 shadow-sm transition-all duration-1000 delay-150 transform ${compVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} group`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
              src="/confidentail/image 77.png" 
              alt="Sema technical landscape comparative visualization" 
            />
          </div>

          {/* Matrix Table Block Reveal */}
          <div className={`w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-gray-800 shadow-[0px_8px_24px_rgba(18,19,43,0.02)] transition-all duration-1000 delay-300 transform ${compVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm font-sans">
                <thead>
                  <tr className="bg-violet-50/70 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800">
                    <th className="p-4 sm:p-5 font-extrabold tracking-wider text-xs uppercase text-slate-900 dark:text-gray-200 w-1/4">Capability</th>
                    <th className="p-4 sm:p-5 font-extrabold tracking-wider text-xs uppercase text-slate-900 dark:text-gray-200 w-1/3">Standard Sema mode</th>
                    <th className="p-4 sm:p-5 font-extrabold tracking-wider text-xs uppercase text-slate-900 dark:text-gray-200">Confidential Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-gray-850">
                  {comparisonRows.map((row, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-slate-50/50 dark:hover:bg-gray-900/40 transition-colors duration-150 group"
                    >
                      <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {row.capability}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-gray-400 leading-relaxed">
                        {row.standard}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold leading-relaxed">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-500 font-extrabold shrink-0">✓</span>
                          <span className={row.isAlert ? "text-red-600 dark:text-red-400" : "text-slate-900 dark:text-gray-200"}>
                            {row.confidential}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: FAQ ACCORDION                   */}
      {/* ========================================== */}
      <section 
        ref={faqRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-violet-50/40 dark:bg-gray-900/30 border-b border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Header Reveal Container */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              Questions about Confidential Mode
            </h2>
          </div>

          {/* Accordion List Reveal Container */}
          <div className={`space-y-3 transition-all duration-1000 delay-200 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-250 shadow-[0px_2px_8px_rgba(18,19,43,0.01)] hover:border-slate-300 dark:hover:border-gray-700"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 flex items-center justify-between text-left gap-4 font-sans focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900 dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                      {item.question}
                    </span>
                    <div className="relative size-5 shrink-0 flex items-center justify-center">
                      <span className="absolute w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className={`absolute w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 ${isOpen ? 'scale-y-0 rotate-90' : 'scale-y-100'}`} />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-100 dark:border-gray-850' : 'max-h-0'}`}
                  >
                    <div className="p-5 text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: GET STARTED / FINAL CTA          */}
      {/* ========================================== */}
      <section 
        ref={ctaRef}
        className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-slate-950 to-gray-900 relative overflow-hidden"
      >
        {/* Glow Radial Design Element Ambient */}
        <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-500/20 to-transparent to-60% pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          
          {/* Badge Reveal */}
          <div className={`flex items-center justify-center gap-2 transition-all duration-1000 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="size-1.5 bg-indigo-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-sans">
              Get Started
            </span>
          </div>

          {/* Heading Reveal */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans leading-tight transition-all duration-1000 delay-100 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
Use Confidential Mode when privacy
cannot be optional.          </h2>

          {/* Subtitle Paragraph Reveal */}
          <p className={`text-sm sm:text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto font-sans leading-relaxed transition-all duration-1000 delay-200 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
Start with secure communication today, or speak with sales about workspace policies,
regulated workflows, and enterprise deployment.          </p>

          {/* Actions & Buttons Row Reveal */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 delay-300 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <a href="/start-free">
            <button className="w-full sm:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-sm font-semibold rounded-full font-sans transition-all shadow-md shadow-blue-950/20">
              Start free
            </button></a>
            <a href="/contact-sales">
            <button className="w-full sm:w-auto px-8 h-12 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-95 text-white text-sm font-semibold rounded-full font-sans transition-all">
              Contact sales
            </button></a>
          </div>

          {/* Text Arrow Trigger Link Reveal */}
          <div className={`pt-2 transition-all duration-1000 delay-400 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a 
              href="/trust-center" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span>View Trust Center</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a 
              href="/security-center" 
              className=" px-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span>Request security review</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}