import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog';
import Link from 'next/link';
import { Save, SendHorizontal, X } from 'lucide-react';

const PartnerCreateAccount = ({ isOpen, setIsOpen, handleOTPDialog, setUserLogin }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
                <DialogHeader className="hidden">
                </DialogHeader>
                {/* <DialogTitle className="hidden"></DialogTitle> */}
                <div className=' w-full h-full grid md:grid-cols-2 ' >
                    <img className=' w-full hidden lg:block' src="./login-page-bg.png" alt="" />
                    <div className=' p-4 w-full h-fit my-auto flex flex-col items-center justify-center gap-3' >
                        <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                        <img src="./user-login.svg" className=' size-32 mx-auto' alt="" />
                        <DialogTitle className="text-center text-3xl flex items-center gap-2 font-semibold"  >
                            <p>Create Account for WalkInTown</p>
                            <img src='./shop.svg' className=' size-8' />
                        </DialogTitle>
                        <DialogDescription className="text-center" >
                            Please enter your Email id/User Id Or Phone numbers to receive the verification code.
                        </DialogDescription>
                        <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                            <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                            <input type="password" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                            <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                            <div onClick={() => { setIsOpen(false); handleOTPDialog(true) }} className='cursor-pointer w-full bg-red-700 text-white text-center font-semibold flex items-center gap-2 justify-center py-2 px-3 rounded-md' >
                                <p>Send OTP</p>
                                <SendHorizontal size={18} />
                            </div>
                        </div>
                        <div className=' flex items-center gap-2' >
                            <div className=' w-full h-0.5 bg-gray-200' ></div>
                            <p>or</p>
                            <div className=' w-full h-0.5 bg-gray-200' ></div>
                        </div>
                        <p>Already have an account ?<span onClick={() => setIsOpen(false)} className=' cursor-pointer text-red-600' > Log In </span></p>
                        <p className=' text-center text-sm' >By proceeding, you agree to WalkIn Town <span className=' text-red-700' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-red-700' >Privacy Policy.</span></p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PartnerCreateAccount;
