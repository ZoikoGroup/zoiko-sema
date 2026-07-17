"use client"
import React, { useState } from "react";
import { Globe, Bell, Lock } from "lucide-react";

export default function RegionalNotificationPolicies() {
  const [dateFormat, setDateFormat] = useState<"US" | "EU">("US");
  const [emailDigest, setEmailDigest] = useState(true);
  const [quietHours, setQuietHours] = useState(false);

  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-rnp">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRNP {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-rnp {
          animation: fadeUpRNP 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Card 1: Localization & Regional */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#EEF2FF] rounded-xl">
              <Globe className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-[#0F172A]">
                Localization & Regional
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Manage global time and language standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Default Language
              </label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5] appearance-none cursor-pointer">
                <option>English (US)</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Organization Time Zone
              </label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5] appearance-none cursor-pointer">
                <option>(UTC-05:00) Eastern Time</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Date Format
              </label>
              <div className="bg-slate-50 p-1 rounded-xl flex gap-1">
                <button
                  onClick={() => setDateFormat("US")}
                  className={`flex-1 text-center py-2 text-[11px] font-bold rounded-lg transition-all ${dateFormat === "US" ? "bg-[#0F172A] text-white shadow-sm" : "text-slate-500 hover:text-[#0F172A]"}`}
                >
                  MM/DD/YYYY
                </button>
                <button
                  onClick={() => setDateFormat("EU")}
                  className={`flex-1 text-center py-2 text-[11px] font-bold rounded-lg transition-all ${dateFormat === "EU" ? "bg-[#0F172A] text-white shadow-sm" : "text-slate-500 hover:text-[#0F172A]"}`}
                >
                  DD/MM/YYYY
                </button>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Currency Preview
              </label>
              <div className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs md:text-sm font-bold text-[#0F172A]">
                $1,234,567.89 USD
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Notification Policies */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#EEF2FF] rounded-xl">
              <Bell className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-[#0F172A]">
                Notification Policies
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Governance-locked messaging rules.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-50 pt-2">
            {/* Row 1 */}
            <label className="flex items-center justify-between py-2 cursor-pointer group">
              <div className="space-y-0.5">
                <span className="text-xs md:text-sm font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                  Email Digest
                </span>
                <p className="text-[11px] text-slate-400">
                  Weekly compliance & usage reports.
                </p>
              </div>
              <input
                type="checkbox"
                checked={emailDigest}
                onChange={() => setEmailDigest(!emailDigest)}
                className="w-4 h-4 rounded border-slate-300 text-[#4F46E5] focus:ring-[#4F46E5]"
              />
            </label>

            {/* Row 2 (Locked) */}
            <div className="flex items-center justify-between py-2 opacity-80">
              <div className="space-y-0.5">
                <span className="text-xs md:text-sm font-bold text-[#0F172A]">
                  Mandatory Notices
                </span>
                <p className="text-[11px] text-slate-400">
                  In-app banners for security updates.
                </p>
              </div>
              <Lock className="w-4 h-4 text-slate-400 mr-0.5" />
            </div>

            {/* Row 3 */}
            <label className="flex items-center justify-between pt-2 cursor-pointer group">
              <div className="space-y-0.5">
                <span className="text-xs md:text-sm font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                  Quiet Hours
                </span>
                <p className="text-[11px] text-slate-400">
                  Suppress non-critical alerts 10PM - 6AM.
                </p>
              </div>
              <input
                type="checkbox"
                checked={quietHours}
                onChange={() => setQuietHours(!quietHours)}
                className="w-4 h-4 rounded border-slate-300 text-[#4F46E5] focus:ring-[#4F46E5]"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
