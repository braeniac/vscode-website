import React from 'react'
import { motion } from 'framer-motion'; 

function BackgroundCircles() {
  return (
    <motion.div 
      className='hidden md:relative md:flex justify-center items-center ml-5'
      intial={{
        opacity:0
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "10%"],
      }}
      transition={{
        duration:2.5
      }}
    >
      <div className='absolute border border-[#333] rounded-full h-[200px] w-[200px] animate-ping mt-36' />
      <div className='absolute border border-[#333] rounded-full h-[300px] w-[300px] animate-ping mt-36' />
      <div className='absolute border border-[#333] rounded-full h-[500px] w-[500px] animate-ping mt-36' />
      <div className='absolute border border-[#f9826c] rounded-full h-[650px] w-[650px] animate-pulse mt-36'/>
      <div className='absolute border-8 border-[#f9826c] rounded-full h-[800px] w-[800px] animate-ping mt-36' />
    </motion.div>
  )
}

export default BackgroundCircles