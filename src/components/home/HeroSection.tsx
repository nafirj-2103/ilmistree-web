import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    








<section className="relative w-full min-h-screen overflow-hidden">

  {/* Background Video */}
  <div className="absolute inset-0 z-0 w-full h-full overflow-hidden mt 350">
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
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">



















        {/* Hero Title */}
        <div className="mb-16 max-w-3xl">
          {/* Welcome Heading */}
          <div className="mb-1">
            <p className="text-lg text-gray-900 font-bold mb-1 mt-[-50px]">
              Welcome to 
              <span className="text-6xl font-bold text-[#cd141d]">ILMISTREE</span>
            </p>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Everything You Need to Study.
          </h1>
          
          {/* Second Line */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Supporting Students at Every Level
          </h2>
          
          {/* Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            Access organized notes, PDF books, syllabus and pairing schemes all in one place to help you study smarter and succeed with confidence
          </p>
        </div>

        {/* Stats Display 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-extrabold text-[#D32F2F] mb-2">500+</div>
            <div className="text-gray-600 font-medium">Courses Available</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-extrabold text-[#D32F2F] mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Active Students</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-extrabold text-[#D32F2F] mb-2">100+</div>
            <div className="text-gray-600 font-medium">Expert Instructors</div>
          </div>
        </div>
        */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
          <Button 
            onClick={() => scrollToSection('courses')}
            className="bg-[#D32F2F] hover:bg-[#8B1A1A] text-white px-8 py-4 text-base rounded-full font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Explore Courses
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-4 text-base rounded-full font-semibold transition-all hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
