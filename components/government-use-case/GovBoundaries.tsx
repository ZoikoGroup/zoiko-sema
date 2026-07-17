import React from 'react';

export const GovBoundaries = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[773.73px] relative flex-shrink-0 bg-white">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-[450px] h-5 left-[495px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            SYSTEM-OF-RECORD AND AUTHORIZATION BOUNDARIES
          </div>
          
          {/* Headline */}
          <div className="w-[640px] h-20 left-[400px] top-[120.79px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Sema coordinates work. Your records and<br/>case systems stay authoritative.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.98px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1136px] h-[757px] left-[0.10px] top-[-134.80px] absolute object-cover" src="/use-case-government/workflow-map.png" alt="Collaborative meeting talking" />
              </div>
          </div>
          
          {/* Disclaimer Box */}
          <div className="w-[1136px] h-20 left-[152px] top-[601.54px] absolute bg-violet-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 flex items-center px-6">
              <div className="text-gray-700 text-sm font-normal font-inter leading-6">
                Zoiko Sema does not position for classified information, law-enforcement evidence, election administration, emergency dispatch, public-benefit eligibility,<br/>
                enforcement, or legal decisions without a separately approved product and deployment.
              </div>
          </div>
      </div>
    </section>
  );
};
