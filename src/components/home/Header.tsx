import { Button } from '@/components/ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo-full.png" alt="Ilmistree" className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-[#D32F2F] hover:bg-[#8B1A1A] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
            onClick={() => scrollToSection('courses')}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </header>
  );
}
