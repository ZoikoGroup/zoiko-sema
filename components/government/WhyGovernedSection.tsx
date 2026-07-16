import React from 'react';
import Image from 'next/image';

export const WhyGovernedSection = () => {
  const issues = [
    {
      title: "Fragmented threads",
      description: "Business email and chat scatter across tools with no shared record of decisions."
    },
    {
      title: "Untracked records",
      description: "Collaboration records can be federal records — most tools have no schedule or hold model."
    },
    {
      title: "Unscoped external access",
      description: "Contractors and interagency partners get standing access with no expiry or review."
    },
    {
      title: "Unreviewed AI output",
      description: "AI drafts and summaries move forward without eligibility checks or human approval."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-violet-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Why Governed Communication</p>
          <h2 className="text-slate-900 text-4xl font-extrabold font-plus-jakarta mb-6 leading-tight">
            Fragmented threads.<br />
            Untracked records.<br />
            Unreviewed AI.
          </h2>
          <p className="text-slate-600 text-base font-normal font-inter leading-relaxed max-w-2xl mx-auto">
            Most collaboration tools don't know they're producing federal records. Zoiko Sema is built into your agency's governance — where the risk actually lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-yellow-600/10 flex items-center justify-center mb-6 outline outline-1 outline-offset-2 outline-yellow-600">
                <Image src="/governement/icon-warning.svg" width={16} height={16} alt="" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-3">{issue.title}</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
