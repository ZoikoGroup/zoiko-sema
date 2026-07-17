import React from "react";

export default function TriageQueue() {
  const cards = [
    {
      title: "KPI row",
      desc: "Open critical, review required, due today, average review age.",
    },
    {
      title: "Priority queue",
      desc: "Severity, source, owner, due time, and status.",
    },
    {
      title: "Detail drawer",
      desc: "Why triggered, source events, confidence, and audit timeline.",
    },
    {
      title: "Saved views",
      desc: "My queue, payroll cutoff, break exceptions, integration failures.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F3F2FD] px-6 py-24 text-[#1E293B] animate-fade-up-tq">
      {/* Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpTQ {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-up-tq {
              animation: fadeUpTQ .8s cubic-bezier(.16,1,.3,1) forwards;
            }
          `,
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Tag */}
        <div className="mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F46E5]">
            Alerts & Notifications Command Center
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-3xl text-center text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A]">
          One queue for triage, ownership, evidence, and resolution.
        </h2>

        {/* Image */}
        <div>
          <img
            src="/alerts-notifications/triage.png"
            alt="Alerts command center"
            className="w-full h-auto object-contain rounded-[20px] mt-16"
          />
        </div>

        {/* Cards */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/20 hover:shadow-xl"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0F172A]">
                {card.title}
              </h3>

              <p className="text-sm leading-7 text-slate-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
