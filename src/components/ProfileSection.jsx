import InputFild from "./inputFild";
import { CameraIcon } from "lucide-react";

export default function ProfileSection() {
  return <div className=' max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >

    <div className=' flex flex-col h-full gap-20 md:flex-row ' >
      <div className="  h-full flex md:justify-end md:items-end  mt-auto " >
        <div className=' max-w-60 w-full relative items-center justify-center p-4 aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-black p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          <p>Upload your image here</p>
        </div>
      </div>
      <div className=" flex flex-col gap-12" >
        <div className=' flex flex-col gap-4' >
          <p className=' text-3xl md:text-4xl font-medium' >Vendor Details</p>
          <p className=' text-gray-600' >Fill the Details to gain Costumer’s trust</p>
        </div>
        <div className=' flex flex-col gap-2 w-full' >
          <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-2' >
            <InputFild label={"Name"} inputName={"Naveen Sharma"} />
            <InputFild label={"Email ID/ User ID"} inputName={"naveensharma@gmail.com"} />
            <InputFildNumber label={"Phone Number"} inputName={"91-9012345678"} />
            <InputFild label={"WhatsApp Number"} inputName={"91-9012345678"} same={true} />
          </div>

        </div>
      </div>
    </div>
  </div>
}


function InputFildNumber({ label, inputName, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
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