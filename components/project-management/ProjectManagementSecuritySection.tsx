import React from 'react';

export const ProjectManagementSecuritySection = () => {
  return (
    <section className="bg-white flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[818px] relative flex-shrink-0">
          <div className="w-52 h-4 left-[615.68px] top-[91.20px] absolute text-center justify-center text-violet-600 text-xs font-bold font-inter tracking-wider">
            SECURITY & ADMINISTRATION
          </div>
          <div className="w-[644.02px] h-11 left-[397.99px] top-[121.20px] absolute text-center justify-center text-slate-900 text-4xl font-extrabold font-plus-jakarta">
            Controls IT, security, and procurement can verify.
          </div>
          
          <div className="w-[493px] h-96 left-[213px] top-[252.40px] absolute flex flex-col gap-[30px]">
              {/* Feature 1 */}
              <div className="flex gap-[16px]">
                  <div className="w-8 h-8 bg-violet-600/10 rounded-[5px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/project-management/check-violet.svg" className="w-4 h-4" alt="Check" />
                  </div>
                  <div>
                      <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Identity & lifecycle</div>
                      <div className="text-slate-600 text-xs font-normal font-inter leading-5">SSO, MFA, SCIM, domains, sessions, and provisioning.</div>
                  </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-[16px]">
                  <div className="w-8 h-8 bg-teal-400/10 rounded-[5px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/project-management/check-teal-medium.svg" className="w-4 h-4" alt="Check" />
                  </div>
                  <div>
                      <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Project policy</div>
                      <div className="text-slate-600 text-xs font-normal font-inter leading-5">Templates inherit workspace defaults for visibility, guest access, AI, and<br/>retention.</div>
                  </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-[16px]">
                  <div className="w-8 h-8 bg-violet-600/10 rounded-[5px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/project-management/check-violet.svg" className="w-4 h-4" alt="Check" />
                  </div>
                  <div>
                      <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Data governance</div>
                      <div className="text-slate-600 text-xs font-normal font-inter leading-5">Retention, legal hold, deletion, export, and audit trail.</div>
                  </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex gap-[16px]">
                  <div className="w-8 h-8 bg-teal-400/10 rounded-[5px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/project-management/check-teal-medium.svg" className="w-4 h-4" alt="Check" />
                  </div>
                  <div>
                      <div className="text-slate-900 text-sm font-bold font-inter mb-1.5">Reliability</div>
                      <div className="text-slate-600 text-xs font-normal font-inter leading-5">Freshness, degraded states, maintenance, and retries — no false<br/>healthy status.</div>
                  </div>
              </div>
          </div>
          
          {/* Right Security Mockup Image */}
          <div className="w-[518px] h-[345px] left-[709px] top-[226.40px] absolute bg-slate-900 rounded-2xl overflow-hidden shadow-[0px_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <img className="w-[518px] h-[345px] left-0 top-0 absolute object-cover" src="/project-management/security.png" alt="Security configuration and admin dashboard panel" />
          </div>
      </div>
    </section>
  );
};
