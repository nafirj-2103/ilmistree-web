'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '../../components/home/Header';
import { SecondaryNavbar } from '../../components/home/SecondaryNavbar';
import { Footer } from '../../components/home/Footer';

const sections = [
  {
    title: '1. Our Approach to Content',
    body: `Ilmistree is an educational platform designed to help students access learning materials easily. We do not intentionally host or promote content that violates copyright laws.

Some materials available on the internet may be:
• shared by third parties
• publicly accessible
• distributed under open or flexible licenses

Where applicable, certain resources may fall under licensing models such as:
• GNU General Public License (GPL)
• Creative Commons licenses
• other open-use frameworks

However, ownership of original content always remains with the respective authors, publishers, or rights holders.`,
  },
  {
    title: '2. Copyright Ownership',
    body: `All trademarks, books, PDFs, images, and other materials belong to their respective owners.

Ilmistree does not claim ownership of:
• published textbooks
• commercial books
• third-party educational materials

If any such material appears on our platform, it is either:
• for educational reference
• publicly available
• shared under assumed fair access conditions`,
  },
  {
    title: '3. Copyright Infringement Policy',
    body: `We take copyright concerns seriously.

Copyright infringement may include:
• copying full or partial content without permission
• redistributing protected material
• hosting copyrighted files without rights

Even if content is:
• free elsewhere
• used for education
• credited to the original author

it may still be subject to copyright restrictions.`,
  },
  {
    title: '4. DMCA Compliance',
    body: `Ilmistree complies with the principles of the Digital Millennium Copyright Act (DMCA) and similar international copyright laws.

If you believe that your copyrighted work has been used improperly on our website, you may submit a formal complaint.`,
  },
  {
    title: '5. How to Submit a DMCA Complaint',
    body: `To process your request, please provide the following information:

1. Your full name and contact details (email required)
2. Proof that you are the copyright owner or authorized to act on behalf of the owner
3. A clear description of the copyrighted work
4. The exact URL(s) on our website where the material appears
5. A statement confirming that:
   • you have a good faith belief that the use is unauthorized
   • the information provided is accurate
6. Your signature (typed name is acceptable)`,
  },
  {
    title: '6. Response to Complaints',
    body: `Once a valid complaint is received:
• we review the request
• take appropriate action (removal or restriction)
• respond within a reasonable timeframe

Repeat violations may result in:
• content removal
• restricted access
• account actions (if applicable)`,
  },
  {
    title: '7. Fair Use Disclaimer',
    body: `Some content may be used under fair use principles for:
• educational purposes
• commentary
• reference

However, fair use is limited and does not allow full redistribution of copyrighted works.`,
  },
  {
    title: '8. Public Domain & Open Content',
    body: `Content that is:
• in the public domain
• openly licensed

may be used freely.

Users are encouraged to verify licensing before reuse.`,
  },
  {
    title: '9. External Links',
    body: `Ilmistree may contain links to third-party resources.
We are not responsible for the content hosted on external websites.`,
  },
  {
    title: '10. Contact for Copyright Issues',
    body: `If you have any concerns, please contact us:

Email: ilmistree@gmail.com
Subject: DMCA Complaint`,
  },
  {
    title: '11. Final Note',
    body: `This policy is intended to maintain a balance between:
• respecting creators
• supporting students

If any content unintentionally violates rights, we are committed to resolving the issue promptly.

For informational purposes only. This policy does not constitute legal advice.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function CopyrightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#ee1c25] font-semibold hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Copyrights</span>
        </div>
      </div>

      <div
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010]"
      >
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-4xl text-white space-y-4">
            <p className="text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-white/70">
              Last updated: April 21, 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              DMCA & <span className="text-[#ee1c25]">Copyright Policy</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              This page explains how Ilmistree handles copyright matters and how content is treated on
              the platform. The purpose of this policy is to respect intellectual property rights while
              also supporting educational access.
            </p>
            <div className="w-16 h-1 bg-white/70 rounded-full" />
          </div>
        </div>

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#ee1c25]/20 blur-3xl rounded-full" />
      </div>

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
