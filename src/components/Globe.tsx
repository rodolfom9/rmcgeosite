
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const EarthSphere = ({ autoRotate = true }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create texture loader
  const textureLoader = new THREE.TextureLoader();
  
  // Define texture URLs
  const earthMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg';
  const earthBumpMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg';
  const earthSpecularMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';

  // Pre-load textures
  const earthMap = textureLoader.load(earthMapUrl);
  const bumpMap = textureLoader.load(earthBumpMapUrl);
  const specularMap = textureLoader.load(earthSpecularMapUrl);
  
  // Auto-rotation animation
  useFrame(() => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
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

interface GlobeProps {
  className?: string;
}

const Globe = ({ className }: GlobeProps) => {
  return (
    <div className={`${className || ''} relative h-full w-full`}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1} position={[5, 3, 5]} />
        <EarthSphere />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
