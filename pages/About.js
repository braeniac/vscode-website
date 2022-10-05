import React, { useState, useEffect} from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

function About() {

  const [imageURL, setImageURL] = useState(""); 
  const pathReference = ref(storage, "about-img.png");

  useEffect(() => {
    getDownloadURL(pathReference).then((url) => {
      setImageURL(url); 
    })
  }, []); 

  return (
    <div className='bg-[#24292e] h-screen flex-col overflow-y-auto text-white px-10 pt-8 snap-y snap-proximity overscroll-y-contain'> 
      <h1 className='md:hidden text-center md:text-start mb-20'></h1>
      <div className='text-center md:text-start'> 
        <h1 className='font-bold text-xl md:text-2xl pb-3 -mt-16 md:m-0'>A Little Bit About Me</h1>
        <div 
          className='mb-3'
        >
          <img 
            src={imageURL}
            className='rounded-full border-2 m-auto md:m-0 w-32 h-32'
          />
        </div>
        <p className='text-sm md:text-lg mb-36'>
          I was first introduced to Java programming at a hackathon in 2015 and since then, 
          software development and problem solving has been my passion. I was surprised how 
          the toughest math problems could be solved by a few lines of code and my curiosity
          drove me to Brock University, where I majored in Computer Science. I am constantly 
          learning new programming tools (Python, SQL, React, C++, JavaScript), algorithms 
          and higher mathematics to connect the dots. I’ve been professionally coding 
          for over a year now as a Full-Stack developer. Currently,
        </p>
      </div>
    </div>
  )
}

export default About

