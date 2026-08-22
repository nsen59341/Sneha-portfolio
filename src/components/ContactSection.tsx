import React, { useState } from 'react';
import { Phone, Mail, Instagram, Linkedin, MessageSquare, Copy, Check, ExternalLink, Globe2, Clock, MapPin, Video, Heart } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = PORTFOLIO_CONFIG;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAF8F5] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Inquiries & Direct Dialogue
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            Reach out directly for personalized 1-on-1 meditation guidance, corporate wellness workshops, or studio collaborations.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Sneha Profile & Primary Direct Action Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#E5DFD5] shadow-[0_4px_24px_rgba(40,32,20,0.03)]">
              
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 mb-8 border-b border-[#F0EAE0]">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-[#D5CDBD] shadow-sm shrink-0 bg-[#F5EFEB]">
                  <img
                    src={PORTFOLIO_CONFIG.images.heroPortrait}
                    alt="Sneha Bhingare"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#24211D] leading-tight">
                    {PORTFOLIO_CONFIG.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0284C7] mt-1">
                    Certified Meditation Coach • Corporate Wellness Coach • Reiki Healer
                  </p>
                  <p className="text-xs text-[#767067] font-light mt-1.5">
                    Direct access for 1-on-1 mindfulness, guided sessions, and corporate initiatives.
                  </p>
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <div className="p-5 sm:p-6 rounded-[22px] bg-[#F4FBF7] border border-[#C6ECD8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#166534] block">
                        WhatsApp (Direct & Preferred)
                      </span>
                      <p className="font-serif text-lg font-medium text-[#14532D] mt-0.5">
                        {contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(contact.phone, 'whatsapp')}
                      className="p-2.5 rounded-full bg-white text-[#166534] border border-[#A7E6C2] text-xs transition-all hover:bg-[#E8F8EE]"
                      title="Copy WhatsApp number"
                    >
                      {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      id="contact-whatsapp-btn"
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="p-5 rounded-[22px] bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#BAE6FD] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2DAD0] text-[#0284C7] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.18em] uppercase text-[#767067] font-medium block">
                        Phone Call
                      </span>
                      <p className="font-serif text-base sm:text-lg font-medium text-[#24211D]">
                        {contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(contact.phone, 'phone')}
                      className="p-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#767067] border border-[#E2DAD0] text-xs transition-all"
                      title="Copy phone number"
                    >
                      {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      id="contact-phone-call-btn"
                      href={contact.phoneTel}
                      className="px-5 py-2.5 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs tracking-wider uppercase font-semibold transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <span>Call Direct</span>
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-5 rounded-[22px] bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#BAE6FD] transition-colors">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2DAD0] text-[#0284C7] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] tracking-[0.18em] uppercase text-[#767067] font-medium block">
                        Email Inquiry
                      </span>
                      <p className="font-serif text-sm sm:text-base font-medium text-[#24211D] truncate">
                        {contact.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopy(contact.email, 'email')}
                      className="p-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#767067] border border-[#E2DAD0] text-xs transition-all"
                      title="Copy email address"
                    >
                      {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      id="contact-email-btn"
                      href={contact.emailMailto}
                      className="px-5 py-2.5 rounded-full bg-white hover:bg-[#24211D] text-[#24211D] hover:text-white border border-[#D5CDBD] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5"
                    >
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>

                {/* Social Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* Instagram */}
                  <a
                    id="contact-social-instagram"
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-[20px] bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#BAE6FD] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#E2DAD0] text-[#0284C7] flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] tracking-[0.16em] uppercase text-[#767067] font-medium block">Instagram</span>
                        <span className="text-xs font-medium text-[#24211D] group-hover:text-[#0284C7] transition-colors">
                          @{contact.instagramHandle}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8A8377] group-hover:text-[#0284C7] transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    id="contact-social-linkedin"
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-[20px] bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#BAE6FD] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#E2DAD0] text-[#0284C7] flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] tracking-[0.16em] uppercase text-[#767067] font-medium block">LinkedIn</span>
                        <span className="text-xs font-medium text-[#24211D] group-hover:text-[#0284C7] transition-colors">
                          {contact.linkedinHandle}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8A8377] group-hover:text-[#0284C7] transition-colors" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Availability, Format & Practical Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Session Modes */}
            <div className="bg-white rounded-[28px] p-8 border border-[#E5DFD5] shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-[1px] bg-[#0284C7]" />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#0284C7]">
                  Delivery Modalities
                </span>
              </div>
              <h4 className="font-serif text-xl font-normal text-[#24211D] mb-5">
                Session Formats
              </h4>

              <div className="space-y-3.5 text-sm text-[#555047]">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <p className="font-medium text-[#24211D] mb-1">
                    Online 1-on-1 & Group Sessions
                  </p>
                  <p className="text-xs text-[#767067] font-light leading-relaxed">
                    Delivered seamlessly via Google Meet or Zoom. Open to participants globally across all timezones.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <p className="font-medium text-[#24211D] mb-1">
                    In-Person Workshops & Retreats
                  </p>
                  <p className="text-xs text-[#767067] font-light leading-relaxed">
                    Available for corporate teams, fitness centers, healthcare practices, and wellness retreats in Pune / Maharashtra and select regions.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Guidance Info */}
            <div className="bg-white rounded-[28px] p-8 border border-[#E5DFD5] shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-[1px] bg-[#0284C7]" />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#0284C7]">
                  Practical Details
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#555047]">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#24211D]">Languages Spoken</p>
                    <p className="text-xs text-[#767067] font-light mt-0.5">
                      English, मराठी (Marathi), and हिंदी (Hindi).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#24211D]">Base Location</p>
                    <p className="text-xs text-[#767067] font-light mt-0.5">
                      Maharashtra, India (IST / UTC+5:30) • Serving worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#24211D]">Response Timing</p>
                    <p className="text-xs text-[#767067] font-light mt-0.5">
                      Messages answered personally within a few hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Guarantee */}
              <div className="mt-6 pt-5 border-t border-[#F0EAE0] flex items-center gap-2 text-xs text-[#767067] font-light">
                <Heart className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Every inquiry is received with kindness, presence, and privacy.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
