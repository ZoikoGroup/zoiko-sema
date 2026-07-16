"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Download, Monitor } from 'lucide-react';

export default function DownloadSection() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer to trigger the float-up animation when viewable
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 px-4 sm:px-8 lg:px-16 bg-violet-50 dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-start gap-12">
        
        {/* Text and CTA Content Block */}
        <div className="max-w-[768px] w-full text-center flex flex-col items-center gap-6">
          <h1 className="text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold   leading-tight tracking-tight">
            Download Zoiko Sema for every<br className="hidden sm:inline" /> approved device.
          </h1>
          
          <p className="text-zinc-700 dark:text-gray-300 text-sm sm:text-base font-normal   leading-relaxed max-w-2xl">
            Choose the recommended app for your platform or continue securely in your browser with our unified enterprise interface.
          </p>
          
          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-base font-bold   rounded-lg inline-flex justify-center items-center gap-2 shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:-translate-y-0.5 transition-all cursor-pointer group">
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              <span>Download Now</span>
            </button>
            
            <button className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-gray-800 text-black dark:text-white text-base font-semibold   rounded-lg border border-neutral-300/50 dark:border-neutral-700 inline-flex justify-center items-center gap-2 shadow-sm hover:bg-neutral-50 dark:hover:bg-gray-700 hover:-translate-y-0.5 transition-all cursor-pointer">
              <Monitor className="size-4" />
              <span>Continue in Browser</span>
            </button>
          </div>
        </div>

        {/* Product Showcase Image Frame */}
        <div className="w-full max-w-[1024px] rounded-xl overflow-hidden shadow-2xl border border-neutral-300/20 dark:border-neutral-800/60 bg-white dark:bg-gray-800 group">
          <img 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]" 
            src="/download/Image1 (4).png" 
            alt="Zoiko Sema unified multi-platform interface workspace presentation application mockup" 
          />
        </div>

      </div>
    </section>
  );
}