import React from 'react';
import Link from 'next/link';

export const CTABannerSection = () => {
  return (
    <section className="bg-blue-600 py-[71.2px] pb-[103.2px] flex flex-col items-center justify-center text-center w-full">
      <h2 className="text-white text-3xl font-extrabold font-plus-jakarta leading-10 mb-[14.8px]">
        Public service moves quickly.<br/>
        Governance and evidence move with it.
      </h2>
      
      <p className="text-white/90 text-base font-normal font-inter leading-[20px] mb-[26.8px] max-w-2xl">
        Request a government demo, or get a scoped procurement package for your agency.
      </p>
      
      <div className="flex flex-row items-center gap-[18px]">
        <Link href="/get-a-demo" className="w-64 h-12 bg-white hover:bg-slate-50 text-blue-600 text-base font-bold font-inter rounded-full flex items-center justify-center transition-colors">
          Request a government demo
        </Link>
        
        <Link href="/contact-sales" className="w-48 h-12 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base font-bold font-inter rounded-full flex items-center justify-center transition-colors">
          Get a custom quote
        </Link>
      </div>
    </section>
  );
};
