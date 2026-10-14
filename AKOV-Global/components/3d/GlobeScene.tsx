"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function InteractiveGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  // Load local high-res textures
  const [colorMap, specularMap] = useTexture([
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-water.png'
  ])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Refined lighting to make the Earth pop against a light background */}
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#147E98" />

      {/* Main Earth Sphere */}
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          map={colorMap}
          roughnessMap={specularMap}
          roughness={0.6}
          metalness={0.1}
        />
      </Sphere>

      {/* Subtle Atmosphere Glow */}
      <Sphere args={[1.58, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      <Sphere args={[1.52, 32, 32]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  )
}

export default function GlobeScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative cursor-grab active:cursor-grabbing rounded-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <InteractiveGlobe />
      </Canvas>
    </div>
  )
}
