import React from 'react'; 
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter(); 

  return (
    <div className='flex bg-[#24292e] h-screen overflow-y-auto text-white'> 
      <div className='flex-col pl-5 npm install framer-motionself-center mt-[-100px]'>
        <h1 className='text-5xl pb-3'>MANINDER SINGH</h1>
        <p className='text-3xl'>Full Stack Developer</p>
        <div className='pt-5 space-x-3 font-bold'>
          <button 
            className='bg-[#f9826c] border-2 py-1 px-2 border-[#f9826c]'
            onClick={() => router.push('/Projects')}
          >
            <p>View Work</p>
          </button>
          <button 
            className='bg-[#24292e] border-2 py-1 px-2 border-[#f9826c]'
            onClick={() => router.push('/Contact')}  
          >
            <p>Contact Me</p>
          </button>
        </div>
      </div>
    </div>
  )
}
