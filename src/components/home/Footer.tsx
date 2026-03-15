import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#81020c] text-white">
      <div className="max-w-7xl mx-auto px-[30px] py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-30">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4 mt-[-70px]">
              <img src="/full_ilmistree_horizontal_glow-3c.png" alt="Ilmistree" className="h-25 w-50" />
            </div>
            <p className="text-white/80 leading-relaxed">
              {/*Where Knowledge Grows*/}
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-[20px]">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-[20px]">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-[20px]">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe to get updates</p>
            <div className="flex gap-2">
              <Input 
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
              />
              <Button className="bg-white text-[#D32F2F] hover:bg-gray-100 px-4 flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center mt-[100px]">
          <p className="text-white/80">
            © 2026 Ilmistree | All rights reserved 
          </p>
        </div>
      </div>
    </footer>
  );
}
