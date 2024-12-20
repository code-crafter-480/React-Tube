import React from 'react'
import Sidebar from './Sidebar';

import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
      <div className="flex mt-20 h-screen  ">
          <Sidebar />
          {/* Video container that adjusts width dynamically */}
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
      </div>     
)
}

export default Body
