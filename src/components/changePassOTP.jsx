import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Link from 'next/link';

const GetPsswordOTP = ({ isOpen, setIsOpen, handleOTPDialog }) => {
  function handleChangePass() {
    setIsOpen(false);
    handleOTPDialog(true);
  }
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
          <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
          <DialogTitle className="text-center" >Enter OTP</DialogTitle>
          <DialogDescription className="text-center" >
            A 4 digit code has been sent to you
          </DialogDescription>
          <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
            <div className=' w-full flex items-center justify-center gap-3' >
              {
                [1,2,3,4].map((data)=>{
                  return(
                    <div key={data} className=' size-12 rounded-lg border border-red-600' ></div>
                  )
                })
              }
            </div>
            {/* <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
            <input type="text" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
            <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' /> */}
            <p onClick={handleChangePass} className='cursor-pointer w-full bg-red-700 text-white text-center font-semibold py-2 px-3 rounded-md' >Verify OTP</p>
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

export default GetPsswordOTP