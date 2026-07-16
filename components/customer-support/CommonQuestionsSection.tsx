"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQAccordionItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-2xl border border-black/5 dark:border-slate-800 bg-slate-50 dark:bg-gray-800/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={isOpen}
      >
        <span className="text-slate-900 dark:text-white text-sm font-bold   leading-5 pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`size-4 text-gray-505 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
          }`} 
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-40 border-t border-black/[0.03] dark:border-slate-700/50' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 text-xs font-normal  leading-relaxed text-gray-500 dark:text-gray-400">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function CommonQuestionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is Zoiko Sema for customer support?",
      answer: "Zoiko Sema is an operational support environment that integrates internal team workspaces, smart knowledge panels, and strict AI governance pipelines to scale complex operations safely."
    },
    {
      question: "Is this the page for getting help with Zoiko Sema?",
      answer: "This page describes our product capabilities. For direct customer platform documentation or specialized help-desk pipelines, navigate to our dedicated resources center."
    },
    {
      question: "Does Zoiko Sema replace our help desk or CRM?",
      answer: "Sema acts as a high-performance orchestration and routing layer that works alongside your existing CRM infrastructure rather than completely replacing database layers."
    },
    {
      question: "Can customers collaborate inside Sema?",
      answer: "Yes, via secure connected customer spaces. However, client views are completely isolated from internal specialist workflows and notes by default."
    },
    {
      question: "Can AI respond to customers automatically?",
      answer: "No. Our core alignment policy mandates that AI assists with drafts and taxonomy, but authorized people must always review and execute final commitments."
    },
    {
      question: "How are internal notes kept private?",
      answer: "Internal collaboration surfaces exist on an explicitly separate layer governed by cryptographic visibility scopes that restrict data transfer outside internal pipelines."
    },
    {
      question: "How are security or privacy cases handled?",
      answer: "Sensitive contexts trigger specialized compliance workflows that isolate logs, enforce automated data retention restrictions, and restrict baseline LLM processing."
    },
    {
      question: "Does Zoiko Sema score support agents?",
      answer: "No. Sema measures process performance, metadata trends, and pipeline freshness targets, eliminating individual employee monitoring or hidden surveillance metrics."
    }
  ];

  return (
    <section 
      ref={targetRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1248px] mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-500 dark:text-teal-400 text-xs font-semibold  uppercase tracking-wide">
              COMMON QUESTIONS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight">
            Every objection answered.
          </h2>
        </div>

        {/* Responsive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, idx) => (
            <FAQAccordionItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}