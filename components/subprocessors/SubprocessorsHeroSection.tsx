import Link from "next/link";

export function SubprocessorsHeroSection() {
  return (
    <section className="bg-slate-900 w-full pt-20 pb-20 px-8 sm:px-12 lg:px-20 relative overflow-hidden flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl flex flex-col items-start z-10">
          <div className="mb-6 inline-flex h-6 items-center justify-center rounded-full bg-white/10 px-3 py-1 outline outline-1 outline-white/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-['Plus_Jakarta_Sans']">
              TRUST & SECURITY
            </span>
          </div>

          <h1 className="mb-6 h-60 text-5xl font-bold text-white font-['Sora'] leading-[56.16px]">
            Subprocessors<br/>with transparent<br/>review and change<br/>notice.
          </h1>

          <p className="mb-10 text-base md:text-lg text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-xl">
            A transparent view of service-provider categories, data-processing roles, regions, and update notices — with clear review and objection routes for privacy, legal, security, and procurement.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#current-list"
              className="flex h-12 w-36 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 font-['Plus_Jakarta_Sans']"
            >
              View list
            </Link>
            <Link
              href="#subscribe"
              className="flex h-12 w-48 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white transition-colors hover:bg-blue-700 font-['Plus_Jakarta_Sans']"
            >
              Subscribe to updates
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end z-10">
          <div className="w-full lg:w-[726px] h-96 relative rounded-3xl overflow-hidden">
            <img 
              src="/sub/hero.png" 
              alt="Subprocessors Graphic" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
