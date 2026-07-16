import React from 'react';
import { Link2 } from 'lucide-react';

export const IntegrationsSection = () => {
  const integrations = [
    {
      title: "Identity",
      description: "SAML/OIDC providers, directory and SCIM",
      colorClass: "bg-violet-950/40 text-violet-400 border-violet-900/50"
    },
    {
      title: "Calendar & meetings",
      description: "Government-approved calendar and meeting systems",
      colorClass: "bg-blue-950/40 text-blue-400 border-blue-900/50"
    },
    {
      title: "Records & archives",
      description: "Agency records repository, eDiscovery, transfer tools",
      colorClass: "bg-teal-950/40 text-teal-400 border-teal-900/50"
    },
    {
      title: "Security operations",
      description: "SIEM, alerting, case management, incident tooling",
      colorClass: "bg-yellow-950/40 text-yellow-400 border-yellow-900/50"
    },
    {
      isLogo: true // This represents the center Zoiko Sema logo slot
    },
    {
      title: "Storage & documents",
      description: "Approved file and document repositories",
      colorClass: "bg-violet-950/40 text-violet-400 border-violet-900/50"
    },
    {
      title: "Workflow & mission systems",
      description: "Program, grant, ticket, and case systems",
      colorClass: "bg-blue-950/40 text-blue-400 border-blue-900/50"
    },
    {
      title: "Developer",
      description: "APIs, webhooks, event logs, integration keys",
      colorClass: "bg-teal-950/40 text-teal-400 border-teal-900/50"
    },
    {
      title: "Zoiko ecosystem",
      description: "ZoikoTime and approved Zoiko services",
      colorClass: "bg-yellow-950/40 text-yellow-400 border-yellow-900/50"
    }
  ];

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-teal-400 text-xs font-bold font-inter tracking-wider uppercase mb-4">Integrations</p>
          <h2 className="text-white text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-6">Connects to the systems your agency already runs.</h2>
          <p className="text-slate-400 text-base font-normal font-inter leading-relaxed">
            One governed hub, with clear owner, scope, and audit on every connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((item, index) => (
            <div key={index} className="h-full">
              {item.isLogo ? (
                <div className="bg-white rounded-2xl h-full flex items-center justify-center p-6 border border-slate-200">
                  <div className="text-blue-600 font-extrabold text-3xl tracking-tighter">
                    ZOIKO<span className="text-slate-900">Sema™</span>
                  </div>
                </div>
              ) : (
                <div className={`bg-slate-800/50 hover:bg-slate-800 rounded-2xl p-6 h-full border ${item.colorClass?.split(' ').pop()} transition-colors`}>
                  <div className={`w-8 h-8 rounded-lg ${item.colorClass?.split(' ')[0]} flex items-center justify-center mb-6`}>
                    <Link2 className={`w-4 h-4 ${item.colorClass?.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-white text-sm font-bold font-inter mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs font-normal font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
