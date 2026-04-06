'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "../../components/home/Header";
import { SecondaryNavbar } from "../../components/home/SecondaryNavbar";
import { Footer } from "../../components/home/Footer";

const sections = [
  {
    title: "About Us",
    body: `Ilmistree is a digital educational platform developed to support students and teachers in their academic journey. Our primary objective is to make learning resources easily accessible for everyone. We aim to build a space where learners can find useful study materials and also contribute by sharing helpful content with others.

The idea behind Ilmistree is simple to promote education by providing a centralized platform where textbooks, notes, and learning resources are available in digital format for quick access anytime, anywhere.`,
  },
  {
    title: "Disclaimer",
    body: `Ilmistree is an independent educational platform and has no association with, or endorsement from, any government body or official institution. All materials available on this website are provided strictly for educational and informational purposes.

The resources shared here are collected from publicly available sources and are intended to assist students in their studies. We do not claim ownership of content that belongs to third parties such as authors, publishers, or institutions.`,
  },
  {
    title: "About Our Content",
    body: `The sole purpose of Ilmistree is to encourage and support education. To achieve this, content has been gathered from various sources including public platforms, individuals, and educational communities.

Most of the materials fall under Open Educational Resources (OER), which means they are freely accessible and allowed to be used or shared for learning purposes.

Open Educational Resources include:
• textbooks
• notes and study materials
• courses and modules

These resources are designed to improve access to knowledge and support learners worldwide.`,
  },
  {
    title: "Copyright Notice",
    body: `We always try our best to respect the rights of content creators and avoid any copyright issues. However, since some content may also be shared by users or external contributors, there is a possibility that certain material may unintentionally violate copyright policies.

If you are the rightful owner of any content and do not wish it to appear on our platform, please contact us. We will take immediate action and remove the content as soon as possible.

We sincerely appreciate and acknowledge all content creators and copyright holders who allow educational sharing, whether directly or indirectly.`,
  },
  {
    title: "Responsibility Clause",
    body: `Ilmistree does not take responsibility for content shared by third-party users. However, we are committed to resolving any valid concerns raised by content owners.

This platform does not represent or act on behalf of any official educational board, university, or institution whether government or private.
All materials provided here are for educational support only and do not carry any official authority.`,
  },
  {
    title: "Terms of Use",
    body: `By using this website, you agree that Ilmistree and its team are not liable for how the provided materials are used.
If you do not agree with these terms, you are advised not to use this platform.`,
  },
  {
    title: "Contact Us",
    body: `For any queries, concerns, or content-related requests, feel free to reach out to us.
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
      

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-6">
        {sections.map((section, idx) => (
          <motion.section
            key={section.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
