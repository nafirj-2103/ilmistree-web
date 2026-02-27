import { Button } from '@/components/ui/button';
  import { Search } from "lucide-react";
export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-20 h-25 flex items-center justify-between pt-1">
        
          {/* Logo */}
          <div className="flex items-center justify-between gap-3 pt-50">
            <img src="/full ilmistree horizontal transparency.png" alt="Ilmistree" className="h-[68px] w-auto object-contain"/>
          </div>
          {/* Right Section */}
          <div className="hidden md:flex items-center gap-8">



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
             <Button 
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="flex items-center gap-2 px-3 py-2 bg-white border rounded-md  text-[#] hover:bg-[#000000] hover:text-white px-4 py-1 hover:border-white text-base rounded-full font-semibold transition-all hover:scale-105"
          > 
             <Search className="w-5 h-5 text-gray-1000" />Search
          </Button>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-[#D32F2F] hover:bg-[#81020c] text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
            onClick={() => scrollToSection('courses')}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
}
