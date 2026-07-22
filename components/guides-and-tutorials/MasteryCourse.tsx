import React from 'react';

const MasteryCourse = () => {
  return (
    <div className="w-full bg-[#0a0f1c] py-24 px-4 md:px-8 lg:px-10 flex justify-center font-sans">
      <div className="w-full max-w-7xl flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-[672px] pt-px flex flex-col justify-start items-start gap-4">
            <div className="px-3 py-1 bg-indigo-700 rounded-md flex justify-start items-start">
              <div className="justify-center text-white text-xs font-semibold uppercase leading-4 tracking-wider">MASTERY COURSE</div>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <h2 className="justify-center text-white text-3xl md:text-4xl font-semibold leading-10">The Enterprise Architect Pathway</h2>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <p className="justify-center text-slate-400 text-base font-normal leading-6">
                A comprehensive end-to-end implementation journey designed for organizations scaling to<br className="hidden md:block"/> 10k+ users.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors cursor-pointer shadow-sm">
              Resume Learning
            </button>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative w-full py-8 mt-4">
           <div className="hidden lg:flex w-full justify-between items-start relative z-10 px-6">
              <div className="absolute top-[22px] left-12 right-12 h-px bg-slate-800 -z-10"></div>
              
              {[
                { step: '1', label: 'Introduction', status: 'Completed', active: false, done: true },
                { step: '2', label: 'Setup', status: 'Completed', active: false, done: true },
                { step: '3', label: 'Configuration', status: 'In Progress', active: true, done: false },
                { step: '4', label: 'Verification', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: '5', label: 'Best Practices', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: '6', label: 'Advanced', status: 'Locked', active: false, done: false, opacity: 'opacity-40' },
                { step: '7', label: 'Completion', status: 'Exam', active: false, done: false, opacity: 'opacity-40' }
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
                     <p className="text-white text-sm font-bold">{item.label}</p>
                     <p className={`${item.active ? 'text-indigo-400' : 'text-slate-400'} text-xs font-medium mt-1`}>{item.status}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          
          {/* Module 3 Card */}
          <div className="w-full lg:w-[380px] p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-[2px] flex flex-col justify-start items-start gap-4 shrink-0">
            <div className="w-full flex flex-col justify-start items-start">
              <h3 className="w-full justify-start text-white text-xl font-semibold leading-7">Module 3: Advanced<br/>Configuration</h3>
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <p className="w-full justify-start text-slate-400 text-sm leading-relaxed">
                In this section, you'll learn how to map complex organizational structures to Zoiko Sema's hierarchical permission model.
              </p>
            </div>
            <div className="w-full pt-2 pb-4 flex flex-col gap-3.5 flex-grow">
              <div className="w-full flex items-center gap-3">
                <img src="/guides-and-Tutorials/icon-32.svg" alt="Checked" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-medium">Inheritance Rules</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <img src="/guides-and-Tutorials/icon-32.svg" alt="Checked" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-medium">SAML/SSO Mapping</span>
              </div>
              <div className="w-full opacity-50 flex items-center gap-3">
                <img src="/guides-and-Tutorials/icon-36.svg" alt="Unchecked" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-medium">Audit Trail Config</span>
              </div>
            </div>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer rounded-lg text-white text-sm font-semibold tracking-tight text-center mt-auto">
              Launch Lesson
            </button>
          </div>
          
          {/* Dashboard Image */}
          <div className="w-full flex-1 rounded-2xl overflow-hidden relative min-h-[350px] border border-slate-800 shadow-xl">
             <img src="/guides-and-Tutorials/hero-image.png" alt="Course Interface" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MasteryCourse;

