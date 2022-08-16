import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'

import Menu from './Menu'; 

function Explorer() {

  const [toggle, setToggle] = useState(true); 
  const [rotation, setRotation] = useState(''); 

  return (
    <div className='bg-[#1f2428] w-56 text-white text-sm hidden md:inline border-r-[0.1px] border-[#1b1f23]'>

      <div className='pl-2 pt-2 mt-4'>
        <p>EXPLORER</p>
      </div>

      <button 
        className='mt-5 flex pl-2 items-center space-x-1'
        onClick={() => {
          !toggle ? setToggle(true) : setToggle(false)
          !toggle ? setRotation('rotate-0') : setRotation('rotate-[-90deg]')  
        }}
      >
        <Image 
          src="/arrow_down.svg"
          height={10}
          width={10}
          className={rotation}
        />
        <p>PORTFOLIO</p>
      </button>

      { 
        toggle ? 
        <div>
          <Menu />
        </div> : null
      } 

    </div>
  )
}

export default Explorer