'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '../../components/home/Header';
import { SecondaryNavbar } from '../../components/home/SecondaryNavbar';
import { Footer } from '../../components/home/Footer';

const sections = [
  {
    title: '1. Our Approach to Content',
    body: `Ilmistree is an educational platform designed to help students access learning materials easily. We do not purposefully display or promote content which violates copyright laws.

Some documents which may be found online:
- shared by third parties
- publicly accessible
- distributed under open or flexible licenses

Where applicable, certain resources may fall under licensing models such as:
- GNU General Public License (GPL)
- Creative Commons licenses
- other open-use frameworks

However, the respective authors, publishers, or rights holders always hold the ownership of original content.`,
  },
  {
    title: '2. Ownership Copyright',
    body: `Books, PDFs, images, brands trademarks and other items are the property of their respective owners.
Ilmistree does not claim ownership of:
- published textbooks
- commercial books
- third-party educational materials

If any such material appears on our platform, it is either:
- for educational reference
- publicly available
- shared under assumed fair access conditions`,
  },
  {
    title: '3. Copyright Infringement Policy',
    body: `We take copyright concerns seriously.

Copyright infringement may include:
- copying full or partial content without permission
- redistributing protected material
- hosting copyrighted files without rights

Even if content is:
- free elsewhere
- used for education
- credited to the original author

it may still be subject to copyright restrictions.`,
  },
  {
    title: '4. DMCA Compliance',
    body: `The Digital Millennium Copyright Act (DMCA) and other corresponding international copyright rules are adhered to by Ilmistree.
If you believe your copyrighted content has been violated on our website, you may submit a complaint.`,
  },
  {
    title: '5. How to Submit a DMCA Complaint',
    body: `To make sure that your request is processed, please provide the following requirements:

1. Your personal name and contact info (email required).
2. Proof that you are the owner of the copyright or the authority to act on behalf of them.
3. A detailed description of the work secured by copyright.
4. The reliable URL or URLs on our website where the material is located`,
  },
  {
    title: '6. Response to Complaints',
    body: `Once a valid complaint is received:
- we review the request
- take appropriate action (removal or restriction)
- respond within a reasonable timeframe

Repeat violations may result in:
- content removal
- restricted access
- account actions (if applicable)`,
  },
  {
    title: '7. Fair Use Disclaimer',
    body: `Some content may be used under fair use principles for:
- educational purposes
- commentary
- reference

Fair use, however, is limited and does not allow whole redistribution of works protected by copyright.`,
  },
  {
    title: '8. Public Domain & Open Content',
    body: `Content that is:
- in the public domain
- openly licensed

may be used freely.

Before reuse, users are advised to verify their licensing.`,
  },
  {
    title: '9. External Links',
    body: `Ilmistree may contain links to third-party resources.
The content which is stored on other websites cannot be our responsibility.`,
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
- respecting creators
- supporting students

We are fully committed to quickly fixing any content that accidently violates someone's rights.

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
