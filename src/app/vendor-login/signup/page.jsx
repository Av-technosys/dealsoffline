"use client"
import InputFild from '@/components/inputFild';
import { SendHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Page = () => {
    return (
        <div className=' px-4 flex items-center justify-center relative w-full min-h-screen h-full' >
            <img src="/vendor-login-bg.png" className="absolute top-0 -z-10 h-full w-full left-0 object-cover" alt="login bg" />
            <SignUp />
        </div>
    )
}

export default Page;

function SignUp() {
    return (
        <div className=' max-w-xl z-10 mx-auto w-full p-3 rounded-xl bg-white flex items-center flex-col gap-4' >
            <Link href={"/"} className=' border border-red-700 py-1.5 px-3 rounded-md w-fit flex items-center gap-2 text-red-700 self-end' >
                <p>Close</p>
                <X size={18} />
            </Link>
            <div className=' w-full max-w-md mx-auto flex flex-col gap-4' >
                <div className=' w-full flex flex-col gap-2' >
                    <p className=' text-3xl font-semibold ring-offset-red-700 text-center'>Sign Up to <span className=' text-red-700' >WalkinTown</span></p>
                    <p className=' text-gray-600 text-xl text-center' >Let’s verify your Phone Number</p>
                </div>
                <div className=' flex items-center gap-4' >
                    <div className=' flex gap-1 items-center' >
                        <input name='radio' type='radio' defaultChecked className=' w-fit' />
                        <p className=' text-red-700' >Email / User IDlver</p>
                    </div>
                    <div className=' flex gap-1 items-center' >
                        <input name='radio' type='radio' className=' w-fit' />
                        <p className=' ' >Phone Number</p>
                    </div>
                </div>
                <div className=' w-full'>
                    <InputFild label={"Phone Number"} inputName={"91-9012345678"} />
                    <InputFild label={"Password"} inputName={"********"} notNsc />
                </div>
                <Link href={"/vendor-login/otp"} className=' w-full py-2 px-4 flex items-center justify-center gap-3 bg-red-700 text-white rounded-md' >
                    <p>Send OTP</p>
                    <SendHorizontal size={18} />
                </Link>
                <div className=' w-3/5 mx-auto flex gap-4 items-center' >
                    <div className=' h-0.5 w-full bg-gray-300 rounded-xl' ></div>
                    <p>or</p>
                    <div className=' h-0.5 w-full bg-gray-300 rounded-xl' ></div>
                </div>
                <p className=' text-sm text-center text-gray-600'>Already have an account ?<span className=' text-red-700' > Sign In </span></p>
                <p className=' text-sm text-center text-gray-600'>By proceeding, you agree to WalkIn Town <span className=' text-red-700 underline' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-red-700 underline' >Privacy Policy.</span></p>
            </div>
        </div>
    )
}