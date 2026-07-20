"use client";

import React from "react";

export default function PolicySetup() {
  const parameters = [
    {
      title: "Workspace & policy setup",
      desc: "Effective date, jurisdiction, scope, approval, notice, and version.",
    },
    {
      title: "Declared purpose",
      desc: "Every captured signal states its purpose and source before activation.",
    },
    {
      title: "Worker visibility",
      desc: "What is captured is visible to the worker it belongs to, including offline state.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpPolicy {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-policy {
              animation: fadeUpPolicy 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-policy">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase mb-3">
          CONFIGURE AND CAPTURE
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          Policy first. Then only the minimum necessary data enters the record.
        </h2>

        {/* Hero Visual Viewport Area */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-[#f8f9fd] mb-10 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 4.png"
            alt="Policy baseline setup console workflow overview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3-Column Parameter Cards System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {parameters.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebedf5] rounded-2xl p-6 shadow-[0px_4px_20px_0px_#12132B0D] hover:shadow-md transition-all duration-300 min-h-[130px]"
            >
              <h4 className="font-extrabold text-[#0f1124] text-[14px] mb-2">
                {item.title}
              </h4>
              <p className="text-[#6b719c] text-[12.5px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
