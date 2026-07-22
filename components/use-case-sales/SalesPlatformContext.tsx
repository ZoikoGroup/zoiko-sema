import React from 'react';

export default function SalesPlatformContext() {
  return (
    <div className="w-[1440px] h-[470px] relative bg-white overflow-hidden">
        <div className="w-[1200px] max-w-[1280px] left-[120px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-16">
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-zinc-900 text-xl font-semibold font-sans leading-7">Intelligent Platform Context</div>
            </div>
            
            {/* Horizontal scroll container or absolute positioned cards */}
            <div className="self-stretch h-60 relative overflow-hidden">
                <div className="w-72 h-48 left-0 top-0 absolute bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300/20">
                    <img src="/sales-and-engagement/sales-empty-workspace.svg" alt="Empty Workspace" className="w-5 h-5 left-[43px] top-[43px] absolute" />
                    <div className="left-[41px] top-[89px] absolute justify-center text-zinc-900 text-base font-bold font-sans leading-6">Empty Workspace</div>
                    <div className="left-[41px] top-[121px] absolute justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Guided onboarding flow to connect<br/>your first account.</div>
                </div>
                
                <div className="h-48 min-w-72 pl-6 left-[280px] top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="w-72 flex-1 min-w-72 relative bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300/20">
                        <img src="/sales-and-engagement/sales-processing-summary.svg" alt="Processing Summary" className="w-4 h-5 left-[45px] top-[43px] absolute" />
                        <div className="left-[41px] top-[89px] absolute justify-center text-zinc-900 text-base font-bold font-sans leading-6">Processing Summary</div>
                        <div className="left-[41px] top-[121px] absolute justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Real-time status of AI generation and<br/>sentiment analysis.</div>
                    </div>
                </div>
                
                <div className="h-48 min-w-72 pl-6 left-[584px] top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="w-72 flex-1 min-w-72 relative bg-red-700/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-red-700/20">
                        <img src="/sales-and-engagement/sales-access-denied.svg" alt="Access Denied" className="w-5 h-5 left-[45px] top-[42px] absolute" />
                        <div className="left-[41px] top-[89px] absolute justify-center text-zinc-900 text-base font-bold font-sans leading-6">Access Denied</div>
                        <div className="left-[41px] top-[121px] absolute justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Permission levels prevent viewing<br/>restricted internal deal notes.</div>
                    </div>
                </div>
                
                <div className="h-48 min-w-72 pl-6 left-[888px] top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="w-72 flex-1 min-w-72 relative bg-zinc-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300/20">
                        <img src="/sales-and-engagement/sales-ai-disabled.svg" alt="AI Disabled" className="w-5 h-5 left-[43px] top-[43px] absolute" />
                        <div className="left-[41px] top-[89px] absolute justify-center text-zinc-900 text-base font-bold font-sans leading-6">AI Disabled</div>
                        <div className="left-[41px] top-[121px] absolute justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Compliance mode active. No AI<br/>summarization for this meeting.</div>
                    </div>
                </div>
                
                <div className="h-48 min-w-72 pl-6 left-[1192px] top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="w-72 flex-1 min-w-72 relative bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300/20">
                        <img src="/sales-and-engagement/sales-link-expired.svg" alt="Link Expired" className="w-5 h-5 left-[42.40px] top-[42px] absolute" />
                        <div className="left-[41px] top-[89px] absolute justify-center text-zinc-900 text-base font-bold font-sans leading-6">Link Expired</div>
                        <div className="left-[41px] top-[121px] absolute justify-center text-zinc-700 text-xs font-normal font-sans leading-4">External access to Deal Room has<br/>reached its time limit.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
