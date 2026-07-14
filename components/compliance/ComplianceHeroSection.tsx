import Image from "next/image";
import Link from "next/link";

export function ComplianceHeroSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl relative z-10">
        <div className="flex flex-col items-start text-left lg:w-1/2">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-violet-600 text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans'] shadow-sm">
            TRUST & SECURITY
          </div>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight mb-6">
            Compliance clarity<br/>for enterprise<br/>communication<br/>reviews.
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg font-['Plus_Jakarta_Sans'] leading-relaxed mb-8 max-w-lg">
            Understand compliance posture, review pathways, evidence availability, policy links, and control areas — with procurement-ready trust resources and no unsupported certification claims.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#resources"
              className="px-8 py-4 bg-white text-slate-900 text-base font-bold rounded-full font-['Plus_Jakarta_Sans'] hover:bg-gray-100 transition-colors text-center shadow-lg"
            >
              View compliance resources
            </Link>
            <Link
              href="#request-review"
              className="px-8 py-4 bg-blue-500 text-white text-base font-bold rounded-full font-['Plus_Jakarta_Sans'] hover:bg-blue-600 transition-colors text-center shadow-lg shadow-blue-500/25"
            >
              Request review
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-xl aspect-square relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
             <img 
               src="/compliance/hero-image.png" 
               alt="Compliance Interface" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
