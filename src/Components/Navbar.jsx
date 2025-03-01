import React, { useState } from 'react';
import { Watch } from '../Models/Watch';
import Scene from '../scene.jsx';
import { Muscular } from '../Models/Muscular';
import { Circulatory } from '../Models/Circulatory';
import { Endocrine } from '../Models/Endocrine';
import { Digestive } from '../Models/Digestive';
import { Character } from '../Models/Character';

import { Urinary } from '../Models/Urinary';
import { Lymphatic } from '../Models/Lymphatic';
import { Skeletal } from '../Models/Skeletal';




function SceneRenderer({ modelFunction }) {
  return (
    <>
     {modelFunction()}
    </>
  );
}


const Navbar = () => {
  const [currentModel, setCurrentModel] = useState(() => Character); // Initialize with Model1

  const handleModelChange = (model) => {
    setCurrentModel(() => model);
  };

  return (
    <div className='flex'>

          
        <div className='text-white bg-gray-800  opacity-100 w-50 h-fit  flex flex-col'>
        <a onClick={() => handleModelChange(Character)} className='p-5 bold  border-2 border-solid border-neutral-900 '>Human Body</a>
            <a onClick={() => handleModelChange(Circulatory)} className='p-5 border-2 border-solid border-black bold'>Circulatory system</a>
            <a onClick={() => handleModelChange(Skeletal)} className='p-5  border-2 border-solid border-black bold' >Skeletal system</a>
            <a onClick={() => handleModelChange(Digestive)} className='p-5  border-2 border-solid border-black bold '>Digestive system</a>
            <a onClick={() => handleModelChange(Endocrine)}  className='p-5  border-2 border-solid border-black bold '>Endocrine system</a>
            <a onClick={() => handleModelChange(Muscular)} className='p-5  border-2 border-solid border-black bold '>Muscular system</a>
            <a onClick={() => handleModelChange(Urinary)} className='p-4 pl-5 border-2 border-solid border-black  bold '>Urinary System</a>
            <a onClick={() => handleModelChange(Lymphatic)} className='p-5 border-2 border-solid border-black  bold '>Lymphatic System</a>
            </div>
            <div className="h-[85vh]  w-[80vw]">
            <Scene modelFunction={currentModel} />
       
      </div>
      
       
    </div>
  )
}

export default Navbar
