"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER REVEAL HOOK ---
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
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ResourcesAndInquiryHub() {
  const [resourcesRef, resourcesVisible] = useScrollReveal();
  const [inquiryRef, inquiryVisible] = useScrollReveal();

  // Form states
  const [inquiryType, setInquiryType] = useState('');
  const [consent, setConsent] = useState(false);

  const resourceCards = [
    { title: 'About Sema', action: 'Read About Sema', icon:"/press/Frame (13).png" },
    { title: 'About Zoiko Tech', action: 'Read About Zoiko Tech', icon:"/press/Frame (14).png"  },
    { title: 'Product Overview', action: 'View Product', icon:"/press/Frame (15).png"  },
    { title: 'Customer Stories', action: 'Read Stories' , icon:"/press/Frame (16).png" },
    { title: 'Product Updates', action: 'View Updates' , icon:"/press/Frame (17).png" },
    { title: 'Trust Center', action: 'Visit Trust Center', icon:"/press/Frame (14).png"  },
    { title: 'System Status', action: 'View Status', icon:"/press/Frame (16).png"  },
    { title: 'Contact', action: 'Contact Zoiko Sema' , icon:"/press/Frame (18).png" },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* ========================================== */}
      {/* SECTION 1: RELATED RESOURCES               */}
      {/* ========================================== */}
      <section 
        ref={resourcesRef}
        className={`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 transform transition-all duration-1000 ease-out ${
          resourcesVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block font-sans">
            Related Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white">
            More context and proof
          </h2>
        </div>

        {/* Resources Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {resourceCards.map((card, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 p-5 rounded-xl shadow-[0px_1px_3px_rgba(16,22,60,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-400/40"
            >
              {/* Box Structural Icon Layout */}
              <div className="size-9 bg-slate-50 dark:bg-gray-950 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors mb-4">
                <img className="size-4"  src={card.icon} />
                  
              </div>

              {/* Title & Micro Interactive Chevron Link */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">
                  {card.title}
                </h4>
                <button className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 focus:outline-none">
                  <span className="group-hover:underline">{card.action}</span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: MEDIA INQUIRY FORM              */}
      {/* ========================================== */}
      <section 
        id="contact"
        ref={inquiryRef}
        className={`w-full bg-violet-50/40 dark:bg-gray-900/40 py-16 transition-colors duration-300 transform transition-all duration-1000 ease-out ${
          inquiryVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header block */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block font-sans">
              Media Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white">
              Contact the press team
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans leading-relaxed">
              Journalist, analyst, interview, speaking, asset, or partnership media requests — routed to communications.
            </p>
          </div>

          {/* Form wrapper element card */}
          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-slate-200/80 dark:border-gray-850 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            
            {/* Embedded Header Banner inside Card */}
            <div className="bg-[#151F4C] dark:bg-[#151F4C] px-6 py-5 text-white space-y-1">
              <h3 className="text-base font-bold font-['Plus_Jakarta_Sans']">
                Press inquiry
              </h3>
              <p className="text-xs text-blue-100 font-sans">
                Media requests go to our communications team for review and routing.
              </p>
            </div>

            {/* Core Form Element layout */}
            <form onSubmit={(e) => e.preventDefault()} className="p-6 sm:p-8 space-y-5 font-sans text-xs">
              
              {/* Row 1: Select dropdown field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-slate-700 dark:text-gray-300">Inquiry type</label>
                <div className="relative">
                  <select 
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
                  >
                    <option value="" disabled>Select an inquiry type…</option>
                    <option value="interview">Interview Request</option>
                    <option value="asset">Asset / Imagery Provisioning</option>
                    <option value="partnership">Media Partnership</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2: Grid for Names & Orgs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Full name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Publication / organization</label>
                  <input 
                    type="text" 
                    placeholder="Organization" 
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              {/* Row 3: Grid for Roles & Emails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Role / title</label>
                  <input 
                    type="text" 
                    placeholder="Title" 
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Business email</label>
                  <input 
                    type="email" 
                    placeholder="you@publication.com" 
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              {/* Row 4: Grid for Deadlines & Topics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Deadline (date & time)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fri 5pm ET" 
                    className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-slate-700 dark:text-gray-300">Topic category</label>
                  <div className="w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-300 font-medium">
                    AI governance
                  </div>
                </div>
              </div>

              {/* Row 5: Textarea Field block */}
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-slate-700 dark:text-gray-300">Topic / details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us what you're working on and what you need…" 
                  className="w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 text-sm text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              {/* Row 6: Functional Custom Checkbox Interaction wrapper */}
              <label className="flex items-start gap-3 cursor-pointer group py-2">
                <input 
                  type="checkbox" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 size-4 rounded text-blue-600 focus:ring-blue-500/40 border-slate-300 dark:border-gray-800 dark:bg-gray-900"
                />
                <span className="text-xs font-medium text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors leading-relaxed">
                  I consent to my details being processed per the Privacy Notice for the purpose of handling this media request.
                </span>
              </label>

              {/* Submit Button Action item wrapper */}
              <button 
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-[0px_8px_20px_-6px_rgba(37,99,235,0.5)] dark:shadow-none hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Submit inquiry &rarr;
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}