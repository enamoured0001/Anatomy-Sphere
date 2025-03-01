// src/components/Header.jsx

import React from 'react';
import Logo from '../assets/Logo.jpg'
import { ReactTyped } from "react-typed";

function Header() {
   
    
  return (
    <header className=" bg-gray-300 p-1 flex justify-between w-[98.7vw] font-black  shadow-xs  items-center">
         <div className='flex  gap-x-2 lg:pl-20   pt-2 pb-2'>
            <img  className='flex    h-10 w-10 rounded-full' src={Logo} alt="" />
            </div>
        <h6 className='font-bold lg:pl-48 pl-20 md:pl-40 text-xl'>  Anatomy  <ReactTyped
                 className='font-bold pl-3 text-xl text-blue-600'
          strings={['Prism', 'Learning', 'Sphere']}
          typeSpeed={40}
          backSpeed={50}
        
          />  </h6>
      <nav>
        <ul className="flex lg:pr-20 hidden lg:flex space-x-4">
          <li>
            <button  className="text-gray-800 hover:text-blue-700">Home</button>
          </li>
          <li>
            <button className="text-gray-800  hover:text-blue-700">About</button>
          </li>
          <li>
            <button className="text-gray-800 hover:text-blue-700">Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
