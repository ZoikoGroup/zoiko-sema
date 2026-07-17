import React from 'react';
import Link from 'next/link';

export const GovHeroSection = () => {
  return (
    <section className="bg-[#12142d] flex justify-center w-full overflow-hidden text-white">
      <div className="w-[1440px] h-[869.38px] relative flex-shrink-0 bg-[#12142d]">
          {/* Decorative radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.6)_0%,rgba(99,102,241,0)_60%)] pointer-events-none" />
          
          <div className="w-1.5 h-1.5 left-[152px] top-[102.89px] absolute bg-indigo-400 rounded-full"></div>
          
          <div className="w-24 h-5 left-[166px] top-[96px] absolute justify-center text-indigo-400 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            GOVERNMENT
          </div>
          
          <div className="w-[500px] h-60 left-[152px] top-[130.80px] absolute justify-center text-white text-5xl font-extrabold font-plus-jakarta leading-[57.20px]">
            Coordinate public-<br/>sector work with<br/>clarity, control, and<br/>evidence.
          </div>
          
          <div className="w-[538.89px] h-20 left-[152px] top-[388.55px] absolute justify-center text-white/70 text-base font-normal font-inter leading-7">
            Bring approved messages, meetings, interagency handoffs,<br/>
            reviewed AI summaries, tasks, records-aware workflows, and audit<br/>
            evidence into one governed workspace.
          </div>
          
          {/* CTA Buttons */}
          <div className="absolute left-[152px] top-[502.65px] flex gap-4">
              <Link href="/get-a-demo" className="w-56 h-12 bg-blue-600 rounded-[999px] hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-sm font-semibold font-inter">Get a demo</span>
              </Link>
              
              <Link href="/contact-sales" className="w-60 h-12 rounded-[999px] border border-white/30 hover:bg-white/5 transition-colors flex items-center justify-center">
                  <span className="text-white text-sm font-semibold font-inter">Talk to sales</span>
              </Link>
          </div>
          
          {/* Security Link */}
          <div className="w-60 h-6 left-[152px] top-[576.61px] absolute flex items-center gap-1.5">
              <Link href="/security-compliance" className="text-indigo-400 text-sm font-semibold hover:underline font-inter">
                Explore security & compliance
              </Link>
              <span className="text-indigo-400 text-sm font-bold font-inter">→</span>
          </div>
          
          {/* Pills */}
          <div className="absolute left-[152px] top-[632.53px] flex gap-[12.75px]">
              <div className="h-10 bg-white/5 rounded-[999px] border border-white/20 backdrop-blur-[6px] flex items-center px-[17px]">
                  <span className="text-white/90 text-xs font-semibold font-inter">Public-sector coordination</span>
              </div>
              <div className="h-10 bg-white/5 rounded-[999px] border border-white/20 backdrop-blur-[6px] flex items-center px-[17px]">
                  <span className="text-white/90 text-xs font-semibold font-inter">Records-aware workflows</span>
              </div>
          </div>
          
          <div className="w-[164px] h-10 left-[152px] top-[681.16px] absolute bg-white/5 rounded-[999px] border border-white/20 backdrop-blur-[6px] flex items-center px-[17px]">
              <span className="text-white/90 text-xs font-semibold font-inter">Accessibility by design</span>
          </div>
          
          {/* Right Image Container */}
          <div className="w-[540px] h-[624px] left-[748.10px] top-[95.64px] absolute bg-white rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden">
              <img className="w-[937px] h-[624px] max-w-none object-cover" src="/use-case-government/hero-meeting.png" alt="Government public sector team meeting" />
          </div>
          
          {/* Disclaimer */}
          <div className="w-[671.99px] h-9 left-[152px] top-[743.78px] absolute justify-center text-white/50 text-xs font-normal font-inter leading-5">
            Deployment, data, network, accessibility, and authorization requirements are reviewed with each agency. No universal<br/>
            government authorization or compliance claim.
          </div>
      </div>
    </section>
  );
};
