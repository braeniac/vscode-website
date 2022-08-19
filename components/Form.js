import React, { useState } from 'react'

function Form() {

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(''); 
  const [message, setMessage] = useState(''); 

  return (
    <div className='ml-8 mt-8 space-y-6 text-white md:pl-20'>
        <h1 className='text-white text-2xl '>Or Fill Out This Form</h1>
        <form>
          <div className='flex space-x-6'>
            <div>
              <p className='text-white pb-2'>Name</p>
              <input 
                type="text" 
                name="name" 
                value={name}
                onChange={e => setName(e.target.value)}
                className='bg-[#1f2428] h-8'
              />
            </div>
            <div>
              <p className='text-white pb-2'>Email</p>
              <input 
                type="text" 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='bg-[#1f2428] h-8'
              />
            </div>
          </div>
          <div>
            <p className='text-white pb-2 pt-2'>Subject</p>
            <input 
              type="text" 
              name="subject" 
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='bg-[#1f2428] w-96 h-8'
            />
          </div>
          <div>
            <p className='text-white pb-2 pt-2'>Message</p>
            <textarea 
              className='bg-[#1f2428] w-96'
            />
          </div>
          <input 
            type="SUBMIT"
            className='text-[#1f2428] bg-[#f9826c] mt-3 p-2'

          />
        </form>
    </div>
  )
}

export default Form