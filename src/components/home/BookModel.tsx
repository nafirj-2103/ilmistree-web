import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// preload both models (match real filenames)
useGLTF.preload('/models/bluestage.glb');
useGLTF.preload('/models/book.glb');

export type BookModelProps = {
  /** normalized pointer coords from parent (-1..1) */
  pointer: { x: number; y: number };
  /** cover image path, e.g., "/textures/physics.jpg" */
  cover: string;
};

export function BookModel({ pointer, cover }: BookModelProps) {
  const stageRef = useRef<THREE.Group>(null!);
  const bookRef = useRef<THREE.Group>(null!);

  // ensure paths match actual filenames in public/models
  const { scene: stageScene } = useGLTF('/models/bluestage.glb') as any;
  const { scene: bookScene } = useGLTF('/models/book.glb') as any;



const texture = useTexture(cover);

useEffect(() => {
  texture.flipY = false;
  texture.needsUpdate = true;
}, [texture]);

  // add both models once
  useEffect(() => {
    // --- add stage (static) ---
    if (stageScene && stageRef.current && stageRef.current.children.length === 0) {
      const cloned = stageScene.clone();
      const box = new THREE.Box3().setFromObject(cloned);
      let size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const base = 20 / maxDim;
        const zoom = 2; // zoom stage closer
        const scale = base * zoom;
        cloned.scale.multiplyScalar(scale);
      }
      box.setFromObject(cloned);
      const center = box.getCenter(new THREE.Vector3());
      size = box.getSize(new THREE.Vector3());
      cloned.position.sub(center);
      cloned.position.y += size.y / 15; // lift stage a bit
      stageRef.current.add(cloned);
    }

    // --- add book (rotatable) ---
    if (bookScene && bookRef.current && bookRef.current.children.length === 0) {
      const cloned = bookScene.clone();

      // apply texture and shadows
  cloned.traverse((child: THREE.Object3D) => {
  if (child instanceof THREE.Mesh) {
    child.castShadow = true;
    child.receiveShadow = true;

    // Agar mesh ka name ya material.name cover/back/spine ho
    const matName = Array.isArray(child.material)
      ? child.material[0].name
      : child.material.name;

    if (
      matName?.toLowerCase().includes("cover") ||
      matName?.toLowerCase().includes("spine") ||
      matName?.toLowerCase().includes("back")
    ) {
      child.material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
    } else {
      // pages ke liye plain white
      child.material = new THREE.MeshStandardMaterial({
        color: "#f2f2f2",
        roughness: 0.9,
      });
    }
  }
});

      // scale & center book independent of stage
      const box = new THREE.Box3().setFromObject(cloned);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1.6 / Math.max(maxDim, 0.1);
      cloned.scale.multiplyScalar(scale);
      box.setFromObject(cloned);
      const center = box.getCenter(new THREE.Vector3());
      cloned.position.sub(center);
      

      // lift the book slightly above the stage
      cloned.position.y += 0.1;
      cloned.position.z += 0.1;
      cloned.rotation.set(0, 0, 0);

      bookRef.current.add(cloned);
    }
  }, [stageScene, bookScene, texture]);

  // --- hover rotation ---
  useFrame(() => {
    if (!bookRef.current) return;
    const targetY = pointer.x * 3;
    const targetX = pointer.y * 2;

    bookRef.current.rotation.x = THREE.MathUtils.lerp(
      bookRef.current.rotation.x,
      targetX,
      0.1
    );
    bookRef.current.rotation.y = THREE.MathUtils.lerp(
      bookRef.current.rotation.y,
      targetY,
      0.1
    );
  });

  return (
    <>
      {/* right red light */}
      <pointLight
        position={[2, 1, 1]}
        intensity={25}
        color="red"
        castShadow
        distance={15}
      />
      {/* left blue light */}
      <pointLight
        position={[-2, 1, 1]}
        intensity={8}
        color="skyblue"
        castShadow
        distance={25}
      />
      {/* top white soft light */}
      <pointLight
        position={[0, 3, 1]}
        intensity={5}
        color="white"
        castShadow
        distance={25}
      />

      <group ref={stageRef} />
      <group ref={bookRef} />
    </>
  );
}