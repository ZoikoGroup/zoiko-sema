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

const integrationFeatures = [
  {
    icon: "📝",
    title: "Approved notes only",
    desc: "Only admin-approved notes and outcomes connect to ZoikoTime.",
  },
  {
    icon: "👤",
    title: "Owners & follow-ups",
    desc: "Ownership and follow-up data map into work context where policy allows.",
  },
  {
    icon: "🔐",
    title: "Policy-governed",
    desc: "Integration is permissioned and configurable by authorized admins only.",
  },
];

export default function ZoikoTimeBridgeSection() {
  const { ref: sectionRef, inView: isVisible } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes bridgeFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bridge-hidden { opacity: 0; transform: translateY(24px); }
        .bridge-visible { animation: bridgeFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Core Wrapper Container Canvas with Radial Gradient Mesh */}
      <section 
        className="w-full relative bg-[#4A4592] text-white py-16 sm:py-20 md:py-24 overflow-hidden bg-[radial-gradient(circle_at_15%_0%,rgba(129,140,248,0.2),transparent_60%)]"
      >
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 text-center flex flex-col items-center bridge-hidden ${
            isVisible ? "bridge-visible" : ""
          }`}
        >
          {/* Section Subtitle Anchor Text */}
          <span className="block text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3 select-none">
            ZOIKOTIME BRIDGE
          </span>

          {/* Section Main Title Heading */}
          <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold text-white tracking-tight leading-snug mb-4 max-w-3xl">
            Optional ecosystem value—never a dependency.
          </h2>

          {/* Core Body Descriptive Content Block */}
          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed max-w-4xl mb-12 md:mb-16">
            Sema Notes works independently inside Zoiko Sema. For governed organizations, 
            approved notes, owners, follow-ups, and meeting outcomes can connect to ZoikoTime 
            work context under policy — workforce data is never exposed to ordinary users.
          </p>

          {/* Dynamic 3-Column Glassmorphism Feature Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
            {integrationFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col items-start text-left backdrop-blur-[3px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Visual Icon Compartment Container */}
                <div className="size-10 bg-white/15 rounded-xl flex items-center justify-center text-lg mb-6 transition-transform duration-300 group-hover:scale-105 select-none">
                  {feat.icon}
                </div>

                {/* Card Context Data Details */}
                <h3 className="text-white text-sm font-bold font-sans mb-2 tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-[13px] font-normal leading-relaxed font-sans">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer Policy Microcopy */}
          <p className="text-white/60 text-xs font-normal leading-relaxed max-w-2xl font-sans mb-8">
            ZoikoTime integration is permissioned, policy-governed, and configurable by authorized administrators.
          </p>

          {/* Interactive Button Configuration Panel */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/sema-zoikotime"
              className="w-full sm:w-auto px-6 h-12 rounded-full text-slate-900 bg-white text-sm font-semibold inline-flex items-center justify-center hover:bg-slate-100 transition-colors duration-150 shadow-sm"
            >
              Explore Sema + ZoikoTime
            </a>
            <a
              href="/get-a-demo"
              className="w-full sm:w-auto px-6 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-transparent hover:bg-white/5 hover:border-white/50 transition-all duration-150"
            >
              Request integration demo
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
