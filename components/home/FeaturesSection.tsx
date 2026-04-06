export function FeaturesSection() {
  // Temporarily hidden; return null instead of rendering the section.
  return null;
}

/* Previous implementation — kept for reference, commented out to hide UI.

import { Card } from '@/components/ui/card';
import { Video, Calendar, MessageSquare, Award, BookOpen, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'HD Video Lectures',
    description: 'High-quality video content with expert instructors teaching at your pace'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Learn anytime, anywhere with self-paced courses that fit your lifestyle'
  },
  {
    icon: MessageSquare,
    title: 'Interactive Forums',
    description: 'Engage with peers and instructors through our active learning community'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn verified certificates upon completion to showcase your achievements'
  },
  {
    icon: BookOpen,
    title: 'Rich Resources',
    description: 'Access comprehensive study materials, eBooks, and practice exercises'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and milestones'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">
           Why Choose Ilmistree?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience a comprehensive learning platform designed to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-white"
              >
                <div className="w-16 h-16 bg-[#D32F2F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

*/
