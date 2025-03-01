import { OrbitControls } from '@react-three/drei'
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment,PerspectiveCamera } from '@react-three/drei'



const Scene = ({modelFunction}) => {
  
  
  return (
    <div >
       
        <div className='bg-gray-100 h-[85vh] w-[83vw]' >
       <Canvas>
       
      <pointLight position={[10, 10, 10]} />
      <Environment preset='sunset'/>
      {modelFunction()}
      <OrbitControls />
     
               </Canvas>       
       
        </div>
       </div>
  )
}

export default Scene