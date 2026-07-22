"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { BarChart3, HelpCircle, ChevronDown, Headphones, Download, Eye } from 'lucide-react';

export default function AnalyticsAndSupportPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden">
      <AnalyticsInsightsSection />
      <SupportFaqSection />
      <DownloadCtaSection />
    </div>
  );
}

// ============================================================================
// SECTION 1: Download Analytics & Insights (Split Dashboard View)
// ============================================================================
function AnalyticsInsightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className={`w-full py-20 lg:py-24 px-4 sm:px-8 lg:px-24 bg-white dark:bg-slate-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Core Text Metrics Content Info */}
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-3">
            <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-semibold    leading-tight tracking-tight">
              Download Analytics & Insights
            </h2>
            <p className="text-zinc-700 dark:text-gray-300 text-base font-normal    leading-relaxed max-w-xl">
              Real-time visibility into software adoption across your enterprise. Track success rates, platform distribution, and version compliance from a single source of truth.
            </p>
          </div>

          {/* Metric Bar Anchors */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-6 group">
              <div className="w-2 h-14 bg-indigo-700 rounded-full shrink-0 group-hover:scale-y-110 transition-transform duration-300" />
              <div className="space-y-0.5">
                <h4 className="text-zinc-900 dark:text-white text-xl font-bold   ">
                  99.8% Success Rate
                </h4>
                <p className="text-zinc-700 dark:text-gray-400 text-base font-normal   ">
                  Global installation success across all platforms.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-2 h-14 bg-black dark:bg-white rounded-full shrink-0 group-hover:scale-y-110 transition-transform duration-300" />
              <div className="space-y-0.5">
                <h4 className="text-zinc-900 dark:text-white text-xl font-bold   ">
                  Rapid Adoption
                </h4>
                <p className="text-zinc-700 dark:text-gray-400 text-base font-normal   ">
                  72% of users migrated to v2.4.0 within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Metric Graphic Panel */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[568px] aspect-[16/9] bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl group border border-transparent dark:border-slate-800">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              src="/download/Image1 (3).png" 
              alt="Zoiko Sema operational telemetry distribution curves line matrix interactive component asset layout" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2: Support & Frequently Asked Questions (Split UI Grid Layout)
// ============================================================================
function SupportFaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    "What are the system requirements for Windows?",
    "How do I perform an enterprise-wide rollout?"
  ];

  return (
    <section 
      ref={ref}
      className={`w-full py-20 lg:py-24 px-4 sm:px-8 lg:px-20 bg-violet-50 dark:bg-slate-950 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-10 space-y-16">
        
        {/* Section Heading Text Matrix */}
        <div className="w-full text-center space-y-3">
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-semibold    leading-tight tracking-tight">
            Support & Frequently Asked Questions
          </h2>
          <p className="text-zinc-700 dark:text-gray-400 text-base font-normal   ">
            Everything you need to know about deploying and using Zoiko Sema.
          </p>
        </div>

        {/* Content Action Split Segment */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* FAQ Accordion Accordance Block */}
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="w-full p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-[6px] rounded-xl shadow-[0px_4px_20px_0px_rgba(10,17,40,0.03)] border border-slate-950/[0.05] dark:border-slate-800/80 flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
              >
                <span className="text-black dark:text-white text-base font-bold    leading-snug">
                  {faq}
                </span>
                <ChevronDown className="size-4 text-black dark:text-gray-400 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            ))}
          </div>

          {/* Interactive Support Workspace Box Frame */}
          <div className="w-full p-10 sm:p-14 bg-slate-900 dark:bg-slate-900 rounded-xl relative overflow-hidden flex flex-col justify-start items-start gap-4 shadow-2xl group border border-transparent dark:border-slate-800">
            <div className="space-y-2 relative z-10">
              <h3 className="text-white text-xl font-semibold   ">
                Need technical assistance?
              </h3>
              <p className="text-slate-400 dark:text-gray-400 text-base font-normal    leading-relaxed max-w-sm">
                Our support engineering team is available 24/7 for enterprise customers.
              </p>
            </div>

            <Link
  href="/contact"
  className="inline-flex items-center justify-center px-6 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white text-base font-bold rounded-lg transition-all shadow-sm active:scale-95 z-10 cursor-pointer"
>
  Contact Support
</Link>

            {/* Background Decorative Matrix Vector Graphic Context */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 dark:opacity-[0.05] text-slate-500 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
              <Headphones className="size-36 stroke-[1px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: App Platform Download Call-To-Action (Hero Banner Elements)
// ============================================================================
function DownloadCtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className={`w-full py-24 px-4 sm:px-8 lg:px-20 bg-white dark:bg-slate-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-0 sm:px-4 lg:px-10 text-center flex flex-col items-center gap-6">
        
        {/* Main Content Cluster */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold    leading-tight tracking-tight">
            Download the approved Zoiko Sema app for your platform.
          </h1>
          <p className="text-zinc-700 dark:text-gray-300 text-base font-normal    leading-relaxed max-w-2xl mx-auto">
            Join over 5,000 enterprises who rely on Zoiko Sema for secure, seamless communication. Get started today with a unified experience across all devices.
          </p>
        </div>

        {/* Action Button Set Components */}
        <div className="pt-8 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          <button className="w-full sm:w-auto px-12 py-4 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold    text-base rounded-lg flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download Now</span>
          </button>
          
          <button className="w-full sm:w-auto px-12 py-4 border border-neutral-300 dark:border-slate-700 text-zinc-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-slate-800 font-semibold    text-base rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
            <Eye className="size-4 transition-opacity group-hover:opacity-80" />
            <span>View All Versions</span>
          </button>

        </div>

      </div>
    </section>
  );
}