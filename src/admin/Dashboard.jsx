import React from 'react'
import SideBarPage from './SideBarPage'

function Dashboard() {
  return (
    <div className='flex'>
      <SideBarPage />
      <div className="w-[100%] border">
        <div className='w-[300px] text-center'>
          Dashboard
        </div>
      </div>
    </div>
  )
}

export default Dashboard
