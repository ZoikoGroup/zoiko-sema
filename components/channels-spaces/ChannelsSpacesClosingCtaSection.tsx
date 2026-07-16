"use client";

import { useRouter } from "next/navigation";
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

export default function ChannelsSpacesClosingCtaSection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.15);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes csccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cscc-hidden  { opacity: 0; transform: translateY(28px); }
        .cscc-visible { animation: csccFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .cscc-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .cscc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.18);
        }
        .cscc-btn-outline {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .cscc-btn-outline:hover {
          background-color: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .cscc-hidden, .cscc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cscc-btn-primary:hover, .cscc-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-white pb-16 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div
            ref={cardRef}
            className={`cscc-hidden ${cardIn ? "cscc-visible" : ""} rounded-[28px] bg-[#151030] px-6 sm:px-12 py-14 sm:py-16 text-center`}
          >
            <h2 className="text-[clamp(22px,3.6vw,32px)] font-bold leading-[1.2] tracking-tight text-white mb-4 max-w-[620px] mx-auto">
              Ready to bring structure to every conversation?
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/55 max-w-[540px] mx-auto mb-9">
              Start with organized channels and spaces, then scale into governed collaboration for teams, businesses, and enterprise workspaces.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={()=>router.push('/start-free')} className="cscc-btn-primary cursor-pointer rounded-full bg-white text-[#0F0F2A] text-[14px] font-semibold px-6 py-3">
                Start free
              </button>
              <button onClick={()=>router.push('/get-a-demo')} className="cscc-btn-outline cursor-pointer rounded-full border border-white/20 text-white text-[14px] font-semibold px-6 py-3">
                Get a demo
              </button>
              <button onClick={()=>router.push('/zoikotime-integration')} className="cscc-btn-outline cursor-pointer rounded-full border border-white/20 text-white text-[14px] font-semibold px-6 py-3">
                Explore ZoikoTime integration
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}