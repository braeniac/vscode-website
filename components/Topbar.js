import React from 'react'
import Image from 'next/image'

function Topbar() {
  return (
    <div className='flex bg-[#24292e] h-8 text-white text-sm justify-between content-center items-center'>

      <div className='flex flex-row ml-3'>
        <Image
          src="/vscode_icon.svg"
          height={15}
          width={15}
        />
        
        <div className='flex-row space-x-3 pl-3 hidden md:flex'>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
        
      </div>

      <div>
        <p>Maninder Singh - Visual Studio Code</p>
      </div>

      <div className='flex flex-row space-x-2 pr-3'>
        <div className='bg-[#f1fa8c] w-3 h-3 rounded-full'></div>
        <div className='bg-[#50fa7b] w-3 h-3 rounded-full'></div>
        <div className='bg-[#ff5555] w-3 h-3 rounded-full'></div>
      </div>

    </div>
  )
}

export default Topbar; 