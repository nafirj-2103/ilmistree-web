'use client'

import React, { Component, Suspense, useRef, useEffect, useState, lazy } from "react";

export type BookCanvasProps = {
  pointer: { x: number; y: number };
  cover: string;
  scale?: number;
  cameraZ?: number;
  positionY?: number;
};

// Error boundary to catch R3F rendering failures gracefully
class R3FErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Lazy-load the R3F Canvas to isolate from Tempo's annotation system
const BookCanvasInner = lazy(() =>
  import("./BookCanvasInner").then((mod) => ({ default: mod.BookCanvasInner }))
);

export function BookCanvas({
  pointer,
  cover,
  scale = 1.6,
  cameraZ = 1.8,
  positionY = 0.1,
}: BookCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mount to give Tempo annotation time to settle
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ height: "100%" }}
    >
      <R3FErrorBoundary
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={cover}
              alt="Book cover"
              className="max-h-full object-contain"
            />
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="animate-pulse text-gray-400">Loading 3D...</div>
            </div>
          }
        >
          {mounted && (
            <BookCanvasInner
              pointer={pointer}
              cover={cover}
              scale={scale}
              cameraZ={cameraZ}
              positionY={positionY}
            />
          )}
        </Suspense>
      </R3FErrorBoundary>
    </div>
  );
}
