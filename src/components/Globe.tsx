
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const EarthSphere = ({ autoRotate = true }) => {
  // Create a ref that's compatible with React Three Fiber's expectations
  const meshRef = React.useRef<THREE.Mesh>(null);
  
  // Earth texture maps
  const [earthMap, earthBumpMap, earthSpecularMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
  ]);

  // Auto-rotation animation
  useFrame(({ clock }) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={earthMap}
        bumpMap={earthBumpMap}
        bumpScale={0.05}
        specularMap={earthSpecularMap}
        specular={new THREE.Color("#666666")}
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
