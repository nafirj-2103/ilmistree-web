import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BookModel } from "./BookModel";

export type BookCanvasProps = {
  pointer: { x: number; y: number };
  cover: string;
};

export function BookCanvas({ pointer, cover }: BookCanvasProps) {
  return (
    <div
      className="w-full pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ height: "220px" }}
    >
      <Canvas
        camera={{
          position: [1, 1, 1.8],
          fov: 50,
        }}
      >
        <color attach="background" args={["#e0e0e0"]} />

        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Suspense fallback={null}>
          <BookModel pointer={pointer} cover={cover} />
        </Suspense>
      </Canvas>
    </div>
  );
}