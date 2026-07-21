import React from 'react';

const QuickStartPaths = () => {
  const paths = [
    {
      difficulty: 'Beginner',
      title: 'First Workspace',
      readTime: '15 min read',
      progress: '40%',
      progressWidth: '40%',
      prereq: 'Verified Email',
      btnText: 'Continue',
      icon: 'icon-26.svg'
    },
    {
      difficulty: 'Beginner',
      title: 'First Meeting',
      readTime: '10 min read',
      progress: '0%',
      progressWidth: '0%',
      prereq: 'Chrome/Desktop',
      btnText: 'Start Guide',
      icon: 'icon-29.svg'
    },
    {
      difficulty: 'Advanced',
      title: 'Admin Setup',
      readTime: '45 min read',
      progress: '12%',
      progressWidth: '12%',
      prereq: 'Admin Role',
      btnText: 'Continue',
      icon: 'icon-23.svg'
    },
    {
      difficulty: 'Expert',
      title: 'Migration',
      readTime: '2h implementation',
      progress: '0%',
      progressWidth: '0%',
      prereq: 'Data Access',
      btnText: 'Start Migration',
      icon: 'icon-25.svg'
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4 md:px-8 lg:px-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#0f172a] text-[32px] font-bold font-['Hanken_Grotesk'] leading-tight">Quick Start Paths</h2>
          <p className="text-slate-600 text-base font-normal font-['Hanken_Grotesk']">Get up and running in minutes with these essential starting points.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <div key={index} className="w-full p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:shadow-md transition-shadow flex flex-col justify-start items-start">
                <div className="w-full pb-6 flex flex-col justify-start items-start">
                    <div className="w-full flex justify-between items-start">
                        <div className="w-[44px] h-[44px] bg-slate-100 rounded-lg flex items-center justify-center">
                            <img src={`/guides-and-Tutorials/${path.icon}`} alt={path.title} className="w-5 h-5 object-contain" />
                        </div>
                        <div className="pb-0.5 flex flex-col justify-start items-end gap-0.5">
                            <div className="flex flex-col justify-start items-end">
                                <div className="text-right justify-center text-zinc-500 text-xs font-semibold font-['Hanken_Grotesk'] uppercase leading-4 tracking-wide">DIFFICULTY</div>
                            </div>
                            <div className="text-right justify-center text-sky-950 text-sm font-medium font-['Hanken_Grotesk'] leading-5 tracking-tight">{path.difficulty}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-4 flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col justify-start items-start">
                        <div className="w-full justify-start text-slate-900 text-xl font-semibold font-['Hanken_Grotesk'] leading-7">{path.title}</div>
                    </div>
                </div>
                <div className="w-full pb-8 flex flex-col justify-start items-start flex-grow">
                    <div className="w-full flex flex-col justify-start items-start gap-3">
                        <div className="w-full flex justify-between items-start">
                            <div className="flex flex-col justify-start items-start">
                                <div className="justify-center text-zinc-700 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">{path.readTime}</div>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <div className={`justify-center ${parseInt(path.progress) > 0 ? 'text-indigo-700' : 'text-zinc-700'} text-xs font-bold font-['Hanken_Grotesk'] leading-4 tracking-wide`}>{path.progress} Progress</div>
                            </div>
                        </div>
                        <div className="w-full h-2 bg-[#e0e7ff] rounded-full"></div>
                        <div className="w-full pt-2 flex flex-col justify-start items-start">
                            <div className="w-full justify-start text-zinc-700 text-xs font-semibold font-['Hanken_Grotesk'] leading-4 tracking-wide">Prerequisites: {path.prereq}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-3 bg-blue-50 hover:bg-blue-100 cursor-pointer transition-colors rounded-lg flex flex-col justify-center items-center">
                    <div className="text-center justify-center text-sky-950 text-sm font-medium font-['Hanken_Grotesk'] leading-5 tracking-tight">{path.btnText}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStartPaths;
