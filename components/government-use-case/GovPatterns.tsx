import React from 'react';
import Link from 'next/link';

export const GovPatterns = () => {
  return (
    <section className="bg-violet-50 flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[1031.20px] relative flex-shrink-0 bg-violet-50">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-48 h-5 left-[628.10px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            GOVERNMENT PATTERNS
          </div>
          
          {/* Headline */}
          <div className="w-[700px] h-20 left-[370px] top-[120.79px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Recognizable across offices, agencies, and<br/>jurisdictions.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.98px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1136px] h-[757px] left-[0.10px] top-[-101.19px] absolute object-cover" src="/use-case-government/authorization-boundaries.png" alt="Government officials meeting briefing group" />
              </div>
          </div>
          
          {/* Grid 1: Cross-office coordination */}
          <div className="w-96 h-40 left-[152px] top-[601.54px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Cross-office coordination</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Program hub, decisions, tasks, handoffs,<br/>and status in one place.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">Explore coordination</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
          
          {/* Grid 2: Interagency handoffs */}
          <div className="w-96 h-40 left-[537.33px] top-[601.54px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Interagency handoffs</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Validated destination, minimum context,<br/>acceptance, and audit.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">See handoffs</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
          
          {/* Grid 3: Leadership briefings */}
          <div className="w-96 h-40 left-[922.66px] top-[601.54px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Leadership briefings</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Source-linked drafts, human review,<br/>classification, and freshness.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">Explore reviewed summaries</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
          
          {/* Grid 4: Public meeting follow-through */}
          <div className="w-96 h-40 left-[152px] top-[782.37px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Public meeting follow-through</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Agenda, captions, recap, decisions, and<br/>record treatment.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">Explore Sema Meet</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
          
          {/* Grid 5: Contractor collaboration */}
          <div className="w-96 h-40 left-[537.33px] top-[782.37px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Contractor collaboration</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Sponsor, domain, purpose, scope, expiry,<br/>and offboarding.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">See external controls</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
          
          {/* Grid 6: Records & evidence preparation */}
          <div className="w-96 h-40 left-[922.66px] top-[782.37px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 p-[27px] flex flex-col justify-between">
              <div>
                  <div className="text-indigo-600 text-xs font-bold font-inter uppercase leading-5 tracking-wide mb-1">Records & evidence preparation</div>
                  <div className="text-slate-900 text-sm font-normal font-inter leading-5">
                    Record state, schedule, redaction, export,<br/>and audit.
                  </div>
              </div>
              <div className="flex items-center gap-1.5">
                  <Link href="/solutions" className="text-blue-600 text-sm font-semibold hover:underline font-inter">Review records workflow</Link>
                  <span className="text-blue-600 text-sm font-bold font-inter">→</span>
              </div>
          </div>
      </div>
    </section>
  );
};
