import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const SpinningBox = ({ position, args, color }) => {
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh} position={position}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  )
}

export default SpinningBox
