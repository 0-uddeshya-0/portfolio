import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LegoCharacterProps {
  scrollProgress: number;
  isWalking: boolean;
  direction?: 'left' | 'right';
}

// Lego colors
const COLORS = {
  skin: '#F5D0A9',
  hair: '#2C2C2C',
  shirt: '#7A9B76', // muted sage
  pants: '#4A5D4C',
  shoes: '#1C1C1C',
};

// Simple box geometry helper
function Box({ 
  args, 
  color, 
  position, 
  rotation = [0, 0, 0],
  children 
}: { 
  args: [number, number, number]; 
  color: string; 
  position: [number, number, number];
  rotation?: [number, number, number];
  children?: React.ReactNode;
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      {children}
    </mesh>
  );
}

// Head component with face
function Head({ rotation }: { rotation: number }) {
  const headRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (headRef.current) {
      headRef.current.rotation.y = rotation;
    }
  });

  return (
    <group ref={headRef} position={[0, 1.6, 0]}>
      {/* Head base */}
      <Box args={[0.5, 0.45, 0.45]} color={COLORS.skin} position={[0, 0, 0]}>
        {/* Eyes */}
        <mesh position={[-0.1, 0.05, 0.23]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#1C1C1C" />
        </mesh>
        <mesh position={[0.1, 0.05, 0.23]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#1C1C1C" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.08, 0.23]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#1C1C1C" />
        </mesh>
      </Box>
      {/* Hair */}
      <Box args={[0.55, 0.2, 0.5]} color={COLORS.hair} position={[0, 0.25, -0.02]} />
      <Box args={[0.55, 0.35, 0.15]} color={COLORS.hair} position={[0, 0.15, -0.2]} />
      {/* Stud on top */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.08, 16]} />
        <meshStandardMaterial color={COLORS.hair} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Arm component with pivot
function Arm({ 
  side, 
  swing 
}: { 
  side: 'left' | 'right'; 
  swing: number;
}) {
  const armRef = useRef<THREE.Group>(null);
  const xOffset = side === 'left' ? -0.45 : 0.45;
  
  useFrame(() => {
    if (armRef.current) {
      // Walking arm swing - opposite to leg
      const direction = side === 'left' ? 1 : -1;
      armRef.current.rotation.x = Math.sin(swing) * 0.6 * direction;
    }
  });

  return (
    <group ref={armRef} position={[xOffset, 1.1, 0]}>
      {/* Shoulder/Upper Arm */}
      <Box args={[0.18, 0.35, 0.18]} color={COLORS.shirt} position={[0, 0.1, 0]} />
      {/* Lower Arm */}
      <Box args={[0.15, 0.3, 0.15]} color={COLORS.skin} position={[0, -0.3, 0]} />
      {/* Hand (C-shape) */}
      <group position={[0, -0.55, 0]}>
        <mesh rotation={[0, 0, side === 'left' ? Math.PI / 2 : -Math.PI / 2]}>
          <torusGeometry args={[0.08, 0.04, 8, 16, Math.PI * 1.3]} />
          <meshStandardMaterial color={COLORS.skin} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Leg component with pivot
function Leg({ 
  side, 
  swing 
}: { 
  side: 'left' | 'right'; 
  swing: number;
}) {
  const legRef = useRef<THREE.Group>(null);
  const xOffset = side === 'left' ? -0.18 : 0.18;
  
  useFrame(() => {
    if (legRef.current) {
      // Walking leg swing
      const direction = side === 'left' ? 1 : -1;
      legRef.current.rotation.x = Math.sin(swing) * 0.5 * direction;
    }
  });

  return (
    <group ref={legRef} position={[xOffset, 0.55, 0]}>
      {/* Hip/Pants top */}
      <Box args={[0.22, 0.25, 0.22]} color={COLORS.pants} position={[0, 0, 0]} />
      {/* Leg */}
      <Box args={[0.2, 0.4, 0.2]} color={COLORS.pants} position={[0, -0.3, 0]} />
      {/* Foot */}
      <Box args={[0.22, 0.12, 0.3]} color={COLORS.shoes} position={[0, -0.55, 0.05]} />
    </group>
  );
}

// Torso component
function Torso({ breathing }: { breathing: number }) {
  const torsoRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (torsoRef.current) {
      // Subtle breathing animation
      torsoRef.current.scale.y = 1 + Math.sin(breathing) * 0.01;
    }
  });

  return (
    <group ref={torsoRef} position={[0, 0.85, 0]}>
      {/* Main torso */}
      <Box args={[0.55, 0.5, 0.3]} color={COLORS.shirt} position={[0, 0, 0]}>
        {/* Neck detail */}
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.06, 16]} />
          <meshStandardMaterial color={COLORS.skin} roughness={0.3} />
        </mesh>
      </Box>
    </group>
  );
}

// Hip connector
function Hip() {
  return (
    <group position={[0, 0.55, 0]}>
      <Box args={[0.5, 0.15, 0.25]} color={COLORS.pants} position={[0, 0, 0]} />
    </group>
  );
}

// Main Lego Character
export function LegoCharacter({ scrollProgress, isWalking }: LegoCharacterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [walkCycle, setWalkCycle] = useState(0);
  const [headRotation, setHeadRotation] = useState(0);
  const [breathing, setBreathing] = useState(0);

  // Animation loop
  useFrame((_, delta) => {
    // Update walk cycle when walking
    if (isWalking) {
      setWalkCycle(prev => prev + delta * 8);
    } else {
      // Return to neutral pose
      setWalkCycle(prev => prev + delta * 2);
    }

    // Breathing always happens
    setBreathing(prev => prev + delta * 2);

    // Head looks around occasionally
    setHeadRotation(Math.sin(breathing * 0.3) * 0.2);

    // Move character based on scroll progress
    if (groupRef.current) {
      // Map scroll progress to position
      // Start at left, move to right as user scrolls
      const startX = -4;
      const endX = 4;
      const x = startX + (endX - startX) * scrollProgress;
      
      // Add slight bobbing when walking
      const bobOffset = isWalking ? Math.abs(Math.sin(walkCycle * 2)) * 0.05 : 0;
      
      groupRef.current.position.x = x;
      groupRef.current.position.y = bobOffset;
      
      // Face direction of movement
      if (scrollProgress > 0.01 && scrollProgress < 0.99) {
        groupRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <group ref={groupRef} position={[-4, 0, 0]} castShadow>
      {/* Shadow plane */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[0.6, 32]} />
        <meshBasicMaterial color="#1C1C1C" transparent opacity={0.15} />
      </mesh>
      
      <Head rotation={headRotation} />
      <Torso breathing={breathing} />
      <Hip />
      <Arm side="left" swing={walkCycle} />
      <Arm side="right" swing={walkCycle} />
      <Leg side="left" swing={walkCycle} />
      <Leg side="right" swing={walkCycle} />
    </group>
  );
}

// Scene wrapper with lighting
export function LegoScene({ scrollProgress, isWalking }: LegoCharacterProps) {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.6} />
      
      {/* Main directional light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      
      {/* Fill light */}
      <pointLight position={[-5, 5, -5]} intensity={0.3} color="#A8B5A2" />
      
      {/* Character */}
      <LegoCharacter scrollProgress={scrollProgress} isWalking={isWalking} />
      
      {/* Ground plane for shadows */}
      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#F7F5F2" transparent opacity={0} />
      </mesh>
    </>
  );
}
