import Image from "next/image";

export function ComplianceControlMapSection() {
  const domains = [
    {
      title: "Security",
      description: "Access, encryption, incident, audit.",
      iconBg: "bg-blue-500",
      image: "/compliance/security.png",
    },
    {
      title: "Accessibility",
      description: "WCAG guidance, inclusive design.",
      iconBg: "bg-amber-500",
      image: "/compliance/accessibility.png",
    },
    {
      title: "Privacy",
      description: "Notice, DPA, requests, retention.",
      iconBg: "bg-violet-600",
      image: "/compliance/privacy.png",
    },
    {
      title: "Responsible AI",
      description: "Human review, admin controls.",
      iconBg: "bg-teal-600",
      image: "/compliance/responsible-ai.png",
    },
    {
      title: "Subprocessors",
      description: "Vendor list, change notices.",
      iconBg: "bg-slate-900",
      image: "/compliance/subprocessors.png",
    },
    {
      title: "Operations",
      description: "Status, support, change controls.",
      iconBg: "bg-green-500",
      image: "/compliance/operations.png",
    },
  ];

  return (
    <section id="control-map" className="flex flex-col max-w-5xl mx-auto w-full">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-2 font-['Plus_Jakarta_Sans']">
            COMPLIANCE CONTROL MAP
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Sora']">
            Trust domains around one hub.
          </h3>
        </div>
        <div className="hidden sm:block">
           <span className="px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-full">Review-ready</span>
        </div>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-violet-100">
        {/* SVG lines connecting hub directly to cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="16.6%" y2="25%" stroke="#ddd6fe" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="50%" y2="25%" stroke="#ddd6fe" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="83.3%" y2="25%" stroke="#ddd6fe" strokeWidth="2" />
          
          <line x1="50%" y1="50%" x2="16.6%" y2="75%" stroke="#ddd6fe" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#ddd6fe" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="83.3%" y2="75%" stroke="#ddd6fe" strokeWidth="2" />
        </svg>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
           {/* Top Row */}
           {domains.slice(0, 3).map((domain) => (
             <DomainCard key={domain.title} domain={domain} />
           ))}

           {/* Middle Row (Logo Hub) */}
           <div className="hidden md:flex col-span-3 justify-center items-center py-6">
             <div className="bg-gradient-to-br from-violet-100 to-violet-50 w-72 h-36 rounded-[20px] shadow-[0px_24px_46px_-30px_rgba(108,79,224,0.50)] border border-violet-200 flex items-center justify-center relative bg-white">
                <span className="text-[32px] font-bold text-blue-700 font-['Sora'] tracking-tight">ZOIKO</span>
                <span className="text-[32px] font-normal text-blue-500 font-['Sora'] tracking-tight">Sema</span>
                <span className="text-xs text-blue-500 absolute top-10 right-8 font-bold">™</span>
             </div>
           </div>

           {/* Bottom Row */}
           {domains.slice(3, 6).map((domain) => (
             <DomainCard key={domain.title} domain={domain} />
           ))}
        </div>
      </div>
    </section>
  );
}

function DomainCard({ domain }: { domain: any }) {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-violet-100 flex flex-col h-[200px] shadow-sm relative z-20 hover:shadow-md transition-shadow">
      <div className="h-28 w-full relative bg-gray-100">
        <img src={domain.image} alt={domain.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-center bg-gray-50 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <div className={`w-5 h-5 rounded-full ${domain.iconBg} shadow-sm border border-white`}></div>
          <h4 className="text-slate-900 font-bold text-sm font-['Sora']">{domain.title}</h4>
        </div>
        <p className="text-gray-500 text-xs font-['Plus_Jakarta_Sans'] ml-7 leading-relaxed">{domain.description}</p>
      </div>
    </div>
  );
}
