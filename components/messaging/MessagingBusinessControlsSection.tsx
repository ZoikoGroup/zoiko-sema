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

const controlsFeatures = [
  {
    icon: "🔐",
    title: "Authentication",
    description: "Secure sign-in, SSO on eligible plans, MFA enforcement, and account recovery flows.",
  },
  {
    icon: "⚙️",
    title: "Access control",
    description: "Restrict conversations, files, channels, spaces, and exports by role and policy.",
  },
  {
    icon: "🏷️",
    title: "External badges",
    description: "Clearly label guests and external participants in conversations and member lists.",
  },
  {
    icon: "⚡",
    title: "Audit logs",
    description: "Track message deletion, role changes, exports, moderation actions, and AI usage.",
  },
  {
    icon: "🗂️",
    title: "Data protection",
    description: "Protect files, message history, AI outputs, and attachments with plan-appropriate controls.",
  },
  {
    icon: "🕵️",
    title: "Privacy controls",
    description: "Configure read receipts, presence visibility, retention, AI access, and sharing policies.",
  }
];

export default function BusinessControlsSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes bcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bc-hidden  { opacity: 0; transform: translateY(28px); }
        .bc-visible { animation: bcFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <section className="w-full bg-slate-900 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 bc-hidden ${
            sectionIn ? "bc-visible" : ""
          }`}
        >
          
          {/* Header Title Information */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="block text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3.5">
              BUSINESS CONTROLS
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold text-white leading-[1.25] tracking-tight">
              Secure business messaging without unnecessary complexity.
            </h2>
          </div>

          {/* Cards Flex Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {controlsFeatures.map((item, index) => (
              <div
                key={index}
                className="w-full p-6 sm:p-7 bg-slate-900 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-start align-top"
              >
                {/* Icon Wrapper Frame */}
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/15 rounded-xl flex items-center justify-center transition-colors duration-200 mb-5 select-none text-lg">
                  {item.icon}
                </div>

                {/* Card Title Content */}
                <h3 className="text-sm sm:text-base font-bold text-white mb-2.5">
                  {item.title}
                </h3>

                {/* Card Body Paragraph Description */}
                <p className="text-slate-400 text-xs sm:text-[13px] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}