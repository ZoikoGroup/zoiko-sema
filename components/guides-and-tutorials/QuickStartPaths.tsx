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
    <div id="quick-start" className="w-full bg-white py-20 px-4 md:px-8 lg:px-10 flex justify-center font-sans scroll-mt-24">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#0f172a] text-[32px] font-bold leading-tight">Quick Start Paths</h2>
          <p className="text-slate-600 text-base font-normal">Get up and running in minutes with these essential starting points.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => {
            const hasProgress = parseInt(path.progress) > 0;
            return (
              <div key={index} className="w-full p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-full pb-6 flex justify-between items-start">
                    <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-2">
                      <img src={`/guides-and-Tutorials/${path.icon}`} alt={path.title} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">DIFFICULTY</span>
                      <span className="text-slate-900 text-sm font-semibold mt-0.5">{path.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="w-full pb-4">
                    <h3 className="text-slate-900 text-xl font-semibold leading-7">{path.title}</h3>
                  </div>
                  
                  <div className="w-full pb-6 flex flex-col gap-3">
                    <div className="w-full flex justify-between items-center text-xs">
                      <span className="text-zinc-600 font-medium">{path.readTime}</span>
                      <span className={`font-bold ${hasProgress ? 'text-indigo-600' : 'text-zinc-400'}`}>{path.progress} Progress</span>
                    </div>
                    
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                        style={{ width: path.progressWidth }}
                      />
                    </div>
                    
                    <div className="pt-1">
                      <span className="text-zinc-500 text-xs font-medium">Prerequisites: <span className="text-slate-700 font-semibold">{path.prereq}</span></span>
                    </div>
                  </div>
                </div>

                <div className="w-full py-2.5 bg-blue-50/70 hover:bg-blue-100/80 cursor-pointer transition-colors rounded-lg flex justify-center items-center">
                  <span className="text-indigo-900 text-sm font-semibold tracking-tight">{path.btnText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickStartPaths;
