"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const checkmarkFeatures = [
  "Conversation summaries with clear source context",
  "Decision capture with approval visibility where available",
  "Smart replies that keep the person in control of final wording",
  "Ask Sema across accessible conversations, files, and meetings"
];

export default function MessagingAiAssistedSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes aiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ai-hidden  { opacity: 0; transform: translateY(28px); }
        .ai-visible { animation: aiFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <section className="w-full bg-violet-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12 ai-hidden ${
            sectionIn ? "ai-visible" : ""
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Value Propositions */}
            <div className="lg:col-span-5 flex flex-col w-full">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                AI-ASSISTED MESSAGING
              </span>
              
              <h2 className="text-[clamp(26px,4.2vw,36px)] font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-5">
                AI that clarifies communication without taking over the conversation.
              </h2>
              
              <p className="text-slate-600 text-base font-normal leading-relaxed mb-8 max-w-xl">
                Zoiko Sema AI is a governed communication assistant — it helps people 
                understand long conversations, capture decisions, identify action items, 
                and search context. It is never uncontrolled generative automation.
              </p>

              {/* Checkmark Feature List */}
              <ul className="flex flex-col gap-4 pl-1">
                {checkmarkFeatures.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-normal text-gray-700 leading-tight">
                    <span className="text-green-700 font-extrabold text-sm select-none pt-0.5" aria-hidden="true">
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: High Fidelity Interface Asset Presentation */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-[680px] lg:max-w-none rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[769/512] w-full rounded-xl overflow-hidden ">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/messaging/image 13.png"
                    alt="Zoiko Sema governed artificial intelligence interface illustration analytics mockup panel"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}