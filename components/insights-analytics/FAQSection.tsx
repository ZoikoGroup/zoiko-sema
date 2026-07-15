"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Does ZoikoSema use analytics to monitor employees?",
      a: "No. The design prohibits hidden employee scoring, behavior policing, content surveillance, and automatic HR conclusions. Reporting is aggregate, role-aware, and minimum cohort, and it refuses to direct-link a metric to an individual comparison."
    },
    {
      q: "What does the dashboard actually report?",
      a: "It reports on adoption, meeting-to-work follow-through, collaboration health, AI usage & governance, security & access, and operational context. It helps administrators understand workspace usage and compliance without exposing private content."
    },
    {
      q: "How are reporting metrics defined?",
      a: "Every KPI ships with a governed definition, formula, source, eligible population, exclusions, freshness, owner, and privacy rule so that metrics are completely transparent and verifiable."
    },
    {
      q: "Does the product show message or transcript content?",
      a: "No. Insights and analytics operate strictly on metadata and event logs. Transcript content, meeting audio, and direct message contents are never parsed or surfaced in these reports."
    },
    {
      q: "Can users filter, export, schedule, or alert on reports?",
      a: "Yes. Role-permitted users can save views, export row data, schedule recurring deliveries, and set thresholds for alerts, subject to the organization's retention and data classification policies."
    },
    {
      q: "Who can see organization, security, compliance, or AI reports?",
      a: "Access to these reports is governed by strict role-based access control (RBAC). Only designated administrators, compliance officers, and authorized managers can view this level of reporting."
    },
    {
      q: "What is ZoikoTime context here?",
      a: "ZoikoTime is an optional context layer that Business and Enterprise customers can connect to aggregate workforce signals (e.g., calendar availability). It operates under customer-controlled privacy settings."
    },
    {
      q: "Is public dashboard data real customer data?",
      a: "No. Any data shown in public demonstrations, marketing materials, or unauthenticated product tours is strictly illustrative demonstration data."
    },
    {
      q: "What happens when data is stale, incomplete, or unavailable?",
      a: "The dashboard clearly marks data freshness and will flag incomplete or stale data sources. It refuses to render misleading metrics if the underlying data connection has failed or policy prevents its calculation."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-[#4F46E5] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
            FAQ
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            Direct answers on privacy, metrics<br />& plans
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans'] pr-8">
                  {faq.q}
                </span>
                <span className={`text-[#4F46E5] text-lg transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[#475569] text-sm font-normal font-['Inter'] leading-6 border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
