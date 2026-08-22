import React, { useState } from 'react';
import { Check, Globe, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG, SupportedLanguage, TestimonialItem } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const { testimonials } = PORTFOLIO_CONFIG;
  const [globalLang, setGlobalLang] = useState<SupportedLanguage>('en');
  const [cardLangOverrides, setCardLangOverrides] = useState<Record<string, SupportedLanguage>>({});

  const setCardLanguage = (cardId: string, lang: SupportedLanguage) => {
    setCardLangOverrides((prev) => ({
      ...prev,
      [cardId]: lang,
    }));
  };

  const handleGlobalLangChange = (lang: SupportedLanguage) => {
    setGlobalLang(lang);
    setCardLangOverrides({});
  };

  const getLanguageLabel = (lang: SupportedLanguage) => {
    switch (lang) {
      case 'en': return 'English';
      case 'mr': return 'मराठी';
      case 'hi': return 'हिंदी';
    }
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Client Voices & Reflections
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-4">
            Real Stories & Experiences
          </h2>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed mb-8">
            Genuine reflections from individuals who have embraced meditation, emotional release, and quiet grounding with Sneha.
          </p>

          {/* Global Language Selector */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#E2DAD0] shadow-2xs">
            <div className="flex items-center gap-1.5 px-3 text-xs font-medium text-[#767067]">
              <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="hidden sm:inline">Language:</span>
            </div>
            
            <div className="flex items-center gap-1">
              {(['en', 'mr', 'hi'] as SupportedLanguage[]).map((lang) => {
                const isActive = globalLang === lang && Object.keys(cardLangOverrides).length === 0;
                return (
                  <button
                    key={lang}
                    id={`global-lang-btn-${lang}`}
                    onClick={() => handleGlobalLangChange(lang)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#24211D] text-white shadow-xs'
                        : 'text-[#6B655B] hover:text-[#24211D] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {lang === 'en' && 'English'}
                    {lang === 'mr' && 'मराठी'}
                    {lang === 'hi' && 'हिंदी'}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {testimonials.map((item: TestimonialItem) => {
            const currentLang = cardLangOverrides[item.id] || globalLang;
            const quoteText = item.quote[currentLang] || item.quote.en;
            const highlightText = item.highlight[currentLang] || item.highlight.en;
            const authorName = item.author[currentLang] || item.author.en;
            const contextText = item.context[currentLang] || item.context.en;

            return (
              <div
                key={item.id}
                id={`testimonial-${item.id}`}
                className="bg-white rounded-[26px] p-8 border border-[#E2DAD0] shadow-[0_2px_16px_rgba(40,32,20,0.03)] hover:shadow-[0_12px_32px_rgba(40,32,20,0.06)] hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Language Override Switch */}
                  <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-[#F0EAE0]">
                    <span className="text-[11px] font-light text-[#8A8377]">
                      Original: <strong className="text-[#24211D] font-medium">{item.originalLanguage}</strong>
                    </span>

                    <div className="flex items-center gap-1 bg-[#FAF8F5] p-0.5 rounded-full border border-[#E8E1D5]">
                      {(['en', 'mr', 'hi'] as SupportedLanguage[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => setCardLanguage(item.id, l)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all ${
                            currentLang === l
                              ? 'bg-[#0284C7] text-white shadow-2xs'
                              : 'text-[#767067] hover:text-[#24211D]'
                          }`}
                          title={`Switch to ${getLanguageLabel(l)}`}
                        >
                          {l.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Highlight pill */}
                  {highlightText && (
                    <div className="mb-4">
                      <span className="font-serif italic text-xs sm:text-[13px] text-[#0284C7] bg-[#E0F2FE]/70 px-3 py-1 rounded-full inline-block leading-relaxed">
                        "{highlightText}"
                      </span>
                    </div>
                  )}

                  {/* Quote Body */}
                  <p className="font-serif text-lg text-[#24211D] leading-[1.65] italic mb-6">
                    "{quoteText}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#F0EAE0] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#24211D] leading-tight">
                      {authorName}
                    </h3>
                    <p className="text-xs text-[#767067] font-light mt-0.5">
                      {contextText}
                    </p>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multilingual Support Note */}
        <div className="bg-white rounded-[20px] border border-[#E2DAD0] p-6 max-w-2xl mx-auto text-center shadow-2xs">
          <p className="text-xs text-[#6B655B] font-light leading-relaxed">
            Sessions and guided practices are conducted fluently in <strong>English</strong>, <strong>मराठी (Marathi)</strong>, and <strong>हिंदी (Hindi)</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
