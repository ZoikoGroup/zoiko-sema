"use client";

import React, { useEffect, useState, useRef } from 'react';
import { AlertTriangle, HelpCircle, ShieldAlert, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PATHS = [
  {
    icon:"/status/Icon.png",
    bgIcon: 'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400',
    tag: 'If you see',
    title: 'Active incident affecting your component',
    desc: 'Incident detail page',
    action: 'View active incidents',
    href: '#incidents',
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    icon: "/status/Icon (1).png",
    bgIcon: 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400',
    tag: 'If you see',
    title: 'Issue not listed in known incidents',
    desc: 'Help Center + Support form',
    action: 'Contact support',
    href: '/customer-support',
    color: 'text-sky-700 dark:text-sky-400'
  },
  {
    icon: "/status/Icon (2).png",
    bgIcon: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
    tag: 'If you see',
    title: 'Admin needing org-level impact info',
    desc: 'Enterprise admin support',
    action: 'Contact admin support',
    href: '/customer-support',
    color: 'text-violet-600 dark:text-violet-400'
  },
  {
    icon:"/status/Icon (3).png",
    bgIcon: 'bg-emerald-50 dark:bg-emerald-950/40 text-green-600 dark:text-green-400',
    tag: 'If you see',
    title: 'Developer seeing API degradation',
    desc: 'API status + Developer Docs',
    action: 'View API status',
    href: '/developer-docs',
    color: 'text-green-600 dark:text-green-400'
  }
];

export default function SupportRouting() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setRevealed(true), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Headers */}
        <div className={`text-center space-y-3 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider block">Support Routing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Find the right path quickly</h2>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-2xl mx-auto">System Status is not a replacement for support — it's a first check before you file a ticket.</p>
        </div>

        {/* Custom Card Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATHS.map((path, idx) => {
            const Icon = path.icon;
            return (
              <div 
                key={idx}
                className={`p-6 bg-white dark:bg-slate-950 border border-violet-100 dark:border-slate-800 rounded-2xl flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl/20 hover:-translate-y-1.5 transition-all duration-300 transform ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${path.bgIcon}`}>
                    <img className="w-5 h-5" src={path.icon} />
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-tight block mb-1">
                    {path.tag}
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-sm font-semibold leading-snug mb-2">
                    {path.title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-xs mb-6">
                    {path.desc}
                  </p>
                </div>

                <Link href={path.href} className={`flex items-center gap-1.5 text-sm font-bold border-t border-slate-50 dark:border-slate-900 pt-4 w-full group ${path.color}`}>
                  <span>{path.action}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Hero Bottom Asset Slot */}
        <div className={`relative w-full h-64 bg-slate-900 rounded-3xl overflow-hidden shadow-md transition-all duration-1000 delay-300 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <img src="/status/image 148.png" alt="Infrastructure tracking map diagram" className="w-full h-full object-cover opacity-80" />
        </div>

      </div>
    </section>
  );
}