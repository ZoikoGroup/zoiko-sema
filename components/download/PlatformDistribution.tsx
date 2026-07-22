"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Download } from 'lucide-react';

export default function PlatformDistribution() {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer to handle page-scroll reveal transformations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: "Windows",
      description: "Universal .msi installer with enterprise GPO support.",
      badge: "LATEST",
      badgeType: "latest",
      icon: "/download/Image1 (11).png",
      iconColor: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400",
      buttonText: "Download",
      buttonStyle: "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100",
      specs: [
        { label: "Version", value: "2.4.0.122" },
        { label: "Build", value: "x64 / x86" },
        { label: "File Size", value: "184.2 MB" },
        { label: "Publisher", value: "Zoiko Sema Corp" }
      ]
    },
    {
      name: "macOS",
      description: "Optimized for Apple Silicon and Intel-based Macs.",
      badge: "DETECTED",
      badgeType: "detected",
      icon: "/download/Image1 (12).png",
      iconColor: "text-slate-800 bg-slate-50 dark:bg-slate-800 dark:text-slate-200",
      isHighlightedCard: true,
      buttonText: "Download for macOS",
      buttonStyle: "bg-indigo-700 text-white hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-500",
      specs: [
        { label: "Version", value: "2.4.0-arm64" },
        { label: "Build", value: "Universal Binary" },
        { label: "File Size", value: "192.5 MB" },
        { label: "Publisher", value: "Zoiko Sema Corp" }
      ]
    },
    {
      name: "Android",
      description: "Native mobile experience for phone and tablet.",
      icon: "/download/Image1 (13).png",
      iconColor: "text-green-600 bg-green-50 dark:bg-green-950/40 dark:text-green-400",
      buttonText: "Get from Play Store",
      buttonStyle: "bg-transparent text-zinc-900 border border-neutral-300 dark:text-white dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-gray-800",
      specs: [
        { label: "Version", value: "2.3.8 (Stable)" },
        { label: "Platform", value: "Google Play Store" },
        { label: "File Size", value: "48.2 MB" },
        { label: "OS Requirement", value: "Android 10.0+" }
      ]
    },
    {
      name: "iPhone / iPad",
      description: "Seamless communication on the go for iOS.",
      icon: "/download/Image1 (14).png",
      iconColor: "text-zinc-900 bg-neutral-50 dark:bg-gray-800 dark:text-gray-200",
      buttonText: "Get from App Store",
      buttonStyle: "bg-transparent text-zinc-900 border border-neutral-300 dark:text-white dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-gray-800",
      specs: [
        { label: "Version", value: "2.3.9" },
        { label: "Platform", value: "Apple App Store" },
        { label: "File Size", value: "54.1 MB" },
        { label: "OS Requirement", value: "iOS 16.0+" }
      ]
    },
    {
      name: "Linux",
      description: "Debian, RPM, and AppImage formats supported.",
      icon: "/download/Image1 (15).png",
      iconColor: "text-orange-600 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-400",
      buttonText: "View All Formats",
      buttonStyle: "bg-transparent text-zinc-900 border border-neutral-300 dark:text-white dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-gray-800",
      specs: [
        { label: "Version", value: "2.4.0 (Stable)" },
        { label: "Format", value: ".deb / .rpm / .sh" },
        { label: "File Size", value: "112.9 MB" },
        { label: "Distro", value: "Ubuntu/CentOS/Fedora" }
      ]
    },
    {
      name: "Browser",
      description: "Zero-installation web client for instant access.",
      icon: "/download/Image1 (16).png",
      iconColor: "text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400",
      buttonText: "Launch Workspace",
      buttonStyle: "bg-zinc-200 text-black hover:bg-zinc-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
      specs: [
        { label: "Platform", value: "Web Workspace" },
        { label: "Technology", value: "WebAssembly / WebRTC" },
        { label: "Security", value: "E2EE Certified" },
        { label: "Browser", value: "Chrome/Edge/Safari" }
      ]
    }
  ];

  return (
    <section
      ref={containerRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-violet-50 dark:bg-gray-950 transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="w-full text-left">
          <h2 className="text-black dark:text-white text-3xl font-semibold leading-tight tracking-tight">
            Platform Distribution
          </h2>
        </div>

        {/* 3-Column Responsive Grid Matrix */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => {
            return (
              <div
                key={idx}
                className={`p-8 sm:p-10 bg-white/70 dark:bg-gray-950/60 backdrop-blur-[6px] rounded-xl shadow-[0px_4px_20px_0px_rgba(10,17,40,0.03)] flex flex-col justify-between items-stretch gap-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group border ${
                  platform.isHighlightedCard 
                    ? 'border-indigo-700/30 dark:border-indigo-500/50 ring-1 ring-indigo-700/10' 
                    : 'border-slate-950/[0.05] dark:border-slate-800/80'
                }`}
              >
                <div>
                  {/* Card Header Content Row */}
                  <div className="w-full flex items-center justify-between pb-6">
                    <div className={`size-14 rounded-lg flex justify-center items-center shrink-0 ${platform.iconColor}`}>
                      <img className="size-6 object-contain" src={platform.icon} alt={`${platform.name} icon`} />
                    </div>
                    
                    {platform.badge && (
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        platform.badgeType === 'latest' 
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400' 
                          : 'bg-green-100 text-green-800 dark:bg-green-950/60 dark:text-green-400'
                      }`}>
                        {platform.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Architecture Copy Context */}
                  <div className="space-y-2">
                    <h3 className="text-zinc-900 dark:text-white text-xl font-semibold tracking-tight">
                      {platform.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm font-normal leading-relaxed min-h-[40px]">
                      {platform.description}
                    </p>
                  </div>

                  {/* Dynamic Technical Specs Meta Matrix */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-900 space-y-2.5">
                    {platform.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="w-full flex items-start justify-between text-sm font-sans">
                        <span className="text-zinc-500 dark:text-gray-400 font-normal">
                          {spec.label}
                        </span>
                        <span className="text-zinc-900 dark:text-gray-200 font-medium text-right max-w-[65%] whitespace-pre-line leading-tight">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Installation Interactive Action Element */}
                <button className={`w-full py-3 rounded-lg text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 group-hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${platform.buttonStyle}`}>
                  <Download className="size-4 shrink-0 transition-transform group-hover:translate-y-0.5" />
                  <span>{platform.buttonText}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}