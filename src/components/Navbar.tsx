import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Linkedin, MessageSquare, ArrowUpRight, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Who I Support', href: '#support' },
    { label: 'How I Help', href: '#help' },
    { label: 'Approach', href: '#approach' },
    { label: 'Services', href: '#services' },
    { label: 'Reels', href: '#videos' },
    { label: 'Stories', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(40,32,20,0.05)] border-b border-[#E8E1D5] py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a 
            id="brand-logo"
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group min-h-[44px]"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D5CDBD] shadow-2xs group-hover:border-[#0284C7] transition-colors shrink-0 bg-[#EFE9DE]">
              <img
                src={PORTFOLIO_CONFIG.images.heroPortrait}
                alt="Sneha Bhingare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#24211D] group-hover:text-[#0284C7] transition-colors leading-none">
                {PORTFOLIO_CONFIG.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-[#767067] mt-1">
                Meditation & Reiki Coach
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#E8E1D5] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-[13px] font-medium text-[#4E4942] hover:text-[#0284C7] hover:bg-[#FAF8F5] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-book-session-btn"
              onClick={scrollToContact}
              className="group px-5 py-2.5 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 min-h-[44px]"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#BAE6FD]" />
              <span>Book a Session</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger & Quick Action */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-nav-book-shortcut"
              onClick={scrollToContact}
              className="sm:hidden px-3.5 py-2 rounded-full bg-[#0284C7] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-2xs min-h-[40px]"
            >
              <span>Book Session</span>
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-[#24211D] bg-white/80 border border-[#E2DAD0] hover:bg-[#EAE4D8] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D5] shadow-xl animate-fadeIn px-5 py-6 mt-3 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-1 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-3 px-4 text-base font-medium text-[#24211D] hover:bg-[#F0EAE0] hover:text-[#0284C7] rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A8377]" />
              </a>
            ))}
          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-4 border-t border-[#E8E1D5] space-y-3">
            <button
              id="mobile-drawer-book-session-btn"
              onClick={scrollToContact}
              className="w-full py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Wellness Session</span>
            </button>

            <a
              id="mobile-drawer-whatsapp-btn"
              href={PORTFOLIO_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="pt-2 flex items-center justify-center gap-6 text-xs text-[#767067]">
              <a href={PORTFOLIO_CONFIG.contact.phoneTel} className="flex items-center gap-1.5 p-2 text-[#0284C7] font-medium">
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
              <a href={PORTFOLIO_CONFIG.contact.emailMailto} className="flex items-center gap-1.5 p-2 text-[#0284C7] font-medium">
                <Mail className="w-4 h-4" />
                <span>Email Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
