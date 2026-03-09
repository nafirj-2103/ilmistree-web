import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// preload both models (match real filenames)
useGLTF.preload('/models/bluestage.glb');
useGLTF.preload('/models/book.glb');

export type BookModelProps = {
  /** normalized pointer coords from parent (-1..1) */
  pointer: { x: number; y: number };
};

export function BookModel({ pointer }: BookModelProps) {
  const stageRef = useRef<THREE.Group>(null!);
  const bookRef = useRef<THREE.Group>(null!);

  // ensure paths match actual filenames in public/models
  const { scene: stageScene } = useGLTF('/models/bluestage.glb') as any;
  const { scene: bookScene } = useGLTF('/models/book.glb') as any;

  // add both models once
  useEffect(() => {
    // add stage (static)
    if (stageScene && stageRef.current && stageRef.current.children.length === 0) {
      const cloned = stageScene.clone();
      // log bounding box for debugging and scale to manageable size
      const box = new THREE.Box3().setFromObject(cloned);
      let size = box.getSize(new THREE.Vector3());
      console.log('stage bounds', size);
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        // original normalization to unit size, now apply extra zoom multiplier
        const base = 20 / maxDim;
        const zoom = 2; // increase this to zoom stage closer
        const scale = base * zoom;
        cloned.scale.multiplyScalar(scale);
        console.log('scaled stage by', scale, '(zoom ' + zoom + ')');
      }
      // re-center
      box.setFromObject(cloned);

      const center = box.getCenter(new THREE.Vector3());
      size = box.getSize(new THREE.Vector3());

      // center stage
      cloned.position.sub(center);

      // align floor to bottom
      cloned.position.y += size.y / 15;

      stageRef.current.add(cloned);
    }

    // add book (rotatable)
    if (bookScene && bookRef.current && bookRef.current.children.length === 0) {
      const cloned = bookScene.clone();
      const box2 = new THREE.Box3().setFromObject(cloned);
      console.log('book bounds before scaling', box2.getSize(new THREE.Vector3()));

      cloned.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            (child.material as THREE.Material).side = THREE.DoubleSide;
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
      cloned.position.z += 0.1; // move forward a bit so not intersecting
      cloned.rotation.set(0,0,0);
      bookRef.current.add(cloned);
    }
  }, [stageScene, bookScene]);

  useFrame(() => {
    if (!bookRef.current) return;

    // map pointer to rotation angles
    // pointer.x [-1..1] -> yaw left/right (max ~0.5 rad)
    // pointer.y [-1..1] -> pitch up/down (max ~0.15 rad)
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
      <group ref={stageRef} />
      <group ref={bookRef} />
    </>
  );
}
