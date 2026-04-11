'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Footer() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const scrollOrNavigate = useCallback(
    (id: string) => {
      if (pathname === '/') {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    [router, pathname]
  );

  return (
    <footer className="w-full bg-[#81020c] text-white">
      {/* Keep footer attached to Contact; internal padding moves content down slightly */}
      <div className="max-w-7xl mx-auto px-[30px] pt-[80px] pb-[80px]">
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
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pctb"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Textbooks
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollOrNavigate('courses')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Courses
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
          <div className="mt-[20px] text-center md:text-left" suppressHydrationWarning>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe to get updates</p>
            <div className="flex flex-row gap-2 items-center">
              <Input 
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white min-w-0"
              />
              <Button className="bg-white text-[#D32F2F] hover:bg-gray-100 px-3 min-w-[72px] min-h-[44px] flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center mt-[50px]">
          <p className="text-white/80">
            © 2026 Ilmistree | All rights reserved 
          </p>
        </div>
      </div>
    </footer>
  );
}
