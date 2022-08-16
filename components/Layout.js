import React from 'react'; 
import Topbar from './Topbar';
import Bottombar from './Bottombar'; 
import Sidebar from './Sidebar'; 
import Explorer from './Explorer';
import Taskbar from './Taskbar'; 

function Layout({ children }) {
  return (
    <>
    <Topbar />
    <hr className="border-t-[0.1px] border-[#1b1f23]" />
    <div className='flex h-[calc(100vh-56px)]'>
      <Sidebar />
      <Explorer />
      <div className='w-full'>
        <Taskbar />
        <main>
          { children }
        </main>
      </div>
    </div>
    <hr className="border-t-[0.1px] border-[#1b1f23]" />
    <Bottombar />
    </>
  )
}

export default Layout; 