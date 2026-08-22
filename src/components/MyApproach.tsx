import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Check, CalendarCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const MyApproach: React.FC = () => {
  const { myApproach } = PORTFOLIO_CONFIG;

  // Interactive 1-Minute Breath Tool State
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let cycleTimer: NodeJS.Timeout;

    if (isBreathingActive) {
      // Overall 60 second countdown
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsBreathingActive(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);

      // 16-second box breathing cycle: 4s Inhale, 4s Hold, 4s Exhale, 4s Rest
      const phases: Array<'Inhale' | 'Hold' | 'Exhale' | 'Rest'> = ['Inhale', 'Hold', 'Exhale', 'Rest'];
      let step = 0;
      setBreathPhase('Inhale');

      cycleTimer = setInterval(() => {
        step = (step + 1) % 4;
        setBreathPhase(phases[step]);
      }, 4000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(cycleTimer);
    };
  }, [isBreathingActive]);

  const toggleBreathing = () => {
    if (!isBreathingActive) {
      setSecondsRemaining(60);
      setIsBreathingActive(true);
    } else {
      setIsBreathingActive(false);
    }
  };

  const resetBreathing = () => {
    setIsBreathingActive(false);
    setSecondsRemaining(60);
    setBreathPhase('Inhale');
  };

  const getPhaseInstruction = () => {
    switch (breathPhase) {
      case 'Inhale':
        return 'Gently draw breath inward through the nose... expanding your diaphragm with ease.';
      case 'Hold':
        return 'Hold softly with a relaxed neck, peaceful chest, and quiet mind.';
      case 'Exhale':
        return 'Release slowly through the mouth... letting tension dissolve naturally.';
      case 'Rest':
        return 'Rest in effortless stillness before the next conscious breath.';
    }
  };

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
    <section id="approach" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#0284C7]" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#0284C7]">
              Modalities & Techniques
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#24211D] leading-tight mb-3">
            My Approach
          </h2>
          <p className="font-serif text-xl sm:text-2xl italic text-[#0284C7] mb-2">
            Simple practices. Meaningful change.
          </p>
          <p className="text-base sm:text-lg text-[#6B655B] font-light leading-relaxed">
            I integrate practical, sustainable techniques that harmonize seamlessly with modern life.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {myApproach.map((item, idx) => (
            <div
              key={item.id}
              id={`approach-card-${item.id}`}
              className="bg-white rounded-[26px] p-7 sm:p-9 border border-[#E5DFD5] shadow-[0_4px_20px_rgba(40,32,20,0.03)] hover:shadow-[0_12px_32px_rgba(40,32,20,0.06)] hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EAE0]">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0284C7]">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#8A8377] font-light italic">
                    {item.essence}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#24211D] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#555047] font-light leading-[1.7]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE0] flex items-center gap-2 text-xs text-[#767067] font-light">
                <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Included in personalized 1-on-1 & corporate sessions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Experience: 1-Minute Mindful Breath Reset */}
        <div className="bg-[#F5EFEB] rounded-[30px] p-7 sm:p-12 border border-[#E2DAD0] shadow-[0_12px_40px_rgba(40,32,20,0.05)] max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Practice Info */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[1px] bg-[#0284C7]" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0284C7]">
                  Interactive Sanctuary
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#24211D] mb-3 leading-tight">
                Experience a 1-Minute Reset
              </h3>
              <p className="text-sm sm:text-base text-[#6B655B] font-light leading-[1.7] mb-6">
                Take sixty seconds to allow regulated breathwork to down-regulate your nervous system and bring quiet clarity to your mind.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="breathing-toggle-btn"
                  onClick={toggleBreathing}
                  className="px-6 py-3.5 rounded-full bg-[#24211D] hover:bg-[#0284C7] text-white text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 min-h-[46px]"
                >
                  {isBreathingActive ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause Reset</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 text-[#BAE6FD]" />
                      <span>Begin 1-Minute Practice</span>
                    </>
                  )}
                </button>

                {isBreathingActive && (
                  <button
                    onClick={resetBreathing}
                    className="p-3.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#E2DAD0] text-[#555047] transition-colors min-h-[46px] min-w-[46px] flex items-center justify-center"
                    title="Reset Practice"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Breathing Sphere */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                
                {/* Concentric ripple rings */}
                <div 
                  className={`absolute inset-0 rounded-full border border-[#BAE6FD] transition-all duration-1000 ${
                    isBreathingActive && (breathPhase === 'Inhale' || breathPhase === 'Hold')
                      ? 'scale-110 opacity-70'
                      : 'scale-90 opacity-25'
                  }`}
                />

                <div 
                  className={`absolute inset-4 rounded-full bg-[#E0F2FE]/40 transition-all duration-1000 ${
                    isBreathingActive && (breathPhase === 'Inhale' || breathPhase === 'Hold')
                      ? 'scale-105 opacity-60'
                      : 'scale-95 opacity-20'
                  }`}
                />
                
                {/* Core Sphere */}
                <div 
                  className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#0284C7] shadow-[0_12px_36px_rgba(2,132,199,0.3)] flex flex-col items-center justify-center text-white text-center p-3 transition-all duration-1000 ${
                    isBreathingActive && (breathPhase === 'Inhale' || breathPhase === 'Hold')
                      ? 'scale-105'
                      : 'scale-95'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#BAE6FD]">
                    {isBreathingActive ? breathPhase : 'Practice'}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-light mt-1">
                    {isBreathingActive ? `${secondsRemaining}s` : 'Breathe'}
                  </span>
                </div>

              </div>

              <p className="text-xs text-[#6B655B] text-center mt-3 max-w-xs min-h-[40px] font-light italic">
                {isBreathingActive ? getPhaseInstruction() : 'Tap "Begin 1-Minute Practice" to start gently.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
