import React from 'react';

export default function SalesGovernance() {
  return (
    <div className="w-[1440px] h-[555px] relative bg-violet-50 overflow-hidden">
        <div className="w-[1200px] left-[120px] top-[72px] absolute inline-flex justify-center items-center gap-16">
            <div className="flex-1 pt-0.5 inline-flex flex-col justify-start items-start gap-6">
                <div className="px-4 py-1 bg-black rounded-sm inline-flex justify-start items-start">
                    <div className="justify-center text-white text-[10px] font-normal font-sans leading-4 tracking-wide">ADMIN CONSOLE</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-sans leading-10">Enterprise-Grade Governance</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6">Control your data, your recordings, and your AI. Designed for highly regulated<br/>sales environments.</div>
                </div>
                <div className="self-stretch pt-10 flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="px-2 pt-2.5 pb-2 bg-indigo-700/10 rounded-lg inline-flex flex-col justify-start items-start">
                            <img src="/sales-and-engagement/sales-identity-rbac.svg" alt="Identity and RBAC" className="w-5 h-5" />
                        </div>
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-6">Identity &amp; RBAC</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-700 text-sm font-normal font-sans leading-5">Granular permissions for reps, managers, and external partners.</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="px-2 pt-2.5 pb-2 bg-indigo-700/10 rounded-lg inline-flex flex-col justify-start items-start">
                            <img src="/sales-and-engagement/sales-recording-policy.svg" alt="Recording Policy" className="w-4 h-5" />
                        </div>
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-6">Recording Policy</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-700 text-sm font-normal font-sans leading-5">Automated regional compliance and selective recording triggers.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 p-16 relative bg-slate-900 rounded-2xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start z-10">
                    <div className="self-stretch justify-center text-indigo-700 text-xs font-bold font-sans uppercase leading-4 tracking-wide">SECURITY DASHBOARD PREVIEW</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 z-10">
                    <div className="self-stretch h-10 px-6 bg-white/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-between items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-slate-500 text-xs font-normal font-sans leading-4">SOC2 Compliance Status:</div>
                        </div>
                        <div className="inline-flex flex-col justify-start items-end">
                            <div className="justify-center text-green-400 text-base font-bold font-sans leading-6">ACTIVE</div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 px-6 bg-white/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-between items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-slate-500 text-xs font-normal font-sans leading-4">Recording Consent Rate:</div>
                        </div>
                        <div className="inline-flex flex-col justify-start items-end">
                            <div className="justify-center text-slate-500 text-base font-bold font-sans leading-6">98.4%</div>
                        </div>
                    </div>
                    <div className="self-stretch h-10 px-6 bg-white/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-between items-center">
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-slate-500 text-xs font-normal font-sans leading-4">Data Residency:</div>
                        </div>
                        <div className="inline-flex flex-col justify-start items-end">
                            <div className="justify-center text-slate-500 text-base font-bold font-sans leading-6">EU-West (Frankfurt)</div>
                        </div>
                    </div>
                    <div className="self-stretch pt-10 border-t border-white/10 flex flex-col justify-start items-start mt-2">
                        <button className="self-stretch py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex justify-center items-center hover:bg-white/5 transition-colors">
                            <div className="text-center justify-center text-slate-500 text-xs font-bold font-sans leading-4">Generate Compliance Audit</div>
                        </button>
                    </div>
                </div>
                {/* Shield Icon Background */}
                <div className="p-10 left-[408px] top-0 absolute opacity-10 flex flex-col justify-start items-start pointer-events-none">
                    <img src="/sales-and-engagement/sales-shield.svg" alt="Shield Background" className="w-20 h-24" />
                </div>
            </div>
        </div>
    </div>
  );
}
