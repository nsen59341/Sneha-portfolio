import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { WhoISupport } from './components/WhoISupport';
import { HowIHelp } from './components/HowIHelp';
import { MyApproach } from './components/MyApproach';
import { WorkTogether } from './components/WorkTogether';
import { FitnessWellness } from './components/FitnessWellness';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211D] selection:bg-[#BAE6FD] selection:text-[#0369A1] relative overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single-Page Content Flow:
          Hero → Understand Sneha → Understand the problem → See how she helps → Explore services → Experience the videos → Connect / Book a Session
      */}
      <main className="w-full overflow-x-hidden">
        <Hero />
        <AboutMe />
        <WhoISupport />
        <HowIHelp />
        <MyApproach />
        <WorkTogether />
        <FitnessWellness />
        <VideoSection />
        <Testimonials />
        <ContactSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Frictionless Mobile Floating Quick Bar */}
      <MobileQuickBar />
    </div>
  );
}
