import React from 'react';
import Link from 'next/link';

const BrowseByRole = () => {
  const roles = [
    { title: 'Member', icon: 'icon-24.svg', href: null },
    { title: 'Team Lead', icon: 'icon-50.svg', href: null },
    { title: 'Workspace Owner', icon: 'icon-35.svg', href: null },
    { title: 'Administrator', icon: 'icon-47.svg', href: '/admin-console' },
    { title: 'Security', icon: 'icon-48.svg', href: '/security-center' },
    { title: 'Compliance', icon: 'icon-49.svg', href: '/compliance' },
    { title: 'Developer', icon: 'icon-37.svg', href: '/developer-docs' }
  ];

  return (
    <div className="w-full bg-violet-50 pt-12 pb-20 px-4 md:px-8 lg:px-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col justify-start items-start gap-12">
        <div className="w-full flex justify-start items-end">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col justify-start items-start">
              <h2 className="justify-center text-sky-950 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">Browse by Role</h2>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="justify-center text-zinc-700 text-base font-normal font-['Hanken_Grotesk'] leading-6">Tailored learning experiences for your specific responsibilities.</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex justify-start items-stretch gap-4 overflow-x-auto pb-4">
          {roles.map((role, index) => {
            const cardClass = "flex-1 min-w-[150px] p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-center items-center";
            const content = (
              <>
                <div className="pb-4 flex flex-col justify-start items-start">
                  <div className="w-10 h-8 bg-slate-900" style={{ maskImage: `url(/guides-and-Tutorials/${role.icon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(/guides-and-Tutorials/${role.icon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-slate-900 text-xl font-semibold font-['Hanken_Grotesk'] leading-7">
                    {role.title}
                  </div>
                </div>
              </>
            );
            return role.href ? (
              <Link key={index} href={role.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={index} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseByRole;
