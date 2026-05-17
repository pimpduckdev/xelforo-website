'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VoxelBackground({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Create optimized voxel grid — reduced count for performance
    const size = 6; // Reduced from 10
    const spacing = 3; // Increased spacing
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.5,
      roughness: 0.7,
    });

    const voxels = new THREE.Group();
    const voxelCount = 0;

    for (let x = -size; x <= size; x += spacing) {
      for (let y = -size; y <= size; y += spacing) {
        for (let z = -size; z <= size; z += spacing) {
          const voxel = new THREE.Mesh(geometry, material);
          voxel.position.set(x, y, z);
          voxels.add(voxel);
        }
      }
    }
    scene.add(voxels);

    // Lighting — simplified
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x00ff88, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 25;

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      voxels.rotation.x += 0.001;
      voxels.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 ${className}`} />;
}
