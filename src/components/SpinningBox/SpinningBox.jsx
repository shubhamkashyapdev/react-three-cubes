import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

const SpinningBox = ({ position, args, color, speed }) => {
  const [expanded, setExpand] = useState(false)
  const props = useSpring({
    scale: expanded ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <a.mesh
      onClick={() => setExpand(!expanded)}
      scale={props.scale}
      castShadow
      ref={mesh}
      position={position}
    >
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  )
}

export default SpinningBox
