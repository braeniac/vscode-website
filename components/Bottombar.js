import React from 'react'
import Image from 'next/image'; 

function Bottombar() {
  return (
    <div className='flex bg-[#4e2a8e] justify-between w-full'>
     
      <div className='flex h-8 text-white text-xs md:text-sm px-5'>
        <button className='flex hover:bg-zinc-700  space-x-2 h-full items-center'>
          <Image
            src="/merge.svg"
            height={16}
            width={16}
          />
          <p>master*</p>
        </button>

        <button className='flex space-x-2 h-full items-center hover:bg-zinc-700 mx-3'>
          <div className='flex space-x-1'>
            <Image
              src="/x-circle.svg"
              height={18}
              width={18}
            />
           <p>0</p>
          </div>
          
          <div className='flex space-x-1'>
            <Image
              src="/error.svg"
              height={20}
              width={20}
            />
            <p>0</p>
          </div>
        </button>
    </div>

    <div className='flex text-white pr-2 text-xs md:text-sm space-x-3 mr-2'>
      
      <button className='hidden sm:flex space-x-2 h-full items-center hover:bg-zinc-700'>
        <div className='flex space-x-1'>
          <Image
            src="/nextjs.svg"
            height={16}
            width={16}
          /> 
        </div>
        <p>Powered by Next.js</p>
      </button>
 
      <button className='flex space-x-2 h-full items-center hover:bg-zinc-700'>
        <div className='flex space-x-1'>
          <Image
            src="/double-check.svg"
            height={20}
            width={20}
          /> 
        </div>
        <p>Prettier</p>
      </button>

      <button className='flex space-x-2 h-full items-center hover:bg-zinc-700'>
        <div className='flex space-x-1'>
          <Image
            src="/bell.svg"
            height={16}
            width={16}
          /> 
        </div>
      </button>
    </div>

  </div>
  )
}

export default Bottombar