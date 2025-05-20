
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere } from '@react-three/drei';

const EarthSphere = ({ autoRotate = true }) => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Earth texture maps
  const [earthMap, earthBumpMap, earthSpecularMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
  ]);

  // Auto-rotation animation
  useFrame(({ clock }) => {
    if (autoRotate && earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshPhongMaterial
        map={earthMap}
        bumpMap={earthBumpMap}
        bumpScale={0.05}
        specularMap={earthSpecularMap}
        specular={0x666666}
        shininess={20}
      />
    </Sphere>
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
