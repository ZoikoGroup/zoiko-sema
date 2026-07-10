import React from 'react';

interface MetricStat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function TestimonialMetrics() {
  const metrics: MetricStat[] = [
    {
      value: '3.2x',
      label: 'Faster response time',
      icon: (
        <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '48%',
      label: 'Fewer status meetings',
      icon: (
                <img className='w-5 h-5'  src="/TeamCollaboration/Frame (15).png"/>

      )
    },
    {
      value: '99.9%',
      label: 'Uptime target',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (16).png"/>
      )
    }
  ];

  return (
    <section className="w-full bg-indigo-600 py-16 md:py-20 text-white font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Hand: Testimonial Block Quote */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-200 block font-['Inter']">
            What teams say
          </span>
          
          <div className="relative">
            <span className="absolute -left-2 -top-6 text-7xl font-bold font-['Plus_Jakarta_Sans'] text-white/30 pointer-events-none select-none">
              “
            </span>
            <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-relaxed font-['Plus_Jakarta_Sans'] pl-4">
              We stopped losing decisions in scattered threads. Conversations, meetings, files, and follow-ups now live in one governed space — and our teams move faster with less back-and-forth.
            </blockquote>
          </div>

          <div className="flex items-center gap-3 pt-2 pl-4">
            <img 
              className="size-12 rounded-full border-2 border-white/40 object-cover" 
              src="/TeamCollaboration/div.png" 
              alt="Priya Nair" 
            />
            <div className="flex flex-col">
              <span className="text-base font-bold font-['Inter'] text-white leading-snug">
                Priya Nair
              </span>
              <span className="text-sm font-normal font-['Inter'] text-indigo-100/80">
                VP of Operations · Northwind Labs
              </span>
            </div>
          </div>
        </div>

        {/* Right Hand: Context Sidecard Metrics Column */}
        <div className="lg:col-span-5 w-full flex flex-col space-y-3.5">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="w-full px-5 py-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-[2px] flex items-center gap-4 hover:bg-white/15 transition-colors duration-150"
            >
              {/* Shield Plate SVG Frame */}
              <div className="size-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                {metric.icon}
              </div>
              
              {/* Info Frame blocks */}
              <div className="flex flex-col justify-start items-start">
                <div className="text-2xl font-extrabold  leading-7 text-white">
                  {metric.value}
                </div>
                <div className="text-xs font-normal leading-5 text-indigo-100">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}