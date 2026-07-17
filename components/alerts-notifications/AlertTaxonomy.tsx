import React from "react";

export default function AlertTaxonomy() {
  const categories = [
    {
      label: "Informational",
      desc: "Useful context; no required action, no escalation.",
      badgeStyle: "bg-[#EEF2FF] text-[#4F46E5]",
    },
    {
      label: "Reminder",
      desc: "Action requested by a known deadline, with quiet-hour rules.",
      badgeStyle: "bg-[#ECFDF5] text-[#10B981]",
    },
    {
      label: "Review required",
      desc: "Policy or data exception needs human assessment and evidence.",
      badgeStyle: "bg-[#FFFBEB] text-[#D97706]",
    },
    {
      label: "Critical",
      desc: "Material risk requiring prompt review and an incident path.",
      badgeStyle: "bg-[#FEF2F2] text-[#EF4444]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-[#1E293B] animate-fade-up-at">
      {/* Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpAT {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-up-at {
              animation: fadeUpAT .8s cubic-bezier(.16,1,.3,1) forwards;
            }
          `,
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Tag */}
        <div className="mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F46E5]">
            Alert Taxonomy
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] md:text-[31px]">
          Informational, reminder, review-required, and critical — clearly
          separated.
        </h2>

        {/* Image */}
        <div>
          <img
            src="/alerts-notifications/alert.png"
            alt="Alert taxonomy visualization"
            className="w-full h-auto rounded-[20px] mt-16 object-contain"
          />
        </div>

        {/* Cards */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/20  shadow-[0px_4px_12px_0px_#12132B0D] hover:shadow-xl"
            >
              <span
                className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-[0.05em] ${category.badgeStyle}`}
              >
                {category.label}
              </span>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
