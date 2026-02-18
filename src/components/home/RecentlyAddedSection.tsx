import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const recentResources = [
  {
    title: 'Introduction to Calculus - Complete Guide',
    category: 'Mathematics',
    format: 'PDF',
    formatColor: 'bg-red-100 text-[#D32F2F]'
  },
  {
    title: 'Python Programming Best Practices',
    category: 'Programming',
    format: 'Video',
    formatColor: 'bg-red-100 text-[#D32F2F]'
  },
  {
    title: 'English Grammar Essentials',
    category: 'Language',
    format: 'Workbook',
    formatColor: 'bg-red-100 text-[#D32F2F]'
  },
  {
    title: 'Scientific Method Explained',
    category: 'Science',
    format: 'Podcast',
    formatColor: 'bg-red-100 text-[#D32F2F]'
  }
];

export function RecentlyAddedSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D32F2F] mb-2">
            Recently Added
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
          {recentResources.map((resource, index) => (
            <div 
              key={index}
              className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 text-xs px-2 py-1">
                      {resource.category}
                    </Badge>
                    <Badge className={`${resource.formatColor} hover:${resource.formatColor} text-xs px-2 py-1 font-semibold`}>
                      {resource.format}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#D32F2F] transition-colors">
                    {resource.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-[#D32F2F] group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
