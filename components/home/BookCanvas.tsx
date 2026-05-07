'use client'

import React, { Component, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";

const BookCanvasInner = dynamic(
  () => import("./BookCanvasInner").then((mod) => mod.BookCanvasInner),
  { ssr: false }
);

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

export function BookCanvas({
  pointer,
  cover,
  scale = 1.6,
  cameraZ = 1.8,
  positionY = 0.1,
}: BookCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const encodedCover = useMemo(() => encodeURI(cover), [cover]);

  // Cleanup on unmount to prevent memory leaks
  React.useEffect(() => {
    return () => {
      setIsReady(false);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ height: "100%" }}
    >
      <img
        src={encodedCover}
        alt="Book cover"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
        decoding="async"
      />

      <R3FErrorBoundary
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={encodedCover}
              alt="Book cover"
              className="max-h-full object-contain"
            />
          </div>
        }
      >
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <BookCanvasInner
            pointer={pointer}
            cover={encodedCover}
            scale={scale}
            cameraZ={cameraZ}
            positionY={positionY}
            onReady={() => setIsReady(true)}
          />
        </div>
      </R3FErrorBoundary>
    </div>
  );
}
