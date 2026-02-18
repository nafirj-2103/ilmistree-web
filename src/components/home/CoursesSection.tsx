import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    category: 'Technology',
    title: 'Computer Science Fundamentals',
    description: 'Master the basics of programming, algorithms, and data structures',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    duration: '12 weeks',
    rating: 4.8,
    students: '25K'
  },
  {
    id: 2,
    category: 'Mathematics',
    title: 'Advanced Mathematics',
    description: 'Explore calculus, linear algebra, and applied mathematics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    duration: '10 weeks',
    rating: 4.9,
    students: '18K'
  },
  {
    id: 3,
    category: 'Science',
    title: 'Science & Research Methods',
    description: 'Learn scientific methodology and laboratory techniques',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    duration: '8 weeks',
    rating: 4.7,
    students: '15K'
  },
  {
    id: 4,
    category: 'Languages',
    title: 'Language Learning',
    description: 'Master new languages with immersive learning techniques',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    duration: '16 weeks',
    rating: 4.8,
    students: '30K'
  },
  {
    id: 5,
    category: 'Business',
    title: 'Business & Technology',
    description: 'Navigate the intersection of business strategy and innovation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    duration: '14 weeks',
    rating: 4.6,
    students: '22K'
  },
  {
    id: 6,
    category: 'Arts',
    title: 'Creative Arts & Design',
    description: 'Unleash your creativity through visual arts and design principles',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    duration: '12 weeks',
    rating: 4.9,
    students: '20K'
  }
];

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most sought-after courses designed by industry experts and academic leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-[#D32F2F] text-sm font-semibold rounded-full mb-3">
                  {course.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#D32F2F] text-[#D32F2F]" />
                    {course.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                <Button 
                  className="w-full bg-[#D32F2F] hover:bg-[#8B1A1A] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all hover:scale-105"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
