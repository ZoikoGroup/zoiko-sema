import React from 'react';

const TutorialGrid = () => {
  const tutorials = [
    {
      thumbnail: 'thumbnail-3.jpg',
      version: 'v2024.1',
      readTime: '12 min read',
      title: 'Configuring Advanced SSO with Okta',
      desc: 'Learn how to map custom user attributes and configure just-in-time provisioning for your...',
      role: 'Administrators',
      roleIcon: 'icon-47.svg'
    },
    {
      thumbnail: 'thumbnail-2.jpg',
      version: 'v2024.1',
      readTime: '8 min read',
      title: 'Mastering Semantic Search for Research',
      desc: 'Utilize natural language queries to find exact data points across thousands of archived meeting...',
      role: 'All Users',
      roleIcon: 'icon-24.svg'
    },
    {
      thumbnail: 'thumbnail-1.jpg',
      version: 'v2023.4',
      readTime: '20 min read',
      title: 'Setting Up Data Retention Policies',
      desc: 'Configure automated deletion and archiving schedules to meet global compliance and...',
      role: 'Compliance',
      roleIcon: 'icon-41.svg'
    },
    {
      thumbnail: 'thumbnail-4.jpg',
      version: 'v2024.1',
      readTime: '15 min read',
      title: 'Creating Custom Workspace Templates',
      desc: 'Standardize project structures across your organization by creating and deploying custom...',
      role: 'Team Leads',
      roleIcon: 'icon-50.svg'
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4 md:px-8 lg:px-10 flex justify-center border-t border-slate-100">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-start items-start gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-72 self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
                {/* Difficulty */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] uppercase leading-4 tracking-wider">DIFFICULTY</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                        <div key={level} className="self-stretch inline-flex justify-start items-center gap-3 cursor-pointer group">
                            <div className="w-5 h-5 bg-white rounded-sm border border-neutral-300 flex justify-center items-center group-hover:border-indigo-600 transition-colors" />
                            <div className="inline-flex flex-col justify-start items-start">
                                <div className="justify-center text-slate-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">{level}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* Product */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] uppercase leading-4 tracking-wider">PRODUCT</div>
                    </div>
                    <div className="self-stretch h-12 px-3 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-between items-center cursor-pointer hover:outline-indigo-600 transition-colors">
                        <div className="text-slate-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">All Products</div>
                        <img src="/guides-and-Tutorials/icon-30.svg" alt="chevron" className="w-4 h-4 object-contain opacity-50" />
                    </div>
                </div>
                {/* Product Version */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] uppercase leading-4 tracking-wider">PRODUCT VERSION</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch flex items-center gap-3 cursor-pointer">
                            <div className="w-5 h-5 bg-indigo-700 rounded-full flex justify-center items-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <div className="text-slate-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">v2024.1 (Latest)</div>
                        </div>
                        <div className="self-stretch flex items-center gap-3 cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full border border-neutral-300" />
                            <div className="text-slate-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">v2023.4 (LTS)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tutorials.map((tut, index) => (
                <div key={index} className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="h-48 bg-sky-100 flex flex-col justify-center items-center overflow-hidden relative">
                        <img className="w-full h-full object-cover" src={`/guides-and-Tutorials/${tut.thumbnail}`} alt={tut.title} />
                        {index === 1 && (
                          <div className="absolute top-4 left-4 w-10 h-10 bg-[#0088ff] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md">
                            T
                          </div>
                        )}
                    </div>
                    <div className="p-6 flex flex-col justify-start items-start gap-2 flex-grow">
                        <div className="w-full flex items-center gap-3">
                            <div className="px-2 py-1 bg-blue-50 rounded-sm flex flex-col justify-start items-start">
                                <div className="justify-center text-sky-950 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">{tut.version}</div>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">•</div>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">{tut.readTime}</div>
                            </div>
                        </div>
                        <div className="w-full pt-2 flex flex-col justify-start items-start">
                            <div className="justify-center text-sky-950 text-xl font-semibold font-['Hanken_Grotesk'] leading-7 group-hover:text-indigo-700 transition-colors">{tut.title}</div>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start overflow-hidden flex-grow pb-4">
                            <div className="justify-start text-zinc-700 text-base font-normal font-['Hanken_Grotesk'] leading-6">{tut.desc}</div>
                        </div>
                        <div className="w-full pt-4 flex justify-between items-center border-t border-transparent">
                            <div className="flex justify-start items-center gap-2">
                                <div className="flex flex-col justify-start items-start">
                                    <img src={`/guides-and-Tutorials/${tut.roleIcon}`} className="w-4 h-4 object-contain opacity-70" alt={tut.role} />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <div className="justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">{tut.role}</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <svg className="w-4 h-4 text-indigo-700 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="w-full inline-flex justify-center items-start">
                <div className="px-8 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-center items-center cursor-pointer hover:bg-neutral-50 transition-colors">
                    <div className="text-center justify-center text-slate-900 text-sm font-medium font-['Hanken_Grotesk'] leading-5 tracking-tight">Load More Guides</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialGrid;
