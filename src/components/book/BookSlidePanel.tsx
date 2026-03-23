import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Download,
  Eye,
  FileText,
  X,
  BookOpen,
} from 'lucide-react';
import { bookDetails } from './bookData';

interface BookSlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string | null;
}

export function BookSlidePanel({ isOpen, onClose, slug }: BookSlidePanelProps) {
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);
  const book = slug ? bookDetails[slug] : undefined;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleViewMore = () => {
    if (slug) {
      onClose();
      navigate(`/book/${slug}`);
    }
  };

  const handleDownload = () => {
    // Trigger download - for now opens in new tab
    if (book) {
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual PDF URL
      link.download = `${book.title}.pdf`;
      link.click();
    }
  };

  return (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-[9999] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D32F2F] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Back</span>
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center text-gray-500 hover:text-[#D32F2F] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Panel content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {book ? (
            <>
              {/* Title */}
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Download & Preview
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                {book.title}
              </p>

              {/* Book Cover Thumbnail */}
              <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-14 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-gray-200">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{book.subject}</p>
                  <p className="text-xs text-gray-500">{book.className} • PCTB</p>
                </div>
              </div>

              {/* Section 1: Quick Access */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Quick Access
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={handleViewMore}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white group-hover:bg-red-100 flex items-center justify-center shadow-sm transition-colors">
                      <Eye className="w-4 h-4 text-gray-600 group-hover:text-[#D32F2F] transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#D32F2F] transition-colors">View PDF</p>
                      <p className="text-xs text-gray-400">Preview the textbook online</p>
                    </div>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white group-hover:bg-red-100 flex items-center justify-center shadow-sm transition-colors">
                      <Download className="w-4 h-4 text-gray-600 group-hover:text-[#D32F2F] transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#D32F2F] transition-colors">Download PDF</p>
                      <p className="text-xs text-gray-400">Save to your device</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-6" />

              {/* Section 2: Book Details */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Book Details
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Subject', value: book.subject },
                    { label: 'Class', value: book.className },
                    { label: 'Publisher', value: 'PCTB' },
                    { label: 'Format', value: 'PDF' },
                    { label: 'Language', value: 'English / Urdu' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-6" />

              {/* PDF Preview Icon Section */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-100 mb-6">
                <FileText className="w-8 h-8 text-[#D32F2F]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">PDF Available</p>
                  <p className="text-xs text-gray-500">Official PCTB textbook format</p>
                </div>
              </div>

              {/* View Full Details Link */}
              <button
                onClick={handleViewMore}
                className="w-full text-center text-sm text-[#D32F2F] hover:text-[#8B1A1A] font-medium py-2 transition-colors"
              >
                View Full Book Details →
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <BookOpen className="w-12 h-12 mb-3" />
              <p>No book selected</p>
            </div>
          )}
        </div>

        {/* Fixed bottom download button */}
        {book && (
          <div className="px-5 py-4 border-t border-gray-100 bg-white">
            <Button
              onClick={handleDownload}
              className="w-full bg-[#D32F2F] hover:bg-[#8B1A1A] text-white rounded-xl font-semibold py-3 h-12 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        )}
      </div>
    </>
  );
}