import React from 'react';

export default function SalesHeroSection() {
  return (
    <div className="w-[1440px] h-[640px] relative bg-violet-50 overflow-hidden">
        <div className="w-[1200px] max-w-[1280px] left-[120px] top-[72px] absolute inline-flex justify-center items-center gap-16">
            <div className="flex-1 pt-px inline-flex flex-col justify-start items-start gap-6">
                <div className="px-4 py-1 bg-indigo-700/10 rounded-full inline-flex justify-start items-start">
                    <div className="justify-center text-indigo-700 text-xs font-semibold font-sans leading-4 tracking-wide">REVENUE GOVERNANCE PLATFORM</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-black text-5xl font-bold font-sans leading-[60px]">One governed workspace<br/>for every customer<br/>conversation.</div>
                </div>
                <div className="w-full max-w-[576px] flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6">Show how Zoiko Sema connects account discussions, meetings, reviewed AI<br/>summaries, customer commitments, internal tasks, and deal collaboration<br/>inside one secure workspace.</div>
                </div>
                <div className="self-stretch pt-10 flex flex-col justify-start items-start gap-6">
                    <button className="px-16 py-6 relative bg-indigo-700 rounded-lg flex flex-col justify-center items-center hover:bg-indigo-800 transition-colors">
                        <div className="w-72 h-16 left-0 top-0 absolute bg-white/0 rounded-lg shadow-[0px_4px_6px_-4px_rgba(74,71,210,0.20)] shadow-[0px_10px_15px_-3px_rgba(74,71,210,0.20)]" />
                        <div className="text-center justify-center text-white text-base font-normal font-sans leading-6">Enable My Sales Team</div>
                    </button>
                </div>
            </div>
            <div className="flex-1 relative inline-flex flex-col justify-start items-start">
                <div className="w-[600px] h-80 left-[-16px] top-[-16px] absolute opacity-50 bg-gradient-to-br from-indigo-700/20 to-indigo-700/0 blur-[32px]" />
                <img className="self-stretch w-full h-80 relative rounded-xl shadow-2xl border border-neutral-300/20 object-cover" src="/sales-and-engagement/sales-hero.png" alt="Dashboard Preview" />
            </div>
        </div>
    </div>
  );
}
