
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Endocrine(props) {
  const { nodes, materials } = useGLTF('/endocrine_system.glb')
  return (
    <group scale={[3,3,3]} position={[0,-2.5,0]} {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.StingrayPBS5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.StingrayPBS6}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.StingrayPBS1}
          scale={[1, 1, 0.989]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.StingrayPBS7}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.StingrayPBS3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.StingrayPBS4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.StingrayPBS2}
      />
    </group>
  )
}

useGLTF.preload('/endocrine_system.glb')
