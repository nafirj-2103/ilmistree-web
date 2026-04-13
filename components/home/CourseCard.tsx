'use client'

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock, Star, Download } from 'lucide-react';
import { Course, CourseCardProps } from './types'; // or wherever interface is

const BookCanvas = dynamic(
  () => import('./BookCanvas').then((mod) => mod.BookCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function CourseCard({
  course,
  useModel = false,
  modelInteractive = true,
  onOpenPanel,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: CourseCardProps) {
  const router = useRouter();
  // pointer coordinates normalized to [-1,1] where (0,0) is center
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [titleExpanded, setTitleExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [titleOverflow, setTitleOverflow] = useState(false);
  const [descOverflow, setDescOverflow] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!useModel || !modelInteractive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x, y });
  };

  const handleLeave = () => {
    if (useModel && modelInteractive) setPointer({ x: 0, y: 0 });
  };

  const handlePrimaryClick = () => {
    if (onOpenPanel) {
      onOpenPanel(course.slug);
    } else {
      router.push(`/book/${course.slug}`);
    }
  };

  useEffect(() => {
    if (!titleExpanded) return;
    const timer = setTimeout(() => setTitleExpanded(false), 6000);
    return () => clearTimeout(timer);
  }, [titleExpanded]);

  useEffect(() => {
    if (!descExpanded) return;
    const timer = setTimeout(() => setDescExpanded(false), 6000);
    return () => clearTimeout(timer);
  }, [descExpanded]);

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current) {
        const el = titleRef.current;
        setTitleOverflow(el.scrollHeight - 1 > el.clientHeight);
      }
      if (descRef.current) {
        const el = descRef.current;
        setDescOverflow(el.scrollHeight - 1 > el.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [course.title, course.description]);

  return (
    <Card
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group flex flex-col h-full"
    >
      <div className="overflow-hidden relative h-40 sm:h-44 md:h-[220px]">
        {useModel ? (
          <BookCanvas
            pointer={pointer}
            cover={course.cover}
            scale={1.6}
            cameraZ={1.8}
            positionY={0.1}
          />
        ) : (
          <img
            src={course.cover}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 gap-3">
          <div className="inline-block px-3 py-1 bg-red-50 text-[#D32F2F] text-xs sm:text-sm font-semibold rounded-full">
            {course.category}
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
            <Star className="w-4 h-4 fill-[#D32F2F] text-[#D32F2F]" />
            {course.rating}
          </div>
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <h3
            ref={titleRef}
            className={`text-lg sm:text-xl font-bold text-gray-900 ${titleExpanded ? '' : 'line-clamp-2'}`}
          >
            {course.title}
          </h3>
          {(titleOverflow || titleExpanded) && (
            <button
              type="button"
              aria-label={titleExpanded ? 'Collapse title' : 'Expand title'}
              onClick={() => setTitleExpanded((v) => !v)}
              className="text-gray-400 hover:text-[#D32F2F] text-lg leading-none select-none relative top-px"
            >
              {titleExpanded ? '✕' : '...'}
            </button>
          )}
        </div>

        <div className="flex items-start gap-1 mb-4">
          <p
            ref={descRef}
            className={`text-sm md:text-base text-gray-600 ${descExpanded ? '' : 'line-clamp-2'}`}
          >
            {course.description}
          </p>
          {(descOverflow || descExpanded) && (
            <button
              type="button"
              aria-label={descExpanded ? 'Collapse description' : 'Expand description'}
              onClick={() => setDescExpanded((v) => !v)}
              className="text-gray-400 hover:text-[#D32F2F] text-lg leading-none mt-[2px] select-none"
            >
              {descExpanded ? '✕' : '...'}
            </button>
          )}
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            {course.downloads}
          </div>
        </div>

        <Button
          onClick={handlePrimaryClick}
          className="w-full bg-[#D32F2F] hover:bg-[#8B1A1A] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:scale-105 text-sm sm:text-base py-2.5 md:py-3"
        >
          View & Download
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
