'use client'

import Link from "next/link";
import { Header } from "../../components/home/Header";
import { SecondaryNavbar } from "../../components/home/SecondaryNavbar";
import { Footer } from "../../components/home/Footer";

export default function AboutPreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />

      {/* Hero (short) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010] text-white">
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#ee1c25]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-28 -right-16 w-80 h-80 bg-[#ee1c25]/20 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="bg-white/10 border border-white/15 rounded-3xl p-4 md:p-6 backdrop-blur-sm shadow-2xl">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
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
            <div className="text-sm uppercase tracking-[0.2em] text-[#ffb3b8]">About Us</div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">About Ilmistree</h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              Ilmistree is a digital platform built to help students and teachers access free
              textbooks, notes, and learning resources anytime, anywhere. We’re focused on keeping
              education open, organized, and easy to reach.
            </p>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Most of our materials are open educational resources, gathered to support learners
              without barriers. We respect content owners and promptly address removal requests.
            </p>
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

      <Footer />
    </div>
  );
}