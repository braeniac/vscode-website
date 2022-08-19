import React from 'react'

function Socials() {

    const start = '.socials {'; 
    const end = '}'; 

  return (
    <div className='pl-8 pt-8 space-y-6'>
        <h1 className='text-white text-2xl'>Reach Out Via Socials</h1>
        <div className='flex space-x-5 text-2xl '>
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
                <p className='text-[#f9826c]'>{start}</p>
                <p className='ml-5 mt-3 mb-3'>website: </p>
                <p className='ml-5 mt-3 mb-3'>email: </p>
                <p className='ml-5 mt-3 mb-3'>github: </p>
                <p className='ml-5 mt-3 mb-3'>linkedin: </p>
                <p className='ml-5 mt-3 mb-3'>youtube: </p>
                <p className='text-[#f9826c]'>{end}</p>
            </div>

            <div className='flex-col text-[#f9826c]'>
                <div className='mt-11 space-y-3'>
                    <div>
                        <button>manindersinghlive</button>
                    </div>
                    <div>
                        <button>maninder.singh.live</button>
                    </div>
                    <div>
                        <button>braeniac</button>
                    </div>
                    <div>
                        <button>maninder-singh</button>
                    </div>
                    <div>
                        <button>Braeniac</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials