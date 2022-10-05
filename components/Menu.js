import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Menu() {

  const router = useRouter(); 

  return (
    <div className='flex-col pt-2 space-y-2'>
      <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/')}
      >
        <Image
          src="/react.svg"
          height={18}
          width={18}
        />
        <p>home.jsx</p>
      </button>
      
      <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/About')}
      >  
        <Image
          src="/html_icon.svg"
          height={18}
          width={18}
        />
        <p>about.html</p>
      </button>

      <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/Contact')}  
      >
        <Image
          src="/css_icon.svg"
          height={18}
          width={18}
        />
        <p>contact.css</p>
      </button>

      {/* <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/Projects')}  
      >
        <Image
          src="/js_icon.svg"
          height={18}
          width={18}
        />
        <p>projects.js</p>
      </button> */}

      <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/Github')}  
      >
        <Image
          src="/markdown_icon.svg"
          height={18}
          width={18}
        />
        <p>github.md</p>
      </button>

      <button 
        className='flex px-3 space-x-2 items-center hover:bg-[#24292e] p-1 w-full'
        onClick={() => router.push('/Videos')}  
      >
        <Image
          src="/json_icon.svg"
          height={18}
          width={18}
        />
        <p>videos.json</p>
      </button>

    </div>
  )
}

export default Menu; 