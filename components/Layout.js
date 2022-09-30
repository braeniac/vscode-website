import React from 'react'; 
import Topbar from './Topbar';
import Bottombar from './Bottombar'; 
import Sidebar from './Sidebar'; 
import Explorer from './Explorer';
import Taskbar from './Taskbar'; 

function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='sticky top-0'>
        <Topbar />
        <hr className="border-t-[0.1px] border-[#1b1f23]" />
      </div>
      <div className='flex flex-1 w-full'>
        <Sidebar />
        <Explorer />
        <div className='flex-col w-full'>
          <Taskbar />
          <div>
            {children}
          </div>
        </div>
      </div>
      <div className='flex sticky'>
        <hr className="border-t-[0.1px] border-[#1b1f23]" />
        <Bottombar />
      </div>
    </div>
  )
}

export default Layout; 