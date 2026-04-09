'use client'

import Link from 'next/link';
import { BookOpen, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '../../components/home/Header';

const classes = [
  {
    number: '9',
    label: '9th Class',
    description: 'All PCTB Textbooks for Class 9 — Science & Arts groups.',
    href: '/courses/class-9',
    badge: 'Popular',
    badgeColor: 'bg-orange-500',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Math', 'Urdu', 'English'],
  },
  {
    number: '10',
    label: '10th Class',
    description: 'Complete PCTB Textbooks for Matriculation Class 10.',
    href: '/courses/class-10',
    badge: 'Popular',
    badgeColor: 'bg-orange-500',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Math', 'Urdu', 'English'],
  },
  {
    number: '11',
    label: '11th Class',
    description: 'FSc Part 1 — All PCTB Textbooks for Class 11.',
    href: '/courses/class-11',
    badge: 'New',
    badgeColor: 'bg-green-500',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Math', 'Urdu', 'English'],
  },
  {
    number: '12',
    label: '12th Class',
    description: 'FSc Part 2 — All PCTB Textbooks for Class 12.',
    href: '/courses/class-12',
    badge: 'New',
    badgeColor: 'bg-green-500',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Math', 'Urdu', 'English'],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full py-16 px-4 md:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0003 0%, #3d0008 50%, #6b0010 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-[#ee1c25]/20 border border-[#ee1c25]/40 rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="w-4 h-4 text-[#ee1c25]" />
            <span className="text-[#ee1c25] text-xs font-semibold tracking-wider uppercase">PCTB Textbooks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Explore <span className="text-[#ee1c25]">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-3 font-medium">
            Access all PCTB textbooks by class
          </p>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto">
            Select your class below to instantly access all official Punjab Curriculum & Textbook Board textbooks — completely free.
          </p>
        </div>
      </section>

      {/* Class Selection Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
          Select Your Class
        </h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          Choose your class to browse all available PCTB textbooks
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {classes.map((cls) => (
            <Link
              key={cls.number}
              href={cls.href}
              className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 hover:border-[#D32F2F]/30"
            >
              {/* Badge */}
              <span className={`absolute top-4 right-4 ${cls.badgeColor} text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full leading-none`}>
                {cls.badge}
              </span>

              {/* Icon + Number */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D32F2F]/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Class</p>
                  <p className="text-4xl font-black text-[#D32F2F] leading-none">{cls.number}</p>
                </div>
              </div>

              {/* Label & Description */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-1">{cls.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cls.description}</p>
              </div>

              {/* Subjects preview */}
              <div className="flex flex-wrap gap-1">
                {cls.subjects.slice(0, 3).map((sub) => (
                  <span key={sub} className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-medium">
                    {sub}
                  </span>
                ))}
                <span className="text-[10px] bg-gray-100 text-gray-400 rounded-full px-2 py-0.5 font-medium">
                  +{cls.subjects.length - 3} more
                </span>
              </div>

              {/* View Books Button */}
              <div className="mt-auto flex items-center gap-2 text-[#D32F2F] font-semibold text-sm group-hover:gap-3 transition-all">
                <GraduationCap className="w-4 h-4" />
                View Books
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        <div
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a0003 0%, #3d0008 60%, #6b0010 100%)' }}
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#ee1c25]/10 blur-2xl pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Can't find what you're looking for?
          </h3>
          <p className="text-white/60 mb-6 text-sm md:text-base">
            More classes and resources are coming soon. Stay tuned!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#ee1c25] hover:bg-[#c0392b] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(238,28,37,0.5)] text-sm"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
