import React from 'react';

export const GovWorkflowMap = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[809.81px] relative flex-shrink-0 bg-white">
          <div className="size-1.5 left-[152px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-32 h-5 left-[658.10px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            WORKFLOW MAP
          </div>
          
          {/* Headline */}
          <div className="w-[700px] h-20 left-[370px] top-[120.79px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Handoff, briefing, records, and<br/>contractor lifecycles.
          </div>
          
          {/* Main Image Container */}
          <div className="w-[1136px] h-80 left-[152px] top-[248.99px] absolute rounded-[20px] overflow-hidden">
              <div className="w-[1136px] h-80 left-0 top-0 absolute overflow-hidden">
                  <img className="w-[1208px] h-[678px] left-[-40.90px] top-[-100.38px] absolute object-cover" src="/use-case-government/integrations-reporting.png" alt="Courthouse facade illustration" />
              </div>
          </div>
          
          {/* Step 1 */}
          <div className="w-52 h-32 left-[152px] top-[601.55px] absolute bg-white rounded-[20px] border-2 border-slate-200 p-[22px] flex flex-col justify-between">
              <div className="w-7 h-7 bg-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-extrabold font-inter">1</span>
              </div>
              <div className="text-slate-900 text-xs font-bold font-inter leading-6">Update posted</div>
          </div>
          
          {/* Step 2 */}
          <div className="w-52 h-32 left-[383.19px] top-[601.55px] absolute bg-white rounded-[20px] border-2 border-slate-200 p-[22px] flex flex-col justify-between">
              <div className="w-7 h-7 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-extrabold font-inter">2</span>
              </div>
              <div className="text-slate-900 text-xs font-bold font-inter leading-6">Handoff created</div>
          </div>
          
          {/* Step 3 */}
          <div className="w-52 h-32 left-[614.39px] top-[601.55px] absolute bg-white rounded-[20px] border-2 border-slate-200 p-[22px] flex flex-col justify-between">
              <div className="w-7 h-7 bg-teal-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-extrabold font-inter">3</span>
              </div>
              <div className="text-slate-900 text-xs font-bold font-inter leading-6">Accepted & retention</div>
          </div>
          
          {/* Step 4 */}
          <div className="w-52 h-32 left-[845.59px] top-[601.55px] absolute bg-white rounded-[20px] border-2 border-slate-200 p-[22px] flex flex-col justify-between">
              <div className="w-7 h-7 bg-yellow-700 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-extrabold font-inter">4</span>
              </div>
              <div className="text-slate-900 text-xs font-bold font-inter leading-6">Reviewed & classified</div>
          </div>
          
          {/* Step 5 */}
          <div className="w-52 h-32 left-[1076.80px] top-[601.55px] absolute bg-white rounded-[20px] border-2 border-slate-200 p-[22px] flex flex-col justify-between">
              <div className="w-7 h-7 bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-extrabold font-inter">5</span>
              </div>
              <div className="text-slate-900 text-xs font-bold font-inter leading-6">Recorded & audited</div>
          </div>
      </div>
    </section>
  );
};
