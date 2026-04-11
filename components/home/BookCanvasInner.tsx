'use client'

import { useRef, createElement } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { BookModel } from "./BookModel";

export type BookCanvasInnerProps = {
  pointer: { x: number; y: number };
  cover: string;
  scale: number;
  cameraZ: number;
  positionY: number;
  onReady?: () => void;
};

/**
 * Uses React.createElement instead of JSX for all children inside <Canvas>
 * to prevent Tempo's JSX annotation transform from injecting `tempoelementid`
 * props into components rendered by R3F's custom reconciler.
 */
export function BookCanvasInner({
  pointer,
  cover,
  scale,
  cameraZ,
  positionY,
  onReady,
}: BookCanvasInnerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Build the Canvas children via createElement to bypass Tempo annotation
  const canvasChildren = createElement(BookModel, {
    pointer,
    cover,
    scale,
    positionY,
  });

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {createElement(
        Canvas,
        {
          camera: { position: [1, 1, cameraZ] as [number, number, number], fov: 50 },
          flat: true,
          style: { width: "100%", height: "100%" },
          gl: { antialias: true },
          onCreated: ({ scene }: { scene: THREE.Scene }) => {
            scene.background = new THREE.Color("#e0e0e0");
            const ambient = new THREE.AmbientLight(0xffffff, 0.7);
            scene.add(ambient);
            const directional = new THREE.DirectionalLight(0xffffff, 1);
            directional.position.set(3, 3, 3);
            scene.add(directional);
            onReady?.();
          },
        } as any,
        canvasChildren
      )}
    </div>
  );
}
