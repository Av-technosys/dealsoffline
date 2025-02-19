import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import UserNavBar from '@/app/user-dashbord/navbar';
import { CameraIcon, Check } from 'lucide-react';

const UserProfileDialog = ({ isOpen, setIsUserNotification, setIsUserProfile, setIsUserSetting }) => {
    const [userImage, setUserImage] = React.useState(null)
    function handleImageUpload(e) {
        setUserImage(e.target.files[0])
    }
    return (
        <Dialog open={isOpen}>
            <DialogContent className={"max-w-5xl w-full max-h-[70vh] overflow-y-auto"} >
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <DialogTitle className="text-center" > </DialogTitle>
                    <div>
                        <UserNavBar setIsUserNotification={setIsUserNotification} setIsUserProfile={setIsUserProfile} setIsUserSetting={setIsUserSetting} path={"profile"} />
                        <div className=' max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >

                            <div className=' flex flex-col h-full items-center gap-20 md:flex-row ' >
                                <div className="  h-full flex md:justify-end md:items-end" >
                                    <div className='max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
                                        {
                                            userImage ? <img src={URL.createObjectURL(userImage)} className=" h-full rounded-md w-full object-cover" alt="" /> : <p className=' p-4' >Upload your image here</p>
                                        }
                                        <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-red-700 p-1 flex items-center justify-center rounded-full" >
                                            <CameraIcon className=' text-white' size={36} />
                                        </div>
                                        <input onChange={handleImageUpload} type='file' accept='image/*' className=' absolute opacity-0 w-full h-full inset-0' />
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-12" >
                                    <div className=' flex flex-col gap-4' >
                                        <p className=' text-3xl md:text-4xl font-medium' >User's Details</p>
                                        <p className=' text-gray-600' >Fill the Details to get Fair Deals </p>
                                    </div>
                                    <div className=' flex flex-col gap-2 w-full' >
                                        <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-2' >
                                            <InputFild label={"Name"} inputName={"Naveen Sharma"} />
                                            <InputFildNumber label={"Phone Number"} inputName={"91-9012345678"} />
                                            <InputFild label={"Email ID/ User ID"} inputName={"naveensharma@gmail.com"} />
                                        </div>

                                    </div>
                                    <div>
                                        <p>Select Gender *</p>
                                        <div className=' flex w-full gap-4 items-center'>
                                            <input type='radio' name='gender' className=' size-4' ></input>
                                            <p>Male</p>
                                            <input type='radio' name='gender' className=' size-4' ></input>
                                            <p>Female</p>
                                            <input type='radio' name='gender' className=' size-4' ></input>
                                            <p>Female</p>

                                        </div>
                                    </div>
                                    <div>
                                        <p>Select Age Group *</p>
                                        <div className=' flex flex-col md:flex-row w-full gap-4 md:items-center'>
                                            <div className=' flex gap-2 items-center' >
                                                <input type='radio' name='age' className=' size-4' ></input>
                                                <p>20-30 yrs</p>
                                            </div>
                                            <div className=' flex gap-2 items-center' >
                                                <input type='radio' name='age' className=' size-4' ></input>
                                                <p>30-40 yrs</p>
                                            </div>
                                            <div className=' flex gap-2 items-center' >
                                                <input type='radio' name='age' className=' size-4' ></input>
                                                <p>40-50 yrs</p>
                                            </div>
                                            <div className=' flex gap-2 items-center' >
                                                <input type='radio' name='age' className=' size-4' ></input>
                                                <p>50 Above</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <p>Marital Status</p>
                                        <div className=' flex w-full gap-4 items-center'>
                                            <input type='radio' name='merriage_status' className=' size-4' ></input>
                                            <p>Unmarried</p>
                                            <input type='radio' name='merriage_status' className=' size-4' ></input>
                                            <p>Married</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { setIsUserProfile(false) }} className=' cursor-pointer bg-red-700 text-white flex items-center justify-center gap-2 px-3 py-2 rounded-md w-fit ml-auto' >
                                        <p>Save</p>
                                        <Check size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}


export default UserProfileDialog



function InputFildNumber({ label, inputName, notNsc, disable }) {
    return <div className=' w-full flex flex-col gap-1' >
        <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
        <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
        <div className=' flex mt-2 items-center gap-6'>
            <div className=' flex gap-2 items-center' >
                <input type='checkbox' className=' size-4' ></input>
                <p className=' text-red-600 ' >Click to allow offers on Whats App.</p>
            </div>
        </div>
    </div>
}


function InputFild({ label, inputName, same, notNsc, disable }) {
    return <div className=' w-full flex flex-col gap-1' >
        <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
        <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
        {
            same && <div className=' flex gap-2 mt-4 items-center' >
                <input type='checkbox' className=" size-4" ></input>
                <p className=' text-gray-600 text-sm' >Same as phone number</p>
            </div>
        }
    </div>
}