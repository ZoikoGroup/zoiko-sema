import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export const TrustSection = () => {
  const trustPoints = [
    {
      title: "Unclassified scope",
      description: "Zoiko Sema is designed for unclassified public-sector collaboration. Classified and national-security use is out of scope by default."
    },
    {
      title: "Shared responsibility",
      description: "Vendor controls and customer configuration are distinct. Notices, identity, classification, and retention remain customer-owned."
    },
    {
      title: "Exact status, no inference",
      description: "Authorization and evidence status is sourced from Trust Center records with scope, owner, and review dates — never implied."
    },
    {
      title: "No surveillance",
      description: "No hidden employee scoring, behavior policing, or presence tracking. Governance targets work objects, not workers."
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-teal-400 text-xs font-bold font-inter tracking-wider uppercase mb-4">Trust</p>
          <h2 className="text-white text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-12 whitespace-nowrap">
            Scope, responsibility, and status — stated plainly.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-teal-400/10 flex items-center justify-center mb-6 border border-teal-400/50">
                <Shield className="w-4 h-4 text-teal-400" />
              </div>
              <h3 className="text-white text-sm font-bold font-inter mb-3">{point.title}</h3>
              <p className="text-slate-400 text-xs font-normal font-inter leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/trust-center" className="text-teal-400 hover:text-teal-300 text-sm font-bold font-inter transition-colors">
            Visit Trust Center
          </Link>
          <Link href="/status" className="text-teal-400 hover:text-teal-300 text-sm font-bold font-inter transition-colors">
            System Status
          </Link>
        </div>
      </div>
    </section>
  );
};
