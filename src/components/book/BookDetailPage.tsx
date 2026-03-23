import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';
import { bookDetails } from './bookData';
import { BookSlidePanel } from './BookSlidePanel';
import { BookCanvas } from '../home/BookCanvas';
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

const BookDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const book = slug ? bookDetails[slug] : undefined;
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
            onClick={() => navigate('/')}
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

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#D32F2F] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-400">Books</span>
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
                PCTB Official Textbook
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
                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                  <Button className="bg-[#D32F2F] hover:bg-[#8B1A1A] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                    <Eye className="w-4 h-4" />
                    View PDF
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSliderOpen(true);
                    }}
                    className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
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
                    Educational Purpose
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.educationalPurpose}
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright Respect */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Respect for Copyright
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.copyrightRespect}
                  </p>
                </div>
              </div>
            </div>

            {/* Removal Request */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Content Removal Requests
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {book.removalRequest}
                  </p>
                </div>
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-100 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Heart className="w-5 h-5 text-[#D32F2F]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Acknowledgement
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {book.acknowledgement}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Quick actions card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Quick Access
              </h3>

              <div className="space-y-3 mb-6">
                <Button className="w-full bg-[#D32F2F] hover:bg-[#8B1A1A] text-white rounded-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all">
                  <Eye className="w-4 h-4" />
                  View PDF
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white rounded-lg font-semibold py-3 flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-800 text-sm mb-3">
                  Book Details
                </h4>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subject</span>
                    <span className="font-medium text-gray-900">
                      {book.subject}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Class</span>
                    <span className="font-medium text-gray-900">
                      {book.className}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Publisher</span>
                    <span className="font-medium text-gray-900">PCTB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Format</span>
                    <span className="font-medium text-gray-900">PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Language</span>
                    <span className="font-medium text-gray-900">
                      English / Urdu
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="font-semibold text-gray-800 text-sm mb-3">
                  Other 9th Class Books
                </h4>
                <div className="space-y-2">
                  {Object.values(bookDetails)
                    .filter((b) => b.slug !== book.slug)
                    .slice(0, 5)
                    .map((b) => (
                      <button
                        key={b.slug}
                        onClick={() => {
                          navigate(`/book/${b.slug}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full text-left text-sm text-gray-600 hover:text-[#D32F2F] py-1.5 px-2 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        {b.subject}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Back to home */}
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full text-gray-500 hover:text-[#D32F2F] font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Books
            </Button>
          </div>
        </div>
      </div>

      <Footer />

      <BookSlidePanel
        isOpen={sliderOpen}
        onClose={() => setSliderOpen(false)}
        slug={book.slug}
      />
    </div>
  );
};

export default BookDetailPage;
