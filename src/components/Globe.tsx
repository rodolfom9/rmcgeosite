
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const EarthSphere = ({ autoRotate = true }) => {
  const meshRef = useRef(null);
  
  // Define texture URLs
  const earthMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg';
  const earthBumpMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg';
  const earthSpecularMapUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';

  // Manually create textures instead of using useTexture hook
  const earthTexture = new THREE.TextureLoader().load(earthMapUrl);
  const bumpTexture = new THREE.TextureLoader().load(earthBumpMapUrl);
  const specularTexture = new THREE.TextureLoader().load(earthSpecularMapUrl);
  
  // Auto-rotation animation
  React.useEffect(() => {
    if (!meshRef.current || !autoRotate) return;
    
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.002;
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    let animationFrameId = window.requestAnimationFrame(animate);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={earthTexture}
        bumpMap={bumpTexture}
        bumpScale={0.05}
        specularMap={specularTexture}
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
