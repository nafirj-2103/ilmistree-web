'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollOrNavigate = useCallback(
    (id: string) => {
      if (pathname === '/') {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/');
        // delay to allow home to render before scrolling
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    [router, pathname]
  );

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-20 h-25 flex items-center justify-between pt-1">

          {/* Logo */}
          <div className="flex items-center justify-between gap-3 pt-50">
            <Link
              href="/"
            >
              <img src="/full ilmistree horizontal transparency.png" alt="Ilmistree" className="h-[68px] w-auto object-contain"/>
            </Link>
          </div>
          {/* Right Section */}
          <div className="hidden md:flex items-center gap-8">

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#courses"
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Courses
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            className="bg-[#D32F2F] hover:bg-[#810202] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(238,28,37,0.75)]"
            onClick={() => scrollOrNavigate('courses')}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
}
