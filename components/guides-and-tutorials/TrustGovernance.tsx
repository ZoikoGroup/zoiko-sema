import React from 'react';
import { 
  FileText, 
  LockKeyhole, 
  VideoOff, 
  UserCheck, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';

const TrustGovernance = () => {
  const items = [
    { 
      title: 'AI Guidance', 
      desc: 'Ethical implementation and LLM safety configuration.', 
      icon: FileText 
    },
    { 
      title: 'Permissions', 
      desc: 'Granular RBAC and hierarchical access control.', 
      icon: LockKeyhole 
    },
    { 
      title: 'Recording', 
      desc: 'Regional data sovereignty and recording consent.', 
      icon: VideoOff 
    },
    { 
      title: 'Guest Access', 
      desc: 'Hardening your perimeter for external collaborators.', 
      icon: UserCheck 
    },
    { 
      title: 'Security', 
      desc: 'SOC2, HIPAA, and GDPR compliance workflows.', 
      icon: ShieldCheck 
    },
    { 
      title: 'Retention', 
      desc: 'Automated data lifecycle and archival management.', 
      icon: RotateCcw 
    }
  ];
  
  return (
    <div className="w-full bg-[#f8f9ff] py-24 px-4 md:px-8 lg:px-10 flex justify-center font-sans">
      <div className="w-full max-w-5xl flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[#0f172a] text-3xl md:text-[34px] font-bold leading-tight tracking-tight">Trust & Governance</h2>
          <p className="text-slate-500 text-[15px] font-normal max-w-xl leading-relaxed">
            Implementation guides for security-first organizations with strict compliance requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={i} 
                className="p-8 bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer flex flex-col items-start"
              >
                <div className="mb-4 text-indigo-600">
                  <IconComponent size={26} strokeWidth={2} />
                </div>
                <h3 className="text-[#0f172a] text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-normal leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustGovernance;


