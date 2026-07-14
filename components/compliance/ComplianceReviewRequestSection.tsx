export function ComplianceReviewRequestSection() {
  return (
    <section id="request-review" className="flex flex-col w-full bg-[#f4f5f8] px-8 sm:px-12 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
            COMPLIANCE REVIEW REQUEST
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Sora']">
            Request a review.
          </h3>
          <p className="text-slate-500 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
            Choose a review type — the form adapts routing and confirmation. This is a design
            prototype; live requests route to the approved Trust Center workflow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Form Side */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
                  REVIEW TYPE
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-5 py-2.5 bg-[#6956e5] text-white text-[13px] font-bold rounded-full font-['Plus_Jakarta_Sans'] cursor-pointer">
                    Security review
                  </span>
                  <span className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 text-[13px] font-bold rounded-full font-['Plus_Jakarta_Sans'] cursor-pointer hover:bg-slate-50">
                    Privacy review
                  </span>
                  <span className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 text-[13px] font-bold rounded-full font-['Plus_Jakarta_Sans'] cursor-pointer hover:bg-slate-50">
                    DPA / legal
                  </span>
                  <span className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 text-[13px] font-bold rounded-full font-['Plus_Jakarta_Sans'] cursor-pointer hover:bg-slate-50">
                    AI governance
                  </span>
                  <span className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 text-[13px] font-bold rounded-full font-['Plus_Jakarta_Sans'] cursor-pointer hover:bg-slate-50">
                    Accessibility
                  </span>
                </div>
              </div>

              <div className="bg-[#f4f2fa] p-5 rounded-2xl flex items-start gap-3 border border-violet-100">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0"></div>
                <p className="text-[13px] text-slate-600 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Security reviews route to the security team with links to policy, status, and gated evidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">Company</label>
                  <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6956e5] font-['Plus_Jakarta_Sans'] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">Work email</label>
                  <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6956e5] font-['Plus_Jakarta_Sans'] text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 font-['Plus_Jakarta_Sans']">Details</label>
                <textarea placeholder="What security materials or controls are you reviewing? Include framework or questionnaire." rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6956e5] font-['Plus_Jakarta_Sans'] text-sm resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-[#6956e5] hover:bg-violet-700 text-white text-[15px] font-bold rounded-full transition-colors font-['Plus_Jakarta_Sans'] mt-2">
                Submit compliance review request
              </button>
              
              <p className="text-center text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] leading-relaxed px-4 pt-2">
                By submitting you agree this prototype does not process real data. See the Privacy Notice for live request handling.
              </p>
            </div>
          </div>

          {/* Info Side */}
          <div className="w-full md:w-[320px] lg:w-[400px] flex flex-col justify-between">
            <div className="w-full h-56 md:h-64 lg:h-[290px] rounded-2xl overflow-hidden relative">
              <img src="/compliance/review-request.png" alt="Review Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="h-20 w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 px-5 flex flex-col justify-center">
               <h5 className="text-slate-900 font-bold text-sm font-['Plus_Jakarta_Sans'] mb-1">Security review</h5>
               <p className="text-slate-400 text-xs font-['Plus_Jakarta_Sans'] leading-4">Security Center / Request Review.</p>
            </div>
            <div className="h-20 w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 px-5 flex flex-col justify-center">
               <h5 className="text-slate-900 font-bold text-sm font-['Plus_Jakarta_Sans'] mb-1">Privacy review</h5>
               <p className="text-slate-400 text-xs font-['Plus_Jakarta_Sans'] leading-4">Privacy & Data / DPA.</p>
            </div>
            <div className="h-20 w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 px-5 flex flex-col justify-center">
               <h5 className="text-slate-900 font-bold text-sm font-['Plus_Jakarta_Sans'] mb-1">Procurement questionnaire</h5>
               <p className="text-slate-400 text-xs font-['Plus_Jakarta_Sans'] leading-4">Request Compliance Review.</p>
            </div>
            <div className="h-20 w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 px-5 flex flex-col justify-center">
               <h5 className="text-slate-900 font-bold text-sm font-['Plus_Jakarta_Sans'] mb-1">Legal contract review</h5>
               <p className="text-slate-400 text-xs font-['Plus_Jakarta_Sans'] leading-4">Legal resources / Contact Sales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
