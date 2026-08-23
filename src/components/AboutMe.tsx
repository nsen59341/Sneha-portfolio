import React from 'react';
import { ArrowUpRight, Check, Compass, MessageSquare, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const { aboutMe, credibilityLine, images } = PORTFOLIO_CONFIG;

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

  const scrollToSupport = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#support');
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
    <section id="about" className="py-20 lg:py-28 bg-[#F5EFEB] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#E0F2FE]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EFE7DC] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              About Sneha • Philosophy & Purpose
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            A Space to Slow Down & Reconnect
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#767067]">
            {credibilityLine}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Framed Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="relative bg-white p-3.5 sm:p-4 rounded-[28px] border border-[#E2DAD0] shadow-[0_12px_36px_rgba(40,32,20,0.06)]">
                <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] bg-[#EAE4D9]">
                  <img
                    src={images.snehaMeditate}
                    alt="Sneha Bhingare - Certified Meditation Coach & Reiki Healer"
                    className="w-full h-full object-contain object-[center_22%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Philosophy Quote Inset */}
                <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#0284C7] block mb-1">
                    Guiding Principle
                  </span>
                  <p className="font-serif text-base text-[#24211D] italic font-medium leading-snug">
                    "{aboutMe.highlightQuote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Values */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#24211D] leading-snug mb-5">
              {aboutMe.headline}
            </h3>

            <div className="space-y-4 text-base sm:text-[17px] text-[#555047] leading-[1.75] font-light mb-8">
              {aboutMe.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              {aboutMe.coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="p-4.5 rounded-2xl bg-white/90 border border-[#E5DFD5] shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#24211D] mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-[#767067] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="about-connect-btn"
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 min-h-[46px]"
              >
                <CalendarCheck className="w-4 h-4 text-[#BAE6FD]" />
                <span>Let's Connect</span>
              </button>
              
              <button
                onClick={scrollToSupport}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#555047] hover:text-[#24211D] border border-[#E2DAD0] text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center min-h-[46px]"
              >
                <span>Explore Who I Support &darr;</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
