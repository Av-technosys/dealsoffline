import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

const CreateUserDialog = ({ isOpen, setIsOpen, handleOTPDialog }) => {
    function handleOTP(){
        setIsOpen(false);
        handleOTPDialog(true);
    }
    return (
        <Dialog open={true}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
                    <DialogTitle className="text-center" >Create Account for WalkInTown</DialogTitle>
                    <DialogDescription className="text-center" >
                        Please enter your Email id/User Id Or Phone numbers to receive the verification code.
                    </DialogDescription>
                    <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                        <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <p onClick={handleOTP} className=' w-full bg-red-700 text-white text-center font-semibold py-2 px-3 rounded-md' >Send OTP</p>
                    </div>
                    <div className=' flex items-center gap-2' >
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                        <p>or</p>
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                    </div>
                    <p>Already have an account ?<span className=' text-red-600' > Log In </span></p>
                    <p className=' text-center text-sm' >By proceeding, you agree to WalkIn Town <span className=' text-red-700' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-red-700' >Privacy Policy.</span></p>
                </DialogHeader>
                {/* <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <DialogClose>Continue</DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}

export default CreateUserDialog