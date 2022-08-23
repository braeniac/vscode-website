import React from 'react'

import Socials from '../components/Socials'; 
import Form from '../components/Form'; 

function Contact() {
  return (
    <div className='bg-[#24292e] sm:h-[calc(100vh-(95px))] border-b-[0.1px] border-[#1b1f23] sm:flex'>
      <div>
        <Socials />
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Contact