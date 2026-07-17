import React from 'react';
import Link from 'next/link';

export const GovAccessibility = () => {
  return (
    <section className="bg-violet-50 flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[1037.67px] relative flex-shrink-0 bg-violet-50">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-[280px] h-5 left-[580px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            GOVERNANCE AND ACCESSIBILITY
          </div>
          
          {/* Headline */}
          <div className="w-[640px] h-20 left-[400px] top-[120.80px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Identity, records, AI, retention, audit, and<br/>accessibility — explicit by design.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.98px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1136px] h-[757px] left-[0.10px] top-[-190.53px] absolute object-cover" src="/use-case-government/contractor-coordination.png" alt="Governance and accessibility features" />
              </div>
          </div>
          
          {/* Governance checklist white box */}
          <div className="w-[1136px] h-[300px] left-[152px] top-[601.55px] absolute bg-white rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.05)] border border-slate-200 px-[33px] py-[9px]">
              {/* Row 1: Identity */}
              <div className="w-full h-16 border-b border-slate-200 flex items-center justify-between">
                  <div className="text-slate-900 text-sm font-bold font-inter leading-7">Identity</div>
                  <div className="text-slate-600 text-sm font-normal font-inter leading-6 w-[560px]">
                    SSO, MFA, SCIM, and role-based access across offices and programs.
                  </div>
              </div>
              
              {/* Row 2: Records-aware workflows */}
              <div className="w-full h-16 border-b border-slate-200 flex items-center justify-between">
                  <div className="text-slate-900 text-base font-bold font-inter leading-7">Records-aware workflows</div>
                  <div className="text-slate-600 text-sm font-normal font-inter leading-6 w-[560px]">
                    Classification, schedule mapping, retention, legal hold, and disposition review.
                  </div>
              </div>
              
              {/* Row 3: AI governance */}
              <div className="w-full h-16 border-b border-slate-200 flex items-center justify-between">
                  <div className="text-slate-900 text-base font-bold font-inter leading-7">AI governance</div>
                  <div className="text-slate-600 text-sm font-normal font-inter leading-6 w-[560px]">
                    Draft-only until an authorized person reviews, corrects, classifies, and publishes.
                  </div>
              </div>
              
              {/* Row 4: Accessibility */}
              <div className="w-full h-16 flex items-center justify-between">
                  <div className="text-slate-900 text-sm font-bold font-inter leading-7">Accessibility</div>
                  <div className="text-slate-600 text-sm font-normal font-inter leading-6 w-[560px]">
                    WCAG 2.2 AA design target; Section 508 evidence provided after validation.
                  </div>
              </div>
          </div>
          
          {/* Trust Center bottom link */}
          <div className="absolute left-[648.10px] top-[925.11px] flex items-center gap-1.5">
              <Link href="/trust-center" className="text-blue-600 text-sm font-semibold hover:underline font-inter">
                Visit Trust Center
              </Link>
              <span className="text-blue-600 text-sm font-bold font-inter">→</span>
          </div>
      </div>
    </section>
  );
};
