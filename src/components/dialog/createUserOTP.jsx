import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import Link from 'next/link';
import { X } from 'lucide-react';

const GetCreateOTP = ({ isOpen, setIsOpen, handleUserLogin }) => {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
          <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
          <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
          <DialogTitle className="text-center" >Enter OTP</DialogTitle>
          <DialogDescription className="text-center" >
            A 4 digit code has been sent to you
          </DialogDescription>
          <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
            <div className=' w-full flex items-center justify-center gap-3' >
              {
                [1, 2, 3, 4].map((data) => {
                  return (
                    <div key={data} className=' size-12 rounded-lg border border-red-600' ></div>
                  )
                })
              }
            </div>
            <div onClick={() =>{setIsOpen(false); handleUserLogin(true)}} className='cursor-pointer w-full bg-red-700 text-white text-center font-semibold py-2 px-3 rounded-md' >Verify OTP</div>
          </div>
          <p>Request code again<span className=' text-red-600' > 00:59s</span></p>
          <div className=' flex items-center gap-2' >
            <div className=' w-full h-0.5 bg-gray-200' ></div>
            <p>or</p>
            <div className=' w-full h-0.5 bg-gray-200' ></div>
          </div>
          <p className=' text-center text-sm' >Edit phone number <span className=' text-red-700' >+91-9012345678</span></p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default GetCreateOTP