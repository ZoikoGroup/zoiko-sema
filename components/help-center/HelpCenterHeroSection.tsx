import Link from "next/link";

export function HelpCenterHeroSection() {
  return (
    <div className="w-full bg-slate-900 flex justify-center py-16 lg:py-24 overflow-hidden relative">
      <div className="w-full max-w-[1280px] px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="px-4 py-1 bg-blue-100 rounded-full inline-flex justify-start items-center">
            <span className="text-sky-950 text-xs font-medium font-['Hanken_Grotesk'] uppercase leading-4 tracking-wider">
              Help Center
            </span>
          </div>
          
          <div className="w-full max-w-[576px] flex flex-col justify-start items-start">
            <h1 className="text-white text-4xl sm:text-5xl font-bold font-['Hanken_Grotesk'] leading-[1.2]">
              Find answers faster.
            </h1>
          </div>
          
          <div className="w-full max-w-[512px] flex flex-col justify-start items-start">
            <p className="text-slate-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
              Search setup guides, troubleshooting articles, product help,<br className="hidden sm:block" />
              admin controls, AI Meeting Summary guidance, integrations,<br className="hidden sm:block" />
              billing, and support resources for Zoiko Sema.
            </p>
          </div>
          
          <div className="w-full max-w-[400px] flex flex-col sm:flex-row justify-start items-center gap-3">
            <Link 
              href="/contact-sales" 
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full flex justify-center items-center shadow-[0px_12px_24px_-12px_rgba(60,60,120,0.60)]"
            >
              <span className="text-white text-sm font-semibold font-['Plus_Jakarta_Sans']">
                Contact
              </span>
            </Link>
            <Link 
              href="/resources" 
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 transition-colors rounded-full flex justify-center items-center border border-gray-200"
            >
              <span className="text-slate-900 text-sm font-semibold font-['Plus_Jakarta_Sans']">
                Explore All Resources
              </span>
            </Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-[570px] relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div className="absolute right-0 sm:-right-10 lg:-right-20 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-sky-700/20 blur-[32px] sm:blur-[48px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="w-full relative z-10 bg-white/10 rounded-2xl shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] border border-slate-700/50 backdrop-blur-md flex flex-col justify-start items-start overflow-hidden">
            <div className="w-full h-10 px-4 bg-slate-800/80 border-b border-slate-700/50 inline-flex justify-start items-center gap-2 shrink-0">
              <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500/80 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
            </div>
            
            <div className="w-full aspect-[16/9] relative bg-slate-100 flex items-center justify-center overflow-hidden">
              <img 
                src="/help/hero.png" 
                alt="Help Center Support" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
