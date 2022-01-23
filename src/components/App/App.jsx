import React, { useState, useEffect, useRef } from 'react'
import './App.scss'
import { Canvas, useFrame } from '@react-three/fiber'
import SpinningBox from '../SpinningBox/SpinningBox'

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />

        <SpinningBox position={[0, 1, 0]} color='lightblue' args={[1, 1, 1]} />
      </Canvas>
    </>
  )
}

export default App
