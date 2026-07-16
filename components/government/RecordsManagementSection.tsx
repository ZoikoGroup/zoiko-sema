import React from 'react';
import Image from 'next/image';
import { Paperclip } from 'lucide-react';

export const RecordsManagementSection = () => {
  const steps = [
    "Classify",
    "Map schedule",
    "Retain",
    "Hold",
    "Export",
    "Transfer",
    "Audit"
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-violet-600 text-xs font-bold font-inter tracking-wider uppercase mb-4">Records Management</p>
          <h2 className="text-slate-900 text-4xl font-extrabold font-plus-jakarta mb-6">Records-management-by-design.</h2>
          <p className="text-slate-600 text-base font-normal font-inter leading-relaxed max-w-2xl mx-auto">
            Zoiko Sema preserves context and supports agency-defined schedules — it never decides legal record status, disclosure, or disposition on your behalf.
          </p>
        </div>

        {/* Flowchart */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="px-6 py-2 rounded-full bg-white border border-slate-200">
                <span className="text-violet-600 text-xs font-bold font-inter">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="text-slate-300 hidden sm:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                <Paperclip className="w-4 h-4" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-2">Record classification</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                Record, non-record, pending review, category, responsible office, source object.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mb-6 text-orange-600">
                <Paperclip className="w-4 h-4" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-2">Legal / litigation hold</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                Scope, custodian, reason, authority, start, owner, conflict, and release — restricted roles and audit.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200 shadow-sm hidden lg:block">
            <Image 
              src="/governement/mission-workflows.png"
              alt="Records Management"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center mb-6 text-teal-600">
                <Paperclip className="w-4 h-4" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-2">Context relationships</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                Meeting, chat, thread, file, document, decision, and task relationships preserved in export.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <Paperclip className="w-4 h-4" />
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-inter mb-2">Disposition</h3>
              <p className="text-slate-600 text-xs font-normal font-inter leading-relaxed">
                Eligible date, authority, hold check, approval, dry run — no deletion without approved authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
