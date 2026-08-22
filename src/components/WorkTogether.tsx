import React from 'react';
import { ArrowUpRight, Check, CalendarCheck, MessageSquare } from 'lucide-react';
import { PORTFOLIO_CONFIG, ServiceItem } from '../data/portfolioData';

export const WorkTogether: React.FC = () => {
  const { services } = PORTFOLIO_CONFIG;

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
    <section id="services" className="py-20 lg:py-28 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Practices & Offerings
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            How We Can Work Together
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            Tailored pathways designed for individuals seeking deep personal harmony, corporate teams, and fitness communities.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {services.map((service: ServiceItem, idx: number) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-[26px] p-7 sm:p-9 border border-[#E2DAD0] shadow-[0_4px_20px_rgba(40,32,20,0.03)] hover:shadow-[0_16px_36px_rgba(40,32,20,0.07)] hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EAE0]">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#0284C7]">
                    Offering {romanNumerals[idx]}
                  </span>
                  <span className="text-xs text-[#8A8377] font-medium">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#24211D] mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#555047] font-light leading-[1.7] mb-5">
                  {service.description}
                </p>

                {/* Ideal Context */}
                <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8E1D5] mb-5">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#767067] block mb-1">
                    Ideal For
                  </span>
                  <p className="text-xs text-[#555047] font-light leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                {/* Scope Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#24211D] block mb-1.5">
                    What is Included:
                  </span>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#555047] font-light">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-[#F0EAE0]">
                <button
                  id={`btn-service-${service.id}`}
                  onClick={scrollToContact}
                  className="w-full py-3.5 px-6 rounded-full bg-[#FAF8F5] hover:bg-[#24211D] text-[#24211D] hover:text-white border border-[#DCD5C9] hover:border-transparent text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xs min-h-[46px]"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-[#0284C7] group-hover:text-[#BAE6FD]" />
                  <span>Book a Wellness Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Arrangements Note */}
        <div className="text-center max-w-2xl mx-auto bg-white/70 p-5 rounded-2xl border border-[#E2DAD0]">
          <p className="text-xs sm:text-sm text-[#767067] font-light">
            Need a bespoke format, multi-day retreat, or custom corporate wellness cadence?{' '}
            <button
              onClick={scrollToContact}
              className="text-[#0284C7] font-medium underline underline-offset-4 hover:text-[#0369A1] transition-colors"
            >
              Let's connect to design your custom program &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
