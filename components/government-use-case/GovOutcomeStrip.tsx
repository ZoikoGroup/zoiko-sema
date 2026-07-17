import React from 'react';

export const GovOutcomeStrip = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[669.55px] relative flex-shrink-0 bg-white">
          <div className="w-1.5 h-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-32 h-5 left-[659.10px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            OUTCOME STRIP
          </div>
          
          {/* Headline */}
          <div className="w-[587.31px] h-20 left-[426.10px] top-[120.79px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Coordinated mission work, accessible<br/>communication, accountable handoffs.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.98px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1136px] h-[757px] left-[0.10px] top-[-116.72px] absolute object-cover" src="/use-case-government/governance-accessibility.png" alt="Coordinated mission work and presentation" />
              </div>
          </div>
      </div>
    </section>
  );
};
