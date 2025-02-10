import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Link from 'next/link';

const ChangePassDialog = ({ isOpen, setIsOpen, handleOTPDialog }) => {
    function handleOTP() {
        setIsOpen(false);
        handleOTPDialog(true);
    }
    return (
        <Dialog open={isOpen}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center sm:text-left"} >
                    <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
                    <DialogTitle className="text-center" >Reset Password</DialogTitle>
                    <DialogDescription className="text-center" >
                        Create a new password.
                    </DialogDescription>
                    <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                        <input type="text" placeholder='New Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Confirm Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        {/* <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' /> */}
                        <Link href={"/store"} className='cursor-pointer w-full bg-red-700 text-white text-center font-semibold py-2 px-3 rounded-md' >Save</Link>
                    </div>
                    {/* <div className=' flex items-center gap-2' >
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                        <p>or</p>
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                    </div>
                    <p>Already have an account ?<span className=' text-red-600' > Log In </span></p>
                    <p className=' text-center text-sm' >By proceeding, you agree to WalkIn Town <span className=' text-red-700' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-red-700' >Privacy Policy.</span></p> */}
                </DialogHeader>
                {/* <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <DialogClose>Continue</DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}

export default ChangePassDialog