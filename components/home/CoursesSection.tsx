'use client';

import React from 'react';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { CourseCard } from '@/components/home/CourseCard';
import { Course } from '@/components/home/types';
import { BookOpen, Download, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import Link from 'next/link';

const courses: Course[] = [
  {
    id: 1,
    category: 'New Syllabus',
    title: '9 Physics Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/physics.jpg',
    duration: '15 March 2026',
    rating: 4.5,
    downloads: '7K',
    slug: '9th-class-physics',
  },
  {
    id: 2,
    category: 'New Syllabus',
    title: '9 Turjuma-Tul-Quran Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/Quran.jpg',
    duration: '15 March 2026',
    rating: 4.2,
    downloads: '3K',
    slug: '9th-class-turjuma-tul-quran',
  },
  {
    id: 3,
    category: 'New Syllabus',
    title: '9 Islamiat Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/islamiat.jpg',
    duration: '15 March 2026',
    rating: 4.7,
    downloads: '6K',
    slug: '9th-class-islamiat',
  },
  {
    id: 4,
    category: 'New Syllabus',
    title: '9 Mathematics Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/MATH.jpg',
    duration: '15 March 2026',
    rating: 4.8,
    downloads: '12K',
    slug: '9th-class-mathematics',
  },
  {
    id: 5,
    category: 'New Syllabus',
    title: '9 Urdu Qawaid-o-Insha T.Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/INSHA.jpg',
    duration: '15 March 2026',
    rating: 4.4,
    downloads: '3K',
    slug: '9th-class-urdu-qawaid-o-insha',
  },
  {
    id: 6,
    category: 'New Syllabus',
    title: '9 Biology Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/BIOLOGY.jpg',
    duration: '15 March 2026',
    rating: 4.9,
    downloads: '15K',
    slug: '9th-class-biology',
  },
  {
    id: 7,
    category: 'New Syllabus',
    title: '9 Computer Science Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/COMPUTER.jpg',
    duration: '15 March 2026',
    rating: 4.8,
    downloads: '13K',
    slug: '9th-class-computer-science',
  },
  {
    id: 8,
    category: 'New Syllabus',
    title: '9 English Grammar Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/ENG GRAMER.jpg',
    duration: '15 March 2026',
    rating: 4.7,
    downloads: '5K',
    slug: '9th-class-english-grammar',
  },
  {
    id: 9,
    category: 'New Syllabus',
    title: '9 Urdu Text Book PDF',
    description: 'Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly',
    cover: '/models/textures/URDU.jpg',
    duration: '15 March 2026',
    rating: 4.9,
    downloads: '15K',
    slug: '9th-class-urdu',
  },
];

export function CoursesSection() {
  const hasCourses = courses.length > 0;

  return (
    <section id="courses" className="w-full bg-white">
      {hasCourses && (
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most sought-after courses designed by industry experts and academic leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} useModel={true} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Courses
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Class9Page() {
  const hasCourses = courses.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010]">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#ee1c25]/5 blur-2xl pointer-events-none" />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#ee1c25] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:absolute md:top-4 md:left-6">
            <Breadcrumbs />
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#ee1c25]/20 border border-[#ee1c25]/40 rounded-full px-4 py-1.5 mb-5">
              <GraduationCap className="w-4 h-4 text-[#ee1c25]" />
              <span className="text-[#ee1c25] text-xs font-semibold tracking-wider uppercase">PCTB Textbooks</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              9th Class Textbooks{' '}
              <span className="text-[#ee1c25]">  PDF - All Subjects</span>
            </h1>

            <div className="flex items-start gap-3 mb-8">
              <div className="w-1 min-h-full bg-[#ee1c25] rounded-full self-stretch mt-1" />
              <p className="text-gray-300 text-base leading-relaxed">
                Students can easily access official Punjab Curriculum &amp; Textbook Board (PCTB)
                9th class digital PDFs. Physics, Chemistry, Mathematics, Biology, Computer Science,
                English, Urdu, and Islamiat all in one place for quick viewing and download.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Physics', 'Maths', 'Biology', 'Chemistry', 'Computer', 'English', 'Urdu', 'Islamiat'].map((sub) => (
                <span
                  key={sub}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/15 hover:bg-[#ee1c25]/30 hover:border-[#ee1c25]/60 transition-colors cursor-default"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 grid grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-[#ee1c25]" />, value: '9+', label: 'Subjects' },
              { icon: <Download className="w-5 h-5 text-[#ee1c25]" />, value: '80K+', label: 'Downloads' },
              { icon: <Star className="w-5 h-5 text-[#ee1c25]" />, value: '4.7★', label: 'Avg Rating' },
              { icon: <GraduationCap className="w-5 h-5 text-[#ee1c25]" />, value: 'Free', label: 'Always' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[110px] backdrop-blur-sm"
              >
                {stat.icon}
                <span className="text-white font-bold text-xl">{stat.value}</span>
                <span className="text-gray-400 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {hasCourses && (
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most sought-after courses designed by industry experts and academic leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} useModel={true} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Courses
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
