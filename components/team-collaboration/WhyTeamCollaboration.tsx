import React from 'react';

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText: string;
}

export default function WhyTeamCollaboration() {
  const features: FeatureCard[] = [
    {
      id: 1,
      icon: (
        <img className='w-6 h-6'  src="/TeamCollaboration/Frame (2).png"/>
      ),
      title: 'Keep teams aligned',
      description: 'Centralize conversations, decisions, files, and updates so everyone stays on the same page.',
      badgeText: 'Shared context'
    },
    {
      id: 2,
      icon: (
        <img className='w-6 h-6'  src="/TeamCollaboration/Frame.png"/>
      ),
      title: 'Reduce communication friction',
      description: 'Move from messages to meetings, tasks, and follow-ups without losing the thread.',
      badgeText: 'Chat → Meeting → Task'
    },
    {
      id: 3,
      icon: (
        <img className='w-6 h-6'  src="/TeamCollaboration/Frame (1).png"/>
      ),
      title: 'Support secure growth',
      description: 'Use governed spaces, role-based access, guest controls, and audit-ready collaboration.',
      badgeText: 'Security · RBAC'
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-20 antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
        
        {/* Section Typography Header Block */}
        <div className="max-w-[720px] w-full text-center flex flex-col items-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block  ">
            Why Team Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10  ">
            Built for the way teams actually work
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed   pt-1">
            One workspace for conversations, meetings, files, tasks, decisions, and AI-assisted follow-up — so context stays visible and next steps are easy to own.
          </p>
        </div>

        {/* Dynamic Grid Layout Platform Features */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] flex flex-col justify-between items-start space-y-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4 w-full">
                {/* Visual Icon Container Platform Element */}
                <div className="size-11 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-6   pt-1">
                  {feature.title}
                </h3>

                {/* Narrative Detail Descriptions */}
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed  ">
                  {feature.description}
                </p>
              </div>

              {/* Lower Context Label Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full   !mt-6">
                {feature.badgeText}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}