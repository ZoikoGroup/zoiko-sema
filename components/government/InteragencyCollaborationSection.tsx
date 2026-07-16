import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export const InteragencyCollaborationSection = () => {
  const capabilities = [
    {
      title: "Sponsor",
      description: "Every external account has an internal sponsor and owning unit."
    },
    {
      title: "Identity",
      description: "Verified email/domain or approved identity provider — no anonymous workspace access."
    },
    {
      title: "Scope",
      description: "Explicit workspaces, channels, files, and meetings; browsing outside scope is denied."
    },
    {
      title: "Duration",
      description: "Start, expiry, review date, automatic suspension, and sponsor notification."
    },
    {
      title: "Capabilities",
      description: "Download, upload, copy, export, invite, and AI output access set independently."
    },
    {
      title: "Offboarding",
      description: "Immediate suspend, token/session revoke, group removal, ownership transfer, evidence event."
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <p className="text-teal-400 text-xs font-bold font-inter tracking-wider uppercase mb-4">Interagency & External Collaboration</p>
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-6 leading-tight">
                Every partner has a sponsor, a<br className="hidden lg:block" />
                scope, and an expiry.
              </h2>
              <p className="text-slate-300 text-base font-normal font-inter leading-relaxed max-w-lg">
                Interagency partners, contractors, and public participants collaborate inside boundaries your agency defines — never by default.
              </p>
            </div>

            <div className="space-y-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-md bg-teal-400/20 flex items-center justify-center border border-teal-400/50">
                      <Check className="w-3 h-3 text-teal-400" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold font-inter mb-1">{cap.title}</h3>
                    <p className="text-slate-400 text-xs font-normal font-inter leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Mockup) */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.40)] border border-violet-100 overflow-hidden">
              {/* Mockup Header */}
              <div className="h-9 bg-slate-50 border-b border-violet-100 flex items-center px-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image 
                  src="/governement/records-management.png"
                  alt="Interagency Collaboration features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
