import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Heart, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const FinalCTA: React.FC = () => {
  const { contact } = PORTFOLIO_CONFIG;

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
    <section className="py-20 lg:py-28 bg-[#F5EFEB] relative overflow-hidden text-center">
      {/* Calming backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#BAE6FD]/30 to-[#FEF3C7]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sneha Avatar */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#BAE6FD] mx-auto mb-6 shadow-md bg-white">
          <img
            src={PORTFOLIO_CONFIG.images.heroPortrait}
            alt="Sneha Bhingare"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Display Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211D] tracking-tight mb-5 leading-tight">
          Your Journey Toward Inner Balance <br className="hidden sm:block" />
          <span className="italic font-normal text-[#0284C7]">Can Begin Today.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#555047] font-light leading-relaxed max-w-2xl mx-auto mb-9">
          Whether you are seeking personal emotional clarity, guided breathwork, or an integrated corporate wellness program, reach out directly. Let's create your path to peace together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            id="final-book-session-cta"
            onClick={scrollToContact}
            className="px-8 py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 min-h-[48px]"
          >
            <CalendarCheck className="w-4 h-4 text-[#BAE6FD]" />
            <span>Book a Wellness Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="final-whatsapp-cta"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#24211D] border border-[#D5CDBD] text-xs tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-2 min-h-[48px] shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-[#16A34A]" />
            <span>Chat on WhatsApp &rarr;</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-[#767067] font-light">
          No prior meditation experience required • All conversations kept strictly confidential
        </p>

      </div>
    </section>
  );
};
