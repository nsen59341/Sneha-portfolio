import React, { useState, useEffect } from 'react';
import { CalendarCheck, MessageSquare, Phone } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const MobileQuickBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after user has scrolled past hero section (~350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 animate-fadeIn">
      <div className="bg-[#24211D]/95 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center justify-between gap-2">
        <button
          onClick={scrollToContact}
          className="flex-1 py-2.5 px-4 rounded-full bg-[#0284C7] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-xs min-h-[44px]"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Book a Session</span>
        </button>

        <a
          href={PORTFOLIO_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-[#16A34A] text-white flex items-center justify-center min-w-[44px] min-h-[44px]"
          title="Chat on WhatsApp"
          aria-label="Chat with Sneha on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <a
          href={PORTFOLIO_CONFIG.contact.phoneTel}
          className="p-2.5 rounded-full bg-white/20 text-white flex items-center justify-center min-w-[44px] min-h-[44px]"
          title="Call Sneha directly"
          aria-label="Call Sneha"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
