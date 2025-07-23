import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

interface CompoundBottleProps {
  compound: string;
  color?: string;
  isHovered?: boolean;
}

export const CompoundBottle = ({ 
  compound, 
  color = "#00BFFF",
  isHovered = false 
}: CompoundBottleProps) => {
  const bottleRef = useRef<Mesh>(null);
  const [isRotating, setIsRotating] = useState(false);

  useFrame((state) => {
    if (bottleRef.current && (isHovered || isRotating)) {
      bottleRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group
      onPointerEnter={() => setIsRotating(true)}
      onPointerLeave={() => setIsRotating(false)}
    >
      {/* Bottle Body */}
      <Cylinder
        ref={bottleRef}
        args={[0.3, 0.3, 1.2, 16]}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Cylinder>

      {/* Bottle Cap */}
      <Cylinder
        args={[0.32, 0.32, 0.15, 16]}
        position={[0, 0.675, 0]}
      >
        <meshPhysicalMaterial
          color="#silver"
          roughness={0.2}
          metalness={1}
        />
      </Cylinder>

      {/* Compound Label */}
      <Center position={[0, 0, 0.31]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.08}
          height={0.01}
        >
          {compound.charAt(0)}
          <meshPhysicalMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.1}
          />
        </Text3D>
      </Center>

      {/* Glow Effect */}
      <Cylinder
        args={[0.4, 0.4, 1.3, 16]}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial
          color={color}
          transparent
          opacity={isHovered ? 0.2 : 0.1}
          side={2}
        />
      </Cylinder>
    </group>
  );
};