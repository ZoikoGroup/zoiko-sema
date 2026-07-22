import React from 'react';

export default function SalesWhyChoose() {
  return (
    <div className="w-[1440px] h-[715px] relative bg-white overflow-hidden">
        <div className="w-[1200px] max-w-[1280px] left-[120px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-16">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-zinc-900 text-3xl font-semibold font-sans leading-10">Why Sales Teams Choose Zoiko Sema</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-zinc-700 text-base font-normal font-sans leading-6">Transition from messy syncs to structured revenue collaboration.</div>
                </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start gap-10">
                <img className="flex-1 h-96 relative rounded-xl border-l-4 border-r border-t border-b border-red-700/50 backdrop-blur-[6px] object-cover" src="/sales-and-engagement/sales-messy-syncs.png" alt="Messy Syncs Diagram" />
                <div className="flex-1 h-96 relative rounded-xl border-l-4 border-indigo-700 overflow-hidden">
                    <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-xl shadow-[0px_8px_10px_-6px_rgba(74,71,210,0.10)] shadow-[0px_20px_25px_-5px_rgba(74,71,210,0.10)] z-10 pointer-events-none" />
                    <img className="absolute inset-0 w-full h-full object-cover" src="/sales-and-engagement/sales-connected-revenue.png" alt="Connected Revenue Collaboration" />
                </div>
            </div>
        </div>
    </div>
  );
}
