'use client'

import React from 'react';
import { Header } from '../components/home/Header';
import { SecondaryNavbar } from '../components/home/SecondaryNavbar';
import { HeroSection } from '../components/home/HeroSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ResourcesSection } from '../components/home/ResourcesSection';
import { RecentlyAddedSection } from '../components/home/RecentlyAddedSection';
import { ContactSection } from '../components/home/ContactSection';
import { Footer } from '../components/home/Footer';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

function RevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />
      <RevealWrapper><HeroSection /></RevealWrapper>

      {/* Uniform vertical spacing between main sections */}
      <div className="space-y-24 md:space-y-28 mt-24 md:mt-28">
        <RevealWrapper><CoursesSection /></RevealWrapper>
        <RevealWrapper><FeaturesSection /></RevealWrapper>
        <RevealWrapper><ResourcesSection /></RevealWrapper>
        <RevealWrapper><RecentlyAddedSection /></RevealWrapper>
      </div>

      {/* Contact + Footer kept tight together without extra vertical gap */}
      <div className="mt-24 md:mt-28 space-y-0">
        <RevealWrapper><ContactSection /></RevealWrapper>
        <RevealWrapper><Footer /></RevealWrapper>
      </div>
    </div>
  )
}
