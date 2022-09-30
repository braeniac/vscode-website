import React from 'react'
import Image from 'next/image'

function Topbar() {
  return (
    <div className='flex bg-[#24292e] w-full h-10 items-center justify-between text-white text-sm'>

      <div className='flex pl-3'>
        <Image
          src="/vscode_icon.svg"
          height={15}
          width={15}
        />
        <div className='space-x-3 pl-3 hidden sm:flex'>
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
        <p>Maninder Singh - Visual Studio Code </p>
      </div>

      <div className='flex pr-3 space-x-1'>
        <div className='bg-[#f1fa8c] w-3 h-3 rounded-full'></div>
        <div className='bg-[#50fa7b] w-3 h-3 rounded-full'></div>
        <div className='bg-[#ff5555] w-3 h-3 rounded-full'></div>
      </div>

    </div>
  )
}

export default Topbar; 