import React from "react";

export default function StatusCards() {
  const cards = [
    {
      title: "Social Video Concept",
      status: "DRAFT",
      desc: "Planning & Storyboarding phase",
      borderColor: "border-gray-200",
      tagColor: "bg-gray-100 text-gray-600",
    },
    {
      title: "Global Banner Set",
      status: "NEEDS REVIEW",
      desc: "Pending Legal & Brand Dir. sign-off",
      borderColor: "border-blue-500",
      tagColor: "bg-blue-50 text-blue-600",
    },
    {
      title: "Influencer Brief v2",
      status: "APPROVED",
      desc: "Ready for execution team",
      borderColor: "border-blue-800",
      tagColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Ad Copy (French)",
      status: "BLOCKED",
      desc: "Regional compliance issue detected",
      borderColor: "border-red-500",
      tagColor: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section className="bg-[#F3F2FD] px-6 py-20 animate-fade-up-sc">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpSC { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up-sc { animation: fadeUpSC 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `,
        }}
      />

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-2xl border-t-4 ${card.borderColor} shadow-sm`}
          >
            <span
              className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${card.tagColor} mb-3`}
            >
              {card.status}
            </span>
            <h3 className="text-base font-bold text-[#0F172A] mb-1">
              {card.title}
            </h3>
            <p className="text-xs text-gray-500">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
