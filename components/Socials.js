import React from 'react'

function Socials() {

    const start = '.socials {'; 
    const end = '}'; 

  return (
    <div className='ml-8 mt-8 space-y-6'>
        <h1 className='text-white text-lg'>Reach Out Via Socials</h1>
        <div className='flex space-x-5 text-xl '>
            <div className='flex-col text-gray-600 space-y-2'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
            </div>
            <div className='flex-col text-white '>
                <p>{start}</p>
                <p className='ml-5 mt-2 mb-2'>website: </p>
                <p className='ml-5 mt-2 mb-2'>email: </p>
                <p className='ml-5 mt-2 mb-2'>github: </p>
                <p className='ml-5 mt-2 mb-2'>linkedin: </p>
                <p className='ml-5 mt-2 mb-2'>youtube: </p>
                <p>{end}</p>
            </div>
          
        </div>
        
    </div>
  )
}

export default Socials