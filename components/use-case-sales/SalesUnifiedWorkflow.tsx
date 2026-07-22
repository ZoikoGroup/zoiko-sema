import React from 'react';

export default function SalesUnifiedWorkflow() {
  return (
    <div className="w-[1440px] h-[820px] relative bg-slate-900 overflow-hidden">
        <div className="w-[1200px] max-w-[1280px] left-[120px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-16">
            <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-white text-3xl font-semibold font-sans leading-10">The Unified Sales Workflow</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-10">
                <img className="w-[1024px] h-[572px] max-w-[1024px] relative rounded-xl object-cover" src="/sales-and-engagement/sales-unified-workflow.png" alt="The Unified Sales Workflow diagram" />
            </div>
        </div>
    </div>
  );
}
