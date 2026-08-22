import React from 'react';
import { ArrowUpRight, Check, HeartPulse, Activity, MessageSquare, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const FitnessWellness: React.FC = () => {
  const { fitnessIntegration } = PORTFOLIO_CONFIG;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#contact');
    if (elem) {
      const headerOffset = 84;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="fitness" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Holistic Mind-Body Alignment
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            Mind & Fitness Integration
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            {fitnessIntegration.subheadline}
          </p>
        </div>

        {/* 5 Transformation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fitnessIntegration.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#E5DFD5] shadow-2xs hover:shadow-md hover:border-[#BAE6FD] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md mb-3 inline-block">
                  Pillar 0{pillar.step}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#24211D] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Fitness & Studio Collaboration Callout */}
          <div className="bg-[#FAF4ED] rounded-[24px] p-6 sm:p-7 border border-[#E2DAD0] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0284C7] block mb-2">
                Studio & Gym Partnerships
              </span>
              <h3 className="font-serif text-xl font-normal text-[#24211D] mb-2 leading-snug">
                Complementary Recovery Add-on
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655B] font-light leading-relaxed mb-4">
                Partner with me to integrate mindful recovery, breath regulation, and stress management into your training clientele.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors py-1 min-h-[36px]"
            >
              <span>Explore Studio Collaboration &rarr;</span>
            </button>
          </div>
        </div>

        {/* Reassurance Banner */}
        <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#24211D]">
                Sustainable Health Starts from Within
              </h4>
              <p className="text-xs sm:text-sm text-[#767067] font-light">
                When mental resistance dissolves, workout consistency and body composition follow naturally.
              </p>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs font-semibold tracking-wider uppercase transition-all shrink-0 min-h-[44px] flex items-center gap-2"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#BAE6FD]" />
            <span>Let's Connect</span>
          </button>
        </div>

      </div>
    </section>
  );
};
