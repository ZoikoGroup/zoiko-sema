export function SubprocessorsDataCategoriesSection() {
  const dataCategories = [
    {
      title: "Account data",
      description: "Name, email, role, and profile details.",
      footer: "Onboarding · Admin",
    },
    {
      title: "Communication data",
      description: "Messages, threads, channels, and files.",
      footer: "Messaging",
    },
    {
      title: "AI-generated data",
      description: "Summaries, action items, and decisions.",
      footer: "AI features",
    },
    {
      title: "Diagnostics data",
      description: "Performance, reliability, and usage signals.",
      footer: "Analytics",
    },
  ];

  return (
    <section id="data-categories" className="flex flex-col max-w-5xl mx-auto w-full px-8 sm:px-12 lg:px-20 py-20">
      <div className="mb-10">
        <h2 className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
          DATA CATEGORIES & PRODUCT AREAS
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
          What data may be involved.
        </h3>
      </div>

      <div className="w-full bg-slate-100 rounded-2xl border border-violet-100 overflow-hidden flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-1/2 p-[1px] gap-[1px]">
          {dataCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 md:p-8 flex flex-col h-full justify-center min-h-[120px]">
              <h4 className="text-slate-900 text-sm font-bold font-['Sora'] mb-2">{category.title}</h4>
              <p className="text-slate-500 text-xs font-['Plus_Jakarta_Sans'] leading-5 mb-4">
                {category.description}
              </p>
              <span className="text-violet-600 text-xs font-bold font-['Plus_Jakarta_Sans']">
                {category.footer}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 bg-slate-50 relative min-h-[300px]">
          <img 
            src="/sub/data-categories.png" 
            alt="Data involved graphic" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
