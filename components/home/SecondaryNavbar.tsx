'use client'

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function SecondaryNavbar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const navSections = [
    {
      label: 'TextBooks',
      href: '/pctb',
      items: [
        { label: 'Mathematics', href: '/book/9th-class-mathematics' },
        { label: 'Physics', href: '/book/9th-class-physics' },
        { label: 'Chemistry', href: '/courses/class-9' },
        { label: 'Biology', href: '/book/9th-class-biology' },
        { label: 'English', href: '/book/9th-class-english-grammar' },
      ],
    },
    {
      label: 'Past Papers',
      href: '/pctb',
      items: [
        { label: '2024', href: '/pctb?year=2024' },
        { label: '2023', href: '/pctb?year=2023' },
        { label: '2022', href: '/pctb?year=2022' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
        return;
      }

      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroMidpoint = heroElement.offsetHeight / 2;
        setIsVisible(window.scrollY > heroMidpoint);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-gray-700 border-b border-gray-600 fixed top-[73px] z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-20 h-[20px] flex items-center gap-8">
        {navSections.map((section) => (
          <div key={section.label} className="relative group">
            <button
              onClick={() => router.push(section.href)}
              className="flex items-center gap-2 text-white hover:text-[#D32F2F] transition-colors mt-[-0px]"
            >
              {section.label}
              <ChevronDown className="w-4 h-4" />
            </button>

            <ul className="absolute top-full left-0 hidden group-hover:block bg-gray-800 border border-gray-600 rounded-sm shadow-lg min-w-[200px] py-2 z-50 mt-[-2px]">
              {section.items.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => router.push(item.href)}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#D32F2F] hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
