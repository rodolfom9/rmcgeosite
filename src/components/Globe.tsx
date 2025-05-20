
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const EarthSphere = ({ autoRotate = true }) => {
  const meshRef = useRef(null);
  
  // Define texture URLs
  const earthMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg';
  const earthBumpMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg';
  const earthSpecularMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';

  // Load textures using useLoader hook from react-three-fiber
  const [earthMap, bumpMap, specularMap] = useLoader(THREE.TextureLoader, [
    earthMapUrl,
    earthBumpMapUrl,
    earthSpecularMapUrl
  ]);
  
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
        specular={new THREE.Color("#666666")}
        shininess={20}
      />
    </mesh>
  );
};

// Preload component to handle suspense
const GlobeWithLoader = (props) => {
  return (
    <React.Suspense fallback={<span>Loading Earth...</span>}>
      <EarthSphere {...props} />
    </React.Suspense>
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
        <GlobeWithLoader />
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
