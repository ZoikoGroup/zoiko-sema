import React from "react";
import Link from "next/link";

export default function PrivacyTrustSection() {
  const links = [
    {
      title: "Responsible analytics",
      desc: "No hidden employee score, ranking, content<br/>surveillance, or automatic HR conclusion.",
      linkText: "Read the principles →",
      href: "#"
    },
    {
      title: "Privacy & Data",
      desc: "Data categories, retention, requests, minimum<br/>cohorts, and workspace controls.",
      linkText: "Review Privacy & Data →",
      href: "/privacy"
    },
    {
      title: "Security Center",
      desc: "Access model, admin safeguards, and reporting<br/>scope by role.",
      linkText: "Visit Security Center →",
      href: "/security-center" 
    },
    {
      title: "Compliance",
      desc: "Audit trail, export controls, evidence availability,<br/>and legal-hold context.",
      linkText: "View Compliance →",
      href: "/compliance"
    },
    {
      title: "Accessibility",
      desc: "Charts with text summaries and data tables,<br/>keyboard flow, and reduced-motion.",
      linkText: "View Accessibility →",
      href: "/accessibility"
    },
    {
      title: "Metric dictionary",
      desc: "Every KPI's owner, formula, source, exclusions,<br/>freshness, and version history.",
      linkText: "Open methodology →",
      href: "#"
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-[#64748B] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
            Privacy, Trust & Responsible Analytics
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            Reporting with boundaries you can<br />verify
          </h2>
          <p className="text-[#64748B] text-base font-normal font-['Inter'] leading-7 max-w-2xl mt-2">
            Aggregate, role-aware, minimum-cohort, and policy-aware — with the<br/>documentation procurement and security teams expect.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1160px]">
          {links.map((item, i) => (
            <div key={i} className="self-stretch px-5 py-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-1.5 hover:shadow-md transition-shadow">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-[#1E1B4B] text-base font-bold font-['Plus_Jakarta_Sans'] leading-4">
                      {item.title}
                    </div>
                </div>
                <div className="self-stretch pb-2 flex flex-col justify-start items-start">
                    <div 
                      className="self-stretch justify-center text-[#64748B] text-xs font-normal font-['Inter'] leading-5"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                </div>
                <Link href={item.href} className="justify-center text-[#4F46E5] text-xs font-semibold font-['Inter'] leading-5 hover:underline">
                    {item.linkText}
                </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
