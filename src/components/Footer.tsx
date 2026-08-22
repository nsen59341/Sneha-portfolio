import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Heart } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { contact } = PORTFOLIO_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1816] text-[#D5CDBD] py-16 lg:py-20 border-t border-[#2D2A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#2D2A26]">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif text-2xl font-normal tracking-[-0.01em] text-[#FAF8F5]">
              {PORTFOLIO_CONFIG.name}
            </span>
            <p className="text-xs text-[#8A8377] font-light mt-1 max-w-md">
              {PORTFOLIO_CONFIG.credentials}
            </p>
          </div>

          {/* Social Links & Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-light tracking-wider uppercase">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#B3ABA0] hover:text-[#38BDF8] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#B3ABA0] hover:text-[#38BDF8] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={contact.emailMailto}
              className="flex items-center gap-2 text-[#B3ABA0] hover:text-[#38BDF8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={contact.phoneTel}
              className="flex items-center gap-2 text-[#B3ABA0] hover:text-[#38BDF8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright & note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#767067] font-light text-center sm:text-left">
          <p>
            &copy; {currentYear} {PORTFOLIO_CONFIG.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Guiding you to intentional stillness and mindful presence.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
