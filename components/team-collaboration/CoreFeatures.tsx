import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  actionText: string;
  icon: React.ReactNode;
}

export default function CoreFeatures() {
  const features: FeatureCardProps[] = [
    {
      title: 'Team messaging',
      description: 'Fast messaging with channels, threads, mentions, reactions, and direct messages.',
      actionText: 'Open messaging',
      icon: (
         <img className='w-5 h-5'  src="/TeamCollaboration/Frame.png"/>
      )
    },
    {
      title: 'Meetings and huddles',
      description: 'Start or join secure video meetings from the workspace when a conversation needs live discussion.',
      actionText: 'Open meetings',
      icon: (
        <svg className="size-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Channels and spaces',
      description: 'Create structured spaces for teams, projects, departments, clients, and topics.',
      actionText: 'Open spaces',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (5).png"/>
      )
    },
    {
      title: 'Files and decisions',
      description: 'Share files, capture decisions, and keep important context attached to the team conversation.',
      actionText: 'Open files',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (3).png"/>
      )
    },
    {
      title: 'Tasks and follow-ups',
      description: 'Turn messages and meetings into owned next steps with due dates and status.',
      actionText: 'Open tasks',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (6).png"/>
      )
    },
    {
      title: 'AI-assisted summaries',
      description: 'Summarize meetings, extract action items, and keep follow-up visible with admin-controlled AI.',
      actionText: 'Open AI detail',
      icon: (
        <img className='w-5 h-5'  src="/TeamCollaboration/Frame (4).png"/>
      )
    }
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-20  antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        
        {/* Header Block Section */}
        <div className="max-w-[720px] w-full text-center flex flex-col items-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block   ">
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10 ">
            Everything a team needs to move work forward
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed    max-w-[640px]">
            Capabilities mapped to real team needs — messaging, meetings, spaces, files, tasks, and AI-assisted follow-up.
          </p>
        </div>

        {/* Feature Cards Grid (Responsive layout conversion) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="space-y-4">
                {/* Icon Base Shield */}
                <div className="size-11 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-6">
                  {feature.title}
                </h3>
                
                {/* Description Text */}
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal    leading-6">
                  {feature.description}
                </p>
              </div>

              {/* Action Interactive Link Group */}
              <div className="pt-6 flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-semibold    cursor-pointer group-hover:text-indigo-500">
                <span>{feature.actionText}</span>
                <svg 
                  className="size-3.5 transform group-hover:translate-x-0.5 transition-transform duration-150" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}