import React from 'react'; 
import { useRouter } from 'next/router'; 
import { motion } from "framer-motion"; 

export default function Home() {

  const router = useRouter(); 

  return (
    <div className='flex bg-[#24292e] h-screen overflow-y-auto text-white'> 
      <div className='flex-col  self-center mt-[-150px] text-justify md:text-left pl-10'>
        <h1 className='text-6xl pb-3'>Maninder Singh</h1>
        <p className='text-2xl md:text-3xl'>Full Stack Developer</p>
        <div className='pt-5 space-x-4 font-bold'>
          <motion.button 
            className='bg-[#f9826c] border-2 py-1 px-2 border-[#f9826c]'
            onClick={() => router.push('/Projects')}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <p>View Work</p>
          </motion.button>
          <motion.button 
            className='bg-[#24292e] border-2 py-1 px-2 border-[#f9826c]'
            onClick={() => router.push('/Contact')}  
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <p>Contact Me</p>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
