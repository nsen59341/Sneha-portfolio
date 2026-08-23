import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, Heart, Sparkles, MessageSquare, Check, User, Target, Layers, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');

  useEffect(() => {
    const phases: Array<'Inhale' | 'Hold' | 'Exhale' | 'Rest'> = ['Inhale', 'Hold', 'Exhale', 'Rest'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setBreathPhase(phases[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const elem = document.querySelector(sectionId);
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

  const quickPillars = [
    {
      id: 'who-she-is',
      step: '01',
      title: 'Who Sneha Is',
      desc: 'Certified Meditation Coach, Corporate Wellness Guide & Reiki Healer',
      target: '#about'
    },
    {
      id: 'who-she-helps',
      step: '02',
      title: 'Who She Helps',
      desc: 'Professionals with burnout, stress, sleep issues & fitness seekers',
      target: '#support'
    },
    {
      id: 'what-she-offers',
      step: '03',
      title: 'What She Offers',
      desc: '1-on-1 Sessions, Reiki Healing, Weekly Groups & Corporate Programs',
      target: '#services'
    },
    {
      id: 'how-to-work',
      step: '04',
      title: 'How To Work Together',
      desc: 'Online globally via Zoom/Meet & in-person workshops with 1-tap booking',
      target: '#contact'
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E0F2FE]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#F5EFEB] rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle organic water ripple circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] pointer-events-none -z-10 opacity-30">
        <div className="absolute inset-0 rounded-full border border-[#E8E1D5]/60 animate-water-ripple" />
        <div className="absolute inset-0 rounded-full border border-[#BAE6FD]/40 animate-water-ripple-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DAD0] shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0284C7]">
                Certified Meditation Coach • Open for Sessions
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-[-0.02em] text-[#24211D] leading-[1.1] mb-6">
              Find Your Calm. <br />
              <span className="italic font-normal text-[#0284C7]">
                Reconnect
              </span>{' '}
              With Yourself.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#555047] font-normal leading-[1.7] max-w-xl mb-8">
              I help individuals, working professionals, and teams cultivate quiet clarity, emotional balance, and restorative peace through practical meditation, breathwork, and Reiki healing.
            </p>

            {/* Strategic CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-book-session-cta"
                onClick={() => scrollToSection('#contact')}
                className="group px-7 py-4 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(36,33,29,0.12)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.25)] flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <CalendarCheck className="w-4 h-4 text-[#BAE6FD]" />
                <span>Book a Wellness Session</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-approach-cta"
                onClick={() => scrollToSection('#approach')}
                className="px-6 py-4 rounded-full bg-white hover:bg-[#F5EFEB] text-[#24211D] border border-[#E2DAD0] text-xs tracking-wider uppercase font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-2xs min-h-[48px]"
              >
                <Compass className="w-4 h-4 text-[#0284C7]" />
                <span>Explore My Approach</span>
              </button>
            </div>

            {/* Reassurance Micro-Pills */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#767067]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                Online & In-Person
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                English, मराठी & हिंदी
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                Zero Pressure • Confidential
              </span>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[400px]">
              
              {/* Soft Aura */}
              <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-b from-[#BAE6FD]/30 to-transparent blur-md -z-10 animate-luxury-breathe" />

              {/* Portrait Container */}
              <div className="relative bg-white p-3.5 sm:p-4 rounded-[30px] border border-[#E5DFD5] shadow-[0_16px_40px_rgba(40,32,20,0.06)] overflow-hidden">
                <div className="relative rounded-[22px] overflow-hidden aspect-[3/4] bg-[#EFE8DE]">
                  <img
                    src={PORTFOLIO_CONFIG.images.heroPortrait}
                    alt="Sneha Bhingare - Certified Meditation Coach & Corporate Wellness Guide"
                    className="w-full h-full object-cover object-[center_18%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Identity Strip */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-serif text-lg font-bold text-[#24211D] leading-tight">
                          Sneha Bhingare
                        </h2>
                        <p className="text-[11px] font-semibold text-[#0284C7] mt-0.5">
                          Meditation & Corporate Wellness Coach
                        </p>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Active Practice" />
                    </div>
                  </div>
                </div>

                {/* Breathing Rhythm Sync */}
                <div className="mt-3 pt-3 border-t border-[#F0EBE2] px-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0284C7]" />
                    <span className="text-[11px] tracking-wider uppercase font-semibold text-[#767067]">
                      Breath: <strong className="text-[#24211D]">{breathPhase}</strong>
                    </span>
                  </div>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    Let's Connect &rarr;
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5-SECOND CLARITY STRIP: At-a-Glance Overview */}
        <div className="w-full bg-white rounded-[26px] p-6 sm:p-8 border border-[#E5DFD5] shadow-[0_4px_24px_rgba(40,32,20,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#F0EAE0]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0284C7]">
                Quick Orientation • Understand in 5 Seconds
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#24211D] mt-0.5">
                The Core Journey at a Glance
              </h3>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors shrink-0"
            >
              <span>Book a Wellness Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickPillars.map((p) => (
              <div 
                key={p.id}
                onClick={() => scrollToSection(p.target)}
                className="p-4 rounded-2xl bg-[#FAF8F5] hover:bg-[#F0F9FF] border border-[#E8E1D5] hover:border-[#BAE6FD] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-md">
                      {p.step}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8377] group-hover:text-[#0284C7] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#24211D] mb-1 group-hover:text-[#0284C7] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#6B655B] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
