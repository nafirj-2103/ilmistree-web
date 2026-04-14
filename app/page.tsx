'use client'

import React from 'react';
import { Header } from '../components/home/Header';
import { SecondaryNavbar } from '../components/home/SecondaryNavbar';
import { HeroSection } from '../components/home/HeroSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ResourcesSection } from '../components/home/ResourcesSection';
import { RecentlyAddedSection } from '../components/home/RecentlyAddedSection';
import { AboutShortSection } from '../components/home/AboutShortSection';
import { ContactSection } from '../components/home/ContactSection';
import { Footer } from '../components/home/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />
      <HeroSection />

      {/* Uniform vertical spacing between main sections */}
      <div className="space-y-24 md:space-y-28 mt-24 md:mt-28">
        <AboutShortSection />
        <CoursesSection />
        <FeaturesSection />
        <ResourcesSection />
        <RecentlyAddedSection />
      </div>

      {/* Contact + Footer kept tight together without extra vertical gap */}
      <div className="mt-24 md:mt-28 space-y-0">
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
