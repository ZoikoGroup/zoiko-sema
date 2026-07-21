import React from 'react';

const MasteryCourse = () => {
  return (
    <div className="w-full bg-[#0a0f1c] py-24 px-4 md:px-8 lg:px-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-[672px] pt-px flex flex-col justify-start items-start gap-4">
            <div className="px-3 py-1 bg-indigo-700 rounded-md flex justify-start items-start">
              <div className="justify-center text-white text-xs font-semibold font-['Hanken_Grotesk'] uppercase leading-4 tracking-wider">MASTERY COURSE</div>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="justify-center text-white text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">The Enterprise Architect Pathway</div>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="justify-center text-slate-500 text-base font-normal font-['Hanken_Grotesk'] leading-6">
                A comprehensive end-to-end implementation journey designed for organizations scaling to<br className="hidden md:block"/>10k+ users.
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <div className="px-8 py-3 bg-white rounded-lg flex flex-col justify-center items-center hover:bg-slate-100 cursor-pointer transition-colors">
              <div className="text-center justify-center text-sky-950 text-sm font-medium font-['Hanken_Grotesk'] leading-5 tracking-tight">Resume Learning</div>
            </div>
          </div>
        </div>
        
        {/* Timeline (kept from previous with minor alignment adjustments) */}
        <div className="relative w-full py-8 mt-4">
           <div className="hidden lg:flex w-full justify-between items-start relative z-10 px-6">
              <div className="absolute top-[22px] left-12 right-12 h-px bg-slate-800 -z-10"></div>
              
              {[
                { step: 1, label: 'Introduction', status: 'Completed', active: false, done: true },
                { step: 2, label: 'Setup', status: 'Completed', active: false, done: true },
                { step: 3, label: 'Configuration', status: 'In Progress', active: true, done: false },
                { step: 4, label: 'Verification', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: 5, label: 'Best Practices', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: 6, label: 'Advanced', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>, label: 'Completion', status: 'Exam', active: false, done: false, opacity: 'opacity-40' }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-4 flex-1 ${item.opacity || ''}`}>
                   {item.active ? (
                     <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center relative shadow-[0_0_0_6px_rgba(79,70,229,0.2)]">
                       <span className="text-[#0f172a] text-lg font-bold">{item.step}</span>
                     </div>
                   ) : item.done ? (
                     <div className="w-11 h-11 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                     </div>
                   ) : (
                     <div className="w-11 h-11 bg-[#0f172a] rounded-full border border-slate-700 flex items-center justify-center text-slate-300 font-bold">{item.step}</div>
                   )}
                   <div className="text-center mt-1">
                     <p className="text-white text-sm font-bold font-['Hanken_Grotesk']">{item.label}</p>
                     <p className={`${item.active ? 'text-indigo-400' : 'text-slate-500'} text-xs font-semibold font-['Hanken_Grotesk'] mt-1`}>{item.status}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          
          {/* Module 3 Card */}
          <div className="w-full lg:w-[380px] p-8 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[2px] flex flex-col justify-start items-start gap-4 shrink-0">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full justify-start text-white text-xl font-semibold font-['Hanken_Grotesk'] leading-7">Module 3: Advanced<br/>Configuration</div>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full justify-start text-slate-500 text-base font-normal font-['Hanken_Grotesk'] leading-6">In this section, you'll learn how to map<br/>complex organizational structures to<br/>Zoiko Sema's hierarchical permission<br/>model.</div>
            </div>
            <div className="w-full pt-2 pb-4 flex flex-col justify-start items-start gap-4 flex-grow">
              <div className="w-full flex justify-start items-center gap-3">
                <div className="flex flex-col justify-start items-start">
                  <img src="/guides-and-Tutorials/icon-32.svg" alt="Checked" className="w-5 h-5 object-contain" />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="justify-center text-white text-base font-normal font-['Hanken_Grotesk'] leading-6">Inheritance Rules</div>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-3">
                <div className="flex flex-col justify-start items-start">
                  <img src="/guides-and-Tutorials/icon-32.svg" alt="Checked" className="w-5 h-5 object-contain" />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="justify-center text-white text-base font-normal font-['Hanken_Grotesk'] leading-6">SAML/SSO Mapping</div>
                </div>
              </div>
              <div className="w-full opacity-50 flex justify-start items-center gap-3">
                <div className="flex flex-col justify-start items-start">
                  <img src="/guides-and-Tutorials/icon-36.svg" alt="Unchecked" className="w-5 h-5 object-contain opacity-50" />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="justify-center text-white text-base font-normal font-['Hanken_Grotesk'] leading-6">Audit Trail Config</div>
                </div>
              </div>
            </div>
            <div className="w-full py-3 bg-indigo-700 hover:bg-indigo-600 transition-colors cursor-pointer rounded-lg flex justify-center items-center mt-auto">
              <div className="text-center justify-center text-white text-sm font-medium font-['Hanken_Grotesk'] leading-5 tracking-tight">Launch Lesson</div>
            </div>
          </div>
          
          {/* Dashboard Image */}
          <div className="w-full flex-1 rounded-2xl overflow-hidden relative min-h-[350px]">
             <img src="/guides-and-Tutorials/hero-image.png" alt="Course Interface" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MasteryCourse;
