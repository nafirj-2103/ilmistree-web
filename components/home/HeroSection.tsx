'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Godber:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Milk+and+Honey&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Impact&display=swap');
  
  @font-face {
    font-family: 'R';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  }
`;

export function HeroSection() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden py-10 md:py-0" style={{ height: 'calc(100vh - 93px)' }}>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center blur-sm opacity-50"
        >
          <source src="/movecircle.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col justify-center h-full">
 
        {/* Hero Title */}
        <div className="max-w-3xl">
          {/* Welcome to */}
          <p
            className="mb-3 leading-tight scale-135 md:scale-150 lg:scale-300 origin-left"
            style={{
              fontFamily: 'Godber, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              WebkitFontSmoothing: 'auto',
              textRendering: 'optimizeSpeed'
            }}

          >
            Welcome to
          </p>

        {/* ILMISTREE - large red text */}
<h2
  className="mb-[-40px] px-6 leading-tight tracking-wide text-5xl md:text-[5rem]"
  style={{
    fontFamily: 'Milk and Honey, cursive',
    fontWeight: 400,
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',

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
  md:w-fit
  backdrop-blur-md
  bg-white/10
  border border-white/20
  border-r-[3px] border-b-[1px]
  rounded-2xl
  px-4 py-4 md:px-6 md:py-2
  shadow-xl
  mb-10 ">
    <h1
    className="leading-[1.15] mb-0 text-3xl md:text-[3rem]"
    style={{
      fontFamily: 'Impact, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(1.75rem, 5vw, 3rem)',
      color: '#1f2937'
    }}
  >
    Everything You Need To Solve
  </h1>

  {/* Second Line */}
  <h2
    className="leading-[1.15] mb-5 text-3xl md:text-[3rem]"
    style={{
      fontFamily: 'Impact, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(1.75rem, 5vw, 3rem)',
      color: '#1f2937'
    }}
  >
     your mystery in one place
  </h2>

  {/* Paragraph */}
  <div className="flex items-start gap-3 mb-10">
    <div className="w-1 bg-[#cd141d] rounded-full self-stretch"></div>

    <p
      className="leading-relaxed max-w-2xl"
      style={{
        fontFamily: 'Godber, sans-serif',
        fontWeight: 550,
        fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
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
<div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full">
  <Button
    onClick={() => scrollToSection('courses')}
    className="w-full sm:w-auto bg-gradient-to-b from-[#99000dee] to-[#ee1c25] text-white px-10 py-3 h-auto text-base rounded-full font-semibold transition-all duration-300 hover:scale-[1.05] shadow-md animate-float hover:shadow-[0_0_25px_rgba(238,28,37,0.75)] min-h-[44px]"
  >
    Explore Courses
  </Button>
  <Link
    href="/about"
    className="w-full sm:w-auto border-2 border-[#cd141d] text-[#cd141d] bg-transparent hover:bg-[#cd141d] hover:text-white px-10 py-3 h-auto text-base rounded-full font-semibold transition-all hover:scale-[1.02] min-h-[44px] text-center"
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
