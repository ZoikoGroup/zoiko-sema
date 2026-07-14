export function SubprocessorsSubscribeSection() {
  return (
    <section id="subscribe" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
      <div className="mb-10">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          UPDATE SUBSCRIPTION
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
          Stay notified of changes.
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Form Card */}
        <div className="flex-1 bg-slate-900 rounded-3xl p-8 md:p-10 flex flex-col justify-center">
          <h4 className="text-white text-lg font-bold font-['Sora'] mb-3">
            Subscribe to subprocessor updates
          </h4>
          <p className="text-slate-300 text-xs font-['Plus_Jakarta_Sans'] leading-5 mb-8 max-w-sm">
            Get notified when a provider is added, changed, or retired. Use a business email. You can unsubscribe anytime.
          </p>
          
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="you@company.com" 
              className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-violet-500 font-['Plus_Jakarta_Sans']"
            />
            <button className="w-full h-12 bg-violet-600 hover:bg-violet-700 transition-colors text-white text-sm font-bold rounded-full font-['Plus_Jakarta_Sans']">
              Subscribe to updates
            </button>
          </div>
          
          <p className="text-slate-400 text-[10px] text-center font-['Plus_Jakarta_Sans'] mt-6 leading-relaxed">
            Prototype only — no real emails are sent. See the Privacy Notice for<br/>live handling.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1">
          <div className="w-full h-full min-h-[300px] rounded-3xl overflow-hidden relative">
            <img 
              src="/sub/subscribe.png" 
              alt="Subscribe to updates" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
