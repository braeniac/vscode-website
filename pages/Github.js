import React from 'react'
import Repo from '../components/Repo'

function Github() {

  return (
    <div className='bg-[#24292e] h-screen overflow-y-auto text-white '> 
      <div className='pt-8 pl-5 md:px-5'>
        <h1 className='font-bold text-xl md:text-2xl'>Stuff I've Built So Far</h1>
      </div>
      <div className='flex flex-wrap mt-5 mb-48'>
        <Repo 
          title="VSCode Portfolio"
          desc="Developer-centric portfolio based on VSCode."
          stack={["Next.js", "react", "firebase", "Tailwind CSS", "Lodash", "Framer Motion"]}
          source="https://github.com/braeniac/vscode-website"
          image="vs-code.png"
        />
        <Repo 
          title="Spotify Clone"
          desc="Developed a Spotify clone that remotely plays music once a user is logged into an existing Spotify account."
          stack={["Next.js", "Next-Auth", "React", "Recoil.js", "Tailwind CSS", "Lodash"]}
          source="https://github.com/braeniac/spotify-clone"
          image="spotify.png"
        />
        <Repo 
          title="Plagiarism Detection System"
          desc="Developed a code (limited to C, C++, and Java) plagiarism detection system using cosine similarity."
          stack={["Java", "PHP"]}
          source="https://github.com/braeniac/plagiarism-detection-system"
          image="stealing-paper.jpg"
        />
         <Repo 
          title="Connect Four"
          desc="Terminal based Connect Four with AI opponent (on seperate thread using p-threads)."
          stack={["C++"]}
          source="https://github.com/braeniac/connect4"
          image="connect-4.png"
        />
      </div>
     
    </div>
  )
}

export default Github