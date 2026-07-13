"use client";
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function SecurityCenterFAQ() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open matching source mock

  const faqItems = [
    {
      question: 'What is the Zoiko Sema Security Center?',
      answer: 'The Security Center is the central trust hub for security, privacy, responsible AI, compliance, subprocessors, accessibility, concern-reporting routes, and enterprise review resources.'
    },
    {
      question: 'How do I request a security review?',
      answer: 'You can initiate a security review directly via the Compliance and Procurement channels inside the dashboard. This flags your request directly to our security compliance triage pipeline.'
    },
    {
      question: 'Where do I report a security or privacy concern?',
      answer: 'Concerns can be securely submitted via our dedicated "Report a Concern" intake channels. This ensures your message routes directly to the specialized incident response teams instead of a generic inbox.'
    },
    {
      question: 'What controls can workspace admins configure?',
      answer: 'Workspace administrators have granular access to identity parameters, SAML/SSO configurations, least-privilege role setups, data retention limits, and third-party integration controls.'
    },
    {
      question: 'How is AI governed in Zoiko Sema?',
      answer: 'AI tools operate under strict responsible governance frameworks. Admins retain absolute control to enable or disable features, manage context-sharing rules, and prevent unintended data exposures.'
    },
    {
      question: 'Where can I find data processing and subprocessor information?',
      answer: 'All active data subprocessors, compliance certificates, and our comprehensive Data Processing Addendum (DPA) are published transparently within the trust framework section.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto flex flex-col justify-start items-center gap-10">
        
        {/* Header Stack with Entrance Animation */}
        <div className={`w-full text-center space-y-3 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-extrabold tracking-tight font-sans text-slate-900 dark:text-white">
            Security Center FAQ
          </h2>
          <div className="h-1 w-12 bg-violet-600 dark:bg-violet-400 mx-auto rounded-full" />
        </div>

        {/* Accordion List Rows */}
        <div className={`w-full divide-y divide-slate-200 dark:divide-gray-800 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full py-4 transition-all duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 group focus:outline-none"
                >
                  <span className="text-base font-bold font-sans tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Indicator */}
                  <span className={`text-xl font-medium font-sans text-violet-600 dark:text-violet-400 select-none shrink-0 transition-transform duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>

                {/* Collapsible Content Wrapper */}
                <div
                  className={`grid transition-all duration-300 ease-in-out text-sm text-gray-500 dark:text-gray-400 font-sans leading-relaxed ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-2 max-w-[90%]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}