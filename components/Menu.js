import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Menu() {

  return (
    <div className='flex-col pt-2'>
      
      <Link href="/">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/react.svg"
          height={18}
          width={18}
        />
        <p>home.jsx</p>
      </button>
      </Link>
      
      <Link href="/About">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/html_icon.svg"
          height={18}
          width={18}
        />
        <p>about.html</p>
      </button>
      </Link>

      <Link href="/Contact">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/css_icon.svg"
          height={18}
          width={18}
        />
        <p>contact.css</p>
      </button>
      </Link>

      <Link href="/Projects">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/js_icon.svg"
          height={18}
          width={18}
        />
        <p>projects.js</p>
      </button>
      </Link>

      <Link href="/Videos">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/json_icon.svg"
          height={18}
          width={18}
        />
        <p>videos.json</p>
      </button>
      </Link>

      <Link href="/Github">
      <button className='flex px-3 space-x-2 items-center mb-2'>
        <Image
          src="/markdown_icon.svg"
          height={18}
          width={18}
        />
        <p>github.md</p>
      </button>
      </Link>


    </div>
  )
}

export default Menu