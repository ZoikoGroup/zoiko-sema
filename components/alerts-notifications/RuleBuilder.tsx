import React from "react";
import { Eye, CheckSquare, History } from "lucide-react";

export default function RuleBuilder() {
  const cards = [
    {
      title: "Preview",
      desc: "Estimated affected population, sample events, and false-positive risk before activation.",
      icon: <Eye className="w-5 h-5 text-[#8C84FF]" />,
    },
    {
      title: "Approval",
      desc: "Draft, peer review, policy owner approval, and staged rollout.",
      icon: <CheckSquare className="w-5 h-5 text-[#8C84FF]" />,
    },
    {
      title: "Versioning",
      desc: "Material changes create a new version and preserve prior executions.",
      icon: <History className="w-5 h-5 text-[#8C84FF]" />,
    },
  ];

  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="text-white px-6 py-20 relative overflow-hidden animate-fade-up-rb"
    >
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRB {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-rb {
          animation: fadeUpRB 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5F56FD]" />
            <span className="text-[11px] font-extrabold tracking-widest text-[#7C74FF] uppercase">
              RULE BUILDER
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            Source, scope, threshold, recipients, quiet hours, and approval.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Clean Image Frame */}
          <div className="shadow-2xl">
            <img
              src="/alerts-notifications/rule.png"
              alt="Interactive rule builder and query editor interface workspace"
              className="w-full h-full object-conatin rounded-[20px]"
            />
          </div>

          {/* Right Column: Feature Cards Stack */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF12] border border-[#FFFFFF29] p-6 rounded-2xl transition-all duration-300 flex items-start gap-4"
              >
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] text-[#FFFFFFAD] max-w-100 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
