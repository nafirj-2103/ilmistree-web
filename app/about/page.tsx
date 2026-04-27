'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/home/Header";
import { SecondaryNavbar } from "../../components/home/SecondaryNavbar";
import { Footer } from "../../components/home/Footer";

const sections = [
  {
    title: "About Us",
    body: `Ilmistree is a digital platform that helps teachers and students learn. We want to make educational materials available to everyone. Our main aim is to help students share information and find useful study materials.Ilmistree simply helps people to learn by giving them a place to get e-books, notes and learning materials at any time and from anywhere.

    Ilmistree wants to help students and teachers. They want to give students and teachers the things they need.Ilmistree is doing a lot of work to make sure students and teachers can get to these things easily. Ilmistree wants to make it simple for students and teachers to use these tools.`,
  },
  {
    title: "Disclaimer",
    body: `Ilmistree is a website that provides information and it is not connected to any government or official institution. All the things you find on this website are here to help you learn and understand things.

The things we share on Ilmistree come from places where everyone can see them. We want to help students with their studies. We do not say that we own things that belong to people like authors or schools.`,
  },
  {
    title: "About Our Content",
    body: `Ilmistree is here to help people learn. We get our content from places like public websites, people and groups that care about education.

Most of the things we have are Open Educational Resources. This means you can use them and share them with others to learn.

Open Educational Resources include:
- textbooks
- notes and study materials
- courses and modules

These things are meant to help people over the world get access to knowledge and learn new things.`,
  },
  {
    title: "Copyright Notice",
    body: `We try hard to respect the people who make the content and not use things that are copyrighted. Sometimes users or other people share things and we might not know if they are allowed to.

If you made something and you do not want it on Ilmistree please tell us. We will take it down as soon as we can.

We are very thankful to the people who make content and let us share it for education.`,
  },
  {
    title: "Responsibility Clause",
    body: `Ilmistree is not responsible for the things that other users share. We will try to fix any problems that the people who made the content have.

This website does not speak for any school or institution. All the things on this website are just to help you learn and are not official.`,
  },
  {
    title: "Terms of Use",
    body: `When you use this website you are agreeing that Ilmistree and the people who work on it are not responsible for how you use the things we provide.

If you do not agree with this you should not use Ilmistree.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions or concerns or need something you can contact us.

Email: ilmistree@gmail.com`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  const illustration = `/download.png`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />

{/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#ee1c25] font-semibold hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </div>
      
      {/* Hero Strip */}
      <div
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010]"
      >
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Illustration */}
          <div className="w-full max-w-lg mx-auto md:mx-0">
            <Image
              src={illustration}
              alt="Download illustration"
              width={780}
              height={560}
              className="w-full h-auto drop-shadow-lg"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="text-white space-y-4">
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight text-center md:text-left">
            About <span className="text-[#ee1c25]">Ilmistree</span>
          </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left">
              Find out more about what we want to achieve, where we get our information from, and how we're committed to providing kids with free and easy to access educational tools.
            </p>

            <div className="w-16 h-1 bg-white/70 rounded-full" />
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/30 blur-3xl rounded-full" />
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-6">
        {sections.map((section, idx) => (
          <motion.section
            key={section.title}
            variants={fadeUp}
            initial="visible"
            animate="visible"
            custom={idx}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="mt-1 w-2 h-10 rounded-full bg-[#ee1c25]" />
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </div>
  );
}

