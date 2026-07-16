import React from "react";

export default function InsightTaxonomySection() {
  const boundaries = [
    {
      icon: "📈",
      title: "Adoption",
      desc: "Are eligible people & workspaces activating and<br/>returning?",
      includes: [
        "Active users / workspaces",
        "Activation & onboarding",
        "Feature adoption"
      ],
      refuses: "Defined eligible population & window; no activity-as-<br/>performance claim."
    },
    {
      icon: "✅",
      title: "Meeting-to-work",
      desc: "Do meetings become reviewed outcomes and owned<br/>work?",
      includes: [
        "Generation & review",
        "Confirmed decisions, owned actions",
        "Due-state, completion, backlog"
      ],
      refuses: "Human-review state, denominators, source authorization."
    },
    {
      icon: "💬",
      title: "Collaboration health",
      desc: "Are workspaces structured, active, and appropriately<br/>shared?",
      includes: [
        "Active / healthy workspaces",
        "External spaces & guest review",
        "Archive candidates"
      ],
      refuses: "No message sentiment, volume ranking, or content<br/>analysis."
    },
    {
      icon: "🤖",
      title: "AI usage & governance",
      desc: "Where is AI eligible, used, reviewed, shared, or<br/>restricted?",
      includes: [
        "Eligible workspaces, generation",
        "Review / approval, sharing",
        "Retention, exceptions"
      ],
      refuses: "No AI quality score without approved method; no hidden<br/>use."
    },
    {
      icon: "🔒",
      title: "Security & access",
      desc: "Are identity, access, and guest controls configured &<br/>reviewed?",
      includes: [
        "MFA / SSO state",
        "Failed sign-ins, sessions",
        "Overdue access reviews"
      ],
      refuses: "Security roles only; no unsupported risk labels."
    },
    {
      icon: "⚙",
      title: "Operational context",
      desc: "Are integrations, reports, alerts & ZoikoTime<br/>connections healthy?",
      includes: [
        "Connection & sync freshness",
        "Scheduled delivery, failures",
        "Mappings, policy alignment"
      ],
      refuses: "No automatic workforce conclusion; customer-configured<br/>scope."
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-10">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-3">
          <span className="text-[#64748B] text-sm font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest">
            Insight Taxonomy & Boundaries
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            What we report — and what we<br/>refuse to
          </h2>
          <p className="text-[#64748B] text-base font-normal font-['Inter'] leading-6 mt-2 max-w-2xl">
            Six reporting categories with explicit boundaries, plus one category we will not<br/>design, infer, calculate, expose, export, or market.
          </p>
        </div>

        {/* Boundary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {boundaries.map((boundary, i) => (
            <div key={i} className="self-stretch p-5 bg-white rounded-2xl shadow-[0px_4px_14px_0px_rgba(17,22,60,0.05)] shadow-[0px_1px_2px_0px_rgba(17,22,60,0.06)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-1.5">
              
              <div className="w-10 h-10 pt-[5px] pb-1.5 bg-gray-50 rounded-xl inline-flex justify-center items-center">
                  <div className="text-center justify-center text-[#1E1B4B] text-xl font-normal font-['Inter'] leading-8">
                    {boundary.icon}
                  </div>
              </div>
              
              <div className="self-stretch pt-2 pb-[0.80px] flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-[#1E1B4B] text-base font-bold font-['Plus_Jakarta_Sans'] leading-5">
                    {boundary.title}
                  </div>
              </div>
              
              <div className="self-stretch flex flex-col justify-start items-start">
                  <div 
                    className="self-stretch justify-center text-[#1E1B4B] text-xs font-semibold font-['Inter'] leading-5"
                    dangerouslySetInnerHTML={{ __html: boundary.desc }}
                  />
              </div>
              
              <div className="self-stretch pt-0.5 pb-1.5 flex flex-col justify-start items-start gap-[3px]">
                  {boundary.includes.map((item, j) => (
                    <div key={j} className="self-stretch pl-3.5 relative flex flex-col justify-start items-start">
                        <div className="w-[5px] h-[5px] left-0 top-[8px] absolute bg-[#4F46E5] rounded-full"></div>
                        <div className="justify-center text-[#64748B] text-xs font-normal font-['Inter'] leading-5">
                          {item}
                        </div>
                    </div>
                  ))}
              </div>
              
              <div className="self-stretch pt-2.5 mt-auto border-t border-gray-200 inline-flex justify-start items-start gap-1.5">
                  <div className="justify-center text-[#3AA6BD] text-xs font-normal font-['Inter'] leading-4 mt-0.5">🛡</div>
                  <div 
                    className="justify-center text-[#3AA6BD] text-xs font-normal font-['Inter'] leading-4"
                    dangerouslySetInnerHTML={{ __html: boundary.refuses }}
                  />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
