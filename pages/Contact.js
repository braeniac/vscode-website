import React from 'react'

import Socials from '../components/Socials'; 
import Email from '../components/Email'; 


function Contact() {
  return (
    <div className='bg-[#24292e] h-screen overflow-y-auto text-white mb-72 md:flex'> 
      <Socials />
      <Email />
    </div>
  )
}

export default Contact