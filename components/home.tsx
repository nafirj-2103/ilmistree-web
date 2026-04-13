import React from 'react';
import { Header } from './home/Header';
import { SecondaryNavbar } from './home/SecondaryNavbar';
import { HeroSection } from './home/HeroSection';
import { CoursesSection } from './home/CoursesSection';
import { FeaturesSection } from './home/FeaturesSection';
import { ResourcesSection } from './home/ResourcesSection';
import { RecentlyAddedSection } from './home/RecentlyAddedSection';
import { ContactSection } from './home/ContactSection';
import { Footer } from './home/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

function RevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal revealed">
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />
      <RevealWrapper><HeroSection /></RevealWrapper>
      <RevealWrapper><CoursesSection /></RevealWrapper>
      <RevealWrapper><FeaturesSection /></RevealWrapper>
      <RevealWrapper><ResourcesSection /></RevealWrapper>
      <RevealWrapper><RecentlyAddedSection /></RevealWrapper>
      <RevealWrapper><ContactSection /></RevealWrapper>
      <RevealWrapper><Footer /></RevealWrapper>
    </div>
  )
}

export default Home
