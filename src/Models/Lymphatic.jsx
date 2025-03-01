import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lymphatic(props) {
  const { nodes, materials } = useGLTF('/lymphatic_system.glb')
  return (
    <group scale={[3,3,3]} position={[0,-2.5,0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.lymphatic_system_stingrayStingrayPBS1}
        rotation={[-Math.PI, 0, -Math.PI]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.lymphatic_system_stingrayStingrayPBS2}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/lymphatic_system.glb')
