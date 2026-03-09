import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BookModel } from './BookModel';

export type BookCanvasProps = {
  /** normalized pointer coordinates (-1 to 1) within card; (0,0) center */
  pointer: { x: number; y: number };
};

export function BookCanvas({ pointer }: BookCanvasProps) {
  return (
    <div 
      className="w-full pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ height: '220px' }}
    >
      <Canvas
        frameloop="always"
        camera={{
          position: [1, 1.0, 1.8], // zoomed closer to focus on the book
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
        }}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* grey background to confirm camera view */}
        <color attach="background" args={["#e0e0e0"]} />
        {/* Simple static lighting - never moves */}
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[3, 3, 3]} 
          intensity={1.0}
          castShadow={false}
        />

        <Suspense fallback={null}>
          <BookModel pointer={pointer} />
        </Suspense>

      </Canvas>
    </div>
  );
}
