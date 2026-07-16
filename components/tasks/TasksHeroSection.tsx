"use client";

import React from 'react';
import { ArrowRight, SlidersHorizontal, Plus,Check } from 'lucide-react';

export default function PlatformHeroSection() {
  return (
    <section className="w-full min-h-[700px] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Configured exactly to the Figma spec markup */}
        <div className="lg:col-span-6 w-full max-w-[548px] flex flex-col justify-start items-start gap-6">
          
          {/* Tagline Badge */}
          <div className="w-40 h-8 relative bg-blue-600/20 rounded-full outline outline-[1.27px] outline-offset-[-1.27px] outline-blue-600/30 flex items-center pl-[17.27px]">
            <div className="size-2.5 relative overflow-hidden shrink-0">
              <div className="size-2 left-[1.25px] top-[1.25px] absolute outline outline-[0.83px] outline-offset-[-0.42px] outline-blue-600"></div>
              <div className="w-1.5 h-1 left-[3.75px] top-[1.67px] absolute outline outline-[0.83px] outline-offset-[-0.42px] outline-blue-600"></div>
            </div>
            <span className="ml-2 text-blue-600 text-xs font-bold   uppercase tracking-wide leading-4">
              Tasks & To-dos
            </span>
          </div>

          {/* Heading */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <h1 className="w-full text-white text-4xl sm:text-5xl font-bold   leading-tight sm:leading-[59.40px]">
              Turn communication into owned work.
            </h1>
          </div>

          {/* Context Description */}
          <div className="w-full max-w-[500px] flex flex-col justify-start items-start">
            <p className="text-slate-400 text-base font-normal   leading-7">
              Create, assign, prioritize, date, and complete tasks while preserving the message, meeting, decision, or document that created them.
            </p>
          </div>

          {/* Feature Badge Grid / Inline Tags */}
          <div className="w-full sm:w-[548.01px] flex flex-wrap gap-x-4 gap-y-2 relative">
            {[
              "Source-linked work",
              "Clear owners & due dates",
              "Governed AI suggestions"
            ].map((text, idx) => (
              <div 
                key={idx} 
                className="px-3 py-1.5 bg-white/5 rounded-full outline outline-[1.27px] outline-offset-[-1.27px] outline-white/10 inline-flex justify-start items-center gap-1.5"
              >
                <div className="size-2.5 relative overflow-hidden flex items-center justify-center">
            <Check className="size-3 text-blue-600 transition-transform group-hover:translate-x-0.5" />

                </div>
                <span className="text-white/70 text-xs font-semibold   leading-4">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Action Call to Actions */}
          <div className="w-full sm:w-[548px] pt-1 inline-flex flex-col sm:flex-row justify-start items-start gap-3">
            <button className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all rounded-full shadow-[0px_10px_24px_0px_rgba(52,87,232,0.30)] flex flex-col justify-center items-center cursor-pointer">
              <span className="text-center text-white text-sm font-bold   leading-5">
                Start free
              </span>
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 active:scale-98 transition-all rounded-full outline outline-[1.27px] outline-offset-[-1.27px] outline-white/20 flex flex-col justify-center items-center cursor-pointer">
              <span className="text-center text-white text-sm font-semibold   leading-5">
                Get a demo
              </span>
            </button>
          </div>

          {/* Text Navigation Anchor Link */}
          <div className="w-full sm:w-[548px] h-6 pt-1 inline-flex justify-start items-center gap-1.5 cursor-pointer group">
            <span className="text-blue-600 text-xs font-semibold   leading-5 group-hover:underline">
              See how source-linked tasks work
            </span>
            <ArrowRight className="size-3 text-blue-600 transition-transform group-hover:translate-x-0.5" />
          </div>

          {/* Fine Print Footer Context */}
          <div className="w-full max-w-[480px] flex flex-col justify-start items-start pt-2">
            <p className="text-white/30 text-xs font-normal   leading-4">
              Task visibility, source access, AI suggestions, guests, retention, and exports follow workspace and organizational policy.
            </p>
          </div>
          
        </div>
{/* Right Column: Platform Dashboard Preview Card with New Shared App Header */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="relative w-full max-w-[545.45px] rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Added: Custom App Windows Control Header Bar */}
            <div className="w-full h-12 px-4 py-3 bg-slate-900/40 border-b border-white/5 backdrop-blur-[50px] inline-flex justify-start items-center gap-2 z-10 select-none">
              {/* Window Controls Dots */}
              <div className="flex justify-start items-start gap-1.5">
                <div className="size-2.5 bg-red-400 rounded-full"></div>
                <div className="size-2.5 bg-amber-400 rounded-full"></div>
                <div className="size-2.5 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Context Label */}
              <div className="pl-2 flex flex-col justify-start items-start">
                <div className="text-white/40 text-xs font-semibold font-['Plus_Jakarta_Sans'] leading-4 whitespace-nowrap">
                  My Work — Today
                </div>
              </div>
              
              {/* Header Right Interactions */}
              <div className="flex-1 flex justify-end items-center gap-2">
                {/* Filters Action Pill */}
                <div className="px-2.5 py-0.5 bg-blue-600/10 rounded-full border border-blue-600/30 inline-flex items-center gap-1 cursor-pointer hover:bg-blue-600/20 transition-all">
                  <SlidersHorizontal className="size-2 text-blue-600" />
                  <span className="text-blue-600 text-[10px] font-semibold font-['Plus_Jakarta_Sans'] leading-4">
                    Filters
                  </span>
                </div>
                
                {/* New Task Action Pill */}
                <div className="px-2.5 py-0.5 bg-white/10 rounded-full inline-flex items-center gap-1 cursor-pointer hover:bg-white/15 transition-all">
                  <Plus className="size-2 text-white/60" />
                  <span className="text-white/60 text-[10px] font-semibold font-['Plus_Jakarta_Sans'] leading-4">
                    New task
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard Workspace Mockup Presentation Layer */}
            <div className="aspect-[4/3] w-full bg-slate-950 relative overflow-hidden group">
              <img 
                src="/tasks-todo/image 157.png" 
                alt="Zoiko Sema task workspace presentation mockup view"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-transparent pointer-events-none" />
            </div>

        </div>
        </div>
        

      </div>
    </section>
  );
}