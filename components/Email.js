import React from 'react'; 
import { motion } from "framer-motion"; 

function Email() {
  return (
    <div>
        <div className='mt-8 px-5 md:px-10 md:mx-10 md:border-l-2 md:border-[#f9826c] mb-52'>
            <h1 className='font-bold text-xl md:text-2xl'>Or Fill Out This Form</h1>
            <form 
                action="https://formsubmit.co/371b408c3f526db2bc606f5e44b22a5b"
                method="POST"
                className='space-y-5 mt-5'
            >
                <div className='md:flex md:space-x-5 space-y-2 md:space-y-0'>
                    <div className='space-y-2'>
                        <p>NAME</p>
                        <input 
                            type="text"
                            className='bg-[#1f2428] h-10 w-4/5 md:w-48 focus:outline-none focus:ring focus:ring-[#f9826c]'
                            name="name"
                            required
                        />
                    </div>
                    <div className='space-y-2'>
                        <p>EMAIL</p>
                        <input 
                            type="email"
                            className='bg-[#1f2428] h-10 w-4/5 md:w-48 focus:outline-none focus:ring focus:ring-[#f9826c]'
                            name="email"
                            required
                        />
                    </div>
                </div>
                <div className='space-y-2'>
                    <p>SUBJECT</p>
                    <input 
                        type="text"
                        className='bg-[#1f2428] h-10 w-4/5 md:w-full focus:outline-none focus:ring focus:ring-[#f9826c]'
                        name="subject"
                        required
                    />
                </div>
                <div className='space-y-2'>
                    <p>MESSAGE</p>
                    <textarea 
                        type="text"
                        className='bg-[#1f2428] h-14 w-4/5 md:w-full focus:outline-none focus:ring focus:ring-[#f9826c]'
                        name="message"
                        required
                    />
                </div>
                <motion.button
                    className='py-1 px-3 bg-[#f9826c]'
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    type='submit'
                >
                    <p className='text-[#24292e] font-bold'>SUBMIT</p>
                </motion.button>
            </form>
        </div>
     
    </div>
  )
}

export default Email