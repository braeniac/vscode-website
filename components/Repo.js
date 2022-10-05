import React, { useEffect } from 'react'; 
import { motion } from "framer-motion"; 

import Chip from '../components/Chip'; 
import Image from '../components/Image'; 

function Repo({ image, title, desc, stack, source }) {

    return (  
        <div className='bg-[#1b1f23] rounded-lg ml-5 mb-5 w-80 md:w-96 h-49 pt-5 px-2 hover:drop-shadow-lg'>
        
        <Image name={image} />
        
        <div className='px-5 space-y-2 mb-5 mt-2'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{desc}</p>
        </div>
        <div className='ml-4'>
            {
                stack.map((item) => {
                    return(
                        <div className='inline-block mx-1 mb-5'>   
                            <Chip language={item} />
                        </div>
                    )
                })
            }
        </div>
        <div className='mb-5'>
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className='border-2 px-4 py-2 border-[#f9826c] ml-5'
                onClick={() => window.open(`${source}`)}
            >
                <p className='text-sm'>Source Code</p>
            </motion.button>
        </div>
    </div>
  )
}

export default Repo