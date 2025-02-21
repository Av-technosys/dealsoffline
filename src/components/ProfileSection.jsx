"use client";
import React from "react";
import TermsAndConditionVendorDetailsDialog from "./dialog/termsAndConditionVendorDetails";
import InputFild from "./inputFild";
import { CameraIcon } from "lucide-react";

export default function ProfileSection() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [userImage, setUserImage] = React.useState(null)
  function handleImageUpload(e) {
    setUserImage(e.target.files[0])
  }
  return <div className=' max-w-6xl px-4 md:mt-12 mx-auto w-full flex flex-col gap-4' >

    <div className=' flex flex-col h-full gap-16 md:gap-20 md:flex-row ' >
      <div className="  h-full flex md:justify-end md:items-end  mt-auto " >
        <div className=' max-w-44 md:max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          {
            userImage ? <img src={URL.createObjectURL(userImage)} className=" h-full rounded-md w-full object-cover" alt="" /> : <p className=' text-center p-4' >Upload your image here</p>
          }
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-red-700 p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          <input onChange={handleImageUpload} type='file' accept='image/*' className=' absolute opacity-0 w-full h-full inset-0' />
        </div>
      </div>
      <div className=" flex flex-col gap-6 md:gap-12" >
        <div className=' flex flex-col gap-4' >
          <p className=' text-3xl md:text-4xl font-medium' >Vendor Details</p>
          <p className=' text-gray-600' >Fill the Details to gain Costumer’s trust</p>
        </div>
        <div className=' flex flex-col gap-3 w-full' >
          <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-2' >
            <InputFild label={"Name"} inputName={"Naveen Sharma"} />
            <InputFild label={"Email ID/ User ID"} inputName={"naveensharma@gmail.com"} />
            <InputFildNumber label={"Phone Number"} inputName={"91-9012345678"} />
            <InputFild label={"WhatsApp Number"} inputName={"91-9012345678"} same={true} />
          </div>
          <div className=" mt-3" >
            <TermsAndConditionVendorDetailsDialog isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>

        </div>
      </div>
    </div>
  </div>
}


function InputFildNumber({ label, inputName, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`font-semibold`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
    <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
    <div className=' flex mt-4 items-center gap-6'>
      <div className=' flex gap-2 items-center' >
        <input type='checkbox' className=' size-4' ></input>
        <p className=' text-gray-600 ' >Active</p>
      </div>
      <div className=' flex gap-2 items-center' >
        <input type='checkbox' className=' size-4' ></input>
        <p className=' text-gray-600 ' >Verified</p>
      </div>
    </div>
  </div>
}