export function SubprocessorsCategoriesSection() {
  return (
    <section id="provider-categories" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20 bg-[#f0f4f8]">
      <div className="mb-10">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          PROVIDER CATEGORIES
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
          What each category does.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[220px] justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <h4 className="text-slate-900 text-sm font-bold font-['Sora']">Hosting & infrastructure</h4>
              </div>
              <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5">
                Operate service infrastructure, storage, networking, reliability, and backups where approved.
              </p>
            </div>
            <p className="text-slate-400 text-[10px] font-['Plus_Jakarta_Sans'] mt-4">
              Purpose • Data categories • Regions • Status
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[220px] justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h4 className="text-slate-900 text-sm font-bold font-['Sora']">Security & monitoring</h4>
              </div>
              <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5">
                Support security monitoring, abuse prevention, diagnostics, and service protection.
              </p>
            </div>
            <p className="text-slate-400 text-[10px] font-['Plus_Jakarta_Sans'] mt-4">
              Security purpose • Data • Security Center
            </p>
          </div>
        </div>

        {/* Middle Column - Image */}
        <div className="w-full h-full min-h-[464px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative flex items-center justify-center p-6">
          <img 
            src="/sub/categories.png" 
            alt="Provider Categories Ecosystem" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[220px] justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                <h4 className="text-slate-900 text-sm font-bold font-['Sora']">Customer support</h4>
              </div>
              <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5">
                Manage support tickets, troubleshooting, and help-center workflows.
              </p>
            </div>
            <p className="text-slate-400 text-[10px] font-['Plus_Jakarta_Sans'] mt-4">
              Support data • Region • Access controls
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[220px] justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <h4 className="text-slate-900 text-sm font-bold font-['Sora']">AI service providers</h4>
              </div>
              <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5">
                Support AI features such as summaries or assistance where enabled and approved.
              </p>
            </div>
            <p className="text-slate-400 text-[10px] font-['Plus_Jakarta_Sans'] mt-4">
              AI scope • Region • AI Use Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
