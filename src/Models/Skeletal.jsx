import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Skeletal(props) {
  const { nodes, materials } = useGLTF('/skeletal_system.glb')
  return (
    <group scale={[3,3,3]} position={[0,-2.5,0]} {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.StingrayPBS1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.lambert3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.StingrayPBS2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.textShader1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/skeletal_system.glb')