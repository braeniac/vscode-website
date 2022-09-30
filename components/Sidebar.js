import React, { useState } from 'react';
import Image from 'next/image';

function Sidebar() {
  return (
    <div className='bg-[#24292e] w-20 border-r-[0.1px] border-[#1b1f23] hidden sm:flex justify-between flex-col'>
      <div className='space-y-5 pt-3 text-center'>
        <div>
          <Image
            src="/document.svg"
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src="/github.svg"
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src="/code.svg"
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src="/mail.svg"
            height={30}
            width={30}
          />
        </div>

      </div>

      <div className='space-y-5 text-center pb-2'>
        <div>
          <Image
            src="/profile.svg"
            height={30}
            width={30}
          />
        </div>
        <div>
          <Image
            src="/cog.svg"
            height={30}
            width={30}
          />
        </div>     
      </div>
    </div>
  )
}

export default Sidebar