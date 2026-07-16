import React from 'react';

export const ProjectManagementMeetingsSection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[793px] relative flex-shrink-0">
          <div className="w-44 h-4 left-[633.71px] top-[83.20px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter tracking-wider">
            MEETINGS & DECISIONS
          </div>
          <div className="w-[782.73px] h-11 left-[328.81px] top-[113.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Project meetings become reviewed outcomes.
          </div>
          
          {/* Callout box */}
          <div className="w-[809.60px] h-20 left-[315.20px] top-[330.40px] absolute bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-center px-[24.80px]">
              <div className="text-slate-600 text-sm font-normal font-inter leading-5">
                <span className="text-slate-900 text-sm font-bold font-inter">Human-review lock:</span> AI-generated project recaps do not change milestones, budgets, scope, or commitments until an
              </div>
              <div className="text-slate-600 text-sm font-normal font-inter leading-5">
                authorized person reviews and confirms the output.
              </div>
          </div>
          
          {/* Timeline connecting line */}
          <div className="w-[760px] h-0.5 left-[339.60px] top-[229.60px] absolute bg-violet-100"></div>
          
          {/* Step 1 */}
          <div className="w-12 h-12 left-[315.60px] top-[207.60px] absolute bg-blue-600/10 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-blue-600 text-base font-extrabold font-plus-jakarta">1</span>
          </div>
          <div className="w-20 h-4 left-[299.60px] top-[270.40px] absolute text-center justify-center text-slate-900 text-xs font-bold font-inter">Meeting</div>
          
          {/* Step 2 */}
          <div className="w-12 h-12 left-[505.60px] top-[207.60px] absolute bg-violet-600/10 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-violet-600 text-base font-extrabold font-plus-jakarta">2</span>
          </div>
          <div className="w-24 h-4 left-[489.60px] top-[270.40px] absolute text-center justify-center text-slate-900 text-xs font-bold font-inter">Draft recap</div>
          
          {/* Step 3 */}
          <div className="w-12 h-12 left-[695.60px] top-[207.60px] absolute bg-yellow-600/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-yellow-600 text-base font-extrabold font-plus-jakarta">3</span>
          </div>
          <div className="w-20 h-4 left-[679.60px] top-[270.40px] absolute text-center justify-center text-slate-900 text-xs font-bold font-inter">Review</div>
          
          {/* Step 4 */}
          <div className="w-12 h-12 left-[885.60px] top-[207.60px] absolute bg-teal-400/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-teal-700 text-base font-extrabold font-plus-jakarta">4</span>
          </div>
          <div className="w-20 h-4 left-[869.60px] top-[270.40px] absolute text-center justify-center text-slate-900 text-xs font-bold font-inter">Route</div>
          
          {/* Step 5 */}
          <div className="w-12 h-12 left-[1075.60px] top-[207.60px] absolute bg-teal-600/20 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center">
              <span className="text-teal-600 text-base font-extrabold font-plus-jakarta">5</span>
          </div>
          <div className="w-20 h-4 left-[1059.60px] top-[270.40px] absolute text-center justify-center text-slate-900 text-xs font-bold font-inter">Update</div>
          
          {/* Bottom Images */}
          <div className="w-[1178px] h-72 left-[131px] top-[429.05px] absolute flex gap-[30px]">
              <div className="w-[574px] h-72 relative bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.15)]">
                  <img className="w-[574px] h-[383px] left-0 top-[-30px] absolute object-cover" src="/project-management/meetings-left.png" alt="Group meeting around table" />
              </div>
              <div className="w-[574px] h-72 relative bg-slate-900 rounded-3xl overflow-hidden shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.15)]">
                  <img className="w-[574px] h-[383px] left-0 top-[-30px] absolute object-cover" src="/project-management/meetings-right.png" alt="Handshake at project completion" />
              </div>
          </div>
      </div>
    </section>
  );
};
