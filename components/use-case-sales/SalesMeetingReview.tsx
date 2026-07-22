import React from 'react';

export default function SalesMeetingReview() {
  return (
    <div className="w-[1440px] h-[521px] relative bg-white overflow-hidden">
        <div className="w-[1200px] max-w-[1280px] left-[120px] top-[72px] absolute inline-flex justify-center items-center gap-16">
            <img className="flex-1 h-80 relative rounded-xl shadow-2xl border border-neutral-300/30 object-cover" src="/sales-and-engagement/sales-meeting-review.png" alt="Meeting Review Interface" />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="justify-center text-indigo-700 text-base font-bold font-sans leading-6">GOVERNED INTELLIGENCE</div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-sans leading-10">Meeting Review: Verified by Humans,<br/>Powered by AI</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6">Never worry about AI hallucinations in customer communication. Every<br/>transcript and summary undergoes a structured review flow before being<br/>committed to your CRM.</div>
                </div>
                <div className="self-stretch inline-flex justify-center items-start gap-6">
                    <div className="flex-1 px-6 pt-6 pb-10 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-start">
                        <img src="/sales-and-engagement/sales-human-review.svg" alt="Human Review" className="w-5 h-5 mb-2 object-contain" />
                        <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-sm font-bold font-sans leading-5">Human Review Badge</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Certify accuracy before internal sharing.</div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-start">
                        <img src="/sales-and-engagement/sales-source-linked.svg" alt="Source-Linked" className="w-5 h-2.5 mb-2" />
                        <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-900 text-sm font-bold font-sans leading-5">Source-Linked</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="self-stretch justify-center text-zinc-700 text-xs font-normal font-sans leading-4">Jump directly to the video timestamp<br/>from the summary.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
