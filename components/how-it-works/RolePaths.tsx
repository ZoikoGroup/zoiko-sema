"use client";

import React from "react";

export default function RolePaths() {
  const paths = [
    {
      label: "OPERATIONS",
      desc: "Exception queue, ownership, and team scope outcomes.",
    },
    {
      label: "HR / PEOPLE",
      desc: "Notices, corrections, challenge, appeal, and human review.",
    },
    {
      label: "FINANCE / PAYROLL",
      desc: "Variance rules, period lock, export scope, and lineage.",
    },
    {
      label: "COMPLIANCE / LEGAL",
      desc: "Policy version, actor, correction history, evidence package.",
    },
    {
      label: "IT / SECURITY",
      desc: "SCIM mapping, role scope, connector permissions, and audit.",
    },
    {
      label: "MANAGER",
      desc: "Scoped team view, explanation, and approval correction actions.",
    },
    {
      label: "WORKER",
      desc: "Personal timeline, notice, source, correction, and appeal.",
    },
    {
      label: "EXECUTIVE",
      desc: "Product proof, deployment dynamic gates, and trust metrics.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpPaths {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-paths {
              animation: fadeUpPaths 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-paths">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#2b56f5] uppercase mb-3">
          ROLE PATHS
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          Choose the view that matches your job to be done.
        </h2>

        {/* Hero Role Matrix Viewport */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-[#f8f9fd] mb-12 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 7.png"
            alt="Role-aware matrix view selection layout"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4x2 Grid Matrix System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebedf5] rounded-xl p-5 shadow-[0px_4px_20px_0px_#12132B0D] hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <span className="text-[10px] tracking-wider font-extrabold text-[#2b56f5] uppercase block mb-2">
                  {path.label}
                </span>
                <p className="text-[#51567d] text-[12.5px] leading-relaxed font-medium">
                  {path.desc}
                </p>
              </div>
              <button className="text-[11px] font-bold text-[#2b56f5] hover:underline mt-4 text-left flex items-center gap-1">
                View path <span className="text-[9px]">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
