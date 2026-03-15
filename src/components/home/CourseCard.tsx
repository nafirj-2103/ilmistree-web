import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock, Star, Download } from 'lucide-react';
import { BookCanvas } from './BookCanvas';
import { Course, CourseCardProps } from './types'; // or wherever interface is

export function CourseCard({ course, useModel = false }: CourseCardProps) {
  // pointer coordinates normalized to [-1,1] where (0,0) is center
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!useModel) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x, y });
  };

  const handleLeave = () => {
    if (useModel) setPointer({ x: 0, y: 0 });
  };

  return (
    <Card
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
    >
      <div className="overflow-hidden relative" style={{ height: '220px' }}>
        {useModel ? (
          <BookCanvas pointer={pointer} cover={course.cover} />
        ) : (
          <img
            src={course.cover}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-red-50 text-[#D32F2F] text-sm font-semibold rounded-full mb-3">
          {course.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

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
            <Download className="w-4 h-4" />
            {course.downloads}
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
  );
}