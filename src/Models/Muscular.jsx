import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Muscular(props) {
  const { nodes, materials } = useGLTF('/male_body_muscular_system_-_anatomy_study.glb')
  return (
    <group scale={[0.3,0.3,0.3]}  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/male_body_muscular_system_-_anatomy_study.glb')