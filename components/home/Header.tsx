'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ NEW STATE (replace details system)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const closeMobileDrawer = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const scrollOrNavigate = useCallback(
    (id: string) => {
      closeMobileDrawer();
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
    [closeMobileDrawer, router, pathname]
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex h-[73px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* LOGO */}
          <Link href="/">
            <img
              src="/full ilmistree horizontal transparency.png"
              alt="Ilmistree"
              className="h-[58px] md:h-[62px]"
            />
          </Link>

          {/* ===================== */}
          {/* ✅ MOBILE HAMBURGER */}
          {/* ===================== */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* ===================== */}
          {/* ✅ DESKTOP NAV (UNCHANGED) */}
          {/* ===================== */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
              <Link href="/" className="font-medium text-gray-700 hover:text-[#D32F2F]">Home</Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-[#D32F2F]">About</Link>
              <Link href="/courses" className="font-medium text-gray-700 hover:text-[#D32F2F]">Courses</Link>
              <button onClick={() => scrollOrNavigate('contact')} className="font-medium text-gray-700 hover:text-[#D32F2F]">
                Contact
              </button>
            </nav>

            <Button
              className="bg-[#D32F2F] px-6 py-2 text-white hover:bg-[#810202]"
              onClick={() => scrollOrNavigate('courses')}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </header>

      {/* ===================== */}
      {/* ✅ MOBILE DRAWER */}
      {/* ===================== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] flex"
          onClick={closeMobileDrawer}
        >

          {/* LEFT PANEL */}
          <div
            className="w-[80vw] max-w-[360px] h-full bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col p-4 pb-12">

              {/* HEADER */}
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" onClick={closeMobileDrawer}>
                  <img
                    src="/full ilmistree horizontal transparency.png"
                    className="h-10"
                  />
                </Link>

                {/* CLOSE BUTTON */}
                <button
                  onClick={closeMobileDrawer}
                  className="p-2 rounded-full hover:bg-red-100 transition"
                >
                  <span className="text-gray-700 hover:text-red-600 text-xl">✕</span>
                </button>
              </div>

              {/* NAV */}
              <nav className="flex flex-col space-y-3">

                <Link href="/" onClick={closeMobileDrawer} className="border-b py-3 font-semibold">
                  Home
                </Link>

                <Link href="/about" onClick={closeMobileDrawer} className="border-b py-3 font-semibold">
                  About
                </Link>

                <Link href="/courses" onClick={closeMobileDrawer} className="border-b py-3 font-semibold">
                  Courses
                </Link>

                <button
                  onClick={() => scrollOrNavigate('contact')}
                  className="border-b py-3 text-left font-semibold"
                >
                  Contact
                </button>

                <button
                  onClick={() => scrollOrNavigate('courses')}
                  className="py-3 text-left font-semibold text-[#D32F2F]"
                >
                  Login
                </button>

              </nav>
            </div>
          </div>

          {/* RIGHT SIDE OVERLAY (CLICK TO CLOSE) */}
          <div className="flex-1 bg-black/50" />

        </div>
      )}
    </>
  );
}