export function ContactSalesHeroSection() {
  return (
    <section className="w-full flex justify-center overflow-hidden pt-16 pb-20">
      <div className="w-full max-w-[1280px] px-8 flex flex-col lg:flex-row items-center gap-12 mt-4">
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="text-slate-900 text-4xl md:text-5xl font-bold font-['Inter'] leading-[1.2]">
              Let's build what's<br />next. <span className="text-indigo-600">Together.</span>
            </h1>
          </div>
          
          <div className="w-full max-w-lg flex flex-col items-start">
            <p className="text-gray-600 text-lg font-normal font-['Inter'] leading-7">
              Talk to our team to see how Zoiko Sema can help your<br className="hidden md:block" />
              organization communicate, collaborate, and achieve more—<br className="hidden md:block" />
              securely and at scale.
            </p>
          </div>
          
          <div className="w-full flex flex-col gap-6 mt-4 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <img src="/contact/icon-shield-check.svg" alt="Enterprise security" className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm font-medium font-['Inter'] leading-5">
                Enterprise-grade<br />security
              </p>
            </div>
            
            <div className="flex items-center gap-3 md:absolute md:left-[194px] md:top-0">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <img src="/contact/icon-team.svg" alt="Scalable for teams" className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm font-medium font-['Inter'] leading-5">
                Scalable for teams<br />of all sizes
              </p>
            </div>
            
            <div className="flex items-center gap-3 md:mt-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <img src="/contact/icon-globe.svg" alt="Trusted globally" className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm font-medium font-['Inter'] leading-5">
                Trusted by organizations<br />worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 w-full max-w-[666px] h-96 relative bg-black/20 rounded-3xl shadow-2xl overflow-hidden shrink-0 mt-10 lg:mt-0">
          <img 
            className="w-full h-full object-cover scale-110" 
            src="/contact/hero.png" 
            alt="Collaboration" 
          />
        </div>
      </div>
    </section>
  );
}
