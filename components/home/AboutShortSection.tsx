'use client';

import Link from 'next/link';

export function AboutShortSection() {
  return (
    <section
      id="about-short"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010] text-white rounded-3xl shadow-xl"
    >
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#ee1c25]/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-28 -right-16 w-80 h-80 bg-[#ee1c25]/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="">
          <div className="">
            <img
              src="/download.png"
              alt="Ilmistree illustration"
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml;utf8,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' rx='24' fill='%23f8d7da'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23b91c1c' font-size='24' font-family='Arial'%3EIlmistree%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight text-center md:text-left">
            About <span className="text-[#ee1c25]">Ilmistree</span>
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-relaxed text-center md:text-left">
           Ilmistree is a digital platform that helps teachers and students learn. We want to make educational materials available to everyone. Our main aim is to help students share information and find useful study materials.Ilmistree simply helps people to learn by giving them a place to get e-books, notes and learning materials at any time and from anywhere.
          </p>
          <p>
           Ilmistree wants to help students and teachers. They want to give students and teachers the things they need.Ilmistree is doing a lot of work to make sure students and teachers can get to these things easily. Ilmistree wants to make it simple for students and teachers to use these tools.
          
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-semibold bg-[#ee1c25] hover:bg-[#c0141d] px-4 py-2 rounded-lg transition-colors"
            >
              Read more
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
