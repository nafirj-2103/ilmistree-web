import { Button } from '@/components/ui/button';

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
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 93px)' }}>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center blur-sm opacity-40"
        >
          <source src="/movecircle.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col justify-center h-full">

        {/* Hero Title */}
        <div className="max-w-3xl">
          {/* Welcome to */}
          <p
            className="mb-0 leading-tight"
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
            className="mb-1 leading-none tracking-wide"
            style={{
              fontFamily: 'Milk and Honey, cursive',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              background: 'linear-gradient(to bottom, #99000c, #ee1c25)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitFontSmoothing: 'auto',
              textRendering: 'optimizeSpeed'
            }}
          >
            ilmistree
          </h2>

          {/* Main Heading */}
          <h1
            className="leading-[1.15] mb-0"
            style={{
              fontFamily: 'Impact, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              color: '#1f2937',
              WebkitFontSmoothing: 'smooth',
              textRendering: 'optimizeLegibility'
            }}
          >
            Everything You Need to Study.
          </h1>

          {/* Second Line */}
          <h2
            className="leading-[1.15] mb-5"
            style={{
              fontFamily: 'Impact, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              color: '#1f2937',
              WebkitFontSmoothing: 'smooth',
              textRendering: 'optimizeLegibility'
            }}
          >
            Supporting Students at Every Level
          </h2>

          {/* Paragraph with left red border */}
          <div className="flex items-start gap-3 mb-8">
            <div className="w-1 min-h-full bg-[#cd141d] rounded-full self-stretch flex-shrink-0"></div>
            <p
              className="leading-relaxed max-w-2xl"
              style={{
                fontFamily: 'Godber, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                color: '#374151',
                WebkitFontSmoothing: 'auto',
                textRendering: 'optimizeSpeed'
              }}
            >
              Access organized notes, PDF books, syllabus and pairing schemes all in one place to help
              you study smarter and succeed with confidence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-5 items-center">
            <Button
              onClick={() => scrollToSection('courses')}
              className="bg-[#cd141d] hover:bg-[#a01018] text-white px-10 py-3 h-auto text-base rounded-full font-semibold transition-all hover:scale-[1.02] shadow-md"
            >
              Explore Courses
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-2 border-[#cd141d] text-[#cd141d] bg-transparent hover:bg-[#cd141d] hover:text-white px-10 py-3 h-auto text-base rounded-full font-semibold transition-all hover:scale-[1.02]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
