import React from 'react';

const TutorialGrid = () => {
  const tutorials = [
    {
      thumbnail: 'thumbnail-3.jpg',
      version: 'v2024.1',
      readTime: '12 min read',
      title: 'Configuring Advanced SSO with Okta',
      desc: 'Learn how to map custom user attributes and configure just-in-time provisioning for your organization...',
      role: 'Administrators',
      roleIcon: 'icon-47.svg'
    },
    {
      thumbnail: 'thumbnail-2.jpg',
      version: 'v2024.1',
      readTime: '8 min read',
      title: 'Mastering Semantic Search for Research',
      desc: 'Utilize natural language queries to find exact data points across thousands of archived meeting notes...',
      role: 'All Users',
      roleIcon: 'icon-24.svg'
    },
    {
      thumbnail: 'thumbnail-1.jpg',
      version: 'v2023.4',
      readTime: '20 min read',
      title: 'Setting Up Data Retention Policies',
      desc: 'Configure automated deletion and archiving schedules to meet global compliance and privacy rules...',
      role: 'Compliance',
      roleIcon: 'icon-49.svg'
    },
    {
      thumbnail: 'thumbnail-4.jpg',
      version: 'v2024.1',
      readTime: '15 min read',
      title: 'Creating Custom Workspace Templates',
      desc: 'Standardize project structures across your organization by creating and deploying custom templates...',
      role: 'Team Leads',
      roleIcon: 'icon-50.svg'
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4 md:px-8 lg:px-10 flex justify-center border-t border-slate-100 font-sans">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-start items-start gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-72 shrink-0 flex flex-col gap-8">
          {/* Difficulty */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">DIFFICULTY</span>
            <div className="flex flex-col gap-3">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <label key={level} className="inline-flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                  <span className="text-slate-700 text-base font-normal group-hover:text-indigo-600 transition-colors">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">PRODUCT</span>
            <div className="h-11 px-3.5 bg-white rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer hover:border-indigo-500 transition-colors shadow-xs">
              <span className="text-slate-700 text-base font-normal">All Products</span>
              <img src="/guides-and-Tutorials/icon-30.svg" alt="chevron" className="w-3.5 h-3.5 object-contain text-slate-400" />
            </div>
          </div>

          {/* Product Version */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">PRODUCT VERSION</span>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="version" defaultChecked className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-slate-900 text-base font-medium">v2024.1 (Latest)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="version" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                <span className="text-slate-600 text-base font-normal">v2023.4 (LTS)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 w-full flex flex-col gap-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tutorials.map((tut, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 flex flex-col overflow-hidden group cursor-pointer hover:shadow-md hover:border-indigo-200 transition-all">
                <div className="h-48 bg-slate-100 flex justify-center items-center overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`/guides-and-Tutorials/${tut.thumbnail}`} alt={tut.title} />
                  {index === 1 && (
                    <div className="absolute top-4 left-4 w-10 h-10 bg-[#0088ff] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md">
                      T
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between gap-4 flex-grow">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 bg-blue-50 text-indigo-900 rounded-md text-xs font-semibold">{tut.version}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 text-xs font-medium">{tut.readTime}</span>
                    </div>

                    <h3 className="text-slate-900 text-xl font-semibold leading-7 group-hover:text-indigo-600 transition-colors">
                      {tut.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {tut.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex justify-between items-center border-t border-slate-100 mt-2">
                    <div className="flex items-center gap-2">
                      <img src={`/guides-and-Tutorials/${tut.roleIcon}`} className="w-4 h-4 object-contain opacity-80" alt={tut.role} />
                      <span className="text-slate-500 text-xs font-semibold">{tut.role}</span>
                    </div>
                    <svg className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button className="px-8 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs">
              Load More Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialGrid;

