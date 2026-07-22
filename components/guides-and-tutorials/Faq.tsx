import React from 'react';

const Faq = () => {
  const faqs = [
    { question: 'What types of research can I conduct?' },
    { question: 'Can I access these guides via PDF?' },
    { question: 'Is HTML reading available for screen readers?' }
  ];

  return (
    <div className="w-full bg-white py-24 px-4 md:px-8 lg:px-10 flex justify-center pb-32 font-sans">
      <div className="w-full max-w-3xl flex flex-col items-center gap-10">
        <h2 className="text-[#0f172a] text-3xl font-bold leading-tight">Frequently Asked Questions</h2>
        
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full p-5 px-6 bg-[#f8f9ff] hover:bg-[#f1f5f9] transition-colors rounded-xl border border-slate-200 flex justify-between items-center cursor-pointer group">
              <span className="text-[#0f172a] text-[15px] font-semibold group-hover:text-indigo-600 transition-colors">{faq.question}</span>
              <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

