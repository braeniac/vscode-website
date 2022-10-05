import React from 'react'; 
import { useRouter } from 'next/router'; 
import { motion } from "framer-motion"; 

function Socials() {

  const opening = "{"; 
  const closing = "}";
  const semicolon = ";"; 
  const router = useRouter(); 

  return (
    <div>
        <div className='pt-8 px-5 md:px-10'>
            <h1 className='font-bold text-xl md:text-2xl'>Reach Out Via Socials</h1>
            <div className='flex flex-row'>
              <div className='space-y-5 py-5 text-gray-600 md:text-lg'>
                <p>1 </p>
                <p>2 </p>
                <p>3 </p>
                <p>4 </p>
                <p>5 </p>
                <p>6 </p>
                <p>7 </p>
              </div>
              <div className='flex-col py-5 pl-5 md:text-lg'>
                <div className='flex space-x-2'>
                  <p className='text-[#f9826c]'>.socials</p>
                  <p>{opening}</p>
                </div>
                <div className='flex-col space-y-5 py-5 pl-8'>
                  <p>website: </p>
                  <p>email: </p>
                  <p>linkedin: </p>
                  <p>github: </p>
                  <p>youtube: </p>
                </div>
                <p className='md:text-lg'>{closing}</p>
              </div>
              <div className='flex flex-col space-y-5 py-16 pl-8 md:text-lg'>
                <button
                  className='text-left pt-1 flex'
                  onClick={() => router.push('/') }
                >
                  <p className='text-[#f9826c]'>manindersingh.live</p>
                  <p>{semicolon}</p>
                </button>
                <a
                  className='text-left flex'
                  href='mailto:maninder.singh.live@gmail.com?subject=Hello!'
                >
                  <p className='text-[#f9826c]'>maninder.singh.live</p>
                  <p>{semicolon}</p>
                </a>
                <a
                  className='text-left flex'
                  href='https://www.linkedin.com/in/maninder-singh0518/'
                >
                  <p className='text-[#f9826c]'>maninder-singh0518</p>
                  <p>{semicolon}</p>
                </a>
                <a
                  className='text-left flex'
                  href='https://github.com/Braeniac'
                >
                  <p className='text-[#f9826c]'>Braeniac</p>
                  <p>{semicolon}</p>
                </a>
                <a
                  className='text-left flex'
                  href='https://www.youtube.com/channel/UC8z40rvfTGTd0n_cFfXGugg'
                >
                  <p className='text-[#f9826c]'>Braeniac</p>
                  <p>{semicolon}</p>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Socials; 
