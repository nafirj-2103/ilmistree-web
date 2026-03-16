// types.ts
export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  cover: string;       // 3D book texture ke liye
  duration: string;
  rating: number;
  downloads: string;   // yaha students ki jagah downloads
  slug: string;        // URL slug for book detail page
}

export interface CourseCardProps {
  course: Course;
  useModel?: boolean;  // optional
}