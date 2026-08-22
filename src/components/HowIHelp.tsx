import React from 'react';
import { ArrowUpRight, Check, CalendarCheck, MessageSquare } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const HowIHelp: React.FC = () => {
  const { howIHelp } = PORTFOLIO_CONFIG;

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

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#services');
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
    <section id="help" className="py-20 lg:py-28 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Transformation & Focus Areas
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            How I Help
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            My guidance centers on cultivating calm, emotional clarity, sustained energy, and repeatable daily practices.
          </p>
        </div>

        {/* 5 Core Outcomes Grid + Editorial Direct Invitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {howIHelp.map((item, idx) => (
            <div
              key={idx}
              id={`help-outcome-${idx}`}
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#E2DAD0] shadow-[0_2px_16px_rgba(40,32,20,0.03)] hover:shadow-[0_12px_28px_rgba(40,32,20,0.06)] hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EAE0]">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#0284C7]">
                    {item.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#BAE6FD]" />
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#24211D] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#555047] font-light leading-[1.7]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE0] flex items-center gap-2 text-xs text-[#767067] font-light">
                <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Customized to your personal lifestyle</span>
              </div>
            </div>
          ))}

          {/* Editorial Invitation Card */}
          <div className="bg-[#24211D] rounded-[24px] p-7 sm:p-8 text-white flex flex-col justify-between shadow-[0_12px_36px_rgba(36,33,29,0.12)]">
            <div>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#38BDF8] mb-3 block">
                Direct Guidance
              </span>
              <h3 className="font-serif text-2xl sm:text-[26px] font-normal mb-3 leading-snug text-[#FAF8F5]">
                Ready to cultivate lasting inner calm?
              </h3>
              <p className="text-sm text-[#D5CDBD] font-light leading-relaxed">
                Take the first mindful step toward reducing mental clutter and reconnecting with your intuitive peace.
              </p>
            </div>

            <div className="mt-8 space-y-2.5">
              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs flex items-center justify-center gap-2 min-h-[46px]"
              >
                <CalendarCheck className="w-4 h-4 text-[#BAE6FD]" />
                <span>Book a Wellness Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full py-2.5 text-center text-xs text-[#BAE6FD] hover:text-white font-medium transition-colors"
              >
                Explore Offerings & Services &darr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
