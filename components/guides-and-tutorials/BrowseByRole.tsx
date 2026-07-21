import React from 'react';

const BrowseByRole = () => {
  const roles = [
    { title: 'Member', icon: 'icon-24.svg' },
    { title: 'Team Lead', icon: 'icon-50.svg' },
    { title: 'Workspace Owner', icon: 'icon-35.svg' },
    { title: 'Administrator', icon: 'icon-47.svg' },
    { title: 'Security', icon: 'icon-48.svg' },
    { title: 'Compliance', icon: 'icon-49.svg' },
    { title: 'Developer', icon: 'icon-37.svg' }
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
          {roles.map((role, index) => (
            <div key={index} className="flex-1 min-w-[150px] p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-center items-center">
              <div className="pb-4 flex flex-col justify-start items-start">
                <div className="w-10 h-8 bg-slate-900" style={{ maskImage: `url(/guides-and-Tutorials/${role.icon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(/guides-and-Tutorials/${role.icon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
              </div>
              <div className="flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xl font-semibold font-['Hanken_Grotesk'] leading-7">
                  {role.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByRole;
