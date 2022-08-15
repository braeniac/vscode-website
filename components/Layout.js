import React from 'react'; 

import Topbar from './Topbar';
import Bottombar from './Bottombar'; 


function Layout({ children }) {
  return (
    <>

    <Topbar />
    { children }
    <Bottombar />

   

    
    </>
  )
}

export default Layout; 