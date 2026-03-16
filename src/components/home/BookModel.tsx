import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
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

/**
 * Fully imperative R3F component — uses NO R3F intrinsic JSX elements
 * (no <group>, <pointLight>, <mesh>, etc.) to avoid Tempo's annotation
 * system injecting `tempoelementid` props that crash R3F's reconciler.
 *
 * Instead, everything is added to the scene imperatively via Three.js API.
 * We return null from render and manage the scene graph via refs + useEffect.
 */
export function BookModel({ pointer, cover }: BookModelProps) {
  const { scene } = useThree();
  const wrapperRef = useRef<THREE.Group | null>(null);
  const stageGroupRef = useRef<THREE.Group | null>(null);
  const bookGroupRef = useRef<THREE.Group | null>(null);
  const cleanupRef = useRef(false);

  const { scene: stageScene } = useGLTF('/models/bluestage.glb') as any;
  const { scene: bookScene } = useGLTF('/models/book.glb') as any;

  const texture = useTexture(cover);

  useEffect(() => {
    texture.flipY = false;
    texture.needsUpdate = true;
  }, [texture]);

  // Create all Three.js objects imperatively
  useEffect(() => {
    const wrapper = new THREE.Group();
    const stageGroup = new THREE.Group();
    const bookGroup = new THREE.Group();

    wrapper.add(stageGroup);
    wrapper.add(bookGroup);

    // Lights
    const redLight = new THREE.PointLight(0xff0000, 25, 15);
    redLight.position.set(2, 1, 1);
    redLight.castShadow = true;
    wrapper.add(redLight);

    const blueLight = new THREE.PointLight(0x87ceeb, 8, 25);
    blueLight.position.set(-2, 1, 1);
    blueLight.castShadow = true;
    wrapper.add(blueLight);

    const whiteLight = new THREE.PointLight(0xffffff, 5, 25);
    whiteLight.position.set(0, 3, 1);
    whiteLight.castShadow = true;
    wrapper.add(whiteLight);

    scene.add(wrapper);

    wrapperRef.current = wrapper;
    stageGroupRef.current = stageGroup;
    bookGroupRef.current = bookGroup;

    return () => {
      scene.remove(wrapper);
      wrapper.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m: THREE.Material) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
      wrapperRef.current = null;
      stageGroupRef.current = null;
      bookGroupRef.current = null;
    };
  }, [scene]);

  // Add stage model
  useEffect(() => {
    const stageGroup = stageGroupRef.current;
    if (!stageScene || !stageGroup || stageGroup.children.length > 0) return;

    const cloned = stageScene.clone();
    const box = new THREE.Box3().setFromObject(cloned);
    let size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const base = 20 / maxDim;
      const zoom = 2;
      const scale = base * zoom;
      cloned.scale.multiplyScalar(scale);
    }
    box.setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    size = box.getSize(new THREE.Vector3());
    cloned.position.sub(center);
    cloned.position.y += size.y / 15;
    stageGroup.add(cloned);
  }, [stageScene]);

  // Add book model
  useEffect(() => {
    const bookGroup = bookGroupRef.current;
    if (!bookScene || !bookGroup || bookGroup.children.length > 0) return;

    const cloned = bookScene.clone();

    cloned.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

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
          child.material = new THREE.MeshStandardMaterial({
            color: "#f2f2f2",
            roughness: 0.9,
          });
        }
      }
    });

    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.6 / Math.max(maxDim, 0.1);
    cloned.scale.multiplyScalar(scale);
    box.setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    cloned.position.sub(center);

    cloned.position.y += 0.1;
    cloned.position.z += 0.1;
    cloned.rotation.set(0, 0, 0);

    bookGroup.add(cloned);
  }, [bookScene, texture]);

  // Hover rotation
  useFrame(() => {
    const bookGroup = bookGroupRef.current;
    if (!bookGroup) return;
    const targetY = pointer.x * 3;
    const targetX = pointer.y * 2;

    bookGroup.rotation.x = THREE.MathUtils.lerp(
      bookGroup.rotation.x,
      targetX,
      0.1
    );
    bookGroup.rotation.y = THREE.MathUtils.lerp(
      bookGroup.rotation.y,
      targetY,
      0.1
    );
  });

  // Return null — no JSX R3F elements at all
  return null;
}