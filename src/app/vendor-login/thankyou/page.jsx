"use client"
import InputFild from '@/components/inputFild';
import { Check, MessageCircleMore, SendHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Page = () => {
    return (
        <div className='px-4 flex items-center justify-center relative w-full min-h-screen h-full' >
            <img src="/vendor-login-bg.png" className="absolute top-0 -z-10 h-full w-full left-0 object-cover" alt="login bg" />
            <SignUp />
        </div>
    )
}

export default Page;

function SignUp() {
    return (
        <div className=' max-w-xl z-10 mx-auto w-full p-3 rounded-xl bg-white flex items-center flex-col gap-4' >
            <Link href={"/vendor-dashbord"} className=' border border-primary-red py-1.5 px-3 rounded-md w-fit flex items-center gap-2 text-primary-red self-end' >
                <p>Close</p>
                <X size={18} />
            </Link>
            <div className=' w-full max-w-xl mx-auto flex flex-col gap-4' >
                <img src='/lootie.gif' className=' size-20 mx-auto' />
                <div className=' w-full flex flex-col gap-2' >
                    <div className=' justify-center flex items-center gap-2 text-2xl font-semibold text-primary-red text-center'>
                        <p>Congratulations</p>
                        <img src='/lootie-icon.svg' className=' size-6' />
                    </div>
                    {/* <p className=' text-gray-600  text-center' >A 4 digit code has been sent to you</p> */}
                </div>
                {/* <div className=' flex items-center justify-center gap-4' >
                    <div className=' size-10 border border-primary-red rounded-md' ></div>
                    <div className=' size-10 border border-primary-red rounded-md' ></div>
                    <div className=' size-10 border border-primary-red rounded-md' ></div>
                    <div className=' size-10 border border-primary-red rounded-md' ></div>
                </div>
                <div className=' w-full py-2 px-4 flex items-center justify-center gap-3 bg-primary-red text-white rounded-md' >
                    <p>Verify OTP</p>
                    <Check size={18} />
                </div> */}
                {/* <p className=' text-sm text-center text-gray-600'>Request code again<span className=' text-primary-red' >00:59s </span></p> */}
                <div className=' w-3/5 mx-auto flex gap-4 items-center' >
                    <div className=' h-0.5 w-full bg-primary-red rounded-xl' ></div>
                    <p className=' text-gray-600 whitespace-nowrap shrink-0' >You have Successfully sign up</p>
                    <div className=' h-0.5 w-full bg-primary-red rounded-xl' ></div>
                </div>
                <p className=' text-2xl font-semibold text-center text-primary-red'>Set Up Your Profile</p>
                <div className=' h-10'></div>
            </div>
        </div>
    )
}