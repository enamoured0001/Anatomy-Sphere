import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Digestive(props) {
  const { nodes, materials } = useGLTF('/digestive_system (1).glb')
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
          material={materials.StingrayPBS5}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.StingrayPBS3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.StingrayPBS4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.StingrayPBS2}
      />
    </group>
  )
}

useGLTF.preload('/digestive_system (1).glb')



