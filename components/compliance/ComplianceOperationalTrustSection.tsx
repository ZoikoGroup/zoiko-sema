export function ComplianceOperationalTrustSection() {
  return (
    <section id="operations" className="flex flex-col w-full bg-[#0f172a] px-8 sm:px-12 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12">
        
        <div className="flex flex-col justify-start items-start gap-3 max-w-2xl">
          <h2 className="text-violet-400 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
            SUBPROCESSORS, STATUS & OPERATIONAL TRUST
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-['Sora']">
            Ongoing operational trust.
          </h3>
          <p className="text-slate-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6 mt-1">
            Subprocessor information, system status, and concern-reporting routes — so
            reviewers can see how Zoiko Sema communicates change and incidents.
          </p>
        </div>

        <div className="w-full bg-white/5 rounded-2xl outline outline-1 outline-white/10 overflow-hidden relative">
           <img
              src="/compliance/operational-trust.png"
              alt="Ongoing operational trust"
              className="w-full h-auto object-cover"
            />
        </div>
        
      </div>
    </section>
  );
}
