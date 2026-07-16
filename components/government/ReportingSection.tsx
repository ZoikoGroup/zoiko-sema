import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export const ReportingSection = () => {
  const reports = [
    {
      title: "Adoption",
      description: "Active workspaces, invited/activated users, role coverage"
    },
    {
      title: "Mission follow-through",
      description: "Decisions confirmed, actions completed or overdue"
    },
    {
      title: "Records",
      description: "Mapped workspaces, schedule coverage, holds, exports"
    },
    {
      title: "External access",
      description: "Guests by sponsor/domain, expiry, reviews, exceptions"
    },
    {
      title: "Security",
      description: "MFA, SSO, sessions, identity errors, privileged role changes"
    },
    {
      title: "AI governance",
      description: "Eligible workspaces, review SLA, exclusions, corrections"
    },
    {
      title: "Integrations",
      description: "Connection health, token expiry, sync errors"
    },
    {
      title: "Service assurance",
      description: "Status, incidents, maintenance, reliability"
    }
  ];

  return (
    <section className="bg-white py-24 border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column (Mockup) */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(20,22,60,0.15)] border border-violet-100 overflow-hidden transform -translate-x-0 lg:-translate-x-12">
              {/* Mockup Header */}
              <div className="h-9 bg-slate-50 border-b border-violet-100 flex items-center px-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image 
                  src="/governement/hero-dashboard.png"
                  alt="Reporting Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <p className="text-violet-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Reporting</p>
              <h2 className="text-slate-900 text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-6 leading-tight">
                Aggregate health, not worker scoring.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reports.map((report, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-md bg-violet-100 flex items-center justify-center border border-violet-200">
                      <Check className="w-3 h-3 text-violet-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-slate-900 text-sm font-bold font-inter mb-1">{report.title}</h3>
                    <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
