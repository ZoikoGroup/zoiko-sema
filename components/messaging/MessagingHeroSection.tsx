"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function MessagingHeroSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-hidden  { opacity: 0; transform: translateY(30px); }
        .hero-visible { animation: heroFadeUp .75s cubic-bezier(.22,1,.36,1) forwards; }
      `}</style>

      <section 
        className="w-full bg-[#14122B] pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden relative"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 15%, rgba(79, 70, 229, 0.4) 0%, rgba(79, 70, 229, 0) 60%)"
        }}
      >
        {/* Subtle Ambient Overlay Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none mix-blend-overlay bg-black" />

        <div ref={sectionRef} className={`mx-auto w-full max-w-6xl px-5 sm:px-8 text-center hero-hidden ${sectionIn ? 'hero-visible' : ''}`}>
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-6 border border-white/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-[11px] font-semibold tracking-widest text-white/90 uppercase font-sans">
              MESSAGING
            </span>
          </div>

          {/* Heading Title */}
          <h1 className="text-[clamp(32px,5.5vw,54px)] font-extrabold text-white leading-[1.12] tracking-tight max-w-3xl mx-auto mb-5">
            Messaging that turns conversations into action.
          </h1>

          {/* Subtext Description */}
          <p className="mx-auto max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/60 mb-10">
            Zoiko Sema brings direct messages, group chats, channels, files, AI summaries, search, and business governance into one structured communication platform.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto sm:max-w-none">
            <a href="/start-free">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold rounded-full text-base transition-all shadow-[0px_10px_30px_-8px_rgba(52,87,232,0.55)]">
              Start free
            </button></a>
            <a href="/get-a-demo">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 active:scale-[0.98] text-white font-semibold rounded-full text-base border border-white/30 transition-all">
              Get a demo
            </button></a>
          </div>

          {/* Fully Coded App Interface Container */}
          <div className="w-full max-w-5xl mx-auto bg-indigo-950/80 rounded-2xl border border-white/10 shadow-[0px_40px_120px_-30px_rgba(80,58,215,0.55)] overflow-hidden text-left backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[340px]">
              
              {/* Left Workspace Navigation Sidebar */}
              <div className="hidden md:block md:col-span-3 bg-slate-900/90 p-4 border-r border-white/5">
                <h3 className="text-white text-xs font-bold mb-4 tracking-wide">Zoiko Sema</h3>
                <nav className="space-y-1">
                  <div className="bg-white/10 text-white rounded-md px-3 py-1.5 text-xs font-semibold flex items-center gap-2 cursor-pointer">
                    <span>💬</span> Direct Messages
                  </div>
                  <div className="text-white/40 hover:text-white/70 px-3 py-1.5 text-xs font-normal flex items-center gap-2 cursor-pointer transition-colors">
                    <span>#</span> Channels
                  </div>
                  <div className="text-white/40 hover:text-white/70 px-3 py-1.5 text-xs font-normal flex items-center gap-2 cursor-pointer transition-colors">
                    <span>🗂️</span> Spaces
                  </div>
                  <div className="text-white/40 hover:text-white/70 px-3 py-1.5 text-xs font-normal flex items-center gap-2 cursor-pointer transition-colors">
                    <span>📅</span> Meetings
                  </div>
                  <div className="text-white/40 hover:text-white/70 px-3 py-1.5 text-xs font-normal flex items-center gap-2 cursor-pointer transition-colors">
                    <span>📁</span> Files
                  </div>
                </nav>
              </div>

              {/* Middle Active Chat Panel Feed */}
              <div className="col-span-1 md:col-span-6 flex flex-col justify-between p-4 bg-transparent min-h-[300px]">
                {/* Chat Top Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="text-white text-xs font-bold">Zoya</span>
                  <span className="text-white/70 text-xs tracking-wider cursor-pointer font-mono select-none">📞 🎥 ⋮</span>
                </div>

                {/* Simulated Feed Rows */}
                <div className="space-y-4 flex-1">
                  
                  {/* Message Inbound */}
                  <div className="flex items-start gap-2.5">
                    <img className="size-5 rounded-full object-cover mt-0.5 shrink-0 bg-slate-700" src="/messaging/photo-1580489944761-15a19d654956.png" alt="Avatar profile" />
                    <div className="bg-white/5 border border-white/5 text-white/90 text-xs py-2 px-3 rounded-[10px] max-w-[85%] leading-relaxed">
                      Hey — did the launch checklist get updated?
                    </div>
                  </div>

                  {/* Message Outbound */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="bg-blue-600 text-white text-xs py-2 px-3 rounded-[10px] max-w-[85%] leading-relaxed text-right">
                      Yes, just pushed the final version to the channel.
                    </div>
                  </div>

                  {/* Message Inbound Follow-up */}
                  <div className="flex items-start gap-2.5">
                    <img className="size-5 rounded-full object-cover mt-0.5 shrink-0 bg-slate-700" src="/messaging/photo-1580489944761-15a19d654956.png" alt="Avatar profile" />
                    <div className="bg-white/5 border border-white/5 text-white/90 text-xs py-2 px-3 rounded-[10px] max-w-[85%] leading-relaxed">
                      Perfect, sharing this with the team now.
                    </div>
                  </div>

                  {/* Shared attachment asset card mock */}
                  <div className="pl-7 w-full">
                    <div className="rounded-[10px] overflow-hidden border border-white/10 bg-indigo-900/50">
                      <img className="w-full h-16 object-cover opacity-80" src="/messaging/shared photo.png" alt="Launch board chart visualization preview" />
                    </div>
                  </div>

                </div>

                {/* Input Control Box */}
                <div className="mt-4">
                  <div className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-white/30 text-xs select-none">
                    Type a message…
                  </div>
                </div>
              </div>

              {/* Right Activity Sidebar Stream */}
              <div className="hidden md:block md:col-span-3 p-4 border-l border-white/5 bg-slate-900/20">
                <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-4">Activity</h4>
                
                <div className="space-y-4">
                  {/* Activity stream row 1 */}
                  <div className="flex items-start gap-2.5">
                    <img className="size-6 rounded-full shrink-0 bg-slate-700" src="/messaging/photo-1573497019940-1c28c88b4f3e.png" alt="Andy Avatar" />
                    <div className="text-xs leading-tight">
                      <span className="block text-white font-bold">Andy</span>
                      <span className="text-white/60 font-normal">mentioned you in <span className="text-indigo-300">#launch-planning</span></span>
                    </div>
                  </div>

                  {/* Activity stream row 2 */}
                  <div className="flex items-start gap-2.5">
                    <img className="size-6 rounded-full shrink-0 bg-slate-700" src="/messaging/photo-1560250097-0b93528c311a.png" alt="Ryan Avatar" />
                    <div className="text-xs leading-tight">
                      <span className="block text-white font-bold">Ryan</span>
                      <span className="text-white/60 font-normal">shared an AI summary</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}