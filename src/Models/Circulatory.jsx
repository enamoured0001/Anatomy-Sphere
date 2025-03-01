import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Circulatory(props) {
  const { nodes, materials } = useGLTF('/circulatory_system.glb')
  return (
    <group scale={[3,3,3]} position={[0,-2.5,0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.StingrayPBS1}
      />
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
        material={materials.StingrayPBS3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.StingrayPBS4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.StingrayPBS2}
      />
    </group>
  )
}

useGLTF.preload('/circulatory_system.glb')