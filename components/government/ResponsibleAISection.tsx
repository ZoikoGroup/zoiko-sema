import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const ResponsibleAISection = () => {
  const policies = [
    {
      title: "Eligibility",
      description: "Organization and workspace policy, participant conditions, feature entitlement, sensitive exclusion."
    },
    {
      title: "Notice",
      description: "Plain-language participant notice before recording, transcription, or summarization."
    },
    {
      title: "Human review",
      description: "Authorized reviewer can edit, redact, reject, correct, approve, and reopen."
    },
    {
      title: "Source traceability",
      description: "Draft label, source timestamps and links, confidences and missing-information flags."
    },
    {
      title: "Retention",
      description: "AI output, transcript, source, and audit retention configured separately."
    },
    {
      title: "Prohibited use",
      description: "No autonomous eligibility, enforcement, adjudication, benefits, hiring, or discipline decisions."
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <p className="text-teal-400 text-xs font-bold font-inter tracking-wider uppercase mb-4">Responsible AI</p>
              <h2 className="text-white text-3xl lg:text-4xl font-extrabold font-plus-jakarta mb-6 leading-tight">
                AI drafts. A human approves.
              </h2>
              <p className="text-slate-300 text-base font-normal font-inter leading-relaxed max-w-lg">
                Zoiko Sema's AI is eligibility-gated, source-traced, and reviewable. It never makes an autonomous high-impact decision.
              </p>
            </div>

            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-md bg-teal-400/20 flex items-center justify-center border border-teal-400/50">
                      <ArrowRight className="w-3 h-3 text-teal-400" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold font-inter mb-1">{policy.title}</h3>
                    <p className="text-slate-400 text-xs font-normal font-inter leading-relaxed">
                      {policy.description}
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
                <div className="ml-auto pr-4">
                  <span className="text-slate-400 text-xs">Suggested decision - awaiting human review</span>
                </div>
              </div>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] w-full bg-slate-800">
                <Image 
                  src="/governement/responsible-ai.png"
                  alt="AI Human Approval Process"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
