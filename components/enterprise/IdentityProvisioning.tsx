'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
// Lightweight hook for triggering staggered entry animations on scroll
function useElementInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function IdentityProvisioning() {
  const { ref: idRef, inView: idInView } = useElementInView(0.05);
  const { ref: secRef, inView: secInView } = useElementInView(0.05);

  const identityCards = [
    { title: "SSO setup", status: "Connected", badgeStyle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400", desc: "Provider selection, metadata upload, domain association, test connection, and fallback admin access." },
    { title: "SCIM provisioning", status: "Testing", badgeStyle: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", desc: "SCIM token, provisioning status, user lifecycle sync, group mapping, and error log." },
    { title: "Domain verification", status: "Connected", badgeStyle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400", desc: "Approved domains, verification method, domain owner, and enforced sign-in rules." },
    { title: "Group mapping", status: "Needs review", badgeStyle: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400", desc: "Map identity groups to Zoiko Sema workspaces, roles, policies, and launch waves." },
    { title: "Emergency admin", status: "Pending", badgeStyle: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400", desc: "Break-glass admin policy, approval trail, recovery contact, and audit event." },
    { title: "Session policy", status: "Connected", badgeStyle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400", desc: "Idle timeout, device rules, and session revocation across the organization." }
  ];

  const securityControls = [
    { title: "MFA enforcement", tier: "Business+", style: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", desc: "Configure MFA by organization, group, workspace, or role — with impacted-user preview before enabling." },
    { title: "Session & device controls", tier: "Business+", style: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", desc: "Review sessions, revoke access, set idle timeout, and enforce device policies." },
    { title: "Retention & legal hold", tier: "Enterprise", style: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400", desc: "Set retention for messages, files, meetings, summaries, and audit logs; legal hold on Enterprise." },
    { title: "Audit logs", tier: "Business+", style: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", desc: "Filter events by admin, module, object, date, and risk type, with full export." },
    { title: "Guest & external access", tier: "Business+", style: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", desc: "Approve domains, set guest expiry, restrict external collaboration, and review exceptions." },
    { title: "AI governance", tier: "Enterprise", style: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400", desc: "Configure AI summaries, action extraction, sensitive-workspace exclusions, and AI retention." }
  ];

  const adminRoles = [
    { name: "Workspace Owner", access: "Full view and edit across deployment settings, security, compliance, billing, and launch approvals." },
    { name: "Organization Admin", access: "Manage deployment checklist, users, groups, workspaces, templates, and integrations." },
    { name: "Security Admin", access: "Manage SSO, MFA, sessions, devices, security alerts, and security-related audit events." },
    { name: "Compliance Admin", access: "Manage retention, legal hold, exports, evidence packs, and compliance audit review." },
    { name: "Integration Admin", access: "Connect identity, calendar, storage, APIs, webhooks, and ZoikoTime setup." },
    { name: "AI Governance Admin", access: "Manage AI policies, sensitive-workspace exclusions, AI retention, and AI audit events." },
    { name: "Auditor / Viewer", access: "Read-only access to reports, logs, deployment status, and allowed exports." }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 font-sans antialiased selection:bg-blue-500/30">
      
      {/* SECTION 1: IDENTITY & PROVISIONING SPLIT BLOCK */}
      <section 
        ref={idRef} 
        className="w-full border-b border-slate-200/60 dark:border-slate-900 py-12 lg:py-14"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Narrative Block */}
          <div 
            className={`lg:col-span-5 space-y-6 transition-all duration-700 ease-out ${
              idInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-3">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase block">
                IDENTITY & PROVISIONING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Connect to your identity model before day one.
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Set up SSO, SCIM provisioning, domain verification, group mapping, and break-glass admin access with clear connection states for IT and security reviewers.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact-sales" className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold tracking-tight shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0">
                Talk to sales
              </Link>
              <Link href="/admin-console" className="px-5 py-2.5 bg-transparent text-violet-600 dark:text-violet-400 font-bold text-xs transition-colors hover:text-violet-700 inline-flex items-center">
                See identity setup →
              </Link>
            </div>
          </div>

          {/* Right Cards Stack Matrix Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {identityCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-violet-100/70 dark:border-slate-800/60 p-5 shadow-[0px_12px_30px_-15px_rgba(20,22,60,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-violet-200 dark:hover:border-slate-700 group relative overflow-hidden"
                style={{
                  transform: idInView ? 'translate-y-0' : 'translate-y-12',
                  opacity: idInView ? 1 : 0,
                  transitionDelay: `${100 + index * 60}ms`
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {card.title}
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full select-none shrink-0 ${card.badgeStyle}`}>
                    {card.status}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: SECURITY, COMPLIANCE & ADMIN ROLES MATRIX */}
      <section 
        ref={secRef}
        className="w-full bg-slate-100 dark:bg-slate-950 py-12 lg:py-14"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Section Header Block */}
          <div 
            className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ease-out ${
              secInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase block">
              SECURITY, COMPLIANCE & AI GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Procurement-ready controls, configured before launch.
            </h2>
          </div>

          {/* 3-Column Matrix Grid for Security Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityControls.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-violet-100/70 dark:border-slate-800/80 p-6 shadow-[0px_16px_36px_-24px_rgba(20,22,60,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-violet-200 dark:hover:border-slate-700 group"
                style={{
                  transform: secInView ? 'translate-y-0' : 'translate-y-12',
                  opacity: secInView ? 1 : 0,
                  transitionDelay: `${100 + index * 50}ms`
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm shrink-0 select-none ${item.style}`}>
                    {item.tier}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Embedded Admin Roles Framework Console Sheet */}
          <div 
            className={`bg-white dark:bg-slate-900 rounded-2xl border border-violet-100/70 dark:border-slate-800/80 p-6 sm:p-8 shadow-[0px_20px_50px_-30px_rgba(20,22,60,0.1)] transition-all duration-700 delay-200 ${
              secInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="mb-6">
              <span className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider block uppercase">
                ADMIN ROLES & PERMISSIONS
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {adminRoles.map((role, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-4 items-center group transition-colors duration-150 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 px-3 -mx-3 rounded-xl"
                >
                  <div className="md:col-span-4 text-xs sm:text-sm font-bold text-indigo-900 dark:text-indigo-400 transition-colors group-hover:text-blue-600">
                    {role.name}
                  </div>
                  <div className="md:col-span-8 text-gray-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                    {role.access}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}