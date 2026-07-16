import React from 'react';
import Image from 'next/image';

export const SelectEnvironmentSection = () => {
  const environments = [
    {
      title: "Federal Civilian",
      description: "Agencies coordinating cross-bureau programs, interagency work, and public accountability under federal records and identity requirements.",
      icon: "/governement/icon-building.svg",
      colorClass: "bg-violet-600/10",
      outlineClass: "outline-violet-600"
    },
    {
      title: "State & Local",
      description: "Public authorities and municipalities that need configurable, jurisdiction-specific patterns rather than universal compliance claims.",
      icon: "/governement/icon-document.svg",
      colorClass: "bg-blue-600/10",
      outlineClass: "outline-blue-600"
    },
    {
      title: "Public Authority",
      description: "Boards, commissions, and special districts coordinating policy, meetings, and public-facing decisions with review and accessibility built in.",
      icon: "/governement/icon-users.svg",
      colorClass: "bg-teal-400/10",
      outlineClass: "outline-teal-600"
    },
    {
      title: "Government Contractor",
      description: "Suppliers collaborating inside agency-defined boundaries — sponsor, scope, expiry, and audit evidence at every step.",
      icon: "/governement/icon-audit.svg",
      colorClass: "bg-yellow-600/10",
      outlineClass: "outline-yellow-600"
    }
  ];

  return (
    <section className="bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-violet-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Select your environment</p>
          <h2 className="text-slate-900 text-4xl font-extrabold font-plus-jakarta">Built for how your agency actually works.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {environments.map((env, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${env.colorClass} outline outline-1 outline-offset-2 ${env.outlineClass}`}>
                <Image src={env.icon} width={20} height={20} alt="" />
              </div>
              <h3 className="text-slate-900 text-lg font-bold font-inter mb-3">{env.title}</h3>
              <p className="text-slate-600 text-sm font-normal font-inter leading-relaxed">
                {env.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
