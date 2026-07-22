import React from 'react';

export default function SalesDealRooms() {
  return (
    <div className="w-[1440px] h-[632px] relative bg-violet-50 overflow-hidden">
        <div className="w-[1200px] pt-16 left-[120px] top-[72px] absolute inline-flex justify-start items-center gap-16">
            <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-900 text-3xl font-semibold font-sans leading-10">Shared Deal Rooms</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-zinc-700 text-base font-normal font-sans leading-6">A single source of truth for you and your prospects.<br/>No more hunting through email threads.</div>
                </div>
                <div className="self-stretch pt-4 flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div className="inline-flex flex-col justify-start items-start">
                            <img src="/sales-and-engagement/sales-expiration-controls.svg" alt="Expiration Controls" className="w-5 h-5" />
                        </div>
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-6">Automated Expiration Controls</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div className="inline-flex flex-col justify-start items-start">
                            <img src="/sales-and-engagement/sales-participant-verification.svg" alt="Participant Verification" className="w-5 h-4" />
                        </div>
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-6">Participant Verification</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div className="inline-flex flex-col justify-start items-start">
                            <img src="/sales-and-engagement/sales-audit-history.svg" alt="Audit History" className="w-4 h-4" />
                        </div>
                        <div className="inline-flex flex-col justify-start items-start">
                            <div className="justify-center text-zinc-900 text-base font-bold font-sans leading-6">Full Audit History</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[757.33px] inline-flex flex-col justify-start items-start">
                <img className="self-stretch w-full h-96 relative rounded-xl shadow-2xl border border-neutral-300/10 object-cover" src="/sales-and-engagement/sales-deal-rooms.png" alt="Shared Deal Rooms Interface" />
            </div>
        </div>
    </div>
  );
}
