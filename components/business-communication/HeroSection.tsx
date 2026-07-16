'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

// ── Intersection observer hook for scroll-triggered activation ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── CountUp Component for animated metrics ──
function CountUp({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function HeroSection() {
  const { ref: heroRef, inView: heroInView } = useInView(0.1);
  const router = useRouter();

  return (
    <>
      <style>{`
        /* ── Scroll Reveal Entrance Keyframes ── */
        @keyframes hrFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hr-hidden  { opacity: 0; transform: translateY(40px); }
        .hr-visible { animation: hrFadeUp .75s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .hr-hidden, .hr-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section 
        ref={heroRef}
        className="w-full relative bg-indigo-50 dark:bg-slate-950 py-16 md:py-24 lg:py-32 overflow-hidden font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300"
      >
        {/* Violet Radial Ambient Backdrop Glow */}
        <div className="absolute right-0 top-12 size-[400px] md:size-[600px] bg-radial from-violet-200/50 dark:from-indigo-900/30 to-transparent pointer-events-none rounded-full blur-3xl z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block Column Area */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Upper Badge Tag */}
            <div 
              className={`inline-flex items-center px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm hr-hidden ${
                heroInView ? "hr-visible" : ""
              }`}
              style={{ animationDelay: "0.05s" }}
            >
              <span className="text-[11px] font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                Business Communication
              </span>
            </div>

            {/* Main Catchy Header H1 */}
            <h1 
              className={`text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] hr-hidden ${
                heroInView ? "hr-visible" : ""
              }`}
              style={{ animationDelay: "0.15s" }}
            >
              Organized, governed, actionable{' '}
              <span className="text-indigo-600 dark:text-indigo-400 bg-clip-text">
                business communication
              </span>
              .
            </h1>

            {/* Paragraph Explainer Block */}
            <p 
              className={`text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[540px] hr-hidden ${
                heroInView ? "hr-visible" : ""
              }`}
              style={{ animationDelay: "0.25s" }}
            >
              Bring messaging, meetings, channels, AI summaries, workflows, and secure collaboration into one workspace built for modern teams and growing organizations.
            </p>

            {/* Interactive Call To Action Row */}
            <div 
              className={`flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto hr-hidden ${
                heroInView ? "hr-visible" : ""
              }`}
              style={{ animationDelay: "0.35s" }}
            >
              <button onClick={()=>router.push('/get-a-demo')}
              className="group relative px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-base rounded-full shadow-[0px_10px_24px_-8px_rgba(79,70,229,0.50)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2">
                <span>Get a demo</span>
                
              </button>

              <button onClick={()=>router.push('/start-free')}
              className="px-7 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-base rounded-full border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5">
                Start free
              </button>
            </div>

            {/* Trust and Social Proof Marks Banner */}
            <div 
              className={`pt-12 space-y-4 w-full hr-hidden ${
                heroInView ? "hr-visible" : ""
              }`}
              style={{ animationDelay: "0.45s" }}
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Trusted by growing teams at
              </h2>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-400 dark:text-slate-600 text-sm font-extrabold tracking-wider">
                <span className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200">NORTHWIND</span>
                <span className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200">CASCADE HEALTH</span>
                <span className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200">ARBOR FINANCIAL</span>
                <span className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200">VANTAGE</span>
              </div>
            </div>

          </div>

          {/* Right Product Showcase Panel Area */}
          <div 
            className={`lg:col-span-6 relative flex flex-col justify-center items-center w-full hr-hidden ${
              heroInView ? "hr-visible" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Main Application Interface Preview Screen */}
            <div className="relative w-full max-w-[650px] aspect-[1.06] rounded-2xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.02]"
                src="/buisness-communication/image 28.png" 
                alt="Zoiko Sema Workspace Platform Panel Overview" 
              />
              
             
            </div>

           

          </div>

        </div>
      </section>
    </>
  );
}