'use client';

import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import Link from 'next/link';
import { ChevronLeft, GraduationCap } from 'lucide-react';

export default function Class10Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#ee1c25]/20 border border-[#ee1c25]/40 rounded-full px-4 py-1.5 mb-6 mx-auto">
          <GraduationCap className="w-4 h-4 text-[#ee1c25]" />
          <span className="text-[#ee1c25] text-xs font-semibold tracking-wider uppercase">
            Class 10 Coming Soon
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          10th Class Textbooks are on the way
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          We are preparing the official PCTB Class 10 textbooks in digital PDF format. Please check back soon — for now you can explore available Class 9 books and other courses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/courses/class-9"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D32F2F] px-6 py-3 text-white font-semibold transition hover:bg-[#b5282a]"
          >
            <ChevronLeft className="w-4 h-4" />
            View Class 9 Books
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-gray-700 font-semibold transition hover:bg-gray-100"
          >
            Back to Courses
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
