import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
export const GovernmentHeroSection = () => {
  return (
    <section className="bg-slate-900 overflow-hidden py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-600/20 border border-violet-400/30">
              <span className="w-1.5 h-1.5 rounded-sm bg-violet-400"></span>
              <span className="text-violet-400 text-xs font-bold tracking-wider uppercase font-inter">Government</span>
            </div>

            {/* Headline */}
            <h1 className="text-white text-5xl font-extrabold font-plus-jakarta leading-[55px]">
              Communication that<br/>
              supports public<br/>
              service with control.
            </h1>

            {/* Subtext */}
            <p className="w-full max-w-[519.79px] text-slate-300 text-base font-normal font-inter leading-7">
              Zoiko Sema helps government and public-sector teams<br/>
              coordinate messages, meetings, decisions, tasks, records, and<br/>
              external participants through one governed communication layer<br/>
              with controlled AI and auditable administration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/get-a-demo" className="w-60 h-16 inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-full transition-colors">
                Request a government demo
              </Link>
              <Link href="/security-compliance" className="h-16 px-8 inline-flex justify-center items-center bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold rounded-full border border-white/25 transition-colors text-center leading-tight">
                Review security &<br/>procurement readiness
              </Link>
            </div>

            {/* Trust Center Link */}
            <div className="pt-2">
              <Link href="/trust-center" className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors inline-flex items-center">
                Visit Trust Center <span className="ml-1">→</span>
              </Link>
              <p className="mt-4 text-slate-500 text-xs font-normal leading-relaxed max-w-lg">
                For unclassified public-sector collaboration. Deployment eligibility, data handling, accessibility, records, and authorization status are confirmed for the exact service and contract.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Role-based access', 'Records-aware workflows', 'Controlled AI', 'External access governance', 'Audit visibility'].map((feature, idx) => (
                <div key={idx} className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 space-x-2">
                  <Check className="w-3 h-3 text-teal-400" strokeWidth={3} />
                  <span className="text-slate-300 text-xs font-medium font-inter">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Image/Mockup) */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative bg-white rounded-2xl shadow-[0_40px_80px_-20px_rgba(20,22,60,0.35)] border border-violet-100 overflow-hidden transform translate-x-0 lg:translate-x-12">
              {/* Mockup Header */}
              <div className="h-9 bg-slate-50 border-b border-violet-100 flex items-center px-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <div className="ml-4 flex-1">
                  <div className="w-64 h-6 bg-white rounded-md border border-violet-100 mx-auto flex items-center justify-center">
                    <span className="text-slate-400 text-xs">app.zoikosema.com/government/hub</span>
                  </div>
                </div>
              </div>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image 
                  src="/governement/why-governed.png"
                  alt="Government Platform Coordination Hub"
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
