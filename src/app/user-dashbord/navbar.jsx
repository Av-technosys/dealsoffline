import { Bell, ChartNoAxesCombined, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const UserNavBar = ({ path, setIsUserNotification, setIsUserProfile, setIsUserSetting }) => {
  function handleSwitch(toOpen) {
    setIsUserNotification(false)
    setIsUserProfile(false)
    setIsUserSetting(false)
    toOpen(true)

  }
  return (
    <div className=' border-b-4 w-full'>
      <div className=' flex flex-col md:flex-row justify-between max-w-7xl w-full mx-auto md:items-center gap-6 py-3 px-4' >
        <div className=' flex items-center justify-start  gap-2' >
          <p className=' text-xl md:text-4xl font-semibold ' >User's Profile Page</p>
        </div>
        <div className=' flex items-center flex-col md:flex-row gap-2' >
          <div className='w-full  flex items-center gap-2' >
            <div onClick={() => { handleSwitch(setIsUserSetting) }} className={`w-full cursor-pointer justify-center flex items-center gap-2 border border-red-700 px-3 py-1.5 text-red-700 rounded-md ${path == "setting" && "bg-red-700 text-white"}`} >
              <p className=' font-medium' >Setting</p>
              <Settings size={20} />
            </div>
          </div>
          <div className=' w-full flex items-center gap-2'>
            <div onClick={() => { handleSwitch(setIsUserProfile) }} className={`w-full cursor-pointer justify-center flex items-center gap-2 border border-red-700 px-3 py-1.5 text-red-700 rounded-md ${path == "profile" && "bg-red-700 text-white"}`} >
              <p className=' font-medium' >Profile</p>
              <User size={20} />
            </div>
            <div onClick={() => { handleSwitch(setIsUserNotification) }} className=' mx-3 relative' >
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