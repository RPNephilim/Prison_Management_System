import React from 'react';
import impel_down_logo from '../assets/impel_down_logo.jpg';
import marine_logo from '../assets/marine_logo.png';
import world_govt from '../assets/world-govt-logo.png';

const Servers = () => {
  return (
    <div className='flex justify-evenly items-center bg-teal-800 text-red-600 h-screen'>
      <div className='w-1/4 cursor-pointer flex justify-center'>
        <img src={world_govt} alt='world-govt' className='hover:size-2/3'/>
      </div>
      <div className='w-1/4 cursor-pointer'>
        <a href='/login' className=' flex justify-center '>
          <img src={impel_down_logo} alt='impel_down'  className='size-10/12 hover:size-full'/>
        </a>
      </div>
      <div className='w-1/4 cursor-pointer flex justify-center'>
        <img src={marine_logo} alt='marine' className='size-10/12 hover:size-full'/>
      </div>
        
        
        
    </div>
  )
}

export default Servers