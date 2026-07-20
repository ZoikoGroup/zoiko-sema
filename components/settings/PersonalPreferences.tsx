"use client"

import React, { useState } from "react";
import { User, Palette, Accessibility } from "lucide-react";

type Tab = "account" | "appearance" | "accessibility";
type Theme = "light" | "dark" | "system";
type Density = "compact" | "comfortable";

export default function PersonalPreferences() {
  const [activeTab, setActiveTab] = useState<Tab>("appearance");
  const [theme, setTheme] = useState<Theme>("light");
  const [density, setDensity] = useState<Density>("compact");

  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-pp">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpPP {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-pp {
          animation: fadeUpPP 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Sidebar Navigation (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Personal Preferences
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Customize your individual experience without affecting global
              organizational settings.
            </p>
          </div>

          <div className="flex flex-col gap-1 w-full max-w-sm">
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl text-xs md:text-sm font-bold transition-all text-left ${
                activeTab === "account"
                  ? "bg-[#081B4B] text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-100 hover:text-[#0F172A]"
              }`}
            >
              <User className="w-4 h-4" />
              Account Information
            </button>

            <button
              onClick={() => setActiveTab("appearance")}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl text-xs md:text-sm font-bold transition-all text-left ${
                activeTab === "appearance"
                  ? "bg-[#081B4B] text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-100 hover:text-[#0F172A]"
              }`}
            >
              <Palette className="w-4 h-4" />
              Appearance
            </button>

            <button
              onClick={() => setActiveTab("accessibility")}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl text-xs md:text-sm font-bold transition-all text-left ${
                activeTab === "accessibility"
                  ? "bg-[#081B4B] text-white shadow-md"
                  : "text-slate-500 hover:bg-slate-100 hover:text-[#0F172A]"
              }`}
            >
              <Accessibility className="w-4 h-4" />
              Accessibility
            </button>
          </div>
        </div>

        {/* Right Side: Preference Panel Mock (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[24px] p-6 md:p-8 shadow-sm space-y-8">
          {activeTab === "appearance" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Theme Selector Block (7 Cols) */}
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-[#0F172A]">
                    Interface Theme
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Light Theme Option */}
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex flex-col items-center gap-3 p-3 rounded-xl border text-center transition-all ${
                        theme === "light"
                          ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/10 bg-white"
                          : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-full aspect-[1.5/1] rounded-lg bg-white border border-slate-200 shadow-xs" />
                      <span className="text-[10px] font-bold text-[#0F172A]">
                        Light
                      </span>
                    </button>

                    {/* Dark Theme Option */}
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex flex-col items-center gap-3 p-3 rounded-xl border text-center transition-all ${
                        theme === "dark"
                          ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/10 bg-white"
                          : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-full aspect-[1.5/1] rounded-lg bg-slate-950 border border-slate-800 shadow-xs" />
                      <span className="text-[10px] font-bold text-[#0F172A]">
                        Dark
                      </span>
                    </button>

                    {/* System Theme Option */}
                    <button
                      onClick={() => setTheme("system")}
                      className={`flex flex-col items-center gap-3 p-3 rounded-xl border text-center transition-all ${
                        theme === "system"
                          ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/10 bg-white"
                          : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div className="w-full aspect-[1.5/1] rounded-lg bg-gradient-to-r from-white to-slate-900 border border-slate-200 shadow-xs" />
                      <span className="text-[10px] font-bold text-[#0F172A]">
                        System
                      </span>
                    </button>
                  </div>
                </div>

                {/* Density Selector Block (5 Cols) */}
                <div className="md:col-span-5 space-y-4">
                  <span className="text-xs font-bold text-[#0F172A]">
                    Display Density
                  </span>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="density"
                        checked={density === "compact"}
                        onChange={() => setDensity("compact")}
                        className="w-4 h-4 text-[#4F46E5] border-slate-300 focus:ring-[#4F46E5]"
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                          Compact
                        </span>
                        <p className="text-[10px] text-slate-400 font-medium">
                          Recommended for Admins
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="density"
                        checked={density === "comfortable"}
                        onChange={() => setDensity("comfortable")}
                        className="w-4 h-4 text-[#4F46E5] border-slate-300 focus:ring-[#4F46E5]"
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                          Comfortable
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="border-t border-slate-100 pt-6 flex items-center justify-end gap-4">
                <button
                  onClick={() => {
                    setTheme("light");
                    setDensity("compact");
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Discard Changes
                </button>
                <button className="bg-black hover:bg-slate-900 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl transition-all shadow-md">
                  Save Preferences
                </button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs font-medium">
              Interactive layout for settings profile views.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
