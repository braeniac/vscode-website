import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Taskbar() {

  const router = useRouter(); 

  return (
    <div className='bg-[#1f2428] items-center h-10 sm:h-10 text-white text-sm border-b-[0.1px] border-[#1b1f23] flex overflow-x-auto scrollbar-hide'>
      
      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/')}
      > 
        <Image
          src="/react.svg"
          height={16}
          width={16}
        />
        <p>home.jsx</p>
      </button>


      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/About')}
      > 
        <Image
          src="/html_icon.svg"
          height={16}
          width={16}
        />
        <p>about.html</p>
      </button>

      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/Contact')}
      > 
        <Image
          src="/css_icon.svg"
          height={16}
          width={16}
        />
        <p>contact.css</p>
      </button>

      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/Projects')}
      > 
        <Image
          src="/js_icon.svg"
          height={16}
          width={16}
        />
        <p>projects.js</p>
      </button>

      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/Videos')}
      > 
        <Image
          src="/json_icon.svg"
          height={18}
          width={18}
        />
        <p>videos.json</p>
      </button>

      <button 
        className='flex space-x-2 items-center hover:bg-[#24292e] h-full px-2 focus:border-t-2 focus:border-[#f9826c] focus:bg-[#24292e]' 
        onClick={() => router.push('/Github')}
      > 
        <Image
          src="/markdown_icon.svg"
          height={18}
          width={18}
        />
        <p>github.md</p>
      </button>
      
    </div>
  )
}

export default Taskbar