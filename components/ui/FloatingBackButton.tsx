'use client'

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface FloatingBackButtonProps {
  href: string;
  label?: string;
}

export function FloatingBackButton({ href, label = 'Back' }: FloatingBackButtonProps) {
  return (
    <Link
      href={href}
      className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-lg shadow-black/5 backdrop-blur transition hover:bg-white"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
