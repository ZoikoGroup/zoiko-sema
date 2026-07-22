import React from 'react';
import Link from 'next/link';

const TrustGovernance = () => {
  const items = [
    { title: 'AI Guidance', desc: 'Ethical implementation and LLM safety configuration.', icon: 'icon-39.svg', href: '/ai-use-policy' },
    { title: 'Permissions', desc: 'Granular RBAC and hierarchical access control.', icon: 'icon-48.svg', href: null },
    { title: 'Recording', desc: 'Regional data sovereignty and recording consent.', icon: 'icon-43.svg', href: null },
    { title: 'Guest Access', desc: 'Hardening your perimeter for external collaborators.', icon: 'icon-44.svg', href: null },
    { title: 'Security', desc: 'SOC2, HIPAA, and GDPR compliance workflows.', icon: 'icon-34.svg', href: '/security-center' },
    { title: 'Retention', desc: 'Automated data lifecycle and archival management.', icon: 'icon-31.svg', href: null }
  ];
  
  return (
    <div className="w-full bg-[#f8f9ff] py-28 px-4 md:px-8 lg:px-10 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-14 items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[#0f172a] text-3xl md:text-[34px] font-bold font-['Hanken_Grotesk'] leading-tight">Trust & Governance</h2>
          <p className="text-slate-600 text-[15px] font-normal font-['Hanken_Grotesk'] max-w-xl">
            Implementation guides for security-first organizations with strict compliance requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {items.map((item, i) => {
            const cardClass = "self-stretch p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-3 hover:shadow-md transition-shadow cursor-pointer";
            const content = (
              <>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="w-7 h-7 bg-indigo-700" style={{ maskImage: `url(/guides-and-Tutorials/${item.icon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(/guides-and-Tutorials/${item.icon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                </div>
                <div className="self-stretch pt-3 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-slate-900 text-xl font-semibold font-['Hanken_Grotesk'] leading-7">{item.title}</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-zinc-700 text-base font-normal font-['Hanken_Grotesk'] leading-6">{item.desc}</div>
                </div>
              </>
            );
            return item.href ? (
              <Link key={i} href={item.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={i} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustGovernance;
