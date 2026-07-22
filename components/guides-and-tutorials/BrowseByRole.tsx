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
    <div className="w-full bg-violet-50/50 pt-12 pb-20 px-4 md:px-8 lg:px-10 flex justify-center font-sans">
      <div className="w-full max-w-7xl flex flex-col justify-start items-start gap-10">
        <div className="w-full flex justify-start items-end">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-slate-900 text-3xl font-semibold leading-10">Browse by Role</h2>
            <p className="text-slate-600 text-base font-normal">Tailored learning experiences for your specific responsibilities.</p>
          </div>
        </div>
        <div className="self-stretch flex justify-start items-stretch gap-4 overflow-x-auto pb-4">
          {roles.map((role, index) => (
            <div key={index} className="flex-1 min-w-[140px] p-7 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer flex flex-col justify-center items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex justify-center items-center p-2.5">
                <img src={`/guides-and-Tutorials/${role.icon}`} alt={role.title} className="w-7 h-7 object-contain" />
              </div>
              <div className="flex flex-col justify-start items-center">
                <span className="text-center text-slate-900 text-[15px] font-semibold tracking-tight">
                  {role.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByRole;

