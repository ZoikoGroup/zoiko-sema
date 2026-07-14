export function ContactSalesFeaturesSection() {
  const features = [
    {
      title: "Personalized solutions",
      description: "We'll understand your needs and recommend the right solution for your team.",
      icon: (
        <img src="/contact/icon-user-blue.svg" alt="Personalized solutions" className="w-6 h-6" />
      )
    },
    {
      title: "Expert guidance",
      description: "Talk to product experts who can help you plan, implement, and scale with confidence.",
      icon: (
        <img src="/contact/icon-chart.svg" alt="Expert guidance" className="w-6 h-6" />
      )
    },
    {
      title: "Flexible plans",
      description: "From startups to enterprises, we'll help you find the right plan and pricing.",
      icon: (
        <img src="/contact/icon-settings.svg" alt="Flexible plans" className="w-6 h-6" />
      )
    },
    {
      title: "Dedicated support",
      description: "Get ongoing support from a team that's with you every step of the way.",
      icon: (
        <img src="/contact/icon-phone.svg" alt="Dedicated support" className="w-6 h-6" />
      )
    }
  ];

  return (
    <div className="flex-1 w-full max-w-[576px] flex flex-col gap-12 pb-10">
      <div className="flex flex-col gap-5">
        <h4 className="text-indigo-600 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
          WHY CONTACT SALES?
        </h4>
        <h2 className="text-slate-900 text-3xl font-bold font-['Inter'] leading-9">
          Solutions built around your<br className="hidden sm:block" />business goals
        </h2>
        
        <div className="flex flex-col gap-8 mt-5">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-5">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-slate-900 text-lg font-bold font-['Inter'] leading-7">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm font-normal font-['Inter'] leading-6 max-w-[420px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 bg-slate-50 rounded-3xl border border-gray-100 flex flex-col gap-6">
        <div className="text-indigo-600">
          <img src="/contact/icon-quote.svg" alt="Quote" className="w-10 h-10 text-indigo-600" />
        </div>
        <p className="text-slate-800 text-lg font-medium font-['Inter'] leading-7">
          "Zoiko Sema has transformed the way our team connects and collaborates globally. The support from their team has been outstanding."
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shrink-0">
            <img src="/contact/avatar-david.jpg" alt="David Kim" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-slate-900 text-sm font-bold font-['Inter'] leading-5">David Kim</h4>
            <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">IT Director, Nexora Group</span>
          </div>
        </div>
      </div>
    </div>
  );
}
