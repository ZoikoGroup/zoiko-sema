import React from 'react';
import Image from 'next/image';

export const MissionWorkflowsSection = () => {
  const workflows = [
    {
      title: "Interagency working group",
      subtitle: "Coordinated decision with evidence",
      icon: "/governement/icon-workflow.svg",
      colorClass: "bg-violet-600/10",
      outlineClass: "outline-violet-600"
    },
    {
      title: "Public meeting follow-up",
      subtitle: "Accessible reviewed follow-up",
      icon: "/governement/icon-folder.svg",
      colorClass: "bg-blue-600/10",
      outlineClass: "outline-blue-600"
    },
    {
      title: "Emergency continuity coordination",
      subtitle: "Fast coordination with traceability",
      icon: "/governement/icon-lock.svg",
      colorClass: "bg-teal-400/10",
      outlineClass: "outline-teal-700"
    },
    {
      title: "Program and grants operations",
      subtitle: "Visible program accountability",
      icon: "/governement/icon-server.svg",
      colorClass: "bg-yellow-600/10",
      outlineClass: "outline-yellow-600"
    },
    {
      title: "Policy development",
      subtitle: "Governed policy lifecycle",
      icon: "/governement/icon-key.svg",
      colorClass: "bg-violet-600/10",
      outlineClass: "outline-violet-600"
    },
    {
      title: "Contractor delivery",
      subtitle: "Controlled supplier collaboration",
      icon: "/governement/icon-governance.svg",
      colorClass: "bg-blue-600/10",
      outlineClass: "outline-blue-600"
    },
    {
      title: "Inspection / audit response",
      subtitle: "Defensible evidence package",
      icon: "/governement/icon-calendar.svg",
      colorClass: "bg-teal-400/10",
      outlineClass: "outline-teal-700"
    },
    {
      title: "Constituent coordination",
      subtitle: "Reliable internal follow-through",
      icon: "/governement/icon-file.svg",
      colorClass: "bg-yellow-600/10",
      outlineClass: "outline-yellow-600"
    }
  ];

  return (
    <section className="bg-slate-100 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-violet-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Mission Workflows</p>
          <h2 className="text-slate-900 text-4xl font-extrabold font-plus-jakarta mb-6">Built for the way public-sector work happens.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-6 ${workflow.colorClass} outline outline-1 outline-offset-2 ${workflow.outlineClass}`}>
                <Image src={workflow.icon} width={16} height={16} alt="" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-2 leading-tight">{workflow.title}</h3>
              <p className="text-violet-600 text-xs font-medium font-inter">{workflow.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
