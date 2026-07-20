"use client";

import React from "react";

export default function WorkspaceIsolation() {
  const cards = [
    {
      label: "Default",
      desc: "Configured hierarchy, owners, manager coverage, filters, and actions.",
      color: "#4cc3be",
    },
    {
      label: "Empty",
      desc: '"No teams yet. Create a team or import your structure to begin."',
      color: "#9ea3ce",
    },
    {
      label: "Circular hierarchy",
      desc: "Block save; show cycle path and recovery without losing draft.",
      color: "#cf5858",
    },
    {
      label: "Sync conflict",
      desc: "Show field/source conflict, current vs. proposed value, and resolution.",
      color: "#784ce6",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpWorkspace {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-workspace {
              animation: fadeUpWorkspace 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-workspace">
        {/* Top Header Block */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase">
              14 – STATES & EDGE CASES
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight max-w-2xl">
            Every failure has a defined, honest recovery path.
          </h2>
        </div>

        {/* Content Section - 2 Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Left Grid: 2x2 Feature Matrix Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fd] border border-[#eef1f8] rounded-xl p-6 flex flex-col justify-start min-h-[135px]"
              >
                <div className="flex items-center gap-2.5 font-bold text-[#0f1124] text-[13px] mb-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: card.color }}
                  />
                  {card.label}
                </div>
                <p className="text-[#51567d] text-[12px] leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Layout Viewport: Hero Visual Asset Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm flex aspect-[1.58] lg:aspect-auto">
              <img
                src="/teams-and-groups/image 289.png"
                alt="Operational mapping and planning environment session"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
