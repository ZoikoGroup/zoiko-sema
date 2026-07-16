import React from 'react';

export const ProjectManagementIntegrationsSection = () => {
  return (
    <section className="bg-slate-900 flex justify-center w-full overflow-hidden">
      <div className="w-[1440px] h-[750px] relative flex-shrink-0">
          <div className="w-[94.88px] h-4 left-[672.56px] top-[91.20px] absolute text-center justify-center text-teal-400 text-xs font-bold font-inter tracking-wider">
            INTEGRATIONS
          </div>
          <div className="w-[800px] h-11 left-[320px] top-[121.20px] absolute text-center justify-center text-white text-4xl font-extrabold font-plus-jakarta whitespace-nowrap">
            Connects to the systems your team already runs.
          </div>
          <div className="w-[430.70px] h-4 left-[504.65px] top-[177.20px] absolute text-center justify-center text-slate-300 text-base font-normal font-inter">
            One governed hub, with clear owner, scope, and audit on every connection.
          </div>
          
          {/* Integrations Grid - height adjusted to fit all 3 rows without overflow */}
          <div className="w-[1000px] h-[440px] left-[220px] top-[249.20px] absolute grid grid-cols-3 gap-6">
              {/* Identity */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-violet-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/check-violet.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Identity</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    SAML/OIDC SSO, SCIM, groups, and domain<br/>controls
                  </div>
              </div>
              
              {/* Calendar & meetings */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/calendar-blue.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Calendar & meetings</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    Milestones, reviews, and deadlines on<br/>approved providers
                  </div>
              </div>
              
              {/* Storage & content */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-teal-400/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/document-teal.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Storage & content</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    Approved files and documents with scope<br/>and version rules
                  </div>
              </div>
              
              {/* Task / project systems */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-yellow-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/calendar-gold.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Task / project systems</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    Import, export, and sync with mapping and<br/>ownership rules
                  </div>
              </div>
              
              {/* Center Cell Logo */}
              <div className="h-32 bg-white rounded-xl border border-white/15 flex items-center justify-center shadow-lg">
                  <img src="/logo.png" className="w-40 object-contain" alt="Zoiko Sema Logo" />
              </div>
              
              {/* CRM / client systems */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-violet-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/check-violet.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">CRM / client systems</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    Route reviewed client updates under explicit<br/>mapping
                  </div>
              </div>
              
              {/* Developer */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/check-teal-medium.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Developer</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    APIs, webhooks, event logs, keys, and audit
                  </div>
              </div>
              
              {/* Zoiko ecosystem */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-teal-400/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/check-violet.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Zoiko ecosystem</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    ZoikoTime and other approved Zoiko<br/>services
                  </div>
              </div>
              
              {/* Reporting exports */}
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col justify-center">
                  <div className="w-6 h-6 bg-yellow-600/20 rounded flex items-center justify-center mb-2">
                      <img src="/project-management/chart-violet.svg" className="w-3.5 h-3.5" alt="icon" />
                  </div>
                  <div className="text-white text-sm font-bold font-inter mb-1">Reporting exports</div>
                  <div className="text-slate-400 text-xs font-normal font-inter leading-4">
                    Portfolio and PMO reporting to approved BI<br/>tools
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};
