import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'
import { Lamp } from './Lamp'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 1.8] }}>
      <Environment files="./img/forest_slope_1k.hdr" />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]} // rotate plane to lay flat (horizontal)
        position={[0, -0.5, 0]} // slightly below your lamp
        receiveShadow>
        <planeGeometry args={[20, 20]} /> {/* size of the floor */}
        <meshStandardMaterial color="#000" />
      </mesh>

      <Lamp position={[-0.8, -0.5, -4]} scale={0.1} />
      <Lamp position={[0.8, -0.5, -4]} scale={[-0.1, 0.1, 0.1]} />

      <Lamp position={[-0.8, -0.5, -2]} scale={0.1} />
      <Lamp position={[0.8, -0.5, -2]} scale={[-0.1, 0.1, 0.1]} />

      <Lamp position={[-0.8, -0.5, -0.5]} scale={0.1} />
      <Lamp position={[0.8, -0.5, -0.5]} scale={[-0.1, 0.1, 0.1]} />

      <Lamp position={[-0.8, -0.5, 0.75]} scale={0.1} />
      <Lamp position={[0.8, -0.5, 0.75]} scale={[-0.1, 0.1, 0.1]} />

      <ContactShadows position={[0, -0.52, 0]} color="#ffffff" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2} // lock vertical rotation to horizontal
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 15}
        maxAzimuthAngle={Math.PI / 15}
        rotateSpeed={0.01}
      />
    </Canvas>
  )
}
