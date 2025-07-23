import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { MoleculeOrb } from './MoleculeOrb';

export const HeroScene = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00BFFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B6B" />
          
          {/* Main Central Orb */}
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <MoleculeOrb position={[0, 0, 0]} scale={1.5} color="#00BFFF" />
          </Float>
          
          {/* Satellite Orbs */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <MoleculeOrb position={[3, 1, -2]} scale={0.6} color="#FF6B6B" />
          </Float>
          
          <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.5}>
            <MoleculeOrb position={[-2.5, -1, -1]} scale={0.8} color="#4ECDC4" />
          </Float>
          
          <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.8}>
            <MoleculeOrb position={[1.5, -2, 1]} scale={0.5} color="#A8E6CF" />
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};