import React from 'react'; 
import { useRouter } from 'next/router'; 
import { motion } from "framer-motion"; 
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from '../components/BackgroundCircles'; 

export default function Home() {

  const router = useRouter(); 
  const [text, ] = useTypewriter({
    words: [
      "Full-Stack Developer", 
      "Guy-Who-Loves-Coffee.tsx", 
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000,
  }); 
  
  return (
    <div className='flex bg-[#24292e] h-screen overflow-hidden text-white pt-10'> 
      <div className='flex-col self-center mt-[-150px] text-justify md:text-left pl-10'>
        <BackgroundCircles />
        <h1 className='text-6xl pb-3'>Maninder Singh</h1>
        <h1>
          <span className='text-xl md:text-2xl'>{text}</span>
          <Cursor cursorColor='#f9826c' cursorStyle='_' />
        </h1>
        <div className='pt-5 space-x-4 font-bold'>
          <motion.button 
            className='bg-[#f9826c] border-2 py-1 px-2 border-[#f9826c] relative'
            onClick={() => router.push('/Projects')}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <p>View Work</p>
          </motion.button>
          <motion.button 
            className='bg-[#24292e] border-2 py-1 px-2 border-[#f9826c] relative'
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
