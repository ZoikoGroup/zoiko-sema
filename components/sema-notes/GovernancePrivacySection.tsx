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

const governanceCards = [
  {
    icon: "🗄️",
    title: "Retention settings",
    desc: "Workspace-level note retention configured by admins.",
  },
  {
    icon: "👥",
    title: "Role-based visibility",
    desc: "Note visibility scoped by role and workspace membership.",
  },
  {
    icon: "🌐",
    title: "External sharing controls",
    desc: "Restrict or approve sharing outside the workspace.",
  },
  {
    icon: "⬇️",
    title: "Export controls",
    desc: "Govern who can export notes and in what format.",
  },
  {
    icon: "📋",
    title: "Audit logs",
    desc: "Policy-sensitive actions are logged for review.",
  },
  {
    icon: "🤖",
    title: "AI assistance controls",
    desc: "Admins govern AI-assisted note-taking availability.",
  },
];

export default function GovernancePrivacySection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes govFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gov-hidden  { opacity: 0; transform: translateY(20px); }
        .gov-visible { animation: govFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <section className="w-full bg-slate-900 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 gov-hidden ${
            sectionIn ? "gov-visible" : ""
          }`}
        >
          {/* Header Framework Block */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="block text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3 select-none">
              GOVERNANCE AND PRIVACY
            </span>
            <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold text-white tracking-tight leading-snug">
              Built for IT, legal, and enterprise review.
            </h2>
          </div>

          {/* Grid Configuration Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {governanceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl p-6 border border-white/10 flex flex-col items-start transition-all duration-300 hover:bg-white/[0.02] hover:border-white/20 group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Visual Icon Badge Container */}
                <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center text-lg mb-5 transition-transform duration-300 group-hover:scale-105">
                  <span className="select-none">{card.icon}</span>
                </div>

                {/* Typography Labels */}
                <h3 className="text-white text-xs font-bold font-sans mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Confidential Notice Banner Element */}
          <div className="w-full bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-7 mb-14 transition-colors duration-300 hover:bg-white/[0.07]">
            <div className="flex items-center gap-2 mb-3 text-white text-sm font-bold font-sans tracking-tight">
              <span>🔒</span>
              <h4>Confidential Mode behavior</h4>
            </div>
            <p className="text-slate-400 text-xs font-normal leading-relaxed font-sans max-w-5xl">
              If Confidential Mode disables AI notes or recording, Sema notifies users before the meeting begins, 
              and never implies it can summarize content it isn't permitted to access. Manual, user-created notes 
              may still follow workspace policy — this is distinct from automatic AI capture.
            </p>
          </div>

          {/* Dynamic Action Panel Framework */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-white/0 hover:bg-white/5 hover:border-white/50 transition-all duration-150"
            >
              Explore notes governance
            </a>
            <a
              href="/trust-center"
              className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-white/0 hover:bg-white/5 hover:border-white/50 transition-all duration-150"
            >
              Visit Trust Center
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
