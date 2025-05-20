
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Earth sphere component that renders a textured globe
 * @param autoRotate Controls whether the globe automatically rotates
 */
const EarthSphere = ({ autoRotate = true }: { autoRotate?: boolean }) => {
  // Reference to the mesh to manipulate it in animations
  // Use any type for the ref to avoid TypeScript errors with incompatible types
  const meshRef = React.useRef<any>(null);
  
  // Create texture loader for Earth textures
  const textureLoader = new THREE.TextureLoader();
  
  // Define texture URLs for Earth map, bump map and specular map
  const earthMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg';
  const earthBumpMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg';
  const earthSpecularMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';

  // Create base texture objects to avoid TypeScript errors
  // Using type any to bypass TypeScript's strict checking on textures
  const earthMap: any = textureLoader.load(earthMapUrl);
  const bumpMap: any = textureLoader.load(earthBumpMapUrl);
  const specularMap: any = textureLoader.load(earthSpecularMapUrl);
  
  // Animation hook for auto-rotation
  useFrame(() => {
    if (meshRef.current && autoRotate) {
      // Rotate the globe slowly around Y axis
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Sphere geometry parameters: radius, widthSegments, heightSegments */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={earthMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specularMap}
        specular="#666666"
        shininess={20}
      />
    </mesh>
  );
};

/**
 * Simple orbit controls that rotate the scene without requiring the drei library
 */
const SimpleOrbitControls = () => {
  // Reference to the group that will be rotated
  // Use any type to resolve TypeScript compatibility issues
  const groupRef = React.useRef<any>(null);
  
  // Animation hook for camera movement
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Calculate rotation based on elapsed time for smooth animation
      const t = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = t * 0.5;
    }
  });

  return <group ref={groupRef}><EarthSphere /></group>;
};

/**
 * Globe component props
 */
interface GlobeProps {
  className?: string; // Optional class name for styling
}

/**
 * Main Globe component that renders a 3D Earth sphere
 * Positioned to be centered on the page
 */
const Globe = ({ className }: GlobeProps) => {
  return (
    <div className={`${className || ''} relative h-full w-full`}>
      {/* Canvas for 3D rendering with adjusted camera position */}
      <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }}>
        {/* Ambient light for basic scene illumination */}
        <ambientLight intensity={0.8} />
        {/* Directional light to create highlights and shadows */}
        <directionalLight intensity={1} position={[5, 3, 5]} />
        {/* Controls and Earth component */}
        <SimpleOrbitControls />
      </Canvas>
    </div>
  );
};

export default Globe;
