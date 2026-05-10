'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export function HeroSection() {
  const [floatPaused, setFloatPaused] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden py-8 md:py-8" style={{ minHeight: 'calc(100vh - 93px)' }}>


      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden blur-sm-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
className="w-full h-full object-cover object-center blur-sm opacity-50" onEnded={(e) => e.currentTarget.play()}
        >
          <source src="/movecircle.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col justify-center h-full">
 
        {/* Hero Title */}
        <div className="max-w-[46rem]">
          {/* Welcome to */}
          <p
            className="font-welcome mb-4 leading-tight"
            style={{
              fontWeight: 400,
              fontSize: 'clamp(1.50rem, 1.4vw, 1.1rem)',
              WebkitFontSmoothing: 'antialiased',
              textRendering: 'optimizeLegibility'
            }}
          >
            Welcome to
          </p>

        {/* ILMISTREE - large red text */}
<h2
  className="font-hero-script  px-1 sm:px-2 leading-tight tracking-wide"
  style={{
    fontWeight: 400,
    fontSize: 'clamp(3.35rem, 7.2vw, 4.65rem)',

    background: 'linear-gradient(to bottom, #99000d, #f82732)',

    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',

    WebkitTextFillColor: 'transparent',
    color: 'transparent',

    display: 'inline-block', 

    WebkitFontSmoothing: 'auto',
    textRendering: 'optimizeSpeed'
  }}
>
        ilmistree
</h2>




  {/* Main Heading */}
  <div className="
  max-w-full
  w-full
  md:max-w-[44rem]
  backdrop-blur-md
  bg-white/10
  border border-white/20
  border-r-[3px] border-b-[1px]
  rounded-2xl
  px-4 py-4 md:px-5 md:py-3
  shadow-xl
  mb-10 ">
    <h1          
    className="font-hero-display leading-[1.08] mb-1"
    style={{
      fontWeight: 700,
      fontSize: 'clamp(1.85rem, 4.2vw, 2.75rem)',
      color: '#1f2937'
    }}
  >
    Everything You Need To Solve
  </h1>

  {/* Second Line */}
  <h2
    className="font-hero-display leading-[1.08] mb-4"
    style={{
      fontWeight: 700,
      fontSize: 'clamp(1.85rem, 4.2vw, 2.75rem)',
      color: '#1f2937'
    }}
  >
     your mystery in one place
  </h2>

  {/* Paragraph */}
  <div className="flex items-start gap-3 mb-8">
    <div className="w-1 bg-[#cd141d] rounded-full self-stretch"></div>

    <p
      className="leading-relaxed max-w-2xl"
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(0.95rem, 1.45vw, 1.05rem)',
        color: '#374151'
      }}
    >
      Access organized notes, PDF books, New syllabus and Pairing schemes all 
      <br />in one place to help you study smarter and succeed with confidence
    </p>  
    </div> 
    
    </div>

         

          {/* CTA Buttons 
          <div className="flex flex-row gap-5 items-center">
            <Button
              onClick={() => scrollToSection('courses')}
              className="bg-gradient-to-b from-[#99000dee] to-[#ee1c25] hover:bg-[#a01018] text-white px-10 py-3 h-auto text-base rounded-full font-semibold transition-all hover:scale-[1.02] shadow-md"
            >
              Explore Courses
            </Button>*/}



{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center sm:justify-start">
  <Link href="/courses" className="w-full sm:w-auto">
    <Button
      className="w-full sm:w-auto max-w-[16rem] bg-gradient-to-b from-[#99000dee] to-[#ee1c25] text-white px-6 py-3 h-auto text-[0.98rem] rounded-full font-semibold transition-all duration-300 hover:scale-[1.05] shadow-md animate-float hover:shadow-[0_0_25px_rgba(238,28,37,0.75)] min-h-[44px]"
    >
      Explore Courses
    </Button>
  </Link>
  <Link
    href="/about"
    className="w-full sm:w-auto max-w-[16rem] border-2 border-[#cd141d] text-[#cd141d] bg-transparent hover:bg-[#cd141d] hover:text-white px-6 py-3 h-auto text-[0.98rem] rounded-full font-semibold transition-all hover:scale-[1.02] min-h-[44px] text-center"
  >
    Learn More
  </Link>
</div>
        </div>
      </div>

      {/* Red Accent Bar - Bottom Right Corner */}
      <div
        className="absolute bottom-8 right-10 w-32 h-1 bg-[#ee1c25] shadow-md"
        style={{
          animation: 'slideLeftRight 2s ease-in-out infinite',
        }}
      ></div>
      
      <style>{`
        @keyframes slideLeftRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
