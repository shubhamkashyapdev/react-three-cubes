import React, { useState, useEffect, useRef } from 'react'
import './App.scss'
import { Canvas, useFrame } from '@react-three/fiber'
import SpinningBox from '../SpinningBox/SpinningBox'

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          intensity={1.5}
          position={[0, 10, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0 - 20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        {/* floor is needed to cast the shadow */}
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' color='yellow' />
          </mesh>
        </group>

        <SpinningBox position={[0, 1, 0]} color='lightblue' args={[3, 2, 1]} />
        <SpinningBox position={[-3, 1, -5]} color='pink' />
        <SpinningBox position={[5, 1, -1]} color='pink' />
      </Canvas>
    </>
  )
}

export default App
