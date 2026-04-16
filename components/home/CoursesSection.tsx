'use client';

import React from "react";
import { CourseCard } from "./CourseCard";
import { Course } from "./types";
import { Button } from "@/components/ui/button";

const courses: Course[] = [
  {
    id: 1,
    category: "New Syllabus",
    title: "9 Physics Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/physics.jpg",
    duration: "15 March 2026",
    rating: 4.5,
    downloads: "7K",
    slug: "9th-class-physics",
  },
  {
    id: 2,
    category: "New Syllabus",
    title: "9 Turjuma-Tul-Quran Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/Quran.jpg",
    duration: "15 March 2026",
    rating: 4.2,
    downloads: "3K",
    slug: "9th-class-turjuma-tul-quran",
  },
  {
    id: 3,
    category: "New Syllabus",
    title: "9 Islamiat Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/islamiat.jpg",
    duration: "15 March 2026",
    rating: 4.7,
    downloads: "6K",
    slug: "9th-class-islamiat",
  },
  {
    id: 4,
    category: "New Syllabus",
    title: "9 Mathematics Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/MATH.jpg",
    duration: "15 March 2026",
    rating: 4.8,
    downloads: "12K",
    slug: "9th-class-mathematics",
  },
  {
    id: 5,
    category: "New Syllabus",
    title: "9 Urdu Qawaid-o-Insha T.Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/INSHA.jpg",
    duration: "15 March 2026",
    rating: 4.4,
    downloads: "3K",
    slug: "9th-class-urdu-qawaid-o-insha",
  },
  {
    id: 6,
    category: "New Syllabus",
    title: "9 Biology Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/BIOLOGY.jpg",
    duration: "15 March 2026",
    rating: 4.9,
    downloads: "15K",
    slug: "9th-class-biology",
  },
  {
    id: 7,
    category: "New Syllabus",
    title: "9 Computer Science Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/COMPUTER.jpg",
    duration: "15 March 2026",
    rating: 4.8,
    downloads: "13K",
    slug: "9th-class-computer-science",
  },
  {
    id: 8,
    category: "New Syllabus",
    title: "9 English Grammar Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/ENG GRAMER.jpg",
    duration: "15 March 2026",
    rating: 4.7,
    downloads: "5K",
    slug: "9th-class-english-grammar",
  },
  {
    id: 9,
    category: "New Syllabus",
    title: "9 Urdu Text Book PDF",
    description: "Click View & Download To Access Your Digital PCTB 9 Class Text Book Instantly",
    cover: "/models/textures/URDU.jpg",
    duration: "15 March 2026",
    rating: 4.9,
    downloads: "15K",
    slug: "9th-class-urdu",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-white">
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
    </section>
  );
}

