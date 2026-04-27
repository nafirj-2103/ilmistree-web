'use client'

import { useEffect, useRef, useState, createElement } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { usePathname } from "next/navigation";
import { BookModel } from "./BookModel";

// Preload GLTF models at top level
useGLTF.preload("/models/book.glb");
useGLTF.preload("/models/bluestage.glb");

export type BookCanvasInnerProps = {
  pointer: { x: number; y: number };
  cover: string;
  scale: number;
  cameraZ: number;
  positionY: number;
  onReady?: () => void;
};

export function BookCanvasInner({
  pointer,
  cover,
  scale,
  cameraZ,
  positionY,
  onReady,
}: BookCanvasInnerProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsCoarsePointer(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const canvasChildren = createElement(BookModel, {
    pointer,
    cover,
    scale,
    positionY,
    onReady,
  });

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {createElement(
        Canvas,
        {
          key: pathname,
          camera: { position: [1, 1, cameraZ] as [number, number, number], fov: 50 },
          flat: true,
          gl: {
            antialias: !isCoarsePointer,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
          },
          dpr: isCoarsePointer ? 1 : [1, 1.5],
          style: { width: "100%", height: "100%" },
          onCreated: ({ scene }: { scene: THREE.Scene }) => {
            scene.background = new THREE.Color("#e0e0e0");
            const ambient = new THREE.AmbientLight(0xffffff, 0.7);
            scene.add(ambient);
            const directional = new THREE.DirectionalLight(0xffffff, 1);
            directional.position.set(3, 3, 3);
            scene.add(directional);
          },
        } as any,
        canvasChildren
      )}
    </div>
  );
}
