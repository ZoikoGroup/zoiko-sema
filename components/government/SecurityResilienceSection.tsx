import React from 'react';
import { Shield } from 'lucide-react';

export const SecurityResilienceSection = () => {
  const controls = [
    {
      title: "Identity & access",
      description: "SSO, MFA, SCIM, RBAC, sessions, service accounts, emergency access.",
      colorClass: "bg-violet-100/80 text-violet-600"
    },
    {
      title: "Data protection",
      description: "Encryption scope, key management, storage regions, backups, deletion, subprocessors.",
      colorClass: "bg-blue-100/80 text-blue-600"
    },
    {
      title: "App & infrastructure",
      description: "Secure development, vulnerability management, configuration, logging, incident response.",
      colorClass: "bg-teal-100/80 text-teal-600"
    },
    {
      title: "Audit & monitoring",
      description: "Admin, access, policy, export, integrations, and AI event visibility.",
      colorClass: "bg-amber-100/80 text-amber-600"
    },
    {
      title: "Resilience",
      description: "Service status, incident communication, recovery objectives, backup/restore testing.",
      colorClass: "bg-violet-100/80 text-violet-600"
    },
    {
      title: "Privacy",
      description: "Data minimization, purpose, external access, AI retention, and request handling.",
      colorClass: "bg-blue-100/80 text-blue-600"
    },
    {
      title: "Shared responsibility",
      description: "Vendor controls vs. customer configuration, notices, identity, classification, retention.",
      colorClass: "bg-teal-100/80 text-teal-600"
    },
    {
      title: "No surveillance",
      description: "No hidden employee scoring, behavior policing, presence tracking, or public-worker ranking.",
      colorClass: "bg-amber-100/80 text-amber-600"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Security & Resilience</p>
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-6">Controls we can show, not just claim.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {controls.map((control, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-6 ${control.colorClass?.split(' ')[0]}`}>
                <Shield className={`w-4 h-4 ${control.colorClass?.split(' ')[1]}`} />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-3">{control.title}</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                {control.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 text-center">
          <p className="text-slate-600 text-xs font-medium font-inter">
            Claim rule: only implemented and plan-available controls are shown. No absolute "secure" claim; tamper-proof or immutable language is used only where verified.
          </p>
        </div>
      </div>
    </section>
  );
};
