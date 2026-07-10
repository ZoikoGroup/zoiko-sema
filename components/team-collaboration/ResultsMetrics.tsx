import React from 'react';

interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export default function ResultsMetrics() {
  const stats: StatItem[] = [
    {
      value: '3.2x',
      label: 'Faster response time',
      subtext: 'across active team channels',
    },
    {
      value: '48%',
      label: 'Fewer status meetings',
      subtext: 'as coordination moves to shared spaces',
    },
    {
      value: '99.9%',
      label: 'Uptime target',
      subtext: 'with enterprise-grade support',
    },
  ];

  return (
    <section className="w-full bg-indigo-600 py-16 md:py-14 overflow-hidden  antialiased text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        
        {/* Header Typography Block */}
        <div className="w-full text-center flex flex-col items-center space-y-3 max-w-[720px]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-9   ">
            Results teams feel in the first weeks
          </h2>
          <p className="text-base text-indigo-100 font-normal leading-6   ">
            Less time chasing status, more time moving work forward — with governance built in.
          </p>
        </div>

        {/* Core Statistical Metrics Row Layout */}
        <div className="w-full max-w-[820px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-center items-start pt-2">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="w-full flex flex-col items-center text-center space-y-2 group"
            >
              {/* Metric Hero Number */}
              <div className="text-5xl font-extrabold tracking-tight text-white leading-none    transition-transform duration-200 group-hover:scale-105">
                {stat.value}
              </div>
              
              {/* Context Label Text Elements */}
              <div className="space-y-1">
                <div className="text-indigo-50 text-sm font-semibold leading-5   ">
                  {stat.label}
                </div>
                <div className="text-indigo-200 text-xs font-normal leading-5    max-w-[200px] mx-auto">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}