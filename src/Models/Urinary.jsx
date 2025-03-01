import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Urinary(props) {
  const { nodes, materials } = useGLTF('/urinary_system.glb')
  return (
    <group scale={[3,3,3]} position={[0,-2.5,0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.urinarySystem_stingrayStingrayPBS1}
        position={[0, 0, 0.005]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.StingrayPBS5}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.StingrayPBS3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.StingrayPBS4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.StingrayPBS2}
      />
    </group>
  )
}

useGLTF.preload('/urinary_system.glb')