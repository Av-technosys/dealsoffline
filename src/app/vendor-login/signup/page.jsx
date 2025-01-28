"use client"
import { X } from 'lucide-react';
import React from 'react'

const Page = () => {
  return (
    <div className=' flex items-center justify-center relative w-full min-h-screen h-full' >
        <img src="/vendor-login-bg.png" className="absolute top-0 -z-10 h-full w-full left-0 object-cover" alt="login bg" />
        <SignUp />  
    </div>
  )
}

export default Page;

function SignUp(){
    return(
        <div className=' max-w-xl z-10 mx-auto w-full p-3 rounded-xl bg-white flex flex-col gap-4' >
            <div className=' border border-red-700 py-1.5 px-3 rounded-md w-fit flex items-center gap-2 text-red-700 self-end' >
                <p>Close</p>
                <X size={18} />
            </div>
        </div>
    )
}