'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TeamCard {
  id: string;
  initials: string;
  title: string;
  description: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  darkIconBgColor: string;
  darkIconTextColor: string;
}

function useElementInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function TeamsMovementSection() {
  const { ref: headerRef, inView: headerInView } = useElementInView(0.1);
  const { ref: itemsRef, inView: itemsInView } = useElementInView(0.05);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxSlides, setMaxSlides] = useState(3);

  const cards: TeamCard[] = [
    {
      id: 'lc',
      initials: 'LC',
      title: 'Leadership coordination',
      description: <>Keep decisions and priorities visible across the leadership team.</>,
      iconBgColor: 'bg-violet-100',
      iconTextColor: 'text-violet-600',
      darkIconBgColor: 'dark:bg-violet-950/50',
      darkIconTextColor: 'dark:text-violet-400',
    },
    {
      id: 'oh',
      initials: 'OH',
      title: 'Operations handoffs',
      description: <>Move work between shifts, teams, and departments without losing context.</>,
      iconBgColor: 'bg-sky-100',
      iconTextColor: 'text-sky-700',
      darkIconBgColor: 'dark:bg-sky-950/50',
      darkIconTextColor: 'dark:text-sky-400',
    },
    {
      id: 'sa',
      initials: 'SA',
      title: 'Sales and account teams',
      description: <>Coordinate deals, renewals, and client communication in one place.</>,
      iconBgColor: 'bg-emerald-50',
      iconTextColor: 'text-green-600',
      darkIconBgColor: 'dark:bg-emerald-950/30',
      darkIconTextColor: 'dark:text-emerald-400',
    },
    {
      id: 'cs',
      initials: 'CS',
      title: 'Customer support teams',
      description: <>Track escalations and client threads with clear ownership.</>,
      iconBgColor: 'bg-yellow-50',
      iconTextColor: 'text-yellow-600',
      darkIconBgColor: 'dark:bg-yellow-950/30',
      darkIconTextColor: 'dark:text-yellow-400',
    },
    {
      id: 'pd',
      initials: 'PD',
      title: 'Project delivery',
      description: <>Connect meetings, files, and decisions to the projects they belong to.</>,
      iconBgColor: 'bg-violet-100',
      iconTextColor: 'text-indigo-800',
      darkIconBgColor: 'dark:bg-indigo-950/50',
      darkIconTextColor: 'dark:text-indigo-400',
    },
    {
      id: 'rh',
      initials: 'RH',
      title: 'Remote and hybrid teams',
      description: <>Stay aligned across time zones with organized channels and recaps.</>,
      iconBgColor: 'bg-violet-100',
      iconTextColor: 'text-violet-600',
      darkIconBgColor: 'dark:bg-violet-950/50',
      darkIconTextColor: 'dark:text-violet-400',
    },
  ];

  // Recalculate viewable slide intervals dynamically based on viewport sizing constraints
  useEffect(() => {
    const updateSlidesCount = () => {
      if (!scrollContainerRef.current) return;
      const { clientWidth } = scrollContainerRef.current;
      
      let visibleCardsCount = 1;
      if (clientWidth >= 1024) visibleCardsCount = 4;
      else if (clientWidth >= 640) visibleCardsCount = 2;

      const dynamicSlidesPossible = cards.length - visibleCardsCount + 1;
      setMaxSlides(dynamicSlidesPossible > 0 ? dynamicSlidesPossible : 1);
    };

    updateSlidesCount();
    window.addEventListener('resize', updateSlidesCount);
    return () => window.removeEventListener('resize', updateSlidesCount);
  }, [cards.length]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft } = scrollContainerRef.current;
    
    // Width computed via card allocation element: 286px + 24px layout gaps = 310px
    const index = Math.round(scrollLeft / 310);
    if (index !== activeIndex && index >= 0 && index < maxSlides) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      left: index * 310,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIndex = activeIndex === 0 ? maxSlides - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === maxSlides - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-16 lg:py-24 font-sans antialiased transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 space-y-10 lg:space-y-12">
        
        {/* Header Block Section */}
        <div 
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Built for the teams that keep<br />business moving.
            </h2>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button 
              onClick={handlePrev}
              aria-label="Previous slide" 
              className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-300 bg-white dark:bg-slate-900 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 text-base font-normal transition-all duration-200 active:scale-95 group/arrow"
            >
              <span className="transform transition-transform duration-200 group-hover/arrow:-translate-x-0.5">←</span>
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next slide" 
              className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-300 bg-white dark:bg-slate-900 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 text-base font-normal transition-all duration-200 active:scale-95 group/arrow"
            >
              <span className="transform transition-transform duration-200 group-hover/arrow:translate-x-0.5">→</span>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Deck */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto pb-6 -mx-6 px-6 scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          <div ref={itemsRef} className="flex gap-6 w-max">
            {cards.map((card, idx) => (
              <div 
                key={card.id}
                className={`w-[286px] h-64 bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800/80 p-6 flex flex-col justify-between snap-start group transition-all duration-500 ease-out ${
                  itemsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0px_20px_40px_-15px_rgba(109,40,217,0.12)] dark:hover:shadow-[0px_20px_40px_-15px_rgba(0,0,0,0.4)] hover:border-violet-300 dark:hover:border-slate-700`}
                style={{ transitionDelay: itemsInView ? `${idx * 60}ms` : '0ms' }}
              >
                <div className="space-y-4">
                  {/* Avatar Icon Pill */}
                  <div className={`w-10 h-10 ${card.iconBgColor} ${card.darkIconBgColor} rounded-xl flex items-center justify-center font-bold text-base ${card.iconTextColor} ${card.darkIconTextColor} transition-colors duration-300`}>
                    {card.initials}
                  </div>
                  
                  {/* Content Elements */}
                  <div className="space-y-2">
                    <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link Elements */}
                <div>
                  <button className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 text-sm font-bold inline-flex items-center gap-1 group/btn transition-colors duration-200">
                    Learn more 
                    <span className="transform transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Connected Dots Indicators - Perfectly Centered */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-md transition-all duration-300 ${
                activeIndex === i 
                  ? 'w-6 bg-violet-600 dark:bg-violet-500' 
                  : 'w-2 bg-violet-200 dark:bg-slate-800 hover:bg-violet-300 dark:hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}