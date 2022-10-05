import React from 'react'
import Repo from '../components/Repo'


function Github() {

  return (
    <div className='bg-[#24292e] h-screen overflow-y-auto text-white'> 
      <div className='pt-8 px-5 md:px-10'>
        <h1 className='font-bold text-xl md:text-2xl'>Stuff I've Built So Far</h1>
      </div>
      <div className='flex flex-wrap mt-5 mb-48'>
        <Repo 
          title="VSCode Portfolio"
          desc="Developer-centric portfolio based on the VSCode"
          stack={["Next.js", "react", "firebase", "Tailwind CSS", "Framer Motion"]}
          live={true}
        />
        <Repo 
          title="Spotify Clone"
          desc="Developed a Spotify clone that remotely plays music once a user is logged into an existing Spotify account"
          stack={["Next.js", "Next Auth", "React", "Recoil.js", "Tailwind CSS", "Lodash"]}
          live={true}
        />
        <Repo 
          title="Plagiarism Detection System"
          desc="Developed a code (limited to C, C++, and Java) plagiarism detection system using cosine similarity"
          stack={["Java", "PHP", "HTML", "CSS"]}
        />
         <Repo 
          title="Connect Four"
          desc="Terminal based Connect Four with AI opponent (on seperate thread using p-threads)"
          stack={["C++"]}
        />
      </div>
     
    </div>
  )
}

export default Github