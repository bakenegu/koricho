"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sparkles, ContactShadows } from "@react-three/drei"
import { Suspense, useMemo } from "react"
import * as THREE from "three"

function MedicalCapsule() {
  const capsuleGeometry = useMemo(() => {
    const geometry = new THREE.CapsuleGeometry(0.35, 1, 64, 64)
    geometry.center()

    const position = geometry.attributes.position as THREE.BufferAttribute
    const colors = new Float32Array(position.count * 3)
    const colorPositive = new THREE.Color("#10b981")
    const colorNegative = new THREE.Color("#f8fafc")

    for (let i = 0; i < position.count; i++) {
      const y = position.getY(i)
      const color = y >= 0 ? colorPositive : colorNegative
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return geometry
  }, [])

  const seamGeometry = useMemo(
    () => new THREE.CylinderGeometry(0.355, 0.355, 0.02, 64, 1, true),
    [],
  )

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.65}>
      <group rotation={[Math.PI / 3.2, Math.PI / 6, Math.PI / 14]}>
        <mesh geometry={capsuleGeometry} castShadow receiveShadow>
          <meshPhysicalMaterial
            vertexColors
            roughness={0.22}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.1}
            sheen={0.5}
            sheenColor="#ffffff"
            sheenRoughness={0.25}
          />
        </mesh>

        <mesh geometry={capsuleGeometry} scale={[1.012, 1.012, 1.012]} castShadow>
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            roughness={0.05}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0.02}
            envMapIntensity={1.4}
          />
        </mesh>

        <mesh geometry={seamGeometry} castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#cbd5f5"
            metalness={0.8}
            roughness={0.35}
            side={THREE.DoubleSide}
            envMapIntensity={1.3}
          />
        </mesh>

        <group position={[0, 0, 0.38]}> 
          <mesh castShadow>
            <boxGeometry args={[0.09, 0.3, 0.02]} />
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.25}
              metalness={0.1}
              clearcoat={0.8}
            />
          </mesh>
          <mesh castShadow>
            <boxGeometry args={[0.3, 0.09, 0.02]} />
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.25}
              metalness={0.1}
              clearcoat={0.8}
            />
          </mesh>
        </group>
      </group>

      <Float speed={2.6} rotationIntensity={1.1} floatIntensity={2}>
        <mesh position={[1.3, 0.6, 0.2]} castShadow>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#60A5FA"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={0.9} floatIntensity={1.6}>
        <mesh position={[-1.1, -0.4, 0.6]} castShadow>
          <sphereGeometry args={[0.08, 24, 24]} />
          <meshStandardMaterial
            color="#34D399"
            emissive="#34D399"
            emissiveIntensity={0.7}
          />
        </mesh>
      </Float>

      <Float speed={3.1} rotationIntensity={1.2} floatIntensity={2.4}>
        <mesh position={[0.9, -0.9, -0.4]} castShadow>
          <sphereGeometry args={[0.09, 24, 24]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#60A5FA"
            emissiveIntensity={0.75}
          />
        </mesh>
      </Float>

    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[5, 8, 6]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight
        position={[0, 6, 3]}
        angle={0.6}
        penumbra={0.4}
        intensity={0.8}
        color="#bfdbfe"
      />
      <pointLight position={[-4, -2, -4]} intensity={0.6} color="#3b82f6" />
      <MedicalCapsule />
      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.25}
        scale={6}
        blur={2.6}
        far={4}
      />
      <Environment preset="city" background={false} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.2, 5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputColorSpace = THREE.SRGBColorSpace
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
