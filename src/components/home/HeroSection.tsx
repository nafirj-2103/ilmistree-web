import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/background-video.gif" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">{/* Stats Display */}
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('courses')}
            className="bg-[#D32F2F] hover:bg-[#8B1A1A] text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
