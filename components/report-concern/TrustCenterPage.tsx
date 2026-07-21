"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { 
  Shield, 
  Brain, 
  Eye, 
  CheckCircle2, 
  Users, 
  Accessibility, 
  ArrowRight, 
  Plus, 
  Minus 
} from 'lucide-react';

// --- SHARED HIGH-PERFORMANCE SCROLL REVEAL HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsIntersecting(true);
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function TrustCenterPage() {
  // Reveal tracking refs for each individual section
  const [sec1Ref, sec1Visible] = useScrollReveal();
  const [sec2Ref, sec2Visible] = useScrollReveal();
  const [sec3Ref, sec3Visible] = useScrollReveal();
  const [sec4Ref, sec4Visible] = useScrollReveal();
  const [sec5Ref, sec5Visible] = useScrollReveal();

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen">

     

      {/* ==========================================================
          SECTION 2: ESCALATION & URGENT HELP (DARK HERO CARD GRID)
         ========================================================== */}
      <section 
        ref={sec2Ref}
        className="w-full py-20 lg:py-28 bg-slate-900 dark:bg-gray-950 text-white overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-12">
          <div className={`flex flex-col items-start gap-3 max-w-2xl transition-all duration-1000 transform ${sec2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-violet-400 text-xs font-bold tracking-widest uppercase  ">ESCALATION & URGENT HELP</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight  ">If something needs attention now.</h2>
            <p className="text-slate-300 text-base font-normal leading-relaxed  ">For active risks, use the fastest safe route. Flag urgent reports in the form so they enter a higher-priority queue.</p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 transform ${sec2Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {[
              { title: "Active security risk", desc: "Choose the Security route and flag it urgent. Do not disclose the issue publicly before it is reviewed.", img: "/report-concern/image 134.png" },
              { title: "Account safety", desc: "If your account may be compromised, report it here and contact your workspace admin to limit access.", img: "/report-concern/image 135.png" },
              { title: "Immediate danger", desc: "If anyone is in immediate physical danger, contact your local emergency services first, then report here.", img: "/report-concern/image 136.png" }
            ].map((card, i) => (
              <div key={i} className="group flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full aspect-[4/3] relative rounded-[20px] overflow-hidden bg-white/5 shadow-md">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={card.img} alt={card.title} />
                </div>
                <div className="pt-4 border-t border-violet-400/30 flex flex-col gap-2">
                  <h3 className="text-lg font-bold   text-white tracking-tight">{card.title}</h3>
                  <p className="text-sm text-gray-400   leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: RELATED TRUST RESOURCES (INTERACTIVE RESOURCE ROW)
         ========================================================== */}
      <section 
        ref={sec3Ref}
        className="w-full py-20 lg:py-28 bg-indigo-50 dark:bg-gray-900 border-b border-violet-100 dark:border-gray-800 transition-colors duration-300 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-12">
          <div className={`flex flex-col items-start gap-3 transition-all duration-1000 transform ${sec3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-widest uppercase  ">RELATED TRUST RESOURCES</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white  ">Explore the right destination.</h2>
          </div>

          <div className={`w-full bg-white dark:bg-gray-800/40 border border-violet-100 dark:border-gray-800/60 rounded-2xl divide-y divide-violet-100 dark:divide-gray-800 shadow-sm transition-all duration-1000 delay-200 transform ${sec3Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {[
              { title: "Security Center", desc: "Vulnerability reporting, security review, and account protection.", label: "Visit Security Center", icon:"/report-concern/SVG (6).png", href: "/security-center" },
              { title: "Responsible AI", desc: "AI output, misuse, summary accuracy, and governance concerns.", label: "Responsible AI", icon:"/report-concern/Vector.png", href: "/responsive-ai" },
              { title: "Privacy & Data", desc: "Data requests, privacy concerns, and workspace data handling.", label: "Privacy & Data", icon:"/report-concern/SVG (7).png", href: "/privacy" },
              { title: "Compliance", desc: "Enterprise assurance, control review, and compliance questions.", label: "Compliance", icon:"/report-concern/SVG (8).png", href: "/compliance" },
              { title: "Subprocessors", desc: "Vendor and subprocessor questions and update notifications.", label: "Subprocessors", icon:"/report-concern/SVG (9).png", href: "/subprocessors" },
              { title: "Accessibility", desc: "Accessibility statement, barrier reporting, and support routes.", label: "Accessibility", icon:"/report-concern/SVG (10).png", href: "/accessibility" }
            ].map((res, i) => (
              <Link key={i} href={res.href} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-violet-50/30 dark:hover:bg-gray-800/60 transition-colors duration-200 cursor-pointer">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-2.5 bg-violet-100 dark:bg-violet-950/60 rounded-xl shrink-0"><img 
                      className="w-6 h-6 object-contain" 
                      src={res.icon} 
                      alt={`${res.title} icon`} 
                    />    </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white  ">{res.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1   max-w-xl">{res.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm   tracking-wide self-end sm:self-center group-hover:translate-x-1 transition-transform">
                  <span>{res.label}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: NEED HELP CTA (HERO ACTIONS BANNER)
         ========================================================== */}
      <section 
        ref={sec4Ref} 
        className="w-full py-20 bg-gradient-to-br from-violet-600 via-violet-600 to-violet-800 text-white overflow-hidden text-center relative px-6 flex justify-center items-center"
      >
        <div className={`max-w-3xl flex flex-col items-center gap-6 transition-all duration-1000 transform ${sec4Visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold   tracking-tight leading-tight">Need help choosing the right concern<br className="hidden sm:inline" /> route?</h2>
          <p className="text-purple-200 text-sm sm:text-base   max-w-2xl leading-relaxed">Start a protected concern report, visit the Security Center, review Privacy & Data resources, or contact support if your issue is urgent or account-related.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <a href="#report-concern" className="w-full sm:w-auto px-8 py-3.5 bg-white text-violet-600 font-bold text-sm rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all inline-flex items-center justify-center">Report a Concern</a>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white/20 border border-white/30 text-white font-semibold   text-sm rounded-full hover:bg-white/30 transition-all">Get Support</button>
            <Link href="/security-center" className="w-full sm:w-auto px-8 py-3.5 bg-white/20 border border-white/30 text-white font-semibold text-sm rounded-full hover:bg-white/30 transition-all inline-flex items-center justify-center">Visit Security Center</Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 5: REPORT A CONCERN FAQ (ACCORDION STACK)
         ========================================================== */}
      <section 
        ref={sec5Ref} 
        className="w-full py-20 lg:py-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12 items-center">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight   text-center transition-all duration-1000 transform ${sec5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Report a Concern FAQ</h2>
          <div className={`w-full border-t border-violet-100 dark:border-gray-800 transition-all duration-1000 delay-200 transform ${sec5Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {[
              { q: "What can I report here?", a: "Security, privacy, responsible AI, accessibility, acceptable use and abuse, legal, account safety, and product concerns. Pick the route that fits best — you can change it before submitting without losing what you typed." },
              { q: "What should I not put in the form?", a: "Do not include production credentials, plain-text account passwords, full unmasked primary account payment numbers (PAN), private encryption keys, or highly confidential customer profiles." },
              { q: "How fast will I get a response?", a: "Response times depend directly on the route classification and marked urgency status. Standard triage issues receive a follow-up assignment within 48 business hours." },
              { q: "Can I report a security vulnerability safely?", a: "Yes. All communications incoming through our dedicated trust portal are completely secure, encrypted in transit, and restricted directly to targeted operational support lines." },
              { q: "I can’t complete the form due to an accessibility barrier.", a: "If you encounter any layout or validation engine blockers using clear assistive software frameworks, please reach out to alternate access workflows at trust-compliance@domain.com." }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-violet-100 dark:border-gray-800 transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left   font-bold text-base text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="p-1 bg-violet-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 rounded-lg transition-transform duration-300 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 stroke-[2.5px]" /> : <Plus className="w-4 h-4 stroke-[2.5px]" />}
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm   text-gray-600 dark:text-gray-400 leading-relaxed pl-1 max-w-3xl">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
