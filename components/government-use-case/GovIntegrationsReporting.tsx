import React from 'react';
import Link from 'next/link';

export const GovIntegrationsReporting = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[707.11px] relative flex-shrink-0 bg-white">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-[300px] h-5 left-[570px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            INTEGRATIONS AND REPORTING
          </div>
          
          {/* Headline */}
          <div className="w-[600px] h-20 left-[420px] top-[120.80px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Identity, records systems, documents,<br/>calendars, and security tools.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.99px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1155px] h-[770px] left-[6.10px] top-[-223.21px] absolute object-cover" src="/use-case-government/outcome-strip.png" alt="Integrations paperwork folders stack" />
              </div>
          </div>
          
          {/* See reporting bottom link */}
          <div className="absolute left-[662.10px] top-[594.55px] flex items-center gap-1.5">
              <Link href="/insights-analytics" className="text-blue-600 text-sm font-semibold hover:underline font-inter">
                See reporting
              </Link>
              <span className="text-blue-600 text-sm font-bold font-inter">→</span>
          </div>
      </div>
    </section>
  );
};
