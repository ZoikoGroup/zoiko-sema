export function SubprocessorsObjectionsSection() {
  return (
    <section id="objections" className="w-full bg-slate-900">
      <div className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            REVIEW, OBJECTION & CONTACT
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-['Sora']">
            Ask a question or raise a concern.
          </h3>
          <p className="text-slate-300 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
            Route subprocessor questions, contract reviews, and objections to the correct privacy, legal, or procurement workflow.
          </p>
        </div>

        <div className="w-full h-80 relative bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 overflow-hidden">
          <img 
            src="/sub/objections.png" 
            alt="Ask a question or raise a concern" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
