import React from 'react';

export const ProjectManagementFilesSection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[745px] relative flex-shrink-0">
          <div className="w-32 h-4 left-[654.51px] top-[83.20px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter tracking-wider">
            FILES & EVIDENCE
          </div>
          <div className="w-[812.36px] h-11 left-[314px] top-[113.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Documents connect to the objects they support.
          </div>
          
          {/* Files grid items */}
          <div className="w-[1178px] h-44 left-[131px] top-[203.60px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden flex">
              {/* Item 1 */}
              <div className="flex-1 h-44 border-r border-violet-100 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-violet-600/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/document-violet.svg" className="w-5 h-5" alt="Document icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">Project library</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Grouped by project and<br/>phase.</div>
              </div>
              
              {/* Item 2 */}
              <div className="flex-1 h-44 border-r border-violet-100 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/link-blue.svg" className="w-5 h-5" alt="Link icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">Source links</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Linked to tasks and<br/>decisions.</div>
              </div>
              
              {/* Item 3 */}
              <div className="flex-1 h-44 border-r border-violet-100 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-teal-400/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/document-teal.svg" className="w-5 h-5" alt="Document icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">Versioning</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Author, timestamp,<br/>comparison.</div>
              </div>
              
              {/* Item 4 */}
              <div className="flex-1 h-44 border-r border-violet-100 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-yellow-600/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/document-gold.svg" className="w-5 h-5" alt="Document icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">Review & approval</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Draft through archived<br/>states.</div>
              </div>
              
              {/* Item 5 */}
              <div className="flex-1 h-44 border-r border-violet-100 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-violet-600/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/link-gold.svg" className="w-5 h-5" alt="Link icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">External sharing</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Scoped, expiring, audited<br/>links.</div>
              </div>
              
              {/* Item 6 */}
              <div className="flex-1 h-44 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/project-management/document-blue.svg" className="w-5 h-5" alt="Document icon" />
                  </div>
                  <div className="text-slate-900 text-xs font-bold font-inter mb-1.5 text-center">Evidence package</div>
                  <div className="text-slate-600 text-xs font-normal font-inter leading-4 text-center">Permission-bound export<br/>bundle.</div>
              </div>
          </div>
          
          {/* Bottom Files Landscape Image */}
          <div className="w-[1178px] h-80 left-[131px] top-[396px] absolute bg-black rounded-3xl overflow-hidden shadow-[0px_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-[1178px] h-[785px] left-0 top-[-200px] absolute object-cover" src="/project-management/files-team.png" alt="Files and evidence collaboration" />
          </div>
      </div>
    </section>
  );
};
