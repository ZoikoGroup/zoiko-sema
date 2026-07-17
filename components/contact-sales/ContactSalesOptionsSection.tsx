"use client"
import { useRouter } from "next/navigation";

export function ContactSalesOptionsSection() {
  const options = [
    {
      title: "Talk to Sales",
      description: "Speak with our sales team directly.",
      linkText: "+1 (888) 800-7362",
      linkHref: "tel:+18888007362",
      footerText: "Mon-Fri, 9am-6pm EST",
      icon: (
        <img src="/contact/icon-phone.svg" alt="Talk to Sales" className="w-6 h-6" />
      )
    },
    {
      title: "Email Sales",
      description: "Send us an email anytime.",
      linkText: "sales@zoikosema.com",
      linkHref: "mailto:sales@zoikosema.com",
      footerText: "We'll respond within 1 business day.",
      isLinkUnderline: true,
      icon: (
        <img src="/contact/icon-mail-blue.svg" alt="Email Sales" className="w-6 h-6" />
      )
    },
    {
      title: "Schedule a Demo",
      description: "See Zoiko Sema in action with a personalized demo.",
      linkText: "Book a demo →",
      linkHref: "/get-a-demo",
      footerText: "",
      icon: (
        <img src="/contact/icon-calendar.svg" alt="Schedule a Demo" className="w-6 h-6" />
      )
    }
  ];
  const router = useRouter();

  return (
    <section className="w-full flex justify-center pb-32 bg-white">
      <div className="w-full max-w-[1280px] px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((opt, idx) => (
          <div key={idx} className="w-full h-52 bg-white p-6 rounded-2xl flex flex-col items-start gap-4 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
              {opt.icon}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h4 className="text-slate-900 text-base font-bold font-['Inter'] leading-6">{opt.title}</h4>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">{opt.description}</p>
            </div>
            <div className="flex flex-col mt-auto w-full">
              <a href={opt.linkHref} className={`text-indigo-600 text-sm font-bold font-['Inter'] leading-5 ${opt.isLinkUnderline ? 'underline' : ''}`}>
                {opt.linkText}
              </a>
              {opt.footerText && (
                <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-4 mt-1">{opt.footerText}</span>
              )}
            </div>
          </div>
        ))}

        {/* 4th Card - Ready to start? */}
        <div className="w-full h-52 p-8 bg-indigo-50 rounded-3xl flex flex-col justify-between items-start">
          <div className="flex flex-col gap-2 w-full">
            <img src="/contact/icon-clipboard.svg" alt="Ready to start" className="w-6 h-6 mb-1 text-indigo-600" style={{ filter: "invert(24%) sepia(91%) saturate(2361%) hue-rotate(231deg) brightness(97%) contrast(92%)" }} />
            <h4 className="text-slate-900 text-lg font-bold font-['Inter'] leading-7">Ready to start?</h4>
            <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-4">
              Explore Zoiko Sema with a free trial.<br/>No credit card required.
            </p>
          </div>
          <button onClick={()=>router.push('/start-free')} className="w-full cursor-pointer py-3 bg-white hover:bg-gray-50 transition-colors rounded-lg border border-indigo-600 text-center text-indigo-600 text-sm font-bold font-['Inter'] leading-5 shadow-sm">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
