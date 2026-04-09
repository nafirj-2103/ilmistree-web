'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function formatSegment(seg: string) {
  return seg
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  const crumbs = [{ label: 'Home', href: '/' }, ...parts.map((seg, idx) => ({
    label: formatSegment(seg),
    href: '/' + parts.slice(0, idx + 1).join('/'),
  }))];

  return (
    <nav className="w-full">
      <ol className="flex items-center gap-2 text-xs md:text-sm text-white/80">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {idx < crumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-white underline-offset-2 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/90 font-semibold">{crumb.label}</span>
            )}
            {idx < crumbs.length - 1 && <span className="text-white/50">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
