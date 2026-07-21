"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What types of research does Zoiko Sema publish?",
    answer:
      "Research papers, executive briefs, buyer guides, technical reports, and clearly labeled product analysis — each with a format label that matches its actual depth and methodology.",
  },
  {
    question: "Are the white papers free to read?",
    answer:
      "Yes. Zoiko Sema's white papers and research materials are available to read online.",
  },
  {
    question: "Can I read the content without downloading a PDF?",
    answer:
      "Yes. Where available, research content can be read directly online without downloading a PDF.",
  },
  {
    question: "How are claims and statistics verified?",
    answer:
      "Material claims follow a governed evidence process that records the source, owner, access date, methodology, review status, and revalidation requirements.",
  },
  {
    question: "Does Zoiko Sema use AI to write white papers?",
    answer:
      "AI may assist with outlining and editing, but it does not fabricate evidence or author the research itself.",
  },
  {
    question: "What happens when a paper is updated?",
    answer:
      "Updated papers retain stable URLs and version history. Superseded editions remain traceable and provide a route to the current edition.",
  },
];

export default function WhitePapersFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F3F1FA] px-6 py-24"
    >
      <div className="mx-auto max-w-[860px]">

        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="font-mono text-xs font-bold text-[#6C4FE0]">
            FAQ
          </p>

          <h2 className="mt-4 text-[34px] font-extrabold leading-[1.25] text-[#14162B]">
            Format, evidence, access, and
            <br />
            citation.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 100 + 200}ms`
                    : "0ms",
                }}
                className={`group overflow-hidden rounded-xl border border-[#E8E5F2] bg-white transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#D7D0F4] hover:shadow-[0_12px_30px_rgba(108,79,224,0.10)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[14.5px] font-bold text-[#14162B] transition-colors duration-300 group-hover:text-[#6C4FE0]">
                    {faq.question}
                  </span>

                  <span
                    className={`ml-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[19px] font-bold text-[#6C4FE0] transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#F3F1FA]"
                        : "rotate-0 group-hover:bg-[#F3F1FA]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[13.5px] leading-[22.28px] text-[#4A5D75]">
                      {faq.answer}
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