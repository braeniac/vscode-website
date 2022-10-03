import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Taskbar() {

  const router = useRouter(); 

  return (
    <div className='bg-[#1f2428] flex items-center justify-between'>
      <div  className='bg-[#1f2428] items-center h-10 sm:h-10 text-white text-sm border-b-[0.1px] border-[#1b1f23] flex overflow-x-auto scrollbar-hide'>
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

      <div className='hidden md:flex pr-3 md:items-centers space-x-3 px-2'>
        <button
          className='hover:bg-[#24292e] rounded-md flex items-center px-1'
        >
          <Image
            src="/git-compare.svg"
            height={18}
            width={18}
          />
        </button> 
        <button
          className='hover:bg-[#24292e] rounded-md flex items-center'
        >
          <Image
            src="/layout-split.svg"
            height={18}
            width={18}
          />
        </button> 
        <button
          className='hover:bg-[#24292e] rounded-md flex items-center'
        >
          <Image
            src="/3dots.svg"
            height={20}
            width={20}
          />
        </button> 
      </div> 
      
    </div>
  )
}

export default Taskbar