"use client";

import React from "react";

export default function ChooseNextStep() {
  const pathways = [
    {
      title: "Continue the guided demo",
      desc: "Explore configure-through-prove at your own pace.",
      actionText: "Start guided demo",
      link: "#guided-demo",
    },
    {
      title: "Start free",
      desc: "Create a workspace and evaluate with your own team.",
      actionText: "Start free",
      link: "#start-free",
    },
    {
      title: "Request a tailored demo",
      desc: "Talk to a specialist about enterprise deployment.",
      actionText: "Request a demo",
      link: "#request-demo",
    },
  ];

  return (
    <section className="w-full bg-[#F3F2FD] text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpNextStep {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-next-step {
              animation: fadeUpNextStep 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-next-step">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#2b56f5] uppercase mb-3">
          CHOOSE YOUR NEXT STEP
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-3xl leading-tight mb-12">
          Self-guided exploration, free workspace, or a tailored enterprise
          demo.
        </h2>

        {/* Visual Showcase Viewport Container */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-white mb-10 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 11.png"
            alt="Product sandbox self-guided interface presentation overview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3-Column Action Gate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebedf5] rounded-2xl p-6 shadow-[0px_4px_20px_0px_#12132B0D] hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <h4 className="font-extrabold text-[#0f1124] text-[14px] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#6b719c] text-[12.5px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              <button className="text-[12px] font-bold text-[#2b56f5] hover:underline mt-6 text-left flex items-center gap-1 w-fit">
                {item.actionText} <span className="text-[10px]">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
