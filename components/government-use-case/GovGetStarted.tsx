import React from 'react';
import Link from 'next/link';

export const GovGetStarted = () => {
  return (
    <section className="bg-[#12142d] flex justify-center w-full overflow-hidden text-white">
      <div className="w-[1440px] h-[506.95px] relative flex-shrink-0 bg-[#12142d]">
          {/* Radial gradient background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.6)_0%,rgba(99,102,241,0)_60%)] pointer-events-none" />
          
          <div className="size-1.5 left-[662.42px] top-[94.89px] absolute bg-indigo-400 rounded-full"></div>
          
          <div className="w-24 h-5 left-[676.42px] top-[88px] absolute text-center justify-center text-indigo-400 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            GET STARTED
          </div>
          
          {/* Headline */}
          <div className="w-[800px] h-28 left-[320px] top-[129.79px] absolute flex flex-col items-center justify-center text-center text-white text-4xl font-extrabold font-['Inter'] leading-[61.05px]">
            <div>Give public-sector teams a governed<br/>way to coordinate.</div>
          </div>
          
          <div className="w-[662.67px] h-5 left-[388.83px] top-[262.89px] absolute text-center justify-center text-white/70 text-base font-normal font-inter leading-7">
            See a guided demo, talk to sales, or review security and records-aware controls first.
          </div>
          
          {/* CTA Buttons */}
          <div className="absolute left-[574.83px] top-[321.11px] flex gap-[21.7px]">
              <Link href="/get-a-demo" className="w-32 h-12 bg-blue-600 rounded-[999px] hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-sm font-semibold font-inter">Get a demo</span>
              </Link>
              
              <Link href="/contact-sales" className="w-36 h-12 rounded-[999px] border border-white/30 hover:bg-white/5 transition-colors flex items-center justify-center">
                  <span className="text-white text-sm font-semibold font-inter">Talk to sales</span>
              </Link>
          </div>
          
          {/* Security Link */}
          <div className="absolute left-[603.78px] top-[395.03px] w-60 h-6 flex justify-center items-center gap-1.5">
              <Link href="/security-compliance" className="text-indigo-400 text-sm font-semibold hover:underline font-inter">
                Explore security & compliance
              </Link>
              <span className="text-indigo-400 text-sm font-bold font-inter">→</span>
          </div>
      </div>
    </section>
  );
};
