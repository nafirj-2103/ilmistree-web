'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { bookDetails } from '../../../components/book/bookData';
import { BookSlidePanel } from '../../../components/book/BookSlidePanel';
import { BookCanvas } from '../../../components/home/BookCanvas';
import {
  ArrowLeft,
  BookOpen,
  Download,
  Eye,
  FileText,
  Shield,
  Heart,
  Mail,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BookDetailPage({ params }: PageProps) {
  const { slug } = params;
  const router = useRouter();
  const book = slug ? bookDetails[slug] : undefined;
  const pdfLink = book?.pdfUrl ?? 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  const previewLink = book?.previewUrl ?? pdfLink;
  const [sliderOpen, setSliderOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  if (!book) {
    return (
      <div className="w-full min-h-screen bg-white">
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Book Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We could not find the textbook you are looking for. It may have been moved or the link might be incorrect.
          </p>
          <Button
            onClick={() => router.push('/')}
            className="bg-[#D32F2F] hover:bg-[#8B1A1A] text-white px-6 py-3 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const quickAccessCard = (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
      <h3 className="text-lg font-bold text-gray-900">Quick Access</h3>
        <div className="space-y-3 border border-gray-100 rounded-xl p-4 bg-gray-50">
          <div className="flex justify-between">
            <span className="text-gray-600">Subject:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.subject}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Class:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.className}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Medium:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.medium}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Board:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.board}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Format:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.format}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">File Size:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.fileSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Syllabus:</span>
            <span className="font-medium text-gray-900">{book.quickAccess.syllabus}</span>
          </div>
        </div>
      <div className="space-y-3">
        <Button
          className="w-full bg-[#D32F2F] hover:bg-[#8B1A1A] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2"
          onClick={() => {
            const link = document.createElement('a');
            link.href = pdfLink;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.download = `${book.title}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
          }}
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
        <Button
          variant="outline"
          className="w-full border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2"
          onClick={() => window.open(previewLink, '_blank', 'noopener,noreferrer')}
        >
          <Eye className="w-4 h-4" />
          View pdf
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#D32F2F] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/courses" className="hover:text-[#D32F2F] transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/courses/class-9" className="hover:text-[#D32F2F] transition-colors">Class 9</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-700 font-medium">{book.subject}</span>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010]">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#ee1c25] to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Book 3D preview */}
          <div className="flex-shrink-0">
            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
                setPointer({ x, y });
              }}
              onMouseLeave={() => setPointer({ x: 0, y: 0 })}
              className="relative w-[360px] h-[360px] md:w-[360px] md:h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-white/20 shadow-2xl"
            >
              <BookCanvas
                pointer={pointer}
                cover={book.cover}
                scale={1.6}
                cameraZ={1.8}
                positionY={0.1}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/0" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#ee1c25]/20 border border-[#ee1c25]/40 rounded-full px-4 py-1.5 mb-4">
              <GraduationCap className="w-4 h-4 text-[#ee1c25]" />
              <span className="text-[#ee1c25] text-xs font-semibold tracking-wider uppercase">
                PCTB Textbook
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {book.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              {book.intro}
            </p>


          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Book Description Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
          {book.description.split('\n\n').map((paragraph, index) => (
            <p
              key={`${book.slug}-description-${index}`}
              className="text-gray-700 leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column - Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* PDF Viewer placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
                <FileText className="w-5 h-5 text-[#D32F2F]" />
                <h2 className="text-lg font-bold text-gray-900">
                  Textbook Preview
                </h2>
              </div>
              <div className="p-6">
                <div className="relative w-[423px] h-[500px] rounded-xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-100">
                  <img
                    src={book.cover}
                    alt={`${book.subject} cover`}
                    className="absolute inset-0 w-[500px] h-full object-cover object-right"
                  />
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              {quickAccessCard}
            </div>

            {/* Disclaimer (mobile) */}
            <div className="lg:hidden bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Educational Use Only</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    This textbook is provided for educational purposes. Please respect copyright laws and use it responsibly for learning.
                  </p>
                </div>
              </div>
            </div>

            {/* PCTB Credit */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    About This Textbook
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.pctbCredit}
                  </p>
                    {book.mainTopics && book.mainTopics.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Topics Covered:</h3>
                        {book.slug === '9th-class-turjuma-tul-quran' ? (
                          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
                            {[0, Math.ceil(book.mainTopics.length / 2)].map((startIndex) => (
                              <ol key={startIndex} className="space-y-2">
                                {book.mainTopics
                                  .slice(startIndex, startIndex + Math.ceil(book.mainTopics.length / 2))
                                  .map((topic, idx) => (
                                    <li key={topic} className="grid grid-cols-[2rem_1fr] items-start gap-2 text-gray-700">
                                      <span className="text-left">{startIndex + idx + 1}.</span>
                                      <span className="text-right">{topic}</span>
                                    </li>
                                  ))}
                              </ol>
                            ))}
                          </div>
                        ) : (
                          <ul className="list-disc list-inside space-y-2">
                            {book.mainTopics.map((topic, idx) => (
                              <li key={idx} className="text-gray-700">{topic}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Educational Purpose */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    For the purpose of education
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.educationalPurpose}
                  </p>
                </div>
              </div>
            </div>

            {/* BookSlidePanel */}
            <BookSlidePanel
              isOpen={sliderOpen}
              onClose={() => setSliderOpen(false)}
              book={book}
            />
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Access */}
            <div className="hidden lg:block">
              {quickAccessCard}
            </div>

            {/* Disclaimer (desktop) */}
            <div className="hidden lg:block bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Educational Use Only</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    This textbook is provided for educational purposes. Please respect copyright laws and use it responsibly for learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

