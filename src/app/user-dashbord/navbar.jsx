import { Bell, ChartNoAxesCombined, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const UserNavBar = () => {
  return (
    <div className=' border-b-4 w-full'>
      <div className=' flex flex-col md:flex-row justify-between max-w-7xl w-full mx-auto md:items-center gap-6 py-3 px-4' >
        <div className=' flex items-center justify-start  gap-2' >
          <p className=' text-xl md:text-4xl font-semibold ' >Users's Profile Page</p>
        </div>
        <div className=' flex items-center flex-col md:flex-row gap-2' >
          <div className='w-full  flex items-center gap-2' >
            <div className=' w-full justify-center flex items-center gap-2 border border-red-700 px-3 py-1.5 text-red-700 rounded-md' >
              <p className=' font-medium' >Setting</p>
              <Settings size={20} color='#b91c1c' />
            </div>
          </div>
          <div className=' w-full flex items-center gap-2'>
            <div className=' w-full justify-center flex items-center gap-2 border bg-red-700 px-3 py-1.5 text-white rounded-md' >
              <p className=' font-medium' >Profile</p>
              <User size={20} color='white' />
            </div>
            <div className=' mx-3 relative' >
              <Bell size={20} color='#4b5563' />
              <p className=' size-5 flex items-center justify-center bg-red-700 rounded-full text-white absolute -top-3 -right-2 text-xs font-semibold  ' >4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavBar