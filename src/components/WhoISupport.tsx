import React from 'react';
import { ArrowUpRight, CalendarCheck, MessageSquare } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const WhoISupport: React.FC = () => {
  const { whoISupport } = PORTFOLIO_CONFIG;

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

  const romanNumerals = ['I', 'II', 'III', 'IV'];

  return (
    <section id="support" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Understanding Your Situation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            Who I Support
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            I work with individuals, professionals, and teams who desire greater balance, emotional clarity, and mindful presence in daily life.
          </p>
        </div>

        {/* 4 Bespoke Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {whoISupport.map((item, idx) => (
            <div
              key={item.id}
              id={`support-card-${item.id}`}
              className="bg-white rounded-[26px] p-7 sm:p-9 border border-[#E5DFD5] shadow-[0_4px_20px_rgba(40,32,20,0.03)] hover:shadow-[0_12px_32px_rgba(40,32,20,0.06)] hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#F0EAE0]">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#0284C7]">
                    {item.subtitle}
                  </span>
                  <span className="font-serif text-lg font-light text-[#C5BEB2] group-hover:text-[#0284C7] transition-colors">
                    {romanNumerals[idx]}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#24211D] leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#555047] font-light leading-[1.7]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#F0EAE0] flex items-center justify-between">
                <span className="text-xs text-[#8A8377] font-light">
                  Tailored 1-on-1 & corporate care
                </span>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] group-hover:translate-x-1 transition-all py-1 min-h-[36px]"
                >
                  <span>Book a Wellness Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient Editorial Quote & Invitation */}
        <div className="bg-[#F5EFEB] rounded-[24px] p-7 sm:p-10 border border-[#E2DAD0] text-center max-w-4xl mx-auto shadow-2xs">
          <p className="font-serif text-lg sm:text-xl text-[#24211D] font-normal italic leading-relaxed mb-4">
            "You don't need to be in crisis to seek stillness. Meditation is also for those who simply want to live with greater intention, energy, and inner peace."
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors py-2"
          >
            <span>Let's Connect & Start Your Journey &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
