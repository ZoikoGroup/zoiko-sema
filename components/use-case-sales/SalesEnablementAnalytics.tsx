import React from 'react';

export default function SalesEnablementAnalytics() {
  return (
    <div className="w-[1440px] h-[656px] relative bg-slate-900 overflow-hidden">
        <div className="w-[1200px] left-[120px] top-[72px] absolute inline-flex flex-row justify-start items-stretch gap-10">
            {/* Sales Enablement Library */}
            <div className="flex-[2] p-10 bg-white/70 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[6px] inline-flex flex-col justify-between items-start">
                <div className="self-stretch pb-10 flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-900 text-xl font-semibold font-sans leading-7">Sales Enablement Library</div>
                    </div>
                    <div className="self-stretch inline-flex justify-center items-start gap-6">
                        <div className="flex-1 p-6 bg-white/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex flex-col justify-start items-center gap-2">
                            <img src="/sales-and-engagement/sales-playbooks.svg" alt="Playbooks" className="w-7 h-6" />
                            <div className="self-stretch flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-zinc-900 text-xs font-bold font-sans leading-4">Playbooks</div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 bg-white/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex flex-col justify-start items-center gap-2">
                            <img src="/sales-and-engagement/sales-presentations.svg" alt="Presentations" className="w-6 h-5" />
                            <div className="self-stretch flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-zinc-900 text-xs font-bold font-sans leading-4">Presentations</div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 bg-white/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex flex-col justify-start items-center gap-2">
                            <img src="/sales-and-engagement/sales-case-studies.svg" alt="Case Studies" className="w-7 h-7" />
                            <div className="self-stretch flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-zinc-900 text-xs font-bold font-sans leading-4">Case Studies</div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 bg-white/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex flex-col justify-start items-center gap-2">
                            <img src="/sales-and-engagement/sales-battle-cards.svg" alt="Battle Cards" className="w-6 h-6" />
                            <div className="self-stretch flex flex-col justify-start items-center">
                                <div className="text-center justify-center text-zinc-900 text-xs font-bold font-sans leading-4">Battle Cards</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch pt-6 border-t border-neutral-300/20 inline-flex justify-between items-center">
                    <div className="flex justify-start items-start">
                        <div className="w-8 h-8 relative bg-indigo-700 rounded-full flex justify-center items-center">
                            <div className="w-8 h-8 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)]" />
                            <div className="text-center justify-center text-white text-[10px] font-normal font-sans leading-4">JD</div>
                        </div>
                        <div className="w-8 h-8 inline-flex flex-col justify-start items-start -ml-2">
                            <div className="w-8 h-8 relative bg-black rounded-full inline-flex justify-center items-center">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)]" />
                                <div className="text-center justify-center text-white text-[10px] font-normal font-sans leading-4">AL</div>
                            </div>
                        </div>
                        <div className="w-8 h-8 inline-flex flex-col justify-start items-start -ml-2">
                            <div className="w-8 h-8 relative bg-neutral-300 rounded-full inline-flex justify-center items-center">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)]" />
                                <div className="text-center justify-center text-white text-[10px] font-normal font-sans leading-4">+4</div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-zinc-700 text-xs font-bold font-sans leading-4">Approved version v4.2 • Updated 2h ago</div>
                    </div>
                </div>
            </div>

            {/* Real-time Analytics */}
            <div className="flex-1 p-10 relative bg-white rounded-2xl inline-flex flex-col justify-start items-start">
                <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl z-10 pointer-events-none" />
                <div className="self-stretch pb-6 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-900 text-xl font-semibold font-sans leading-7">Real-time Analytics</div>
                    </div>
                </div>
                <div className="self-stretch pb-6 flex flex-col justify-start items-start flex-1">
                    <div className="self-stretch h-full rounded-lg flex flex-col justify-center items-center overflow-hidden relative">
                        <div className="w-full relative overflow-hidden flex items-center justify-center bg-slate-900">
                            <img className="max-w-full h-auto object-cover" src="/sales-and-engagement/sales-analytics.png" alt="Analytics Dashboard" />
                        </div>
                    </div>
                </div>
                <div className="self-stretch py-4 bg-zinc-100 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 transition-colors">
                    <div className="text-center justify-center text-zinc-900 text-sm font-bold font-sans leading-5">View All Reports</div>
                </div>
            </div>
        </div>
    </div>
  );
}
