import React from 'react'; 
import { motion } from "framer-motion"; 

function Repo({ imageURL, title, desc, stack, live, link }) {
  return (
    <div className='bg-[#1b1f23] rounded-lg ml-5 mb-5 w-96 h-49 pt-5 px-2'>
        {/* image */}
        <div className='px-5 space-y-2 mb-5'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{desc}</p>
        </div>

        {/* chips */}

        <div className='mb-5'>
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className='border-2 px-2 py-2 border-[#f9826c] ml-5'
            >
                <p className='text-sm'>Source Code</p>
            </motion.button>
            {   
                live?  
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        className='border-2 px-4 py-2 border-[#f9826c] ml-5'
                    >
                        <p className='text-sm'>Live Demo</p>
                    </motion.button> 
                : null
            }
        </div>
    </div>
  )
}

export default Repo