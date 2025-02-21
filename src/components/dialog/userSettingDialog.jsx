import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import UserNavBar from '@/app/user-dashbord/navbar';
import { CameraIcon, Check, X } from 'lucide-react';

const UserSettingDialog = ({ isOpen, setIsUserNotification, setIsUserProfile, setIsUserSetting }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className={"max-w-5xl w-full max-h-[70vh] overflow-y-auto"} >
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                <DialogTitle className=" ml-auto" >
                        <X className=' ml-auto cursor-pointer' size={24} color='#4b5563' onClick={() => { setIsUserSetting(false) }} />
                    </DialogTitle>
                    <div className=' w-full' >
                    <UserNavBar setIsUserNotification={setIsUserNotification} setIsUserProfile={setIsUserProfile} setIsUserSetting={setIsUserSetting} path={"setting"} />
                    <div className=' max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
                            <div className=' w-full h-96 bg-gray-200 rounded-lg' ></div>
                        </div>


                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}


export default UserSettingDialog
